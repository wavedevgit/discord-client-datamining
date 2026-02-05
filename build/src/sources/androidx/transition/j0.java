package androidx.transition;

import android.graphics.Matrix;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class j0 extends i0 {

    /* renamed from: d  reason: collision with root package name */
    private static boolean f5395d = true;

    /* renamed from: e  reason: collision with root package name */
    private static boolean f5396e = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static void a(View view, Matrix matrix) {
            view.setAnimationMatrix(matrix);
        }

        static void b(View view, Matrix matrix) {
            view.transformMatrixToGlobal(matrix);
        }

        static void c(View view, Matrix matrix) {
            view.transformMatrixToLocal(matrix);
        }
    }

    @Override // androidx.transition.i0
    public void g(View view, Matrix matrix) {
        if (f5395d) {
            try {
                a.b(view, matrix);
            } catch (NoSuchMethodError unused) {
                f5395d = false;
            }
        }
    }

    @Override // androidx.transition.i0
    public void h(View view, Matrix matrix) {
        if (f5396e) {
            try {
                a.c(view, matrix);
            } catch (NoSuchMethodError unused) {
                f5396e = false;
            }
        }
    }
}
