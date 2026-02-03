package h9;

import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static a f26844a;

    /* renamed from: h9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0345a {
        void release();
    }

    public static synchronized a b() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f26844a == null) {
                    f26844a = new b();
                }
                aVar = f26844a;
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

    public abstract void a(InterfaceC0345a interfaceC0345a);

    public abstract void d(InterfaceC0345a interfaceC0345a);
}
