package u;

import a0.d2;
import androidx.camera.camera2.internal.compat.quirk.AutoFlashUnderExposedQuirk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class o {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f51177a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f51178b = false;

    public o(d2 d2Var) {
        this.f51177a = d2Var.b(AutoFlashUnderExposedQuirk.class) != null;
    }

    public void a() {
        this.f51178b = false;
    }

    public void b() {
        this.f51178b = true;
    }

    public boolean c(int i10) {
        if (this.f51178b && i10 == 0 && this.f51177a) {
            return true;
        }
        return false;
    }
}
