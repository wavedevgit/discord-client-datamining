package en;

import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactPointerEventsView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ReactPointerEventsView {

    /* renamed from: d  reason: collision with root package name */
    private final b f22973d;

    public f(b dimmingView) {
        Intrinsics.checkNotNullParameter(dimmingView, "dimmingView");
        this.f22973d = dimmingView;
    }

    @Override // com.facebook.react.uimanager.ReactPointerEventsView
    public PointerEvents getPointerEvents() {
        if (this.f22973d.getBlockGestures$react_native_screens_release()) {
            return PointerEvents.AUTO;
        }
        return PointerEvents.NONE;
    }
}
