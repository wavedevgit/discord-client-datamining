package en;

import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactPointerEventsView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements ReactPointerEventsView {

    /* renamed from: d  reason: collision with root package name */
    private f f22974d;

    public g(f fVar) {
        this.f22974d = fVar;
    }

    public final void a(f fVar) {
        this.f22974d = fVar;
    }

    @Override // com.facebook.react.uimanager.ReactPointerEventsView
    public PointerEvents getPointerEvents() {
        PointerEvents pointerEvents;
        f fVar = this.f22974d;
        if (fVar != null && (pointerEvents = fVar.getPointerEvents()) != null) {
            return pointerEvents;
        }
        return PointerEvents.NONE;
    }
}
