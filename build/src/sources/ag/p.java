package ag;

import android.content.Context;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.tasks.Task;
import ef.a;
import ef.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends ef.d implements te.b {

    /* renamed from: m  reason: collision with root package name */
    private static final a.g f617m;

    /* renamed from: n  reason: collision with root package name */
    private static final a.AbstractC0286a f618n;

    /* renamed from: o  reason: collision with root package name */
    private static final ef.a f619o;

    /* renamed from: k  reason: collision with root package name */
    private final Context f620k;

    /* renamed from: l  reason: collision with root package name */
    private final com.google.android.gms.common.g f621l;

    static {
        a.g gVar = new a.g();
        f617m = gVar;
        n nVar = new n();
        f618n = nVar;
        f619o = new ef.a("AppSet.API", nVar, gVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(Context context, com.google.android.gms.common.g gVar) {
        super(context, f619o, a.d.f21490c, d.a.f21502c);
        this.f620k = context;
        this.f621l = gVar;
    }

    @Override // te.b
    public final Task g() {
        if (this.f621l.h(this.f620k, 212800000) == 0) {
            return p(ff.q.a().d(te.h.f50646a).b(new ff.m() { // from class: ag.m
                @Override // ff.m
                public final void accept(Object obj, Object obj2) {
                    ((g) ((d) obj).C()).h(new te.d(null, null), new o(p.this, (yg.k) obj2));
                }
            }).c(false).e(27601).a());
        }
        return yg.m.e(new ef.b(new Status(17)));
    }
}
