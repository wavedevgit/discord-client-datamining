package u;

import a0.d2;
import androidx.camera.camera2.internal.compat.quirk.AutoFlashUnderExposedQuirk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f49960a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f49961b = false;

    public o(d2 d2Var) {
        this.f49960a = d2Var.b(AutoFlashUnderExposedQuirk.class) != null;
    }

    public void a() {
        this.f49961b = false;
    }

    public void b() {
        this.f49961b = true;
    }

    public boolean c(int i10) {
        if (this.f49961b && i10 == 0 && this.f49960a) {
            return true;
        }
        return false;
    }
}
