package zl;

import com.otaliastudios.zoom.ZoomEngine;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ZoomEngine f56546a;

    /* renamed from: b  reason: collision with root package name */
    private final List f56547b;

    public b(ZoomEngine engine) {
        Intrinsics.checkNotNullParameter(engine, "engine");
        this.f56546a = engine;
        this.f56547b = new ArrayList();
    }

    public final void a(ZoomEngine.c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (!this.f56547b.contains(listener)) {
            this.f56547b.add(listener);
        }
    }

    public final void b() {
        for (ZoomEngine.c cVar : this.f56547b) {
            cVar.onIdle(this.f56546a);
        }
    }

    public final void c() {
        for (ZoomEngine.c cVar : this.f56547b) {
            ZoomEngine zoomEngine = this.f56546a;
            cVar.onUpdate(zoomEngine, zoomEngine.y());
        }
    }
}
