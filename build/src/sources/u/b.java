package u;

import a0.d2;
import androidx.camera.camera2.internal.compat.quirk.CrashWhenTakingPhotoWithAutoFlashAEModeQuirk;
import androidx.camera.camera2.internal.compat.quirk.ImageCaptureFailWithAutoFlashQuirk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f50303a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f50304b;

    public b(d2 d2Var) {
        boolean z10;
        this.f50303a = d2Var.a(ImageCaptureFailWithAutoFlashQuirk.class);
        if (androidx.camera.camera2.internal.compat.quirk.b.b(CrashWhenTakingPhotoWithAutoFlashAEModeQuirk.class) != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f50304b = z10;
    }

    public int a(int i10) {
        if ((this.f50303a || this.f50304b) && i10 == 2) {
            return 1;
        }
        return i10;
    }
}
