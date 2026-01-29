package kn;

import android.view.View;
import android.view.WindowInsets;
import androidx.core.graphics.Insets;
import androidx.core.view.WindowInsetsCompat;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d {
    public static final Insets a(View view, int i10, WindowInsets windowInsets, boolean z10) {
        Intrinsics.checkNotNullParameter(view, "<this>");
        if (windowInsets == null) {
            Insets NONE = Insets.f3149e;
            Intrinsics.checkNotNullExpressionValue(NONE, "NONE");
            return NONE;
        }
        WindowInsetsCompat D = WindowInsetsCompat.D(windowInsets, view);
        Intrinsics.checkNotNullExpressionValue(D, "toWindowInsetsCompat(...)");
        if (!z10) {
            Insets f10 = D.f(i10);
            Intrinsics.checkNotNull(f10);
            return f10;
        }
        Insets g10 = D.g(i10);
        Intrinsics.checkNotNull(g10);
        return g10;
    }

    public static /* synthetic */ Insets b(View view, int i10, WindowInsets windowInsets, boolean z10, int i11, Object obj) {
        if ((i11 & 2) != 0) {
            windowInsets = view.getRootWindowInsets();
        }
        if ((i11 & 4) != 0) {
            z10 = false;
        }
        return a(view, i10, windowInsets, z10);
    }
}
