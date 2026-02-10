package bq;

import android.view.View;
import com.google.android.material.snackbar.Snackbar;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Snackbar.a {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Function0 f7456a;

        a(Function0 function0) {
            this.f7456a = function0;
        }

        @Override // com.google.android.material.snackbar.BaseTransientBottomBar.r
        /* renamed from: d */
        public void a(Snackbar snackbar, int i10) {
            this.f7456a.invoke();
        }
    }

    public static final void a(View snackbarContainer, String str, Function0 onDismissed, View view, int i10, int i11) {
        Intrinsics.checkNotNullParameter(snackbarContainer, "snackbarContainer");
        Intrinsics.checkNotNullParameter(onDismissed, "onDismissed");
        if (str == null) {
            return;
        }
        Snackbar k02 = Snackbar.k0(snackbarContainer, str, i11);
        Intrinsics.checkNotNullExpressionValue(k02, "make(...)");
        k02.n0(i10);
        if (view != null) {
            Snackbar snackbar = (Snackbar) k02.T(view);
        }
        ((Snackbar) k02.t(new a(onDismissed))).Y();
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
