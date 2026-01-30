package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private static ce f42837a;

    private ce() {
    }

    public static synchronized ce a() {
        ce ceVar;
        synchronized (ce.class) {
            try {
                if (f42837a == null) {
                    f42837a = new ce();
                }
                ceVar = f42837a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return ceVar;
    }
}
