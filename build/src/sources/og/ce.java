package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private static ce f42671a;

    private ce() {
    }

    public static synchronized ce a() {
        ce ceVar;
        synchronized (ce.class) {
            try {
                if (f42671a == null) {
                    f42671a = new ce();
                }
                ceVar = f42671a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return ceVar;
    }
}
