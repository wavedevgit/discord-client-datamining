package com.discord.crash_reporting;

import android.content.Context;
import android.os.Build;
import androidx.annotation.Keep;
import com.discord.client_info.ClientInfo;
import com.discord.crash_reporting.CrashPersistence;
import com.discord.lifecycle.ActivityResumedTracker;
import com.discord.lifecycle.AppLifecycle;
import com.discord.lifecycle.ForegroundServiceStartGuard;
import com.discord.logging.Log;
import com.discord.tti_manager.TTIModule;
import com.facebook.jni.annotations.DoNotStrip;
import com.facebook.react.modules.appstate.AppStateModule;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import io.sentry.Breadcrumb;
import io.sentry.Hint;
import io.sentry.IScope;
import io.sentry.SentryEvent;
import io.sentry.SentryLevel;
import io.sentry.android.core.SentryAndroidOptions;
import io.sentry.android.core.k2;
import io.sentry.b4;
import io.sentry.b5;
import io.sentry.k7;
import io.sentry.protocol.SentryStackFrame;
import io.sentry.protocol.b0;
import io.sentry.protocol.s;
import io.sentry.protocol.x;
import io.sentry.util.q;
import java.io.File;
import java.lang.reflect.Field;
import java.net.ConnectException;
import java.net.SocketException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.security.cert.CertPathValidatorException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLHandshakeException;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KClass;
import kotlin.text.Charsets;
import kotlin.text.StringsKt;
import or.p;
import or.v;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u009e\u0001\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0010\u0003\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\b\b\n\u0002\u0010\t\n\u0002\b\b\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0012\bÆ\u0002\u0018\u00002\u00020\u0001:\u0002\\]B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0012J\b\u0010\u0013\u001a\u00020\u0005H\u0002J\u0016\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u0016\u001a\u00020\u0017J\u0018\u0010\u0018\u001a\u00020\u00192\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u001a\u001a\u00020\u0019H\u0002J\u0018\u0010\u001b\u001a\u00020\u00152\u0006\u0010\u0011\u001a\u00020\u00122\u0006\u0010\u001a\u001a\u00020\u0019H\u0002J\u0012\u0010\u001c\u001a\u0004\u0018\u00010\u00172\u0006\u0010\u001a\u001a\u00020\u0019H\u0002J\u0012\u0010\u001d\u001a\u0004\u0018\u00010\u00172\u0006\u0010\u001a\u001a\u00020\u0019H\u0002J\u001c\u0010\u001e\u001a\u0004\u0018\u00010\u001f2\u0006\u0010 \u001a\u00020\u001f2\b\u0010!\u001a\u0004\u0018\u00010\"H\u0002J\u0018\u0010#\u001a\u00020\u00152\u0006\u0010$\u001a\u00020\u000e2\b\b\u0002\u0010%\u001a\u00020\u0005J \u0010&\u001a\u00020\u00152\u0006\u0010'\u001a\u00020\u00172\u0006\u0010(\u001a\u00020\u00172\b\b\u0002\u0010)\u001a\u00020*J\u001a\u0010&\u001a\u00020\u00152\u0006\u0010'\u001a\u00020\u00172\n\u0010+\u001a\u00060,j\u0002`-J\u000e\u0010.\u001a\u00020/2\u0006\u00100\u001a\u000201J\u0010\u00102\u001a\u00020\u00152\u0006\u00103\u001a\u000204H\u0007JF\u00105\u001a\u00020\u00152\u0006\u00106\u001a\u00020\u00172\u0014\b\u0002\u00107\u001a\u000e\u0012\u0004\u0012\u00020\u0017\u0012\u0004\u0012\u00020\u0001082\n\b\u0002\u00109\u001a\u0004\u0018\u00010\u00172\n\b\u0002\u00100\u001a\u0004\u0018\u0001012\b\b\u0002\u0010:\u001a\u00020\u0005J\u0016\u0010;\u001a\u00020\u00152\u0006\u0010<\u001a\u00020\u00172\u0006\u0010\u0004\u001a\u00020\u0017J\b\u0010=\u001a\u00020\u0015H\u0002JH\u0010>\u001a\u00020\u00152\u0006\u0010<\u001a\u00020\u00172\b\u0010(\u001a\u0004\u0018\u00010\u00172\u0014\u0010?\u001a\u0010\u0012\u0004\u0012\u00020\u0017\u0012\u0006\u0012\u0004\u0018\u00010\u0001082\u0006\u0010@\u001a\u00020A2\u000e\b\u0002\u0010B\u001a\b\u0012\u0004\u0012\u00020\u00170\fH\u0002J\u0018\u0010H\u001a\u00020A2\u0006\u0010\u001a\u001a\u00020\u00192\u0006\u0010I\u001a\u00020JH\u0002J/\u0010K\u001a\u00020L2\u0006\u0010M\u001a\u00020A2\u0006\u0010N\u001a\u00020A2\u0006\u0010O\u001a\u00020L2\b\u0010P\u001a\u0004\u0018\u00010AH\u0002¢\u0006\u0002\u0010QJ)\u0010R\u001a\u0004\u0018\u00010A2\b\u0010S\u001a\u0004\u0018\u00010A2\u0006\u0010T\u001a\u00020A2\u0006\u0010U\u001a\u00020LH\u0002¢\u0006\u0002\u0010VJ \u0010W\u001a\u00020\u00192\u0006\u0010\u001a\u001a\u00020\u00192\u0006\u0010!\u001a\u00020\"2\u0006\u0010I\u001a\u00020JH\u0002R$\u0010\u0006\u001a\u0004\u0018\u00010\u00052\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005@BX\u0086\u000e¢\u0006\n\n\u0002\u0010\b\u001a\u0004\b\u0006\u0010\u0007R\u000e\u0010\t\u001a\u00020\nX\u0082\u000e¢\u0006\u0002\n\u0000R\u001c\u0010\u000b\u001a\u0010\u0012\f\u0012\n\u0012\u0006\b\u0001\u0012\u00020\u000e0\r0\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u001b\u0010C\u001a\u00020A8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\bF\u0010G\u001a\u0004\bD\u0010ER\u000e\u0010X\u001a\u00020\u0017X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010Y\u001a\u00020\u0017X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010Z\u001a\u00020\u0017X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010[\u001a\u00020LX\u0082T¢\u0006\u0002\n\u0000¨\u0006^"}, d2 = {"Lcom/discord/crash_reporting/CrashReporting;", "", "<init>", "()V", "value", "", "isCrashedLastRun", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "crashReportingInitialized", "Ljava/util/concurrent/CountDownLatch;", "ignoreNetworkExceptionList", "", "Lkotlin/reflect/KClass;", "", "getSampleRate", "", "context", "Landroid/content/Context;", "isDisabled", "init", "", "releaseName", "", "handleBeforeSend", "Lio/sentry/SentryEvent;", "event", "persistLastCrashInfo", "getErrorMessage", "getErrorStack", "handleBeforeBreadcrumb", "Lio/sentry/Breadcrumb;", "breadcrumb", "hint", "Lio/sentry/Hint;", "captureException", "throwable", "ignoreNetworkExceptions", "captureMessage", "tag", "message", "errorLevel", "Lcom/discord/crash_reporting/CrashReporting$ErrorLevel;", "exception", "Ljava/lang/Exception;", "Lkotlin/Exception;", "breadcrumbLevelToSentryLevel", "Lio/sentry/SentryLevel;", "level", "Lcom/discord/crash_reporting/CrashReporting$BreadcrumbLevel;", "addBreadcrumbBatchBinary", "buffer", "Ljava/nio/ByteBuffer;", "addBreadcrumb", "breadcrumbMessage", "breadcrumbData", "", "breadcrumbCategory", "log", "setTag", "key", "waitOrFail", "appendBreadcrumbToTelemetryRing", "data", "timestampMs", "", "channels", "maxEventSizeBytes", "getMaxEventSizeBytes", "()J", "maxEventSizeBytes$delegate", "Lkotlin/Lazy;", "getEventSize", "options", "Lio/sentry/android/core/SentryAndroidOptions;", "calculateBatchSize", "", "currentSize", "maxSizeBytes", "remainingBreadcrumbs", "avgBreadcrumbSize", "(JJILjava/lang/Long;)I", "computeAverageBreadcrumbSize", "previousEstimate", "sizeReduction", "removedCount", "(Ljava/lang/Long;JI)Ljava/lang/Long;", "incrementallyRemoveBreadcrumbs", "TAG_BUILD_NUMBER", "TAG_APP_VERSION", "TAG_EVENT_ORIGIN", "MAX_BREADCRUMBS", "BreadcrumbLevel", "ErrorLevel", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCrashReporting.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CrashReporting.kt\ncom/discord/crash_reporting/CrashReporting\n+ 2 _Maps.kt\nkotlin/collections/MapsKt___MapsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,740:1\n216#2,2:741\n216#2,2:743\n216#2,2:745\n1#3:747\n*S KotlinDebug\n*F\n+ 1 CrashReporting.kt\ncom/discord/crash_reporting/CrashReporting\n*L\n191#1:741,2\n324#1:743,2\n484#1:745,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CrashReporting {
    private static final int MAX_BREADCRUMBS = 5000;
    @NotNull
    private static final String TAG_APP_VERSION = "appVersion";
    @NotNull
    private static final String TAG_BUILD_NUMBER = "buildNumber";
    @NotNull
    private static final String TAG_EVENT_ORIGIN = "event.origin";
    private static Boolean isCrashedLastRun;
    @NotNull
    public static final CrashReporting INSTANCE = new CrashReporting();
    @NotNull
    private static CountDownLatch crashReportingInitialized = new CountDownLatch(1);
    @NotNull
    private static final List<KClass> ignoreNetworkExceptionList = CollectionsKt.o(Reflection.getOrCreateKotlinClass(UnknownHostException.class), Reflection.getOrCreateKotlinClass(SocketTimeoutException.class), Reflection.getOrCreateKotlinClass(SocketException.class), Reflection.getOrCreateKotlinClass(ConnectException.class), Reflection.getOrCreateKotlinClass(SSLException.class), Reflection.getOrCreateKotlinClass(CertPathValidatorException.class), Reflection.getOrCreateKotlinClass(SSLHandshakeException.class));
    @NotNull
    private static final Lazy maxEventSizeBytes$delegate = or.l.a(new Function0() { // from class: com.discord.crash_reporting.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            long maxEventSizeBytes_delegate$lambda$19;
            maxEventSizeBytes_delegate$lambda$19 = CrashReporting.maxEventSizeBytes_delegate$lambda$19();
            return Long.valueOf(maxEventSizeBytes_delegate$lambda$19);
        }
    });

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/crash_reporting/CrashReporting$BreadcrumbLevel;", "", "<init>", "(Ljava/lang/String;I)V", "WARNING", "ERROR", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class BreadcrumbLevel {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ BreadcrumbLevel[] $VALUES;
        public static final BreadcrumbLevel WARNING = new BreadcrumbLevel("WARNING", 0);
        public static final BreadcrumbLevel ERROR = new BreadcrumbLevel("ERROR", 1);

        private static final /* synthetic */ BreadcrumbLevel[] $values() {
            return new BreadcrumbLevel[]{WARNING, ERROR};
        }

        static {
            BreadcrumbLevel[] $values = $values();
            $VALUES = $values;
            $ENTRIES = vr.a.a($values);
        }

        private BreadcrumbLevel(String str, int i10) {
            super(str, i10);
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static BreadcrumbLevel valueOf(String str) {
            return (BreadcrumbLevel) Enum.valueOf(BreadcrumbLevel.class, str);
        }

        public static BreadcrumbLevel[] values() {
            return (BreadcrumbLevel[]) $VALUES.clone();
        }
    }

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0005\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005¨\u0006\u0006"}, d2 = {"Lcom/discord/crash_reporting/CrashReporting$ErrorLevel;", "", "<init>", "(Ljava/lang/String;I)V", "INFO", "WARNING", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ErrorLevel {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ ErrorLevel[] $VALUES;
        public static final ErrorLevel INFO = new ErrorLevel("INFO", 0);
        public static final ErrorLevel WARNING = new ErrorLevel("WARNING", 1);

        private static final /* synthetic */ ErrorLevel[] $values() {
            return new ErrorLevel[]{INFO, WARNING};
        }

        static {
            ErrorLevel[] $values = $values();
            $VALUES = $values;
            $ENTRIES = vr.a.a($values);
        }

        private ErrorLevel(String str, int i10) {
            super(str, i10);
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static ErrorLevel valueOf(String str) {
            return (ErrorLevel) Enum.valueOf(ErrorLevel.class, str);
        }

        public static ErrorLevel[] values() {
            return (ErrorLevel[]) $VALUES.clone();
        }
    }

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;
        public static final /* synthetic */ int[] $EnumSwitchMapping$1;

        static {
            int[] iArr = new int[ErrorLevel.values().length];
            try {
                iArr[ErrorLevel.INFO.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ErrorLevel.WARNING.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            $EnumSwitchMapping$0 = iArr;
            int[] iArr2 = new int[BreadcrumbLevel.values().length];
            try {
                iArr2[BreadcrumbLevel.WARNING.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr2[BreadcrumbLevel.ERROR.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$1 = iArr2;
        }
    }

    private CrashReporting() {
    }

    public static /* synthetic */ void addBreadcrumb$default(CrashReporting crashReporting, String str, Map map, String str2, BreadcrumbLevel breadcrumbLevel, boolean z10, int i10, Object obj) {
        String str3;
        BreadcrumbLevel breadcrumbLevel2;
        Map map2 = map;
        if ((i10 & 2) != 0) {
            map2 = o0.i();
        }
        Map map3 = map2;
        if ((i10 & 4) != 0) {
            str3 = null;
        } else {
            str3 = str2;
        }
        if ((i10 & 8) != 0) {
            breadcrumbLevel2 = null;
        } else {
            breadcrumbLevel2 = breadcrumbLevel;
        }
        if ((i10 & 16) != 0) {
            z10 = true;
        }
        crashReporting.addBreadcrumb(str, map3, str3, breadcrumbLevel2, z10);
    }

    private final void appendBreadcrumbToTelemetryRing(String str, String str2, Map<String, ? extends Object> map, long j10, List<String> list) {
        try {
            TelemetryRing.INSTANCE.append(str, j10, str2, map, list);
        } catch (Throwable th2) {
            Log.INSTANCE.w("SentryBreadcrumb", "Failed to append breadcrumb to TelemetryRing", th2);
        }
    }

    static /* synthetic */ void appendBreadcrumbToTelemetryRing$default(CrashReporting crashReporting, String str, String str2, Map map, long j10, List list, int i10, Object obj) {
        List list2 = list;
        if ((i10 & 16) != 0) {
            list2 = CollectionsKt.e("SENTRY");
        }
        crashReporting.appendBreadcrumbToTelemetryRing(str, str2, map, j10, list2);
    }

    private final int calculateBatchSize(long j10, long j11, int i10, Long l10) {
        double d10;
        long j12 = j10 - j11;
        double d11 = j12 / j11;
        double d12 = i10;
        int d13 = kotlin.ranges.d.d((int) (d12 * 0.5d), 1);
        if (l10 != null && l10.longValue() > 0) {
            return kotlin.ranges.d.m((int) (j12 / l10.longValue()), 1, d13);
        }
        if (d11 > 0.5d) {
            d10 = 0.3d;
        } else if (d11 > 0.2d) {
            d10 = 0.15d;
        } else if (d11 > 0.1d) {
            d10 = 0.08d;
        } else if (d11 > 0.05d) {
            d10 = 0.03d;
        } else {
            d10 = 0.0d;
        }
        return kotlin.ranges.d.m((int) (d12 * d10), 1, d13);
    }

    public static /* synthetic */ void captureException$default(CrashReporting crashReporting, Throwable th2, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        crashReporting.captureException(th2, z10);
    }

    public static /* synthetic */ void captureMessage$default(CrashReporting crashReporting, String str, String str2, ErrorLevel errorLevel, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            errorLevel = ErrorLevel.INFO;
        }
        crashReporting.captureMessage(str, str2, errorLevel);
    }

    public static final void captureMessage$lambda$12(String str, String str2, ErrorLevel errorLevel, IScope sentryScope) {
        SentryLevel sentryLevel;
        Intrinsics.checkNotNullParameter(sentryScope, "sentryScope");
        sentryScope.v(CollectionsKt.e(str));
        int i10 = WhenMappings.$EnumSwitchMapping$0[errorLevel.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                sentryLevel = SentryLevel.WARNING;
            } else {
                throw new p();
            }
        } else {
            sentryLevel = SentryLevel.INFO;
        }
        b5.n(str2, sentryLevel);
    }

    private final Long computeAverageBreadcrumbSize(Long l10, long j10, int i10) {
        if (j10 > 0 && i10 > 0) {
            long j11 = j10 / i10;
            if (l10 == null) {
                return Long.valueOf(j11);
            }
            return Long.valueOf((long) ((l10.longValue() * 0.7d) + (j11 * 0.3d)));
        }
        return l10;
    }

    private final String getErrorMessage(SentryEvent sentryEvent) {
        s sVar;
        String str;
        String str2;
        List r02 = sentryEvent.r0();
        if (r02 != null) {
            sVar = (s) CollectionsKt.firstOrNull(r02);
        } else {
            sVar = null;
        }
        if (sVar != null) {
            str = sVar.k();
        } else {
            str = null;
        }
        if (sVar != null) {
            str2 = sVar.l();
        } else {
            str2 = null;
        }
        if (str != null && str2 != null) {
            return str + ": " + str2;
        } else if (str == null) {
            if (str2 == null) {
                io.sentry.protocol.m u02 = sentryEvent.u0();
                if (u02 == null) {
                    return null;
                }
                return u02.d();
            }
            return str2;
        } else {
            return str;
        }
    }

    private final String getErrorStack(SentryEvent sentryEvent) {
        s sVar;
        b0 i10;
        List d10;
        List r02 = sentryEvent.r0();
        if (r02 == null || (sVar = (s) CollectionsKt.firstOrNull(r02)) == null || (i10 = sVar.i()) == null || (d10 = i10.d()) == null || d10.isEmpty()) {
            return null;
        }
        return CollectionsKt.x0(d10, ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE, null, null, 0, null, new Function1() { // from class: com.discord.crash_reporting.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence errorStack$lambda$10;
                errorStack$lambda$10 = CrashReporting.getErrorStack$lambda$10((SentryStackFrame) obj);
                return errorStack$lambda$10;
            }
        }, 30, null);
    }

    public static final CharSequence getErrorStack$lambda$10(SentryStackFrame frame) {
        Integer num;
        Integer num2 = -1;
        Intrinsics.checkNotNullParameter(frame, "frame");
        StringBuilder sb2 = new StringBuilder();
        String w10 = frame.w();
        if (w10 != null) {
            sb2.append(w10);
        }
        if (frame.y() != null) {
            num = frame.y();
        } else if (frame.v() != null) {
            num = num2;
        } else {
            num = null;
        }
        if (frame.v() != null) {
            num2 = frame.v();
        } else if (num == null) {
            num2 = null;
        }
        if (num != null) {
            int intValue = num.intValue();
            if (sb2.length() > 0) {
                sb2.append(':');
            }
            sb2.append(intValue);
            if (num2 != null) {
                int intValue2 = num2.intValue();
                sb2.append(':');
                sb2.append(intValue2);
            }
        }
        String x10 = frame.x();
        if (x10 != null) {
            sb2.append(" (");
            sb2.append(x10);
            sb2.append(')');
        }
        return sb2.toString();
    }

    private final long getEventSize(SentryEvent sentryEvent, SentryAndroidOptions sentryAndroidOptions) {
        return q.b(sentryAndroidOptions.getSerializer(), sentryAndroidOptions.getLogger(), sentryEvent);
    }

    private final long getMaxEventSizeBytes() {
        return ((Number) maxEventSizeBytes$delegate.getValue()).longValue();
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:75:0x003a, code lost:
        if (r12.equals("lifecycle") == false) goto L44;
     */
    /* JADX WARN: Code restructure failed: missing block: B:82:0x004f, code lost:
        if (r12.equals("app.lifecycle") == false) goto L44;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final io.sentry.Breadcrumb handleBeforeBreadcrumb(io.sentry.Breadcrumb r11, io.sentry.Hint r12) {
        /*
            r10 = this;
            java.lang.String r12 = r11.m()
            if (r12 == 0) goto Lea
            java.lang.String r0 = "analytics"
            boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r12, r0)
            if (r0 == 0) goto L10
            goto Lea
        L10:
            int r0 = r12.hashCode()
            r1 = 0
            java.lang.String r2 = "app_lifecycle"
            switch(r0) {
                case -2019959078: goto L5e;
                case -2001083134: goto L52;
                case -1265025059: goto L49;
                case -1202793518: goto L3d;
                case -302323862: goto L34;
                case 336786742: goto L28;
                case 1764434064: goto L1b;
                default: goto L1a;
            }
        L1a:
            goto L66
        L1b:
            java.lang.String r0 = "ui.lifecycle"
            boolean r12 = r12.equals(r0)
            if (r12 != 0) goto L24
            goto L66
        L24:
            java.lang.String r2 = "ui_lifecycle"
        L26:
            r4 = r2
            goto L6b
        L28:
            java.lang.String r0 = "react.softexception"
            boolean r12 = r12.equals(r0)
            if (r12 != 0) goto L31
            goto L66
        L31:
            java.lang.String r2 = "react_soft_exception"
            goto L26
        L34:
            java.lang.String r0 = "lifecycle"
            boolean r12 = r12.equals(r0)
            if (r12 != 0) goto L26
            goto L66
        L3d:
            java.lang.String r0 = "ForegroundService"
            boolean r12 = r12.equals(r0)
            if (r12 != 0) goto L46
            goto L66
        L46:
            java.lang.String r2 = "foreground_service"
            goto L26
        L49:
            java.lang.String r0 = "app.lifecycle"
            boolean r12 = r12.equals(r0)
            if (r12 != 0) goto L26
            goto L66
        L52:
            java.lang.String r0 = "device.event"
            boolean r12 = r12.equals(r0)
            if (r12 != 0) goto L5b
            goto L66
        L5b:
            java.lang.String r2 = "device_event"
            goto L26
        L5e:
            java.lang.String r0 = "network.event"
            boolean r12 = r12.equals(r0)
            if (r12 != 0) goto L68
        L66:
            r4 = r1
            goto L6b
        L68:
            java.lang.String r2 = "network_capabilities_changed"
            goto L26
        L6b:
            if (r4 == 0) goto Lea
            java.util.LinkedHashMap r6 = new java.util.LinkedHashMap
            r6.<init>()
            java.lang.String r12 = "type"
            java.lang.String r0 = r11.u()
            r6.put(r12, r0)
            io.sentry.SentryLevel r12 = r11.q()
            if (r12 == 0) goto L92
            java.lang.String r12 = r12.name()
            if (r12 == 0) goto L92
            java.util.Locale r0 = java.util.Locale.ROOT
            java.lang.String r1 = r12.toLowerCase(r0)
            java.lang.String r12 = "toLowerCase(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r12)
        L92:
            java.lang.String r12 = "level"
            r6.put(r12, r1)
            java.lang.String r12 = "message"
            java.lang.String r0 = r11.r()
            r6.put(r12, r0)
            java.util.Map r12 = r11.p()
            java.lang.String r0 = "getData(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r12, r0)
            java.util.Set r12 = r12.entrySet()
            java.util.Iterator r12 = r12.iterator()
        Lb1:
            boolean r0 = r12.hasNext()
            if (r0 == 0) goto Lcb
            java.lang.Object r0 = r12.next()
            java.util.Map$Entry r0 = (java.util.Map.Entry) r0
            java.lang.Object r1 = r0.getKey()
            java.lang.String r1 = (java.lang.String) r1
            java.lang.Object r0 = r0.getValue()
            r6.put(r1, r0)
            goto Lb1
        Lcb:
            java.lang.String r5 = r11.r()
            java.util.Date r12 = r11.t()
            if (r12 == 0) goto Ldb
            long r0 = r12.getTime()
        Ld9:
            r7 = r0
            goto Le0
        Ldb:
            long r0 = java.lang.System.currentTimeMillis()
            goto Ld9
        Le0:
            java.lang.String r12 = "ZOOMED"
            java.util.List r9 = kotlin.collections.CollectionsKt.e(r12)
            r3 = r10
            r3.appendBreadcrumbToTelemetryRing(r4, r5, r6, r7, r9)
        Lea:
            return r11
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.crash_reporting.CrashReporting.handleBeforeBreadcrumb(io.sentry.Breadcrumb, io.sentry.Hint):io.sentry.Breadcrumb");
    }

    private final SentryEvent handleBeforeSend(Context context, SentryEvent sentryEvent) {
        boolean z10;
        String str;
        String str2;
        s sVar;
        SentryLevel t02 = sentryEvent.t0();
        Map N = sentryEvent.N();
        if (N == null || ((String) N.get(TAG_EVENT_ORIGIN)) == null) {
            sentryEvent.I();
        }
        List r02 = sentryEvent.r0();
        if (r02 != null && (sVar = (s) CollectionsKt.firstOrNull(r02)) != null) {
            sVar.k();
        }
        if (t02 != null && t02 != SentryLevel.FATAL && t02 != SentryLevel.ERROR) {
            z10 = false;
        } else {
            z10 = true;
        }
        try {
            if (AppLifecycle.INSTANCE.isForegrounded()) {
                str = "foreground";
            } else {
                str = AppStateModule.APP_STATE_BACKGROUND;
            }
            sentryEvent.f0("app_process_lifecycle", str);
            ActivityResumedTracker.Snapshot snapshot = ActivityResumedTracker.INSTANCE.snapshot();
            String lowerCase = snapshot.getState().name().toLowerCase(Locale.ROOT);
            Intrinsics.checkNotNullExpressionValue(lowerCase, "toLowerCase(...)");
            sentryEvent.f0("app_activity_lifecycle", lowerCase);
            sentryEvent.Y("app_activity_last_paused_at_elapsed_realtime_ms", Long.valueOf(snapshot.getLastPausedAtElapsedRealtime()));
            TTIModule.Companion companion = TTIModule.Companion;
            sentryEvent.f0("app_launch_scenario", companion.getLaunchScenario());
            sentryEvent.Y("app_launch_was_service_started_before_activity", Boolean.valueOf(companion.getWasServiceStartedBeforeActivity()));
            sentryEvent.Y("app_launch_was_broadcast_receiver_started_before_activity", Boolean.valueOf(companion.getWasBroadcastReceiverStartedBeforeActivity()));
            sentryEvent.Y("app_launch_was_initialize_complete_when_activity_opened", Boolean.valueOf(companion.getWasInitializeCompleteWhenActivityOpened()));
            sentryEvent.Y("app_launch_was_launched_via_shortcut", Boolean.valueOf(companion.getWasLaunchedViaShortcut()));
            sentryEvent.Y("app_launch_activities_before_main_count", Integer.valueOf(companion.getActivitiesBeforeMainCount()));
            ForegroundServiceStartGuard.Result evaluate$default = ForegroundServiceStartGuard.evaluate$default(ForegroundServiceStartGuard.INSTANCE, 0L, 1, null);
            if (evaluate$default.getAllowed()) {
                str2 = "allowed";
            } else {
                str2 = "blocked";
            }
            sentryEvent.f0("fgs_guard", str2);
            sentryEvent.f0("fgs_guard_reason", evaluate$default.getReason());
            for (Map.Entry<String, String> entry : evaluate$default.getDiagnostics().entrySet()) {
                sentryEvent.Y("fgs_guard_" + entry.getKey(), entry.getValue());
            }
        } catch (Throwable unused) {
        }
        if (z10) {
            persistLastCrashInfo(context, sentryEvent);
        }
        return sentryEvent;
    }

    /* JADX WARN: Code restructure failed: missing block: B:53:0x0010, code lost:
        if (r13 == null) goto L5;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final io.sentry.SentryEvent incrementallyRemoveBreadcrumbs(io.sentry.SentryEvent r12, io.sentry.Hint r13, io.sentry.android.core.SentryAndroidOptions r14) {
        /*
            r11 = this;
            long r4 = r11.getMaxEventSizeBytes()
            java.util.List r13 = r12.B()     // Catch: java.lang.Throwable -> L7f
            if (r13 == 0) goto L18
            java.util.Collection r13 = (java.util.Collection) r13     // Catch: java.lang.Throwable -> L13
            java.util.List r13 = kotlin.collections.CollectionsKt.j1(r13)     // Catch: java.lang.Throwable -> L13
            if (r13 != 0) goto L1d
            goto L18
        L13:
            r0 = move-exception
            r13 = r0
            r1 = r11
            goto Lc5
        L18:
            java.util.ArrayList r13 = new java.util.ArrayList     // Catch: java.lang.Throwable -> L7f
            r13.<init>()     // Catch: java.lang.Throwable -> L7f
        L1d:
            int r0 = r13.size()     // Catch: java.lang.Throwable -> L7f
            long r1 = r11.getEventSize(r12, r14)     // Catch: java.lang.Throwable -> L7f
            int r3 = (r1 > r4 ? 1 : (r1 == r4 ? 0 : -1))
            if (r3 > 0) goto L2c
            r1 = r11
            goto Lc4
        L2c:
            io.sentry.ILogger r3 = r14.getLogger()     // Catch: java.lang.Throwable -> L7f
            io.sentry.SentryLevel r6 = io.sentry.SentryLevel.INFO     // Catch: java.lang.Throwable -> L7f
            java.lang.String r7 = "Event %s exceeds %d bytes limit. Incrementally removing breadcrumbs."
            io.sentry.protocol.x r8 = r12.G()     // Catch: java.lang.Throwable -> L7f
            java.lang.Long r9 = java.lang.Long.valueOf(r4)     // Catch: java.lang.Throwable -> L7f
            java.lang.Object[] r8 = new java.lang.Object[]{r8, r9}     // Catch: java.lang.Throwable -> L7f
            r3.c(r6, r7, r8)     // Catch: java.lang.Throwable -> L7f
            r3 = 0
            r7 = r3
            r2 = r1
        L46:
            r1 = r13
            java.util.Collection r1 = (java.util.Collection) r1     // Catch: java.lang.Throwable -> L7f
            boolean r1 = r1.isEmpty()     // Catch: java.lang.Throwable -> L7f
            if (r1 != 0) goto L82
            int r1 = (r2 > r4 ? 1 : (r2 == r4 ? 0 : -1))
            if (r1 <= 0) goto L82
            int r6 = r13.size()     // Catch: java.lang.Throwable -> L7f
            r1 = r11
            int r6 = r1.calculateBatchSize(r2, r4, r6, r7)     // Catch: java.lang.Throwable -> L7c
            int r8 = r13.size()     // Catch: java.lang.Throwable -> L7c
            int r6 = java.lang.Math.min(r6, r8)     // Catch: java.lang.Throwable -> L7c
            if (r6 <= 0) goto L83
            r8 = 0
            java.util.List r8 = r13.subList(r8, r6)     // Catch: java.lang.Throwable -> L7c
            r8.clear()     // Catch: java.lang.Throwable -> L7c
            r12.T(r13)     // Catch: java.lang.Throwable -> L7c
            long r8 = r11.getEventSize(r12, r14)     // Catch: java.lang.Throwable -> L7c
            long r2 = r2 - r8
            java.lang.Long r7 = r11.computeAverageBreadcrumbSize(r7, r2, r6)     // Catch: java.lang.Throwable -> L7c
            r2 = r8
            goto L46
        L7c:
            r0 = move-exception
        L7d:
            r13 = r0
            goto Lc5
        L7f:
            r0 = move-exception
            r1 = r11
            goto L7d
        L82:
            r1 = r11
        L83:
            int r6 = r13.size()     // Catch: java.lang.Throwable -> L7c
            int r0 = r0 - r6
            if (r0 <= 0) goto Lad
            io.sentry.ILogger r6 = r14.getLogger()     // Catch: java.lang.Throwable -> L7c
            io.sentry.SentryLevel r7 = io.sentry.SentryLevel.DEBUG     // Catch: java.lang.Throwable -> L7c
            java.lang.String r8 = "Removed %d breadcrumbs from event %s. Final size: %d bytes, remaining: %d"
            java.lang.Integer r0 = java.lang.Integer.valueOf(r0)     // Catch: java.lang.Throwable -> L7c
            io.sentry.protocol.x r9 = r12.G()     // Catch: java.lang.Throwable -> L7c
            java.lang.Long r10 = java.lang.Long.valueOf(r2)     // Catch: java.lang.Throwable -> L7c
            int r13 = r13.size()     // Catch: java.lang.Throwable -> L7c
            java.lang.Integer r13 = java.lang.Integer.valueOf(r13)     // Catch: java.lang.Throwable -> L7c
            java.lang.Object[] r13 = new java.lang.Object[]{r0, r9, r10, r13}     // Catch: java.lang.Throwable -> L7c
            r6.c(r7, r8, r13)     // Catch: java.lang.Throwable -> L7c
        Lad:
            int r13 = (r2 > r4 ? 1 : (r2 == r4 ? 0 : -1))
            if (r13 <= 0) goto Lc4
            io.sentry.ILogger r13 = r14.getLogger()     // Catch: java.lang.Throwable -> L7c
            io.sentry.SentryLevel r0 = io.sentry.SentryLevel.WARNING     // Catch: java.lang.Throwable -> L7c
            java.lang.String r2 = "Event %s still exceeds size limit after removing all breadcrumbs."
            io.sentry.protocol.x r3 = r12.G()     // Catch: java.lang.Throwable -> L7c
            java.lang.Object[] r3 = new java.lang.Object[]{r3}     // Catch: java.lang.Throwable -> L7c
            r13.c(r0, r2, r3)     // Catch: java.lang.Throwable -> L7c
        Lc4:
            return r12
        Lc5:
            io.sentry.ILogger r14 = r14.getLogger()
            io.sentry.SentryLevel r0 = io.sentry.SentryLevel.ERROR
            io.sentry.protocol.x r2 = r12.G()
            java.lang.Object[] r2 = new java.lang.Object[]{r2}
            java.lang.String r3 = "Error during incremental breadcrumb removal for event %s"
            r14.a(r0, r13, r3, r2)
            return r12
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.crash_reporting.CrashReporting.incrementallyRemoveBreadcrumbs(io.sentry.SentryEvent, io.sentry.Hint, io.sentry.android.core.SentryAndroidOptions):io.sentry.SentryEvent");
    }

    public static final void init$lambda$3(String str, String str2, final Context context, double d10, final SentryAndroidOptions options) {
        Intrinsics.checkNotNullParameter(options, "options");
        options.setDsn(str);
        ClientInfo clientInfo = ClientInfo.INSTANCE;
        options.setEnvironment(clientInfo.getReleaseChannel());
        options.setDist(clientInfo.getVersionCode());
        options.setRelease(str2);
        File cacheDir = context.getCacheDir();
        options.setCacheDirPath(cacheDir + "/sentry");
        options.setEnableActivityLifecycleTracingAutoFinish(false);
        options.setEnableAutoActivityLifecycleTracing(false);
        options.setTracesSampleRate(Double.valueOf(0.0d));
        options.setSampleRate(Double.valueOf(d10));
        options.setProguardUuid("a28c18eb-0454-4463-b742-37c3fdceb907");
        options.setTag(TAG_BUILD_NUMBER, clientInfo.getVersionCode());
        options.setTag(TAG_APP_VERSION, clientInfo.getVersionName());
        options.setBeforeSend(new k7.c() { // from class: com.discord.crash_reporting.e
            @Override // io.sentry.k7.c
            public final SentryEvent a(SentryEvent sentryEvent, Hint hint) {
                SentryEvent init$lambda$3$lambda$0;
                init$lambda$3$lambda$0 = CrashReporting.init$lambda$3$lambda$0(context, sentryEvent, hint);
                return init$lambda$3$lambda$0;
            }
        });
        options.setMaxBreadcrumbs(MAX_BREADCRUMBS);
        options.setEnableEventSizeLimiting(true);
        options.setOnOversizedEvent(new k7.j() { // from class: com.discord.crash_reporting.f
            @Override // io.sentry.k7.j
            public final SentryEvent a(SentryEvent sentryEvent, Hint hint) {
                SentryEvent init$lambda$3$lambda$1;
                init$lambda$3$lambda$1 = CrashReporting.init$lambda$3$lambda$1(SentryAndroidOptions.this, sentryEvent, hint);
                return init$lambda$3$lambda$1;
            }
        });
        options.setEnableAppLifecycleBreadcrumbs(true);
        options.setEnableActivityLifecycleBreadcrumbs(true);
        options.setEnableSystemEventBreadcrumbs(true);
        options.setEnableAppComponentBreadcrumbs(true);
        options.setEnableUserInteractionBreadcrumbs(true);
        options.setBeforeBreadcrumb(new k7.a() { // from class: com.discord.crash_reporting.g
            @Override // io.sentry.k7.a
            public final Breadcrumb a(Breadcrumb breadcrumb, Hint hint) {
                Breadcrumb init$lambda$3$lambda$2;
                init$lambda$3$lambda$2 = CrashReporting.init$lambda$3$lambda$2(breadcrumb, hint);
                return init$lambda$3$lambda$2;
            }
        });
    }

    public static final SentryEvent init$lambda$3$lambda$0(Context context, SentryEvent event, Hint hint) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(hint, "<unused var>");
        return INSTANCE.handleBeforeSend(context, event);
    }

    public static final SentryEvent init$lambda$3$lambda$1(SentryAndroidOptions sentryAndroidOptions, SentryEvent event, Hint hint) {
        Intrinsics.checkNotNullParameter(event, "event");
        Intrinsics.checkNotNullParameter(hint, "hint");
        return INSTANCE.incrementallyRemoveBreadcrumbs(event, hint, sentryAndroidOptions);
    }

    public static final Breadcrumb init$lambda$3$lambda$2(Breadcrumb breadcrumb, Hint hint) {
        Intrinsics.checkNotNullParameter(breadcrumb, "breadcrumb");
        Intrinsics.checkNotNullParameter(hint, "hint");
        return INSTANCE.handleBeforeBreadcrumb(breadcrumb, hint);
    }

    private final boolean isDisabled() {
        if (ClientInfo.INSTANCE.isProdBuild()) {
            String DEVICE = Build.DEVICE;
            Intrinsics.checkNotNullExpressionValue(DEVICE, "DEVICE");
            if (StringsKt.V(DEVICE, "vivo", false, 2, null)) {
                return true;
            }
        }
        return false;
    }

    public static final long maxEventSizeBytes_delegate$lambda$19() {
        try {
            Field declaredField = io.sentry.util.g.class.getDeclaredField("MAX_EVENT_SIZE_BYTES");
            Intrinsics.checkNotNullExpressionValue(declaredField, "getDeclaredField(...)");
            declaredField.setAccessible(true);
            return declaredField.getLong(null);
        } catch (Exception unused) {
            return 1048576L;
        }
    }

    private final void persistLastCrashInfo(Context context, SentryEvent sentryEvent) {
        String xVar;
        String str;
        boolean z10;
        String I;
        boolean z11;
        long currentTimeMillis;
        String str2;
        s sVar;
        try {
            x G = sentryEvent.G();
            if (G != null && (xVar = G.toString()) != null) {
                String errorMessage = getErrorMessage(sentryEvent);
                String errorStack = getErrorStack(sentryEvent);
                List r02 = sentryEvent.r0();
                if (r02 != null && (sVar = (s) CollectionsKt.firstOrNull(r02)) != null) {
                    str = sVar.k();
                } else {
                    str = null;
                }
                if (str != null && StringsKt.V(str, "JavascriptException", false, 2, null)) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Map N = sentryEvent.N();
                if (N == null || (I = (String) N.get(TAG_EVENT_ORIGIN)) == null) {
                    I = sentryEvent.I();
                }
                if (z10) {
                    I = "javascript";
                }
                if (!z10 && !Intrinsics.areEqual(I, "javascript")) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                Date x02 = sentryEvent.x0();
                if (x02 != null) {
                    currentTimeMillis = x02.getTime();
                } else {
                    currentTimeMillis = System.currentTimeMillis();
                }
                SentryLevel t02 = sentryEvent.t0();
                if (t02 != null) {
                    str2 = t02.name();
                } else {
                    str2 = null;
                }
                CrashPersistence.Companion.getInstance(context).setLastCrashInfo(new CrashPersistence.LastCrashInfo(xVar, currentTimeMillis, I, z11, errorMessage, errorStack, str2));
            }
        } catch (Throwable th2) {
            Log.INSTANCE.e("SentryBreadcrumb", "Failed to persist last crash info", th2);
        }
    }

    private final void waitOrFail() {
        if (crashReportingInitialized.await(15000L, TimeUnit.MILLISECONDS)) {
            return;
        }
        throw new IllegalStateException("CrashReporting not initialized within timeout. Did you forget to call init() earlier (or did it fail)?");
    }

    public final void addBreadcrumb(@NotNull String breadcrumbMessage, @NotNull Map<String, ? extends Object> breadcrumbData, String str, BreadcrumbLevel breadcrumbLevel, boolean z10) {
        Intrinsics.checkNotNullParameter(breadcrumbMessage, "breadcrumbMessage");
        Intrinsics.checkNotNullParameter(breadcrumbData, "breadcrumbData");
        Breadcrumb breadcrumb = new Breadcrumb(breadcrumbMessage);
        for (Map.Entry<String, ? extends Object> entry : breadcrumbData.entrySet()) {
            breadcrumb.A(entry.getKey(), entry.getValue());
        }
        breadcrumb.z(str);
        if (breadcrumbLevel != null) {
            breadcrumb.B(INSTANCE.breadcrumbLevelToSentryLevel(breadcrumbLevel));
        }
        if (z10) {
            Log.i$default(Log.INSTANCE, "SentryBreadcrumb", breadcrumbMessage, (Throwable) null, 4, (Object) null);
        }
        b5.h(breadcrumb);
        appendBreadcrumbToTelemetryRing$default(this, breadcrumbMessage, breadcrumbMessage, breadcrumbData, System.currentTimeMillis(), null, 16, null);
    }

    @DoNotStrip
    @Keep
    public final void addBreadcrumbBatchBinary(@NotNull ByteBuffer buffer) {
        boolean z10;
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        try {
            buffer.order(ByteOrder.BIG_ENDIAN);
            int i10 = buffer.getInt();
            for (int i11 = 0; i11 < i10; i11++) {
                int i12 = buffer.getInt();
                String str = "GLOG Batch [" + i12 + " entries] @ " + buffer.getLong() + " - " + buffer.getLong();
                ArrayList arrayList = new ArrayList();
                for (int i13 = 0; i13 < i12; i13++) {
                    byte[] bArr = new byte[buffer.getShort() & 65535];
                    buffer.get(bArr);
                    Charset charset = Charsets.UTF_8;
                    String str2 = new String(bArr, charset);
                    byte[] bArr2 = new byte[buffer.getShort() & 65535];
                    buffer.get(bArr2);
                    String str3 = new String(bArr2, charset);
                    if (buffer.get() != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    long j10 = buffer.getLong();
                    appendBreadcrumbToTelemetryRing$default(INSTANCE, str2, str2, o0.m(v.a("loc", str3), v.a("main", Boolean.valueOf(z10))), j10, null, 16, null);
                    arrayList.add(o0.m(v.a("msg", str2), v.a("loc", str3), v.a("main", Boolean.valueOf(z10)), v.a("ts", Long.valueOf(j10))));
                }
                Breadcrumb breadcrumb = new Breadcrumb();
                breadcrumb.C(str);
                breadcrumb.A("count", Integer.valueOf(i12));
                breadcrumb.A("entries", arrayList);
                b5.h(breadcrumb);
            }
        } catch (Exception e10) {
            Log.INSTANCE.e("CrashReporting", "Failed to parse breadcrumb buffer", e10);
        }
    }

    @NotNull
    public final SentryLevel breadcrumbLevelToSentryLevel(@NotNull BreadcrumbLevel level) {
        Intrinsics.checkNotNullParameter(level, "level");
        int i10 = WhenMappings.$EnumSwitchMapping$1[level.ordinal()];
        if (i10 != 1) {
            if (i10 == 2) {
                return SentryLevel.ERROR;
            }
            throw new p();
        }
        return SentryLevel.WARNING;
    }

    public final void captureException(@NotNull Throwable throwable, boolean z10) {
        Intrinsics.checkNotNullParameter(throwable, "throwable");
        Log.e$default(Log.INSTANCE, "SentryBreadcrumb", or.e.b(throwable), (Throwable) null, 4, (Object) null);
        if (!z10) {
            b5.l(throwable);
        } else if (!ignoreNetworkExceptionList.contains(Reflection.getOrCreateKotlinClass(throwable.getClass()))) {
            b5.l(throwable);
        }
    }

    public final void captureMessage(@NotNull final String tag, @NotNull final String message, @NotNull final ErrorLevel errorLevel) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(errorLevel, "errorLevel");
        int i10 = WhenMappings.$EnumSwitchMapping$0[errorLevel.ordinal()];
        if (i10 == 1) {
            Log.i$default(Log.INSTANCE, tag, message, (Throwable) null, 4, (Object) null);
        } else if (i10 == 2) {
            Log.w$default(Log.INSTANCE, tag, message, (Throwable) null, 4, (Object) null);
        } else {
            throw new p();
        }
        b5.T(new b4() { // from class: com.discord.crash_reporting.b
            @Override // io.sentry.b4
            public final void a(IScope iScope) {
                CrashReporting.captureMessage$lambda$12(tag, message, errorLevel, iScope);
            }
        });
    }

    public final double getSampleRate(@NotNull Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        if (!CrashPersistence.Companion.getInstance(context).isStaff() && ClientInfo.INSTANCE.isProdBuild()) {
            return 0.05d;
        }
        return 1.0d;
    }

    public final void init(@NotNull final Context context, @NotNull final String releaseName) {
        String str;
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(releaseName, "releaseName");
        if (isDisabled()) {
            crashReportingInitialized.countDown();
            return;
        }
        ClientInfo clientInfo = ClientInfo.INSTANCE;
        if (!clientInfo.isDebugBuild() && !clientInfo.isDeveloperBuild()) {
            if (CrashPersistence.Companion.getInstance(context).isStaff()) {
                str = "https://90509cba01573ee4e14a2f5e15aee5ca@o64374.ingest.sentry.io/5992375";
            } else if (!clientInfo.isProdBuild()) {
                str = "https://9a42ef460144a03b30c8b2d5321cfe11@o64374.ingest.sentry.io/5992375";
            } else {
                str = "https://70545531dfe34835bf4dd0996821e8b6@o64374.ingest.sentry.io/5992375";
            }
        } else {
            str = "";
        }
        final String str2 = str;
        final double sampleRate = getSampleRate(context);
        k2.g(context, new b5.a() { // from class: com.discord.crash_reporting.c
            @Override // io.sentry.b5.a
            public final void a(k7 k7Var) {
                CrashReporting.init$lambda$3(str2, releaseName, context, sampleRate, (SentryAndroidOptions) k7Var);
            }
        });
        isCrashedLastRun = b5.H();
        NativeCrashReporting.Companion.initNative(clientInfo.isProdBuild());
        crashReportingInitialized.countDown();
    }

    public final Boolean isCrashedLastRun() {
        return isCrashedLastRun;
    }

    public final void setTag(@NotNull String key, @NotNull String value) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(value, "value");
        waitOrFail();
        if (isDisabled()) {
            return;
        }
        b5.P(key, value);
    }

    public final void captureMessage(@NotNull String tag, @NotNull Exception exception) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(exception, "exception");
        String message = exception.getMessage();
        if (message == null) {
            message = "";
        }
        captureMessage$default(this, tag, message, null, 4, null);
    }
}
