package u;

import a0.d2;
import a0.w0;
import androidx.camera.camera2.internal.compat.quirk.ConfigureSurfaceToSecondarySessionFailQuirk;
import androidx.camera.camera2.internal.compat.quirk.PreviewOrientationIncorrectQuirk;
import androidx.camera.camera2.internal.compat.quirk.TextureViewIsClosedQuirk;
import java.util.Iterator;
import java.util.List;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class i {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f51139a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51140b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51141c;

    public i(d2 d2Var, d2 d2Var2) {
        this.f51139a = d2Var2.a(TextureViewIsClosedQuirk.class);
        this.f51140b = d2Var.a(PreviewOrientationIncorrectQuirk.class);
        this.f51141c = d2Var.a(ConfigureSurfaceToSecondarySessionFailQuirk.class);
    }

    public void a(List list) {
        if (b() && list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                ((w0) it.next()).d();
            }
            y0.a("ForceCloseDeferrableSurface", "deferrableSurface closed");
        }
    }

    public boolean b() {
        if (!this.f51139a && !this.f51140b && !this.f51141c) {
            return false;
        }
        return true;
    }
}
