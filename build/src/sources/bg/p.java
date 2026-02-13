package bg;

import android.content.Context;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends ff.d implements ue.b {

    /* renamed from: m  reason: collision with root package name */
    private static final a.g f6711m;

    /* renamed from: n  reason: collision with root package name */
    private static final a.AbstractC0316a f6712n;

    /* renamed from: o  reason: collision with root package name */
    private static final ff.a f6713o;

    /* renamed from: k  reason: collision with root package name */
    private final Context f6714k;

    /* renamed from: l  reason: collision with root package name */
    private final com.google.android.gms.common.g f6715l;

    static {
        a.g gVar = new a.g();
        f6711m = gVar;
        n nVar = new n();
        f6712n = nVar;
        f6713o = new ff.a("AppSet.API", nVar, gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Context context, com.google.android.gms.common.g gVar) {
        super(context, f6713o, a.d.f23724g, d.a.f23736c);
        this.f6714k = context;
        this.f6715l = gVar;
    }

    @Override // ue.b
    public final Task g() {
        if (this.f6715l.h(this.f6714k, 212800000) == 0) {
            return p(gf.q.a().d(ue.h.f51302a).b(new gf.m() { // from class: bg.m
                @Override // gf.m
                public final void accept(Object obj, Object obj2) {
                    ((g) ((d) obj).C()).i(new ue.d(null, null), new o(p.this, (zg.k) obj2));
                }
            }).c(false).e(27601).a());
        }
        return zg.m.e(new ff.b(new Status(17)));
    }
}
