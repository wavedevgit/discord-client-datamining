package com.appsflyer;

import com.appsflyer.internal.AFc1jSDK;
import com.appsflyer.internal.AFg1cSDK;
import com.appsflyer.internal.AFh1ySDK;
import ir.l;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.concurrent.ExecutorService;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u0003\n\u0002\b\u0014\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u0011\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010#\n\u0002\b\u0003\bÇ\u0002\u0018\u00002\u00020\u0001:\u0001<B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0017\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u0005\u001a\u00020\u0004H\u0007¢\u0006\u0004\b\u0007\u0010\bJ\u001f\u0010\u0007\u001a\u00020\u00062\u0006\u0010\u0005\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\tH\u0007¢\u0006\u0004\b\u0007\u0010\u000bJ7\u0010\u0012\u001a\u00020\u00062\u0006\u0010\f\u001a\u00020\u00042\u0006\u0010\u000e\u001a\u00020\r2\u0006\u0010\u000f\u001a\u00020\t2\u0006\u0010\u0010\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\tH\u0007¢\u0006\u0004\b\u0012\u0010\u0013J#\u0010\u0012\u001a\u00020\u00062\b\u0010\u0014\u001a\u0004\u0018\u00010\u00042\b\u0010\u000e\u001a\u0004\u0018\u00010\rH\u0007¢\u0006\u0004\b\u0012\u0010\u0015J+\u0010\u0012\u001a\u00020\u00062\b\u0010\u0014\u001a\u0004\u0018\u00010\u00042\b\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\u0010\u001a\u00020\tH\u0007¢\u0006\u0004\b\u0012\u0010\u0016J3\u0010\u0012\u001a\u00020\u00062\b\u0010\u0014\u001a\u0004\u0018\u00010\u00042\b\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\u0010\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\tH\u0007¢\u0006\u0004\b\u0012\u0010\u0017J#\u0010\u0018\u001a\u00020\u00062\b\u0010\u0014\u001a\u0004\u0018\u00010\u00042\b\u0010\u000e\u001a\u0004\u0018\u00010\rH\u0007¢\u0006\u0004\b\u0018\u0010\u0015J+\u0010\u0018\u001a\u00020\u00062\b\u0010\u0014\u001a\u0004\u0018\u00010\u00042\b\u0010\u000e\u001a\u0004\u0018\u00010\r2\u0006\u0010\u0019\u001a\u00020\tH\u0007¢\u0006\u0004\b\u0018\u0010\u0016J\u0017\u0010\u001b\u001a\u00020\u00062\u0006\u0010\u001a\u001a\u00020\u0004H\u0007¢\u0006\u0004\b\u001b\u0010\bJ\u001f\u0010\u001b\u001a\u00020\u00062\u0006\u0010\u001a\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\tH\u0007¢\u0006\u0004\b\u001b\u0010\u000bJ\u0017\u0010\u001c\u001a\u00020\u00062\u0006\u0010\u001a\u001a\u00020\u0004H\u0007¢\u0006\u0004\b\u001c\u0010\bJ\u0017\u0010\u001e\u001a\u00020\u00062\u0006\u0010\u001d\u001a\u00020\u0004H\u0007¢\u0006\u0004\b\u001e\u0010\bJ\u0017\u0010\u001f\u001a\u00020\u00062\u0006\u0010\u001d\u001a\u00020\u0004H\u0007¢\u0006\u0004\b\u001f\u0010\bJ\u0017\u0010!\u001a\u00020\u00062\u0006\u0010 \u001a\u00020\u0004H\u0007¢\u0006\u0004\b!\u0010\bJ\u001f\u0010!\u001a\u00020\u00062\u0006\u0010 \u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\tH\u0007¢\u0006\u0004\b!\u0010\u000bJ'\u0010%\u001a\u00020\u00062\u0006\u0010#\u001a\u00020\"2\u0006\u0010$\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\tH\u0016¢\u0006\u0004\b%\u0010&JG\u0010)\u001a\u00020\u00062\u0006\u0010#\u001a\u00020\"2\u0006\u0010$\u001a\u00020\u00042\u0006\u0010'\u001a\u00020\r2\u0006\u0010(\u001a\u00020\t2\u0006\u0010\u0010\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\tH\u0016¢\u0006\u0004\b)\u0010*J\u001f\u0010+\u001a\u00020\u00062\u0006\u0010#\u001a\u00020\"2\u0006\u0010$\u001a\u00020\u0004H\u0016¢\u0006\u0004\b+\u0010,J'\u0010-\u001a\u00020\u00062\u0006\u0010#\u001a\u00020\"2\u0006\u0010$\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\tH\u0016¢\u0006\u0004\b-\u0010&J!\u00100\u001a\u00020\u00062\u0012\u0010/\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00010.\"\u00020\u0001¢\u0006\u0004\b0\u00101J!\u00102\u001a\u00020\u00062\u0012\u0010/\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00010.\"\u00020\u0001¢\u0006\u0004\b2\u00101J'\u00103\u001a\u00020\u00062\u0006\u0010#\u001a\u00020\"2\u0006\u0010$\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\tH\u0016¢\u0006\u0004\b3\u0010&J'\u00104\u001a\u00020\u00062\u0006\u0010#\u001a\u00020\"2\u0006\u0010$\u001a\u00020\u00042\u0006\u0010\n\u001a\u00020\tH\u0016¢\u0006\u0004\b4\u0010&R\u0015\u00108\u001a\u0002058BX\u0083\u0084\u0002¢\u0006\u0006\n\u0004\b6\u00107R\u001b\u0010;\u001a\b\u0012\u0004\u0012\u00020\u0001098BX\u0083\u0084\u0002¢\u0006\u0006\n\u0004\b:\u00107"}, d2 = {"Lcom/appsflyer/AFLogger;", "Lcom/appsflyer/internal/AFh1ySDK;", "<init>", "()V", "", "debugLogMessage", "", "afDebugLog", "(Ljava/lang/String;)V", "", "shouldRemoteDebug", "(Ljava/lang/String;Z)V", "message", "", "ex", "printMessage", "printThrowable", "shouldReportToExManager", "afErrorLog", "(Ljava/lang/String;Ljava/lang/Throwable;ZZZ)V", "errorLogMessage", "(Ljava/lang/String;Ljava/lang/Throwable;)V", "(Ljava/lang/String;Ljava/lang/Throwable;Z)V", "(Ljava/lang/String;Ljava/lang/Throwable;ZZ)V", "afErrorLogForExcManagerOnly", "disableReporting", "logMessage", "afInfoLog", "afLogForce", "rdLogMessage", "afRDLog", "afVerboseLog", "warningLogMessage", "afWarnLog", "Lcom/appsflyer/internal/AFg1cSDK;", "tag", "msg", "d", "(Lcom/appsflyer/internal/AFg1cSDK;Ljava/lang/String;Z)V", "throwable", "printMsg", "e", "(Lcom/appsflyer/internal/AFg1cSDK;Ljava/lang/String;Ljava/lang/Throwable;ZZZZ)V", "force", "(Lcom/appsflyer/internal/AFg1cSDK;Ljava/lang/String;)V", "i", "", "client", "registerClient", "([Lcom/appsflyer/internal/AFh1ySDK;)V", "unregisterClient", "v", "w", "Ljava/util/concurrent/ExecutorService;", "getCurrencyIso4217Code", "Lkotlin/Lazy;", "AFAdRevenueData", "", "getMediationNetwork", "getRevenue", "LogLevel"}, k = 1, mv = {1, 8, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nAFLogger.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AFLogger.kt\ncom/appsflyer/AFLogger\n+ 2 StringExtensions.kt\ncom/appsflyer/internal/util/StringExtensionsKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,278:1\n36#2:279\n36#2:280\n36#2:281\n36#2:282\n36#2:283\n1855#3,2:284\n*S KotlinDebug\n*F\n+ 1 AFLogger.kt\ncom/appsflyer/AFLogger\n*L\n177#1:279\n189#1:280\n208#1:281\n224#1:282\n243#1:283\n35#1:284,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFLogger extends AFh1ySDK {
    @NotNull
    public static final AFLogger INSTANCE = new AFLogger();
    @NotNull
    private static final Lazy getMediationNetwork = l.b(new Function0<Set<AFh1ySDK>>() { // from class: com.appsflyer.AFLogger.6
        @Override // kotlin.jvm.functions.Function0
        @NotNull
        /* renamed from: getMonetizationNetwork */
        public final Set<AFh1ySDK> invoke() {
            return new LinkedHashSet();
        }
    });
    @NotNull
    private static final Lazy getCurrencyIso4217Code = l.b(new Function0<ExecutorService>() { // from class: com.appsflyer.AFLogger.1
        @Override // kotlin.jvm.functions.Function0
        @NotNull
        /* renamed from: getRevenue */
        public final ExecutorService invoke() {
            return AFc1jSDK.getCurrencyIso4217Code();
        }
    });

    @Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\u0010\b\n\u0002\b\r\b\u0086\u0001\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\u0011\b\u0002\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u001a\u0010\u0006\u001a\u00020\u00028\u0007X\u0087\u0004¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\b\u0010\tj\u0002\b\nj\u0002\b\u000bj\u0002\b\fj\u0002\b\rj\u0002\b\u000ej\u0002\b\u000f"}, d2 = {"Lcom/appsflyer/AFLogger$LogLevel;", "", "", "p0", "<init>", "(Ljava/lang/String;II)V", "level", "I", "getLevel", "()I", "NONE", "ERROR", "WARNING", "INFO", "DEBUG", "VERBOSE"}, k = 1, mv = {1, 8, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum LogLevel {
        NONE(0),
        ERROR(1),
        WARNING(2),
        INFO(3),
        DEBUG(4),
        VERBOSE(5);
        
        private final int level;

        LogLevel(int i10) {
            this.level = i10;
        }

        public final int getLevel() {
            return this.level;
        }
    }

    private AFLogger() {
    }

    public static final void AFAdRevenueData(AFh1ySDK[] aFh1ySDKArr) {
        Intrinsics.checkNotNullParameter(aFh1ySDKArr, "");
        ((Set) getMediationNetwork.getValue()).removeAll(i.f1(aFh1ySDKArr));
    }

    @ir.c
    public static final void afDebugLog(@NotNull String str, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "");
        INSTANCE.d(AFg1cSDK.OTHER, str, z10);
    }

    @ir.c
    public static final void afErrorLog(@NotNull String str, @NotNull Throwable th2, boolean z10, boolean z11, boolean z12) {
        Intrinsics.checkNotNullParameter(str, "");
        Intrinsics.checkNotNullParameter(th2, "");
        AFh1ySDK.e$default(INSTANCE, AFg1cSDK.OTHER, str, th2, z10, z11, z12, false, 64, null);
    }

    @ir.c
    public static final void afErrorLogForExcManagerOnly(String str, Throwable th2) {
        AFLogger aFLogger = INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.OTHER;
        String str2 = (str == null || StringsKt.k0(str)) ? "null" : "null";
        if (th2 == null) {
            th2 = new NullPointerException("Invoked with null Throwable");
        }
        AFh1ySDK.e$default(aFLogger, aFg1cSDK, str2, th2, false, false, true, false, 64, null);
    }

    @ir.c
    public static final void afInfoLog(@NotNull String str, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "");
        INSTANCE.i(AFg1cSDK.OTHER, str, z10);
    }

    @ir.c
    public static final void afLogForce(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "");
        INSTANCE.force(AFg1cSDK.OTHER, str);
    }

    @ir.c
    public static final void afRDLog(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "");
        INSTANCE.v(AFg1cSDK.OTHER, str, true);
    }

    @ir.c
    public static final void afVerboseLog(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "");
        INSTANCE.v(AFg1cSDK.OTHER, str, false);
    }

    @ir.c
    public static final void afWarnLog(@NotNull String str, boolean z10) {
        Intrinsics.checkNotNullParameter(str, "");
        INSTANCE.w(AFg1cSDK.OTHER, str, z10);
    }

    public static final void getMediationNetwork(Function1 function1) {
        Intrinsics.checkNotNullParameter(function1, "");
        for (AFh1ySDK aFh1ySDK : (Set) getMediationNetwork.getValue()) {
            function1.invoke(aFh1ySDK);
        }
    }

    public static final void getMonetizationNetwork(AFh1ySDK[] aFh1ySDKArr) {
        Intrinsics.checkNotNullParameter(aFh1ySDKArr, "");
        CollectionsKt.D((Set) getMediationNetwork.getValue(), aFh1ySDKArr);
    }

    @Override // com.appsflyer.internal.AFh1ySDK
    public final void d(@NotNull final AFg1cSDK aFg1cSDK, @NotNull final String str, final boolean z10) {
        Intrinsics.checkNotNullParameter(aFg1cSDK, "");
        Intrinsics.checkNotNullParameter(str, "");
        ((ExecutorService) getCurrencyIso4217Code.getValue()).execute(new a(new Function1<AFh1ySDK, Unit>() { // from class: com.appsflyer.AFLogger.2
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(1);
            }

            public final void getMonetizationNetwork(@NotNull AFh1ySDK aFh1ySDK) {
                Intrinsics.checkNotNullParameter(aFh1ySDK, "");
                aFh1ySDK.d(aFg1cSDK, str, z10);
            }

            @Override // kotlin.jvm.functions.Function1
            public final /* synthetic */ Object invoke(Object obj) {
                getMonetizationNetwork((AFh1ySDK) obj);
                return Unit.f33298a;
            }
        }));
    }

    @Override // com.appsflyer.internal.AFh1ySDK
    public final void e(@NotNull final AFg1cSDK aFg1cSDK, @NotNull final String str, @NotNull final Throwable th2, final boolean z10, final boolean z11, final boolean z12, final boolean z13) {
        Intrinsics.checkNotNullParameter(aFg1cSDK, "");
        Intrinsics.checkNotNullParameter(str, "");
        Intrinsics.checkNotNullParameter(th2, "");
        ((ExecutorService) getCurrencyIso4217Code.getValue()).execute(new a(new Function1<AFh1ySDK, Unit>() { // from class: com.appsflyer.AFLogger.3
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(1);
            }

            public final void getCurrencyIso4217Code(@NotNull AFh1ySDK aFh1ySDK) {
                Intrinsics.checkNotNullParameter(aFh1ySDK, "");
                aFh1ySDK.e(aFg1cSDK, str, th2, z10, z11, z12, z13);
            }

            @Override // kotlin.jvm.functions.Function1
            public final /* synthetic */ Object invoke(Object obj) {
                getCurrencyIso4217Code((AFh1ySDK) obj);
                return Unit.f33298a;
            }
        }));
    }

    @Override // com.appsflyer.internal.AFh1ySDK
    public final void force(@NotNull final AFg1cSDK aFg1cSDK, @NotNull final String str) {
        Intrinsics.checkNotNullParameter(aFg1cSDK, "");
        Intrinsics.checkNotNullParameter(str, "");
        ((ExecutorService) getCurrencyIso4217Code.getValue()).execute(new a(new Function1<AFh1ySDK, Unit>() { // from class: com.appsflyer.AFLogger.5
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(1);
            }

            public final void getMediationNetwork(@NotNull AFh1ySDK aFh1ySDK) {
                Intrinsics.checkNotNullParameter(aFh1ySDK, "");
                aFh1ySDK.force(aFg1cSDK, str);
            }

            @Override // kotlin.jvm.functions.Function1
            public final /* synthetic */ Object invoke(Object obj) {
                getMediationNetwork((AFh1ySDK) obj);
                return Unit.f33298a;
            }
        }));
    }

    @Override // com.appsflyer.internal.AFh1ySDK
    public final void i(@NotNull final AFg1cSDK aFg1cSDK, @NotNull final String str, final boolean z10) {
        Intrinsics.checkNotNullParameter(aFg1cSDK, "");
        Intrinsics.checkNotNullParameter(str, "");
        ((ExecutorService) getCurrencyIso4217Code.getValue()).execute(new a(new Function1<AFh1ySDK, Unit>() { // from class: com.appsflyer.AFLogger.4
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(1);
            }

            public final void AFAdRevenueData(@NotNull AFh1ySDK aFh1ySDK) {
                Intrinsics.checkNotNullParameter(aFh1ySDK, "");
                aFh1ySDK.i(aFg1cSDK, str, z10);
            }

            @Override // kotlin.jvm.functions.Function1
            public final /* synthetic */ Object invoke(Object obj) {
                AFAdRevenueData((AFh1ySDK) obj);
                return Unit.f33298a;
            }
        }));
    }

    public final void registerClient(@NotNull final AFh1ySDK... aFh1ySDKArr) {
        Intrinsics.checkNotNullParameter(aFh1ySDKArr, "");
        ((ExecutorService) getCurrencyIso4217Code.getValue()).execute(new Runnable() { // from class: com.appsflyer.c
            @Override // java.lang.Runnable
            public final void run() {
                AFLogger.getMonetizationNetwork(aFh1ySDKArr);
            }
        });
    }

    public final void unregisterClient(@NotNull final AFh1ySDK... aFh1ySDKArr) {
        Intrinsics.checkNotNullParameter(aFh1ySDKArr, "");
        ((ExecutorService) getCurrencyIso4217Code.getValue()).execute(new Runnable() { // from class: com.appsflyer.b
            @Override // java.lang.Runnable
            public final void run() {
                AFLogger.AFAdRevenueData(aFh1ySDKArr);
            }
        });
    }

    @Override // com.appsflyer.internal.AFh1ySDK
    public final void v(@NotNull final AFg1cSDK aFg1cSDK, @NotNull final String str, final boolean z10) {
        Intrinsics.checkNotNullParameter(aFg1cSDK, "");
        Intrinsics.checkNotNullParameter(str, "");
        ((ExecutorService) getCurrencyIso4217Code.getValue()).execute(new a(new Function1<AFh1ySDK, Unit>() { // from class: com.appsflyer.AFLogger.7
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(1);
            }

            public final void AFAdRevenueData(@NotNull AFh1ySDK aFh1ySDK) {
                Intrinsics.checkNotNullParameter(aFh1ySDK, "");
                aFh1ySDK.v(aFg1cSDK, str, z10);
            }

            @Override // kotlin.jvm.functions.Function1
            public final /* synthetic */ Object invoke(Object obj) {
                AFAdRevenueData((AFh1ySDK) obj);
                return Unit.f33298a;
            }
        }));
    }

    @Override // com.appsflyer.internal.AFh1ySDK
    public final void w(@NotNull final AFg1cSDK aFg1cSDK, @NotNull final String str, final boolean z10) {
        Intrinsics.checkNotNullParameter(aFg1cSDK, "");
        Intrinsics.checkNotNullParameter(str, "");
        ((ExecutorService) getCurrencyIso4217Code.getValue()).execute(new a(new Function1<AFh1ySDK, Unit>() { // from class: com.appsflyer.AFLogger.9
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(1);
            }

            public final void getMonetizationNetwork(@NotNull AFh1ySDK aFh1ySDK) {
                Intrinsics.checkNotNullParameter(aFh1ySDK, "");
                aFh1ySDK.w(aFg1cSDK, str, z10);
            }

            @Override // kotlin.jvm.functions.Function1
            public final /* synthetic */ Object invoke(Object obj) {
                getMonetizationNetwork((AFh1ySDK) obj);
                return Unit.f33298a;
            }
        }));
    }

    @ir.c
    public static final void afDebugLog(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "");
        INSTANCE.d(AFg1cSDK.OTHER, str, true);
    }

    @ir.c
    public static final void afInfoLog(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "");
        INSTANCE.i(AFg1cSDK.OTHER, str, true);
    }

    @ir.c
    public static final void afWarnLog(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "");
        AFh1ySDK.w$default(INSTANCE, AFg1cSDK.OTHER, str, false, 4, null);
    }

    @ir.c
    public static final void afErrorLog(String str, Throwable th2) {
        AFLogger aFLogger = INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.OTHER;
        String str2 = (str == null || StringsKt.k0(str)) ? "null" : "null";
        if (th2 == null) {
            th2 = new NullPointerException("Invoked with null Throwable");
        }
        AFh1ySDK.e$default(aFLogger, aFg1cSDK, str2, th2, false, false, false, false, 120, null);
    }

    @ir.c
    public static final void afErrorLogForExcManagerOnly(String str, Throwable th2, boolean z10) {
        AFLogger aFLogger = INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.OTHER;
        String str2 = (str == null || StringsKt.k0(str)) ? "null" : "null";
        if (th2 == null) {
            th2 = new NullPointerException("Invoked with null Throwable");
        }
        AFh1ySDK.e$default(aFLogger, aFg1cSDK, str2, th2, false, false, !z10, false, 64, null);
    }

    @ir.c
    public static final void afErrorLog(String str, Throwable th2, boolean z10) {
        AFLogger aFLogger = INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.OTHER;
        String str2 = (str == null || StringsKt.k0(str)) ? "null" : "null";
        if (th2 == null) {
            th2 = new NullPointerException("Invoked with null Throwable");
        }
        AFh1ySDK.e$default(aFLogger, aFg1cSDK, str2, th2, false, z10, false, false, 104, null);
    }

    @ir.c
    public static final void afErrorLog(String str, Throwable th2, boolean z10, boolean z11) {
        AFLogger aFLogger = INSTANCE;
        AFg1cSDK aFg1cSDK = AFg1cSDK.OTHER;
        String str2 = (str == null || StringsKt.k0(str)) ? "null" : "null";
        if (th2 == null) {
            th2 = new NullPointerException("Invoked with null Throwable");
        }
        AFh1ySDK.e$default(aFLogger, aFg1cSDK, str2, th2, false, z10, z11, false, 72, null);
    }
}
