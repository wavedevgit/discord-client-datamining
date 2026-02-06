package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jk {

    /* renamed from: a  reason: collision with root package name */
    private static jk f47303a;

    private jk() {
    }

    public static synchronized jk a() {
        jk jkVar;
        synchronized (jk.class) {
            try {
                if (f47303a == null) {
                    f47303a = new jk();
                }
                jkVar = f47303a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jkVar;
    }
}
