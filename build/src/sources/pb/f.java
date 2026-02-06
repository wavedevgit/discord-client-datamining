package pb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f43787a;

    /* renamed from: b  reason: collision with root package name */
    private final a f43788b;

    /* renamed from: c  reason: collision with root package name */
    private final int f43789c;

    public f(Context context, int i10) {
        this.f43787a = context;
        this.f43789c = i10;
        a aVar = new a(5);
        this.f43788b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // pb.i
    public h get() {
        return new e(new g(this.f43787a, this.f43788b), new b(this.f43787a, this.f43788b), new l(), new c(this.f43787a), new j(this.f43789c), new d(), new k(), new l());
    }
}
