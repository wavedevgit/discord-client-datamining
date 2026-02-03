package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jk {

    /* renamed from: a  reason: collision with root package name */
    private static jk f45585a;

    private jk() {
    }

    public static synchronized jk a() {
        jk jkVar;
        synchronized (jk.class) {
            try {
                if (f45585a == null) {
                    f45585a = new jk();
                }
                jkVar = f45585a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jkVar;
    }
}
