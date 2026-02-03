package so;

import android.content.Context;
import kotlinx.coroutines.CoroutineDispatcher;
import uq.h;
import wo.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements uq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f49217a;

    /* renamed from: b  reason: collision with root package name */
    private final h f49218b;

    /* renamed from: c  reason: collision with root package name */
    private final h f49219c;

    /* renamed from: d  reason: collision with root package name */
    private final h f49220d;

    public c(h hVar, h hVar2, h hVar3, h hVar4) {
        this.f49217a = hVar;
        this.f49218b = hVar2;
        this.f49219c = hVar3;
        this.f49220d = hVar4;
    }

    public static c a(h hVar, h hVar2, h hVar3, h hVar4) {
        return new c(hVar, hVar2, hVar3, hVar4);
    }

    public static a c(Context context, e.a aVar, f fVar, CoroutineDispatcher coroutineDispatcher) {
        return new a(context, aVar, fVar, coroutineDispatcher);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public a get() {
        return c((Context) this.f49217a.get(), (e.a) this.f49218b.get(), (f) this.f49219c.get(), (CoroutineDispatcher) this.f49220d.get());
    }
}
