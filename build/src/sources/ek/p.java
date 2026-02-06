package ek;

import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executor;
import qg.ak;
import qg.he;
import qg.je;
import qg.ke;
import qg.ph;
import qg.th;
import qg.xj;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p extends ak.e implements dk.c {

    /* renamed from: s  reason: collision with root package name */
    private final dk.d f21612s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(d dVar, Executor executor, xj xjVar, dk.d dVar2) {
        super(dVar, executor);
        he heVar;
        this.f21612s = dVar2;
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
        return b.a(this.f21612s);
    }

    @Override // dk.c
    public final Task j(zj.a aVar) {
        return super.g(aVar);
    }
}
