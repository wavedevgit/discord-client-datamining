package zj;

import com.google.android.gms.tasks.Task;
import java.util.List;
import java.util.concurrent.Executor;
import og.cl;
import og.mf;
import og.nk;
import og.of;
import og.qk;
import og.we;
import og.ye;
import og.ze;
import wj.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends bk.e implements wj.a {

    /* renamed from: x  reason: collision with root package name */
    private static final wj.b f56464x = new b.a().a();

    /* renamed from: s  reason: collision with root package name */
    private final boolean f56465s;

    /* renamed from: t  reason: collision with root package name */
    private final wj.b f56466t;

    /* renamed from: u  reason: collision with root package name */
    final cl f56467u;

    /* renamed from: v  reason: collision with root package name */
    private int f56468v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f56469w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(wj.b bVar, k kVar, Executor executor, nk nkVar, uj.i iVar) {
        super(kVar, executor);
        we weVar;
        bVar.b();
        this.f56466t = bVar;
        boolean f10 = b.f();
        this.f56465s = f10;
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
        this.f56467u = null;
    }

    private final Task z(Task task, final int i10, final int i11) {
        return task.r(new zg.j() { // from class: zj.e
            @Override // zg.j
            public final Task a(Object obj) {
                return g.this.y(i10, i11, (List) obj);
            }
        });
    }

    @Override // ff.f
    public final com.google.android.gms.common.d[] a() {
        return this.f56465s ? uj.l.f51585a : new com.google.android.gms.common.d[]{uj.l.f51586b};
    }

    @Override // bk.e, java.io.Closeable, java.lang.AutoCloseable
    public final synchronized void close() {
        super.close();
    }

    @Override // wj.a
    public final Task h(ak.a aVar) {
        return z(super.g(aVar), aVar.l(), aVar.h());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Task y(int i10, int i11, List list) {
        return zg.m.f(list);
    }
}
