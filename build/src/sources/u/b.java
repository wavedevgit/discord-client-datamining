package u;

import a0.d2;
import androidx.camera.camera2.internal.compat.quirk.CrashWhenTakingPhotoWithAutoFlashAEModeQuirk;
import androidx.camera.camera2.internal.compat.quirk.ImageCaptureFailWithAutoFlashQuirk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f51072a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51073b;

    public b(d2 d2Var) {
        boolean z10;
        this.f51072a = d2Var.a(ImageCaptureFailWithAutoFlashQuirk.class);
        if (androidx.camera.camera2.internal.compat.quirk.b.b(CrashWhenTakingPhotoWithAutoFlashAEModeQuirk.class) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f51073b = z10;
    }

    public int a(int i10) {
        if ((this.f51072a || this.f51073b) && i10 == 2) {
            return 1;
        }
        return i10;
    }
}
