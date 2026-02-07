package pb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f43835a;

    /* renamed from: b  reason: collision with root package name */
    private final a f43836b;

    /* renamed from: c  reason: collision with root package name */
    private final int f43837c;

    public f(Context context, int i10) {
        this.f43835a = context;
        this.f43837c = i10;
        a aVar = new a(5);
        this.f43836b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // pb.i
    public h get() {
        return new e(new g(this.f43835a, this.f43836b), new b(this.f43835a, this.f43836b), new l(), new c(this.f43835a), new j(this.f43837c), new d(), new k(), new l());
    }
}
