package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.hardware.camera2.CameraCharacteristics;
import java.util.List;
import r.a0;
import r.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class CamcorderProfileResolutionQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private final s0 f1894a;

    /* renamed from: b  reason: collision with root package name */
    private List f1895b = null;

    public CamcorderProfileResolutionQuirk(a0 a0Var) {
        this.f1894a = a0Var.b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c(a0 a0Var) {
        Integer num = (Integer) a0Var.a(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL);
        if (num != null && num.intValue() == 2) {
            return true;
        }
        return false;
    }
}
