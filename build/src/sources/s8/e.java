package s8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements d {

    /* renamed from: a  reason: collision with root package name */
    private static e f48435a;

    public static synchronized e b() {
        e eVar;
        synchronized (e.class) {
            try {
                if (f48435a == null) {
                    f48435a = new e();
                }
                eVar = f48435a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return eVar;
    }

    @Override // s8.d
    public void a(c cVar) {
    }
}
