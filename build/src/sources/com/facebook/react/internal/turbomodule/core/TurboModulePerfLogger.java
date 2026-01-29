package com.facebook.react.internal.turbomodule.core;

import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.reactperflogger.NativeModulePerfLogger;
import com.facebook.soloader.SoLoader;
import kotlin.Metadata;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u000b\bÁ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001a\u0010\u0006\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u001a\u0010\f\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u001a\u0010\r\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u001a\u0010\u000e\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u001a\u0010\u000f\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u001a\u0010\u0010\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u001a\u0010\u0011\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u001a\u0010\u0012\u001a\u00020\u00072\b\u0010\b\u001a\u0004\u0018\u00010\t2\u0006\u0010\n\u001a\u00020\u000bH\u0007J\u0011\u0010\u0013\u001a\u00020\u00072\u0006\u0010\u0014\u001a\u00020\u0005H\u0083 J\u0010\u0010\u0015\u001a\u00020\u00072\b\u0010\u0014\u001a\u0004\u0018\u00010\u0005R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006\u0016"}, d2 = {"Lcom/facebook/react/internal/turbomodule/core/TurboModulePerfLogger;", "", "<init>", "()V", "nativeModulePerfLogger", "Lcom/facebook/react/reactperflogger/NativeModulePerfLogger;", "moduleCreateStart", "", "moduleName", "", StackTraceHelper.ID_KEY, "", "moduleCreateCacheHit", "moduleCreateConstructStart", "moduleCreateConstructEnd", "moduleCreateSetUpStart", "moduleCreateSetUpEnd", "moduleCreateEnd", "moduleCreateFail", "jniEnableCppLogging", "perfLogger", "enableLogging", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class TurboModulePerfLogger {
    @NotNull
    public static final TurboModulePerfLogger INSTANCE = new TurboModulePerfLogger();
    private static NativeModulePerfLogger nativeModulePerfLogger;

    static {
        SoLoader.t("turbomodulejsijni");
    }

    private TurboModulePerfLogger() {
    }

    @fb.a
    private final native void jniEnableCppLogging(NativeModulePerfLogger nativeModulePerfLogger2);

    public static final void moduleCreateCacheHit(String str, int i10) {
        NativeModulePerfLogger nativeModulePerfLogger2 = nativeModulePerfLogger;
        if (nativeModulePerfLogger2 != null) {
            if (str != null) {
                nativeModulePerfLogger2.moduleCreateCacheHit(str, i10);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public static final void moduleCreateConstructEnd(String str, int i10) {
        NativeModulePerfLogger nativeModulePerfLogger2 = nativeModulePerfLogger;
        if (nativeModulePerfLogger2 != null) {
            if (str != null) {
                nativeModulePerfLogger2.moduleCreateConstructEnd(str, i10);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public static final void moduleCreateConstructStart(String str, int i10) {
        NativeModulePerfLogger nativeModulePerfLogger2 = nativeModulePerfLogger;
        if (nativeModulePerfLogger2 != null) {
            if (str != null) {
                nativeModulePerfLogger2.moduleCreateConstructStart(str, i10);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public static final void moduleCreateEnd(String str, int i10) {
        NativeModulePerfLogger nativeModulePerfLogger2 = nativeModulePerfLogger;
        if (nativeModulePerfLogger2 != null) {
            if (str != null) {
                nativeModulePerfLogger2.moduleCreateEnd(str, i10);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public static final void moduleCreateFail(String str, int i10) {
        NativeModulePerfLogger nativeModulePerfLogger2 = nativeModulePerfLogger;
        if (nativeModulePerfLogger2 != null) {
            if (str != null) {
                nativeModulePerfLogger2.moduleCreateFail(str, i10);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public static final void moduleCreateSetUpEnd(String str, int i10) {
        NativeModulePerfLogger nativeModulePerfLogger2 = nativeModulePerfLogger;
        if (nativeModulePerfLogger2 != null) {
            if (str != null) {
                nativeModulePerfLogger2.moduleCreateSetUpEnd(str, i10);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public static final void moduleCreateSetUpStart(String str, int i10) {
        NativeModulePerfLogger nativeModulePerfLogger2 = nativeModulePerfLogger;
        if (nativeModulePerfLogger2 != null) {
            if (str != null) {
                nativeModulePerfLogger2.moduleCreateSetUpStart(str, i10);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public static final void moduleCreateStart(String str, int i10) {
        NativeModulePerfLogger nativeModulePerfLogger2 = nativeModulePerfLogger;
        if (nativeModulePerfLogger2 != null) {
            if (str != null) {
                nativeModulePerfLogger2.moduleCreateStart(str, i10);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
    }

    public final void enableLogging(NativeModulePerfLogger nativeModulePerfLogger2) {
        if (nativeModulePerfLogger2 != null) {
            nativeModulePerfLogger = nativeModulePerfLogger2;
            jniEnableCppLogging(nativeModulePerfLogger2);
        }
    }
}
