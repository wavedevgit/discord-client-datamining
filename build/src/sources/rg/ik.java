package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ik {

    /* renamed from: a  reason: collision with root package name */
    private static hk f47326a;

    public static synchronized xj a(oj ojVar) {
        xj xjVar;
        synchronized (ik.class) {
            try {
                if (f47326a == null) {
                    f47326a = new hk(null);
                }
                xjVar = (xj) f47326a.b(ojVar);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return xjVar;
    }

    public static synchronized xj b(String str) {
        xj a10;
        synchronized (ik.class) {
            a10 = a(oj.d(str).c());
        }
        return a10;
    }
}
