package l8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements b {

    /* renamed from: a  reason: collision with root package name */
    private static c f36505a;

    private c() {
    }

    public static synchronized c b() {
        c cVar;
        synchronized (c.class) {
            try {
                if (f36505a == null) {
                    f36505a = new c();
                }
                cVar = f36505a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return cVar;
    }

    @Override // l8.b
    public void a(a aVar) {
    }
}
