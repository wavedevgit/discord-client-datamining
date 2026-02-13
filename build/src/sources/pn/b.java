package pn;

import com.swmansion.rnscreens.Screen;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private boolean f43368a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f43369b;

    private final void c(Screen screen) {
        if (this.f43368a && this.f43369b) {
            screen.requestTriggeringPostponedEnterTransition$react_native_screens_release();
            screen.triggerPostponedEnterTransitionIfNeeded$react_native_screens_release();
        }
    }

    public final void a(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f43369b = true;
        c(screen);
    }

    public final void b(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f43368a = true;
        c(screen);
    }
}
