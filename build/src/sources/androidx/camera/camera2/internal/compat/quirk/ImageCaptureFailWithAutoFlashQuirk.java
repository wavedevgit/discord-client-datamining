package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import r.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ImageCaptureFailWithAutoFlashQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final List f1919a = Arrays.asList("sm-j700f", "sm-j710f");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c(a0 a0Var) {
        if (f1919a.contains(Build.MODEL.toLowerCase(Locale.US)) && ((Integer) a0Var.a(CameraCharacteristics.LENS_FACING)).intValue() == 0) {
            return true;
        }
        return false;
    }
}
