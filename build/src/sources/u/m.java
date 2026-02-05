package u;

import a0.d2;
import android.graphics.PointF;
import androidx.camera.camera2.internal.compat.quirk.AfRegionFlipHorizontallyQuirk;
import x.b1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class m {

    /* renamed from: a  reason: collision with root package name */
    private final d2 f51084a;

    public m(d2 d2Var) {
        this.f51084a = d2Var;
    }

    public PointF a(b1 b1Var, int i10) {
        if (i10 == 1 && this.f51084a.a(AfRegionFlipHorizontallyQuirk.class)) {
            return new PointF(1.0f - b1Var.c(), b1Var.d());
        }
        return new PointF(b1Var.c(), b1Var.d());
    }
}
