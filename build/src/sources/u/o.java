package u;

import a0.d2;
import androidx.camera.camera2.internal.compat.quirk.AutoFlashUnderExposedQuirk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f51088a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f51089b = false;

    public o(d2 d2Var) {
        this.f51088a = d2Var.b(AutoFlashUnderExposedQuirk.class) != null;
    }

    public void a() {
        this.f51089b = false;
    }

    public void b() {
        this.f51089b = true;
    }

    public boolean c(int i10) {
        if (this.f51089b && i10 == 0 && this.f51088a) {
            return true;
        }
        return false;
    }
}
