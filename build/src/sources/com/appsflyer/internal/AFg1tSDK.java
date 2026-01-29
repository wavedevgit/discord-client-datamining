package com.appsflyer.internal;

import android.content.Context;
import android.content.Intent;
import androidx.annotation.NonNull;
import com.appsflyer.AFLogger;
import com.appsflyer.AppsFlyerLib;
import com.appsflyer.AppsFlyerProperties;
import com.appsflyer.FirebaseMessagingServiceListener;
import com.google.firebase.messaging.FirebaseMessagingService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFg1tSDK {
    public final AFc1oSDK getMonetizationNetwork;

    public AFg1tSDK(@NonNull Context context) {
        AFa1uSDK monetizationNetwork = AFa1uSDK.getMonetizationNetwork();
        this.getMonetizationNetwork = (AFc1oSDK) AFa1uSDK.getRevenue(new Object[]{monetizationNetwork, context}, -1595266545, 1595266567, System.identityHashCode(monetizationNetwork));
    }

    public static boolean getCurrencyIso4217Code(@NonNull AFc1oSDK aFc1oSDK) {
        return aFc1oSDK.getMediationNetwork("sentRegisterRequestToAF", false);
    }

    public static boolean getMediationNetwork(Context context) {
        if (AppsFlyerLib.getInstance().isStopped()) {
            return false;
        }
        try {
            String str = FirebaseMessagingService.ACTION_DIRECT_BOOT_REMOTE_INTENT;
        } catch (ClassNotFoundException unused) {
        } catch (Throwable th2) {
            AFLogger.INSTANCE.e(AFg1cSDK.UNINSTALL, "An error occurred while trying to verify manifest declarations: ", th2);
        }
        if (!AFj1iSDK.L_(context, new Intent("com.google.firebase.MESSAGING_EVENT", null, context, FirebaseMessagingServiceListener.class))) {
            return false;
        }
        return true;
    }

    public final AFf1aSDK getRevenue() {
        String string;
        String string2;
        String monetizationNetwork = this.getMonetizationNetwork.getMonetizationNetwork("afUninstallToken", null);
        long currencyIso4217Code = this.getMonetizationNetwork.getCurrencyIso4217Code("afUninstallToken_received_time", 0L);
        boolean mediationNetwork = this.getMonetizationNetwork.getMediationNetwork("afUninstallToken_queued", false);
        this.getMonetizationNetwork.getCurrencyIso4217Code("afUninstallToken_queued", false);
        if (monetizationNetwork == null && (string2 = AppsFlyerProperties.getInstance().getString("afUninstallToken")) != null) {
            String[] split = string2.split(",");
            monetizationNetwork = split[split.length - 1];
        }
        if (currencyIso4217Code == 0 && (string = AppsFlyerProperties.getInstance().getString("afUninstallToken")) != null) {
            String[] split2 = string.split(",");
            if (split2.length >= 2) {
                try {
                    currencyIso4217Code = Long.parseLong(split2[split2.length - 2]);
                } catch (NumberFormatException unused) {
                }
            }
        }
        if (monetizationNetwork == null) {
            return null;
        }
        return new AFf1aSDK(monetizationNetwork, currencyIso4217Code, mediationNetwork);
    }
}
