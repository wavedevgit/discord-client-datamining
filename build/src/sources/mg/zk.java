package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class zk {

    /* renamed from: a  reason: collision with root package name */
    private static xk f38854a;

    public static synchronized nk a(fk fkVar) {
        nk nkVar;
        synchronized (zk.class) {
            try {
                if (f38854a == null) {
                    f38854a = new xk(null);
                }
                nkVar = (nk) f38854a.b(fkVar);
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
