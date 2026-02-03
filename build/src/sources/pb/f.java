package pb;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements i {

    /* renamed from: a  reason: collision with root package name */
    private final Context f45060a;

    /* renamed from: b  reason: collision with root package name */
    private final a f45061b;

    /* renamed from: c  reason: collision with root package name */
    private final int f45062c;

    public f(Context context, int i10) {
        this.f45060a = context;
        this.f45062c = i10;
        a aVar = new a(5);
        this.f45061b = aVar;
        aVar.a(context.getApplicationInfo().sourceDir);
    }

    @Override // pb.i
    public h get() {
        return new e(new g(this.f45060a, this.f45061b), new b(this.f45060a, this.f45061b), new l(), new c(this.f45060a), new j(this.f45062c), new d(), new k(), new l());
    }
}
