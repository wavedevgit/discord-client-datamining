package x;

import a0.q2;
import android.graphics.Matrix;
import b0.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class v0 implements p0 {
    public static p0 e(q2 q2Var, long j10, int i10, Matrix matrix) {
        return new d(q2Var, j10, i10, matrix);
    }

    @Override // x.p0
    public abstract long a();

    @Override // x.p0
    public void b(h.b bVar) {
        bVar.m(d());
    }

    @Override // x.p0
    public abstract q2 c();

    @Override // x.p0
    public abstract int d();

    public abstract Matrix f();
}
