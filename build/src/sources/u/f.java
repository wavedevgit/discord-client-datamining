package u;

import androidx.camera.camera2.internal.compat.quirk.ExtraSupportedSurfaceCombinationsQuirk;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    private final ExtraSupportedSurfaceCombinationsQuirk f50306a = (ExtraSupportedSurfaceCombinationsQuirk) androidx.camera.camera2.internal.compat.quirk.b.b(ExtraSupportedSurfaceCombinationsQuirk.class);

    public List a(String str) {
        ExtraSupportedSurfaceCombinationsQuirk extraSupportedSurfaceCombinationsQuirk = this.f50306a;
        if (extraSupportedSurfaceCombinationsQuirk == null) {
            return new ArrayList();
        }
        return extraSupportedSurfaceCombinationsQuirk.e(str);
    }
}
