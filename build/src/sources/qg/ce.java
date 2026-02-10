package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private static ce f45575a;

    private ce() {
    }

    public static synchronized ce a() {
        ce ceVar;
        synchronized (ce.class) {
            try {
                if (f45575a == null) {
                    f45575a = new ce();
                }
                ceVar = f45575a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return ceVar;
    }
}
