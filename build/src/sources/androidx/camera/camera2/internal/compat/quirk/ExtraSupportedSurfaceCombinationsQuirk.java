package androidx.camera.camera2.internal.compat.quirk;

import a0.n2;
import a0.o2;
import a0.y1;
import android.os.Build;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ExtraSupportedSurfaceCombinationsQuirk implements y1 {

    /* renamed from: a  reason: collision with root package name */
    private static final n2 f1900a = c();

    /* renamed from: b  reason: collision with root package name */
    private static final n2 f1901b = d();

    /* renamed from: c  reason: collision with root package name */
    private static final Set f1902c = new HashSet(Arrays.asList("PIXEL 6", "PIXEL 6 PRO", "PIXEL 7", "PIXEL 7 PRO", "PIXEL 8", "PIXEL 8 PRO"));

    /* renamed from: d  reason: collision with root package name */
    private static final Set f1903d = new HashSet(Arrays.asList("SM-S921", "SC-51E", "SCG25", "SM-S926", "SM-S928", "SC-52E", "SCG26"));

    private static n2 c() {
        n2 n2Var = new n2();
        o2.b bVar = o2.b.YUV;
        n2Var.a(o2.a(bVar, o2.a.VGA));
        n2Var.a(o2.a(o2.b.PRIV, o2.a.PREVIEW));
        n2Var.a(o2.a(bVar, o2.a.MAXIMUM));
        return n2Var;
    }

    private static n2 d() {
        n2 n2Var = new n2();
        o2.b bVar = o2.b.PRIV;
        n2Var.a(o2.a(bVar, o2.a.PREVIEW));
        n2Var.a(o2.a(bVar, o2.a.VGA));
        n2Var.a(o2.a(o2.b.YUV, o2.a.MAXIMUM));
        return n2Var;
    }

    private List f(String str) {
        ArrayList arrayList = new ArrayList();
        if (str.equals("1")) {
            arrayList.add(f1900a);
        }
        return arrayList;
    }

    private static boolean g() {
        String str = Build.DEVICE;
        if (!"heroqltevzw".equalsIgnoreCase(str) && !"heroqltetmo".equalsIgnoreCase(str)) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean h() {
        if (!g() && !i() && !j()) {
            return false;
        }
        return true;
    }

    private static boolean i() {
        if (!"google".equalsIgnoreCase(Build.BRAND)) {
            return false;
        }
        return f1902c.contains(Build.MODEL.toUpperCase(Locale.US));
    }

    private static boolean j() {
        if (!"samsung".equalsIgnoreCase(Build.BRAND)) {
            return false;
        }
        String upperCase = Build.MODEL.toUpperCase(Locale.US);
        for (String str : f1903d) {
            if (upperCase.startsWith(str)) {
                return true;
            }
        }
        return false;
    }

    public List e(String str) {
        if (g()) {
            return f(str);
        }
        if (!i() && !j()) {
            return Collections.EMPTY_LIST;
        }
        return Collections.singletonList(f1901b);
    }
}
