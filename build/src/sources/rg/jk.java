package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jk {

    /* renamed from: a  reason: collision with root package name */
    private static jk f48469a;

    private jk() {
    }

    public static synchronized jk a() {
        jk jkVar;
        synchronized (jk.class) {
            try {
                if (f48469a == null) {
                    f48469a = new jk();
                }
                jkVar = f48469a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jkVar;
    }
}
