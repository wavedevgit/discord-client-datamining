package com.facebook.react.util;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.uimanager.ViewProps;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import p8.a;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0005\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0010\u0010\u000b\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eH\u0007J\u0010\u0010\u000f\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eH\u0007J\u0010\u0010\u0010\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eH\u0007J\u001a\u0010\u0011\u001a\u00020\f2\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\r\u001a\u00020\u000eH\u0007J\u001a\u0010\u0014\u001a\u00020\f2\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\u0006\u0010\r\u001a\u00020\u000eH\u0007J\u0010\u0010\u0014\u001a\u00020\f2\u0006\u0010\r\u001a\u00020\u000eH\u0007J$\u0010\u0015\u001a\u00020\f2\b\u0010\u0012\u001a\u0004\u0018\u00010\u00132\b\u0010\r\u001a\u0004\u0018\u00010\u000e2\u0006\u0010\u0016\u001a\u00020\u0005H\u0002J\u0010\u0010\u0017\u001a\u00020\u000e2\u0006\u0010\u0016\u001a\u00020\u0005H\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\b\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0005X\u0086T¢\u0006\u0002\n\u0000¨\u0006\u0018"}, d2 = {"Lcom/facebook/react/util/RNLog;", "", "<init>", "()V", "MINIMUM_LEVEL_FOR_UI", "", "LOG", "TRACE", "ADVICE", "WARN", "ERROR", "l", "", "message", "", "t", "a", "w", "context", "Lcom/facebook/react/bridge/ReactContext;", "e", "logInternal", "level", "levelToString", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class RNLog {
    public static final int ADVICE = 4;
    public static final int ERROR = 6;
    @NotNull
    public static final RNLog INSTANCE = new RNLog();
    public static final int LOG = 2;
    public static final int MINIMUM_LEVEL_FOR_UI = 5;
    public static final int TRACE = 3;
    public static final int WARN = 5;

    private RNLog() {
    }

    public static final void a(@NotNull String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        a.J(ReactConstants.TAG, "(ADVICE)" + message);
    }

    public static final void e(ReactContext reactContext, @NotNull String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        INSTANCE.logInternal(reactContext, message, 6);
        a.m(ReactConstants.TAG, message);
    }

    public static final void l(@NotNull String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        a.s(ReactConstants.TAG, message);
    }

    private final String levelToString(int i10) {
        if (i10 != 2 && i10 != 3) {
            if (i10 != 4 && i10 != 5) {
                if (i10 != 6) {
                    return ViewProps.NONE;
                }
                return "error";
            }
            return "warn";
        }
        return "log";
    }

    private final void logInternal(ReactContext reactContext, String str, int i10) {
        if (i10 >= 5 && reactContext != null && reactContext.hasActiveReactInstance() && str != null) {
            ((RCTLog) reactContext.getJSModule(RCTLog.class)).logIfNoNativeHook(levelToString(i10), str);
        }
    }

    public static final void t(@NotNull String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        a.s(ReactConstants.TAG, message);
    }

    public static final void w(ReactContext reactContext, @NotNull String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        INSTANCE.logInternal(reactContext, message, 5);
        a.J(ReactConstants.TAG, message);
    }

    public static final void e(@NotNull String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        a.m(ReactConstants.TAG, message);
    }
}
