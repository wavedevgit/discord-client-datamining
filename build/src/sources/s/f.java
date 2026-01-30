package s;

import android.hardware.camera2.CameraCharacteristics;
import android.hardware.camera2.params.DynamicRangeProfiles;
import android.os.Build;
import java.util.Set;
import r.a0;
import x.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final a f48670a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        DynamicRangeProfiles a();

        Set b(z zVar);

        Set c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(a aVar) {
        this.f48670a = aVar;
    }

    public static f a(a0 a0Var) {
        f fVar;
        CameraCharacteristics.Key key;
        if (Build.VERSION.SDK_INT >= 33) {
            key = CameraCharacteristics.REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES;
            fVar = e(e.a(a0Var.a(key)));
        } else {
            fVar = null;
        }
        if (fVar == null) {
            return h.f48672a;
        }
        return fVar;
    }

    public static f e(DynamicRangeProfiles dynamicRangeProfiles) {
        boolean z10;
        if (dynamicRangeProfiles == null) {
            return null;
        }
        if (Build.VERSION.SDK_INT >= 33) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "DynamicRangeProfiles can only be converted to DynamicRangesCompat on API 33 or higher.");
        return new f(new g(dynamicRangeProfiles));
    }

    public Set b(z zVar) {
        return this.f48670a.b(zVar);
    }

    public Set c() {
        return this.f48670a.c();
    }

    public DynamicRangeProfiles d() {
        boolean z10;
        if (Build.VERSION.SDK_INT >= 33) {
            z10 = true;
        } else {
            z10 = false;
        }
        b2.e.j(z10, "DynamicRangesCompat can only be converted to DynamicRangeProfiles on API 33 or higher.");
        return this.f48670a.a();
    }
}
