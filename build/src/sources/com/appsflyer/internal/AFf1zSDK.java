package com.appsflyer.internal;

import com.appsflyer.AFPurchaseDetails;
import com.appsflyer.AFPurchaseType;
import com.appsflyer.AppsFlyerInAppPurchaseValidationCallback;
import com.appsflyer.AppsFlyerProperties;
import com.appsflyer.internal.components.network.http.ResponseNetwork;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010%\n\u0002\u0010\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0011\b\u0007\u0018\u00002\u00020\u0001:\u0001*BK\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0014\u0010\n\u001a\u0010\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u000b\u0012\b\b\u0002\u0010\u000e\u001a\u00020\r¢\u0006\u0004\b\u000f\u0010\u0010J/\u0010\u0014\u001a\u00020\u00132\u0014\u0010\u0003\u001a\u0010\u0012\u0004\u0012\u00020\t\u0012\u0006\u0012\u0004\u0018\u00010\u00120\u00112\b\u0010\u0005\u001a\u0004\u0018\u00010\tH\u0014¢\u0006\u0004\b\u0014\u0010\u0015JC\u0010\u0014\u001a\u000e\u0012\b\u0012\u0006*\u00020\t0\t\u0018\u00010\u00162\u0014\u0010\u0003\u001a\u0010\u0012\u0004\u0012\u00020\t\u0012\u0006\u0012\u0004\u0018\u00010\u00120\u00112\u0006\u0010\u0005\u001a\u00020\t2\b\u0010\u0007\u001a\u0004\u0018\u00010\tH\u0017¢\u0006\u0004\b\u0014\u0010\u0017J%\u0010\u0014\u001a\u00020\t2\u0014\u0010\u0003\u001a\u0010\u0012\u0004\u0012\u00020\t\u0012\u0006\u0012\u0004\u0018\u00010\u00120\u0011H\u0015¢\u0006\u0004\b\u0014\u0010\u0018J\u001f\u0010\u001a\u001a\u00020\u00132\u0006\u0010\u0003\u001a\u00020\t2\u0006\u0010\u0005\u001a\u00020\u0019H\u0002¢\u0006\u0004\b\u001a\u0010\u001bJ\u000f\u0010\u001c\u001a\u00020\u0013H\u0014¢\u0006\u0004\b\u001c\u0010\u001dR\"\u0010\u001a\u001a\u0010\u0012\u0004\u0012\u00020\t\u0012\u0004\u0012\u00020\t\u0018\u00010\b8\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u001fR\u0014\u0010\"\u001a\u00020\r8\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b \u0010!R\u0016\u0010\u001c\u001a\u0004\u0018\u00010\u000b8\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b#\u0010$R\u0014\u0010\u0014\u001a\u00020\u00048\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b%\u0010&R\u0014\u0010)\u001a\u00020\u00068\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b'\u0010("}, d2 = {"Lcom/appsflyer/internal/AFf1zSDK;", "Lcom/appsflyer/internal/AFe1gSDK;", "Lcom/appsflyer/internal/AFc1bSDK;", "p0", "Lcom/appsflyer/AppsFlyerProperties;", "p1", "Lcom/appsflyer/AFPurchaseDetails;", "p2", "", "", "p3", "Lcom/appsflyer/AppsFlyerInAppPurchaseValidationCallback;", "p4", "Lcom/appsflyer/internal/AFj1jSDK;", "p5", "<init>", "(Lcom/appsflyer/internal/AFc1bSDK;Lcom/appsflyer/AppsFlyerProperties;Lcom/appsflyer/AFPurchaseDetails;Ljava/util/Map;Lcom/appsflyer/AppsFlyerInAppPurchaseValidationCallback;Lcom/appsflyer/internal/AFj1jSDK;)V", "", "", "", "getMediationNetwork", "(Ljava/util/Map;Ljava/lang/String;)V", "Lcom/appsflyer/internal/AFd1jSDK;", "(Ljava/util/Map;Ljava/lang/String;Ljava/lang/String;)Lcom/appsflyer/internal/AFd1jSDK;", "(Ljava/util/Map;)Ljava/lang/String;", "", "getCurrencyIso4217Code", "(Ljava/lang/String;I)V", "getRevenue", "()V", "copydefault", "Ljava/util/Map;", "hashCode", "Lcom/appsflyer/internal/AFj1jSDK;", "AFAdRevenueData", "copy", "Lcom/appsflyer/AppsFlyerInAppPurchaseValidationCallback;", "areAllFieldsValid", "Lcom/appsflyer/AppsFlyerProperties;", "toString", "Lcom/appsflyer/AFPurchaseDetails;", "getMonetizationNetwork", "AFa1vSDK"}, k = 1, mv = {1, 8, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nManualValidationTask.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ManualValidationTask.kt\ncom/appsflyer/internal/components/queue/tasks/ManualValidationTask\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,156:1\n1747#2,3:157\n*S KotlinDebug\n*F\n+ 1 ManualValidationTask.kt\ncom/appsflyer/internal/components/queue/tasks/ManualValidationTask\n*L\n98#1:157,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFf1zSDK extends AFe1gSDK {
    @NotNull
    private final AppsFlyerProperties areAllFieldsValid;
    private final AppsFlyerInAppPurchaseValidationCallback copy;
    private final Map<String, String> copydefault;
    @NotNull
    private final AFj1jSDK hashCode;
    @NotNull
    private final AFPurchaseDetails toString;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class AFa1tSDK {
        public static final /* synthetic */ int[] getMediationNetwork;

        static {
            int[] iArr = new int[AFPurchaseType.values().length];
            try {
                iArr[AFPurchaseType.SUBSCRIPTION.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[AFPurchaseType.ONE_TIME_PURCHASE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            getMediationNetwork = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AFa1vSDK extends RuntimeException {
    }

    public /* synthetic */ AFf1zSDK(AFc1bSDK aFc1bSDK, AppsFlyerProperties appsFlyerProperties, AFPurchaseDetails aFPurchaseDetails, Map map, AppsFlyerInAppPurchaseValidationCallback appsFlyerInAppPurchaseValidationCallback, AFj1jSDK aFj1jSDK, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(aFc1bSDK, appsFlyerProperties, aFPurchaseDetails, map, appsFlyerInAppPurchaseValidationCallback, (i10 & 32) != 0 ? new AFj1gSDK() : aFj1jSDK);
    }

    private final void getCurrencyIso4217Code(String str, int i10) {
        AppsFlyerInAppPurchaseValidationCallback appsFlyerInAppPurchaseValidationCallback = this.copy;
        if (appsFlyerInAppPurchaseValidationCallback != null) {
            appsFlyerInAppPurchaseValidationCallback.onInAppPurchaseValidationError(o0.m(ir.v.a("error_code", Integer.valueOf(i10)), ir.v.a("error_message", str)));
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.appsflyer.internal.AFe1gSDK
    public final void getMediationNetwork(@NotNull Map<String, Object> map, String str) {
        Map<String, Object> i10;
        Intrinsics.checkNotNullParameter(map, "");
        super.getMediationNetwork(map, str);
        List<String> o10 = CollectionsKt.o(this.toString.getPurchaseToken(), this.toString.getProductId());
        if (!(o10 instanceof Collection) || !o10.isEmpty()) {
            for (String str2 : o10) {
                if (str2.length() == 0) {
                    throw new AFa1vSDK();
                }
            }
        }
        map.put("purchase_token", this.toString.getPurchaseToken());
        map.put("product_id", this.toString.getProductId());
        map.put("purchase_type", this.toString.getPurchaseType().getValue());
        Map<String, String> map2 = this.copydefault;
        if (map2 != null && !map2.isEmpty()) {
            map.put("purchase_additional_details", this.copydefault);
        }
        String string = this.areAllFieldsValid.getString(AppsFlyerProperties.ADDITIONAL_CUSTOM_DATA);
        if (string != null && string.length() != 0) {
            i10 = AFj1cSDK.getRevenue(new JSONObject(string));
        } else {
            i10 = o0.i();
        }
        map.put("custom_data", i10);
    }

    @Override // com.appsflyer.internal.AFe1eSDK, com.appsflyer.internal.AFe1lSDK
    public final void getRevenue() {
        Object b10;
        Unit unit;
        super.getRevenue();
        Throwable component1 = component1();
        if (component1 != null && !(component1 instanceof AFe1iSDK)) {
            if (component1 instanceof AFe1pSDK) {
                getCurrencyIso4217Code("No dev key", -1);
            } else if (component1 instanceof AFa1vSDK) {
                getCurrencyIso4217Code("One or more of provided arguments is empty", -1);
            } else {
                getCurrencyIso4217Code("Error while sending request to server", -1);
            }
        }
        ResponseNetwork responseNetwork = ((AFe1eSDK) this).component3;
        if (responseNetwork != null) {
            if (responseNetwork.getStatusCode() == 200) {
                try {
                    Result.a aVar = Result.f33295e;
                    AppsFlyerInAppPurchaseValidationCallback appsFlyerInAppPurchaseValidationCallback = this.copy;
                    if (appsFlyerInAppPurchaseValidationCallback != null) {
                        appsFlyerInAppPurchaseValidationCallback.onInAppPurchaseValidationFinished(AFj1cSDK.getRevenue(new JSONObject((String) responseNetwork.getBody())));
                        unit = Unit.f33298a;
                    } else {
                        unit = null;
                    }
                    b10 = Result.b(unit);
                } catch (Throwable th2) {
                    Result.a aVar2 = Result.f33295e;
                    b10 = Result.b(kotlin.c.a(th2));
                }
                if (Result.e(b10) != null) {
                    getCurrencyIso4217Code("Error while trying to parse JSON response", responseNetwork.getStatusCode());
                }
                Result.a(b10);
                return;
            }
            AppsFlyerInAppPurchaseValidationCallback appsFlyerInAppPurchaseValidationCallback2 = this.copy;
            if (appsFlyerInAppPurchaseValidationCallback2 != null) {
                appsFlyerInAppPurchaseValidationCallback2.onInAppPurchaseValidationError(o0.m(ir.v.a("error_code", Integer.valueOf(responseNetwork.getStatusCode())), ir.v.a("error_message", responseNetwork.getBody())));
            }
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private AFf1zSDK(@NotNull AFc1bSDK aFc1bSDK, @NotNull AppsFlyerProperties appsFlyerProperties, @NotNull AFPurchaseDetails aFPurchaseDetails, Map<String, String> map, AppsFlyerInAppPurchaseValidationCallback appsFlyerInAppPurchaseValidationCallback, @NotNull AFj1jSDK aFj1jSDK) {
        super(AFe1mSDK.MANUAL_PURCHASE_VALIDATION, new AFe1mSDK[]{AFe1mSDK.RC_CDN, AFe1mSDK.FETCH_ADVERTISING_ID}, aFc1bSDK, null, o0.i());
        Intrinsics.checkNotNullParameter(aFc1bSDK, "");
        Intrinsics.checkNotNullParameter(appsFlyerProperties, "");
        Intrinsics.checkNotNullParameter(aFPurchaseDetails, "");
        Intrinsics.checkNotNullParameter(aFj1jSDK, "");
        this.areAllFieldsValid = appsFlyerProperties;
        this.toString = aFPurchaseDetails;
        this.copydefault = map;
        this.copy = appsFlyerInAppPurchaseValidationCallback;
        this.hashCode = aFj1jSDK;
        this.getRevenue.add(AFe1mSDK.CONVERSION);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public AFf1zSDK(@NotNull AFc1bSDK aFc1bSDK, @NotNull AppsFlyerProperties appsFlyerProperties, @NotNull AFPurchaseDetails aFPurchaseDetails, Map<String, String> map, AppsFlyerInAppPurchaseValidationCallback appsFlyerInAppPurchaseValidationCallback) {
        this(aFc1bSDK, appsFlyerProperties, aFPurchaseDetails, map, appsFlyerInAppPurchaseValidationCallback, null, 32, null);
        Intrinsics.checkNotNullParameter(aFc1bSDK, "");
        Intrinsics.checkNotNullParameter(appsFlyerProperties, "");
        Intrinsics.checkNotNullParameter(aFPurchaseDetails, "");
    }

    @Override // com.appsflyer.internal.AFe1gSDK
    @NotNull
    protected final String getMediationNetwork(@NotNull Map<String, Object> map) {
        Intrinsics.checkNotNullParameter(map, "");
        return this.hashCode.getRevenue();
    }

    @Override // com.appsflyer.internal.AFe1gSDK
    public final AFd1jSDK<String> getMediationNetwork(@NotNull Map<String, Object> map, @NotNull String str, String str2) {
        Intrinsics.checkNotNullParameter(map, "");
        Intrinsics.checkNotNullParameter(str, "");
        int i10 = AFa1tSDK.getMediationNetwork[this.toString.getPurchaseType().ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return ((AFe1eSDK) this).component1.getRevenue(map, str);
            }
            throw new ir.p();
        }
        return ((AFe1eSDK) this).component1.getCurrencyIso4217Code(map, str);
    }
}
