package r8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements d {

    /* renamed from: a  reason: collision with root package name */
    private static e f48277a;

    public static synchronized e b() {
        e eVar;
        synchronized (e.class) {
            try {
                if (f48277a == null) {
                    f48277a = new e();
                }
                eVar = f48277a;
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
