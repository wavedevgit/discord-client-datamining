package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class jk {

    /* renamed from: a  reason: collision with root package name */
    private static jk f46924a;

    private jk() {
    }

    public static synchronized jk a() {
        jk jkVar;
        synchronized (jk.class) {
            try {
                if (f46924a == null) {
                    f46924a = new jk();
                }
                jkVar = f46924a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return jkVar;
    }
}
