package u;

import a0.d2;
import androidx.camera.camera2.internal.compat.quirk.TorchFlashRequiredFor3aUpdateQuirk;
import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final TorchFlashRequiredFor3aUpdateQuirk f51074a;

    public b0(d2 d2Var) {
        this.f51074a = (TorchFlashRequiredFor3aUpdateQuirk) d2Var.b(TorchFlashRequiredFor3aUpdateQuirk.class);
    }

    public boolean a() {
        boolean z10;
        TorchFlashRequiredFor3aUpdateQuirk torchFlashRequiredFor3aUpdateQuirk = this.f51074a;
        if (torchFlashRequiredFor3aUpdateQuirk != null && torchFlashRequiredFor3aUpdateQuirk.f()) {
            z10 = true;
        } else {
            z10 = false;
        }
        y0.a("UseFlashModeTorchFor3aUpdate", "shouldUseFlashModeTorch: " + z10);
        return z10;
    }
}
