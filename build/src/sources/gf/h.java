package gf;

import android.content.Context;
import android.content.ServiceConnection;
import android.os.HandlerThread;
import android.os.Looper;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class h {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f26801a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static int f26802b = 9;

    /* renamed from: c  reason: collision with root package name */
    private static n1 f26803c = null;

    /* renamed from: d  reason: collision with root package name */
    static HandlerThread f26804d = null;

    /* renamed from: e  reason: collision with root package name */
    private static Executor f26805e = null;

    /* renamed from: f  reason: collision with root package name */
    private static boolean f26806f = false;

    public static h a(Context context) {
        Looper mainLooper;
        synchronized (f26801a) {
            try {
                if (f26803c == null) {
                    Context applicationContext = context.getApplicationContext();
                    if (f26806f) {
                        mainLooper = b().getLooper();
                    } else {
                        mainLooper = context.getMainLooper();
                    }
                    f26803c = new n1(applicationContext, mainLooper, f26805e);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return f26803c;
    }

    public static HandlerThread b() {
        synchronized (f26801a) {
            try {
                HandlerThread handlerThread = f26804d;
                if (handlerThread != null) {
                    return handlerThread;
                }
                HandlerThread handlerThread2 = new HandlerThread("GoogleApiHandler", f26802b);
                f26804d = handlerThread2;
                handlerThread2.start();
                return f26804d;
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
