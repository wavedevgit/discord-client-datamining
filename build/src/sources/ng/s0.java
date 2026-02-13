package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class s0 {

    /* renamed from: a  reason: collision with root package name */
    private static s0 f38456a;

    private s0() {
    }

    public static synchronized s0 a() {
        s0 s0Var;
        synchronized (s0.class) {
            try {
                if (f38456a == null) {
                    f38456a = new s0();
                }
                s0Var = f38456a;
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
