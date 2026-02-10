package qb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f44017a;

    /* renamed from: b  reason: collision with root package name */
    private final a f44018b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44019c;

    public f(Context context, int i10) {
        this.f44017a = context;
        this.f44019c = i10;
        a aVar = new a(5);
        this.f44018b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // qb.i
    public h get() {
        return new e(new g(this.f44017a, this.f44018b), new b(this.f44017a, this.f44018b), new l(), new c(this.f44017a), new j(this.f44019c), new d(), new k(), new l());
    }
}
