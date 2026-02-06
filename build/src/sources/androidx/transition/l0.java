package androidx.transition;

import android.os.Build;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class l0 extends k0 {

    /* renamed from: g  reason: collision with root package name */
    private static boolean f5733g = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a {
        static void a(View view, int i10) {
            view.setTransitionVisibility(i10);
        }
    }

    @Override // androidx.transition.i0
    public void f(View view, int i10) {
        if (Build.VERSION.SDK_INT == 28) {
            super.f(view, i10);
        } else if (f5733g) {
            try {
                a.a(view, i10);
            } catch (NoSuchMethodError unused) {
                f5733g = false;
            }
        }
    }
}
