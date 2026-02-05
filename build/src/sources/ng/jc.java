package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jc {

    /* renamed from: a  reason: collision with root package name */
    private static jc f40731a;

    private jc() {
    }

    public static synchronized jc a() {
        jc jcVar;
        synchronized (jc.class) {
            try {
                if (f40731a == null) {
                    f40731a = new jc();
                }
                jcVar = f40731a;
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
