package androidx.activity;

import android.view.View;
import android.view.Window;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.core.view.w0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class o extends u {
    @Override // androidx.activity.v
    public void b(@NotNull b0 statusBarStyle, @NotNull b0 navigationBarStyle, @NotNull Window window, @NotNull View view, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(statusBarStyle, "statusBarStyle");
        Intrinsics.checkNotNullParameter(navigationBarStyle, "navigationBarStyle");
        Intrinsics.checkNotNullParameter(window, "window");
        Intrinsics.checkNotNullParameter(view, "view");
        w0.c(window, false);
        window.setStatusBarColor(statusBarStyle.e(z10));
        window.setNavigationBarColor(navigationBarStyle.b());
        new WindowInsetsControllerCompat(window, view).e(!z10);
    }
}
