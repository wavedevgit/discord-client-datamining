package xj;

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
import uj.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g extends zj.e implements uj.a {

    /* renamed from: x  reason: collision with root package name */
    private static final uj.b f53887x = new b.a().a();

    /* renamed from: s  reason: collision with root package name */
    private final boolean f53888s;

    /* renamed from: t  reason: collision with root package name */
    private final uj.b f53889t;

    /* renamed from: u  reason: collision with root package name */
    final cl f53890u;

    /* renamed from: v  reason: collision with root package name */
    private int f53891v;

    /* renamed from: w  reason: collision with root package name */
    private boolean f53892w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public g(uj.b bVar, k kVar, Executor executor, nk nkVar, sj.i iVar) {
        super(kVar, executor);
        we weVar;
        bVar.b();
        this.f53889t = bVar;
        boolean f10 = b.f();
        this.f53888s = f10;
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
        this.f53890u = null;
    }

    private final Task L(Task task, final int i10, final int i11) {
        return task.r(new xg.j() { // from class: xj.e
            @Override // xg.j
            public final Task a(Object obj) {
                return g.this.F(i10, i11, (List) obj);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ Task F(int i10, int i11, List list) {
        return xg.m.f(list);
    }

    @Override // ef.f
    public final com.google.android.gms.common.d[] a() {
        return this.f53888s ? sj.l.f49668a : new com.google.android.gms.common.d[]{sj.l.f49669b};
    }

    @Override // zj.e, java.io.Closeable, java.lang.AutoCloseable, uj.a
    public final synchronized void close() {
        super.close();
    }

    @Override // uj.a
    public final Task e(yj.a aVar) {
        return L(super.k(aVar), aVar.l(), aVar.h());
    }
}
