package m8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements b {

    /* renamed from: a  reason: collision with root package name */
    private static c f36152a;

    private c() {
    }

    public static synchronized c b() {
        c cVar;
        synchronized (c.class) {
            try {
                if (f36152a == null) {
                    f36152a = new c();
                }
                cVar = f36152a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return cVar;
    }

    @Override // m8.b
    public void a(a aVar) {
    }
}
