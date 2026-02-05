package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jk {

    /* renamed from: a  reason: collision with root package name */
    private static jk f45473a;

    private jk() {
    }

    public static synchronized jk a() {
        jk jkVar;
        synchronized (jk.class) {
            try {
                if (f45473a == null) {
                    f45473a = new jk();
                }
                jkVar = f45473a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jkVar;
    }
}
