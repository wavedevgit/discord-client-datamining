package com.discord.samsung;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import androidx.appcompat.app.AppCompatActivity;
import com.discord.logging.Log;
import com.msc.sa.aidl.ISACallback;
import com.msc.sa.aidl.a;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000=\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003*\u0001\u0014\u0018\u0000 \u00192\u00020\u0001:\u0002\u0018\u0019B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0012\u0010\b\u001a\u00020\t2\b\u0010\n\u001a\u0004\u0018\u00010\u000bH\u0014J\b\u0010\f\u001a\u00020\tH\u0014J\b\u0010\r\u001a\u00020\tH\u0002J\u001c\u0010\u000e\u001a\u00020\t2\b\u0010\u000f\u001a\u0004\u0018\u00010\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0010H\u0002J\b\u0010\u0012\u001a\u00020\tH\u0002J\b\u0010\u0016\u001a\u00020\u0017H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082.¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u0010\u0010\u0013\u001a\u00020\u0014X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0015¨\u0006\u001a"}, d2 = {"Lcom/discord/samsung/SamsungConnectActivity;", "Landroidx/appcompat/app/AppCompatActivity;", "<init>", "()V", "samsungAccountServiceCallback", "Lcom/msc/sa/aidl/ISACallback;", "serviceBound", "", "onCreate", "", "savedInstanceState", "Landroid/os/Bundle;", "onStop", "finishedWithRestartRequested", "finishWithResult", "authCode", "", "authServerUrl", "startAndBindSamsungAuthService", "serviceConnection", "com/discord/samsung/SamsungConnectActivity$serviceConnection$1", "Lcom/discord/samsung/SamsungConnectActivity$serviceConnection$1;", "createCallback", "Lcom/msc/sa/aidl/ISACallback$Stub;", "Result", "Companion", "samsung_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SamsungConnectActivity extends AppCompatActivity {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    public static final String EXTRA_ATTEMPT_COUNT = "com.discord.samsung.intent.extra.ATTEMPT_COUNT";
    @NotNull
    public static final String EXTRA_REQ_AUTH_PARAM_AUTH_CODE = "com.discord.samsung.intent.extra.AUTH_CODE";
    @NotNull
    public static final String EXTRA_REQ_AUTH_PARAM_AUTH_SERVER_URL = "com.discord.samsung.intent.extra.SERVER_URL";
    @NotNull
    private static final String LOG_TAG = "Samsung";
    public static final int RESULT_SA_BINDING_FAILED = 500;
    private static final int SAMSUNG_REQ_ID = 1221;
    @NotNull
    private static final Intent serviceIntent;
    private ISACallback samsungAccountServiceCallback;
    private boolean serviceBound;
    @NotNull
    private final SamsungConnectActivity$serviceConnection$1 serviceConnection = new ServiceConnection() { // from class: com.discord.samsung.SamsungConnectActivity$serviceConnection$1
        @Override // android.content.ServiceConnection
        public void onServiceConnected(ComponentName componentName, IBinder iBinder) {
            ISACallback iSACallback;
            SamsungConnectActivity.this.serviceBound = true;
            com.msc.sa.aidl.a e10 = a.AbstractBinderC0209a.e(iBinder);
            Log log = Log.INSTANCE;
            Log.i$default(log, "Samsung", "Samsung Account service connection established", (Throwable) null, 4, (Object) null);
            try {
                iSACallback = SamsungConnectActivity.this.samsungAccountServiceCallback;
                if (iSACallback == null) {
                    Intrinsics.throwUninitializedPropertyAccessException("samsungAccountServiceCallback");
                    iSACallback = null;
                }
                String n02 = e10.n0(BuildConfig.SAMSUNGxDISCORD_CLIENT_ID, "dummy", com.discord.BuildConfig.APPLICATION_ID, iSACallback);
                Log.i$default(log, "Samsung", "Samsung Account service connection established: " + n02, (Throwable) null, 4, (Object) null);
                if (n02 == null) {
                    SamsungConnectActivity.this.finishedWithRestartRequested();
                    return;
                }
                Bundle bundle = new Bundle();
                bundle.putStringArray("additional", new String[]{"api_server_url", "auth_server_url"});
                Unit unit = Unit.f33074a;
                Log.i$default(log, "Samsung", "Samsung Account service connection established: isReqSucc? " + e10.D0(1221, n02, bundle), (Throwable) null, 4, (Object) null);
            } catch (Throwable th2) {
                Log.INSTANCE.e("Samsung", "Unable to connect to Samsung", th2);
                SamsungConnectActivity.this.finishWithResult(null, null);
            }
        }

        @Override // android.content.ServiceConnection
        public void onServiceDisconnected(ComponentName componentName) {
            Log.i$default(Log.INSTANCE, "Samsung", "Samsung Account service connection unbound", (Throwable) null, 4, (Object) null);
            SamsungConnectActivity.this.serviceBound = false;
            SamsungConnectActivity.this.finish();
        }
    };

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0018\u0010\u000e\u001a\u00020\r2\u0006\u0010\u000f\u001a\u00020\u00102\b\b\u0002\u0010\u0011\u001a\u00020\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0007X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\f\u001a\u00020\rX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u0012"}, d2 = {"Lcom/discord/samsung/SamsungConnectActivity$Companion;", "", "<init>", "()V", "LOG_TAG", "", "SAMSUNG_REQ_ID", "", "EXTRA_REQ_AUTH_PARAM_AUTH_CODE", "EXTRA_REQ_AUTH_PARAM_AUTH_SERVER_URL", "EXTRA_ATTEMPT_COUNT", "RESULT_SA_BINDING_FAILED", "serviceIntent", "Landroid/content/Intent;", "getIntent", "context", "Landroid/content/Context;", "attemptCount", "samsung_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ Intent getIntent$default(Companion companion, Context context, int i10, int i11, Object obj) {
            if ((i11 & 2) != 0) {
                i10 = 0;
            }
            return companion.getIntent(context, i10);
        }

        @NotNull
        public final Intent getIntent(@NotNull Context context, int i10) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intent addFlags = new Intent(context, SamsungConnectActivity.class).putExtra(SamsungConnectActivity.EXTRA_ATTEMPT_COUNT, i10).addFlags(65536);
            Intrinsics.checkNotNullExpressionValue(addFlags, "addFlags(...)");
            return addFlags;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b6\u0018\u00002\u00020\u0001:\u0002\u0004\u0005B\t\b\u0004¢\u0006\u0004\b\u0002\u0010\u0003\u0082\u0001\u0002\u0006\u0007¨\u0006\b"}, d2 = {"Lcom/discord/samsung/SamsungConnectActivity$Result;", "", "<init>", "()V", "Success", "Failure", "Lcom/discord/samsung/SamsungConnectActivity$Result$Failure;", "Lcom/discord/samsung/SamsungConnectActivity$Result$Success;", "samsung_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class Result {

        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\n\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001B\u0019\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\t\u0010\f\u001a\u00020\u0005HÆ\u0003J\u001d\u0010\r\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\u000e\u001a\u00020\u00032\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010HÖ\u0003J\t\u0010\u0011\u001a\u00020\u0005HÖ\u0001J\t\u0010\u0012\u001a\u00020\u0013HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\n¨\u0006\u0014"}, d2 = {"Lcom/discord/samsung/SamsungConnectActivity$Result$Failure;", "Lcom/discord/samsung/SamsungConnectActivity$Result;", "isRetryAllowed", "", "attemptCount", "", "<init>", "(ZI)V", "()Z", "getAttemptCount", "()I", "component1", "component2", "copy", "equals", "other", "", "hashCode", "toString", "", "samsung_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Failure extends Result {
            private final int attemptCount;
            private final boolean isRetryAllowed;

            public /* synthetic */ Failure(boolean z10, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
                this(z10, (i11 & 2) != 0 ? 0 : i10);
            }

            public static /* synthetic */ Failure copy$default(Failure failure, boolean z10, int i10, int i11, Object obj) {
                if ((i11 & 1) != 0) {
                    z10 = failure.isRetryAllowed;
                }
                if ((i11 & 2) != 0) {
                    i10 = failure.attemptCount;
                }
                return failure.copy(z10, i10);
            }

            public final boolean component1() {
                return this.isRetryAllowed;
            }

            public final int component2() {
                return this.attemptCount;
            }

            @NotNull
            public final Failure copy(boolean z10, int i10) {
                return new Failure(z10, i10);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof Failure) {
                    Failure failure = (Failure) obj;
                    return this.isRetryAllowed == failure.isRetryAllowed && this.attemptCount == failure.attemptCount;
                }
                return false;
            }

            public final int getAttemptCount() {
                return this.attemptCount;
            }

            public int hashCode() {
                return (Boolean.hashCode(this.isRetryAllowed) * 31) + Integer.hashCode(this.attemptCount);
            }

            public final boolean isRetryAllowed() {
                return this.isRetryAllowed;
            }

            @NotNull
            public String toString() {
                boolean z10 = this.isRetryAllowed;
                int i10 = this.attemptCount;
                return "Failure(isRetryAllowed=" + z10 + ", attemptCount=" + i10 + ")";
            }

            public Failure(boolean z10, int i10) {
                super(null);
                this.isRetryAllowed = z10;
                this.attemptCount = i10;
            }
        }

        @Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\n\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\t\u0010\n\u001a\u00020\u0003HÆ\u0003J\t\u0010\u000b\u001a\u00020\u0003HÆ\u0003J\u001d\u0010\f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\r\u001a\u00020\u000e2\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010HÖ\u0003J\t\u0010\u0011\u001a\u00020\u0012HÖ\u0001J\t\u0010\u0013\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0007\u0010\bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\b¨\u0006\u0014"}, d2 = {"Lcom/discord/samsung/SamsungConnectActivity$Result$Success;", "Lcom/discord/samsung/SamsungConnectActivity$Result;", "authCode", "", "serverUrl", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "getAuthCode", "()Ljava/lang/String;", "getServerUrl", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "", "toString", "samsung_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Success extends Result {
            @NotNull
            private final String authCode;
            @NotNull
            private final String serverUrl;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public Success(@NotNull String authCode, @NotNull String serverUrl) {
                super(null);
                Intrinsics.checkNotNullParameter(authCode, "authCode");
                Intrinsics.checkNotNullParameter(serverUrl, "serverUrl");
                this.authCode = authCode;
                this.serverUrl = serverUrl;
            }

            public static /* synthetic */ Success copy$default(Success success, String str, String str2, int i10, Object obj) {
                if ((i10 & 1) != 0) {
                    str = success.authCode;
                }
                if ((i10 & 2) != 0) {
                    str2 = success.serverUrl;
                }
                return success.copy(str, str2);
            }

            @NotNull
            public final String component1() {
                return this.authCode;
            }

            @NotNull
            public final String component2() {
                return this.serverUrl;
            }

            @NotNull
            public final Success copy(@NotNull String authCode, @NotNull String serverUrl) {
                Intrinsics.checkNotNullParameter(authCode, "authCode");
                Intrinsics.checkNotNullParameter(serverUrl, "serverUrl");
                return new Success(authCode, serverUrl);
            }

            public boolean equals(Object obj) {
                if (this == obj) {
                    return true;
                }
                if (obj instanceof Success) {
                    Success success = (Success) obj;
                    return Intrinsics.areEqual(this.authCode, success.authCode) && Intrinsics.areEqual(this.serverUrl, success.serverUrl);
                }
                return false;
            }

            @NotNull
            public final String getAuthCode() {
                return this.authCode;
            }

            @NotNull
            public final String getServerUrl() {
                return this.serverUrl;
            }

            public int hashCode() {
                return (this.authCode.hashCode() * 31) + this.serverUrl.hashCode();
            }

            @NotNull
            public String toString() {
                String str = this.authCode;
                String str2 = this.serverUrl;
                return "Success(authCode=" + str + ", serverUrl=" + str2 + ")";
            }
        }

        public /* synthetic */ Result(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Result() {
        }
    }

    static {
        Intent intent = new Intent("com.msc.action.samsungaccount.REQUEST_SERVICE").setPackage("com.osp.app.signin");
        Intrinsics.checkNotNullExpressionValue(intent, "setPackage(...)");
        serviceIntent = intent;
    }

    private final ISACallback.Stub createCallback() {
        return new ISACallback.Stub() { // from class: com.discord.samsung.SamsungConnectActivity$createCallback$1
            @Override // com.msc.sa.aidl.ISACallback
            public void onReceiveAccessToken(int i10, boolean z10, Bundle bundle) {
                throw new IllegalStateException("Unexpected call to onReceiveAccessToken");
            }

            @Override // com.msc.sa.aidl.ISACallback
            public void onReceiveAuthCode(int i10, boolean z10, Bundle bundle) {
                String str;
                String str2;
                String str3;
                String str4;
                String str5 = null;
                if (bundle != null) {
                    str = bundle.getString("authcode");
                } else {
                    str = null;
                }
                if (bundle != null) {
                    str2 = bundle.getString("auth_server_url");
                } else {
                    str2 = null;
                }
                Log log = Log.INSTANCE;
                Log.i$default(log, "Samsung", "Samsung onReceiveAuthCode=" + z10, (Throwable) null, 4, (Object) null);
                if (!z10 || str == null || StringsKt.k0(str)) {
                    if (bundle != null) {
                        str3 = bundle.getString("error_code");
                    } else {
                        str3 = null;
                    }
                    if (bundle != null) {
                        str4 = bundle.getString("error_message");
                    } else {
                        str4 = null;
                    }
                    StringBuilder sb2 = new StringBuilder();
                    sb2.append("Samsung Account link failure ");
                    if (str != null) {
                        str5 = StringsKt.y1(str, 4);
                    }
                    sb2.append("[" + str3 + ":" + str5 + "]: " + str4);
                    String sb3 = sb2.toString();
                    Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
                    Log.w$default(log, "Samsung", sb3, (Throwable) null, 4, (Object) null);
                }
                SamsungConnectActivity.this.finishWithResult(str, str2);
            }

            @Override // com.msc.sa.aidl.ISACallback
            public void onReceiveChecklistValidation(int i10, boolean z10, Bundle bundle) {
                throw new IllegalStateException("Unexpected call to onReceiveAccessToken");
            }

            @Override // com.msc.sa.aidl.ISACallback
            public void onReceiveDisclaimerAgreement(int i10, boolean z10, Bundle bundle) {
                throw new IllegalStateException("Unexpected call to onReceiveDisclaimerAgreement");
            }

            @Override // com.msc.sa.aidl.ISACallback
            public void onReceivePasswordConfirmation(int i10, boolean z10, Bundle bundle) {
                throw new IllegalStateException("Unexpected call to onReceivePasswordConfirmation");
            }

            @Override // com.msc.sa.aidl.ISACallback
            public void onReceiveRLControlFMM(int i10, boolean z10, Bundle bundle) {
                throw new IllegalStateException("Unexpected call to onReceiveRLControlFMM");
            }

            @Override // com.msc.sa.aidl.ISACallback
            public void onReceiveRubinRequest(int i10, boolean z10, Bundle bundle) {
                throw new IllegalStateException("Unexpected call to onReceiveRubinRequest");
            }

            @Override // com.msc.sa.aidl.ISACallback
            public void onReceiveSCloudAccessToken(int i10, boolean z10, Bundle bundle) {
                throw new IllegalStateException("Unexpected call to onReceiveSCloudAccessToken");
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void finishWithResult(String str, String str2) {
        Log log = Log.INSTANCE;
        Log.i$default(log, LOG_TAG, "Finishing With Result. AuthCode: " + str + ", AuthServerUrl: " + str2, (Throwable) null, 4, (Object) null);
        if (str != null && !StringsKt.k0(str) && str2 != null && !StringsKt.k0(str2)) {
            Intent intent = new Intent();
            intent.putExtra(EXTRA_REQ_AUTH_PARAM_AUTH_CODE, str);
            intent.putExtra(EXTRA_REQ_AUTH_PARAM_AUTH_SERVER_URL, str2);
            Unit unit = Unit.f33074a;
            setResult(-1, intent);
        } else {
            setResult(0);
        }
        finish();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void finishedWithRestartRequested() {
        Log.i$default(Log.INSTANCE, LOG_TAG, "finishedWithRestartRequested", (Throwable) null, 4, (Object) null);
        setResult(500, new Intent().putExtra(EXTRA_ATTEMPT_COUNT, getIntent().getIntExtra(EXTRA_ATTEMPT_COUNT, 0) + 1));
        finish();
    }

    private final void startAndBindSamsungAuthService() {
        Log log = Log.INSTANCE;
        Log.i$default(log, LOG_TAG, "Samsung starting SA Service", (Throwable) null, 4, (Object) null);
        Intent intent = serviceIntent;
        if (startService(intent) == null) {
            Log.e$default(log, LOG_TAG, "Samsung Account service could not be started", (Throwable) null, 4, (Object) null);
        } else if (!bindService(intent, this.serviceConnection, 1)) {
            Log.e$default(log, LOG_TAG, "Samsung Account service could not be bound", (Throwable) null, 4, (Object) null);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        Log.i$default(Log.INSTANCE, LOG_TAG, "onCreate SamsungConnectActivity", (Throwable) null, 4, (Object) null);
        this.samsungAccountServiceCallback = createCallback();
        startAndBindSamsungAuthService();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onStop() {
        Log.i$default(Log.INSTANCE, LOG_TAG, "onStop SamsungConnectActivity", (Throwable) null, 4, (Object) null);
        if (this.serviceBound) {
            unbindService(this.serviceConnection);
            this.serviceBound = false;
        }
        super.onStop();
    }
}
