package gf;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.HandlerThread;
import android.os.Looper;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f24819a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static int f24820b = 9;

    /* renamed from: c  reason: collision with root package name */
    private static k1 f24821c = null;

    /* renamed from: d  reason: collision with root package name */
    static HandlerThread f24822d = null;

    /* renamed from: e  reason: collision with root package name */
    private static Executor f24823e = null;

    /* renamed from: f  reason: collision with root package name */
    private static boolean f24824f = false;

    public static h a(Context context) {
        Looper mainLooper;
        synchronized (f24819a) {
            try {
                if (f24821c == null) {
                    Context applicationContext = context.getApplicationContext();
                    if (f24824f) {
                        mainLooper = b().getLooper();
                    } else {
                        mainLooper = context.getMainLooper();
                    }
                    f24821c = new k1(applicationContext, mainLooper, f24823e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f24821c;
    }

    public static HandlerThread b() {
        synchronized (f24819a) {
            try {
                HandlerThread handlerThread = f24822d;
                if (handlerThread != null) {
                    return handlerThread;
                }
                HandlerThread handlerThread2 = new HandlerThread("GoogleApiHandler", f24820b);
                f24822d = handlerThread2;
                handlerThread2.start();
                return f24822d;
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
