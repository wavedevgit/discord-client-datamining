package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jk {

    /* renamed from: a  reason: collision with root package name */
    private static jk f45495a;

    private jk() {
    }

    public static synchronized jk a() {
        jk jkVar;
        synchronized (jk.class) {
            try {
                if (f45495a == null) {
                    f45495a = new jk();
                }
                jkVar = f45495a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jkVar;
    }
}
