package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class zk {

    /* renamed from: a  reason: collision with root package name */
    private static xk f41752a;

    public static synchronized nk a(fk fkVar) {
        nk nkVar;
        synchronized (zk.class) {
            try {
                if (f41752a == null) {
                    f41752a = new xk(null);
                }
                nkVar = (nk) f41752a.b(fkVar);
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
