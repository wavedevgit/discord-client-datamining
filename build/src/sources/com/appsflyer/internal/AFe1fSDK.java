package com.appsflyer.internal;

import android.content.Context;
import com.appsflyer.AFLogger;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.samsung.android.game.cloudgame.dev.sdk.CloudDevCallback;
import java.util.Map;
import java.util.concurrent.CountDownLatch;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\u000e\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0007\u0018\u0000 *2\b\u0012\u0004\u0012\u00020\u00020\u0001:\u0002*+B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0002¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\u000b\u001a\u00020\u00072\u0006\u0010\u0004\u001a\u00020\nH\u0002¢\u0006\u0004\b\u000b\u0010\fJ\u0017\u0010\r\u001a\u00020\u00072\u0006\u0010\u0004\u001a\u00020\nH\u0003¢\u0006\u0004\b\r\u0010\fJ\u0017\u0010\u000e\u001a\u00020\u00072\u0006\u0010\u0004\u001a\u00020\nH\u0002¢\u0006\u0004\b\u000e\u0010\fJ\u001f\u0010\u000b\u001a\u00020\u00072\u0006\u0010\u0004\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u0010H\u0002¢\u0006\u0004\b\u000b\u0010\u0012J\u001f\u0010\r\u001a\u00020\u00072\u0006\u0010\u0004\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\u0010H\u0002¢\u0006\u0004\b\r\u0010\u0012J\u000f\u0010\u000b\u001a\u00020\u0013H\u0017¢\u0006\u0004\b\u000b\u0010\u0014J\u000f\u0010\u000e\u001a\u00020\u0015H\u0017¢\u0006\u0004\b\u000e\u0010\u0016J\u0017\u0010\u0017\u001a\u00020\n2\u0006\u0010\u0004\u001a\u00020\u000fH\u0002¢\u0006\u0004\b\u0017\u0010\u0018J\u000f\u0010\u0019\u001a\u00020\u0007H\u0014¢\u0006\u0004\b\u0019\u0010\tJ\u001d\u0010\r\u001a\u00020\u001b*\u00020\u00022\b\u0010\u0004\u001a\u0004\u0018\u00010\u001aH\u0002¢\u0006\u0004\b\r\u0010\u001cR\u0014\u0010\r\u001a\u00020\u00028\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u001eR\u0014\u0010\u0017\u001a\u00020\u001f8\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b \u0010!R\u0014\u0010\u000e\u001a\u00020\"8\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b#\u0010$R\u0014\u0010\u0019\u001a\u00020\u00078CX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u001d\u0010\tR\u001b\u0010\u000b\u001a\u00020\u00078CX\u0083\u0084\u0002¢\u0006\f\n\u0004\b\b\u0010%\u001a\u0004\b \u0010\tR\u0014\u0010'\u001a\u00020&8\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b'\u0010(R\u0015\u0010\u001d\u001a\u00020\u00138BX\u0083\u0084\u0002¢\u0006\u0006\n\u0004\b)\u0010%"}, d2 = {"Lcom/appsflyer/internal/AFe1fSDK;", "Lcom/appsflyer/internal/AFe1lSDK;", "Lcom/appsflyer/internal/AFh1pSDK;", "Lcom/appsflyer/internal/AFc1bSDK;", "p0", "<init>", "(Lcom/appsflyer/internal/AFc1bSDK;)V", "", "copydefault", "()Z", "", "getCurrencyIso4217Code", "(I)Z", "getRevenue", "getMediationNetwork", "Landroid/content/Context;", "Lcom/appsflyer/internal/AFe1fSDK$AFa1tSDK;", "p1", "(Landroid/content/Context;Lcom/appsflyer/internal/AFe1fSDK$AFa1tSDK;)Z", "", "()J", "Lcom/appsflyer/internal/AFe1uSDK;", "()Lcom/appsflyer/internal/AFe1uSDK;", "getMonetizationNetwork", "(Landroid/content/Context;)I", "AFAdRevenueData", "", "", "(Lcom/appsflyer/internal/AFh1pSDK;Ljava/lang/String;)V", "areAllFieldsValid", "Lcom/appsflyer/internal/AFh1pSDK;", "Lcom/appsflyer/internal/AFc1gSDK;", "component2", "Lcom/appsflyer/internal/AFc1gSDK;", "Lcom/appsflyer/internal/AFc1pSDK;", "component3", "Lcom/appsflyer/internal/AFc1pSDK;", "Lkotlin/Lazy;", "Lcom/appsflyer/internal/AFc1eSDK;", "component1", "Lcom/appsflyer/internal/AFc1eSDK;", "component4", "AFa1vSDK", "AFa1tSDK"}, k = 1, mv = {1, 8, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nFetchAdvertisingIdTask.kt\nKotlin\n*S Kotlin\n*F\n+ 1 FetchAdvertisingIdTask.kt\ncom/appsflyer/internal/components/queue/tasks/FetchAdvertisingIdTask\n+ 2 StringExtensions.kt\ncom/appsflyer/internal/util/StringExtensionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,396:1\n39#2:397\n1#3:398\n*S KotlinDebug\n*F\n+ 1 FetchAdvertisingIdTask.kt\ncom/appsflyer/internal/components/queue/tasks/FetchAdvertisingIdTask\n*L\n202#1:397\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFe1fSDK extends AFe1lSDK<AFh1pSDK> {
    @NotNull
    public static final AFa1vSDK AFa1vSDK = new AFa1vSDK(null);
    @NotNull
    private final AFh1pSDK areAllFieldsValid;
    @NotNull
    private final AFc1eSDK component1;
    @NotNull
    private final AFc1gSDK component2;
    @NotNull
    private final AFc1pSDK component3;
    @NotNull
    private final Lazy component4;
    @NotNull
    private final Lazy copydefault;

    /* JADX INFO: Access modifiers changed from: package-private */
    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0010\b\n\u0002\b\u0010\b\u0082\b\u0018\u00002\u00020\u0001B7\u0012\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0004\u0012\f\b\u0002\u0010\t\u001a\u00060\u0007j\u0002`\b¢\u0006\u0004\b\n\u0010\u000bJ\u0012\u0010\f\u001a\u0004\u0018\u00010\u0002HÇ\u0003¢\u0006\u0004\b\f\u0010\rJ\u0012\u0010\u000e\u001a\u0004\u0018\u00010\u0004HÇ\u0003¢\u0006\u0004\b\u000e\u0010\u000fJ\u0010\u0010\u0010\u001a\u00020\u0004HÆ\u0003¢\u0006\u0004\b\u0010\u0010\u0011J\u0014\u0010\u0012\u001a\u00060\u0007j\u0002`\bHÇ\u0003¢\u0006\u0004\b\u0012\u0010\u0013J@\u0010\u0014\u001a\u00020\u00002\n\b\u0002\u0010\u0003\u001a\u0004\u0018\u00010\u00022\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00042\b\b\u0002\u0010\u0006\u001a\u00020\u00042\f\b\u0002\u0010\t\u001a\u00060\u0007j\u0002`\bHÇ\u0001¢\u0006\u0004\b\u0014\u0010\u0015J\u001a\u0010\u0017\u001a\u00020\u00042\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u0017\u0010\u0018J\u0010\u0010\u001a\u001a\u00020\u0019HÖ\u0001¢\u0006\u0004\b\u001a\u0010\u001bJ\u0010\u0010\u001c\u001a\u00020\u0002H×\u0001¢\u0006\u0004\b\u001c\u0010\rR$\u0010\u0003\u001a\u0004\u0018\u00010\u00028\u0007@\u0007X\u0087\u000e¢\u0006\u0012\n\u0004\b\u0003\u0010\u001d\u001a\u0004\b\u001e\u0010\r\"\u0004\b\u001f\u0010 R\"\u0010\u0006\u001a\u00020\u00048\u0007@\u0007X\u0087\u000e¢\u0006\u0012\n\u0004\b\u0006\u0010!\u001a\u0004\b\"\u0010\u0011\"\u0004\b#\u0010$R\u001e\u0010\t\u001a\u00060\u0007j\u0002`\b8\u0007X\u0087\u0004¢\u0006\f\n\u0004\b\t\u0010%\u001a\u0004\b&\u0010\u0013R$\u0010\u0005\u001a\u0004\u0018\u00010\u00048\u0007@\u0007X\u0087\u000e¢\u0006\u0012\n\u0004\b\u0005\u0010'\u001a\u0004\b\u0005\u0010\u000f\"\u0004\b(\u0010)"}, d2 = {"Lcom/appsflyer/internal/AFe1fSDK$AFa1tSDK;", "", "", "advertisingId", "", "isLimitAdTrackingEnabled", "advertisingIdWithGps", "Ljava/lang/StringBuilder;", "Lkotlin/text/StringBuilder;", "gaidError", "<init>", "(Ljava/lang/String;Ljava/lang/Boolean;ZLjava/lang/StringBuilder;)V", "component1", "()Ljava/lang/String;", "component2", "()Ljava/lang/Boolean;", "component3", "()Z", "component4", "()Ljava/lang/StringBuilder;", "copy", "(Ljava/lang/String;Ljava/lang/Boolean;ZLjava/lang/StringBuilder;)Lcom/appsflyer/internal/AFe1fSDK$AFa1tSDK;", "other", "equals", "(Ljava/lang/Object;)Z", "", "hashCode", "()I", "toString", "Ljava/lang/String;", "getAdvertisingId", "setAdvertisingId", "(Ljava/lang/String;)V", "Z", "getAdvertisingIdWithGps", "setAdvertisingIdWithGps", "(Z)V", "Ljava/lang/StringBuilder;", "getGaidError", "Ljava/lang/Boolean;", "setLimitAdTrackingEnabled", "(Ljava/lang/Boolean;)V"}, k = 1, mv = {1, 8, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AFa1tSDK {
        private String advertisingId;
        private boolean advertisingIdWithGps;
        @NotNull
        private final StringBuilder gaidError;
        private Boolean isLimitAdTrackingEnabled;

        public AFa1tSDK() {
            this(null, null, false, null, 15, null);
        }

        public static /* synthetic */ AFa1tSDK copy$default(AFa1tSDK aFa1tSDK, String str, Boolean bool, boolean z10, StringBuilder sb2, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = aFa1tSDK.advertisingId;
            }
            if ((i10 & 2) != 0) {
                bool = aFa1tSDK.isLimitAdTrackingEnabled;
            }
            if ((i10 & 4) != 0) {
                z10 = aFa1tSDK.advertisingIdWithGps;
            }
            if ((i10 & 8) != 0) {
                sb2 = aFa1tSDK.gaidError;
            }
            return aFa1tSDK.copy(str, bool, z10, sb2);
        }

        public final String component1() {
            return this.advertisingId;
        }

        public final Boolean component2() {
            return this.isLimitAdTrackingEnabled;
        }

        public final boolean component3() {
            return this.advertisingIdWithGps;
        }

        @NotNull
        public final StringBuilder component4() {
            return this.gaidError;
        }

        @NotNull
        public final AFa1tSDK copy(String str, Boolean bool, boolean z10, @NotNull StringBuilder gaidError) {
            Intrinsics.checkNotNullParameter(gaidError, "gaidError");
            return new AFa1tSDK(str, bool, z10, gaidError);
        }

        public final boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof AFa1tSDK) {
                AFa1tSDK aFa1tSDK = (AFa1tSDK) obj;
                return Intrinsics.areEqual(this.advertisingId, aFa1tSDK.advertisingId) && Intrinsics.areEqual(this.isLimitAdTrackingEnabled, aFa1tSDK.isLimitAdTrackingEnabled) && this.advertisingIdWithGps == aFa1tSDK.advertisingIdWithGps && Intrinsics.areEqual(this.gaidError, aFa1tSDK.gaidError);
            }
            return false;
        }

        public final String getAdvertisingId() {
            return this.advertisingId;
        }

        public final boolean getAdvertisingIdWithGps() {
            return this.advertisingIdWithGps;
        }

        @NotNull
        public final StringBuilder getGaidError() {
            return this.gaidError;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public final int hashCode() {
            String str = this.advertisingId;
            int hashCode = (str == null ? 0 : str.hashCode()) * 31;
            Boolean bool = this.isLimitAdTrackingEnabled;
            int hashCode2 = (hashCode + (bool != null ? bool.hashCode() : 0)) * 31;
            boolean z10 = this.advertisingIdWithGps;
            int i10 = z10;
            if (z10 != 0) {
                i10 = 1;
            }
            return ((hashCode2 + i10) * 31) + this.gaidError.hashCode();
        }

        public final Boolean isLimitAdTrackingEnabled() {
            return this.isLimitAdTrackingEnabled;
        }

        public final void setAdvertisingId(String str) {
            this.advertisingId = str;
        }

        public final void setAdvertisingIdWithGps(boolean z10) {
            this.advertisingIdWithGps = z10;
        }

        public final void setLimitAdTrackingEnabled(Boolean bool) {
            this.isLimitAdTrackingEnabled = bool;
        }

        @NotNull
        public final String toString() {
            String str = this.advertisingId;
            Boolean bool = this.isLimitAdTrackingEnabled;
            boolean z10 = this.advertisingIdWithGps;
            StringBuilder sb2 = this.gaidError;
            return "FetchGaidData(advertisingId=" + str + ", isLimitAdTrackingEnabled=" + bool + ", advertisingIdWithGps=" + z10 + ", gaidError=" + ((Object) sb2) + ")";
        }

        public AFa1tSDK(String str, Boolean bool, boolean z10, @NotNull StringBuilder gaidError) {
            Intrinsics.checkNotNullParameter(gaidError, "gaidError");
            this.advertisingId = str;
            this.isLimitAdTrackingEnabled = bool;
            this.advertisingIdWithGps = z10;
            this.gaidError = gaidError;
        }

        public /* synthetic */ AFa1tSDK(String str, Boolean bool, boolean z10, StringBuilder sb2, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? null : str, (i10 & 2) != 0 ? null : bool, (i10 & 4) != 0 ? false : z10, (i10 & 8) != 0 ? new StringBuilder() : sb2);
        }
    }

    @Metadata(d1 = {"\u0000\u001f\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010$\n\u0000*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H\u0016J\u001c\u0010\u0006\u001a\u00020\u00032\u0012\u0010\u0007\u001a\u000e\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u00050\bH\u0016¨\u0006\t"}, d2 = {"com/appsflyer/internal/components/queue/tasks/FetchAdvertisingIdTask$fetchGaidUsingSamsungSdk$1", "Lcom/samsung/android/game/cloudgame/dev/sdk/CloudDevCallback;", "onError", "", "reason", "", "onSuccess", "kinds", "", "SDK_prodRelease"}, k = 1, mv = {1, 8, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AFa1uSDK implements CloudDevCallback {
        final /* synthetic */ AFa1tSDK $fetchGaidData;
        final /* synthetic */ CountDownLatch $latch;

        AFa1uSDK(AFa1tSDK aFa1tSDK, CountDownLatch countDownLatch) {
            this.$fetchGaidData = aFa1tSDK;
            this.$latch = countDownLatch;
        }

        public final void onError(@NotNull String reason) {
            Intrinsics.checkNotNullParameter(reason, "reason");
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.ADVERTISING_ID;
            AFh1ySDK.w$default(aFLogger, aFg1cSDK, "Could not fetch GAID using CloudDevSdk: " + reason, false, 4, null);
            StringBuilder gaidError = this.$fetchGaidData.getGaidError();
            gaidError.append(reason);
            gaidError.append(" |");
            this.$latch.countDown();
        }

        public final void onSuccess(@NotNull Map<String, String> kinds) {
            Intrinsics.checkNotNullParameter(kinds, "kinds");
            AFh1ySDK.v$default(AFLogger.INSTANCE, AFg1cSDK.ADVERTISING_ID, "CloudDevCallback received onSuccess", false, 4, null);
            this.$fetchGaidData.setAdvertisingId(kinds.get("gaid"));
            this.$latch.countDown();
        }
    }

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003"}, d2 = {"Lcom/appsflyer/internal/AFe1fSDK$AFa1vSDK;", "", "<init>", "()V"}, k = 1, mv = {1, 8, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class AFa1vSDK {
        private AFa1vSDK() {
        }

        public /* synthetic */ AFa1vSDK(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public AFe1fSDK(@NotNull AFc1bSDK aFc1bSDK) {
        super(AFe1mSDK.FETCH_ADVERTISING_ID, new AFe1mSDK[0], "FetchAdvertisingIdTask");
        Intrinsics.checkNotNullParameter(aFc1bSDK, "");
        AFc1gSDK registerClient = aFc1bSDK.registerClient();
        Intrinsics.checkNotNullExpressionValue(registerClient, "");
        this.component2 = registerClient;
        AFc1pSDK currencyIso4217Code = aFc1bSDK.getCurrencyIso4217Code();
        Intrinsics.checkNotNullExpressionValue(currencyIso4217Code, "");
        this.component3 = currencyIso4217Code;
        AFc1eSDK afInfoLog = aFc1bSDK.afInfoLog();
        Intrinsics.checkNotNullExpressionValue(afInfoLog, "");
        this.component1 = afInfoLog;
        this.areAllFieldsValid = new AFh1pSDK(null, null, null, null, null, null, null, null, SetSpanOperation.SPAN_MAX_PRIORITY, null);
        this.component4 = or.l.a(new Function0<Long>() { // from class: com.appsflyer.internal.AFe1fSDK.4
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final Long invoke() {
                Long t10;
                String monetizationNetwork = AFe1fSDK.this.component3.getMonetizationNetwork("com.appsflyer.fetch_ids.timeout");
                return Long.valueOf((monetizationNetwork == null || (t10 = StringsKt.t(monetizationNetwork)) == null) ? 1000L : t10.longValue());
            }
        });
        this.copydefault = or.l.a(new Function0<Boolean>() { // from class: com.appsflyer.internal.AFe1fSDK.1
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            public final Boolean invoke() {
                return Boolean.valueOf(Boolean.parseBoolean(AFe1fSDK.this.component3.getMonetizationNetwork("com.appsflyer.enable_instant_plays")));
            }
        });
    }

    private static boolean areAllFieldsValid() {
        String str;
        try {
            Class.forName("com.samsung.android.game.cloudgame.dev.sdk.CloudDevSdk");
            return true;
        } catch (Throwable th2) {
            if (th2 instanceof ClassNotFoundException) {
                str = "CloudDevSdk not found";
            } else {
                str = "Unexpected exception while checking if running in cloud environment: " + th2.getMessage();
            }
            AFh1ySDK.e$default(AFLogger.INSTANCE, AFg1cSDK.ADVERTISING_ID, str, th2, true, false, false, false, 112, null);
            return false;
        }
    }

    private final boolean component2() {
        return ((Boolean) this.copydefault.getValue()).booleanValue();
    }

    /* JADX WARN: Removed duplicated region for block: B:15:0x0045 A[LOOP:0: B:3:0x0005->B:15:0x0045, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0048 A[EDGE_INSN: B:18:0x0048->B:16:0x0048 ?: BREAK  , SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final boolean copydefault() {
        /*
            r17 = this;
            r0 = r17
            r1 = 2
            r2 = 0
            r3 = r2
        L5:
            if (r1 <= 0) goto L48
            boolean r3 = r0.component2()
            r4 = 1
            if (r3 == 0) goto L22
            boolean r3 = r0.getMediationNetwork(r1)
            if (r3 == 0) goto L22
            com.appsflyer.AFLogger r5 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r6 = com.appsflyer.internal.AFg1cSDK.ADVERTISING_ID
            r9 = 4
            r10 = 0
            java.lang.String r7 = "GAID fetched using Samsung Cloud dev SDK"
            r8 = 0
            com.appsflyer.internal.AFh1ySDK.v$default(r5, r6, r7, r8, r9, r10)
        L20:
            r3 = r4
            goto L43
        L22:
            boolean r3 = r0.getCurrencyIso4217Code(r1)
            if (r3 == 0) goto L35
            com.appsflyer.AFLogger r5 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r6 = com.appsflyer.internal.AFg1cSDK.ADVERTISING_ID
            r9 = 4
            r10 = 0
            java.lang.String r7 = "GAID fetched using GMS"
            r8 = 0
            com.appsflyer.internal.AFh1ySDK.v$default(r5, r6, r7, r8, r9, r10)
            goto L20
        L35:
            com.appsflyer.AFLogger r11 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r12 = com.appsflyer.internal.AFg1cSDK.ADVERTISING_ID
            r15 = 4
            r16 = 0
            java.lang.String r13 = "Failed to fetch GAID"
            r14 = 0
            com.appsflyer.internal.AFh1ySDK.v$default(r11, r12, r13, r14, r15, r16)
            r3 = r2
        L43:
            if (r3 != 0) goto L48
            int r1 = r1 + (-1)
            goto L5
        L48:
            com.appsflyer.internal.AFc1eSDK r1 = r0.component1
            com.appsflyer.internal.AFh1pSDK r2 = r0.areAllFieldsValid
            r1.component2 = r2
            return r3
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFe1fSDK.copydefault():boolean");
    }

    /* JADX WARN: Removed duplicated region for block: B:18:0x0082 A[RETURN] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final boolean getCurrencyIso4217Code(int r14) {
        /*
            r13 = this;
            com.appsflyer.AFLogger r0 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r1 = com.appsflyer.internal.AFg1cSDK.ADVERTISING_ID
            r4 = 4
            r5 = 0
            java.lang.String r2 = "Trying to fetch GAID..."
            r3 = 0
            com.appsflyer.internal.AFh1ySDK.i$default(r0, r1, r2, r3, r4, r5)
            com.appsflyer.internal.AFe1fSDK$AFa1tSDK r6 = new com.appsflyer.internal.AFe1fSDK$AFa1tSDK
            r11 = 15
            r12 = 0
            r7 = 0
            r8 = 0
            r9 = 0
            r10 = 0
            r6.<init>(r7, r8, r9, r10, r11, r12)
            com.appsflyer.internal.AFc1gSDK r0 = r13.component2
            android.content.Context r0 = r0.getRevenue
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0)
            int r0 = getMonetizationNetwork(r0)
            com.appsflyer.internal.AFc1gSDK r1 = r13.component2
            android.content.Context r1 = r1.getRevenue
            kotlin.jvm.internal.Intrinsics.checkNotNull(r1)
            boolean r1 = r13.getRevenue(r1, r6)
            r2 = 0
            r3 = 1
            if (r1 != 0) goto L83
            com.appsflyer.AppsFlyerProperties r1 = com.appsflyer.AppsFlyerProperties.getInstance()
            java.lang.String r4 = "enableGpsFallback"
            boolean r1 = r1.getBoolean(r4, r3)
            if (r1 == 0) goto L4d
            com.appsflyer.internal.AFc1gSDK r1 = r13.component2
            android.content.Context r1 = r1.getRevenue
            kotlin.jvm.internal.Intrinsics.checkNotNull(r1)
            boolean r1 = r13.getCurrencyIso4217Code(r1, r6)
            if (r1 == 0) goto L4d
            r1 = r3
            goto L4e
        L4d:
            r1 = r2
        L4e:
            java.lang.StringBuilder r4 = r6.getGaidError()
            java.lang.String r4 = r4.toString()
            if (r4 == 0) goto L7b
            boolean r5 = kotlin.text.StringsKt.k0(r4)
            if (r5 == 0) goto L5f
            goto L7b
        L5f:
            java.lang.CharSequence r4 = kotlin.text.StringsKt.k1(r4)
            java.lang.String r4 = r4.toString()
            java.lang.StringBuilder r5 = new java.lang.StringBuilder
            r5.<init>()
            r5.append(r0)
            java.lang.String r0 = ": "
            r5.append(r0)
            r5.append(r4)
            java.lang.String r4 = r5.toString()
        L7b:
            com.appsflyer.internal.AFh1pSDK r0 = r13.areAllFieldsValid
            getRevenue(r0, r4)
            if (r1 != 0) goto L83
            return r2
        L83:
            com.appsflyer.internal.AFh1pSDK r0 = r13.areAllFieldsValid
            java.lang.String r1 = r6.getAdvertisingId()
            r0.getRevenue = r1
            java.lang.Boolean r1 = r6.isLimitAdTrackingEnabled()
            r0.getMonetizationNetwork = r1
            java.lang.Boolean r1 = r6.isLimitAdTrackingEnabled()
            if (r1 == 0) goto La1
            boolean r1 = r1.booleanValue()
            r1 = r1 ^ r3
            java.lang.Boolean r1 = java.lang.Boolean.valueOf(r1)
            goto La2
        La1:
            r1 = 0
        La2:
            r0.getMediationNetwork = r1
            boolean r1 = r6.getAdvertisingIdWithGps()
            java.lang.Boolean r1 = java.lang.Boolean.valueOf(r1)
            r0.getCurrencyIso4217Code = r1
            java.lang.Boolean r1 = java.lang.Boolean.FALSE
            r0.AFAdRevenueData = r1
            r1 = 2
            if (r14 == r1) goto Lb6
            r2 = r3
        Lb6:
            java.lang.Boolean r14 = java.lang.Boolean.valueOf(r2)
            r0.component2 = r14
            return r3
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFe1fSDK.getCurrencyIso4217Code(int):boolean");
    }

    private final boolean getRevenue(Context context, AFa1tSDK aFa1tSDK) {
        Unit unit;
        try {
            AdvertisingIdClient.Info a10 = AdvertisingIdClient.a(context);
            if (a10 != null) {
                aFa1tSDK.setAdvertisingId(a10.a());
                aFa1tSDK.setLimitAdTrackingEnabled(Boolean.valueOf(a10.b()));
                aFa1tSDK.setAdvertisingIdWithGps(true);
                String advertisingId = aFa1tSDK.getAdvertisingId();
                if (advertisingId != null) {
                    if (advertisingId.length() == 0) {
                    }
                    unit = Unit.f31988a;
                }
                aFa1tSDK.getGaidError().append("emptyOrNull |");
                unit = Unit.f31988a;
            } else {
                unit = null;
            }
            if (unit != null) {
                return true;
            }
            aFa1tSDK.getGaidError().append("gpsAdInfo-null |");
            throw new IllegalStateException("GpsAdIndo is null");
        } catch (Throwable th2) {
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.ADVERTISING_ID;
            String message = th2.getMessage();
            AFh1ySDK.e$default(aFLogger, aFg1cSDK, "Google Play Services is missing " + message, th2, false, false, false, false, 88, null);
            StringBuilder gaidError = aFa1tSDK.getGaidError();
            gaidError.append(th2.getClass().getSimpleName());
            gaidError.append(" |");
            AFh1ySDK.i$default(aFLogger, aFg1cSDK, "WARNING: Google Play Services is missing.", false, 4, null);
            return false;
        }
    }

    @Override // com.appsflyer.internal.AFe1lSDK
    public final boolean AFAdRevenueData() {
        return false;
    }

    @Override // com.appsflyer.internal.AFe1lSDK
    @NotNull
    public final AFe1uSDK getMediationNetwork() {
        AFe1uSDK aFe1uSDK;
        if (this.component1.getRevenue()) {
            AFh1ySDK.v$default(AFLogger.INSTANCE, AFg1cSDK.ADVERTISING_ID, "QUEUE: Advertising ID collection is disabled. Skipping fetching... ", false, 4, null);
            return AFe1uSDK.FAILURE;
        }
        long currentTimeMillis = System.currentTimeMillis();
        Boolean valueOf = Boolean.valueOf(copydefault());
        Boolean bool = Boolean.FALSE;
        if (CollectionsKt.o(valueOf, bool, bool).contains(Boolean.TRUE)) {
            aFe1uSDK = AFe1uSDK.SUCCESS;
        } else {
            aFe1uSDK = AFe1uSDK.FAILURE;
        }
        AFc1eSDK aFc1eSDK = this.component1;
        AFd1aSDK aFd1aSDK = new AFd1aSDK(System.currentTimeMillis() - currentTimeMillis);
        AFLogger aFLogger = AFLogger.INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.ADVERTISING_ID;
        long j10 = aFd1aSDK.getRevenue;
        AFh1ySDK.v$default(aFLogger, aFg1cSDK, "QUEUE: FetchAdvertisingIdTask: took " + j10 + "ms", false, 4, null);
        aFc1eSDK.getMediationNetwork(aFd1aSDK);
        return aFe1uSDK;
    }

    private static int getMonetizationNetwork(Context context) {
        try {
            return com.google.android.gms.common.f.m().g(context);
        } catch (Throwable th2) {
            AFh1ySDK.e$default(AFLogger.INSTANCE, AFg1cSDK.ADVERTISING_ID, "isGooglePlayServicesAvailable error", th2, false, false, false, false, 96, null);
            return -1;
        }
    }

    private final boolean getMediationNetwork(int i10) {
        return getRevenue(i10);
    }

    /* JADX WARN: Code restructure failed: missing block: B:10:0x006a, code lost:
        if (r9.getGaidError().length() > 0) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:11:0x006c, code lost:
        getRevenue(r20.areAllFieldsValid, r9.getGaidError().toString());
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x00d2, code lost:
        if (r9.getGaidError().length() <= 0) goto L11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:28:0x00d5, code lost:
        r0 = r9.getAdvertisingId();
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x00d9, code lost:
        if (r0 == null) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x00df, code lost:
        if (r0.length() != 0) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:33:0x00e2, code lost:
        r0 = r20.areAllFieldsValid;
        r0.getRevenue = r9.getAdvertisingId();
        r3 = java.lang.Boolean.FALSE;
        r0.getMonetizationNetwork = r3;
        r4 = java.lang.Boolean.TRUE;
        r0.getMediationNetwork = r4;
        r0.getCurrencyIso4217Code = r3;
        r0.AFAdRevenueData = r4;
     */
    /* JADX WARN: Code restructure failed: missing block: B:34:0x00f9, code lost:
        if (r21 == 2) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:35:0x00fb, code lost:
        r8 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x00fc, code lost:
        r0.component2 = java.lang.Boolean.valueOf(r8);
     */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x0102, code lost:
        return true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:38:0x0103, code lost:
        return false;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final boolean getRevenue(int r21) {
        /*
            Method dump skipped, instructions count: 293
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFe1fSDK.getRevenue(int):boolean");
    }

    /* JADX WARN: Removed duplicated region for block: B:12:0x0032 A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0034 A[Catch: all -> 0x0021, TryCatch #0 {all -> 0x0021, blocks: (B:2:0x0000, B:4:0x001a, B:10:0x002e, B:14:0x0034, B:15:0x0044, B:9:0x0025), top: B:21:0x0000 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final boolean getCurrencyIso4217Code(android.content.Context r11, com.appsflyer.internal.AFe1fSDK.AFa1tSDK r12) {
        /*
            r10 = this;
            com.appsflyer.internal.AFb1qSDK$AFa1uSDK r11 = com.appsflyer.internal.AFb1qSDK.AFAdRevenueData(r11)     // Catch: java.lang.Throwable -> L21
            java.lang.String r0 = r11.getCurrencyIso4217Code     // Catch: java.lang.Throwable -> L21
            r12.setAdvertisingId(r0)     // Catch: java.lang.Throwable -> L21
            boolean r11 = r11.getRevenue()     // Catch: java.lang.Throwable -> L21
            java.lang.Boolean r11 = java.lang.Boolean.valueOf(r11)     // Catch: java.lang.Throwable -> L21
            r12.setLimitAdTrackingEnabled(r11)     // Catch: java.lang.Throwable -> L21
            java.lang.String r11 = r12.getAdvertisingId()     // Catch: java.lang.Throwable -> L21
            if (r11 == 0) goto L25
            int r11 = r11.length()     // Catch: java.lang.Throwable -> L21
            if (r11 != 0) goto L2e
            goto L25
        L21:
            r0 = move-exception
            r11 = r0
            r3 = r11
            goto L45
        L25:
            java.lang.StringBuilder r11 = r12.getGaidError()     // Catch: java.lang.Throwable -> L21
            java.lang.String r0 = "emptyOrNull (bypass) |"
            r11.append(r0)     // Catch: java.lang.Throwable -> L21
        L2e:
            kotlin.Unit r11 = kotlin.Unit.f31988a     // Catch: java.lang.Throwable -> L21
            if (r11 == 0) goto L34
            r11 = 1
            return r11
        L34:
            java.lang.StringBuilder r11 = r12.getGaidError()     // Catch: java.lang.Throwable -> L21
            java.lang.String r0 = "gpsAdInfo-null (bypass) |"
            r11.append(r0)     // Catch: java.lang.Throwable -> L21
            java.lang.String r11 = "GpsAdInfo is null (bypass)"
            java.lang.IllegalStateException r0 = new java.lang.IllegalStateException     // Catch: java.lang.Throwable -> L21
            r0.<init>(r11)     // Catch: java.lang.Throwable -> L21
            throw r0     // Catch: java.lang.Throwable -> L21
        L45:
            com.appsflyer.AFLogger r0 = com.appsflyer.AFLogger.INSTANCE
            com.appsflyer.internal.AFg1cSDK r1 = com.appsflyer.internal.AFg1cSDK.ADVERTISING_ID
            java.lang.String r11 = r3.getMessage()
            java.lang.StringBuilder r2 = new java.lang.StringBuilder
            r2.<init>()
            java.lang.String r4 = "Failed to fetch GAID: "
            r2.append(r4)
            r2.append(r11)
            java.lang.String r2 = r2.toString()
            r8 = 64
            r9 = 0
            r4 = 1
            r5 = 0
            r6 = 0
            r7 = 0
            com.appsflyer.internal.AFh1ySDK.e$default(r0, r1, r2, r3, r4, r5, r6, r7, r8, r9)
            java.lang.StringBuilder r11 = r12.getGaidError()
            java.lang.Class r12 = r3.getClass()
            java.lang.String r12 = r12.getSimpleName()
            r11.append(r12)
            java.lang.String r12 = " |"
            r11.append(r12)
            java.lang.String r11 = r3.getLocalizedMessage()
            if (r11 != 0) goto L86
            java.lang.String r11 = r3.toString()
        L86:
            r6 = r11
            r8 = 4
            r9 = 0
            r7 = 0
            r4 = r0
            r5 = r1
            com.appsflyer.internal.AFh1ySDK.i$default(r4, r5, r6, r7, r8, r9)
            r11 = 0
            return r11
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFe1fSDK.getCurrencyIso4217Code(android.content.Context, com.appsflyer.internal.AFe1fSDK$AFa1tSDK):boolean");
    }

    @Override // com.appsflyer.internal.AFe1lSDK
    public final long getCurrencyIso4217Code() {
        return ((Number) this.component4.getValue()).longValue();
    }

    private static void getRevenue(AFh1pSDK aFh1pSDK, String str) {
        if (str == null) {
            return;
        }
        String str2 = aFh1pSDK.component1;
        if (str2 != null) {
            String str3 = str2 + " | " + str;
            if (str3 != null) {
                str = str3;
            }
        }
        aFh1pSDK.component1 = str;
    }
}
