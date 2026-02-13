package jp;

import android.content.Context;
import kotlinx.coroutines.CoroutineDispatcher;
import lr.h;
import np.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements lr.d {

    /* renamed from: a  reason: collision with root package name */
    private final h f31842a;

    /* renamed from: b  reason: collision with root package name */
    private final h f31843b;

    /* renamed from: c  reason: collision with root package name */
    private final h f31844c;

    /* renamed from: d  reason: collision with root package name */
    private final h f31845d;

    public c(h hVar, h hVar2, h hVar3, h hVar4) {
        this.f31842a = hVar;
        this.f31843b = hVar2;
        this.f31844c = hVar3;
        this.f31845d = hVar4;
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
        return c((Context) this.f31842a.get(), (e.a) this.f31843b.get(), (f) this.f31844c.get(), (CoroutineDispatcher) this.f31845d.get());
    }
}
