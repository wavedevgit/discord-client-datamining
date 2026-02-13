package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private static ce f44812a;

    private ce() {
    }

    public static synchronized ce a() {
        ce ceVar;
        synchronized (ce.class) {
            try {
                if (f44812a == null) {
                    f44812a = new ce();
                }
                ceVar = f44812a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return ceVar;
    }
}
