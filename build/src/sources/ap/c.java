package ap;

import android.content.Context;
import cr.h;
import ep.e;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements cr.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f5979a;

    /* renamed from: b  reason: collision with root package name */
    private final h f5980b;

    /* renamed from: c  reason: collision with root package name */
    private final h f5981c;

    /* renamed from: d  reason: collision with root package name */
    private final h f5982d;

    public c(h hVar, h hVar2, h hVar3, h hVar4) {
        this.f5979a = hVar;
        this.f5980b = hVar2;
        this.f5981c = hVar3;
        this.f5982d = hVar4;
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
        return c((Context) this.f5979a.get(), (e.a) this.f5980b.get(), (f) this.f5981c.get(), (CoroutineDispatcher) this.f5982d.get());
    }
}
