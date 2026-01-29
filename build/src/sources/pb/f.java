package pb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f45012a;

    /* renamed from: b  reason: collision with root package name */
    private final a f45013b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45014c;

    public f(Context context, int i10) {
        this.f45012a = context;
        this.f45014c = i10;
        a aVar = new a(5);
        this.f45013b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // pb.i
    public h get() {
        return new e(new g(this.f45012a, this.f45013b), new b(this.f45012a, this.f45013b), new l(), new c(this.f45012a), new j(this.f45014c), new d(), new k(), new l());
    }
}
