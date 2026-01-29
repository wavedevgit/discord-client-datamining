package sl;

import com.otaliastudios.zoom.ZoomEngine;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ZoomEngine f49075a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49076b;

    public b(ZoomEngine engine) {
        Intrinsics.checkNotNullParameter(engine, "engine");
        this.f49075a = engine;
        this.f49076b = new ArrayList();
    }

    public final void a(ZoomEngine.c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (!this.f49076b.contains(listener)) {
            this.f49076b.add(listener);
        }
    }

    public final void b() {
        for (ZoomEngine.c cVar : this.f49076b) {
            cVar.onIdle(this.f49075a);
        }
    }

    public final void c() {
        for (ZoomEngine.c cVar : this.f49076b) {
            ZoomEngine zoomEngine = this.f49075a;
            cVar.onUpdate(zoomEngine, zoomEngine.y());
        }
    }
}
