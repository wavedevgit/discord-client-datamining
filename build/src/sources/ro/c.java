package ro;

import android.content.Context;
import kotlinx.coroutines.CoroutineDispatcher;
import tq.h;
import vo.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements tq.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f48436a;

    /* renamed from: b  reason: collision with root package name */
    private final h f48437b;

    /* renamed from: c  reason: collision with root package name */
    private final h f48438c;

    /* renamed from: d  reason: collision with root package name */
    private final h f48439d;

    public c(h hVar, h hVar2, h hVar3, h hVar4) {
        this.f48436a = hVar;
        this.f48437b = hVar2;
        this.f48438c = hVar3;
        this.f48439d = hVar4;
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
        return c((Context) this.f48436a.get(), (e.a) this.f48437b.get(), (f) this.f48438c.get(), (CoroutineDispatcher) this.f48439d.get());
    }
}
