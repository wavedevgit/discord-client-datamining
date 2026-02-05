package h9;

import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static a f25685a;

    /* renamed from: h9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface InterfaceC0347a {
        void release();
    }

    public static synchronized a b() {
        a aVar;
        synchronized (a.class) {
            try {
                if (f25685a == null) {
                    f25685a = new b();
                }
                aVar = f25685a;
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

    public abstract void a(InterfaceC0347a interfaceC0347a);

    public abstract void d(InterfaceC0347a interfaceC0347a);
}
