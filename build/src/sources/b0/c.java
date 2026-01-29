package b0;

import x.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {
    public static int a(int i10, int i11, boolean z10) {
        int i12;
        if (z10) {
            i12 = ((i11 - i10) + 360) % 360;
        } else {
            i12 = (i11 + i10) % 360;
        }
        if (y0.h("CameraOrientationUtil")) {
            y0.a("CameraOrientationUtil", String.format("getRelativeImageRotation: destRotationDegrees=%s, sourceRotationDegrees=%s, isOppositeFacing=%s, result=%s", Integer.valueOf(i10), Integer.valueOf(i11), Boolean.valueOf(z10), Integer.valueOf(i12)));
        }
        return i12;
    }

    public static int b(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return 270;
                    }
                    throw new IllegalArgumentException("Unsupported surface rotation: " + i10);
                }
                return 180;
            }
            return 90;
        }
        return 0;
    }
}
