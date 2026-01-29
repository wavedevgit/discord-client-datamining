package androidx.activity;

import android.view.View;
import android.view.Window;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.w0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class s extends r {
    @Override // androidx.activity.p, androidx.activity.v
    public void b(@NotNull b0 statusBarStyle, @NotNull b0 navigationBarStyle, @NotNull Window window, @NotNull View view, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(statusBarStyle, "statusBarStyle");
        Intrinsics.checkNotNullParameter(navigationBarStyle, "navigationBarStyle");
        Intrinsics.checkNotNullParameter(window, "window");
        Intrinsics.checkNotNullParameter(view, "view");
        boolean z12 = false;
        w0.c(window, false);
        window.setStatusBarColor(statusBarStyle.f(z10));
        window.setNavigationBarColor(navigationBarStyle.f(z11));
        window.setStatusBarContrastEnforced(false);
        if (navigationBarStyle.d() == 0) {
            z12 = true;
        }
        window.setNavigationBarContrastEnforced(z12);
        WindowInsetsControllerCompat windowInsetsControllerCompat = new WindowInsetsControllerCompat(window, view);
        windowInsetsControllerCompat.e(!z10);
        windowInsetsControllerCompat.d(true ^ z11);
    }
}
