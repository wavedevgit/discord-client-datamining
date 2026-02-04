package u;

import a0.d2;
import a0.r0;
import android.hardware.camera2.CaptureRequest;
import android.util.Range;
import androidx.camera.camera2.internal.compat.quirk.AeFpsRangeLegacyQuirk;
import p.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final Range f50298a;

    public a(d2 d2Var) {
        AeFpsRangeLegacyQuirk aeFpsRangeLegacyQuirk = (AeFpsRangeLegacyQuirk) d2Var.b(AeFpsRangeLegacyQuirk.class);
        if (aeFpsRangeLegacyQuirk == null) {
            this.f50298a = null;
        } else {
            this.f50298a = aeFpsRangeLegacyQuirk.d();
        }
    }

    public void a(a.C0555a c0555a) {
        Range range = this.f50298a;
        if (range != null) {
            c0555a.g(CaptureRequest.CONTROL_AE_TARGET_FPS_RANGE, range, r0.c.REQUIRED);
        }
    }
}
