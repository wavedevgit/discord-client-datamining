package in;

import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.swmansion.rnscreens.Screen;
import com.swmansion.rnscreens.w;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Screen f28497a;

    public i(Screen screen) {
        Intrinsics.checkNotNullParameter(screen, "screen");
        this.f28497a = screen;
    }

    public final Unit a() {
        EventDispatcher f10 = f();
        if (f10 != null) {
            f10.dispatchEvent(new f(g(), this.f28497a.getId()));
            return Unit.f32464a;
        }
        return null;
    }

    public final Unit b() {
        EventDispatcher f10 = f();
        if (f10 != null) {
            f10.dispatchEvent(new g(g(), this.f28497a.getId()));
            return Unit.f32464a;
        }
        return null;
    }

    public final Unit c() {
        EventDispatcher f10 = f();
        if (f10 != null) {
            f10.dispatchEvent(new k(g(), this.f28497a.getId()));
            return Unit.f32464a;
        }
        return null;
    }

    public final Unit d() {
        EventDispatcher f10 = f();
        if (f10 != null) {
            f10.dispatchEvent(new l(g(), this.f28497a.getId()));
            return Unit.f32464a;
        }
        return null;
    }

    public final void e(float f10, boolean z10, boolean z11) {
        float l10 = kotlin.ranges.d.l(f10, 0.0f, 1.0f);
        short a10 = w.f17991s.a(l10);
        EventDispatcher f11 = f();
        if (f11 != null) {
            f11.dispatchEvent(new j(g(), this.f28497a.getId(), l10, z10, z11, a10));
        }
    }

    public final EventDispatcher f() {
        return this.f28497a.getReactEventDispatcher();
    }

    public final int g() {
        return UIManagerHelper.getSurfaceId(this.f28497a);
    }
}
