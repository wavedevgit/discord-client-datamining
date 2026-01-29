package ak;

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
public final class p extends wj.e implements zj.c {

    /* renamed from: s  reason: collision with root package name */
    private final zj.d f679s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(d dVar, Executor executor, xj xjVar, zj.d dVar2) {
        super(dVar, executor);
        he heVar;
        this.f679s = dVar2;
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
        return b.a(this.f679s);
    }

    @Override // zj.c
    public final Task g(vj.a aVar) {
        return super.l(aVar);
    }
}
