package pb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f45028a;

    /* renamed from: b  reason: collision with root package name */
    private final a f45029b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45030c;

    public f(Context context, int i10) {
        this.f45028a = context;
        this.f45030c = i10;
        a aVar = new a(5);
        this.f45029b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // pb.i
    public h get() {
        return new e(new g(this.f45028a, this.f45029b), new b(this.f45028a, this.f45029b), new l(), new c(this.f45028a), new j(this.f45030c), new d(), new k(), new l());
    }
}
