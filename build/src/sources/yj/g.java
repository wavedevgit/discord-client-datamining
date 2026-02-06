package yj;

import com.google.android.gms.tasks.Task;
import java.util.List;
import java.util.concurrent.Executor;
import ng.cl;
import ng.mf;
import ng.nk;
import ng.of;
import ng.qk;
import ng.we;
import ng.ye;
import ng.ze;
import vj.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends ak.e implements vj.a {

    /* renamed from: x  reason: collision with root package name */
    private static final vj.b f55391x = new b.a().a();

    /* renamed from: s  reason: collision with root package name */
    private final boolean f55392s;

    /* renamed from: t  reason: collision with root package name */
    private final vj.b f55393t;

    /* renamed from: u  reason: collision with root package name */
    final cl f55394u;

    /* renamed from: v  reason: collision with root package name */
    private int f55395v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f55396w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(vj.b bVar, k kVar, Executor executor, nk nkVar, tj.i iVar) {
        super(kVar, executor);
        we weVar;
        bVar.b();
        this.f55393t = bVar;
        boolean f10 = b.f();
        this.f55392s = f10;
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
        this.f55394u = null;
    }

    private final Task z(Task task, final int i10, final int i11) {
        return task.r(new yg.j() { // from class: yj.e
            @Override // yg.j
            public final Task a(Object obj) {
                return g.this.y(i10, i11, (List) obj);
            }
        });
    }

    @Override // ef.f
    public final com.google.android.gms.common.d[] a() {
        return this.f55392s ? tj.l.f50632a : new com.google.android.gms.common.d[]{tj.l.f50633b};
    }

    @Override // ak.e, java.io.Closeable, java.lang.AutoCloseable
    public final synchronized void close() {
        super.close();
    }

    @Override // vj.a
    public final Task j(zj.a aVar) {
        return z(super.g(aVar), aVar.l(), aVar.h());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Task y(int i10, int i11, List list) {
        return yg.m.f(list);
    }
}
