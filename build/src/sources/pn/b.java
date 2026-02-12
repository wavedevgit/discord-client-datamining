package pn;

import com.swmansion.rnscreens.Screen;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private boolean f42800a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42801b;

    private final void c(Screen screen) {
        if (this.f42800a && this.f42801b) {
            screen.requestTriggeringPostponedEnterTransition$react_native_screens_release();
            screen.triggerPostponedEnterTransitionIfNeeded$react_native_screens_release();
        }
    }

    public final void a(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f42801b = true;
        c(screen);
    }

    public final void b(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f42800a = true;
        c(screen);
    }
}
