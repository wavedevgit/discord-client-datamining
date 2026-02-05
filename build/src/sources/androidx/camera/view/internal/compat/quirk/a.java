package androidx.camera.view.internal.compat.quirk;

import a0.a2;
import a0.d2;
import a0.y1;
import a0.z1;
import androidx.core.util.Consumer;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static volatile d2 f2236a;

    static {
        a2.b().c(c0.a.a(), new Consumer() { // from class: r0.a
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                androidx.camera.view.internal.compat.quirk.a.a((z1) obj);
            }
        });
    }

    public static /* synthetic */ void a(z1 z1Var) {
        f2236a = new d2(b.a(z1Var));
        y0.a("DeviceQuirks", "view DeviceQuirks = " + d2.d(f2236a));
    }

    public static y1 b(Class cls) {
        return f2236a.b(cls);
    }
}
