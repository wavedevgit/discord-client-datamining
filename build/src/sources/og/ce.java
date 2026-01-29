package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private static ce f42821a;

    private ce() {
    }

    public static synchronized ce a() {
        ce ceVar;
        synchronized (ce.class) {
            try {
                if (f42821a == null) {
                    f42821a = new ce();
                }
                ceVar = f42821a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return ceVar;
    }
}
