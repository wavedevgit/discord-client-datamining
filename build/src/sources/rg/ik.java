package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ik {

    /* renamed from: a  reason: collision with root package name */
    private static hk f46758a;

    public static synchronized xj a(oj ojVar) {
        xj xjVar;
        synchronized (ik.class) {
            try {
                if (f46758a == null) {
                    f46758a = new hk(null);
                }
                xjVar = (xj) f46758a.b(ojVar);
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
