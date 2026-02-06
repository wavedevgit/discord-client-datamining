package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private static ce f44013a;

    private ce() {
    }

    public static synchronized ce a() {
        ce ceVar;
        synchronized (ce.class) {
            try {
                if (f44013a == null) {
                    f44013a = new ce();
                }
                ceVar = f44013a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return ceVar;
    }
}
