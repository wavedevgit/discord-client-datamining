package qb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f44018a;

    /* renamed from: b  reason: collision with root package name */
    private final a f44019b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44020c;

    public f(Context context, int i10) {
        this.f44018a = context;
        this.f44020c = i10;
        a aVar = new a(5);
        this.f44019b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // qb.i
    public h get() {
        return new e(new g(this.f44018a, this.f44019b), new b(this.f44018a, this.f44019b), new l(), new c(this.f44018a), new j(this.f44020c), new d(), new k(), new l());
    }
}
