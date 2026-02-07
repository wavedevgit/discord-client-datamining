package i8;

import i8.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements a {

    /* renamed from: a  reason: collision with root package name */
    private static f f26659a;

    private f() {
    }

    public static synchronized f b() {
        f fVar;
        synchronized (f.class) {
            try {
                if (f26659a == null) {
                    f26659a = new f();
                }
                fVar = f26659a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return fVar;
    }

    @Override // i8.a
    public void a(a.EnumC0377a enumC0377a, Class cls, String str, Throwable th2) {
    }
}
