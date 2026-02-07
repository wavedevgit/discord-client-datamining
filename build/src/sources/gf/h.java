package gf;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.HandlerThread;
import android.os.Looper;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f25120a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static int f25121b = 9;

    /* renamed from: c  reason: collision with root package name */
    private static k1 f25122c = null;

    /* renamed from: d  reason: collision with root package name */
    static HandlerThread f25123d = null;

    /* renamed from: e  reason: collision with root package name */
    private static Executor f25124e = null;

    /* renamed from: f  reason: collision with root package name */
    private static boolean f25125f = false;

    public static h a(Context context) {
        Looper mainLooper;
        synchronized (f25120a) {
            try {
                if (f25122c == null) {
                    Context applicationContext = context.getApplicationContext();
                    if (f25125f) {
                        mainLooper = b().getLooper();
                    } else {
                        mainLooper = context.getMainLooper();
                    }
                    f25122c = new k1(applicationContext, mainLooper, f25124e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f25122c;
    }

    public static HandlerThread b() {
        synchronized (f25120a) {
            try {
                HandlerThread handlerThread = f25123d;
                if (handlerThread != null) {
                    return handlerThread;
                }
                HandlerThread handlerThread2 = new HandlerThread("GoogleApiHandler", f25121b);
                f25123d = handlerThread2;
                handlerThread2.start();
                return f25123d;
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
