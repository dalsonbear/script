/*
bilibli auto switch policy. 
Only Surge4.0
By NobyDa

[Script]
BliBli港澳台 = type=http-response,pattern=https:\/\/api\.bilibili\.com\/pgc\/view\/app\/season\?access_key,requires-body=1,max-size=0,control-api=1,timeout=5,script-path=bilibili港澳台.js

[MITM]
hostname = api.bilibili.com
*/

const Group = '📺 DomesticMedia'; //Your policy group.
const TW = '🇹🇼 TaiWan'; //Your Taiwan sub-policy name.
const HK = '🇭🇰 HK - FB'; //Your Hong Kong sub-policy name.

const obj = JSON.parse($response.body).result.title;
const current = $surge.selectGroupDetails().decisions[Group];
const str = (() => {
	if (obj.match(/僅[\u4e00-\u9fa5]+港/)) {
		if (current != HK) return HK;
	} else if (obj.match(/僅[\u4e00-\u9fa5]+台/)) {
		if (current != TW) return TW;
	} else if (current != 'DIRECT') return 'DIRECT';
})()

if (str) {
	const change = $surge.setSelectGroupPolicy(Group, str);
	setTimeout(() => {
		$notification.post(obj, ``, `${current}  =>  ${str}  =>  ${change?`🟢`:`🔴`}`);
		$done({});
	}, 300);
} else {
	$done({});
}