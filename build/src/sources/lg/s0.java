package lg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s0 {

    /* renamed from: a  reason: collision with root package name */
    private static s0 f36861a;

    private s0() {
    }

    public static synchronized s0 a() {
        s0 s0Var;
        synchronized (s0.class) {
            try {
                if (f36861a == null) {
                    f36861a = new s0();
                }
                s0Var = f36861a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return s0Var;
    }

    public static void b() {
        r0.a();
    }
}
