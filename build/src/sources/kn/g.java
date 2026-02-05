package kn;

import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactPointerEventsView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements ReactPointerEventsView {

    /* renamed from: d  reason: collision with root package name */
    private f f31952d;

    public g(f fVar) {
        this.f31952d = fVar;
    }

    public final void a(f fVar) {
        this.f31952d = fVar;
    }

    @Override // com.facebook.react.uimanager.ReactPointerEventsView
    public PointerEvents getPointerEvents() {
        PointerEvents pointerEvents;
        f fVar = this.f31952d;
        if (fVar != null && (pointerEvents = fVar.getPointerEvents()) != null) {
            return pointerEvents;
        }
        return PointerEvents.NONE;
    }
}
