package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.hardware.camera2.CameraCharacteristics;
import android.util.Range;
import r.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AeFpsRangeLegacyQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private final Range f1906a;

    public AeFpsRangeLegacyQuirk(a0 a0Var) {
        this.f1906a = f((Range[]) a0Var.a(CameraCharacteristics.CONTROL_AE_AVAILABLE_TARGET_FPS_RANGES));
    }

    private Range c(Range range) {
        int intValue = ((Integer) range.getUpper()).intValue();
        int intValue2 = ((Integer) range.getLower()).intValue();
        if (((Integer) range.getUpper()).intValue() >= 1000) {
            intValue = ((Integer) range.getUpper()).intValue() / 1000;
        }
        if (((Integer) range.getLower()).intValue() >= 1000) {
            intValue2 = ((Integer) range.getLower()).intValue() / 1000;
        }
        return new Range(Integer.valueOf(intValue2), Integer.valueOf(intValue));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean e(a0 a0Var) {
        Integer num = (Integer) a0Var.a(CameraCharacteristics.INFO_SUPPORTED_HARDWARE_LEVEL);
        if (num != null && num.intValue() == 2) {
            return true;
        }
        return false;
    }

    private Range f(Range[] rangeArr) {
        Range range = null;
        if (rangeArr != null && rangeArr.length != 0) {
            for (Range range2 : rangeArr) {
                Range c10 = c(range2);
                if (((Integer) c10.getUpper()).intValue() == 30 && (range == null || ((Integer) c10.getLower()).intValue() < ((Integer) range.getLower()).intValue())) {
                    range = c10;
                }
            }
        }
        return range;
    }

    public Range d() {
        return this.f1906a;
    }
}
