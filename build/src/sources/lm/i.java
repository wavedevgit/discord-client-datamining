package lm;

import android.graphics.Rect;
import android.os.Build;
import android.view.View;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    private static final int[] f36375a = new int[2];

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

    public static final void a(View view, Rect rect) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(rect, "rect");
        if (view.isAttachedToWindow()) {
            rect.set(0, 0, view.getWidth(), view.getHeight());
            int[] iArr = f36375a;
            view.getLocationInWindow(iArr);
            rect.offset(iArr[0], iArr[1]);
            return;
        }
        pm.a.f(pm.a.f45061a, "View.copyBoundsInWindow", "Can not copy bounds as view is not attached to window", null, 4, null);
    }

    public static final int[] b(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        int[] iArr = new int[2];
        view.getLocationOnScreen(iArr);
        return iArr;
    }

    public static final WindowInsetsCompat c(View view, WindowInsetsCompat insets, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        Intrinsics.checkNotNullParameter(insets, "insets");
        int i10 = 0;
        if (Build.VERSION.SDK_INT >= 30) {
            Insets f10 = insets.f(WindowInsetsCompat.p.h());
            Intrinsics.checkNotNullExpressionValue(f10, "getInsets(...)");
            Insets f11 = insets.f(WindowInsetsCompat.p.f());
            Intrinsics.checkNotNullExpressionValue(f11, "getInsets(...)");
            Insets f12 = insets.f(WindowInsetsCompat.p.c());
            Intrinsics.checkNotNullExpressionValue(f12, "getInsets(...)");
            if (!z10) {
                i10 = f10.f3605b;
            }
            int i11 = f12.f3607d;
            if (i11 <= 0) {
                i11 = f11.f3607d;
            }
            WindowInsetsCompat.a aVar = new WindowInsetsCompat.a(insets);
            int h10 = WindowInsetsCompat.p.h();
            int i12 = f10.f3604a;
            int i13 = f10.f3606c;
            if (z11) {
                i11 = f10.f3607d;
            }
            WindowInsetsCompat a10 = aVar.b(h10, Insets.c(i12, i10, i13, i11)).a();
            Intrinsics.checkNotNullExpressionValue(a10, "build(...)");
            WindowInsetsCompat Z = h0.Z(view, a10);
            Intrinsics.checkNotNullExpressionValue(Z, "onApplyWindowInsets(...)");
            return Z;
        }
        WindowInsetsCompat Z2 = h0.Z(view, insets);
        Intrinsics.checkNotNullExpressionValue(Z2, "onApplyWindowInsets(...)");
        int o10 = Z2.o();
        if (!z10) {
            i10 = Z2.q();
        }
        WindowInsetsCompat v10 = Z2.v(o10, i10, Z2.p(), Z2.n());
        Intrinsics.checkNotNullExpressionValue(v10, "replaceSystemWindowInsets(...)");
        return v10;
    }

    public static final void d(View view) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        if (view.isAttachedToWindow()) {
            view.requestApplyInsets();
        } else {
            view.addOnAttachStateChangeListener(new a());
        }
    }
}
