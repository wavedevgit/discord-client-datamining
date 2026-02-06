package com.appsflyer.internal;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.StrictMode;
import android.text.TextUtils;
import android.view.MotionEvent;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import com.appsflyer.AFAdRevenueData;
import com.appsflyer.AFInAppEventParameterName;
import com.appsflyer.AFInAppEventType;
import com.appsflyer.AFLogger;
import com.appsflyer.AFPurchaseDetails;
import com.appsflyer.AppsFlyerConsent;
import com.appsflyer.AppsFlyerConversionListener;
import com.appsflyer.AppsFlyerInAppPurchaseValidationCallback;
import com.appsflyer.AppsFlyerInAppPurchaseValidatorListener;
import com.appsflyer.AppsFlyerLib;
import com.appsflyer.AppsFlyerProperties;
import com.appsflyer.PurchaseHandler;
import com.appsflyer.attribution.AppsFlyerRequestListener;
import com.appsflyer.deeplink.DeepLinkListener;
import com.appsflyer.deeplink.DeepLinkResult;
import com.appsflyer.internal.AFa1uSDK;
import com.appsflyer.internal.AFb1aSDK;
import com.appsflyer.internal.AFd1xSDK;
import com.appsflyer.internal.AFe1nSDK;
import com.appsflyer.internal.AFj1qSDK;
import com.appsflyer.internal.components.network.http.ResponseNetwork;
import com.appsflyer.internal.platform_extension.PluginInfo;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import j$.util.DesugarTimeZone;
import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFa1uSDK extends AppsFlyerLib {
    private static int $10 = 0;
    private static int $11 = 1;
    public static final String AFAdRevenueData;
    private static char[] AFInAppEventParameterName = null;
    private static int AFInAppEventType = 0;
    private static int AFKeystoreWrapper = 0;
    private static boolean AFLogger = false;
    private static AFa1uSDK areAllFieldsValid = null;

    /* renamed from: d  reason: collision with root package name */
    private static int f8128d = 1;
    static AppsFlyerInAppPurchaseValidatorListener getCurrencyIso4217Code;
    public static final String getRevenue;
    private static boolean registerClient;
    Application component3;
    private volatile SharedPreferences copy;
    private Map<Long, String> copydefault;
    private AFf1nSDK equals;
    private boolean toString;
    public volatile AppsFlyerConversionListener getMediationNetwork = null;
    private long component4 = -1;
    long getMonetizationNetwork = -1;
    private long component2 = TimeUnit.SECONDS.toMillis(5);
    boolean component1 = false;
    @NonNull
    private final AFc1dSDK hashCode = new AFc1dSDK();

    /* renamed from: com.appsflyer.internal.AFa1uSDK$2  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class AnonymousClass2 {
        static final /* synthetic */ int[] getRevenue;

        static {
            int[] iArr = new int[AppsFlyerProperties.EmailsCryptType.values().length];
            getRevenue = iArr;
            try {
                iArr[AppsFlyerProperties.EmailsCryptType.SHA256.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                getRevenue[AppsFlyerProperties.EmailsCryptType.NONE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.appsflyer.internal.AFa1uSDK$AFa1uSDK  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0135AFa1uSDK implements AFe1sSDK {
        C0135AFa1uSDK() {
        }

        @Override // com.appsflyer.internal.AFe1sSDK
        public final void getMediationNetwork(AFe1lSDK<?> aFe1lSDK) {
        }

        @Override // com.appsflyer.internal.AFe1sSDK
        public final void getMonetizationNetwork(AFe1lSDK<?> aFe1lSDK, AFe1uSDK aFe1uSDK) {
            JSONObject AFAdRevenueData;
            AFf1aSDK revenue;
            if (aFe1lSDK instanceof AFf1uSDK) {
                AFf1uSDK aFf1uSDK = (AFf1uSDK) aFe1lSDK;
                boolean z10 = aFe1lSDK instanceof AFf1rSDK;
                if (z10 && getMediationNetwork()) {
                    AFf1rSDK aFf1rSDK = (AFf1rSDK) aFe1lSDK;
                    if (aFf1rSDK.AFAdRevenueData == AFe1uSDK.SUCCESS || aFf1rSDK.getMonetizationNetwork == 1) {
                        AFg1iSDK aFg1iSDK = new AFg1iSDK(aFf1rSDK, AFa1uSDK.this.getCurrencyIso4217Code().component2());
                        AFa1uSDK aFa1uSDK = AFa1uSDK.this;
                        AFe1nSDK copydefault = ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).copydefault();
                        copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFg1iSDK));
                    }
                }
                AFa1uSDK aFa1uSDK2 = AFa1uSDK.this;
                AFh1qSDK afLogForce = ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK2}, 389316487, -389316474, System.identityHashCode(aFa1uSDK2))).afLogForce();
                if (afLogForce != null && z10) {
                    afLogForce.getMonetizationNetwork((AFf1rSDK) aFe1lSDK, new Function0() { // from class: com.appsflyer.internal.i
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit monetizationNetwork;
                            monetizationNetwork = AFa1uSDK.C0135AFa1uSDK.this.getMonetizationNetwork();
                            return monetizationNetwork;
                        }
                    });
                }
                if (aFe1uSDK == AFe1uSDK.SUCCESS) {
                    AFa1uSDK aFa1uSDK3 = AFa1uSDK.this;
                    ((AFc1oSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK3, aFa1uSDK3.component3}, -1595266545, 1595266567, System.identityHashCode(aFa1uSDK3))).AFAdRevenueData("sentSuccessfully", "true");
                    if (!(aFe1lSDK instanceof AFf1pSDK) && (revenue = new AFg1tSDK(AFa1uSDK.this.component3).getRevenue()) != null && revenue.getMediationNetwork) {
                        String str = revenue.getMonetizationNetwork;
                        AFLogger.INSTANCE.d(AFg1cSDK.UNINSTALL, "Resending Uninstall token to AF servers: ".concat(String.valueOf(str)));
                        AFa1uSDK monetizationNetwork = AFa1uSDK.getMonetizationNetwork();
                        AFc1bSDK aFc1bSDK = (AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{monetizationNetwork}, 389316487, -389316474, System.identityHashCode(monetizationNetwork));
                        AFf1pSDK aFf1pSDK = new AFf1pSDK(str, aFc1bSDK);
                        AFe1nSDK copydefault2 = aFc1bSDK.copydefault();
                        copydefault2.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFf1pSDK));
                    }
                    ResponseNetwork responseNetwork = ((AFe1eSDK) aFf1uSDK).component3;
                    if (responseNetwork != null && (AFAdRevenueData = AFa1oSDK.AFAdRevenueData((String) responseNetwork.getBody())) != null) {
                        AFa1uSDK.this.component1 = AFAdRevenueData.optBoolean("send_background", false);
                    }
                    if (z10) {
                        AFa1uSDK.this.getMonetizationNetwork = System.currentTimeMillis();
                    }
                }
            } else if (!(aFe1lSDK instanceof AFg1iSDK) || aFe1uSDK == AFe1uSDK.SUCCESS) {
            } else {
                AFg1nSDK aFg1nSDK = new AFg1nSDK(AFa1uSDK.this.getCurrencyIso4217Code());
                AFa1uSDK aFa1uSDK4 = AFa1uSDK.this;
                AFe1nSDK copydefault3 = ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK4}, 389316487, -389316474, System.identityHashCode(aFa1uSDK4))).copydefault();
                copydefault3.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFg1nSDK));
            }
        }

        private boolean getMediationNetwork() {
            return AFa1uSDK.this.getMediationNetwork != null;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public /* synthetic */ Unit getMonetizationNetwork() {
            AFa1uSDK.this.getCurrencyIso4217Code(new AFh1kSDK());
            return Unit.f32008a;
        }
    }

    static {
        component3();
        getRevenue = "356";
        AFAdRevenueData = "6.17";
        getCurrencyIso4217Code = null;
        areAllFieldsValid = new AFa1uSDK();
        int i10 = f8128d + 61;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            int i11 = 48 / 0;
        }
    }

    public AFa1uSDK() {
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afErrorLog().getMediationNetwork();
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afErrorLog().getRevenue();
        AFe1nSDK copydefault = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).copydefault();
        copydefault.getMonetizationNetwork.add(new C0135AFa1uSDK());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void AFAdRevenueData(AFf1oSDK aFf1oSDK) {
        int i10 = f8128d + 61;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            AFc1bSDK aFc1bSDK = (AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
            if (aFf1oSDK == AFf1oSDK.SUCCESS) {
                int i11 = AFKeystoreWrapper + 103;
                f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i11 % 2 != 0) {
                    aFc1bSDK.afWarnLog().getRevenue();
                } else {
                    aFc1bSDK.afWarnLog().getRevenue();
                    throw null;
                }
            }
            if (!aFc1bSDK.equals().getCurrencyIso4217Code()) {
                f8128d = (AFKeystoreWrapper + 77) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                aFc1bSDK.afErrorLog().AFAdRevenueData();
                return;
            }
            aFc1bSDK.afErrorLog().getMediationNetwork();
            return;
        }
        AFc1bSDK aFc1bSDK2 = (AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
        AFf1oSDK aFf1oSDK2 = AFf1oSDK.SUCCESS;
        throw null;
    }

    private static /* synthetic */ Object areAllFieldsValid(Object[] objArr) {
        AFa1uSDK aFa1uSDK = (AFa1uSDK) objArr[0];
        String[] strArr = (String[]) objArr[1];
        int i10 = f8128d + 47;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            List<String> asList = Arrays.asList(strArr);
            List<List<String>> list = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).i().AFAdRevenueData;
            if (!list.contains(asList)) {
                list.add(asList);
                f8128d = (AFKeystoreWrapper + 71) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            return null;
        }
        ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).i().AFAdRevenueData.contains(Arrays.asList(strArr));
        throw null;
    }

    @SuppressLint({"DiscouragedApi"})
    private static void c_(Context context, PackageInfo packageInfo) {
        try {
            ApplicationInfo applicationInfo = packageInfo.applicationInfo;
            if (applicationInfo != null) {
                int i10 = AFKeystoreWrapper + 7;
                f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i10 % 2 != 0) {
                    if ((applicationInfo.flags & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0) {
                        if (Build.VERSION.SDK_INT >= 31) {
                            if (context.getResources().getIdentifier("appsflyer_data_extraction_rules", "xml", context.getPackageName()) != 0) {
                                AFLogger.INSTANCE.i(AFg1cSDK.GENERAL, "appsflyer_data_extraction_rules.xml detected, using AppsFlyer data extraction rules for AppsFlyer SDK data", true);
                                AFKeystoreWrapper = (f8128d + 109) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                return;
                            }
                            AFLogger.INSTANCE.w(AFg1cSDK.GENERAL, "'allowBackup' is set to true; appsflyer_data_extraction_rules.xml is NOT detected.\nAppsFlyer shared preferences should be excluded from auto backup by adding: <exclude domain=\"sharedpref\" path=\"appsflyer-data\"/> to the Application's <data-extraction-rules> both in <device-transfer> and <cloud-backup>.\nIf Appsflyer's Purchase Connector is in use then you also must add to <device-transfer> and <cloud-backup> the following excludes: <exclude domain=\"sharedpref\" path=\"appsflyer-purchase-data\"/> AND <exclude domain=\"database\" path=\"afpurchases.db\"/>", true);
                            return;
                        } else if (context.getResources().getIdentifier("appsflyer_backup_rules", "xml", context.getPackageName()) != 0) {
                            AFLogger.INSTANCE.i(AFg1cSDK.GENERAL, "appsflyer_backup_rules.xml detected, using AppsFlyer defined backup rules for AppsFlyer SDK data", true);
                            return;
                        } else {
                            AFLogger.INSTANCE.w(AFg1cSDK.GENERAL, "'allowBackup' is set to true; appsflyer_backup_rules.xml is NOT detected.\nAppsFlyer shared preferences should be excluded from auto backup by adding: <exclude domain=\"sharedpref\" path=\"appsflyer-data\"/> to the Application's <full-backup-content> rules.\nIf Appsflyer's Purchase Connector is in use then you also must add the following to your rules: <exclude domain=\"sharedpref\" path=\"appsflyer-purchase-data\"/> AND <exclude domain=\"database\" path=\"afpurchases.db\"/>", true);
                            return;
                        }
                    }
                    return;
                }
                int i11 = applicationInfo.flags;
                throw null;
            }
        } catch (Throwable th2) {
            AFLogger.INSTANCE.e(AFg1cSDK.GENERAL, "Exception while checking BackupRules: ", th2);
        }
    }

    private static /* synthetic */ Object component1(Object[] objArr) {
        int i10 = 0;
        final AFa1uSDK aFa1uSDK = (AFa1uSDK) objArr[0];
        String str = (String) objArr[1];
        AppsFlyerConversionListener appsFlyerConversionListener = (AppsFlyerConversionListener) objArr[2];
        Context context = (Context) objArr[3];
        int i11 = AFKeystoreWrapper + 65;
        f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 != 0) {
            if (aFa1uSDK.toString) {
                return aFa1uSDK;
            }
            aFa1uSDK.toString = true;
            ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).AFKeystoreWrapper().getMonetizationNetwork(str);
            if (context != null) {
                aFa1uSDK.getMediationNetwork(context);
                Application O_ = AFj1iSDK.O_(context);
                if (O_ == null) {
                    return aFa1uSDK;
                }
                aFa1uSDK.component3 = O_;
                ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).getMediationNetwork().execute(new Runnable() { // from class: com.appsflyer.internal.e
                    @Override // java.lang.Runnable
                    public final void run() {
                        AFa1uSDK.this.copy();
                    }
                });
                AFe1nSDK copydefault = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).copydefault();
                copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(new AFe1fSDK(aFa1uSDK.getCurrencyIso4217Code())));
                ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).afWarnLog().getMediationNetwork(new AFd1xSDK.AFa1ySDK() { // from class: com.appsflyer.internal.f
                    @Override // com.appsflyer.internal.AFd1xSDK.AFa1ySDK
                    public final void onConfigurationChanged(boolean z10) {
                        AFa1uSDK.this.getMediationNetwork(z10);
                    }
                });
                ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).component1().getRevenue(aFa1uSDK.AFAdRevenueData());
                AFj1rSDK AFLogger2 = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).AFLogger();
                Runnable runnable = new Runnable() { // from class: com.appsflyer.internal.g
                    @Override // java.lang.Runnable
                    public final void run() {
                        AFa1uSDK.this.equals();
                    }
                };
                AFi1bSDK monetizationNetwork = AFLogger2.getMonetizationNetwork(runnable);
                Runnable revenue = AFLogger2.getRevenue(monetizationNetwork, runnable);
                AFLogger2.getCurrencyIso4217Code.add(monetizationNetwork);
                AFLogger2.getCurrencyIso4217Code.add(new AFj1mSDK(AFLogger2.getMonetizationNetwork.getCurrencyIso4217Code(), revenue));
                AFLogger2.getCurrencyIso4217Code.add(new AFj1zSDK(revenue, AFLogger2.getMonetizationNetwork, new AFj1vSDK()));
                AFLogger2.getCurrencyIso4217Code.add(new AFj1lSDK(revenue, AFLogger2.getMonetizationNetwork));
                AFLogger2.getCurrencyIso4217Code.add(new AFj1uSDK(AFLogger2.getMonetizationNetwork.getMediationNetwork(), AFLogger2.getMonetizationNetwork.getCurrencyIso4217Code(), revenue));
                AFLogger2.getMediationNetwork(revenue);
                AFj1qSDK[] aFj1qSDKArr = (AFj1qSDK[]) AFLogger2.getCurrencyIso4217Code.toArray(new AFj1qSDK[0]);
                int length = aFj1qSDKArr.length;
                while (i10 < length) {
                    int i12 = AFKeystoreWrapper + 89;
                    f8128d = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (i12 % 2 == 0) {
                        aFj1qSDKArr[i10].getCurrencyIso4217Code(AFLogger2.getMonetizationNetwork.registerClient().getRevenue);
                        i10 += 21;
                    } else {
                        aFj1qSDKArr[i10].getCurrencyIso4217Code(AFLogger2.getMonetizationNetwork.registerClient().getRevenue);
                        i10++;
                    }
                }
                if (!AFLogger2.getMediationNetwork()) {
                    AFLogger2.AFAdRevenueData(AFLogger2.getMonetizationNetwork.registerClient().getRevenue, revenue, AFLogger2.getMonetizationNetwork);
                    f8128d = (AFKeystoreWrapper + 47) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            } else {
                AFLogger.INSTANCE.w(AFg1cSDK.REFERRER, "context is null, Google Install Referrer will be not initialized");
            }
            ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).equals().getCurrencyIso4217Code("init", str, appsFlyerConversionListener == null ? "null" : "conversionDataListener");
            AFLogger.INSTANCE.force(AFg1cSDK.GENERAL, String.format("Initializing AppsFlyer SDK: (v%s.%s)", "6.17.3", getRevenue));
            aFa1uSDK.getMediationNetwork = appsFlyerConversionListener;
            return aFa1uSDK;
        }
        boolean z10 = aFa1uSDK.toString;
        throw null;
    }

    private static /* synthetic */ Object component2(Object[] objArr) {
        int i10 = (f8128d + 45) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFKeystoreWrapper = i10;
        AFc1dSDK aFc1dSDK = ((AFa1uSDK) objArr[0]).hashCode;
        int i11 = i10 + 73;
        f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 == 0) {
            int i12 = 82 / 0;
        }
        return aFc1dSDK;
    }

    private static /* synthetic */ Object component3(Object[] objArr) {
        f8128d = (AFKeystoreWrapper + 59) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFa1uSDK) objArr[0]).subscribeForDeepLink((DeepLinkListener) objArr[1], TimeUnit.SECONDS.toMillis(3L));
        int i10 = AFKeystoreWrapper + 11;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return null;
        }
        throw null;
    }

    private static /* synthetic */ Object component4(Object[] objArr) {
        AFa1uSDK aFa1uSDK = (AFa1uSDK) objArr[0];
        int i10 = AFKeystoreWrapper + 21;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).equals().getCurrencyIso4217Code("unregisterConversionListener", new String[0]);
        } else {
            ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).equals().getCurrencyIso4217Code("unregisterConversionListener", new String[0]);
        }
        aFa1uSDK.getMediationNetwork = null;
        int i11 = f8128d + 57;
        AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 != 0) {
            int i12 = 95 / 0;
        }
        return null;
    }

    private static /* synthetic */ Object copy(Object[] objArr) {
        String str = (String) objArr[0];
        boolean booleanValue = ((Boolean) objArr[1]).booleanValue();
        int i10 = AFKeystoreWrapper + 83;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            AppsFlyerProperties.getInstance().set(str, booleanValue);
            return null;
        }
        AppsFlyerProperties.getInstance().set(str, booleanValue);
        throw null;
    }

    private static /* synthetic */ Object copydefault(Object[] objArr) {
        AFa1uSDK aFa1uSDK = (AFa1uSDK) objArr[0];
        Context context = (Context) objArr[1];
        int i10 = AFKeystoreWrapper + 51;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            aFa1uSDK.getMediationNetwork(context);
            AFc1oSDK component2 = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).component2();
            int i11 = AFKeystoreWrapper + 47;
            f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                int i12 = 57 / 0;
            }
            return component2;
        }
        aFa1uSDK.getMediationNetwork(context);
        ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).component2();
        throw null;
    }

    public static SharedPreferences d_(Context context) {
        int i10 = AFKeystoreWrapper + 43;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            if (getMonetizationNetwork().copy == null) {
                StrictMode.ThreadPolicy allowThreadDiskReads = StrictMode.allowThreadDiskReads();
                try {
                    getMonetizationNetwork().copy = context.getApplicationContext().getSharedPreferences("appsflyer-data", 0);
                } finally {
                    StrictMode.setThreadPolicy(allowThreadDiskReads);
                }
            }
            SharedPreferences sharedPreferences = getMonetizationNetwork().copy;
            int i11 = AFKeystoreWrapper + 21;
            f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                return sharedPreferences;
            }
            throw null;
        }
        SharedPreferences sharedPreferences2 = getMonetizationNetwork().copy;
        throw null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void e_(Context context, Intent intent) {
        getRevenue(new Object[]{this, context, intent}, 253751881, -253751860, System.identityHashCode(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void equals() {
        getCurrencyIso4217Code(new AFh1kSDK());
        int i10 = AFKeystoreWrapper + 69;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            int i11 = 11 / 0;
        }
    }

    private static void getCurrencyIso4217Code(String str, String str2) {
        int i10 = AFKeystoreWrapper + 5;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            AppsFlyerProperties.getInstance().set(str, str2);
            int i11 = AFKeystoreWrapper + 105;
            f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                int i12 = 84 / 0;
                return;
            }
            return;
        }
        AppsFlyerProperties.getInstance().set(str, str2);
        throw null;
    }

    public static AFa1uSDK getMonetizationNetwork() {
        int i10 = (f8128d + 87) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFKeystoreWrapper = i10;
        AFa1uSDK aFa1uSDK = areAllFieldsValid;
        f8128d = (i10 + 85) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return aFa1uSDK;
    }

    public static /* synthetic */ Object getRevenue(Object[] objArr, int i10, int i11, int i12) {
        Object[] array;
        int i13 = (i10 * (-1335)) + (i11 * (-667));
        int i14 = ~i11;
        int i15 = i10 | i12;
        boolean z10 = false;
        switch (i13 + (((~i15) | i14) * (-668)) + ((i10 | (~(i12 | i14))) * 1336) + ((i15 | i14) * 668)) {
            case 1:
                return getCurrencyIso4217Code(objArr);
            case 2:
                f8128d = (AFKeystoreWrapper + 89) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                ((AFa1uSDK) objArr[0]).setSharingFilterForPartners((String[]) objArr[1]);
                f8128d = (AFKeystoreWrapper + 21) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return null;
            case 3:
                AFa1uSDK aFa1uSDK = (AFa1uSDK) objArr[0];
                boolean booleanValue = ((Boolean) objArr[1]).booleanValue();
                AFKeystoreWrapper = (f8128d + 109) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                getCurrencyIso4217Code(AppsFlyerProperties.ENABLE_TCF_DATA_COLLECTION, Boolean.toString(booleanValue));
                AFKeystoreWrapper = (f8128d + 105) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return null;
            case 4:
                return getMonetizationNetwork(objArr);
            case 5:
                return getRevenue(objArr);
            case 6:
                int intValue = ((Number) objArr[1]).intValue();
                f8128d = (AFKeystoreWrapper + 61) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                ((AFa1uSDK) objArr[0]).component2 = TimeUnit.SECONDS.toMillis(intValue);
                AFKeystoreWrapper = (f8128d + 111) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return null;
            case 7:
                return getMediationNetwork(objArr);
            case 8:
                return AFAdRevenueData(objArr);
            case 9:
                return areAllFieldsValid(objArr);
            case 10:
                f8128d = (AFKeystoreWrapper + 7) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                ((AFa1uSDK) objArr[0]).logEvent((Context) objArr[1], (String) objArr[2], (Map) objArr[3], null);
                f8128d = (AFKeystoreWrapper + 119) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return null;
            case 11:
                return component4(objArr);
            case 12:
                AFa1uSDK aFa1uSDK2 = (AFa1uSDK) objArr[0];
                Boolean bool = (Boolean) objArr[1];
                boolean booleanValue2 = bool.booleanValue();
                AFKeystoreWrapper = (f8128d + 111) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                AFLogger.afDebugLog("setDisableNetworkData: ".concat(String.valueOf(booleanValue2)));
                getRevenue(new Object[]{AppsFlyerProperties.DISABLE_NETWORK_DATA, bool}, -222394073, 222394090, (int) System.currentTimeMillis());
                f8128d = (AFKeystoreWrapper + 69) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return null;
            case 13:
                return component2(objArr);
            case 14:
                return component3(objArr);
            case 15:
                return component1(objArr);
            case 16:
                AFa1uSDK aFa1uSDK3 = (AFa1uSDK) objArr[0];
                Context context = (Context) objArr[1];
                URI uri = (URI) objArr[2];
                int i16 = (AFKeystoreWrapper + 37) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                f8128d = i16;
                if (uri != null) {
                    AFKeystoreWrapper = (i16 + 1) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (!uri.toString().isEmpty()) {
                        if (context == null) {
                            AFa1rSDK i17 = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK3}, 389316487, -389316474, System.identityHashCode(aFa1uSDK3))).i();
                            StringBuilder sb2 = new StringBuilder("Context is \"");
                            sb2.append(context);
                            sb2.append("\"");
                            i17.getMediationNetwork(sb2.toString(), DeepLinkResult.Error.NETWORK);
                            return null;
                        }
                        aFa1uSDK3.getMediationNetwork(context);
                        ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK3}, 389316487, -389316474, System.identityHashCode(aFa1uSDK3))).i().g_(AFa1gSDK.getMonetizationNetwork(((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK3}, 389316487, -389316474, System.identityHashCode(aFa1uSDK3))).afErrorLogForExcManagerOnly()), Uri.parse(uri.toString()));
                        return null;
                    }
                }
                AFa1rSDK i18 = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK3}, 389316487, -389316474, System.identityHashCode(aFa1uSDK3))).i();
                StringBuilder sb3 = new StringBuilder("Link is \"");
                sb3.append(uri);
                sb3.append("\"");
                i18.getMediationNetwork(sb3.toString(), DeepLinkResult.Error.NETWORK);
                return null;
            case 17:
                return copy(objArr);
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                AFa1uSDK aFa1uSDK4 = (AFa1uSDK) objArr[0];
                int i19 = f8128d + 47;
                AFKeystoreWrapper = i19 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i19 % 2 != 0) {
                    array = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK4}, 389316487, -389316474, System.identityHashCode(aFa1uSDK4))).AFLogger().getCurrencyIso4217Code.toArray(new AFj1qSDK[1]);
                } else {
                    array = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK4}, 389316487, -389316474, System.identityHashCode(aFa1uSDK4))).AFLogger().getCurrencyIso4217Code.toArray(new AFj1qSDK[0]);
                }
                return (AFj1qSDK[]) array;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                return toString(objArr);
            case 20:
                AFa1uSDK aFa1uSDK5 = (AFa1uSDK) objArr[0];
                ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK5}, 389316487, -389316474, System.identityHashCode(aFa1uSDK5))).afInfoLog().getRevenue = new AFb1uSDK((String[]) objArr[1]);
                AFKeystoreWrapper = (f8128d + 31) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return null;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                return hashCode(objArr);
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                return copydefault(objArr);
            case 23:
                Context context2 = (Context) objArr[1];
                String str = (String) objArr[2];
                ((AFa1uSDK) objArr[0]).getMediationNetwork(context2);
                AFg1tSDK aFg1tSDK = new AFg1tSDK(context2);
                if (str == null || str.trim().isEmpty()) {
                    AFLogger.INSTANCE.w(AFg1cSDK.UNINSTALL, "Firebase Token is either empty or null and was not registered.");
                    return null;
                }
                AFLogger.INSTANCE.i(AFg1cSDK.UNINSTALL, "Firebase Refreshed Token = ".concat(str));
                AFf1aSDK revenue = aFg1tSDK.getRevenue();
                if (revenue == null || !str.equals(revenue.getMonetizationNetwork)) {
                    long currentTimeMillis = System.currentTimeMillis();
                    if (revenue == null || currentTimeMillis - revenue.getCurrencyIso4217Code > TimeUnit.SECONDS.toMillis(2L)) {
                        z10 = true;
                    }
                    AFf1aSDK aFf1aSDK = new AFf1aSDK(str, currentTimeMillis, !z10);
                    aFg1tSDK.getMonetizationNetwork.AFAdRevenueData("afUninstallToken", aFf1aSDK.getMonetizationNetwork);
                    aFg1tSDK.getMonetizationNetwork.getRevenue("afUninstallToken_received_time", aFf1aSDK.getCurrencyIso4217Code);
                    aFg1tSDK.getMonetizationNetwork.getCurrencyIso4217Code("afUninstallToken_queued", aFf1aSDK.getMediationNetwork);
                    if (z10) {
                        AFa1uSDK monetizationNetwork = getMonetizationNetwork();
                        AFc1bSDK aFc1bSDK = (AFc1bSDK) getRevenue(new Object[]{monetizationNetwork}, 389316487, -389316474, System.identityHashCode(monetizationNetwork));
                        AFf1pSDK aFf1pSDK = new AFf1pSDK(str, aFc1bSDK);
                        AFe1nSDK copydefault = aFc1bSDK.copydefault();
                        copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFf1pSDK));
                    }
                }
                return null;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                AFa1uSDK aFa1uSDK6 = (AFa1uSDK) objArr[0];
                Map<String, Object> map = (Map) objArr[2];
                PurchaseHandler.PurchaseValidationCallback purchaseValidationCallback = (PurchaseHandler.PurchaseValidationCallback) objArr[3];
                AFKeystoreWrapper = (f8128d + 5) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                aFa1uSDK6.getMediationNetwork((Context) objArr[1]);
                PurchaseHandler areAllFieldsValid2 = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK6}, 389316487, -389316474, System.identityHashCode(aFa1uSDK6))).areAllFieldsValid();
                if (areAllFieldsValid2.getMonetizationNetwork(map, purchaseValidationCallback, "purchases")) {
                    AFe1bSDK aFe1bSDK = new AFe1bSDK(map, purchaseValidationCallback, areAllFieldsValid2.AFAdRevenueData);
                    AFe1nSDK aFe1nSDK = areAllFieldsValid2.getCurrencyIso4217Code;
                    aFe1nSDK.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFe1bSDK));
                }
                AFKeystoreWrapper = (f8128d + 65) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return null;
            default:
                AFa1uSDK aFa1uSDK7 = (AFa1uSDK) objArr[0];
                boolean booleanValue3 = ((Boolean) objArr[1]).booleanValue();
                int i20 = AFKeystoreWrapper + 57;
                f8128d = i20 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i20 % 2 == 0) {
                    AFd1mSDK equals = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK7}, 389316487, -389316474, System.identityHashCode(aFa1uSDK7))).equals();
                    String[] strArr = new String[1];
                    strArr[1] = String.valueOf(booleanValue3);
                    equals.getCurrencyIso4217Code("setCollectAndroidID", strArr);
                } else {
                    ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK7}, 389316487, -389316474, System.identityHashCode(aFa1uSDK7))).equals().getCurrencyIso4217Code("setCollectAndroidID", String.valueOf(booleanValue3));
                }
                getCurrencyIso4217Code(AppsFlyerProperties.COLLECT_ANDROID_ID, Boolean.toString(booleanValue3));
                getCurrencyIso4217Code(AppsFlyerProperties.COLLECT_ANDROID_ID_FORCE_BY_USER, Boolean.toString(booleanValue3));
                return null;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:13:0x0066  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0095 A[ADDED_TO_REGION] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static /* synthetic */ java.lang.Object hashCode(java.lang.Object[] r10) {
        /*
            r0 = 0
            r1 = r10[r0]
            com.appsflyer.internal.AFa1uSDK r1 = (com.appsflyer.internal.AFa1uSDK) r1
            r2 = 1
            r3 = r10[r2]
            android.content.Context r3 = (android.content.Context) r3
            r4 = 2
            r10 = r10[r4]
            android.content.Intent r10 = (android.content.Intent) r10
            r1.getMediationNetwork(r3)
            java.lang.Object[] r5 = new java.lang.Object[]{r1}
            int r6 = java.lang.System.identityHashCode(r1)
            r7 = 389316487(0x17347f87, float:5.83221E-25)
            r8 = -389316474(0xffffffffe8cb8086, float:-7.68809E24)
            java.lang.Object r5 = getRevenue(r5, r7, r8, r6)
            com.appsflyer.internal.AFc1bSDK r5 = (com.appsflyer.internal.AFc1bSDK) r5
            com.appsflyer.internal.AFa1rSDK r5 = r5.i()
            java.lang.Object[] r6 = new java.lang.Object[]{r1}
            int r1 = java.lang.System.identityHashCode(r1)
            java.lang.Object r1 = getRevenue(r6, r7, r8, r1)
            com.appsflyer.internal.AFc1bSDK r1 = (com.appsflyer.internal.AFc1bSDK) r1
            com.appsflyer.internal.AFc1oSDK r1 = r1.component2()
            r6 = 0
            if (r10 == 0) goto L63
            int r7 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r7 = r7 + 35
            int r8 = r7 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r8
            int r7 = r7 % r4
            java.lang.String r8 = "android.intent.action.VIEW"
            if (r7 == 0) goto L5b
            java.lang.String r7 = r10.getAction()
            boolean r7 = r8.equals(r7)
            if (r7 == 0) goto L63
            android.net.Uri r7 = r10.getData()
            goto L64
        L5b:
            java.lang.String r10 = r10.getAction()
            r8.equals(r10)
            throw r6
        L63:
            r7 = r6
        L64:
            if (r7 == 0) goto L8c
            int r8 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r8 = r8 + 7
            int r9 = r8 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r9
            int r8 = r8 % r4
            if (r8 == 0) goto L84
            java.lang.String r7 = r7.toString()
            boolean r7 = r7.isEmpty()
            if (r7 != 0) goto L8c
            int r7 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r7 = r7 + 93
            int r7 = r7 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r7
            goto L8d
        L84:
            java.lang.String r10 = r7.toString()
            r10.isEmpty()
            throw r6
        L8c:
            r2 = r0
        L8d:
            java.lang.String r7 = "ddl_sent"
            boolean r1 = r1.getMediationNetwork(r7, r0)
            if (r1 == 0) goto Laf
            if (r2 != 0) goto Laf
            int r10 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r10 = r10 + 93
            int r1 = r10 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r1
            int r10 = r10 % r4
            java.lang.String r1 = "No direct deep link"
            if (r10 != 0) goto Lab
            r5.getMediationNetwork(r1, r6)
            r10 = 37
            int r10 = r10 / r0
            goto Lae
        Lab:
            r5.getMediationNetwork(r1, r6)
        Lae:
            return r6
        Laf:
            com.appsflyer.internal.AFc1bSDK r0 = r5.component1
            com.appsflyer.internal.AFa1hSDK r0 = r0.afErrorLogForExcManagerOnly()
            com.appsflyer.internal.AFa1gSDK r0 = com.appsflyer.internal.AFa1gSDK.getMonetizationNetwork(r0)
            r5.f_(r0, r10, r3)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.hashCode(java.lang.Object[]):java.lang.Object");
    }

    private static /* synthetic */ Object toString(Object[] objArr) {
        boolean monetizationNetwork;
        AFa1uSDK aFa1uSDK = (AFa1uSDK) objArr[0];
        int i10 = AFKeystoreWrapper + 99;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            monetizationNetwork = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).AFKeystoreWrapper().getMonetizationNetwork();
            int i11 = 64 / 0;
        } else {
            monetizationNetwork = ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).AFKeystoreWrapper().getMonetizationNetwork();
        }
        int i12 = AFKeystoreWrapper + 107;
        f8128d = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i12 % 2 != 0) {
            return Boolean.valueOf(monetizationNetwork);
        }
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void addPushNotificationDeepLinkPath(String... strArr) {
        getRevenue(new Object[]{this, strArr}, -503631880, 503631889, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void anonymizeUser(boolean z10) {
        int i10 = f8128d + 67;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            AFd1mSDK equals = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals();
            String[] strArr = new String[1];
            strArr[1] = String.valueOf(z10);
            equals.getCurrencyIso4217Code("anonymizeUser", strArr);
        } else {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("anonymizeUser", String.valueOf(z10));
        }
        AppsFlyerProperties.getInstance().set(AppsFlyerProperties.DEVICE_TRACKING_DISABLED, z10);
        int i11 = AFKeystoreWrapper + 87;
        f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 == 0) {
            int i12 = 42 / 0;
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void appendParametersToDeepLinkingURL(String str, Map<String, String> map) {
        int i10 = f8128d + 45;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            AFa1rSDK i11 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i();
            i11.getMonetizationNetwork = str;
            i11.getMediationNetwork = map;
            f8128d = (AFKeystoreWrapper + 99) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return;
        }
        AFa1rSDK i12 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i();
        i12.getMonetizationNetwork = str;
        i12.getMediationNetwork = map;
        throw null;
    }

    final void b_(Context context, Intent intent) {
        getRevenue(new Object[]{this, context, intent}, -1666869813, 1666869820, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void disableAppSetId() {
        Object revenue;
        int i10 = AFKeystoreWrapper + 11;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            revenue = getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
        } else {
            revenue = getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
        }
        ((AFc1bSDK) revenue).afInfoLog().component1 = true;
        int i11 = AFKeystoreWrapper + 33;
        f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 != 0) {
            return;
        }
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void enableFacebookDeferredApplinks(boolean z10) {
        f8128d = (AFKeystoreWrapper + 47) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).unregisterClient().getMonetizationNetwork(z10);
        f8128d = (AFKeystoreWrapper + 73) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void enableTCFDataCollection(boolean z10) {
        getRevenue(new Object[]{this, Boolean.valueOf(z10)}, 163982159, -163982156, System.identityHashCode(this));
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x0051, code lost:
        return null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x0052, code lost:
        getMediationNetwork(r7);
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x006d, code lost:
        return com.appsflyer.internal.AFb1jSDK.getRevenue(((com.appsflyer.internal.AFc1bSDK) getRevenue(new java.lang.Object[]{r6}, 389316487, -389316474, java.lang.System.identityHashCode(r6))).getCurrencyIso4217Code().getMonetizationNetwork);
     */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x002c, code lost:
        if (r7 == null) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x0046, code lost:
        if (r7 == null) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0048, code lost:
        com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = (com.appsflyer.internal.AFa1uSDK.f8128d + 115) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    @Override // com.appsflyer.AppsFlyerLib
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.String getAppsFlyerUID(@androidx.annotation.NonNull android.content.Context r7) {
        /*
            r6 = this;
            int r0 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r0 = r0 + 55
            int r1 = r0 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r1
            int r0 = r0 % 2
            r1 = 0
            java.lang.String r2 = "getAppsFlyerUID"
            r3 = -389316474(0xffffffffe8cb8086, float:-7.68809E24)
            r4 = 389316487(0x17347f87, float:5.83221E-25)
            if (r0 == 0) goto L2f
            java.lang.Object[] r0 = new java.lang.Object[]{r6}
            int r5 = java.lang.System.identityHashCode(r6)
            java.lang.Object r0 = getRevenue(r0, r4, r3, r5)
            com.appsflyer.internal.AFc1bSDK r0 = (com.appsflyer.internal.AFc1bSDK) r0
            com.appsflyer.internal.AFd1mSDK r0 = r0.equals()
            java.lang.String[] r1 = new java.lang.String[r1]
            r0.getCurrencyIso4217Code(r2, r1)
            if (r7 != 0) goto L52
            goto L48
        L2f:
            java.lang.Object[] r0 = new java.lang.Object[]{r6}
            int r5 = java.lang.System.identityHashCode(r6)
            java.lang.Object r0 = getRevenue(r0, r4, r3, r5)
            com.appsflyer.internal.AFc1bSDK r0 = (com.appsflyer.internal.AFc1bSDK) r0
            com.appsflyer.internal.AFd1mSDK r0 = r0.equals()
            java.lang.String[] r1 = new java.lang.String[r1]
            r0.getCurrencyIso4217Code(r2, r1)
            if (r7 != 0) goto L52
        L48:
            int r7 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r7 = r7 + 115
            int r7 = r7 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r7
            r7 = 0
            return r7
        L52:
            r6.getMediationNetwork(r7)
            java.lang.Object[] r7 = new java.lang.Object[]{r6}
            int r0 = java.lang.System.identityHashCode(r6)
            java.lang.Object r7 = getRevenue(r7, r4, r3, r0)
            com.appsflyer.internal.AFc1bSDK r7 = (com.appsflyer.internal.AFc1bSDK) r7
            com.appsflyer.internal.AFc1pSDK r7 = r7.getCurrencyIso4217Code()
            com.appsflyer.internal.AFc1oSDK r7 = r7.getMonetizationNetwork
            java.lang.String r7 = com.appsflyer.internal.AFb1jSDK.getRevenue(r7)
            return r7
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.getAppsFlyerUID(android.content.Context):java.lang.String");
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final String getAttributionId(Context context) {
        int i10 = f8128d + 21;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            getMediationNetwork(context);
            return ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).getCurrencyIso4217Code().getRevenue(context);
        }
        getMediationNetwork(context);
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).getCurrencyIso4217Code().getRevenue(context);
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final String getHostName() {
        int i10 = f8128d + 59;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            return ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFInAppEventParameterName().getCurrencyIso4217Code();
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFInAppEventParameterName().getCurrencyIso4217Code();
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final String getHostPrefix() {
        return (String) getRevenue(new Object[]{this}, 103305784, -103305776, System.identityHashCode(this));
    }

    public final void getMediationNetwork(@NonNull Context context) {
        int i10 = (f8128d + 37) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFKeystoreWrapper = i10;
        AFc1dSDK aFc1dSDK = this.hashCode;
        if (context != null) {
            int i11 = i10 + 25;
            f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                AFc1gSDK aFc1gSDK = aFc1dSDK.getMonetizationNetwork;
                int i12 = i10 + 3;
                f8128d = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i12 % 2 != 0) {
                    aFc1gSDK.getRevenue = context.getApplicationContext();
                    return;
                } else {
                    aFc1gSDK.getRevenue = context.getApplicationContext();
                    throw null;
                }
            }
            AFc1gSDK aFc1gSDK2 = aFc1dSDK.getMonetizationNetwork;
            throw null;
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final String getOutOfStore(Context context) {
        int i10 = AFKeystoreWrapper + 107;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            String string = AppsFlyerProperties.getInstance().getString(AppsFlyerProperties.AF_STORE_FROM_API);
            if (string != null) {
                return string;
            }
            String currencyIso4217Code = getCurrencyIso4217Code(context, "AF_STORE");
            if (currencyIso4217Code != null) {
                int i11 = AFKeystoreWrapper + 71;
                f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i11 % 2 == 0) {
                    int i12 = 72 / 0;
                }
                return currencyIso4217Code;
            }
            AFLogger.afInfoLog("No out-of-store value set");
            return null;
        }
        AppsFlyerProperties.getInstance().getString(AppsFlyerProperties.AF_STORE_FROM_API);
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final String getSdkVersion() {
        f8128d = (AFKeystoreWrapper + 105) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("getSdkVersion", new String[0]);
        String component2 = AFc1pSDK.component2();
        int i10 = AFKeystoreWrapper + 125;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return component2;
        }
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final AppsFlyerLib init(@NonNull String str, AppsFlyerConversionListener appsFlyerConversionListener, @NonNull Context context) {
        return (AppsFlyerLib) getRevenue(new Object[]{this, str, appsFlyerConversionListener, context}, 519263238, -519263223, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final boolean isPreInstalledApp(Context context) {
        f8128d = (AFKeystoreWrapper + 35) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        getMediationNetwork(context);
        boolean mediationNetwork = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).getCurrencyIso4217Code().getMediationNetwork(context);
        f8128d = (AFKeystoreWrapper + 15) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return mediationNetwork;
    }

    @Override // com.appsflyer.AppsFlyerLib
    @Deprecated
    public final boolean isStopped() {
        return ((Boolean) getRevenue(new Object[]{this}, 224962975, -224962956, System.identityHashCode(this))).booleanValue();
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void logAdRevenue(@NonNull AFAdRevenueData aFAdRevenueData, Map<String, Object> map) {
        if (!this.toString) {
            getMediationNetwork("logAdRevenue");
            f8128d = (AFKeystoreWrapper + 119) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } else if (!aFAdRevenueData.areAllFieldsValid()) {
            int i10 = AFKeystoreWrapper + 9;
            f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                AFLogger.INSTANCE.w(AFg1cSDK.AD_REVENUE, "Invalid ad revenue parameters provided");
                int i11 = 32 / 0;
                return;
            }
            AFLogger.INSTANCE.w(AFg1cSDK.AD_REVENUE, "Invalid ad revenue parameters provided");
        } else if (((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMonetizationNetwork()) {
            int i12 = AFKeystoreWrapper + 87;
            f8128d = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i12 % 2 != 0) {
                AFLogger.INSTANCE.w(AFg1cSDK.AD_REVENUE, "SDK is stopped");
            } else {
                AFLogger.INSTANCE.w(AFg1cSDK.AD_REVENUE, "SDK is stopped");
                throw null;
            }
        } else if (AFk1xSDK.getRevenue(((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMediationNetwork())) {
            copydefault();
        } else {
            getMonetizationNetwork(new AFh1nSDK(aFAdRevenueData, map));
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void logEvent(@NonNull Context context, String str, Map<String, Object> map, AppsFlyerRequestListener appsFlyerRequestListener) {
        HashMap hashMap = map == null ? null : new HashMap(map);
        getMediationNetwork(context);
        AFh1hSDK aFh1hSDK = new AFh1hSDK();
        aFh1hSDK.component4 = str;
        aFh1hSDK.getMonetizationNetwork = appsFlyerRequestListener;
        if (hashMap != null && hashMap.containsKey(AFInAppEventParameterName.TOUCH_OBJ)) {
            HashMap hashMap2 = new HashMap();
            Object obj = hashMap.get(AFInAppEventParameterName.TOUCH_OBJ);
            if (obj instanceof MotionEvent) {
                MotionEvent motionEvent = (MotionEvent) obj;
                HashMap hashMap3 = new HashMap();
                hashMap3.put("x", Float.valueOf(motionEvent.getX()));
                hashMap3.put("y", Float.valueOf(motionEvent.getY()));
                hashMap2.put("loc", hashMap3);
                hashMap2.put("pf", Float.valueOf(motionEvent.getPressure()));
                hashMap2.put("rad", Float.valueOf(motionEvent.getTouchMajor() / 2.0f));
            } else {
                hashMap2.put("error", "Parsing failed due to invalid input in 'af_touch_obj'.");
                AFLogger.INSTANCE.w(AFg1cSDK.PREDICT, "Parsing failed due to invalid input in 'af_touch_obj'.", true);
            }
            Map<String, ?> singletonMap = Collections.singletonMap("tch_data", hashMap2);
            hashMap.remove(AFInAppEventParameterName.TOUCH_OBJ);
            aFh1hSDK.getMonetizationNetwork(singletonMap);
        }
        aFh1hSDK.AFAdRevenueData = hashMap;
        AFd1mSDK equals = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals();
        Map map2 = aFh1hSDK.AFAdRevenueData;
        if (map2 == null) {
            map2 = new HashMap();
        }
        equals.getCurrencyIso4217Code("logEvent", str, new JSONObject(map2).toString());
        if (str == null) {
            getMediationNetwork(context, AFh1xSDK.logEvent);
        }
        getMediationNetwork(aFh1hSDK, AFAdRevenueData(context));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void logLocation(Context context, double d10, double d11) {
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("logLocation", String.valueOf(d10), String.valueOf(d11));
        HashMap hashMap = new HashMap();
        hashMap.put(AFInAppEventParameterName.LONGITUDE, Double.toString(d11));
        hashMap.put(AFInAppEventParameterName.LATITUDE, Double.toString(d10));
        AFAdRevenueData(context, AFInAppEventType.LOCATION_COORDINATES, hashMap);
        int i10 = f8128d + 59;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            int i11 = 60 / 0;
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void logSession(Context context) {
        f8128d = (AFKeystoreWrapper + 25) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("logSession", new String[0]);
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getMonetizationNetwork();
        getMediationNetwork(context, AFh1xSDK.logSession);
        AFAdRevenueData(context, (String) null, (Map<String, Object>) null);
        int i10 = AFKeystoreWrapper + 107;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            int i11 = 63 / 0;
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void onPause(Context context) {
        int i10 = f8128d + 57;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afDebugLog().getMonetizationNetwork();
            int i11 = 92 / 0;
            return;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afDebugLog().getMonetizationNetwork();
    }

    @Override // com.appsflyer.AppsFlyerLib
    @Deprecated
    public final void performOnAppAttribution(@NonNull Context context, @NonNull URI uri) {
        getRevenue(new Object[]{this, context, uri}, 1798513644, -1798513628, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void performOnDeepLinking(@NonNull final Intent intent, @NonNull Context context) {
        int i10 = (AFKeystoreWrapper + 45) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        f8128d = i10;
        if (intent == null) {
            int i11 = i10 + 71;
            AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i().getMediationNetwork("performOnDeepLinking was called with null intent", DeepLinkResult.Error.DEVELOPER_ERROR);
            } else {
                ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i().getMediationNetwork("performOnDeepLinking was called with null intent", DeepLinkResult.Error.DEVELOPER_ERROR);
                throw null;
            }
        } else if (context == null) {
            int i12 = i10 + 123;
            AFKeystoreWrapper = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i12 % 2 != 0) {
                ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i().getMediationNetwork("performOnDeepLinking was called with null context", DeepLinkResult.Error.DEVELOPER_ERROR);
                int i13 = 4 / 0;
                return;
            }
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i().getMediationNetwork("performOnDeepLinking was called with null context", DeepLinkResult.Error.DEVELOPER_ERROR);
        } else {
            final Context applicationContext = context.getApplicationContext();
            getMediationNetwork(applicationContext);
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).getMediationNetwork().execute(new Runnable() { // from class: com.appsflyer.internal.h
                @Override // java.lang.Runnable
                public final void run() {
                    AFa1uSDK.this.e_(applicationContext, intent);
                }
            });
            int i14 = f8128d + 97;
            AFKeystoreWrapper = i14 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i14 % 2 == 0) {
                return;
            }
            throw null;
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void registerConversionListener(Context context, AppsFlyerConversionListener appsFlyerConversionListener) {
        int i10 = f8128d + 111;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("registerConversionListener", new String[1]);
        } else {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("registerConversionListener", new String[0]);
        }
        getRevenue(appsFlyerConversionListener);
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x005d, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x005e, code lost:
        com.appsflyer.internal.AFa1uSDK.getCurrencyIso4217Code = r8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0060, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x0031, code lost:
        if (r8 == null) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x004e, code lost:
        if (r8 == null) goto L8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0050, code lost:
        com.appsflyer.internal.AFa1uSDK.f8128d = (com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper + 9) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        com.appsflyer.AFLogger.afDebugLog("registerValidatorListener null listener");
     */
    @Override // com.appsflyer.AppsFlyerLib
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void registerValidatorListener(android.content.Context r7, com.appsflyer.AppsFlyerInAppPurchaseValidatorListener r8) {
        /*
            r6 = this;
            int r7 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r7 = r7 + 97
            int r0 = r7 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r0
            int r7 = r7 % 2
            java.lang.String r0 = "registerValidatorListener called"
            r1 = 0
            java.lang.String r2 = "registerValidatorListener"
            r3 = -389316474(0xffffffffe8cb8086, float:-7.68809E24)
            r4 = 389316487(0x17347f87, float:5.83221E-25)
            if (r7 != 0) goto L34
            java.lang.Object[] r7 = new java.lang.Object[]{r6}
            int r5 = java.lang.System.identityHashCode(r6)
            java.lang.Object r7 = getRevenue(r7, r4, r3, r5)
            com.appsflyer.internal.AFc1bSDK r7 = (com.appsflyer.internal.AFc1bSDK) r7
            com.appsflyer.internal.AFd1mSDK r7 = r7.equals()
            java.lang.String[] r1 = new java.lang.String[r1]
            r7.getCurrencyIso4217Code(r2, r1)
            com.appsflyer.AFLogger.afDebugLog(r0)
            if (r8 != 0) goto L5e
            goto L50
        L34:
            java.lang.Object[] r7 = new java.lang.Object[]{r6}
            int r5 = java.lang.System.identityHashCode(r6)
            java.lang.Object r7 = getRevenue(r7, r4, r3, r5)
            com.appsflyer.internal.AFc1bSDK r7 = (com.appsflyer.internal.AFc1bSDK) r7
            com.appsflyer.internal.AFd1mSDK r7 = r7.equals()
            java.lang.String[] r1 = new java.lang.String[r1]
            r7.getCurrencyIso4217Code(r2, r1)
            com.appsflyer.AFLogger.afDebugLog(r0)
            if (r8 != 0) goto L5e
        L50:
            int r7 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r7 = r7 + 9
            int r7 = r7 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r7
            java.lang.String r7 = "registerValidatorListener null listener"
            com.appsflyer.AFLogger.afDebugLog(r7)
            return
        L5e:
            com.appsflyer.internal.AFa1uSDK.getCurrencyIso4217Code = r8
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.registerValidatorListener(android.content.Context, com.appsflyer.AppsFlyerInAppPurchaseValidatorListener):void");
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void sendInAppPurchaseData(Context context, Map<String, Object> map, PurchaseHandler.PurchaseValidationCallback purchaseValidationCallback) {
        getRevenue(new Object[]{this, context, map, purchaseValidationCallback}, 788315212, -788315188, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void sendPurchaseData(Context context, Map<String, Object> map, PurchaseHandler.PurchaseValidationCallback purchaseValidationCallback) {
        AFKeystoreWrapper = (f8128d + 65) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        getMediationNetwork(context);
        PurchaseHandler areAllFieldsValid2 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).areAllFieldsValid();
        if (areAllFieldsValid2.getMonetizationNetwork(map, purchaseValidationCallback, "subscriptions")) {
            AFe1jSDK aFe1jSDK = new AFe1jSDK(map, purchaseValidationCallback, areAllFieldsValid2.AFAdRevenueData);
            AFe1nSDK aFe1nSDK = areAllFieldsValid2.getCurrencyIso4217Code;
            aFe1nSDK.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFe1jSDK));
            f8128d = (AFKeystoreWrapper + 91) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x0029, code lost:
        r3 = ((com.appsflyer.internal.AFc1bSDK) getRevenue(new java.lang.Object[]{r18}, 389316487, -389316474, java.lang.System.identityHashCode(r18))).equals();
        r8 = r19.getLocalClassName();
        r9 = new java.lang.StringBuilder("activity_intent_");
        r9.append(r19.getIntent().toString());
        r3.getCurrencyIso4217Code("sendPushNotificationData", r8, r9.toString());
        com.appsflyer.internal.AFa1uSDK.f8128d = (com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper + 85) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x0065, code lost:
        if (r19 == null) goto L58;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0067, code lost:
        ((com.appsflyer.internal.AFc1bSDK) getRevenue(new java.lang.Object[]{r18}, 389316487, -389316474, java.lang.System.identityHashCode(r18))).equals().getCurrencyIso4217Code("sendPushNotificationData", r19.getLocalClassName(), "activity_intent_null");
     */
    /* JADX WARN: Code restructure failed: missing block: B:13:0x0087, code lost:
        ((com.appsflyer.internal.AFc1bSDK) getRevenue(new java.lang.Object[]{r18}, 389316487, -389316474, java.lang.System.identityHashCode(r18))).equals().getCurrencyIso4217Code("sendPushNotificationData", "activity_null");
     */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x001e, code lost:
        if (r19 != null) goto L59;
     */
    /* JADX WARN: Code restructure failed: missing block: B:7:0x0021, code lost:
        if (r19 != null) goto L59;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0027, code lost:
        if (r19.getIntent() == null) goto L5;
     */
    /* JADX WARN: Removed duplicated region for block: B:50:0x01b7  */
    @Override // com.appsflyer.AppsFlyerLib
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void sendPushNotificationData(android.app.Activity r19) {
        /*
            Method dump skipped, instructions count: 483
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.sendPushNotificationData(android.app.Activity):void");
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setAdditionalData(Map<String, Object> map) {
        AFKeystoreWrapper = (f8128d + 23) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (map != null) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setAdditionalData", map.toString());
            AppsFlyerProperties.getInstance().setCustomData(new JSONObject(map).toString());
        }
        f8128d = (AFKeystoreWrapper + 9) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setAndroidIdData(String str) {
        f8128d = (AFKeystoreWrapper + 25) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setAndroidIdData", str);
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afInfoLog().AFAdRevenueData = str;
        AFKeystoreWrapper = (f8128d + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setAppId(String str) {
        int i10 = AFKeystoreWrapper + 111;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            AFd1mSDK equals = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals();
            String[] strArr = new String[0];
            strArr[0] = str;
            equals.getCurrencyIso4217Code("setAppId", strArr);
        } else {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setAppId", str);
        }
        getCurrencyIso4217Code(AppsFlyerProperties.APP_ID, str);
        AFKeystoreWrapper = (f8128d + 89) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setAppInviteOneLink(String str) {
        AFKeystoreWrapper = (f8128d + 89) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setAppInviteOneLink", str);
        AFLogger.afInfoLog("setAppInviteOneLink = ".concat(String.valueOf(str)));
        if (str == null || !str.equals(AppsFlyerProperties.getInstance().getString(AppsFlyerProperties.ONELINK_ID))) {
            AppsFlyerProperties.getInstance().remove(AppsFlyerProperties.ONELINK_DOMAIN);
            AppsFlyerProperties.getInstance().remove(AppsFlyerProperties.ONELINK_VERSION);
            AppsFlyerProperties.getInstance().remove(AppsFlyerProperties.ONELINK_SCHEME);
        }
        getCurrencyIso4217Code(AppsFlyerProperties.ONELINK_ID, str);
        AFKeystoreWrapper = (f8128d + 91) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setCollectAndroidID(boolean z10) {
        getRevenue(new Object[]{this, Boolean.valueOf(z10)}, 454542992, -454542992, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setCollectIMEI(boolean z10) {
        f8128d = (AFKeystoreWrapper + 111) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setCollectIMEI", String.valueOf(z10));
        getCurrencyIso4217Code(AppsFlyerProperties.COLLECT_IMEI, Boolean.toString(z10));
        getCurrencyIso4217Code(AppsFlyerProperties.COLLECT_IMEI_FORCE_BY_USER, Boolean.toString(z10));
        AFKeystoreWrapper = (f8128d + 115) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    @Deprecated
    public final void setCollectOaid(boolean z10) {
        AFKeystoreWrapper = (f8128d + 43) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setCollectOaid", String.valueOf(z10));
        getCurrencyIso4217Code(AppsFlyerProperties.COLLECT_OAID, Boolean.toString(z10));
        f8128d = (AFKeystoreWrapper + 55) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setConsentData(@NonNull AppsFlyerConsent appsFlyerConsent) {
        f8128d = (AFKeystoreWrapper + 117) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        Objects.requireNonNull(appsFlyerConsent);
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afInfoLog().areAllFieldsValid = appsFlyerConsent;
        f8128d = (AFKeystoreWrapper + 63) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setCurrencyCode(String str) {
        f8128d = (AFKeystoreWrapper + 117) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setCurrencyCode", str);
        AppsFlyerProperties.getInstance().set(AppsFlyerProperties.CURRENCY_CODE, str);
        AFKeystoreWrapper = (f8128d + 15) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setCustomerIdAndLogSession(String str, @NonNull Context context) {
        if (context != null) {
            int i10 = f8128d + 101;
            AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                if (getRevenue()) {
                    setCustomerUserId(str);
                    StringBuilder sb2 = new StringBuilder("CustomerUserId set: ");
                    sb2.append(str);
                    sb2.append(" - Initializing AppsFlyer Tacking");
                    AFLogger.afInfoLog(sb2.toString(), true);
                    String referrer = AppsFlyerProperties.getInstance().getReferrer(((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).component2());
                    getMediationNetwork(context, AFh1xSDK.setCustomerIdAndLogSession);
                    ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMediationNetwork();
                    if (referrer == null) {
                        referrer = "";
                    }
                    if (context instanceof Activity) {
                        int i11 = f8128d + 113;
                        AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        if (i11 % 2 != 0) {
                            ((Activity) context).getIntent();
                            int i12 = 4 / 0;
                        } else {
                            ((Activity) context).getIntent();
                        }
                    }
                    getRevenue(context, referrer);
                    return;
                }
                setCustomerUserId(str);
                AFLogger.afInfoLog("waitForCustomerUserId is false; setting CustomerUserID: ".concat(String.valueOf(str)), true);
                f8128d = (AFKeystoreWrapper + 51) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                return;
            }
            getRevenue();
            throw null;
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setCustomerUserId(String str) {
        f8128d = (AFKeystoreWrapper + 25) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setCustomerUserId", str);
        AFLogger.afInfoLog("setCustomerUserId = ".concat(String.valueOf(str)));
        getCurrencyIso4217Code(AppsFlyerProperties.APP_USER_ID, str);
        getRevenue(new Object[]{AppsFlyerProperties.AF_WAITFOR_CUSTOMERID, Boolean.FALSE}, -222394073, 222394090, (int) System.currentTimeMillis());
        f8128d = (AFKeystoreWrapper + 5) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setDebugLog(boolean z10) {
        AFLogger.LogLevel logLevel;
        AFKeystoreWrapper = (f8128d + 65) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (z10) {
            logLevel = AFLogger.LogLevel.DEBUG;
        } else {
            logLevel = AFLogger.LogLevel.NONE;
        }
        setLogLevel(logLevel);
        f8128d = (AFKeystoreWrapper + 3) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    /* JADX WARN: Code restructure failed: missing block: B:5:0x001d, code lost:
        if (r5 == false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x002b, code lost:
        if (r5 == false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x002d, code lost:
        r1 = true;
     */
    @Override // com.appsflyer.AppsFlyerLib
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void setDisableAdvertisingIdentifiers(boolean r5) {
        /*
            r4 = this;
            int r0 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r0 = r0 + 39
            int r1 = r0 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r1
            int r0 = r0 % 2
            r1 = 0
            java.lang.String r2 = "setDisableAdvertisingIdentifiers: "
            if (r0 != 0) goto L20
            java.lang.String r0 = java.lang.String.valueOf(r5)
            java.lang.String r0 = r2.concat(r0)
            com.appsflyer.AFLogger.afDebugLog(r0)
            r0 = 82
            int r0 = r0 / r1
            if (r5 != 0) goto L2e
            goto L2d
        L20:
            java.lang.String r0 = java.lang.String.valueOf(r5)
            java.lang.String r0 = r2.concat(r0)
            com.appsflyer.AFLogger.afDebugLog(r0)
            if (r5 != 0) goto L2e
        L2d:
            r1 = 1
        L2e:
            java.lang.Boolean r0 = java.lang.Boolean.valueOf(r1)
            com.appsflyer.internal.AFb1kSDK.getMediationNetwork = r0
            java.lang.Object[] r0 = new java.lang.Object[]{r4}
            int r1 = java.lang.System.identityHashCode(r4)
            r2 = 389316487(0x17347f87, float:5.83221E-25)
            r3 = -389316474(0xffffffffe8cb8086, float:-7.68809E24)
            java.lang.Object r0 = getRevenue(r0, r2, r3, r1)
            com.appsflyer.internal.AFc1bSDK r0 = (com.appsflyer.internal.AFc1bSDK) r0
            com.appsflyer.internal.AFc1eSDK r1 = r0.afInfoLog()
            r1.component3 = r5
            if (r5 == 0) goto L78
            int r5 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r5 = r5 + 109
            int r1 = r5 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r1
            int r5 = r5 % 2
            r1 = 0
            if (r5 != 0) goto L71
            com.appsflyer.internal.AFc1eSDK r5 = r0.afInfoLog()
            r5.component2 = r1
            int r5 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r5 = r5 + 7
            int r0 = r5 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r0
            int r5 = r5 % 2
            if (r5 != 0) goto L70
            return
        L70:
            throw r1
        L71:
            com.appsflyer.internal.AFc1eSDK r5 = r0.afInfoLog()
            r5.component2 = r1
            throw r1
        L78:
            com.appsflyer.internal.AFe1nSDK r5 = r0.copydefault()
            com.appsflyer.internal.AFe1fSDK r0 = new com.appsflyer.internal.AFe1fSDK
            com.appsflyer.internal.AFc1bSDK r1 = r4.getCurrencyIso4217Code()
            r0.<init>(r1)
            java.util.concurrent.Executor r1 = r5.AFAdRevenueData
            com.appsflyer.internal.AFe1nSDK$3 r2 = new com.appsflyer.internal.AFe1nSDK$3
            r2.<init>(r0)
            r1.execute(r2)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.setDisableAdvertisingIdentifiers(boolean):void");
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setDisableNetworkData(boolean z10) {
        getRevenue(new Object[]{this, Boolean.valueOf(z10)}, 775079759, -775079747, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setExtension(String str) {
        AFKeystoreWrapper = (f8128d + 9) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setExtension", str);
        AppsFlyerProperties.getInstance().set(AppsFlyerProperties.EXTENSION, str);
        int i10 = AFKeystoreWrapper + 23;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            int i11 = 59 / 0;
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setHost(String str, @NonNull String str2) {
        String str3;
        if (!AFk1xSDK.getMonetizationNetwork(str2)) {
            int i10 = f8128d;
            AFKeystoreWrapper = (i10 + 5) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (str != null) {
                AFKeystoreWrapper = (i10 + 67) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                str3 = str.trim();
            } else {
                str3 = "";
            }
            AFe1ySDK.getMediationNetwork(new AFe1wSDK(str3, str2.trim()));
            return;
        }
        AFLogger.afWarnLog("hostname was empty or null - call for setHost is skipped");
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setImeiData(String str) {
        Object revenue;
        int i10 = f8128d + 37;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setImeiData", str);
            revenue = getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
        } else {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setImeiData", str);
            revenue = getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
        }
        ((AFc1bSDK) revenue).AFKeystoreWrapper().getCurrencyIso4217Code(str);
        int i11 = AFKeystoreWrapper + 61;
        f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 != 0) {
            return;
        }
        throw null;
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x005f, code lost:
        if ((r7 % 2) == 0) goto L23;
     */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x0061, code lost:
        r7 = 52 / 0;
     */
    /* JADX WARN: Code restructure failed: missing block: B:12:0x0064, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x007d, code lost:
        if (((com.appsflyer.internal.AFc1bSDK) getRevenue(new java.lang.Object[]{r6}, 389316487, -389316474, java.lang.System.identityHashCode(r6))).getCurrencyIso4217Code().getRevenue("APPSFLYER_ALLOW_CUSTOM_INSTALL_ID") != false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:15:0x007f, code lost:
        com.appsflyer.AFLogger.INSTANCE.d(com.appsflyer.internal.AFg1cSDK.GENERAL, "APPSFLYER_ALLOW_CUSTOM_INSTALL_ID Manifest flag should be set to true first");
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x0088, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0089, code lost:
        if (r7 != null) goto L17;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x008b, code lost:
        r7 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper + 83;
        com.appsflyer.internal.AFa1uSDK.f8128d = r7 % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x0097, code lost:
        if ((r7 % 2) == 0) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x0099, code lost:
        com.appsflyer.AFLogger.INSTANCE.d(com.appsflyer.internal.AFg1cSDK.GENERAL, "AppsFlyer installId can't be null");
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x00a0, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x00a1, code lost:
        com.appsflyer.AFLogger.INSTANCE.d(com.appsflyer.internal.AFg1cSDK.GENERAL, "AppsFlyer installId can't be null");
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x00a9, code lost:
        throw null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x00aa, code lost:
        com.appsflyer.internal.AFb1jSDK.getCurrencyIso4217Code(r7, ((com.appsflyer.internal.AFc1bSDK) getRevenue(new java.lang.Object[]{r6}, 389316487, -389316474, java.lang.System.identityHashCode(r6))).component2());
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x00bf, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:?, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:5:0x002e, code lost:
        if (r6.toString == false) goto L19;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x004a, code lost:
        if (r6.toString == false) goto L19;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x004c, code lost:
        com.appsflyer.AFLogger.INSTANCE.d(com.appsflyer.internal.AFg1cSDK.GENERAL, "AppsFlyerLib.init() method should be called first");
        r7 = com.appsflyer.internal.AFa1uSDK.f8128d + 57;
        com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r7 % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    @Override // com.appsflyer.AppsFlyerLib
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void setInstallId(@androidx.annotation.NonNull java.lang.String r7) {
        /*
            r6 = this;
            int r0 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r0 = r0 + 95
            int r1 = r0 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r1
            int r0 = r0 % 2
            java.lang.String r1 = "setInstallId"
            r2 = 0
            r3 = -389316474(0xffffffffe8cb8086, float:-7.68809E24)
            r4 = 389316487(0x17347f87, float:5.83221E-25)
            if (r0 != 0) goto L31
            java.lang.Object[] r0 = new java.lang.Object[]{r6}
            int r5 = java.lang.System.identityHashCode(r6)
            java.lang.Object r0 = getRevenue(r0, r4, r3, r5)
            com.appsflyer.internal.AFc1bSDK r0 = (com.appsflyer.internal.AFc1bSDK) r0
            com.appsflyer.internal.AFd1mSDK r0 = r0.equals()
            java.lang.String[] r5 = new java.lang.String[r2]
            r0.getCurrencyIso4217Code(r1, r5)
            boolean r0 = r6.toString
            if (r0 != 0) goto L65
            goto L4c
        L31:
            java.lang.Object[] r0 = new java.lang.Object[]{r6}
            int r5 = java.lang.System.identityHashCode(r6)
            java.lang.Object r0 = getRevenue(r0, r4, r3, r5)
            com.appsflyer.internal.AFc1bSDK r0 = (com.appsflyer.internal.AFc1bSDK) r0
            com.appsflyer.internal.AFd1mSDK r0 = r0.equals()
            java.lang.String[] r5 = new java.lang.String[r2]
            r0.getCurrencyIso4217Code(r1, r5)
            boolean r0 = r6.toString
            if (r0 != 0) goto L65
        L4c:
            com.appsflyer.AFLogger r7 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r0 = com.appsflyer.internal.AFg1cSDK.GENERAL
            java.lang.String r1 = "AppsFlyerLib.init() method should be called first"
            r7.d(r0, r1)
            int r7 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r7 = r7 + 57
            int r0 = r7 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r0
            int r7 = r7 % 2
            if (r7 == 0) goto L64
            r7 = 52
            int r7 = r7 / r2
        L64:
            return
        L65:
            java.lang.Object[] r0 = new java.lang.Object[]{r6}
            int r1 = java.lang.System.identityHashCode(r6)
            java.lang.Object r0 = getRevenue(r0, r4, r3, r1)
            com.appsflyer.internal.AFc1bSDK r0 = (com.appsflyer.internal.AFc1bSDK) r0
            com.appsflyer.internal.AFc1pSDK r0 = r0.getCurrencyIso4217Code()
            java.lang.String r1 = "APPSFLYER_ALLOW_CUSTOM_INSTALL_ID"
            boolean r0 = r0.getRevenue(r1)
            if (r0 != 0) goto L89
            com.appsflyer.AFLogger r7 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r0 = com.appsflyer.internal.AFg1cSDK.GENERAL
            java.lang.String r1 = "APPSFLYER_ALLOW_CUSTOM_INSTALL_ID Manifest flag should be set to true first"
            r7.d(r0, r1)
            return
        L89:
            if (r7 != 0) goto Laa
            int r7 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r7 = r7 + 83
            int r0 = r7 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r0
            int r7 = r7 % 2
            java.lang.String r0 = "AppsFlyer installId can't be null"
            if (r7 == 0) goto La1
            com.appsflyer.AFLogger r7 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r1 = com.appsflyer.internal.AFg1cSDK.GENERAL
            r7.d(r1, r0)
            return
        La1:
            com.appsflyer.AFLogger r7 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r1 = com.appsflyer.internal.AFg1cSDK.GENERAL
            r7.d(r1, r0)
            r7 = 0
            throw r7
        Laa:
            java.lang.Object[] r0 = new java.lang.Object[]{r6}
            int r1 = java.lang.System.identityHashCode(r6)
            java.lang.Object r0 = getRevenue(r0, r4, r3, r1)
            com.appsflyer.internal.AFc1bSDK r0 = (com.appsflyer.internal.AFc1bSDK) r0
            com.appsflyer.internal.AFc1oSDK r0 = r0.component2()
            com.appsflyer.internal.AFb1jSDK.getCurrencyIso4217Code(r7, r0)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.setInstallId(java.lang.String):void");
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setIsUpdate(boolean z10) {
        int i10 = f8128d + 55;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setIsUpdate", String.valueOf(z10));
        } else {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setIsUpdate", String.valueOf(z10));
        }
        AppsFlyerProperties.getInstance().set(AppsFlyerProperties.IS_UPDATE, z10);
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setLogLevel(@NonNull AFLogger.LogLevel logLevel) {
        boolean z10;
        if (logLevel.getLevel() > AFLogger.LogLevel.NONE.getLevel()) {
            AFKeystoreWrapper = (f8128d + 125) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            z10 = true;
        } else {
            AFKeystoreWrapper = (f8128d + 43) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            z10 = false;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("log", String.valueOf(z10));
        AppsFlyerProperties.getInstance().set("logLevel", logLevel.getLevel());
        if (!z10) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afErrorLog().getRevenue();
            int i10 = AFKeystoreWrapper + 11;
            f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                return;
            }
            throw null;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afErrorLog().areAllFieldsValid();
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setMinTimeBetweenSessions(int i10) {
        getRevenue(new Object[]{this, Integer.valueOf(i10)}, 1308989660, -1308989654, i10);
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setOaidData(String str) {
        f8128d = (AFKeystoreWrapper + 3) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setOaidData", str);
        AFb1kSDK.getRevenue = str;
        int i10 = AFKeystoreWrapper + 3;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return;
        }
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setOneLinkCustomDomain(String... strArr) {
        Object revenue;
        int i10 = f8128d + 91;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            AFLogger.afDebugLog(String.format("setOneLinkCustomDomain %s", Arrays.toString(strArr)));
            revenue = getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
        } else {
            AFLogger.afDebugLog(String.format("setOneLinkCustomDomain %s", Arrays.toString(strArr)));
            revenue = getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
        }
        ((AFc1bSDK) revenue).i().areAllFieldsValid = strArr;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setOutOfStore(String str) {
        int i10 = f8128d;
        AFKeystoreWrapper = (i10 + 75) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (str != null) {
            int i11 = i10 + 1;
            AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                String lowerCase = str.toLowerCase(Locale.getDefault());
                AppsFlyerProperties.getInstance().set(AppsFlyerProperties.AF_STORE_FROM_API, lowerCase);
                AFLogger.afInfoLog("Store API set with value: ".concat(String.valueOf(lowerCase)), true);
                return;
            }
            String lowerCase2 = str.toLowerCase(Locale.getDefault());
            AppsFlyerProperties.getInstance().set(AppsFlyerProperties.AF_STORE_FROM_API, lowerCase2);
            AFLogger.afInfoLog("Store API set with value: ".concat(String.valueOf(lowerCase2)), true);
            return;
        }
        AFLogger.afWarnLog("Cannot set setOutOfStore with null", true);
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setPartnerData(@NonNull String str, Map<String, Object> map) {
        String concat;
        f8128d = (AFKeystoreWrapper + 9) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFc1eSDK afInfoLog = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afInfoLog();
        if (afInfoLog.getCurrencyIso4217Code == null) {
            afInfoLog.getCurrencyIso4217Code = new AFb1rSDK();
        }
        AFb1rSDK aFb1rSDK = afInfoLog.getCurrencyIso4217Code;
        if (str != null) {
            AFKeystoreWrapper = (f8128d + 53) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (!str.isEmpty()) {
                if (map != null) {
                    int i10 = f8128d + 5;
                    AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (i10 % 2 == 0) {
                        if (!map.isEmpty()) {
                            StringBuilder sb2 = new StringBuilder("Setting partner data for ");
                            sb2.append(str);
                            sb2.append(": ");
                            sb2.append(map);
                            AFLogger.afDebugLog(sb2.toString());
                            int length = new JSONObject(map).toString().length();
                            if (length > 1000) {
                                AFLogger.afWarnLog("Partner data 1000 characters limit exceeded");
                                HashMap hashMap = new HashMap();
                                hashMap.put("error", "limit exceeded: ".concat(String.valueOf(length)));
                                aFb1rSDK.getCurrencyIso4217Code.put(str, hashMap);
                                return;
                            }
                            aFb1rSDK.getRevenue.put(str, map);
                            aFb1rSDK.getCurrencyIso4217Code.remove(str);
                            return;
                        }
                    } else {
                        map.isEmpty();
                        throw null;
                    }
                }
                if (aFb1rSDK.getRevenue.remove(str) == null) {
                    concat = "Partner data is missing or `null`";
                } else {
                    concat = "Cleared partner data for ".concat(str);
                }
                AFLogger.afWarnLog(concat);
                int i11 = f8128d + 65;
                AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i11 % 2 == 0) {
                    return;
                }
                throw null;
            }
        }
        AFLogger.afWarnLog("Partner ID is missing or `null`");
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setPhoneNumber(String str) {
        int i10 = AFKeystoreWrapper + 23;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afInfoLog().getMonetizationNetwork = AFj1bSDK.getCurrencyIso4217Code(str);
            f8128d = (AFKeystoreWrapper + 5) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afInfoLog().getMonetizationNetwork = AFj1bSDK.getCurrencyIso4217Code(str);
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setPluginInfo(@NonNull PluginInfo pluginInfo) {
        getRevenue(new Object[]{this, pluginInfo}, 1343916491, -1343916486, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setPreinstallAttribution(String str, String str2, String str3) {
        AFLogger.afDebugLog("setPreinstallAttribution API called");
        JSONObject jSONObject = new JSONObject();
        try {
            if (str != null) {
                int i10 = f8128d + 73;
                AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i10 % 2 != 0) {
                    jSONObject.put("pid", str);
                    int i11 = 48 / 0;
                } else {
                    jSONObject.put("pid", str);
                }
            }
            if (str2 != null) {
                jSONObject.put("c", str2);
                AFKeystoreWrapper = (f8128d + 69) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            if (str3 != null) {
                jSONObject.put("af_siteid", str3);
            }
        } catch (JSONException e10) {
            AFLogger.afErrorLog(e10.getMessage(), e10);
        }
        if (jSONObject.has("pid")) {
            AFKeystoreWrapper = (f8128d + 77) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            getCurrencyIso4217Code("preInstallName", jSONObject.toString());
            return;
        }
        AFLogger.afWarnLog("Cannot set preinstall attribution data without a media source");
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setResolveDeepLinkURLs(String... strArr) {
        AFKeystoreWrapper = (f8128d + 51) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFLogger.afDebugLog(String.format("setResolveDeepLinkURLs %s", Arrays.toString(strArr)));
        AFa1rSDK i10 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i();
        i10.component4.clear();
        i10.component4.addAll(Arrays.asList(strArr));
        f8128d = (AFKeystoreWrapper + 37) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    @Override // com.appsflyer.AppsFlyerLib
    @Deprecated
    public final void setSharingFilter(@NonNull String... strArr) {
        getRevenue(new Object[]{this, strArr}, -134062068, 134062070, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    @Deprecated
    public final void setSharingFilterForAllPartners() {
        AFKeystoreWrapper = (f8128d + 113) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        setSharingFilterForPartners("all");
        int i10 = AFKeystoreWrapper + 57;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return;
        }
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setSharingFilterForPartners(String... strArr) {
        getRevenue(new Object[]{this, strArr}, -251208297, 251208317, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setUserEmails(String... strArr) {
        int i10 = f8128d + 89;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setUserEmails", strArr);
            setUserEmails(AppsFlyerProperties.EmailsCryptType.NONE, strArr);
            int i11 = 48 / 0;
            return;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setUserEmails", strArr);
        setUserEmails(AppsFlyerProperties.EmailsCryptType.NONE, strArr);
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void start(@NonNull Context context) {
        int i10 = f8128d + 27;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            start(context, null);
            AFKeystoreWrapper = (f8128d + 61) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return;
        }
        start(context, null);
        throw null;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void stop(boolean z10, Context context) {
        AFc1oSDK component2;
        boolean z11;
        f8128d = (AFKeystoreWrapper + 63) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        getMediationNetwork(context);
        final AFc1bSDK aFc1bSDK = (AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
        aFc1bSDK.AFKeystoreWrapper().getRevenue(z10);
        aFc1bSDK.getMediationNetwork().submit(new Runnable() { // from class: com.appsflyer.internal.d
            @Override // java.lang.Runnable
            public final void run() {
                AFa1uSDK.getMediationNetwork(AFc1bSDK.this);
            }
        });
        if (z10) {
            int i10 = AFKeystoreWrapper + 31;
            f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                component2 = aFc1bSDK.component2();
                z11 = false;
            } else {
                component2 = aFc1bSDK.component2();
                z11 = true;
            }
            component2.getCurrencyIso4217Code("is_stop_tracking_used", z11);
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void subscribeForDeepLink(@NonNull DeepLinkListener deepLinkListener, long j10) {
        int i10 = AFKeystoreWrapper + 61;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i().getRevenue = deepLinkListener;
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i().component2 = j10;
            int i11 = 45 / 0;
            return;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i().getRevenue = deepLinkListener;
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).i().component2 = j10;
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void unregisterConversionListener() {
        getRevenue(new Object[]{this}, 1122585742, -1122585731, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void updateServerUninstallToken(Context context, String str) {
        getRevenue(new Object[]{this, context, str}, 912251885, -912251862, System.identityHashCode(this));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void validateAndLogInAppPurchase(Context context, String str, String str2, String str3, String str4, String str5, Map<String, String> map) {
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("validateAndTrackInAppPurchase", str, str2, str3, str4, str5, map == null ? "" : map.toString());
        if (!((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMonetizationNetwork()) {
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.PURCHASE_VALIDATION;
            StringBuilder sb2 = new StringBuilder("Validate in app called with parameters: ");
            sb2.append(str3);
            sb2.append(" ");
            sb2.append(str4);
            sb2.append(" ");
            sb2.append(str5);
            aFLogger.i(aFg1cSDK, sb2.toString());
        }
        if (str != null && str4 != null) {
            int i10 = AFKeystoreWrapper;
            f8128d = (i10 + 55) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (str2 != null) {
                int i11 = i10 + 105;
                int i12 = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                f8128d = i12;
                if (i11 % 2 == 0) {
                    throw null;
                }
                if (str5 != null) {
                    AFKeystoreWrapper = (i12 + 35) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (str3 != null) {
                        new Thread(new AFa1vSDK(context.getApplicationContext(), getCurrencyIso4217Code().AFKeystoreWrapper().getMediationNetwork(), str, str2, str3, str4, str5, map)).start();
                        return;
                    }
                }
            }
        }
        AppsFlyerInAppPurchaseValidatorListener appsFlyerInAppPurchaseValidatorListener = getCurrencyIso4217Code;
        if (appsFlyerInAppPurchaseValidatorListener != null) {
            appsFlyerInAppPurchaseValidatorListener.onValidateInAppFailure("Please provide purchase parameters");
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void waitForCustomerUserId(boolean z10) {
        AFKeystoreWrapper = (f8128d + 43) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFLogger.afInfoLog("initAfterCustomerUserID: ".concat(String.valueOf(z10)), true);
        getRevenue(new Object[]{AppsFlyerProperties.AF_WAITFOR_CUSTOMERID, Boolean.valueOf(z10)}, -222394073, 222394090, (int) System.currentTimeMillis());
        f8128d = (AFKeystoreWrapper + 107) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    /* JADX WARN: Code restructure failed: missing block: B:0:?, code lost:
        r11 = r11;
     */
    /* JADX WARN: Removed duplicated region for block: B:26:0x0070  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x007f  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:26:0x0070 -> B:22:0x0060). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static void a(java.lang.String r10, java.lang.String r11, int[] r12, int r13, java.lang.Object[] r14) {
        /*
            Method dump skipped, instructions count: 237
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.a(java.lang.String, java.lang.String, int[], int, java.lang.Object[]):void");
    }

    private void component2() {
        f8128d = (AFKeystoreWrapper + 77) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        try {
            final AFi1jSDK v10 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).v();
            if (v10 == null) {
                return;
            }
            if (v10.getMonetizationNetwork()) {
                AFKeystoreWrapper = (f8128d + 9) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                v10.getMonetizationNetwork(new AFi1eSDK() { // from class: com.appsflyer.internal.a
                    @Override // com.appsflyer.internal.AFi1eSDK
                    public final void onRequestFinished() {
                        AFa1uSDK.this.getMediationNetwork(v10);
                    }
                });
            } else if (v10.getMediationNetwork()) {
            } else {
                getMonetizationNetwork(v10);
            }
        } catch (Throwable th2) {
            AFLogger.afErrorLogForExcManagerOnly("Error at attempt to request PIA token", th2);
            AFLogger.afRDLog("Get PIA token failed with exception:".concat(String.valueOf(th2)));
        }
    }

    public final void getMonetizationNetwork(Context context, String str) {
        JSONArray jSONArray;
        JSONArray jSONArray2;
        JSONObject jSONObject;
        AFLogger.afDebugLog("received a new (extra) referrer: ".concat(String.valueOf(str)));
        try {
            long currentTimeMillis = System.currentTimeMillis();
            String monetizationNetwork = ((AFc1oSDK) getRevenue(new Object[]{this, context}, -1595266545, 1595266567, System.identityHashCode(this))).getMonetizationNetwork("extraReferrers", null);
            if (monetizationNetwork == null) {
                jSONObject = new JSONObject();
                jSONArray2 = new JSONArray();
            } else {
                JSONObject jSONObject2 = new JSONObject(monetizationNetwork);
                if (jSONObject2.has(str)) {
                    jSONArray = new JSONArray((String) jSONObject2.get(str));
                } else {
                    jSONArray = new JSONArray();
                }
                jSONArray2 = jSONArray;
                jSONObject = jSONObject2;
            }
            if (jSONArray2.length() < 5) {
                f8128d = (AFKeystoreWrapper + 21) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                jSONArray2.put(currentTimeMillis);
                AFKeystoreWrapper = (f8128d + 57) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            if (jSONObject.length() >= 4) {
                int i10 = AFKeystoreWrapper + 117;
                f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i10 % 2 == 0) {
                    AFAdRevenueData(jSONObject);
                    int i11 = 14 / 0;
                } else {
                    AFAdRevenueData(jSONObject);
                }
            }
            jSONObject.put(str, jSONArray2.toString());
            ((AFc1oSDK) getRevenue(new Object[]{this, context}, -1595266545, 1595266567, System.identityHashCode(this))).AFAdRevenueData("extraReferrers", jSONObject.toString());
        } catch (JSONException e10) {
            AFLogger.afErrorLogForExcManagerOnly("error at addReferrer", e10);
        } catch (Throwable th2) {
            StringBuilder sb2 = new StringBuilder("Couldn't save referrer - ");
            sb2.append(str);
            sb2.append(": ");
            AFLogger.afErrorLog(sb2.toString(), th2);
        }
    }

    static void component3() {
        AFInAppEventParameterName = new char[]{35848, 35853, 35850, 35871, 35840, 35844, 35852, 35870, 35867};
        AFInAppEventType = 1912311211;
        registerClient = true;
        AFLogger = true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void copy() {
        AFi1pSDK aFi1qSDK;
        int i10 = AFKeystoreWrapper + 125;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            if (((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afRDLog().getMonetizationNetwork()) {
                ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afRDLog().getRevenue();
            }
            AFi1sSDK w10 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).w();
            if (Build.VERSION.SDK_INT >= 31) {
                aFi1qSDK = new AFi1oSDK(w10.getCurrencyIso4217Code);
            } else {
                aFi1qSDK = new AFi1qSDK(w10.getCurrencyIso4217Code);
                AFKeystoreWrapper = (f8128d + 67) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            w10.getMediationNetwork = aFi1qSDK;
            AFf1cSDK AFKeystoreWrapper2 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper();
            AFf1cSDK.getRevenue(new Object[]{AFKeystoreWrapper2, ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).getCurrencyIso4217Code()}, 826598914, -826598912, System.identityHashCode(AFKeystoreWrapper2));
            AFh1tSDK component3 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).component3();
            component3.component2 = System.currentTimeMillis();
            int mediationNetwork = component3.getMediationNetwork.getMonetizationNetwork.getMediationNetwork("appsFlyerCount", 0);
            if (mediationNetwork == 1 && component3.getCurrencyIso4217Code.getRevenue("first_launch")) {
                AFKeystoreWrapper = (f8128d + 71) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                component3.getMonetizationNetwork.putAll(component3.AFAdRevenueData("first_launch"));
            }
            if (mediationNetwork > 0 && component3.getCurrencyIso4217Code.getRevenue("gcd")) {
                AFKeystoreWrapper = (f8128d + 75) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                component3.AFAdRevenueData.putAll(component3.AFAdRevenueData("gcd"));
            }
            component3.hashCode = component3.getCurrencyIso4217Code.getCurrencyIso4217Code("prev_session_dur", 0L);
            component2();
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFInAppEventType().getCurrencyIso4217Code();
            return;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afRDLog().getMonetizationNetwork();
        throw null;
    }

    private static void copydefault() {
        int i10 = f8128d + 121;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            AFLogger.INSTANCE.w(AFg1cSDK.SDK_LIFECYCLE, "ERROR: AppsFlyer SDK is not initialized! You must provide AppsFlyer Dev-Key either in the 'init' API method (should be called on Application's onCreate),or in the start() API (should be called on Activity's onCreate).");
        } else {
            AFLogger.INSTANCE.w(AFg1cSDK.SDK_LIFECYCLE, "ERROR: AppsFlyer SDK is not initialized! You must provide AppsFlyer Dev-Key either in the 'init' API method (should be called on Application's onCreate),or in the start() API (should be called on Activity's onCreate).");
            throw null;
        }
    }

    private static String getCurrencyIso4217Code(String str) {
        int i10 = AFKeystoreWrapper + 105;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return AppsFlyerProperties.getInstance().getString(str);
        }
        AppsFlyerProperties.getInstance().getString(str);
        throw null;
    }

    final void component4() {
        f8128d = (AFKeystoreWrapper + 9) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (AFe1dSDK.component2()) {
            int i10 = AFKeystoreWrapper + 45;
            f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                int i11 = 68 / 0;
                return;
            }
            return;
        }
        AFc1bSDK aFc1bSDK = (AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
        AFe1nSDK copydefault = aFc1bSDK.copydefault();
        copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(new AFe1dSDK(aFc1bSDK)));
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void start(@NonNull Context context, String str) {
        f8128d = (AFKeystoreWrapper + 1) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        start(context, str, null);
        f8128d = (AFKeystoreWrapper + 29) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    final void getCurrencyIso4217Code(AFh1jSDK aFh1jSDK) {
        long j10;
        AFj1qSDK[] aFj1qSDKArr;
        Context context = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).registerClient().getRevenue;
        boolean z10 = true;
        if (context == null) {
            int i10 = f8128d + 71;
            AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                AFLogger.INSTANCE.d(AFg1cSDK.ATTRIBUTION, "sendWithEvent - got null context. skipping event/launch.", true);
                return;
            } else {
                AFLogger.INSTANCE.d(AFg1cSDK.ATTRIBUTION, "sendWithEvent - got null context. skipping event/launch.", true);
                return;
            }
        }
        String mediationNetwork = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMediationNetwork();
        AppsFlyerRequestListener appsFlyerRequestListener = aFh1jSDK.getMonetizationNetwork;
        if (mediationNetwork != null && mediationNetwork.length() != 0) {
            AFc1oSDK aFc1oSDK = (AFc1oSDK) getRevenue(new Object[]{this, context}, -1595266545, 1595266567, System.identityHashCode(this));
            AppsFlyerProperties.getInstance().saveProperties(aFc1oSDK);
            if (!((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMonetizationNetwork()) {
                AFLogger aFLogger = AFLogger.INSTANCE;
                AFg1cSDK aFg1cSDK = AFg1cSDK.GENERAL;
                StringBuilder sb2 = new StringBuilder("sendWithEvent from activity: ");
                sb2.append(context.getClass().getName());
                aFLogger.i(aFg1cSDK, sb2.toString(), true);
            }
            boolean mediationNetwork2 = aFh1jSDK.getMediationNetwork();
            Map<String, ?> revenue = getRevenue(aFh1jSDK);
            if (((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMonetizationNetwork()) {
                AFLogger.INSTANCE.i(AFg1cSDK.GENERAL, "AppsFlyerLib.sendWithEvent");
                AFKeystoreWrapper = (f8128d + 109) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
            int monetizationNetwork = getMonetizationNetwork(aFc1oSDK, false);
            getRevenue(new Object[]{this, revenue}, 1290570600, -1290570599, System.identityHashCode(this));
            AFa1tSDK aFa1tSDK = new AFa1tSDK(getCurrencyIso4217Code(), aFh1jSDK.getMonetizationNetwork(revenue).getMonetizationNetwork(monetizationNetwork), getCurrencyIso4217Code().unregisterClient().getCurrencyIso4217Code());
            if (mediationNetwork2) {
                boolean z11 = false;
                for (AFj1qSDK aFj1qSDK : (AFj1qSDK[]) getRevenue(new Object[]{this}, -187960988, 187961006, System.identityHashCode(this))) {
                    if (aFj1qSDK.areAllFieldsValid == AFj1qSDK.AFa1vSDK.STARTED) {
                        AFLogger aFLogger2 = AFLogger.INSTANCE;
                        AFg1cSDK aFg1cSDK2 = AFg1cSDK.REFERRER;
                        StringBuilder sb3 = new StringBuilder("Failed to get ");
                        sb3.append(aFj1qSDK.getCurrencyIso4217Code);
                        sb3.append(" referrer, wait ...");
                        aFLogger2.d(aFg1cSDK2, sb3.toString());
                        z11 = true;
                    }
                }
                if (((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).unregisterClient().getRevenue()) {
                    AFLogger.INSTANCE.d(AFg1cSDK.REFERRER, "fetching Facebook deferred AppLink data, wait ...");
                    z11 = true;
                }
                if (((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().AFAdRevenueData()) {
                    AFKeystoreWrapper = (f8128d + 15) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                } else {
                    z10 = z11;
                }
            } else {
                z10 = false;
            }
            ScheduledExecutorService monetizationNetwork2 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).getMonetizationNetwork();
            if (z10) {
                int i11 = AFKeystoreWrapper + 99;
                f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i11 % 2 == 0) {
                    int i12 = 29 / 0;
                }
                j10 = 500;
            } else {
                j10 = 0;
            }
            AFj1aSDK.AFAdRevenueData(monetizationNetwork2, aFa1tSDK, j10, TimeUnit.MILLISECONDS);
            return;
        }
        AFLogger aFLogger3 = AFLogger.INSTANCE;
        AFg1cSDK aFg1cSDK3 = AFg1cSDK.GENERAL;
        aFLogger3.i(aFg1cSDK3, "AppsFlyer dev key is missing!!! Please use  AppsFlyerLib.getInstance().setAppsFlyerKey(...) to set it. ", true);
        aFLogger3.i(aFg1cSDK3, "AppsFlyer will not track this event.", true);
        if (appsFlyerRequestListener != null) {
            appsFlyerRequestListener.onError(41, "No dev key");
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void setUserEmails(AppsFlyerProperties.EmailsCryptType emailsCryptType, String... strArr) {
        ArrayList arrayList = new ArrayList(strArr.length + 1);
        arrayList.add(emailsCryptType.toString());
        arrayList.addAll(Arrays.asList(strArr));
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code("setUserEmails", (String[]) arrayList.toArray(new String[strArr.length + 1]));
        AppsFlyerProperties.getInstance().set(AppsFlyerProperties.EMAIL_CRYPT_TYPE, emailsCryptType.getValue());
        HashMap hashMap = new HashMap();
        ArrayList arrayList2 = new ArrayList();
        int length = strArr.length;
        String str = null;
        for (int i10 = 0; i10 < length; i10++) {
            int i11 = f8128d + 121;
            AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 == 0) {
                String str2 = strArr[i10];
                if (AnonymousClass2.getRevenue[emailsCryptType.ordinal()] != 2) {
                    arrayList2.add(AFj1bSDK.getCurrencyIso4217Code(str2));
                    str = "sha256_el_arr";
                } else {
                    arrayList2.add(str2);
                    str = "plain_el_arr";
                }
            } else {
                String str3 = strArr[i10];
                int i12 = AnonymousClass2.getRevenue[emailsCryptType.ordinal()];
                throw null;
            }
        }
        hashMap.put(str, arrayList2);
        AppsFlyerProperties.getInstance().setUserEmails(new JSONObject(hashMap).toString());
        int i13 = f8128d + 35;
        AFKeystoreWrapper = i13 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i13 % 2 != 0) {
            throw null;
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void start(@NonNull Context context, String str, final AppsFlyerRequestListener appsFlyerRequestListener) {
        if (((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afDebugLog().getCurrencyIso4217Code()) {
            return;
        }
        if (!this.toString) {
            getMediationNetwork(ViewProps.START);
            if (str == null) {
                int i10 = AFKeystoreWrapper + 79;
                int i11 = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                f8128d = i11;
                if (i10 % 2 == 0) {
                    throw null;
                }
                if (appsFlyerRequestListener != null) {
                    int i12 = i11 + 21;
                    AFKeystoreWrapper = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    if (i12 % 2 != 0) {
                        appsFlyerRequestListener.onError(88, "No dev key");
                        return;
                    } else {
                        appsFlyerRequestListener.onError(41, "No dev key");
                        return;
                    }
                }
                return;
            }
        }
        getMediationNetwork(context);
        final AFh1tSDK component3 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).component3();
        component3.getRevenue(AFh1uSDK.getRevenue(context));
        if (this.component3 == null) {
            f8128d = (AFKeystoreWrapper + 35) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            Application O_ = AFj1iSDK.O_(context);
            if (O_ == null) {
                return;
            }
            f8128d = (AFKeystoreWrapper + 109) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            this.component3 = O_;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).equals().getCurrencyIso4217Code(ViewProps.START, str);
        AFLogger aFLogger = AFLogger.INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.GENERAL;
        String str2 = getRevenue;
        aFLogger.i(aFg1cSDK, String.format("Starting AppsFlyer: (v%s.%s)", "6.17.3", str2));
        StringBuilder sb2 = new StringBuilder("Build Number: ");
        sb2.append(str2);
        aFLogger.i(aFg1cSDK, sb2.toString());
        AppsFlyerProperties.getInstance().loadProperties(((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).component2());
        if (!TextUtils.isEmpty(str)) {
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMonetizationNetwork(str);
        } else if (TextUtils.isEmpty(((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMediationNetwork())) {
            int i13 = AFKeystoreWrapper + 63;
            f8128d = i13 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i13 % 2 == 0) {
                copydefault();
                int i14 = 69 / 0;
                if (appsFlyerRequestListener == null) {
                    return;
                }
            } else {
                copydefault();
                if (appsFlyerRequestListener == null) {
                    return;
                }
            }
            AFKeystoreWrapper = (f8128d + 29) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            appsFlyerRequestListener.onError(41, "No dev key");
            return;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).component1().getRevenue(AFAdRevenueData());
        component4();
        c_(this.component3.getBaseContext(), this.hashCode.getCurrencyIso4217Code().n_());
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).unregisterClient().getMediationNetwork();
        this.hashCode.afDebugLog().getCurrencyIso4217Code(context, new AFb1aSDK.AFa1ySDK() { // from class: com.appsflyer.internal.AFa1uSDK.3
            @Override // com.appsflyer.internal.AFb1aSDK.AFa1ySDK
            public final void getMediationNetwork() {
                AFa1uSDK aFa1uSDK = AFa1uSDK.this;
                Context context2 = ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).registerClient().getRevenue;
                AFLogger.afInfoLog("onBecameBackground");
                AFh1tSDK aFh1tSDK = component3;
                long currentTimeMillis = System.currentTimeMillis();
                long j10 = aFh1tSDK.component3;
                if (j10 != 0) {
                    long j11 = currentTimeMillis - j10;
                    if (j11 > 0 && j11 < 1000) {
                        j11 = 1000;
                    }
                    long seconds = TimeUnit.MILLISECONDS.toSeconds(j11);
                    aFh1tSDK.hashCode = seconds;
                    aFh1tSDK.getCurrencyIso4217Code.getRevenue("prev_session_dur", seconds);
                } else {
                    AFLogger.afInfoLog("Metrics: fg ts is missing");
                }
                AFLogger.afInfoLog("callStatsBackground background call");
                AFa1uSDK aFa1uSDK2 = AFa1uSDK.this;
                ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK2}, 389316487, -389316474, System.identityHashCode(aFa1uSDK2))).afWarnLog().getCurrencyIso4217Code();
                AFa1uSDK aFa1uSDK3 = AFa1uSDK.this;
                AFd1mSDK equals = ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK3}, 389316487, -389316474, System.identityHashCode(aFa1uSDK3))).equals();
                if (equals.areAllFieldsValid()) {
                    equals.AFAdRevenueData();
                    if (context2 != null && !AppsFlyerLib.getInstance().isStopped()) {
                        equals.q_(context2.getPackageName(), context2.getPackageManager());
                    }
                    equals.getRevenue();
                } else {
                    AFLogger.afDebugLog("RD status is OFF");
                }
                AFa1uSDK aFa1uSDK4 = AFa1uSDK.this;
                ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK4}, 389316487, -389316474, System.identityHashCode(aFa1uSDK4))).copy().getMediationNetwork();
                AFa1uSDK aFa1uSDK5 = AFa1uSDK.this;
                ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK5}, 389316487, -389316474, System.identityHashCode(aFa1uSDK5))).afErrorLogForExcManagerOnly().getMediationNetwork();
                AFa1uSDK aFa1uSDK6 = AFa1uSDK.this;
                ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK6}, 389316487, -389316474, System.identityHashCode(aFa1uSDK6))).AFAdRevenueData().AFAdRevenueData();
                AFa1uSDK aFa1uSDK7 = AFa1uSDK.this;
                AFh1qSDK afLogForce = ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK7}, 389316487, -389316474, System.identityHashCode(aFa1uSDK7))).afLogForce();
                if (afLogForce != null) {
                    afLogForce.getCurrencyIso4217Code();
                }
            }

            @Override // com.appsflyer.internal.AFb1aSDK.AFa1ySDK
            public final void getMonetizationNetwork(@NonNull AFh1rSDK aFh1rSDK) {
                Intent intent;
                component3.getMonetizationNetwork();
                AFa1uSDK aFa1uSDK = AFa1uSDK.this;
                AFc1bSDK aFc1bSDK = (AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK));
                aFc1bSDK.component1().getRevenue(AFa1uSDK.this.AFAdRevenueData());
                AFa1uSDK.this.component4();
                int mediationNetwork = aFc1bSDK.getCurrencyIso4217Code().getMonetizationNetwork.getMediationNetwork("appsFlyerCount", 0);
                AFLogger.afInfoLog("onBecameForeground");
                if (mediationNetwork < 2) {
                    AFa1uSDK aFa1uSDK2 = AFa1uSDK.this;
                    ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK2}, 389316487, -389316474, System.identityHashCode(aFa1uSDK2))).copy().getMonetizationNetwork();
                }
                AFh1eSDK aFh1eSDK = new AFh1eSDK();
                AFa1uSDK aFa1uSDK3 = AFa1uSDK.this;
                ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK3}, 389316487, -389316474, System.identityHashCode(aFa1uSDK3))).i().f_(AFa1gSDK.AFAdRevenueData(aFh1eSDK), aFh1rSDK.getMediationNetwork, aFc1bSDK.registerClient().getRevenue);
                AFh1qSDK afLogForce = aFc1bSDK.afLogForce();
                if (afLogForce != null && (intent = aFh1rSDK.getMediationNetwork) != null) {
                    AFa1uSDK aFa1uSDK4 = AFa1uSDK.this;
                    afLogForce.u_(intent, ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK4}, 389316487, -389316474, System.identityHashCode(aFa1uSDK4))).i());
                }
                AFa1uSDK aFa1uSDK5 = AFa1uSDK.this;
                aFh1eSDK.getMonetizationNetwork = appsFlyerRequestListener;
                aFa1uSDK5.getMediationNetwork(aFh1eSDK, aFh1rSDK);
                AFa1uSDK aFa1uSDK6 = AFa1uSDK.this;
                ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK6}, 389316487, -389316474, System.identityHashCode(aFa1uSDK6))).AFAdRevenueData().AFAdRevenueData();
                AFa1uSDK aFa1uSDK7 = AFa1uSDK.this;
                ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{aFa1uSDK7}, 389316487, -389316474, System.identityHashCode(aFa1uSDK7))).AFAdRevenueData().getRevenue.getCurrencyIso4217Code("didSendRevenueTriggerOnLastBackground", false);
            }
        });
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void subscribeForDeepLink(@NonNull DeepLinkListener deepLinkListener) {
        getRevenue(new Object[]{this, deepLinkListener}, 1831672072, -1831672058, System.identityHashCode(this));
    }

    private boolean areAllFieldsValid() {
        f8128d = (AFKeystoreWrapper + 19) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (this.component4 > 0) {
            long currentTimeMillis = System.currentTimeMillis() - this.component4;
            Locale locale = Locale.US;
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss.SSS Z", locale);
            String mediationNetwork = getMediationNetwork(simpleDateFormat, this.component4);
            String mediationNetwork2 = getMediationNetwork(simpleDateFormat, this.getMonetizationNetwork);
            if (currentTimeMillis < this.component2 && !isStopped()) {
                int i10 = AFKeystoreWrapper + 121;
                f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i10 % 2 != 0) {
                    AFLogger.afInfoLog(String.format(locale, "Last Launch attempt: %s;\nLast successful Launch event: %s;\nThis launch is blocked: %s ms < %s ms", mediationNetwork, mediationNetwork2, Long.valueOf(currentTimeMillis), Long.valueOf(this.component2)));
                    return true;
                }
                Object[] objArr = new Object[4];
                objArr[1] = mediationNetwork;
                objArr[1] = mediationNetwork2;
                objArr[4] = Long.valueOf(currentTimeMillis);
                objArr[2] = Long.valueOf(this.component2);
                AFLogger.afInfoLog(String.format(locale, "Last Launch attempt: %s;\nLast successful Launch event: %s;\nThis launch is blocked: %s ms < %s ms", objArr));
                return false;
            } else if (!isStopped()) {
                AFKeystoreWrapper = (f8128d + 97) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                AFLogger.afInfoLog(String.format(locale, "Last Launch attempt: %s;\nLast successful Launch event: %s;\nSending launch (+%s ms)", mediationNetwork, mediationNetwork2, Long.valueOf(currentTimeMillis)));
            }
        } else if (!isStopped()) {
            int i11 = AFKeystoreWrapper + 77;
            f8128d = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                AFLogger.afInfoLog("Sending first launch for this session!");
            } else {
                AFLogger.afInfoLog("Sending first launch for this session!");
                throw null;
            }
        }
        return false;
    }

    private static /* synthetic */ Object getMediationNetwork(Object[] objArr) {
        AFa1uSDK aFa1uSDK = (AFa1uSDK) objArr[0];
        Context context = (Context) objArr[1];
        AFj1kSDK aFj1kSDK = new AFj1kSDK((Intent) objArr[2]);
        if (aFj1kSDK.getCurrencyIso4217Code("appsflyer_preinstall") != null) {
            int i10 = AFKeystoreWrapper + 53;
            f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                getRevenue(new Object[]{aFj1kSDK.getCurrencyIso4217Code("appsflyer_preinstall")}, 698517988, -698517984, (int) System.currentTimeMillis());
                throw null;
            }
            getRevenue(new Object[]{aFj1kSDK.getCurrencyIso4217Code("appsflyer_preinstall")}, 698517988, -698517984, (int) System.currentTimeMillis());
        }
        AFLogger.afInfoLog("****** onReceive called *******");
        AppsFlyerProperties.getInstance();
        String currencyIso4217Code = aFj1kSDK.getCurrencyIso4217Code("referrer");
        AFLogger.afInfoLog("Play store referrer: ".concat(String.valueOf(currencyIso4217Code)));
        if (currencyIso4217Code != null) {
            f8128d = (AFKeystoreWrapper + 87) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            ((AFc1oSDK) getRevenue(new Object[]{aFa1uSDK, context}, -1595266545, 1595266567, System.identityHashCode(aFa1uSDK))).AFAdRevenueData("referrer", currencyIso4217Code);
            AppsFlyerProperties appsFlyerProperties = AppsFlyerProperties.getInstance();
            appsFlyerProperties.set("AF_REFERRER", currencyIso4217Code);
            appsFlyerProperties.AFAdRevenueData = currencyIso4217Code;
            if (AppsFlyerProperties.getInstance().AFAdRevenueData()) {
                AFLogger.afInfoLog("onReceive: isLaunchCalled");
                aFa1uSDK.getMediationNetwork(context, AFh1xSDK.onReceive);
                aFa1uSDK.getRevenue(currencyIso4217Code);
                AFKeystoreWrapper = (f8128d + 55) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            }
        }
        int i11 = f8128d + 35;
        AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i11 % 2 != 0) {
            int i12 = 83 / 0;
        }
        return null;
    }

    private static void component2(Context context) {
        try {
            List asList = Arrays.asList(context.getPackageManager().getPackageInfo(context.getPackageName(), RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT).requestedPermissions);
            if (!asList.contains("android.permission.INTERNET")) {
                f8128d = (AFKeystoreWrapper + 73) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                AFLogger.INSTANCE.w(AFg1cSDK.GENERAL, "Permission android.permission.INTERNET is missing in the AndroidManifest.xml");
            }
            if (!asList.contains("android.permission.ACCESS_NETWORK_STATE")) {
                AFKeystoreWrapper = (f8128d + 95) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                AFLogger.INSTANCE.w(AFg1cSDK.GENERAL, "Permission android.permission.ACCESS_NETWORK_STATE is missing in the AndroidManifest.xml");
            }
            if (Build.VERSION.SDK_INT <= 32 || asList.contains("com.google.android.gms.permission.AD_ID")) {
                return;
            }
            AFLogger.INSTANCE.w(AFg1cSDK.GENERAL, "Permission com.google.android.gms.permission.AD_ID is missing in the AndroidManifest.xml");
            f8128d = (AFKeystoreWrapper + 33) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } catch (Exception e10) {
            AFLogger.INSTANCE.e(AFg1cSDK.GENERAL, "Exception while validation permissions. ", e10);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x001c, code lost:
        if (r3.equals == null) goto L13;
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x001e, code lost:
        r1 = r1 + 123;
        com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r1 % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0026, code lost:
        if ((r1 % 2) != 0) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0028, code lost:
        r3.equals = new com.appsflyer.internal.b(r3);
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x0030, code lost:
        r3.equals = new com.appsflyer.internal.b(r3);
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0038, code lost:
        throw null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x0013, code lost:
        if (r3.equals == null) goto L13;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    final synchronized com.appsflyer.internal.AFf1nSDK AFAdRevenueData() {
        /*
            r3 = this;
            monitor-enter(r3)
            int r0 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper     // Catch: java.lang.Throwable -> L18
            int r0 = r0 + 83
            int r1 = r0 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r1     // Catch: java.lang.Throwable -> L18
            int r0 = r0 % 2
            if (r0 != 0) goto L1a
            com.appsflyer.internal.AFf1nSDK r0 = r3.equals     // Catch: java.lang.Throwable -> L18
            r2 = 14
            int r2 = r2 / 0
            if (r0 != 0) goto L39
            goto L1e
        L16:
            r0 = move-exception
            throw r0     // Catch: java.lang.Throwable -> L18
        L18:
            r0 = move-exception
            goto L3d
        L1a:
            com.appsflyer.internal.AFf1nSDK r0 = r3.equals     // Catch: java.lang.Throwable -> L18
            if (r0 != 0) goto L39
        L1e:
            int r1 = r1 + 123
            int r0 = r1 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r0     // Catch: java.lang.Throwable -> L18
            int r1 = r1 % 2
            if (r1 != 0) goto L30
            com.appsflyer.internal.b r0 = new com.appsflyer.internal.b     // Catch: java.lang.Throwable -> L18
            r0.<init>()     // Catch: java.lang.Throwable -> L18
            r3.equals = r0     // Catch: java.lang.Throwable -> L18
            goto L39
        L30:
            com.appsflyer.internal.b r0 = new com.appsflyer.internal.b     // Catch: java.lang.Throwable -> L18
            r0.<init>()     // Catch: java.lang.Throwable -> L18
            r3.equals = r0     // Catch: java.lang.Throwable -> L18
            r0 = 0
            throw r0     // Catch: java.lang.Throwable -> L16
        L39:
            com.appsflyer.internal.AFf1nSDK r0 = r3.equals     // Catch: java.lang.Throwable -> L18
            monitor-exit(r3)
            return r0
        L3d:
            monitor-exit(r3)     // Catch: java.lang.Throwable -> L18
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.AFAdRevenueData():com.appsflyer.internal.AFf1nSDK");
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void validateAndLogInAppPurchase(@NonNull AFPurchaseDetails aFPurchaseDetails, Map<String, String> map, AppsFlyerInAppPurchaseValidationCallback appsFlyerInAppPurchaseValidationCallback) {
        AFe1nSDK copydefault = this.hashCode.copydefault();
        copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(new AFf1zSDK(this.hashCode, AppsFlyerProperties.getInstance(), aFPurchaseDetails, map, appsFlyerInAppPurchaseValidationCallback)));
        int i10 = f8128d + 119;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            throw null;
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:41:0x00db A[LOOP:4: B:21:0x006f->B:41:0x00db, LOOP_END] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static void AFAdRevenueData(org.json.JSONObject r13) {
        /*
            Method dump skipped, instructions count: 244
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.AFAdRevenueData(org.json.JSONObject):void");
    }

    private void getMonetizationNetwork(AFi1jSDK aFi1jSDK) {
        AFf1ySDK aFf1ySDK = new AFf1ySDK(aFi1jSDK, getCurrencyIso4217Code().getCurrencyIso4217Code(), getCurrencyIso4217Code(), getCurrencyIso4217Code().component4(), getCurrencyIso4217Code().registerClient());
        AFe1nSDK copydefault = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).copydefault();
        copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFf1ySDK));
        f8128d = (AFKeystoreWrapper + 1) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static /* synthetic */ void getMediationNetwork(AFc1bSDK aFc1bSDK) {
        int i10 = f8128d + 49;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        int i11 = i10 % 2;
        aFc1bSDK.AFInAppEventType().getMonetizationNetwork();
        if (i11 != 0) {
            int i12 = 22 / 0;
        }
    }

    @Override // com.appsflyer.AppsFlyerLib
    public final void logEvent(Context context, String str, Map<String, Object> map) {
        getRevenue(new Object[]{this, context, str, map}, -1613836572, 1613836582, System.identityHashCode(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void getMediationNetwork(boolean z10) {
        int i10 = AFKeystoreWrapper;
        f8128d = (i10 + 113) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (z10) {
            f8128d = (i10 + 99) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afErrorLog().getCurrencyIso4217Code();
            return;
        }
        ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).afErrorLog().getMonetizationNetwork();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void getMediationNetwork(AFi1jSDK aFi1jSDK) {
        int i10 = f8128d + 57;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        int i11 = i10 % 2;
        getMonetizationNetwork(aFi1jSDK);
        if (i11 != 0) {
            throw null;
        }
    }

    public static String getMediationNetwork() {
        AFKeystoreWrapper = (f8128d + 63) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        String currencyIso4217Code = getCurrencyIso4217Code(AppsFlyerProperties.APP_USER_ID);
        int i10 = AFKeystoreWrapper + 85;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            int i11 = 76 / 0;
        }
        return currencyIso4217Code;
    }

    private void getMediationNetwork(Context context, AFh1xSDK aFh1xSDK) {
        AFKeystoreWrapper = (f8128d + 29) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        getMediationNetwork(context);
        AFh1tSDK component3 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).component3();
        AFh1uSDK revenue = AFh1uSDK.getRevenue(context);
        if (component3.getCurrencyIso4217Code()) {
            int i10 = f8128d + 125;
            AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                component3.getMonetizationNetwork.put("api_name", aFh1xSDK.toString());
                component3.getRevenue(revenue);
                int i11 = 2 / 0;
            } else {
                component3.getMonetizationNetwork.put("api_name", aFh1xSDK.toString());
                component3.getRevenue(revenue);
            }
        }
        component3.getMonetizationNetwork();
    }

    @Deprecated
    public static Map<String, Object> getMonetizationNetwork(Map<String, Object> map) {
        Map<String, Object> map2;
        AFKeystoreWrapper = (f8128d + 27) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (map.containsKey("meta")) {
            f8128d = (AFKeystoreWrapper + 109) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            map2 = (Map) map.get("meta");
        } else {
            HashMap hashMap = new HashMap();
            map.put("meta", hashMap);
            map2 = hashMap;
        }
        int i10 = AFKeystoreWrapper + 7;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            int i11 = 71 / 0;
        }
        return map2;
    }

    private static /* synthetic */ Object getMonetizationNetwork(Object[] objArr) {
        String str = (String) objArr[0];
        try {
            if (new JSONObject(str).has("pid")) {
                int i10 = AFKeystoreWrapper + 45;
                f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i10 % 2 != 0) {
                    getCurrencyIso4217Code("preInstallName", str);
                    AFKeystoreWrapper = (f8128d + 43) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    return null;
                }
                getCurrencyIso4217Code("preInstallName", str);
                throw null;
            }
            AFLogger.afWarnLog("Cannot set preinstall attribution data without a media source");
            f8128d = (AFKeystoreWrapper + 113) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return null;
        } catch (JSONException e10) {
            AFLogger.afErrorLog("Error parsing JSON for preinstall", e10);
            return null;
        }
    }

    private static boolean AFAdRevenueData(String str) {
        int i10 = AFKeystoreWrapper + 63;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        int i11 = i10 % 2;
        boolean z10 = AppsFlyerProperties.getInstance().getBoolean(str, false);
        AFKeystoreWrapper = (f8128d + 87) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return z10;
    }

    private AFh1rSDK AFAdRevenueData(Context context) {
        f8128d = (AFKeystoreWrapper + 87) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (context instanceof Activity) {
            AFh1rSDK aFh1rSDK = new AFh1rSDK((Activity) context, getCurrencyIso4217Code().d());
            int i10 = AFKeystoreWrapper + 67;
            f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 != 0) {
                return aFh1rSDK;
            }
            throw null;
        }
        return null;
    }

    /* JADX WARN: Code restructure failed: missing block: B:19:0x0070, code lost:
        if (com.appsflyer.internal.AFk1xSDK.getRevenue(((com.appsflyer.internal.AFc1bSDK) getRevenue(new java.lang.Object[]{r1}, 389316487, -389316474, java.lang.System.identityHashCode(r1))).afInfoLog().AFAdRevenueData) != false) goto L27;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x008f, code lost:
        if (com.appsflyer.internal.AFk1xSDK.getRevenue(((com.appsflyer.internal.AFc1bSDK) getRevenue(new java.lang.Object[]{r1}, 389316487, -389316474, java.lang.System.identityHashCode(r1))).afInfoLog().AFAdRevenueData) != false) goto L27;
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x0097, code lost:
        if (r7.remove("android_id") == null) goto L19;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0099, code lost:
        com.appsflyer.AFLogger.afInfoLog("validateGaidAndIMEI :: removing: android_id");
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x00b8, code lost:
        if (com.appsflyer.internal.AFk1xSDK.getRevenue(((com.appsflyer.internal.AFc1bSDK) getRevenue(new java.lang.Object[]{r1}, 389316487, -389316474, java.lang.System.identityHashCode(r1))).AFKeystoreWrapper().getCurrencyIso4217Code()) == false) goto L26;
     */
    /* JADX WARN: Code restructure failed: missing block: B:33:0x00c0, code lost:
        if (r7.remove("imei") == null) goto L26;
     */
    /* JADX WARN: Code restructure failed: missing block: B:34:0x00c2, code lost:
        com.appsflyer.AFLogger.afInfoLog("validateGaidAndIMEI :: removing: imei");
     */
    /* JADX WARN: Code restructure failed: missing block: B:35:0x00c7, code lost:
        com.appsflyer.internal.AFa1uSDK.f8128d = (com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper + 55) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x00cf, code lost:
        return null;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static /* synthetic */ java.lang.Object getCurrencyIso4217Code(java.lang.Object[] r7) {
        /*
            r0 = 0
            r1 = r7[r0]
            com.appsflyer.internal.AFa1uSDK r1 = (com.appsflyer.internal.AFa1uSDK) r1
            r2 = 1
            r7 = r7[r2]
            java.util.Map r7 = (java.util.Map) r7
            int r3 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r3 = r3 + 85
            int r4 = r3 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r4
            int r3 = r3 % 2
            r4 = 0
            java.lang.String r5 = "collectAndroidIdForceByUser"
            if (r3 != 0) goto L24
            com.appsflyer.AppsFlyerProperties r3 = com.appsflyer.AppsFlyerProperties.getInstance()
            boolean r2 = r3.getBoolean(r5, r2)
            if (r2 != 0) goto Ld5
            goto L2e
        L24:
            com.appsflyer.AppsFlyerProperties r2 = com.appsflyer.AppsFlyerProperties.getInstance()
            boolean r2 = r2.getBoolean(r5, r0)
            if (r2 != 0) goto Ld5
        L2e:
            com.appsflyer.AppsFlyerProperties r2 = com.appsflyer.AppsFlyerProperties.getInstance()
            java.lang.String r3 = "collectIMEIForceByUser"
            boolean r2 = r2.getBoolean(r3, r0)
            if (r2 == 0) goto L3c
            goto Ld5
        L3c:
            java.lang.String r2 = "advertiserId"
            java.lang.Object r2 = r7.get(r2)
            if (r2 == 0) goto Ld5
            int r2 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r2 = r2 + 39
            int r3 = r2 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r3
            int r2 = r2 % 2
            r3 = -389316474(0xffffffffe8cb8086, float:-7.68809E24)
            r5 = 389316487(0x17347f87, float:5.83221E-25)
            if (r2 != 0) goto L77
            java.lang.Object[] r2 = new java.lang.Object[]{r1}     // Catch: java.lang.Exception -> L75
            int r6 = java.lang.System.identityHashCode(r1)     // Catch: java.lang.Exception -> L75
            java.lang.Object r2 = getRevenue(r2, r5, r3, r6)     // Catch: java.lang.Exception -> L75
            com.appsflyer.internal.AFc1bSDK r2 = (com.appsflyer.internal.AFc1bSDK) r2     // Catch: java.lang.Exception -> L75
            com.appsflyer.internal.AFc1eSDK r2 = r2.afInfoLog()     // Catch: java.lang.Exception -> L75
            java.lang.String r2 = r2.AFAdRevenueData     // Catch: java.lang.Exception -> L75
            boolean r2 = com.appsflyer.internal.AFk1xSDK.getRevenue(r2)     // Catch: java.lang.Exception -> L75
            r6 = 3
            int r6 = r6 / r0
            if (r2 == 0) goto L9e
            goto L91
        L73:
            r7 = move-exception
            throw r7
        L75:
            r7 = move-exception
            goto Ld0
        L77:
            java.lang.Object[] r0 = new java.lang.Object[]{r1}     // Catch: java.lang.Exception -> L75
            int r2 = java.lang.System.identityHashCode(r1)     // Catch: java.lang.Exception -> L75
            java.lang.Object r0 = getRevenue(r0, r5, r3, r2)     // Catch: java.lang.Exception -> L75
            com.appsflyer.internal.AFc1bSDK r0 = (com.appsflyer.internal.AFc1bSDK) r0     // Catch: java.lang.Exception -> L75
            com.appsflyer.internal.AFc1eSDK r0 = r0.afInfoLog()     // Catch: java.lang.Exception -> L75
            java.lang.String r0 = r0.AFAdRevenueData     // Catch: java.lang.Exception -> L75
            boolean r0 = com.appsflyer.internal.AFk1xSDK.getRevenue(r0)     // Catch: java.lang.Exception -> L75
            if (r0 == 0) goto L9e
        L91:
            java.lang.String r0 = "android_id"
            java.lang.Object r0 = r7.remove(r0)     // Catch: java.lang.Exception -> L75
            if (r0 == 0) goto L9e
            java.lang.String r0 = "validateGaidAndIMEI :: removing: android_id"
            com.appsflyer.AFLogger.afInfoLog(r0)     // Catch: java.lang.Exception -> L75
        L9e:
            java.lang.Object[] r0 = new java.lang.Object[]{r1}     // Catch: java.lang.Exception -> L75
            int r1 = java.lang.System.identityHashCode(r1)     // Catch: java.lang.Exception -> L75
            java.lang.Object r0 = getRevenue(r0, r5, r3, r1)     // Catch: java.lang.Exception -> L75
            com.appsflyer.internal.AFc1bSDK r0 = (com.appsflyer.internal.AFc1bSDK) r0     // Catch: java.lang.Exception -> L75
            com.appsflyer.internal.AFf1cSDK r0 = r0.AFKeystoreWrapper()     // Catch: java.lang.Exception -> L75
            java.lang.String r0 = r0.getCurrencyIso4217Code()     // Catch: java.lang.Exception -> L75
            boolean r0 = com.appsflyer.internal.AFk1xSDK.getRevenue(r0)     // Catch: java.lang.Exception -> L75
            if (r0 == 0) goto Lcf
            java.lang.String r0 = "imei"
            java.lang.Object r7 = r7.remove(r0)     // Catch: java.lang.Exception -> L75
            if (r7 == 0) goto Lcf
            java.lang.String r7 = "validateGaidAndIMEI :: removing: imei"
            com.appsflyer.AFLogger.afInfoLog(r7)     // Catch: java.lang.Exception -> L75
            int r7 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r7 = r7 + 55
            int r7 = r7 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r7
        Lcf:
            return r4
        Ld0:
            java.lang.String r0 = "failed to remove IMEI or AndroidID key from params; "
            com.appsflyer.AFLogger.afErrorLog(r0, r7)
        Ld5:
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.getCurrencyIso4217Code(java.lang.Object[]):java.lang.Object");
    }

    final void getMediationNetwork(@NonNull AFh1jSDK aFh1jSDK, AFh1rSDK aFh1rSDK) {
        AppsFlyerRequestListener appsFlyerRequestListener;
        AFAdRevenueData(aFh1jSDK, aFh1rSDK);
        if (((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMediationNetwork() == null) {
            int i10 = AFKeystoreWrapper + 117;
            f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0) {
                AFLogger.afWarnLog("[LogEvent/Launch] AppsFlyer's SDK cannot send any event without providing DevKey.");
                appsFlyerRequestListener = aFh1jSDK.getMonetizationNetwork;
                int i11 = 1 / 0;
                if (appsFlyerRequestListener == null) {
                    return;
                }
            } else {
                AFLogger.afWarnLog("[LogEvent/Launch] AppsFlyer's SDK cannot send any event without providing DevKey.");
                appsFlyerRequestListener = aFh1jSDK.getMonetizationNetwork;
                if (appsFlyerRequestListener == null) {
                    return;
                }
            }
            appsFlyerRequestListener.onError(41, "No dev key");
            return;
        }
        String referrer = AppsFlyerProperties.getInstance().getReferrer(((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).component2());
        if (referrer == null) {
            int i12 = f8128d + 117;
            AFKeystoreWrapper = i12 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i12 % 2 == 0) {
                referrer = "";
            } else {
                throw null;
            }
        }
        aFh1jSDK.areAllFieldsValid = referrer;
        getMonetizationNetwork(aFh1jSDK);
    }

    @NonNull
    private AFj1qSDK[] component1() {
        return (AFj1qSDK[]) getRevenue(new Object[]{this}, -187960988, 187961006, System.identityHashCode(this));
    }

    private void AFAdRevenueData(Context context, String str, Map<String, Object> map) {
        AFh1hSDK aFh1hSDK = new AFh1hSDK();
        aFh1hSDK.component4 = str;
        aFh1hSDK.AFAdRevenueData = map;
        getMediationNetwork(aFh1hSDK, AFAdRevenueData(context));
        int i10 = f8128d + 7;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            int i11 = 38 / 0;
        }
    }

    public static int getMonetizationNetwork(AFc1oSDK aFc1oSDK, boolean z10) {
        int i10 = f8128d + 95;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            AFAdRevenueData(aFc1oSDK, "appsFlyerCount", z10);
            throw null;
        }
        int AFAdRevenueData2 = AFAdRevenueData(aFc1oSDK, "appsFlyerCount", z10);
        AFKeystoreWrapper = (f8128d + 97) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return AFAdRevenueData2;
    }

    /* JADX WARN: Code restructure failed: missing block: B:20:0x004e, code lost:
        if (areAllFieldsValid() != false) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x0055, code lost:
        if (areAllFieldsValid() != false) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x0057, code lost:
        r5 = r5.getMonetizationNetwork;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x0059, code lost:
        if (r5 == null) goto L25;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x005b, code lost:
        com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = (com.appsflyer.internal.AFa1uSDK.f8128d + 7) % com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        r5.onError(10, "Event timeout. Check 'minTimeBetweenSessions' param");
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x006a, code lost:
        return;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:?, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void getMonetizationNetwork(com.appsflyer.internal.AFh1jSDK r5) {
        /*
            r4 = this;
            java.lang.String r0 = r5.component4
            r1 = 0
            r2 = 1
            if (r0 != 0) goto L10
            int r0 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r0 = r0 + 25
            int r0 = r0 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r0
            r0 = r2
            goto L11
        L10:
            r0 = r1
        L11:
            boolean r3 = r4.getRevenue()
            if (r3 == 0) goto L2d
            int r5 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r5 = r5 + 107
            int r0 = r5 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r0
            int r5 = r5 % 2
            java.lang.String r0 = "CustomerUserId not set, reporting is disabled"
            if (r5 != 0) goto L29
            com.appsflyer.AFLogger.afInfoLog(r0, r1)
            return
        L29:
            com.appsflyer.AFLogger.afInfoLog(r0, r2)
            return
        L2d:
            if (r0 == 0) goto L76
            com.appsflyer.AppsFlyerProperties r0 = com.appsflyer.AppsFlyerProperties.getInstance()
            java.lang.String r3 = "launchProtectEnabled"
            boolean r0 = r0.getBoolean(r3, r2)
            if (r0 == 0) goto L6b
            int r0 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r0 = r0 + 105
            int r2 = r0 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r2
            int r0 = r0 % 2
            if (r0 != 0) goto L51
            boolean r0 = r4.areAllFieldsValid()
            r2 = 53
            int r2 = r2 / r1
            if (r0 == 0) goto L70
            goto L57
        L51:
            boolean r0 = r4.areAllFieldsValid()
            if (r0 == 0) goto L70
        L57:
            com.appsflyer.attribution.AppsFlyerRequestListener r5 = r5.getMonetizationNetwork
            if (r5 == 0) goto L6a
            int r0 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r0 = r0 + 7
            int r0 = r0 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r0
            r0 = 10
            java.lang.String r1 = "Event timeout. Check 'minTimeBetweenSessions' param"
            r5.onError(r0, r1)
        L6a:
            return
        L6b:
            java.lang.String r0 = "Allowing multiple launches within a 5 second time window."
            com.appsflyer.AFLogger.afInfoLog(r0)
        L70:
            long r0 = java.lang.System.currentTimeMillis()
            r4.component4 = r0
        L76:
            r4.getCurrencyIso4217Code(r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.getMonetizationNetwork(com.appsflyer.internal.AFh1jSDK):void");
    }

    private static void AFAdRevenueData(@NonNull AFh1jSDK aFh1jSDK, AFh1rSDK aFh1rSDK) {
        int i10 = f8128d + 89;
        int i11 = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        AFKeystoreWrapper = i11;
        if (i10 % 2 != 0) {
            throw null;
        }
        if (aFh1rSDK != null) {
            aFh1jSDK.getMediationNetwork = aFh1rSDK.AFAdRevenueData;
            aFh1jSDK.component2 = aFh1rSDK.getMonetizationNetwork;
            f8128d = (i11 + 95) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:5:0x0012, code lost:
        if (r5 != false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:8:0x0019, code lost:
        if (r5 != false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x001b, code lost:
        r0 = r0 + 1;
        r3.getRevenue(r4, r0);
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static int AFAdRevenueData(com.appsflyer.internal.AFc1oSDK r3, java.lang.String r4, boolean r5) {
        /*
            int r0 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r0 = r0 + 33
            int r1 = r0 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r1
            int r0 = r0 % 2
            r1 = 0
            r2 = 1
            if (r0 != 0) goto L15
            int r0 = r3.getMediationNetwork(r4, r2)
            if (r5 == 0) goto L1f
            goto L1b
        L15:
            int r0 = r3.getMediationNetwork(r4, r1)
            if (r5 == 0) goto L1f
        L1b:
            int r0 = r0 + r2
            r3.getRevenue(r4, r0)
        L1f:
            int r3 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r3 = r3 + 99
            int r4 = r3 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r4
            int r3 = r3 % 2
            if (r3 == 0) goto L2e
            r3 = 63
            int r3 = r3 / r1
        L2e:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.AFAdRevenueData(com.appsflyer.internal.AFc1oSDK, java.lang.String, boolean):int");
    }

    public static String getMediationNetwork(SimpleDateFormat simpleDateFormat, long j10) {
        simpleDateFormat.setTimeZone(DesugarTimeZone.getTimeZone("UTC"));
        String format = simpleDateFormat.format(new Date(j10));
        f8128d = (AFKeystoreWrapper + 35) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return format;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void getMediationNetwork(AFh1jSDK aFh1jSDK) {
        int i10 = f8128d + 11;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        int i11 = i10 % 2;
        getCurrencyIso4217Code(aFh1jSDK);
        if (i11 != 0) {
            throw null;
        }
    }

    public final boolean getRevenue() {
        AFKeystoreWrapper = (f8128d + 27) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (AFAdRevenueData(AppsFlyerProperties.AF_WAITFOR_CUSTOMERID) && getMediationNetwork() == null) {
            int i10 = f8128d + 49;
            AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return i10 % 2 == 0;
        }
        return false;
    }

    private static int getMediationNetwork(AFc1oSDK aFc1oSDK, boolean z10) {
        int i10 = AFKeystoreWrapper + 15;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            return AFAdRevenueData(aFc1oSDK, "appsFlyerInAppEventCount", z10);
        }
        AFAdRevenueData(aFc1oSDK, "appsFlyerInAppEventCount", z10);
        throw null;
    }

    private void getRevenue(AppsFlyerConversionListener appsFlyerConversionListener) {
        if (appsFlyerConversionListener == null) {
            AFKeystoreWrapper = (f8128d + 13) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            return;
        }
        this.getMediationNetwork = appsFlyerConversionListener;
        int i10 = f8128d + 109;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            int i11 = 20 / 0;
        }
    }

    private static /* synthetic */ Object AFAdRevenueData(Object[] objArr) {
        AFa1uSDK aFa1uSDK = (AFa1uSDK) objArr[0];
        int i10 = f8128d + 11;
        AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            int i11 = 26 / 0;
            return ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).AFInAppEventParameterName().getMonetizationNetwork();
        }
        return ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).AFInAppEventParameterName().getMonetizationNetwork();
    }

    private static void getMediationNetwork(String str) {
        AFLogger aFLogger = AFLogger.INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.SDK_LIFECYCLE;
        StringBuilder sb2 = new StringBuilder("ERROR: AppsFlyer SDK is not initialized! The API call '");
        sb2.append(str);
        sb2.append("()' must be called after the 'init(String, AppsFlyerConversionListener)' API method, which should be called on the Application's onCreate.");
        aFLogger.w(aFg1cSDK, sb2.toString());
        int i10 = AFKeystoreWrapper + 3;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 == 0) {
            throw null;
        }
    }

    private static void getMonetizationNetwork(String str) {
        getRevenue(new Object[]{str}, 698517988, -698517984, (int) System.currentTimeMillis());
    }

    private void getRevenue(Context context, String str) {
        AFh1eSDK aFh1eSDK = new AFh1eSDK();
        getMediationNetwork(context);
        aFh1eSDK.component4 = null;
        aFh1eSDK.AFAdRevenueData = null;
        aFh1eSDK.areAllFieldsValid = str;
        aFh1eSDK.getMediationNetwork = null;
        getMonetizationNetwork(aFh1eSDK);
        f8128d = (AFKeystoreWrapper + 5) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    /* JADX WARN: Code restructure failed: missing block: B:17:0x0036, code lost:
        if (r0 != null) goto L14;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static java.lang.String getCurrencyIso4217Code(android.app.Activity r7) {
        /*
            r0 = 0
            if (r7 == 0) goto L6b
            android.content.Intent r1 = r7.getIntent()
            if (r1 == 0) goto L6b
            int r2 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r2 = r2 + 123
            int r2 = r2 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r2
            android.os.Bundle r2 = r1.getExtras()     // Catch: java.lang.Throwable -> L30
            if (r2 == 0) goto L5f
            int r3 = com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper
            int r3 = r3 + 125
            int r4 = r3 % 128
            com.appsflyer.internal.AFa1uSDK.f8128d = r4
            int r3 = r3 % 2
            java.lang.String r4 = "af"
            if (r3 != 0) goto L32
            java.lang.String r0 = r2.getString(r4)     // Catch: java.lang.Throwable -> L30
            r3 = 53
            int r3 = r3 / 0
            if (r0 == 0) goto L5f
            goto L38
        L30:
            r7 = move-exception
            goto L60
        L32:
            java.lang.String r0 = r2.getString(r4)     // Catch: java.lang.Throwable -> L30
            if (r0 == 0) goto L5f
        L38:
            int r3 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r3 = r3 + 11
            int r3 = r3 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r3
            com.appsflyer.AFLogger r3 = com.appsflyer.AFLogger.INSTANCE     // Catch: java.lang.Throwable -> L30
            com.appsflyer.internal.AFg1cSDK r5 = com.appsflyer.internal.AFg1cSDK.ENGAGEMENT     // Catch: java.lang.Throwable -> L30
            java.lang.String r6 = "Push Notification received af payload = "
            java.lang.String r6 = r6.concat(r0)     // Catch: java.lang.Throwable -> L30
            r3.w(r5, r6)     // Catch: java.lang.Throwable -> L30
            r2.remove(r4)     // Catch: java.lang.Throwable -> L30
            android.content.Intent r1 = r1.putExtras(r2)     // Catch: java.lang.Throwable -> L30
            r7.setIntent(r1)     // Catch: java.lang.Throwable -> L30
            int r7 = com.appsflyer.internal.AFa1uSDK.f8128d
            int r7 = r7 + 69
            int r7 = r7 % 128
            com.appsflyer.internal.AFa1uSDK.AFKeystoreWrapper = r7
        L5f:
            return r0
        L60:
            com.appsflyer.AFLogger r1 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r2 = com.appsflyer.internal.AFg1cSDK.ENGAGEMENT
            java.lang.String r3 = r7.getMessage()
            r1.e(r2, r3, r7)
        L6b:
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFa1uSDK.getCurrencyIso4217Code(android.app.Activity):java.lang.String");
    }

    private void getRevenue(String str) {
        final AFh1jSDK monetizationNetwork = new AFh1lSDK().getMonetizationNetwork(((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).getCurrencyIso4217Code().getMonetizationNetwork.getMediationNetwork("appsFlyerCount", 0));
        monetizationNetwork.areAllFieldsValid = str;
        if (str != null) {
            int i10 = f8128d + 39;
            AFKeystoreWrapper = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i10 % 2 == 0 ? str.length() > 5 : str.length() > 2) {
                int i11 = f8128d + 35;
                AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i11 % 2 == 0) {
                    if (((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFLogger().AFAdRevenueData(monetizationNetwork)) {
                        AFj1aSDK.AFAdRevenueData(((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).getMonetizationNetwork(), new Runnable() { // from class: com.appsflyer.internal.c
                            @Override // java.lang.Runnable
                            public final void run() {
                                AFa1uSDK.this.getMediationNetwork(monetizationNetwork);
                            }
                        }, 5L, TimeUnit.MILLISECONDS);
                    }
                } else {
                    ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFLogger().AFAdRevenueData(monetizationNetwork);
                    throw null;
                }
            }
        }
        f8128d = (AFKeystoreWrapper + 111) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
    }

    private String getCurrencyIso4217Code(Context context, String str) {
        f8128d = (AFKeystoreWrapper + 117) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (context == null) {
            return null;
        }
        getMediationNetwork(context);
        String monetizationNetwork = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).getCurrencyIso4217Code().getMonetizationNetwork(str);
        f8128d = (AFKeystoreWrapper + 33) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return monetizationNetwork;
    }

    public static String getCurrencyIso4217Code(AFc1oSDK aFc1oSDK, String str) {
        String monetizationNetwork = aFc1oSDK.getMonetizationNetwork("CACHED_CHANNEL", null);
        if (monetizationNetwork != null) {
            int i10 = f8128d;
            int i11 = i10 + 99;
            AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                int i12 = 83 / 0;
            }
            int i13 = i10 + 111;
            AFKeystoreWrapper = i13 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i13 % 2 == 0) {
                return monetizationNetwork;
            }
            throw null;
        }
        aFc1oSDK.AFAdRevenueData("CACHED_CHANNEL", str);
        int i14 = f8128d + 77;
        AFKeystoreWrapper = i14 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i14 % 2 == 0) {
            return str;
        }
        throw null;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @NonNull
    public final Map<String, Object> getRevenue(AFh1jSDK aFh1jSDK) {
        int i10;
        Context context = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).registerClient().getRevenue;
        AFc1oSDK aFc1oSDK = (AFc1oSDK) getRevenue(new Object[]{this, context}, -1595266545, 1595266567, System.identityHashCode(this));
        AFg1rSDK component4 = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).component4();
        boolean monetizationNetwork = ((AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this))).AFKeystoreWrapper().getMonetizationNetwork();
        boolean mediationNetwork = aFh1jSDK.getMediationNetwork();
        Map<String, Object> map = aFh1jSDK.getCurrencyIso4217Code;
        long time = new Date().getTime();
        Object[] objArr = new Object[1];
        a(null, "\u0089\u0086\u0081\u0084\u0088\u0087\u0086\u0085\u0084\u0083\u0082\u0081", null, TextUtils.indexOf((CharSequence) "", '0', 0, 0) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT, objArr);
        map.put(((String) objArr[0]).intern(), Long.toString(time));
        try {
            if (monetizationNetwork) {
                f8128d = (AFKeystoreWrapper + 29) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                AFLogger.INSTANCE.i(AFg1cSDK.GENERAL, "AppsFlyer SDK Reporting has been stopped", true);
                i10 = AFKeystoreWrapper + 123;
            } else {
                AFLogger aFLogger = AFLogger.INSTANCE;
                AFg1cSDK aFg1cSDK = AFg1cSDK.GENERAL;
                StringBuilder sb2 = new StringBuilder("******* sendTrackingWithEvent: ");
                sb2.append(mediationNetwork ? "Launch" : aFh1jSDK.component4);
                aFLogger.i(aFg1cSDK, sb2.toString(), true);
                i10 = AFKeystoreWrapper + 57;
            }
            f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            component2(context);
            int monetizationNetwork2 = getMonetizationNetwork(aFc1oSDK, mediationNetwork);
            int mediationNetwork2 = getMediationNetwork(aFc1oSDK, aFh1jSDK.component4 != null);
            if (mediationNetwork && monetizationNetwork2 == 1) {
                AppsFlyerProperties.getInstance().getRevenue = true;
            }
            component4.getCurrencyIso4217Code(map, monetizationNetwork2, mediationNetwork2);
        } catch (Throwable th2) {
            AFLogger.INSTANCE.e(AFg1cSDK.GENERAL, "Error while preparing to send event", th2, true, true, true);
        }
        f8128d = (AFKeystoreWrapper + 115) % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        return map;
    }

    public final AFc1oSDK getCurrencyIso4217Code(Context context) {
        return (AFc1oSDK) getRevenue(new Object[]{this, context}, -1595266545, 1595266567, System.identityHashCode(this));
    }

    public final AFc1bSDK getCurrencyIso4217Code() {
        return (AFc1bSDK) getRevenue(new Object[]{this}, 389316487, -389316474, System.identityHashCode(this));
    }

    public static boolean getRevenue(Context context) {
        try {
            if (com.google.android.gms.common.f.n().g(context) == 0) {
                int i10 = AFKeystoreWrapper + 71;
                f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                if (i10 % 2 != 0) {
                    return true;
                }
                throw null;
            }
        } catch (Throwable th2) {
            AFLogger.afErrorLog("WARNING:  Google play services is unavailable. ", th2);
        }
        try {
            context.getPackageManager().getPackageInfo("com.google.android.gms", 0);
            int i11 = f8128d + 107;
            AFKeystoreWrapper = i11 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
            if (i11 % 2 != 0) {
                int i12 = 15 / 0;
            }
            return true;
        } catch (PackageManager.NameNotFoundException e10) {
            AFLogger.INSTANCE.e(AFg1cSDK.GENERAL, "WARNING:  Google Play Services is unavailable. ", e10);
            return false;
        }
    }

    private static /* synthetic */ Object getRevenue(Object[] objArr) {
        AFa1uSDK aFa1uSDK = (AFa1uSDK) objArr[0];
        PluginInfo pluginInfo = (PluginInfo) objArr[1];
        int i10 = AFKeystoreWrapper + 79;
        f8128d = i10 % IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        if (i10 % 2 != 0) {
            Objects.requireNonNull(pluginInfo);
            ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).e().getMediationNetwork(pluginInfo);
            return null;
        }
        Objects.requireNonNull(pluginInfo);
        ((AFc1bSDK) getRevenue(new Object[]{aFa1uSDK}, 389316487, -389316474, System.identityHashCode(aFa1uSDK))).e().getMediationNetwork(pluginInfo);
        throw null;
    }

    private void getRevenue(Map<String, Object> map) {
        getRevenue(new Object[]{this, map}, 1290570600, -1290570599, System.identityHashCode(this));
    }

    private static void getRevenue(String str, boolean z10) {
        getRevenue(new Object[]{str, Boolean.valueOf(z10)}, -222394073, 222394090, (int) System.currentTimeMillis());
    }
}
