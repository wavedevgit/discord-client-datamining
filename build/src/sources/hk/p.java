package hk;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
import rg.ak;
import rg.he;
import rg.je;
import rg.ke;
import rg.ph;
import rg.th;
import rg.xj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends dk.e implements gk.c {

    /* renamed from: s  reason: collision with root package name */
    private final gk.d f27969s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(d dVar, Executor executor, xj xjVar, gk.d dVar2) {
        super(dVar, executor);
        he heVar;
        this.f27969s = dVar2;
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

    @Override // ff.f
    public final com.google.android.gms.common.d[] a() {
        return b.a(this.f27969s);
    }

    @Override // gk.c
    public final Task e(ck.a aVar) {
        return super.h(aVar);
    }
}
