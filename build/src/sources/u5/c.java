package u5;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.RectF;
import com.airbnb.lottie.n;
import java.util.ArrayList;
import java.util.List;
import l5.b0;
import o5.q;
import u0.j;
import u5.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends b {
    private o5.a E;
    private final List F;
    private final RectF G;
    private final RectF H;
    private final Paint I;
    private float J;
    private boolean K;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51284a;

        static {
            int[] iArr = new int[e.b.values().length];
            f51284a = iArr;
            try {
                iArr[e.b.ADD.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51284a[e.b.INVERT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    public c(n nVar, e eVar, List list, l5.i iVar) {
        super(nVar, eVar);
        int i10;
        b bVar;
        this.F = new ArrayList();
        this.G = new RectF();
        this.H = new RectF();
        this.I = new Paint();
        this.K = true;
        s5.b v10 = eVar.v();
        if (v10 != null) {
            o5.d a10 = v10.a();
            this.E = a10;
            i(a10);
            this.E.a(this);
        } else {
            this.E = null;
        }
        j jVar = new j(iVar.k().size());
        int size = list.size() - 1;
        b bVar2 = null;
        while (true) {
            if (size < 0) {
                break;
            }
            e eVar2 = (e) list.get(size);
            b v11 = b.v(this, eVar2, nVar, iVar);
            if (v11 != null) {
                jVar.h(v11.A().e(), v11);
                if (bVar2 != null) {
                    bVar2.J(v11);
                    bVar2 = null;
                } else {
                    this.F.add(0, v11);
                    int i11 = a.f51284a[eVar2.i().ordinal()];
                    if (i11 == 1 || i11 == 2) {
                        bVar2 = v11;
                    }
                }
            }
            size--;
        }
        for (i10 = 0; i10 < jVar.k(); i10++) {
            b bVar3 = (b) jVar.d(jVar.f(i10));
            if (bVar3 != null && (bVar = (b) jVar.d(bVar3.A().k())) != null) {
                bVar3.L(bVar);
            }
        }
    }

    @Override // u5.b
    protected void I(r5.e eVar, int i10, List list, r5.e eVar2) {
        for (int i11 = 0; i11 < this.F.size(); i11++) {
            ((b) this.F.get(i11)).e(eVar, i10, list, eVar2);
        }
    }

    @Override // u5.b
    public void K(boolean z10) {
        super.K(z10);
        for (b bVar : this.F) {
            bVar.K(z10);
        }
    }

    @Override // u5.b
    public void M(float f10) {
        if (l5.e.h()) {
            l5.e.b("CompositionLayer#setProgress");
        }
        this.J = f10;
        super.M(f10);
        if (this.E != null) {
            f10 = ((((Float) this.E.h()).floatValue() * this.f51272q.c().i()) - this.f51272q.c().p()) / (this.f51271p.J().e() + 0.01f);
        }
        if (this.E == null) {
            f10 -= this.f51272q.s();
        }
        if (this.f51272q.w() != 0.0f && !"__container".equals(this.f51272q.j())) {
            f10 /= this.f51272q.w();
        }
        for (int size = this.F.size() - 1; size >= 0; size--) {
            ((b) this.F.get(size)).M(f10);
        }
        if (l5.e.h()) {
            l5.e.c("CompositionLayer#setProgress");
        }
    }

    public float P() {
        return this.J;
    }

    public void Q(boolean z10) {
        this.K = z10;
    }

    @Override // u5.b, r5.f
    public void d(Object obj, z5.c cVar) {
        super.d(obj, cVar);
        if (obj == b0.E) {
            if (cVar == null) {
                o5.a aVar = this.E;
                if (aVar != null) {
                    aVar.o(null);
                    return;
                }
                return;
            }
            q qVar = new q(cVar);
            this.E = qVar;
            qVar.a(this);
            i(this.E);
        }
    }

    @Override // u5.b, n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        super.f(rectF, matrix, z10);
        for (int size = this.F.size() - 1; size >= 0; size--) {
            this.G.set(0.0f, 0.0f, 0.0f, 0.0f);
            ((b) this.F.get(size)).f(this.G, this.f51270o, true);
            rectF.union(this.G);
        }
    }

    @Override // u5.b
    void u(Canvas canvas, Matrix matrix, int i10) {
        boolean z10;
        boolean clipRect;
        if (l5.e.h()) {
            l5.e.b("CompositionLayer#draw");
        }
        this.H.set(0.0f, 0.0f, this.f51272q.m(), this.f51272q.l());
        matrix.mapRect(this.H);
        if (this.f51271p.f0() && this.F.size() > 1 && i10 != 255) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.I.setAlpha(i10);
            y5.j.n(canvas, this.H, this.I);
        } else {
            canvas.save();
        }
        if (z10) {
            i10 = 255;
        }
        for (int size = this.F.size() - 1; size >= 0; size--) {
            if ((this.K || !"__container".equals(this.f51272q.j())) && !this.H.isEmpty()) {
                clipRect = canvas.clipRect(this.H);
            } else {
                clipRect = true;
            }
            if (clipRect) {
                ((b) this.F.get(size)).h(canvas, matrix, i10);
            }
        }
        canvas.restore();
        if (l5.e.h()) {
            l5.e.c("CompositionLayer#draw");
        }
    }
}
