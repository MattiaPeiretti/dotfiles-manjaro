var VaultDeviceLimitDialog=function(e){Dialog.call(this,e,{additionalHeaderClasses:[],dynamicHeight:!0,buttonsInsideContent:!0,closeButtonEnabled:!1,hidePreviousDialogs:!0,overlayDialog:!0,blurOverlay:!0})};VaultDeviceLimitDialog.prototype=Object.create(Dialog.prototype),(VaultDeviceLimitDialog.prototype.constructor=VaultDeviceLimitDialog).prototype.initialize=function(e){Dialog.prototype.initialize.apply(this,arguments),function(t){if("/acctsiframe.php"!==location.pathname){var i=document.querySelector("#vaultDeviceLimitDialog .media__figure img"),n=document.querySelector("#vaultDeviceLimitDialog .message"),s=document.querySelector("#vaultDeviceLimitDialog .title"),r=document.getElementById("switchingYourDeviceLink"),a=document.getElementById("lastPassPremiumLink"),o=document.getElementById("setDevice"),c=document.getElementById("paywallUpgradeButton"),l=Number(bg.get("g_primary_device_switches_left")),m="Vault Pop Up",u="Desktop",e=function(){var e="LPRestrictedNotificationSuccessMessage",t;2<l&&(t=Strings.translateString("You switched to computer: %s switches left",l-1)),2===l&&(t=Strings.translateString("You switched to computer: 1 switch left")),1===l&&(t=Strings.translateString("You made the final switch to computer"));try{t&&localStorage.setItem(e,t)}catch(e){}},g=function(){1===l?bg.sendLpImprove("mdpw_last_switch_confirmation_clicked",{Action:"Confirm",CurrentDevice:u,Source:m}):bg.sendLpImprove("mdpw_paywall_clicked",{Action:"Switch",CurrentDevice:u,Source:m,SwitchesLeft:l}),document.getElementById("spinner").classList.remove("is-hidden"),bg.setPrimaryDevice(function(){LPProxy.refreshSites(),e(),location.reload()},function(){document.getElementById("spinner").classList.add("is-hidden"),t.close(),Notifications.displayErrorMessage(Strings.translateString("Something went wrong. We couldn’t switch your device type. Please try again."))})},d=new Date(2021,4,6,23,59,59,0).getTime()>(new Date).getTime(),p=function(){var e;e=d?LPProxy.getBaseURL()+"buy-premium?cp=LPP2021-DT-25Sw":LPProxy.getBaseURL()+"premium/payment",bg.sendLpImprove("mdpw_paywall_clicked",{Action:"Go Premium",CurrentDevice:u,Source:m,SwitchesLeft:l}),LPPlatform.openURL(e)},y=function(){bg.sendLpImprove("mdpw_paywall_clicked",{Action:"Dismiss",CurrentDevice:u,Source:m,SwitchesLeft:l}),t.close(),v(l),bg.get("g_display_premium_retrial_offer")&&setTimeout(function(){dialogs.reTrialDialog.open()},1500)};r.style.display="block",a.style.display="none",c.innerText=d?Strings.translateString("Go Premium for only $2.25/month"):Strings.translateString("Go Premium for only $3/month"),c.addEventListener("click",p),o.innerText=Strings.translateString("Switch to computer"),o.addEventListener("click",g),document.getElementById("closeDialog").addEventListener("click",y);var h=function(){v(-1)},v=function(e){switch(e){case 0:s.innerText=Strings.translateString("%s device switches left",0),n.innerHTML=Strings.translateString("%sGo Premium%s for unlimited access on both mobile and computer.","<span>","</span>"),i.src="images/vault_4.0/paywall/switch-device-icon-red-light.png",a.style.display="block",r.style.display="none",c.innerText=Strings.translateString("Cancel"),o.innerText=d?Strings.translateString("Go Premium for only $2.25/month"):Strings.translateString("Go Premium for only $3/month"),c.removeEventListener("click",p),c.addEventListener("click",y),o.removeEventListener("click",g),o.addEventListener("click",p);break;case 1:s.innerText=Strings.translateString("1 device switch left"),n.innerHTML=Strings.translateString("Please take a minute to %sthink about how you use LastPass.%s This is your last switch. Go Premium for unlimited access.","<span>","</span>"),i.src="images/vault_4.0/paywall/switch-device-icon-yellow-light.png",o.removeEventListener("click",g),o.addEventListener("click",h);break;case-1:t.close(),setTimeout(function(){t.open()},250),s.innerText=Strings.translateString("Switch to computer only?"),n.innerHTML=Strings.translateString("%sThis is your last opportunity to switch!%s After this switch, you’ll be able to use LastPass for free on computers, but not on mobile devices.","<span>","</span>"),i.src="images/vault_4.0/paywall/switch-illustration.png",o.innerText=Strings.translateString("Yes, make the final switch"),o.removeEventListener("click",h),o.addEventListener("click",g);break;case 2:s.innerText=Strings.translateString("%s device switches left",2),n.innerHTML=Strings.translateString("You can switch your device type %s2 more times%s to find the right option for you. Go Premium for unlimited access.","<span>","</span>"),i.src="images/vault_4.0/paywall/switch-device-icon-blue-light.png";break;default:s.innerText=Strings.translateString("%s device switches left",l),n.innerHTML=Strings.translateString("You can only use LastPass for free on %sone type of device.%s Switch up to %s times to find the right option for you.","<span>","</span>",l),i.src="images/vault_4.0/paywall/switch-device-icon-blue-light.png"}};v(l)}}(this)};