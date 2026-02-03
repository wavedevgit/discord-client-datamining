package androidx.camera.camera2.internal.compat.quirk;

import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import r.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ImageCaptureWashedOutImageQuirk implements UseTorchAsFlashQuirk {

    /* renamed from: a  reason: collision with root package name */
    public static final List f1924a = Arrays.asList("SM-G9300", "SM-G930R", "SM-G930A", "SM-G930V", "SM-G930T", "SM-G930U", "SM-G930P", "SM-SC02H", "SM-SCV33", "SM-G9350", "SM-G935R", "SM-G935A", "SM-G935V", "SM-G935T", "SM-G935U", "SM-G935P");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c(a0 a0Var) {
        if (f1924a.contains(Build.MODEL.toUpperCase(Locale.US)) && ((Integer) a0Var.a(CameraCharacteristics.LENS_FACING)).intValue() == 1) {
            return true;
        }
        return false;
    }
}
