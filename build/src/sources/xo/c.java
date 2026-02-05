package xo;

import android.content.Context;
import bp.e;
import kotlinx.coroutines.CoroutineDispatcher;
import zq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements zq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f54049a;

    /* renamed from: b  reason: collision with root package name */
    private final h f54050b;

    /* renamed from: c  reason: collision with root package name */
    private final h f54051c;

    /* renamed from: d  reason: collision with root package name */
    private final h f54052d;

    public c(h hVar, h hVar2, h hVar3, h hVar4) {
        this.f54049a = hVar;
        this.f54050b = hVar2;
        this.f54051c = hVar3;
        this.f54052d = hVar4;
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
        return c((Context) this.f54049a.get(), (e.a) this.f54050b.get(), (f) this.f54051c.get(), (CoroutineDispatcher) this.f54052d.get());
    }
}
