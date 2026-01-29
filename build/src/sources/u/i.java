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
    private final boolean f49952a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f49953b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f49954c;

    public i(d2 d2Var, d2 d2Var2) {
        this.f49952a = d2Var2.a(TextureViewIsClosedQuirk.class);
        this.f49953b = d2Var.a(PreviewOrientationIncorrectQuirk.class);
        this.f49954c = d2Var.a(ConfigureSurfaceToSecondarySessionFailQuirk.class);
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
        if (!this.f49952a && !this.f49953b && !this.f49954c) {
            return false;
        }
        return true;
    }
}
