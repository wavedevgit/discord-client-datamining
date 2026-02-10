package u;

import a0.d2;
import androidx.camera.camera2.internal.compat.quirk.AutoFlashUnderExposedQuirk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f50326a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f50327b = false;

    public o(d2 d2Var) {
        this.f50326a = d2Var.b(AutoFlashUnderExposedQuirk.class) != null;
    }

    public void a() {
        this.f50327b = false;
    }

    public void b() {
        this.f50327b = true;
    }

    public boolean c(int i10) {
        if (this.f50327b && i10 == 0 && this.f50326a) {
            return true;
        }
        return false;
    }
}
