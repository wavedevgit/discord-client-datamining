package uj;

import com.google.android.gms.tasks.Task;
import java.util.List;
import java.util.concurrent.Executor;
import mg.cl;
import mg.mf;
import mg.nk;
import mg.of;
import mg.qk;
import mg.we;
import mg.ye;
import mg.ze;
import rj.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends wj.e implements rj.a {

    /* renamed from: x  reason: collision with root package name */
    private static final rj.b f50651x = new b.a().a();

    /* renamed from: s  reason: collision with root package name */
    private final boolean f50652s;

    /* renamed from: t  reason: collision with root package name */
    private final rj.b f50653t;

    /* renamed from: u  reason: collision with root package name */
    final cl f50654u;

    /* renamed from: v  reason: collision with root package name */
    private int f50655v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f50656w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(rj.b bVar, k kVar, Executor executor, nk nkVar, pj.i iVar) {
        super(kVar, executor);
        we weVar;
        bVar.b();
        this.f50653t = bVar;
        boolean f10 = b.f();
        this.f50652s = f10;
        mf mfVar = new mf();
        mfVar.i(b.c(bVar));
        of j10 = mfVar.j();
        ze zeVar = new ze();
        if (f10) {
            weVar = we.TYPE_THICK;
        } else {
            weVar = we.TYPE_THIN;
        }
        zeVar.e(weVar);
        zeVar.g(j10);
        nkVar.d(qk.f(zeVar, 1), ye.ON_DEVICE_BARCODE_CREATE);
        this.f50654u = null;
    }

    private final Task L(Task task, final int i10, final int i11) {
        return task.r(new wg.j() { // from class: uj.e
            @Override // wg.j
            public final Task a(Object obj) {
                return g.this.F(i10, i11, (List) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Task F(int i10, int i11, List list) {
        return wg.m.f(list);
    }

    @Override // ef.f
    public final com.google.android.gms.common.d[] a() {
        return this.f50652s ? pj.l.f46052a : new com.google.android.gms.common.d[]{pj.l.f46053b};
    }

    @Override // wj.e, java.io.Closeable, java.lang.AutoCloseable, rj.a
    public final synchronized void close() {
        super.close();
    }

    @Override // rj.a
    public final Task g(vj.a aVar) {
        return L(super.l(aVar), aVar.l(), aVar.h());
    }
}
