package hf;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.HandlerThread;
import android.os.Looper;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f27250a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static int f27251b = 9;

    /* renamed from: c  reason: collision with root package name */
    private static k1 f27252c = null;

    /* renamed from: d  reason: collision with root package name */
    static HandlerThread f27253d = null;

    /* renamed from: e  reason: collision with root package name */
    private static Executor f27254e = null;

    /* renamed from: f  reason: collision with root package name */
    private static boolean f27255f = false;

    public static h a(Context context) {
        Looper mainLooper;
        synchronized (f27250a) {
            try {
                if (f27252c == null) {
                    Context applicationContext = context.getApplicationContext();
                    if (f27255f) {
                        mainLooper = b().getLooper();
                    } else {
                        mainLooper = context.getMainLooper();
                    }
                    f27252c = new k1(applicationContext, mainLooper, f27254e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f27252c;
    }

    public static HandlerThread b() {
        synchronized (f27250a) {
            try {
                HandlerThread handlerThread = f27253d;
                if (handlerThread != null) {
                    return handlerThread;
                }
                HandlerThread handlerThread2 = new HandlerThread("GoogleApiHandler", f27251b);
                f27253d = handlerThread2;
                handlerThread2.start();
                return f27253d;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract com.google.android.gms.common.b c(h1 h1Var, ServiceConnection serviceConnection, String str, Executor executor);

    public final void d(String str, String str2, int i10, ServiceConnection serviceConnection, String str3, boolean z10) {
        e(new h1(str, str2, 4225, z10), serviceConnection, str3);
    }

    protected abstract void e(h1 h1Var, ServiceConnection serviceConnection, String str);
}
