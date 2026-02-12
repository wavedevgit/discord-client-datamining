package j8;

import j8.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements a {

    /* renamed from: a  reason: collision with root package name */
    private static f f30865a;

    private f() {
    }

    public static synchronized f b() {
        f fVar;
        synchronized (f.class) {
            try {
                if (f30865a == null) {
                    f30865a = new f();
                }
                fVar = f30865a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return fVar;
    }

    @Override // j8.a
    public void a(a.EnumC0418a enumC0418a, Class cls, String str, Throwable th2) {
    }
}
