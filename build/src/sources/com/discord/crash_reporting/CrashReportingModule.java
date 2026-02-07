package com.discord.crash_reporting;

import com.discord.crash_reporting.CrashPersistence;
import com.discord.crash_reporting.CrashReporting;
import com.discord.crash_reporting.system_logs.HistoricalProcessExitReason;
import com.discord.crash_reporting.system_logs.SystemLogReport;
import com.discord.crash_reporting.system_logs.SystemLogUtils;
import com.discord.logging.Log;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import io.sentry.react.NativeRNSentrySpec;
import io.sentry.react.RNSentryModule;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
import qr.v;
@Metadata(d1 = {"\u0000[\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002*\u0001\u0012\u0018\u0000 )2\u00020\u0001:\u0001)B\u000f\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0004\b\u0004\u0010\u0005J\b\u0010\u0010\u001a\u00020\rH\u0016J\b\u0010\u0014\u001a\u00020\u0015H\u0016J\b\u0010\u0016\u001a\u00020\u0015H\u0007J\u0010\u0010\u0017\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u0019H\u0007J\u0010\u0010\u001a\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u0019H\u0007J\u0010\u0010\u001b\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u0019H\u0007J\u0012\u0010\u001c\u001a\u00020\u00152\b\u0010\u001d\u001a\u0004\u0018\u00010\rH\u0007J\u0010\u0010\u001e\u001a\u00020\u00152\u0006\u0010\u0018\u001a\u00020\u0019H\u0007J\u0010\u0010\u001f\u001a\u00020\u00152\u0006\u0010 \u001a\u00020!H\u0007J\b\u0010\"\u001a\u00020\u0015H\u0007J\u001a\u0010#\u001a\u00020$2\u0006\u0010%\u001a\u00020&2\b\u0010'\u001a\u0004\u0018\u00010(H\u0002R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0014\u0010\b\u001a\u00020\t8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\n\u0010\u000bR\u0010\u0010\f\u001a\u0004\u0018\u00010\rX\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0010\u0010\u0011\u001a\u00020\u0012X\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u0013¨\u0006*"}, d2 = {"Lcom/discord/crash_reporting/CrashReportingModule;", "Lcom/facebook/react/bridge/ReactContextBaseJavaModule;", "reactContext", "Lcom/facebook/react/bridge/ReactApplicationContext;", "<init>", "(Lcom/facebook/react/bridge/ReactApplicationContext;)V", "getReactContext", "()Lcom/facebook/react/bridge/ReactApplicationContext;", "sentryModule", "Lio/sentry/react/RNSentryModule;", "getSentryModule", "()Lio/sentry/react/RNSentryModule;", "pendingCrashEventId", "", "pendingCrashLock", "", "getName", "reactSoftExceptionListener", "com/discord/crash_reporting/CrashReportingModule$reactSoftExceptionListener$1", "Lcom/discord/crash_reporting/CrashReportingModule$reactSoftExceptionListener$1;", "invalidate", "", "initializeManager", "getSystemLog", "callback", "Lcom/facebook/react/bridge/Callback;", "getDidCrashDuringPreviousExecution", "getLastCrashReport", "markCrashHandled", "eventId", "getIsUserStaffForCrashReporting", "setUser", "user", "Lcom/facebook/react/bridge/ReadableMap;", "crash", "buildCrashReportMap", "Lcom/facebook/react/bridge/WritableMap;", "info", "Lcom/discord/crash_reporting/CrashPersistence$LastCrashInfo;", "diagnostics", "Lcom/discord/crash_reporting/system_logs/SystemLogReport$NativeCrashDiagnostics;", "Companion", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CrashReportingModule extends ReactContextBaseJavaModule {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final String TAG = "CrashReportingModule";
    private volatile String pendingCrashEventId;
    @NotNull
    private final Object pendingCrashLock;
    @NotNull
    private final ReactApplicationContext reactContext;
    @NotNull
    private final CrashReportingModule$reactSoftExceptionListener$1 reactSoftExceptionListener;

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0006"}, d2 = {"Lcom/discord/crash_reporting/CrashReportingModule$Companion;", "", "<init>", "()V", "TAG", "", "crash_reporting_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Type inference failed for: r2v2, types: [com.discord.crash_reporting.CrashReportingModule$reactSoftExceptionListener$1] */
    public CrashReportingModule(@NotNull ReactApplicationContext reactContext) {
        super(reactContext);
        Intrinsics.checkNotNullParameter(reactContext, "reactContext");
        this.reactContext = reactContext;
        this.pendingCrashLock = new Object();
        this.reactSoftExceptionListener = new ReactSoftExceptionLogger.ReactSoftExceptionListener() { // from class: com.discord.crash_reporting.CrashReportingModule$reactSoftExceptionListener$1
            @Override // com.facebook.react.bridge.ReactSoftExceptionLogger.ReactSoftExceptionListener
            public void logSoftException(String category, Throwable cause) {
                Intrinsics.checkNotNullParameter(category, "category");
                Intrinsics.checkNotNullParameter(cause, "cause");
                CrashReporting crashReporting = CrashReporting.INSTANCE;
                String str = "SoftException: " + category;
                String message = cause.getMessage();
                if (message == null) {
                    message = "No message";
                }
                CrashReporting.addBreadcrumb$default(crashReporting, str, o0.m(v.a("message", message), v.a("stacktrace", qr.e.b(cause))), "react.softexception", CrashReporting.BreadcrumbLevel.ERROR, false, 16, null);
                Log.INSTANCE.e(category, "Unhandled SoftException", cause);
            }
        };
    }

    private final WritableMap buildCrashReportMap(CrashPersistence.LastCrashInfo lastCrashInfo, SystemLogReport.NativeCrashDiagnostics nativeCrashDiagnostics) {
        SystemLogUtils.Tombstone tombstone;
        HistoricalProcessExitReason.Reason exitReason;
        WritableMap createMap = Arguments.createMap();
        createMap.putString("event_id", lastCrashInfo.getEventId());
        createMap.putDouble("timestamp", lastCrashInfo.getTimestampMs());
        createMap.putString("origin", lastCrashInfo.getOrigin());
        createMap.putString("level", lastCrashInfo.getLevel());
        createMap.putBoolean("is_native", lastCrashInfo.isNative());
        createMap.putString("error_message", lastCrashInfo.getErrorMessage());
        createMap.putString("error_stack", lastCrashInfo.getErrorStack());
        if (nativeCrashDiagnostics != null && (exitReason = nativeCrashDiagnostics.getExitReason()) != null) {
            createMap.putString("exit_reason", exitReason.getReason());
            createMap.putString("exit_description", exitReason.getDescription());
        }
        if (nativeCrashDiagnostics != null && (tombstone = nativeCrashDiagnostics.getTombstone()) != null) {
            if (kotlin.ranges.d.q(new IntRange(0, 1000), kotlin.random.c.f32146d) == 0 && !StringsKt.k0(tombstone.getText())) {
                createMap.putString("tombstone", StringsKt.x1(tombstone.getText(), 6291456));
            }
            createMap.putString("tombstone_cause", tombstone.getCause());
            createMap.putString("tombstone_hash", tombstone.getGroupHash());
            createMap.putString("tombstone_group_by", tombstone.getGroupBy());
            createMap.putString("tombstone_origin", tombstone.getOrigin());
        }
        Intrinsics.checkNotNullExpressionValue(createMap, "apply(...)");
        return createMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit getLastCrashReport$lambda$2(CrashReportingModule crashReportingModule, CrashPersistence.LastCrashInfo lastCrashInfo, Callback callback, SystemLogReport.NativeCrashDiagnostics diagnostics) {
        Intrinsics.checkNotNullParameter(diagnostics, "diagnostics");
        callback.invoke(crashReportingModule.buildCrashReportMap(lastCrashInfo, diagnostics));
        return Unit.f32056a;
    }

    private final RNSentryModule getSentryModule() {
        NativeModule nativeModule = getReactApplicationContext().getCatalystInstance().getNativeModule(NativeRNSentrySpec.NAME);
        Intrinsics.checkNotNull(nativeModule, "null cannot be cast to non-null type io.sentry.react.RNSentryModule");
        return (RNSentryModule) nativeModule;
    }

    @ReactMethod
    public final void crash() {
        getSentryModule().crash();
    }

    @ReactMethod
    public final void getDidCrashDuringPreviousExecution(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        Boolean isCrashedLastRun = CrashReporting.INSTANCE.isCrashedLastRun();
        if (isCrashedLastRun != null) {
            callback.invoke(isCrashedLastRun);
        }
    }

    @ReactMethod
    public final void getIsUserStaffForCrashReporting(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        CrashPersistence.Companion companion = CrashPersistence.Companion;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        callback.invoke(Boolean.valueOf(companion.getInstance(reactApplicationContext).isStaff()));
    }

    @ReactMethod
    public final void getLastCrashReport(@NotNull final Callback callback) {
        final CrashPersistence.LastCrashInfo lastCrashInfo;
        Intrinsics.checkNotNullParameter(callback, "callback");
        boolean z10 = false;
        try {
            synchronized (this.pendingCrashLock) {
                if (this.pendingCrashEventId != null) {
                    z10 = true;
                } else {
                    CrashPersistence.Companion companion = CrashPersistence.Companion;
                    ReactApplicationContext reactApplicationContext = getReactApplicationContext();
                    Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
                    lastCrashInfo = companion.getInstance(reactApplicationContext).getLastCrashInfo();
                    if (lastCrashInfo != null) {
                        this.pendingCrashEventId = lastCrashInfo.getEventId();
                    }
                }
                lastCrashInfo = null;
            }
        } catch (Throwable th2) {
            Log.INSTANCE.e(TAG, "Failed to get last crash report", th2);
            lastCrashInfo = null;
        }
        if (lastCrashInfo == null) {
            if (z10) {
                Log.i$default(Log.INSTANCE, TAG, "Crash report already pending; suppressing duplicate request", (Throwable) null, 4, (Object) null);
            }
            callback.invoke(null);
        } else if (lastCrashInfo.isNative()) {
            SystemLogReport systemLogReport = SystemLogReport.INSTANCE;
            ReactApplicationContext reactApplicationContext2 = getReactApplicationContext();
            Intrinsics.checkNotNullExpressionValue(reactApplicationContext2, "getReactApplicationContext(...)");
            systemLogReport.fetchNativeCrashDiagnostics(reactApplicationContext2, new Function1() { // from class: com.discord.crash_reporting.h
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit lastCrashReport$lambda$2;
                    lastCrashReport$lambda$2 = CrashReportingModule.getLastCrashReport$lambda$2(CrashReportingModule.this, lastCrashInfo, callback, (SystemLogReport.NativeCrashDiagnostics) obj);
                    return lastCrashReport$lambda$2;
                }
            });
        } else {
            callback.invoke(buildCrashReportMap(lastCrashInfo, null));
        }
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NotNull
    public String getName() {
        return "CrashReportingManager";
    }

    @NotNull
    public final ReactApplicationContext getReactContext() {
        return this.reactContext;
    }

    @ReactMethod
    public final void getSystemLog(@NotNull Callback callback) {
        Intrinsics.checkNotNullParameter(callback, "callback");
        SystemLogUtils systemLogUtils = SystemLogUtils.INSTANCE;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        callback.invoke(systemLogUtils.fetch(reactApplicationContext));
    }

    @ReactMethod
    public final void initializeManager() {
        SystemLogUtils systemLogUtils = SystemLogUtils.INSTANCE;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        systemLogUtils.initSystemLogCapture(reactApplicationContext);
        ReactSoftExceptionLogger.addListener(this.reactSoftExceptionListener);
        p8.a.x(new FLogDelegate());
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        ReactSoftExceptionLogger.removeListener(this.reactSoftExceptionListener);
    }

    @ReactMethod
    public final void markCrashHandled(String str) {
        if (str != null && !StringsKt.k0(str)) {
            try {
                CrashPersistence.Companion companion = CrashPersistence.Companion;
                ReactApplicationContext reactApplicationContext = getReactApplicationContext();
                Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
                companion.getInstance(reactApplicationContext).markCrashHandled(str);
                synchronized (this.pendingCrashLock) {
                    if (Intrinsics.areEqual(this.pendingCrashEventId, str)) {
                        this.pendingCrashEventId = null;
                    }
                    Unit unit = Unit.f32056a;
                }
            } catch (Throwable th2) {
                Log.INSTANCE.e(TAG, "Failed to mark crash handled", th2);
            }
        }
    }

    @ReactMethod
    public final void setUser(@NotNull ReadableMap user) {
        Intrinsics.checkNotNullParameter(user, "user");
        boolean z10 = user.getBoolean("staff");
        CrashPersistence.Companion companion = CrashPersistence.Companion;
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        Intrinsics.checkNotNullExpressionValue(reactApplicationContext, "getReactApplicationContext(...)");
        companion.getInstance(reactApplicationContext).setStaff(z10);
    }
}
