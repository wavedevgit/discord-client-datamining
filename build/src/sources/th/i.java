package th;

import android.graphics.drawable.Drawable;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static e a(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                return b();
            }
            return new f();
        }
        return new k();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static e b() {
        return new k();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g c() {
        return new g();
    }

    public static void d(View view, float f10) {
        Drawable background = view.getBackground();
        if (background instanceof h) {
            ((h) background).e0(f10);
        }
    }

    public static void e(View view) {
        Drawable background = view.getBackground();
        if (background instanceof h) {
            f(view, (h) background);
        }
    }

    public static void f(View view, h hVar) {
        if (hVar.V()) {
            hVar.j0(com.google.android.material.internal.p.g(view));
        }
    }
}
