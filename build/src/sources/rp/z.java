package rp;

import android.view.View;
import com.google.android.material.snackbar.Snackbar;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Snackbar.a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Function0 f49154a;

        a(Function0 function0) {
            this.f49154a = function0;
        }

        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.r
        /* renamed from: d */
        public void a(Snackbar snackbar, int i10) {
            this.f49154a.invoke();
        }
    }

    public static final void a(View snackbarContainer, String str, Function0 onDismissed, View view, int i10, int i11) {
        Intrinsics.checkNotNullParameter(snackbarContainer, "snackbarContainer");
        Intrinsics.checkNotNullParameter(onDismissed, "onDismissed");
        if (str == null) {
            return;
        }
        Snackbar l02 = Snackbar.l0(snackbarContainer, str, i11);
        Intrinsics.checkNotNullExpressionValue(l02, "make(...)");
        l02.o0(i10);
        if (view != null) {
            Snackbar snackbar = (Snackbar) l02.U(view);
        }
        ((Snackbar) l02.u(new a(onDismissed))).Z();
    }

    public static /* synthetic */ void b(View view, String str, Function0 function0, View view2, int i10, int i11, int i12, Object obj) {
        if ((i12 & 8) != 0) {
            view2 = null;
        }
        View view3 = view2;
        if ((i12 & 16) != 0) {
            i10 = 2;
        }
        int i13 = i10;
        if ((i12 & 32) != 0) {
            i11 = 0;
        }
        a(view, str, function0, view3, i13, i11);
    }
}
