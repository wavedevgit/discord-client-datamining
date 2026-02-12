package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jc {

    /* renamed from: a  reason: collision with root package name */
    private static jc f42150a;

    private jc() {
    }

    public static synchronized jc a() {
        jc jcVar;
        synchronized (jc.class) {
            try {
                if (f42150a == null) {
                    f42150a = new jc();
                }
                jcVar = f42150a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jcVar;
    }

    public static final boolean b() {
        return ic.a("mlkit-dev-profiling");
    }
}
