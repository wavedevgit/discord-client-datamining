package com.appsflyer.internal;

import android.os.Build;
import com.appsflyer.AppsFlyerProperties;
import com.appsflyer.attribution.AppsFlyerRequestListener;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class AFe1gSDK extends AFe1eSDK<String> {
    @NotNull
    private final AFe1mSDK areAllFieldsValid;
    @NotNull
    private final Map<String, Object> copy;
    @NotNull
    private final AFc1pSDK copydefault;
    @NotNull
    private final AFc1oSDK equals;
    @NotNull
    private final AFf1gSDK hashCode;
    @NotNull
    private final AFg1rSDK toString;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AFe1gSDK(@NotNull AFe1mSDK aFe1mSDK, @NotNull AFe1mSDK[] aFe1mSDKArr, @NotNull AFc1bSDK aFc1bSDK, String str, @NotNull Map<String, ? extends Object> map) {
        super(aFe1mSDK, aFe1mSDKArr, aFc1bSDK, null);
        Intrinsics.checkNotNullParameter(aFe1mSDK, "");
        Intrinsics.checkNotNullParameter(aFe1mSDKArr, "");
        Intrinsics.checkNotNullParameter(aFc1bSDK, "");
        Intrinsics.checkNotNullParameter(map, "");
        this.areAllFieldsValid = aFe1mSDK;
        this.copy = map;
        AFc1pSDK currencyIso4217Code = aFc1bSDK.getCurrencyIso4217Code();
        Intrinsics.checkNotNullExpressionValue(currencyIso4217Code, "");
        this.copydefault = currencyIso4217Code;
        AFc1oSDK component2 = aFc1bSDK.component2();
        Intrinsics.checkNotNullExpressionValue(component2, "");
        this.equals = component2;
        AFg1rSDK component4 = aFc1bSDK.component4();
        Intrinsics.checkNotNullExpressionValue(component4, "");
        this.toString = component4;
        AFf1gSDK force = aFc1bSDK.force();
        Intrinsics.checkNotNullExpressionValue(force, "");
        this.hashCode = force;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected final AppsFlyerRequestListener areAllFieldsValid() {
        return null;
    }

    protected boolean component2() {
        return false;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected final boolean copydefault() {
        return true;
    }

    public abstract AFd1jSDK<String> getMediationNetwork(@NotNull Map<String, Object> map, @NotNull String str, String str2);

    protected String getMediationNetwork(@NotNull Map<String, Object> map) {
        Intrinsics.checkNotNullParameter(map, "");
        return null;
    }

    protected String getMonetizationNetwork(@NotNull Map<String, Object> map) {
        Intrinsics.checkNotNullParameter(map, "");
        return null;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected final AFd1jSDK<String> getRevenue(@NotNull String str) {
        String str2;
        String str3;
        AFd1dSDK aFd1dSDK;
        Intrinsics.checkNotNullParameter(str, "");
        Map<String, Object> y10 = o0.y(this.copy);
        String mediationNetwork = getMediationNetwork(y10);
        String monetizationNetwork = getMonetizationNetwork(y10);
        Map<String, Object> y11 = o0.y(y10);
        getMediationNetwork(y11, mediationNetwork);
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        String component4 = this.copydefault.component4();
        if (component4 != null && !StringsKt.k0(component4)) {
            linkedHashMap.put("advertising_id", component4);
        }
        AFb1mSDK currencyIso4217Code = AFb1kSDK.getCurrencyIso4217Code(this.copydefault.getRevenue.getRevenue);
        String str4 = null;
        if (currencyIso4217Code != null) {
            str2 = currencyIso4217Code.getCurrencyIso4217Code;
        } else {
            str2 = null;
        }
        if (str2 != null && !StringsKt.k0(str2)) {
            linkedHashMap.put("oaid", str2);
        }
        AFb1mSDK l_ = AFb1kSDK.l_(this.copydefault.getRevenue.getRevenue.getContentResolver());
        if (l_ != null) {
            str3 = l_.getCurrencyIso4217Code;
        } else {
            str3 = null;
        }
        if (str3 != null && !StringsKt.k0(str3)) {
            linkedHashMap.put("amazon_aid", str3);
        }
        if (!AppsFlyerProperties.getInstance().getBoolean(AppsFlyerProperties.DEVICE_TRACKING_DISABLED, false)) {
            String mediationNetwork2 = ((AFe1eSDK) this).component2.getMediationNetwork(this.equals);
            if (mediationNetwork2 != null && !StringsKt.k0(mediationNetwork2)) {
                linkedHashMap.put("imei", mediationNetwork2);
            }
        } else {
            y11.put(AppsFlyerProperties.DEVICE_TRACKING_DISABLED, "true");
        }
        String revenue = AFb1jSDK.getRevenue(this.copydefault.getMonetizationNetwork);
        if (revenue == null) {
            revenue = "";
        }
        linkedHashMap.put("appsflyer_id", revenue);
        linkedHashMap.put("os_version", String.valueOf(Build.VERSION.SDK_INT));
        linkedHashMap.put("sdk_version", "6.17.3");
        if (monetizationNetwork != null && !StringsKt.k0(monetizationNetwork)) {
            linkedHashMap.put("sdk_connector_version", monetizationNetwork);
        }
        this.toString.getMonetizationNetwork(linkedHashMap, this.areAllFieldsValid);
        y11.put("device_data", linkedHashMap);
        this.hashCode.getMediationNetwork(y11, this.areAllFieldsValid);
        AFd1jSDK<String> mediationNetwork3 = getMediationNetwork(y11, str, mediationNetwork);
        if (mediationNetwork3 != null && (aFd1dSDK = mediationNetwork3.getRevenue) != null) {
            str4 = aFd1dSDK.getRevenue;
        }
        if (str4 != null) {
            JSONObject jSONObject = new JSONObject(y11);
            AFg1bSDK.getMediationNetwork(toString() + ": preparing data: ", jSONObject);
            AFd1mSDK aFd1mSDK = this.component4;
            String jSONObject2 = jSONObject.toString();
            Intrinsics.checkNotNullExpressionValue(jSONObject2, "");
            aFd1mSDK.getMonetizationNetwork(str4, jSONObject2);
        }
        return mediationNetwork3;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void getMediationNetwork(@NotNull Map<String, Object> map, String str) {
        Intrinsics.checkNotNullParameter(map, "");
        map.put("app_id", this.copydefault.getRevenue.getRevenue.getPackageName());
        String revenue = AFc1pSDK.getRevenue();
        if (revenue != null) {
            map.put("cuid", revenue);
        }
        map.put("app_version_name", this.copydefault.n_().versionName);
        if (component2()) {
            map.put("event_timestamp", Long.valueOf(this.toString.getCurrencyIso4217Code()));
        }
        if (str != null) {
            map.put("billing_lib_version", str);
        }
    }
}
