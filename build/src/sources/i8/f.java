package i8;

import i8.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements a {

    /* renamed from: a  reason: collision with root package name */
    private static f f28415a;

    private f() {
    }

    public static synchronized f b() {
        f fVar;
        synchronized (f.class) {
            try {
                if (f28415a == null) {
                    f28415a = new f();
                }
                fVar = f28415a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return fVar;
    }

    @Override // i8.a
    public void a(a.EnumC0372a enumC0372a, Class cls, String str, Throwable th2) {
    }
}
