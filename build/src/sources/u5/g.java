package u5;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.RectF;
import com.airbnb.lottie.n;
import java.util.Collections;
import java.util.List;
import t5.q;
import w5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends b {
    private final n5.d E;
    private final c F;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(n nVar, e eVar, c cVar, l5.i iVar) {
        super(nVar, eVar);
        this.F = cVar;
        n5.d dVar = new n5.d(nVar, this, new q("__container", eVar.o(), false), iVar);
        this.E = dVar;
        List list = Collections.EMPTY_LIST;
        dVar.b(list, list);
    }

    @Override // u5.b
    protected void I(r5.e eVar, int i10, List list, r5.e eVar2) {
        this.E.e(eVar, i10, list, eVar2);
    }

    @Override // u5.b, n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        super.f(rectF, matrix, z10);
        this.E.f(rectF, this.f51018o, z10);
    }

    @Override // u5.b
    void u(Canvas canvas, Matrix matrix, int i10) {
        this.E.h(canvas, matrix, i10);
    }

    @Override // u5.b
    public t5.a x() {
        t5.a x10 = super.x();
        if (x10 != null) {
            return x10;
        }
        return this.F.x();
    }

    @Override // u5.b
    public j z() {
        j z10 = super.z();
        if (z10 != null) {
            return z10;
        }
        return this.F.z();
    }
}
