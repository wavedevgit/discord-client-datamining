package pb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f45102a;

    /* renamed from: b  reason: collision with root package name */
    private final a f45103b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45104c;

    public f(Context context, int i10) {
        this.f45102a = context;
        this.f45104c = i10;
        a aVar = new a(5);
        this.f45103b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // pb.i
    public h get() {
        return new e(new g(this.f45102a, this.f45103b), new b(this.f45102a, this.f45103b), new l(), new c(this.f45102a), new j(this.f45104c), new d(), new k(), new l());
    }
}
