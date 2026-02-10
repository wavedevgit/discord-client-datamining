package i9;

import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static a f26675a;

    /* renamed from: i9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0399a {
        void release();
    }

    public static synchronized a b() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f26675a == null) {
                    f26675a = new b();
                }
                aVar = f26675a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return aVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            return true;
        }
        return false;
    }

    public abstract void a(InterfaceC0399a interfaceC0399a);

    public abstract void d(InterfaceC0399a interfaceC0399a);
}
