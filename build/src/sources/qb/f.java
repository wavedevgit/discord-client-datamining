package qb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f44586a;

    /* renamed from: b  reason: collision with root package name */
    private final a f44587b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44588c;

    public f(Context context, int i10) {
        this.f44586a = context;
        this.f44588c = i10;
        a aVar = new a(5);
        this.f44587b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // qb.i
    public h get() {
        return new e(new g(this.f44586a, this.f44587b), new b(this.f44586a, this.f44587b), new l(), new c(this.f44586a), new j(this.f44588c), new d(), new k(), new l());
    }
}
