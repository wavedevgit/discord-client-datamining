package r8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements d {

    /* renamed from: a  reason: collision with root package name */
    private static e f48059a;

    public static synchronized e b() {
        e eVar;
        synchronized (e.class) {
            try {
                if (f48059a == null) {
                    f48059a = new e();
                }
                eVar = f48059a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return eVar;
    }

    @Override // r8.d
    public void a(c cVar) {
    }
}
