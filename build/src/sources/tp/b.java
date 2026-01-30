package tp;

import android.view.View;
import android.view.ViewGroup;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import com.google.android.material.bottomsheet.BottomSheetBehavior;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends BottomSheetBehavior.g {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Function0 f49794a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ View f49795b;

        a(Function0 function0, View view) {
            this.f49794a = function0;
            this.f49795b = view;
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void b(View bottomSheet, float f10) {
            View view;
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            if (f10 > 0.0f && (view = this.f49795b) != null) {
                view.setVisibility(0);
            }
            View view2 = this.f49795b;
            if (view2 != null) {
                view2.setAlpha(kotlin.ranges.d.c(f10, 0.0f));
            }
        }

        @Override // com.google.android.material.bottomsheet.BottomSheetBehavior.g
        public void c(View bottomSheet, int i10) {
            Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
            if (i10 == 4 || i10 == 5) {
                this.f49794a.invoke();
                View view = this.f49795b;
                if (view != null) {
                    view.setVisibility(8);
                }
            }
        }
    }

    public static final void b(BottomSheetBehavior bottomSheetBehavior, Function0 onCancel, final View bottomSheet, View view, View view2) {
        Intrinsics.checkNotNullParameter(bottomSheetBehavior, "<this>");
        Intrinsics.checkNotNullParameter(onCancel, "onCancel");
        Intrinsics.checkNotNullParameter(bottomSheet, "bottomSheet");
        bottomSheetBehavior.c0(new a(onCancel, view2));
        bottomSheetBehavior.X0(true);
        if (view != null) {
            bottomSheet = view;
        }
        f.g(bottomSheet, new Function1() { // from class: tp.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit c10;
                c10 = b.c(bottomSheet, (WindowInsetsCompat) obj);
                return c10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit c(View view, WindowInsetsCompat insets) {
        Intrinsics.checkNotNullParameter(insets, "insets");
        Insets g10 = insets.g(WindowInsetsCompat.p.h());
        Intrinsics.checkNotNullExpressionValue(g10, "getInsetsIgnoringVisibility(...)");
        Insets f10 = insets.f(WindowInsetsCompat.p.c());
        Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
        view.setPadding(view.getPaddingLeft(), view.getPaddingTop(), view.getPaddingRight(), Integer.max(g10.f3153d, f10.f3153d));
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams != null) {
            ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) layoutParams;
            marginLayoutParams.topMargin = g10.f3151b;
            view.setLayoutParams(marginLayoutParams);
            return Unit.f33298a;
        }
        throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.MarginLayoutParams");
    }
}
