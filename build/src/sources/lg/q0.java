package lg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q0 {

    /* renamed from: a  reason: collision with root package name */
    private static p0 f36859a;

    public static synchronized i0 a(e0 e0Var) {
        i0 i0Var;
        synchronized (q0.class) {
            try {
                if (f36859a == null) {
                    f36859a = new p0(null);
                }
                i0Var = (i0) f36859a.b(e0Var);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return i0Var;
    }

    public static synchronized i0 b(String str) {
        i0 a10;
        synchronized (q0.class) {
            a10 = a(e0.d("common").c());
        }
        return a10;
    }
}
