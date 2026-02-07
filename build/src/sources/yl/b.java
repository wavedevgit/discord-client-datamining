package yl;

import com.otaliastudios.zoom.ZoomEngine;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ZoomEngine f55521a;

    /* renamed from: b  reason: collision with root package name */
    private final List f55522b;

    public b(ZoomEngine engine) {
        Intrinsics.checkNotNullParameter(engine, "engine");
        this.f55521a = engine;
        this.f55522b = new ArrayList();
    }

    public final void a(ZoomEngine.c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (!this.f55522b.contains(listener)) {
            this.f55522b.add(listener);
        }
    }

    public final void b() {
        for (ZoomEngine.c cVar : this.f55522b) {
            cVar.onIdle(this.f55521a);
        }
    }

    public final void c() {
        for (ZoomEngine.c cVar : this.f55522b) {
            ZoomEngine zoomEngine = this.f55521a;
            cVar.onUpdate(zoomEngine, zoomEngine.y());
        }
    }
}
