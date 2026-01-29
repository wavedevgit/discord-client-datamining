package androidx.transition;

import android.graphics.Matrix;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class m0 extends l0 {
    @Override // androidx.transition.i0
    public float b(View view) {
        return view.getTransitionAlpha();
    }

    @Override // androidx.transition.k0, androidx.transition.i0
    public void d(View view, int i10, int i11, int i12, int i13) {
        view.setLeftTopRightBottom(i10, i11, i12, i13);
    }

    @Override // androidx.transition.i0
    public void e(View view, float f10) {
        view.setTransitionAlpha(f10);
    }

    @Override // androidx.transition.l0, androidx.transition.i0
    public void f(View view, int i10) {
        view.setTransitionVisibility(i10);
    }

    @Override // androidx.transition.j0, androidx.transition.i0
    public void g(View view, Matrix matrix) {
        view.transformMatrixToGlobal(matrix);
    }

    @Override // androidx.transition.j0, androidx.transition.i0
    public void h(View view, Matrix matrix) {
        view.transformMatrixToLocal(matrix);
    }
}
