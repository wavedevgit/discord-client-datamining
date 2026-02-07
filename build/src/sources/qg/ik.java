package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ik {

    /* renamed from: a  reason: collision with root package name */
    private static hk f47185a;

    public static synchronized xj a(oj ojVar) {
        xj xjVar;
        synchronized (ik.class) {
            try {
                if (f47185a == null) {
                    f47185a = new hk(null);
                }
                xjVar = (xj) f47185a.b(ojVar);
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
