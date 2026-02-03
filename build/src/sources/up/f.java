package up;

import android.os.Build;
import android.view.View;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.v;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f {

    /* renamed from: a */
    private static final boolean f50562a;

    /* renamed from: b */
    private static final boolean f50563b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements View.OnAttachStateChangeListener {
        a() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
            v10.removeOnAttachStateChangeListener(this);
            v10.requestApplyInsets();
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View v10) {
            Intrinsics.checkNotNullParameter(v10, "v");
        }
    }

    static {
        boolean z10;
        if (Build.VERSION.SDK_INT >= 30) {
            z10 = true;
        } else {
            z10 = false;
        }
        f50562a = z10;
        f50563b = true;
    }

    public static final void c(final View view, final boolean z10, final boolean z11, final boolean z12, final boolean z13) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        g(view, new Function1() { // from class: up.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit e10;
                e10 = f.e(view, z12, z10, z13, z11, (WindowInsetsCompat) obj);
                return e10;
            }
        });
    }

    public static /* synthetic */ void d(View view, boolean z10, boolean z11, boolean z12, boolean z13, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = true;
        }
        if ((i10 & 2) != 0) {
            z11 = true;
        }
        if ((i10 & 4) != 0) {
            z12 = true;
        }
        if ((i10 & 8) != 0) {
            z13 = true;
        }
        c(view, z10, z11, z12, z13);
    }

    public static final Unit e(View view, boolean z10, boolean z11, boolean z12, boolean z13, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Insets g10 = insets.g(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(g10, "getInsetsIgnoringVisibility(...)");
        Insets f10 = insets.f(WindowInsetsCompat.p.c());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        int i10 = f10.f3197d;
        int i11 = g10.f3195b;
        int max = Integer.max(g10.f3197d, i10);
        int i12 = g10.f3194a;
        int i13 = g10.f3196c;
        if (!z10) {
            i12 = view.getPaddingLeft();
        }
        if (!z11) {
            i11 = view.getPaddingTop();
        }
        if (!z12) {
            i13 = view.getPaddingRight();
        }
        if (!z13) {
            max = view.getPaddingBottom();
        }
        view.setPadding(i12, i11, i13, max);
        return Unit.f33074a;
    }

    public static final boolean f() {
        return f50562a;
    }

    public static final void g(View view, final Function1 cb2) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(cb2, "cb");
        h0.D0(view, new v() { // from class: up.e
            @Override // androidx.core.view.v
            public final WindowInsetsCompat a(View view2, WindowInsetsCompat windowInsetsCompat) {
                WindowInsetsCompat h10;
                h10 = f.h(Function1.this, view2, windowInsetsCompat);
                return h10;
            }
        });
        if (!view.isAttachedToWindow()) {
            i(view);
        }
    }

    public static final WindowInsetsCompat h(Function1 function1, View view, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(view, "<unused var>");
        Intrinsics.checkNotNullParameter(insets, "insets");
        function1.invoke(insets);
        return insets;
    }

    public static final void i(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        if (view.isAttachedToWindow()) {
            view.requestApplyInsets();
        } else {
            view.addOnAttachStateChangeListener(new a());
        }
    }
}
