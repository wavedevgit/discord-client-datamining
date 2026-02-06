package androidx.camera.camera2.internal.compat.quirk;

import a0.y1;
import android.hardware.camera2.CameraCharacteristics;
import android.os.Build;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import q.u;
import r.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class TorchFlashRequiredFor3aUpdateQuirk implements y1 {

    /* renamed from: b  reason: collision with root package name */
    private static final List f2375b = Arrays.asList("PIXEL 6A", "PIXEL 6 PRO", "PIXEL 7", "PIXEL 7A", "PIXEL 7 PRO", "PIXEL 8", "PIXEL 8 PRO");

    /* renamed from: a  reason: collision with root package name */
    private final a0 f2376a;

    public TorchFlashRequiredFor3aUpdateQuirk(a0 a0Var) {
        this.f2376a = a0Var;
    }

    private static boolean c(a0 a0Var) {
        if (d() && g(a0Var)) {
            return true;
        }
        return false;
    }

    private static boolean d() {
        for (String str : f2375b) {
            if (Build.MODEL.toUpperCase(Locale.US).equals(str)) {
                return true;
            }
        }
        return false;
    }

    private static boolean e(a0 a0Var) {
        if (Build.VERSION.SDK_INT < 28 || u.J(a0Var, 5) != 5) {
            return false;
        }
        return true;
    }

    private static boolean g(a0 a0Var) {
        if (((Integer) a0Var.a(CameraCharacteristics.LENS_FACING)).intValue() == 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean h(a0 a0Var) {
        return c(a0Var);
    }

    public boolean f() {
        return !e(this.f2376a);
    }
}
