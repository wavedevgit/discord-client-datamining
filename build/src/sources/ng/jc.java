package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jc {

    /* renamed from: a  reason: collision with root package name */
    private static jc f41369a;

    private jc() {
    }

    public static synchronized jc a() {
        jc jcVar;
        synchronized (jc.class) {
            try {
                if (f41369a == null) {
                    f41369a = new jc();
                }
                jcVar = f41369a;
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
