package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class PreviewPixelHDRnetQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final List f2044a = Arrays.asList("sunfish", "bramble", "redfin", "barbet");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if ("Google".equals(Build.MANUFACTURER) && f2044a.contains(Build.DEVICE.toLowerCase(Locale.getDefault()))) {
            return true;
        }
        return false;
    }
}
