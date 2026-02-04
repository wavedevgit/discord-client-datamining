package uo;

import android.content.Context;
import kotlinx.coroutines.CoroutineDispatcher;
import wq.h;
import yo.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements wq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f50810a;

    /* renamed from: b  reason: collision with root package name */
    private final h f50811b;

    /* renamed from: c  reason: collision with root package name */
    private final h f50812c;

    /* renamed from: d  reason: collision with root package name */
    private final h f50813d;

    public c(h hVar, h hVar2, h hVar3, h hVar4) {
        this.f50810a = hVar;
        this.f50811b = hVar2;
        this.f50812c = hVar3;
        this.f50813d = hVar4;
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
        return c((Context) this.f50810a.get(), (e.a) this.f50811b.get(), (f) this.f50812c.get(), (CoroutineDispatcher) this.f50813d.get());
    }
}
