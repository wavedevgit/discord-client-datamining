package u;

import a0.o2;
import android.util.Size;
import androidx.camera.camera2.internal.compat.quirk.ExtraCroppingQuirk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l {

    /* renamed from: a  reason: collision with root package name */
    private final ExtraCroppingQuirk f49971a;

    public l() {
        this((ExtraCroppingQuirk) androidx.camera.camera2.internal.compat.quirk.b.b(ExtraCroppingQuirk.class));
    }

    public Size a(Size size) {
        Size c10;
        ExtraCroppingQuirk extraCroppingQuirk = this.f49971a;
        if (extraCroppingQuirk == null || (c10 = extraCroppingQuirk.c(o2.b.PRIV)) == null) {
            return size;
        }
        if (c10.getWidth() * c10.getHeight() > size.getWidth() * size.getHeight()) {
            return c10;
        }
        return size;
    }

    l(ExtraCroppingQuirk extraCroppingQuirk) {
        this.f49971a = extraCroppingQuirk;
    }
}
