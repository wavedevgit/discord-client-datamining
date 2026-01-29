package com.appsflyer.internal;

import android.content.Context;
import androidx.annotation.NonNull;
import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import com.android.installreferrer.api.ReferrerDetails;
import com.appsflyer.AFLogger;
import com.appsflyer.internal.AFi1bSDK;
import com.appsflyer.internal.AFj1qSDK;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import kotlin.Pair;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AFi1bSDK extends AFi1aSDK {
    public final Map<String, Object> getMediationNetwork;
    @NonNull
    final ExecutorService getRevenue;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.appsflyer.internal.AFi1bSDK$3  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class AnonymousClass3 implements InstallReferrerStateListener {
        final /* synthetic */ Context val$context;
        final /* synthetic */ InstallReferrerClient val$referrerClient;

        AnonymousClass3(InstallReferrerClient installReferrerClient, Context context) {
            this.val$referrerClient = installReferrerClient;
            this.val$context = context;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public /* synthetic */ void lambda$onInstallReferrerSetupFinished$0(InstallReferrerClient installReferrerClient, Context context, int i10) {
            AFi1bSDK.this.getMonetizationNetwork(installReferrerClient, context, i10);
        }

        @Override // com.android.installreferrer.api.InstallReferrerStateListener
        public final void onInstallReferrerServiceDisconnected() {
            AFLogger.INSTANCE.d(AFg1cSDK.REFERRER, "Install Referrer service disconnected");
        }

        @Override // com.android.installreferrer.api.InstallReferrerStateListener
        public final void onInstallReferrerSetupFinished(final int i10) {
            ExecutorService executorService = AFi1bSDK.this.getRevenue;
            final InstallReferrerClient installReferrerClient = this.val$referrerClient;
            final Context context = this.val$context;
            executorService.execute(new Runnable() { // from class: com.appsflyer.internal.x
                @Override // java.lang.Runnable
                public final void run() {
                    AFi1bSDK.AnonymousClass3.this.lambda$onInstallReferrerSetupFinished$0(installReferrerClient, context, i10);
                }
            });
        }
    }

    public AFi1bSDK(@NonNull Runnable runnable, @NonNull ExecutorService executorService, @NonNull AFc1pSDK aFc1pSDK) {
        super("store", "google", aFc1pSDK, runnable);
        this.getMediationNetwork = new HashMap();
        this.getRevenue = executorService;
    }

    private boolean getRevenue(@NonNull Context context) {
        if (!getMediationNetwork()) {
            return false;
        }
        try {
            if (AFj1iSDK.getMediationNetwork(context, "com.google.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE")) {
                AFLogger.INSTANCE.d(AFg1cSDK.REFERRER, "Install referrer is allowed");
                return true;
            }
            AFLogger.INSTANCE.d(AFg1cSDK.REFERRER, "Install referrer is not allowed");
            return false;
        } catch (ClassNotFoundException e10) {
            AFLogger.afErrorLogForExcManagerOnly("InstallReferrerClient not found", e10);
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.REFERRER;
            StringBuilder sb2 = new StringBuilder("Class ");
            sb2.append("com.android.installreferrer.api.InstallReferrerClient");
            sb2.append(" not found");
            aFLogger.v(aFg1cSDK, sb2.toString());
            return false;
        } catch (Throwable th2) {
            AFLogger.INSTANCE.e(AFg1cSDK.REFERRER, "An error occurred while trying to verify manifest : ".concat("com.android.installreferrer.api.InstallReferrerClient"), th2);
            return false;
        }
    }

    @Override // com.appsflyer.internal.AFj1qSDK
    public final void getCurrencyIso4217Code(Context context) {
        if (!getRevenue(context)) {
            return;
        }
        this.component1 = System.currentTimeMillis();
        this.areAllFieldsValid = AFj1qSDK.AFa1vSDK.STARTED;
        addObserver(new AFj1qSDK.AnonymousClass1());
        try {
            InstallReferrerClient build = InstallReferrerClient.newBuilder(context).build();
            AFLogger.INSTANCE.d(AFg1cSDK.REFERRER, "Connecting to Install Referrer Library...");
            build.startConnection(new AnonymousClass3(build, context));
        } catch (Throwable th2) {
            AFLogger.INSTANCE.e(AFg1cSDK.REFERRER, "referrerClient -> startConnection", th2);
        }
    }

    protected final void getMonetizationNetwork(InstallReferrerClient installReferrerClient, Context context, int i10) {
        this.getMediationNetwork.put("code", String.valueOf(i10));
        Pair<Long, String> monetizationNetwork = AFj1iSDK.getMonetizationNetwork(context, "com.android.vending");
        this.AFAdRevenueData.put("api_ver", monetizationNetwork.c());
        this.AFAdRevenueData.put("api_ver_name", monetizationNetwork.d());
        if (i10 != -1) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            AFLogger.INSTANCE.w(AFg1cSDK.REFERRER, "responseCode not found.");
                        } else {
                            AFLogger.INSTANCE.w(AFg1cSDK.REFERRER, "InstallReferrer DEVELOPER_ERROR");
                            this.AFAdRevenueData.put("response", "DEVELOPER_ERROR");
                        }
                    } else {
                        AFLogger.INSTANCE.w(AFg1cSDK.REFERRER, "InstallReferrer FEATURE_NOT_SUPPORTED");
                        this.AFAdRevenueData.put("response", "FEATURE_NOT_SUPPORTED");
                    }
                } else {
                    this.AFAdRevenueData.put("response", "SERVICE_UNAVAILABLE");
                    AFLogger.INSTANCE.w(AFg1cSDK.REFERRER, "InstallReferrer not supported");
                }
            } else {
                this.AFAdRevenueData.put("response", "OK");
                try {
                    AFLogger aFLogger = AFLogger.INSTANCE;
                    AFg1cSDK aFg1cSDK = AFg1cSDK.REFERRER;
                    aFLogger.d(aFg1cSDK, "InstallReferrer connected");
                    if (installReferrerClient.isReady()) {
                        ReferrerDetails installReferrer = installReferrerClient.getInstallReferrer();
                        String installReferrer2 = installReferrer.getInstallReferrer();
                        if (installReferrer2 != null) {
                            this.getMediationNetwork.put("val", installReferrer2);
                            this.AFAdRevenueData.put("referrer", installReferrer2);
                        }
                        long referrerClickTimestampSeconds = installReferrer.getReferrerClickTimestampSeconds();
                        this.getMediationNetwork.put("clk", Long.toString(referrerClickTimestampSeconds));
                        this.AFAdRevenueData.put("click_ts", Long.valueOf(referrerClickTimestampSeconds));
                        long installBeginTimestampSeconds = installReferrer.getInstallBeginTimestampSeconds();
                        this.getMediationNetwork.put("install", Long.toString(installBeginTimestampSeconds));
                        this.AFAdRevenueData.put("install_begin_ts", Long.valueOf(installBeginTimestampSeconds));
                        HashMap hashMap = new HashMap();
                        try {
                            boolean googlePlayInstantParam = installReferrer.getGooglePlayInstantParam();
                            this.getMediationNetwork.put("instant", Boolean.valueOf(googlePlayInstantParam));
                            hashMap.put("instant", Boolean.valueOf(googlePlayInstantParam));
                        } catch (NoSuchMethodError e10) {
                            AFLogger.afErrorLogForExcManagerOnly("getGooglePlayInstantParam not exist", e10);
                        }
                        try {
                            hashMap.put("click_server_ts", Long.valueOf(installReferrer.getReferrerClickTimestampServerSeconds()));
                            hashMap.put("install_begin_server_ts", Long.valueOf(installReferrer.getInstallBeginTimestampServerSeconds()));
                            hashMap.put("install_version", installReferrer.getInstallVersion());
                        } catch (NoSuchMethodError e11) {
                            AFLogger.INSTANCE.e(AFg1cSDK.REFERRER, "some method not exist", e11, false, false);
                        }
                        if (!hashMap.isEmpty()) {
                            this.AFAdRevenueData.put("google_custom", hashMap);
                        }
                        installReferrerClient.endConnection();
                    } else {
                        aFLogger.w(aFg1cSDK, "ReferrerClient: InstallReferrer is not ready");
                        this.getMediationNetwork.put("err", "ReferrerClient: InstallReferrer is not ready");
                    }
                } catch (Throwable th2) {
                    AFLogger aFLogger2 = AFLogger.INSTANCE;
                    AFg1cSDK aFg1cSDK2 = AFg1cSDK.REFERRER;
                    StringBuilder sb2 = new StringBuilder("Failed to get install referrer: ");
                    sb2.append(th2.getMessage());
                    aFLogger2.w(aFg1cSDK2, sb2.toString());
                    this.getMediationNetwork.put("err", th2.getMessage());
                    aFLogger2.e(aFg1cSDK2, "Failed to get install referrer", th2, false, false);
                }
            }
        } else {
            AFLogger.INSTANCE.w(AFg1cSDK.REFERRER, "InstallReferrer SERVICE_DISCONNECTED");
            this.AFAdRevenueData.put("response", "SERVICE_DISCONNECTED");
        }
        AFLogger.INSTANCE.d(AFg1cSDK.REFERRER, "Install Referrer collected locally");
        getMonetizationNetwork();
    }
}
