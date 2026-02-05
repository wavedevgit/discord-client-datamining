package androidx.camera.camera2.internal.compat.quirk;

import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import r.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ImageCaptureFlashNotFireQuirk implements UseTorchAsFlashQuirk {

    /* renamed from: a  reason: collision with root package name */
    private static final List f2033a = Arrays.asList("itel w6004");

    /* renamed from: b  reason: collision with root package name */
    private static final List f2034b = Arrays.asList("sm-j700f", "sm-j710f");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c(a0 a0Var) {
        boolean z10;
        List list = f2034b;
        String str = Build.MODEL;
        Locale locale = Locale.US;
        if (list.contains(str.toLowerCase(locale)) && ((Integer) a0Var.a(CameraCharacteristics.LENS_FACING)).intValue() == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean contains = f2033a.contains(str.toLowerCase(locale));
        if (!z10 && !contains) {
            return false;
        }
        return true;
    }
}
