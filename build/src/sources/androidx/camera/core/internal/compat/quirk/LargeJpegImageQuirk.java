package androidx.camera.core.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LargeJpegImageQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Set f1998a = new HashSet(Arrays.asList("SM-A520F", "SM-A520L", "SM-A520K", "SM-A520S", "SM-A520X", "SM-A520W", "SM-A525F", "SM-A525M", "SM-A705F", "SM-A705FN", "SM-A705GM", "SM-A705MN", "SM-A7050", "SM-A705W", "SM-A705YN", "SM-A705U", "SM-A715F", "SM-A715F/DS", "SM-A715F/DSM", "SM-A715F/DSN", "SM-A715W", "SM-A715X", "SM-A725F", "SM-A725M", "SM-M515F", "SM-M515F/DSN", "SM-G930T", "SM-G930V", "SM-S901B", "SM-S901B/DS", "SM-S906B"));

    /* renamed from: b  reason: collision with root package name */
    private static final Set f1999b = new HashSet(Arrays.asList("V2244A", "V2045", "V2046"));

    private static boolean c() {
        return "Samsung".equalsIgnoreCase(Build.BRAND);
    }

    private static boolean d() {
        if ("Samsung".equalsIgnoreCase(Build.BRAND) && f1998a.contains(Build.MODEL.toUpperCase(Locale.US))) {
            return true;
        }
        return false;
    }

    private static boolean e() {
        if ("Vivo".equalsIgnoreCase(Build.BRAND) && f1999b.contains(Build.MODEL.toUpperCase(Locale.US))) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean f() {
        if (!c() && !e()) {
            return false;
        }
        return true;
    }

    public boolean g(byte[] bArr) {
        if (d() || e() || bArr.length > 10000000) {
            return true;
        }
        return false;
    }
}
