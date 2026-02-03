package tl;

import com.otaliastudios.zoom.ZoomEngine;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ZoomEngine f49929a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49930b;

    public b(ZoomEngine engine) {
        Intrinsics.checkNotNullParameter(engine, "engine");
        this.f49929a = engine;
        this.f49930b = new ArrayList();
    }

    public final void a(ZoomEngine.c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (!this.f49930b.contains(listener)) {
            this.f49930b.add(listener);
        }
    }

    public final void b() {
        for (ZoomEngine.c cVar : this.f49930b) {
            cVar.onIdle(this.f49929a);
        }
    }

    public final void c() {
        for (ZoomEngine.c cVar : this.f49930b) {
            ZoomEngine zoomEngine = this.f49929a;
            cVar.onUpdate(zoomEngine, zoomEngine.y());
        }
    }
}
