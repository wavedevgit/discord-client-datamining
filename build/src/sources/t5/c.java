package t5;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.RectF;
import com.airbnb.lottie.n;
import java.util.ArrayList;
import java.util.List;
import l5.a0;
import o5.q;
import t5.e;
import u0.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends b {
    private o5.a D;
    private final List E;
    private final RectF F;
    private final RectF G;
    private final Paint H;
    private float I;
    private boolean J;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f49255a;

        static {
            int[] iArr = new int[e.b.values().length];
            f49255a = iArr;
            try {
                iArr[e.b.ADD.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f49255a[e.b.INVERT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    public c(n nVar, e eVar, List list, l5.i iVar) {
        super(nVar, eVar);
        int i10;
        b bVar;
        this.E = new ArrayList();
        this.F = new RectF();
        this.G = new RectF();
        this.H = new Paint();
        this.J = true;
        r5.b v10 = eVar.v();
        if (v10 != null) {
            o5.a a10 = v10.a();
            this.D = a10;
            i(a10);
            this.D.a(this);
        } else {
            this.D = null;
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
                jVar.g(v11.A().e(), v11);
                if (bVar2 != null) {
                    bVar2.J(v11);
                    bVar2 = null;
                } else {
                    this.E.add(0, v11);
                    int i11 = a.f49255a[eVar2.i().ordinal()];
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

    @Override // t5.b
    protected void I(q5.e eVar, int i10, List list, q5.e eVar2) {
        for (int i11 = 0; i11 < this.E.size(); i11++) {
            ((b) this.E.get(i11)).c(eVar, i10, list, eVar2);
        }
    }

    @Override // t5.b
    public void K(boolean z10) {
        super.K(z10);
        for (b bVar : this.E) {
            bVar.K(z10);
        }
    }

    @Override // t5.b
    public void M(float f10) {
        l5.e.b("CompositionLayer#setProgress");
        this.I = f10;
        super.M(f10);
        if (this.D != null) {
            f10 = ((((Float) this.D.h()).floatValue() * this.f49243q.c().i()) - this.f49243q.c().p()) / (this.f49242p.K().e() + 0.01f);
        }
        if (this.D == null) {
            f10 -= this.f49243q.s();
        }
        if (this.f49243q.w() != 0.0f && !"__container".equals(this.f49243q.j())) {
            f10 /= this.f49243q.w();
        }
        for (int size = this.E.size() - 1; size >= 0; size--) {
            ((b) this.E.get(size)).M(f10);
        }
        l5.e.c("CompositionLayer#setProgress");
    }

    public float P() {
        return this.I;
    }

    public void Q(boolean z10) {
        this.J = z10;
    }

    @Override // t5.b, q5.f
    public void d(Object obj, y5.c cVar) {
        super.d(obj, cVar);
        if (obj == a0.E) {
            if (cVar == null) {
                o5.a aVar = this.D;
                if (aVar != null) {
                    aVar.o(null);
                    return;
                }
                return;
            }
            q qVar = new q(cVar);
            this.D = qVar;
            qVar.a(this);
            i(this.D);
        }
    }

    @Override // t5.b, n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        super.e(rectF, matrix, z10);
        for (int size = this.E.size() - 1; size >= 0; size--) {
            this.F.set(0.0f, 0.0f, 0.0f, 0.0f);
            ((b) this.E.get(size)).e(this.F, this.f49241o, true);
            rectF.union(this.F);
        }
    }

    @Override // t5.b
    void u(Canvas canvas, Matrix matrix, int i10) {
        boolean z10;
        boolean clipRect;
        l5.e.b("CompositionLayer#draw");
        this.G.set(0.0f, 0.0f, this.f49243q.m(), this.f49243q.l());
        matrix.mapRect(this.G);
        if (this.f49242p.g0() && this.E.size() > 1 && i10 != 255) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.H.setAlpha(i10);
            x5.j.m(canvas, this.G, this.H);
        } else {
            canvas.save();
        }
        if (z10) {
            i10 = 255;
        }
        for (int size = this.E.size() - 1; size >= 0; size--) {
            if ((this.J || !"__container".equals(this.f49243q.j())) && !this.G.isEmpty()) {
                clipRect = canvas.clipRect(this.G);
            } else {
                clipRect = true;
            }
            if (clipRect) {
                ((b) this.E.get(size)).g(canvas, matrix, i10);
            }
        }
        canvas.restore();
        l5.e.c("CompositionLayer#draw");
    }
}
