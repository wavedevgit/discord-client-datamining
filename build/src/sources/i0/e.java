package i0;

import a0.o;
import a0.q;
import a0.s;
import a0.u;
import a0.v;
import androidx.camera.core.n;
import x.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e extends a {
    public e(int i10, c cVar) {
        super(i10, cVar);
    }

    private boolean e(p0 p0Var) {
        u a10 = v.a(p0Var);
        if ((a10.h() != q.LOCKED_FOCUSED && a10.h() != q.PASSIVE_FOCUSED) || a10.k() != o.CONVERGED || a10.i() != s.CONVERGED) {
            return false;
        }
        return true;
    }

    public void d(n nVar) {
        if (e(nVar.z())) {
            super.b(nVar);
        } else {
            this.f28331d.a(nVar);
        }
    }
}
