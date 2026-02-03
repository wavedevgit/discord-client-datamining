package kp;

import android.graphics.Color;
import android.view.View;
import android.view.Window;
import androidx.core.view.WindowInsetsControllerCompat;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f0 {
    public static final void a(Window window, int i10) {
        boolean z10;
        Intrinsics.checkNotNullParameter(window, "<this>");
        int rgb = Color.rgb(Color.red(i10), Color.green(i10), Color.blue(i10));
        double d10 = r1.c.d(-1, rgb);
        double d11 = r1.c.d(-16777216, rgb);
        View decorView = window.getDecorView();
        Intrinsics.checkNotNullExpressionValue(decorView, "getDecorView(...)");
        WindowInsetsControllerCompat windowInsetsControllerCompat = new WindowInsetsControllerCompat(window, decorView);
        int i11 = (d10 > d11 ? 1 : (d10 == d11 ? 0 : -1));
        boolean z11 = false;
        if (i11 < 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        windowInsetsControllerCompat.e(z10);
        if (i11 < 0) {
            z11 = true;
        }
        windowInsetsControllerCompat.d(z11);
    }
}
