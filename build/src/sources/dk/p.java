package dk;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
import pg.ak;
import pg.he;
import pg.je;
import pg.ke;
import pg.ph;
import pg.th;
import pg.xj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends zj.e implements ck.c {

    /* renamed from: s  reason: collision with root package name */
    private final ck.d f20865s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(d dVar, Executor executor, xj xjVar, ck.d dVar2) {
        super(dVar, executor);
        he heVar;
        this.f20865s = dVar2;
        ke keVar = new ke();
        if (dVar2.d()) {
            heVar = he.TYPE_THICK;
        } else {
            heVar = he.TYPE_THIN;
        }
        keVar.e(heVar);
        ph phVar = new ph();
        th thVar = new th();
        thVar.a(a.a(dVar2.h()));
        phVar.e(thVar.c());
        keVar.h(phVar.f());
        xjVar.d(ak.f(keVar, 1), je.ON_DEVICE_TEXT_CREATE);
    }

    @Override // ef.f
    public final com.google.android.gms.common.d[] a() {
        return b.a(this.f20865s);
    }

    @Override // ck.c
    public final Task e(yj.a aVar) {
        return super.k(aVar);
    }
}
