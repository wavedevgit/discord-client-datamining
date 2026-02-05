package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import android.util.Pair;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class FlashAvailabilityBufferUnderflowQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f2029a = new HashSet();

    static {
        c("sprd", "lemp");
        c("sprd", "DM20C");
    }

    private static void c(String str, String str2) {
        Set set = f2029a;
        Locale locale = Locale.US;
        set.add(new Pair(str.toLowerCase(locale), str2.toLowerCase(locale)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        Set set = f2029a;
        String str = Build.MANUFACTURER;
        Locale locale = Locale.US;
        return set.contains(new Pair(str.toLowerCase(locale), Build.MODEL.toLowerCase(locale)));
    }
}
