package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.os.Build;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ZslDisablerQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final List f1937a = Arrays.asList("SM-F936", "SM-S901U", "SM-S908U", "SM-S908U1");

    /* renamed from: b  reason: collision with root package name */
    private static final List f1938b = Arrays.asList("MI 8");

    private static boolean c(List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            if (Build.MODEL.toUpperCase(Locale.US).startsWith((String) it.next())) {
                return true;
            }
        }
        return false;
    }

    private static boolean d() {
        if ("samsung".equalsIgnoreCase(Build.BRAND) && c(f1937a)) {
            return true;
        }
        return false;
    }

    private static boolean e() {
        if ("xiaomi".equalsIgnoreCase(Build.BRAND) && c(f1938b)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean f() {
        if (!d() && !e()) {
            return false;
        }
        return true;
    }
}
