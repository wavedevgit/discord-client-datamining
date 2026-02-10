package qb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f45349a;

    /* renamed from: b  reason: collision with root package name */
    private final a f45350b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45351c;

    public f(Context context, int i10) {
        this.f45349a = context;
        this.f45351c = i10;
        a aVar = new a(5);
        this.f45350b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // qb.i
    public h get() {
        return new e(new g(this.f45349a, this.f45350b), new b(this.f45349a, this.f45350b), new l(), new c(this.f45349a), new j(this.f45351c), new d(), new k(), new l());
    }
}
