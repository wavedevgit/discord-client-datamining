package gf;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.HandlerThread;
import android.os.Looper;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f26912a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static int f26913b = 9;

    /* renamed from: c  reason: collision with root package name */
    private static n1 f26914c = null;

    /* renamed from: d  reason: collision with root package name */
    static HandlerThread f26915d = null;

    /* renamed from: e  reason: collision with root package name */
    private static Executor f26916e = null;

    /* renamed from: f  reason: collision with root package name */
    private static boolean f26917f = false;

    public static h a(Context context) {
        Looper mainLooper;
        synchronized (f26912a) {
            try {
                if (f26914c == null) {
                    Context applicationContext = context.getApplicationContext();
                    if (f26917f) {
                        mainLooper = b().getLooper();
                    } else {
                        mainLooper = context.getMainLooper();
                    }
                    f26914c = new n1(applicationContext, mainLooper, f26916e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f26914c;
    }

    public static HandlerThread b() {
        synchronized (f26912a) {
            try {
                HandlerThread handlerThread = f26915d;
                if (handlerThread != null) {
                    return handlerThread;
                }
                HandlerThread handlerThread2 = new HandlerThread("GoogleApiHandler", f26913b);
                f26915d = handlerThread2;
                handlerThread2.start();
                return f26915d;
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract com.google.android.gms.common.b c(j1 j1Var, ServiceConnection serviceConnection, String str, Executor executor);

    protected abstract void d(j1 j1Var, ServiceConnection serviceConnection, String str);

    public final void e(String str, String str2, int i10, ServiceConnection serviceConnection, String str3, boolean z10) {
        d(new j1(str, str2, 4225, z10), serviceConnection, str3);
    }
}
