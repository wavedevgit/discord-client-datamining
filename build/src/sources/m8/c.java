package m8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements b {

    /* renamed from: a  reason: collision with root package name */
    private static c f36720a;

    private c() {
    }

    public static synchronized c b() {
        c cVar;
        synchronized (c.class) {
            try {
                if (f36720a == null) {
                    f36720a = new c();
                }
                cVar = f36720a;
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
