package sp;

import android.graphics.Color;
import android.view.Window;
import androidx.core.view.WindowInsetsControllerCompat;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final Window f49149a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f49150b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f49151c;

    public a(Window window, boolean z10, boolean z11) {
        Intrinsics.checkNotNullParameter(window, "window");
        this.f49149a = window;
        this.f49150b = z10;
        this.f49151c = z11;
    }

    private final void b(Window window, int i10) {
        boolean z10;
        int rgb = Color.rgb(Color.red(i10), Color.green(i10), Color.blue(i10));
        double d10 = r1.c.d(-1, rgb);
        double d11 = r1.c.d(-16777216, rgb);
        WindowInsetsControllerCompat windowInsetsControllerCompat = new WindowInsetsControllerCompat(window, window.getDecorView());
        boolean z11 = false;
        if (this.f49150b) {
            if (d10 < d11) {
                z10 = true;
            } else {
                z10 = false;
            }
            windowInsetsControllerCompat.d(z10);
        }
        if (this.f49151c) {
            if (d10 < d11) {
                z11 = true;
            }
            windowInsetsControllerCompat.e(z11);
        }
    }

    public final void a(int i10) {
        b(this.f49149a, i10);
    }
}
