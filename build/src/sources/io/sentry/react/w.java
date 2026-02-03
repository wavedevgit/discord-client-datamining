package io.sentry.react;

import android.os.Handler;
import android.os.Looper;
import android.view.Choreographer;
import com.facebook.react.bridge.Promise;
import io.sentry.k5;
import java.util.LinkedHashMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class w {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f30568a = new a(51, 0.75f, true);

    /* renamed from: b  reason: collision with root package name */
    private static String f30569b = null;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends LinkedHashMap {
        a(int i10, float f10, boolean z10) {
            super(i10, f10, z10);
        }

        @Override // java.util.LinkedHashMap
        protected boolean removeEldestEntry(Map.Entry entry) {
            if (size() > 50) {
                return true;
            }
            return false;
        }
    }

    public static /* synthetic */ void a(final k5 k5Var, final Promise promise) {
        try {
            Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() { // from class: io.sentry.react.v
                @Override // android.view.Choreographer.FrameCallback
                public final void doFrame(long j10) {
                    k5 k5Var2 = k5.this;
                    promise.resolve(Double.valueOf(k5Var2.now().h() / 1.0E9d));
                }
            });
        } catch (Exception e10) {
            promise.reject("Failed to receive the instance of Choreographer", e10);
        }
    }

    public static void c(final Promise promise, final k5 k5Var) {
        Looper mainLooper = Looper.getMainLooper();
        if (mainLooper == null) {
            promise.reject("GetTimeToDisplay is not able to measure the time to display: Main looper not available.");
        } else {
            new Handler(mainLooper).post(new Runnable() { // from class: io.sentry.react.u
                @Override // java.lang.Runnable
                public final void run() {
                    w.a(k5.this, promise);
                }
            });
        }
    }

    public static Double d(String str) {
        return (Double) f30568a.remove(str);
    }

    public static void e(String str, Double d10) {
        f30568a.put(str, d10);
    }

    public static void f(Double d10) {
        if (f30569b != null) {
            e("ttid-navigation-" + f30569b, d10);
        }
    }

    public static void g(String str) {
        f30569b = str;
    }
}
