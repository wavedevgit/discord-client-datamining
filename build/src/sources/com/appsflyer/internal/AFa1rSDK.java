package com.appsflyer.internal;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import androidx.annotation.NonNull;
import com.appsflyer.AFLogger;
import com.appsflyer.AppsFlyerConversionListener;
import com.appsflyer.deeplink.DeepLink;
import com.appsflyer.deeplink.DeepLinkListener;
import com.appsflyer.deeplink.DeepLinkResult;
import com.appsflyer.internal.AFe1nSDK;
import com.appsflyer.internal.AFf1vSDK;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFa1rSDK {
    public String[] areAllFieldsValid;
    public final AFc1bSDK component1;
    public long component2;
    public Intent getCurrencyIso4217Code;
    public Map<String, String> getMediationNetwork;
    public String getMonetizationNetwork;
    public DeepLinkListener getRevenue;
    @NonNull
    public List<List<String>> AFAdRevenueData = new ArrayList();
    @NonNull
    public final List<String> component4 = new ArrayList();

    public AFa1rSDK(@NonNull AFc1bSDK aFc1bSDK) {
        this.component1 = aFc1bSDK;
    }

    /* JADX WARN: Removed duplicated region for block: B:62:0x0075 A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean h_(android.content.Intent r10, com.appsflyer.internal.AFa1gSDK r11) {
        /*
            Method dump skipped, instructions count: 330
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1rSDK.h_(android.content.Intent, com.appsflyer.internal.AFa1gSDK):boolean");
    }

    private Uri i_(Object obj, Iterator<String> it) {
        while (obj != JSONObject.NULL) {
            if (!it.hasNext()) {
                Uri parse = Uri.parse(obj.toString());
                if (parse == null || parse.getScheme() == null || parse.getHost() == null) {
                    return null;
                }
                return parse;
            }
            try {
                obj = new JSONObject(obj.toString()).get(it.next());
            } catch (JSONException e10) {
                AFLogger.afErrorLogForExcManagerOnly("recursiveSearch error", e10);
                return null;
            }
        }
        return null;
    }

    public final void f_(AFa1gSDK aFa1gSDK, Intent intent, Context context) {
        AFc1dSDK aFc1dSDK = (AFc1dSDK) this.component1;
        if (context != null) {
            aFc1dSDK.getMonetizationNetwork.getRevenue = context.getApplicationContext();
        }
        if (!h_(intent, aFa1gSDK) && this.getRevenue != null && this.component1.getCurrencyIso4217Code().getMonetizationNetwork.getMediationNetwork("appsFlyerCount", 0) == 0 && !this.component1.component2().getMediationNetwork("ddl_sent", false)) {
            AFa1pSDK aFa1pSDK = new AFa1pSDK();
            AFe1nSDK copydefault = this.component1.copydefault();
            copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(new AFf1wSDK(aFa1pSDK, this.component1)));
        }
        this.component1.component2().getCurrencyIso4217Code("ddl_sent", true);
    }

    public final void g_(AFa1gSDK aFa1gSDK, Uri uri) {
        AFf1xSDK aFf1xSDK = new AFf1xSDK(this, aFa1gSDK, uri, this.component4);
        AFe1nSDK copydefault = this.component1.copydefault();
        copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFf1xSDK));
        this.getCurrencyIso4217Code = null;
    }

    public final void getMediationNetwork(String str, DeepLinkResult.Error error) {
        if (this.getRevenue != null) {
            AFLogger.INSTANCE.d(AFg1cSDK.DDL, "Error occurred: ".concat(String.valueOf(str)));
            getMonetizationNetwork(new DeepLinkResult(null, error));
            return;
        }
        getMediationNetwork(str);
    }

    public final void getMonetizationNetwork(DeepLinkResult deepLinkResult) {
        if (this.getRevenue != null) {
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.DDL;
            StringBuilder sb2 = new StringBuilder("Calling onDeepLinking with:\n");
            sb2.append(deepLinkResult.toString());
            aFLogger.d(aFg1cSDK, sb2.toString());
            try {
                this.getRevenue.onDeepLinking(deepLinkResult);
                return;
            } catch (Throwable th2) {
                AFLogger.afErrorLog(th2.getLocalizedMessage(), th2);
                return;
            }
        }
        AFLogger.INSTANCE.d(AFg1cSDK.DDL, "skipping, no callback registered");
    }

    public final void j_(AFa1gSDK aFa1gSDK, Uri uri, Uri uri2) {
        String substring;
        if (!aFa1gSDK.getCurrencyIso4217Code("af_deeplink")) {
            String obj = uri.toString();
            if (obj == null) {
                obj = null;
            } else if (obj.matches("fb\\d*?://authorize.*") && obj.contains("access_token")) {
                int indexOf = obj.indexOf(63);
                if (indexOf == -1) {
                    substring = "";
                } else {
                    substring = obj.substring(indexOf);
                }
                if (substring.length() != 0) {
                    ArrayList arrayList = new ArrayList();
                    if (substring.contains("&")) {
                        arrayList = new ArrayList(Arrays.asList(substring.split("&")));
                    } else {
                        arrayList.add(substring);
                    }
                    StringBuilder sb2 = new StringBuilder();
                    Iterator it = arrayList.iterator();
                    while (it.hasNext()) {
                        String str = (String) it.next();
                        if (str.contains("access_token")) {
                            it.remove();
                        } else {
                            if (sb2.length() != 0) {
                                sb2.append("&");
                            } else if (!str.startsWith("?")) {
                                sb2.append("?");
                            }
                            sb2.append(str);
                        }
                    }
                    obj = obj.replace(substring, sb2.toString());
                }
            }
            String str2 = this.getMonetizationNetwork;
            if (str2 != null && this.getMediationNetwork != null && obj.contains(str2)) {
                Uri.Builder buildUpon = Uri.parse(obj).buildUpon();
                Uri.Builder buildUpon2 = Uri.EMPTY.buildUpon();
                for (Map.Entry<String, String> entry : this.getMediationNetwork.entrySet()) {
                    buildUpon.appendQueryParameter(entry.getKey(), entry.getValue());
                    buildUpon2.appendQueryParameter(entry.getKey(), entry.getValue());
                }
                obj = buildUpon.build().toString();
                String encodedQuery = buildUpon2.build().getEncodedQuery();
                Intrinsics.checkNotNullParameter("appended_query_params", "");
                aFa1gSDK.AFAdRevenueData.put("appended_query_params", encodedQuery);
                AFa1hSDK aFa1hSDK = aFa1gSDK.getMediationNetwork;
                if (aFa1hSDK != null) {
                    aFa1hSDK.getMonetizationNetwork(aFa1gSDK.AFAdRevenueData);
                }
            }
            Intrinsics.checkNotNullParameter("af_deeplink", "");
            aFa1gSDK.AFAdRevenueData.put("af_deeplink", obj);
            AFa1hSDK aFa1hSDK2 = aFa1gSDK.getMediationNetwork;
            if (aFa1hSDK2 != null) {
                aFa1hSDK2.getMonetizationNetwork(aFa1gSDK.AFAdRevenueData);
            }
        }
        final HashMap hashMap = new HashMap();
        hashMap.put("link", uri.toString());
        if (uri2 != null) {
            hashMap.put("original_link", uri2.toString());
        }
        AFj1iSDK.M_(this.component1.getCurrencyIso4217Code().n_(), hashMap, uri);
        AFf1vSDK aFf1vSDK = new AFf1vSDK(this.component1, UUID.randomUUID(), uri);
        if (aFf1vSDK.copy()) {
            Boolean bool = Boolean.TRUE;
            Intrinsics.checkNotNullParameter("isBrandedDomain", "");
            aFa1gSDK.AFAdRevenueData.put("isBrandedDomain", bool);
            AFa1hSDK aFa1hSDK3 = aFa1gSDK.getMediationNetwork;
            if (aFa1hSDK3 != null) {
                aFa1hSDK3.getMonetizationNetwork(aFa1gSDK.AFAdRevenueData);
            }
        }
        if (aFf1vSDK.equals()) {
            aFf1vSDK.areAllFieldsValid = new AFf1vSDK.AFa1vSDK() { // from class: com.appsflyer.internal.AFa1rSDK.4
                @Override // com.appsflyer.internal.AFf1vSDK.AFa1vSDK
                public final void getCurrencyIso4217Code(Map<String, String> map) {
                    for (String str3 : map.keySet()) {
                        hashMap.put(str3, map.get(str3));
                    }
                    AFa1rSDK.this.getMediationNetwork(hashMap);
                }

                @Override // com.appsflyer.internal.AFf1vSDK.AFa1vSDK
                public final void getMediationNetwork(String str3) {
                    AFa1rSDK.this.getMediationNetwork(str3, DeepLinkResult.Error.NETWORK);
                }
            };
            AFe1nSDK copydefault = this.component1.copydefault();
            copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFf1vSDK));
            return;
        }
        this.component1.i().getMediationNetwork(hashMap);
    }

    public final void getMediationNetwork(Map<String, String> map) {
        if (this.getRevenue != null) {
            try {
                try {
                    DeepLink mediationNetwork = DeepLink.getMediationNetwork(map);
                    mediationNetwork.getCurrencyIso4217Code.put("is_deferred", false);
                    getMonetizationNetwork(new DeepLinkResult(mediationNetwork, null));
                    return;
                } catch (JSONException e10) {
                    AFLogger.INSTANCE.e(AFg1cSDK.DDL, "Error occurred", e10, true);
                    getMonetizationNetwork(new DeepLinkResult(null, DeepLinkResult.Error.UNEXPECTED));
                    return;
                }
            } catch (Throwable th2) {
                getMonetizationNetwork(new DeepLinkResult(null, null));
                throw th2;
            }
        }
        AppsFlyerConversionListener appsFlyerConversionListener = AFa1uSDK.getMonetizationNetwork().getMediationNetwork;
        if (appsFlyerConversionListener != null) {
            try {
                StringBuilder sb2 = new StringBuilder("Calling onAppOpenAttribution with:\n");
                sb2.append(map.toString());
                AFLogger.afDebugLog(sb2.toString());
                appsFlyerConversionListener.onAppOpenAttribution(map);
            } catch (Throwable th3) {
                AFLogger.afErrorLog(th3.getLocalizedMessage(), th3);
            }
        }
    }

    private static void getMediationNetwork(String str) {
        AppsFlyerConversionListener appsFlyerConversionListener = AFa1uSDK.getMonetizationNetwork().getMediationNetwork;
        if (appsFlyerConversionListener != null) {
            try {
                AFLogger.afDebugLog("Calling onAppOpenAttributionFailure with: ".concat(String.valueOf(str)));
                appsFlyerConversionListener.onAttributionFailure(str);
            } catch (Throwable th2) {
                AFLogger.afErrorLog(th2.getLocalizedMessage(), th2);
            }
        }
    }
}
