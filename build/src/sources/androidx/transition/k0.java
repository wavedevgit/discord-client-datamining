package androidx.transition;

import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class k0 extends j0 {

    /* renamed from: f  reason: collision with root package name */
    private static boolean f5285f = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static void a(View view, int i10, int i11, int i12, int i13) {
            view.setLeftTopRightBottom(i10, i11, i12, i13);
        }
    }

    @Override // androidx.transition.i0
    public void d(View view, int i10, int i11, int i12, int i13) {
        if (f5285f) {
            try {
                a.a(view, i10, i11, i12, i13);
            } catch (NoSuchMethodError unused) {
                f5285f = false;
            }
        }
    }
}
