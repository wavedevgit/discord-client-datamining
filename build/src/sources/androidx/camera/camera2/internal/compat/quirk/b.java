package androidx.camera.camera2.internal.compat.quirk;

import a0.a2;
import a0.d2;
import a0.y1;
import a0.z1;
import androidx.core.util.Consumer;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static volatile d2 f1926a;

    static {
        a2.b().c(c0.a.a(), new Consumer() { // from class: t.a
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                androidx.camera.camera2.internal.compat.quirk.b.a((z1) obj);
            }
        });
    }

    public static /* synthetic */ void a(z1 z1Var) {
        f1926a = new d2(c.a(z1Var));
        y0.a("DeviceQuirks", "camera2 DeviceQuirks = " + d2.d(f1926a));
    }

    public static y1 b(Class cls) {
        return f1926a.b(cls);
    }

    public static d2 c() {
        return f1926a;
    }
}
