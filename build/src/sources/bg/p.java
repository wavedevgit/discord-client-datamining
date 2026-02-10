package bg;

import android.content.Context;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.tasks.Task;
import ff.a;
import ff.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends ff.d implements ue.b {

    /* renamed from: m  reason: collision with root package name */
    private static final a.g f6605m;

    /* renamed from: n  reason: collision with root package name */
    private static final a.AbstractC0331a f6606n;

    /* renamed from: o  reason: collision with root package name */
    private static final ff.a f6607o;

    /* renamed from: k  reason: collision with root package name */
    private final Context f6608k;

    /* renamed from: l  reason: collision with root package name */
    private final com.google.android.gms.common.g f6609l;

    static {
        a.g gVar = new a.g();
        f6605m = gVar;
        n nVar = new n();
        f6606n = nVar;
        f6607o = new ff.a("AppSet.API", nVar, gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Context context, com.google.android.gms.common.g gVar) {
        super(context, f6607o, a.d.f22598c, d.a.f22610c);
        this.f6608k = context;
        this.f6609l = gVar;
    }

    @Override // ue.b
    public final Task g() {
        if (this.f6609l.h(this.f6608k, 212800000) == 0) {
            return p(gf.q.a().d(ue.h.f51554a).b(new gf.m() { // from class: bg.m
                @Override // gf.m
                public final void accept(Object obj, Object obj2) {
                    ((g) ((d) obj).C()).h(new ue.d(null, null), new o(p.this, (zg.k) obj2));
                }
            }).c(false).e(27601).a());
        }
        return zg.m.e(new ff.b(new Status(17)));
    }
}
