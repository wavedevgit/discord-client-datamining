package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jk {

    /* renamed from: a  reason: collision with root package name */
    private static jk f47351a;

    private jk() {
    }

    public static synchronized jk a() {
        jk jkVar;
        synchronized (jk.class) {
            try {
                if (f47351a == null) {
                    f47351a = new jk();
                }
                jkVar = f47351a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jkVar;
    }
}
