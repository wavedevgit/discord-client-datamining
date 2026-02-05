package pb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f44990a;

    /* renamed from: b  reason: collision with root package name */
    private final a f44991b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44992c;

    public f(Context context, int i10) {
        this.f44990a = context;
        this.f44992c = i10;
        a aVar = new a(5);
        this.f44991b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // pb.i
    public h get() {
        return new e(new g(this.f44990a, this.f44991b), new b(this.f44990a, this.f44991b), new l(), new c(this.f44990a), new j(this.f44992c), new d(), new k(), new l());
    }
}
