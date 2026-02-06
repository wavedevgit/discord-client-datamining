package t5;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.RectF;
import com.airbnb.lottie.n;
import java.util.Collections;
import java.util.List;
import s5.q;
import v5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends b {
    private final n5.d D;
    private final c E;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(n nVar, e eVar, c cVar, l5.i iVar) {
        super(nVar, eVar);
        this.E = cVar;
        n5.d dVar = new n5.d(nVar, this, new q("__container", eVar.o(), false), iVar);
        this.D = dVar;
        List list = Collections.EMPTY_LIST;
        dVar.b(list, list);
    }

    @Override // t5.b
    protected void I(q5.e eVar, int i10, List list, q5.e eVar2) {
        this.D.c(eVar, i10, list, eVar2);
    }

    @Override // t5.b, n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        super.e(rectF, matrix, z10);
        this.D.e(rectF, this.f50318o, z10);
    }

    @Override // t5.b
    void u(Canvas canvas, Matrix matrix, int i10) {
        this.D.g(canvas, matrix, i10);
    }

    @Override // t5.b
    public s5.a x() {
        s5.a x10 = super.x();
        if (x10 != null) {
            return x10;
        }
        return this.E.x();
    }

    @Override // t5.b
    public j z() {
        j z10 = super.z();
        if (z10 != null) {
            return z10;
        }
        return this.E.z();
    }
}
