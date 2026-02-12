package pn;

import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactPointerEventsView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h implements ReactPointerEventsView {

    /* renamed from: d  reason: collision with root package name */
    private final d f42818d;

    public h(d dimmingView) {
        Intrinsics.checkNotNullParameter(dimmingView, "dimmingView");
        this.f42818d = dimmingView;
    }

    @Override // com.facebook.react.uimanager.ReactPointerEventsView
    public PointerEvents getPointerEvents() {
        if (this.f42818d.getBlockGestures$react_native_screens_release()) {
            return PointerEvents.AUTO;
        }
        return PointerEvents.NONE;
    }
}
