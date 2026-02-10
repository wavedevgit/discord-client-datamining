package co;

import android.view.View;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.i0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final int a(View decorView) {
        Intrinsics.checkNotNullParameter(decorView, "decorView");
        WindowInsetsCompat F = i0.F(decorView);
        if (F == null) {
            return 0;
        }
        return b(F);
    }

    private static final int b(WindowInsetsCompat windowInsetsCompat) {
        return windowInsetsCompat.f(WindowInsetsCompat.p.h() | WindowInsetsCompat.p.b()).f3305b;
    }

    public static final Boolean c(View decorView) {
        Intrinsics.checkNotNullParameter(decorView, "decorView");
        WindowInsetsCompat F = i0.F(decorView);
        if (F == null) {
            return null;
        }
        return Boolean.valueOf(F.u(WindowInsetsCompat.p.c()));
    }
}
