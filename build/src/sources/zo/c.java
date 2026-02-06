package zo;

import android.content.Context;
import br.h;
import dp.e;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f56410a;

    /* renamed from: b  reason: collision with root package name */
    private final h f56411b;

    /* renamed from: c  reason: collision with root package name */
    private final h f56412c;

    /* renamed from: d  reason: collision with root package name */
    private final h f56413d;

    public c(h hVar, h hVar2, h hVar3, h hVar4) {
        this.f56410a = hVar;
        this.f56411b = hVar2;
        this.f56412c = hVar3;
        this.f56413d = hVar4;
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
        return c((Context) this.f56410a.get(), (e.a) this.f56411b.get(), (f) this.f56412c.get(), (CoroutineDispatcher) this.f56413d.get());
    }
}
