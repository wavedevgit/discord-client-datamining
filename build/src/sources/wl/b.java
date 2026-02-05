package wl;

import com.otaliastudios.zoom.ZoomEngine;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ZoomEngine f53158a;

    /* renamed from: b  reason: collision with root package name */
    private final List f53159b;

    public b(ZoomEngine engine) {
        Intrinsics.checkNotNullParameter(engine, "engine");
        this.f53158a = engine;
        this.f53159b = new ArrayList();
    }

    public final void a(ZoomEngine.c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (!this.f53159b.contains(listener)) {
            this.f53159b.add(listener);
        }
    }

    public final void b() {
        for (ZoomEngine.c cVar : this.f53159b) {
            cVar.onIdle(this.f53158a);
        }
    }

    public final void c() {
        for (ZoomEngine.c cVar : this.f53159b) {
            ZoomEngine zoomEngine = this.f53158a;
            cVar.onUpdate(zoomEngine, zoomEngine.y());
        }
    }
}
