package pn;

import com.facebook.react.uimanager.PointerEvents;
import com.facebook.react.uimanager.ReactPointerEventsView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i implements ReactPointerEventsView {

    /* renamed from: d  reason: collision with root package name */
    private h f42819d;

    public i(h hVar) {
        this.f42819d = hVar;
    }

    public final void a(h hVar) {
        this.f42819d = hVar;
    }

    @Override // com.facebook.react.uimanager.ReactPointerEventsView
    public PointerEvents getPointerEvents() {
        PointerEvents pointerEvents;
        h hVar = this.f42819d;
        if (hVar != null && (pointerEvents = hVar.getPointerEvents()) != null) {
            return pointerEvents;
        }
        return PointerEvents.NONE;
    }
}
