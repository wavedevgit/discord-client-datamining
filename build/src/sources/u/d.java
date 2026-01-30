package u;

import android.util.Size;
import androidx.camera.camera2.internal.compat.quirk.SmallDisplaySizeQuirk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final SmallDisplaySizeQuirk f49964a = (SmallDisplaySizeQuirk) androidx.camera.camera2.internal.compat.quirk.b.b(SmallDisplaySizeQuirk.class);

    public Size a() {
        SmallDisplaySizeQuirk smallDisplaySizeQuirk = this.f49964a;
        if (smallDisplaySizeQuirk != null) {
            return smallDisplaySizeQuirk.c();
        }
        return null;
    }
}
