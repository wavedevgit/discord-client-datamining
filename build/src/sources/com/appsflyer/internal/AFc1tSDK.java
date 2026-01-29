package com.appsflyer.internal;

import android.util.Base64;
import com.appsflyer.AFLogger;
import java.util.Arrays;
import java.util.Scanner;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFc1tSDK {
    public AFe1mSDK AFAdRevenueData;
    public String getCurrencyIso4217Code;
    public String getMediationNetwork;
    private byte[] getMonetizationNetwork;
    String getRevenue;

    public AFc1tSDK(String str, byte[] bArr, String str2, AFe1mSDK aFe1mSDK) {
        this.getCurrencyIso4217Code = str;
        this.getMonetizationNetwork = bArr;
        this.getRevenue = str2;
        this.AFAdRevenueData = aFe1mSDK;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && AFc1tSDK.class == obj.getClass()) {
            AFc1tSDK aFc1tSDK = (AFc1tSDK) obj;
            String str = this.getRevenue;
            if (str == null ? aFc1tSDK.getRevenue != null : !str.equals(aFc1tSDK.getRevenue)) {
                return false;
            }
            if (!Arrays.equals(this.getMonetizationNetwork, aFc1tSDK.getMonetizationNetwork)) {
                return false;
            }
            String str2 = this.getCurrencyIso4217Code;
            if (str2 == null ? aFc1tSDK.getCurrencyIso4217Code != null : !str2.equals(aFc1tSDK.getCurrencyIso4217Code)) {
                return false;
            }
            String str3 = this.getMediationNetwork;
            if (str3 == null ? aFc1tSDK.getMediationNetwork != null : !str3.equals(aFc1tSDK.getMediationNetwork)) {
                return false;
            }
            if (this.AFAdRevenueData == aFc1tSDK.AFAdRevenueData) {
                return true;
            }
        }
        return false;
    }

    public final byte[] getMonetizationNetwork() {
        return this.getMonetizationNetwork;
    }

    public final int hashCode() {
        int i10;
        int i11;
        int i12;
        String str = this.getRevenue;
        int i13 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int hashCode = ((i10 * 31) + Arrays.hashCode(this.getMonetizationNetwork)) * 31;
        String str2 = this.getCurrencyIso4217Code;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i14 = (hashCode + i11) * 31;
        String str3 = this.getMediationNetwork;
        if (str3 != null) {
            i12 = str3.hashCode();
        } else {
            i12 = 0;
        }
        int i15 = (i14 + i12) * 31;
        AFe1mSDK aFe1mSDK = this.AFAdRevenueData;
        if (aFe1mSDK != null) {
            i13 = aFe1mSDK.hashCode();
        }
        return i15 + i13;
    }

    public AFc1tSDK(char[] cArr) {
        Scanner scanner = new Scanner(new String(cArr));
        while (scanner.hasNextLine()) {
            String nextLine = scanner.nextLine();
            if (nextLine.startsWith("url=")) {
                this.getCurrencyIso4217Code = nextLine.substring(4).trim();
            } else if (nextLine.startsWith("version=")) {
                this.getRevenue = nextLine.substring(8).trim();
            } else if (nextLine.startsWith("data=")) {
                this.getMonetizationNetwork = Base64.decode(nextLine.substring(5).trim(), 2);
            } else if (nextLine.startsWith("type=")) {
                String trim = nextLine.substring(5).trim();
                try {
                    this.AFAdRevenueData = AFe1mSDK.valueOf(trim);
                } catch (Exception e10) {
                    AFLogger.afErrorLog("CACHE: Unknown task type: ".concat(String.valueOf(trim)), e10);
                }
            }
        }
        scanner.close();
    }
}
