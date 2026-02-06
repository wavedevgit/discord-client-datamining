package yl;

import com.otaliastudios.zoom.ZoomEngine;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ZoomEngine f55473a;

    /* renamed from: b  reason: collision with root package name */
    private final List f55474b;

    public b(ZoomEngine engine) {
        Intrinsics.checkNotNullParameter(engine, "engine");
        this.f55473a = engine;
        this.f55474b = new ArrayList();
    }

    public final void a(ZoomEngine.c listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        if (!this.f55474b.contains(listener)) {
            this.f55474b.add(listener);
        }
    }

    public final void b() {
        for (ZoomEngine.c cVar : this.f55474b) {
            cVar.onIdle(this.f55473a);
        }
    }

    public final void c() {
        for (ZoomEngine.c cVar : this.f55474b) {
            ZoomEngine zoomEngine = this.f55473a;
            cVar.onUpdate(zoomEngine, zoomEngine.y());
        }
    }
}
