package tl;

import com.otaliastudios.zoom.ZoomEngine;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ZoomEngine f50137a;

    /* renamed from: b  reason: collision with root package name */
    private final List f50138b;

    public b(ZoomEngine engine) {
        Intrinsics.checkNotNullParameter(engine, "engine");
        this.f50137a = engine;
        this.f50138b = new ArrayList();
    }

    public final void a(ZoomEngine.c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (!this.f50138b.contains(listener)) {
            this.f50138b.add(listener);
        }
    }

    public final void b() {
        for (ZoomEngine.c cVar : this.f50138b) {
            cVar.onIdle(this.f50137a);
        }
    }

    public final void c() {
        for (ZoomEngine.c cVar : this.f50138b) {
            ZoomEngine zoomEngine = this.f50137a;
            cVar.onUpdate(zoomEngine, zoomEngine.y());
        }
    }
}
