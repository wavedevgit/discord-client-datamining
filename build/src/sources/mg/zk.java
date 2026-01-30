package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class zk {

    /* renamed from: a  reason: collision with root package name */
    private static xk f39077a;

    public static synchronized nk a(fk fkVar) {
        nk nkVar;
        synchronized (zk.class) {
            try {
                if (f39077a == null) {
                    f39077a = new xk(null);
                }
                nkVar = (nk) f39077a.b(fkVar);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return nkVar;
    }

    public static synchronized nk b(String str) {
        nk a10;
        synchronized (zk.class) {
            a10 = a(fk.d(str).c());
        }
        return a10;
    }
}
