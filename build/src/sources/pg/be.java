package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class be {

    /* renamed from: a  reason: collision with root package name */
    private static ae f43962a;

    public static synchronized qd a(gd gdVar) {
        qd qdVar;
        synchronized (be.class) {
            try {
                if (f43962a == null) {
                    f43962a = new ae(null);
                }
                qdVar = (qd) f43962a.b(gdVar);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return qdVar;
    }

    public static synchronized qd b(String str) {
        qd a10;
        synchronized (be.class) {
            a10 = a(gd.d(str).c());
        }
        return a10;
    }
}
