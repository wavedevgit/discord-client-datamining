package uo;

import android.content.Context;
import kotlinx.coroutines.CoroutineDispatcher;
import wq.h;
import yo.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f50813a;

    /* renamed from: b  reason: collision with root package name */
    private final h f50814b;

    /* renamed from: c  reason: collision with root package name */
    private final h f50815c;

    /* renamed from: d  reason: collision with root package name */
    private final h f50816d;

    public c(h hVar, h hVar2, h hVar3, h hVar4) {
        this.f50813a = hVar;
        this.f50814b = hVar2;
        this.f50815c = hVar3;
        this.f50816d = hVar4;
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
        return c((Context) this.f50813a.get(), (e.a) this.f50814b.get(), (f) this.f50815c.get(), (CoroutineDispatcher) this.f50816d.get());
    }
}
