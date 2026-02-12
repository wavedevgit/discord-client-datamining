package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private static ce f44244a;

    private ce() {
    }

    public static synchronized ce a() {
        ce ceVar;
        synchronized (ce.class) {
            try {
                if (f44244a == null) {
                    f44244a = new ce();
                }
                ceVar = f44244a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return ceVar;
    }
}
