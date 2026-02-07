package zo;

import android.content.Context;
import br.h;
import dp.e;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements br.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f56458a;

    /* renamed from: b  reason: collision with root package name */
    private final h f56459b;

    /* renamed from: c  reason: collision with root package name */
    private final h f56460c;

    /* renamed from: d  reason: collision with root package name */
    private final h f56461d;

    public c(h hVar, h hVar2, h hVar3, h hVar4) {
        this.f56458a = hVar;
        this.f56459b = hVar2;
        this.f56460c = hVar3;
        this.f56461d = hVar4;
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
        return c((Context) this.f56458a.get(), (e.a) this.f56459b.get(), (f) this.f56460c.get(), (CoroutineDispatcher) this.f56461d.get());
    }
}
