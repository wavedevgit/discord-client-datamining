package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ik {

    /* renamed from: a  reason: collision with root package name */
    private static hk f45419a;

    public static synchronized xj a(oj ojVar) {
        xj xjVar;
        synchronized (ik.class) {
            try {
                if (f45419a == null) {
                    f45419a = new hk(null);
                }
                xjVar = (xj) f45419a.b(ojVar);
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
