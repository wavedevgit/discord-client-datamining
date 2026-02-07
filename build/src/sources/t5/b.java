package t5;

import android.graphics.BlurMaskFilter;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.graphics.RectF;
import android.os.Build;
import com.airbnb.lottie.n;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import o5.a;
import o5.p;
import s5.i;
import t5.e;
import x5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b implements n5.e, a.b, q5.f {
    private Paint A;
    float B;
    BlurMaskFilter C;

    /* renamed from: a  reason: collision with root package name */
    private final Path f50352a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f50353b = new Matrix();

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f50354c = new Matrix();

    /* renamed from: d  reason: collision with root package name */
    private final Paint f50355d = new m5.a(1);

    /* renamed from: e  reason: collision with root package name */
    private final Paint f50356e;

    /* renamed from: f  reason: collision with root package name */
    private final Paint f50357f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f50358g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f50359h;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f50360i;

    /* renamed from: j  reason: collision with root package name */
    private final RectF f50361j;

    /* renamed from: k  reason: collision with root package name */
    private final RectF f50362k;

    /* renamed from: l  reason: collision with root package name */
    private final RectF f50363l;

    /* renamed from: m  reason: collision with root package name */
    private final RectF f50364m;

    /* renamed from: n  reason: collision with root package name */
    private final String f50365n;

    /* renamed from: o  reason: collision with root package name */
    final Matrix f50366o;

    /* renamed from: p  reason: collision with root package name */
    final n f50367p;

    /* renamed from: q  reason: collision with root package name */
    final e f50368q;

    /* renamed from: r  reason: collision with root package name */
    private o5.h f50369r;

    /* renamed from: s  reason: collision with root package name */
    private o5.d f50370s;

    /* renamed from: t  reason: collision with root package name */
    private b f50371t;

    /* renamed from: u  reason: collision with root package name */
    private b f50372u;

    /* renamed from: v  reason: collision with root package name */
    private List f50373v;

    /* renamed from: w  reason: collision with root package name */
    private final List f50374w;

    /* renamed from: x  reason: collision with root package name */
    final p f50375x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f50376y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f50377z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50378a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f50379b;

        static {
            int[] iArr = new int[i.a.values().length];
            f50379b = iArr;
            try {
                iArr[i.a.MASK_MODE_NONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50379b[i.a.MASK_MODE_SUBTRACT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50379b[i.a.MASK_MODE_INTERSECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f50379b[i.a.MASK_MODE_ADD.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            int[] iArr2 = new int[e.a.values().length];
            f50378a = iArr2;
            try {
                iArr2[e.a.SHAPE.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f50378a[e.a.PRE_COMP.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f50378a[e.a.SOLID.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f50378a[e.a.IMAGE.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f50378a[e.a.NULL.ordinal()] = 5;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f50378a[e.a.TEXT.ordinal()] = 6;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f50378a[e.a.UNKNOWN.ordinal()] = 7;
            } catch (NoSuchFieldError unused11) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(n nVar, e eVar) {
        PorterDuff.Mode mode = PorterDuff.Mode.DST_IN;
        this.f50356e = new m5.a(1, mode);
        PorterDuff.Mode mode2 = PorterDuff.Mode.DST_OUT;
        this.f50357f = new m5.a(1, mode2);
        m5.a aVar = new m5.a(1);
        this.f50358g = aVar;
        this.f50359h = new m5.a(PorterDuff.Mode.CLEAR);
        this.f50360i = new RectF();
        this.f50361j = new RectF();
        this.f50362k = new RectF();
        this.f50363l = new RectF();
        this.f50364m = new RectF();
        this.f50366o = new Matrix();
        this.f50374w = new ArrayList();
        this.f50376y = true;
        this.B = 0.0f;
        this.f50367p = nVar;
        this.f50368q = eVar;
        this.f50365n = eVar.j() + "#draw";
        if (eVar.i() == e.b.INVERT) {
            aVar.setXfermode(new PorterDuffXfermode(mode2));
        } else {
            aVar.setXfermode(new PorterDuffXfermode(mode));
        }
        p b10 = eVar.x().b();
        this.f50375x = b10;
        b10.b(this);
        if (eVar.h() != null && !eVar.h().isEmpty()) {
            o5.h hVar = new o5.h(eVar.h());
            this.f50369r = hVar;
            for (o5.a aVar2 : hVar.a()) {
                aVar2.a(this);
            }
            for (o5.a aVar3 : this.f50369r.c()) {
                i(aVar3);
                aVar3.a(this);
            }
        }
        O();
    }

    private void D(RectF rectF, Matrix matrix) {
        this.f50362k.set(0.0f, 0.0f, 0.0f, 0.0f);
        if (B()) {
            int size = this.f50369r.b().size();
            for (int i10 = 0; i10 < size; i10++) {
                s5.i iVar = (s5.i) this.f50369r.b().get(i10);
                Path path = (Path) ((o5.a) this.f50369r.a().get(i10)).h();
                if (path != null) {
                    this.f50352a.set(path);
                    this.f50352a.transform(matrix);
                    int i11 = a.f50379b[iVar.a().ordinal()];
                    if (i11 != 1 && i11 != 2) {
                        if ((i11 != 3 && i11 != 4) || !iVar.d()) {
                            this.f50352a.computeBounds(this.f50364m, false);
                            if (i10 == 0) {
                                this.f50362k.set(this.f50364m);
                            } else {
                                RectF rectF2 = this.f50362k;
                                rectF2.set(Math.min(rectF2.left, this.f50364m.left), Math.min(this.f50362k.top, this.f50364m.top), Math.max(this.f50362k.right, this.f50364m.right), Math.max(this.f50362k.bottom, this.f50364m.bottom));
                            }
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                }
            }
            if (!rectF.intersect(this.f50362k)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void E(RectF rectF, Matrix matrix) {
        if (C() && this.f50368q.i() != e.b.INVERT) {
            this.f50363l.set(0.0f, 0.0f, 0.0f, 0.0f);
            this.f50371t.e(this.f50363l, matrix, true);
            if (!rectF.intersect(this.f50363l)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void F() {
        this.f50367p.invalidateSelf();
    }

    private void G(float f10) {
        this.f50367p.K().n().a(this.f50368q.j(), f10);
    }

    private void N(boolean z10) {
        if (z10 != this.f50376y) {
            this.f50376y = z10;
            F();
        }
    }

    private void O() {
        boolean z10 = true;
        if (!this.f50368q.f().isEmpty()) {
            o5.d dVar = new o5.d(this.f50368q.f());
            this.f50370s = dVar;
            dVar.m();
            this.f50370s.a(new a.b() { // from class: t5.a
                @Override // o5.a.b
                public final void a() {
                    b.f(b.this);
                }
            });
            if (((Float) this.f50370s.h()).floatValue() != 1.0f) {
                z10 = false;
            }
            N(z10);
            i(this.f50370s);
            return;
        }
        N(true);
    }

    public static /* synthetic */ void f(b bVar) {
        boolean z10;
        if (bVar.f50370s.q() == 1.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        bVar.N(z10);
    }

    private void j(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        this.f50352a.set((Path) aVar.h());
        this.f50352a.transform(matrix);
        this.f50355d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f50352a, this.f50355d);
    }

    private void k(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f50360i, this.f50356e);
        this.f50352a.set((Path) aVar.h());
        this.f50352a.transform(matrix);
        this.f50355d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f50352a, this.f50355d);
        canvas.restore();
    }

    private void l(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f50360i, this.f50355d);
        canvas.drawRect(this.f50360i, this.f50355d);
        this.f50352a.set((Path) aVar.h());
        this.f50352a.transform(matrix);
        this.f50355d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f50352a, this.f50357f);
        canvas.restore();
    }

    private void m(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f50360i, this.f50356e);
        canvas.drawRect(this.f50360i, this.f50355d);
        this.f50357f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f50352a.set((Path) aVar.h());
        this.f50352a.transform(matrix);
        canvas.drawPath(this.f50352a, this.f50357f);
        canvas.restore();
    }

    private void n(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f50360i, this.f50357f);
        canvas.drawRect(this.f50360i, this.f50355d);
        this.f50357f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f50352a.set((Path) aVar.h());
        this.f50352a.transform(matrix);
        canvas.drawPath(this.f50352a, this.f50357f);
        canvas.restore();
    }

    private void o(Canvas canvas, Matrix matrix) {
        l5.e.b("Layer#saveLayer");
        j.n(canvas, this.f50360i, this.f50356e, 19);
        if (Build.VERSION.SDK_INT < 28) {
            s(canvas);
        }
        l5.e.c("Layer#saveLayer");
        for (int i10 = 0; i10 < this.f50369r.b().size(); i10++) {
            s5.i iVar = (s5.i) this.f50369r.b().get(i10);
            o5.a aVar = (o5.a) this.f50369r.a().get(i10);
            o5.a aVar2 = (o5.a) this.f50369r.c().get(i10);
            int i11 = a.f50379b[iVar.a().ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 != 3) {
                        if (i11 == 4) {
                            if (iVar.d()) {
                                l(canvas, matrix, aVar, aVar2);
                            } else {
                                j(canvas, matrix, aVar, aVar2);
                            }
                        }
                    } else if (iVar.d()) {
                        m(canvas, matrix, aVar, aVar2);
                    } else {
                        k(canvas, matrix, aVar, aVar2);
                    }
                } else {
                    if (i10 == 0) {
                        this.f50355d.setColor(-16777216);
                        this.f50355d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        canvas.drawRect(this.f50360i, this.f50355d);
                    }
                    if (iVar.d()) {
                        n(canvas, matrix, aVar, aVar2);
                    } else {
                        p(canvas, matrix, aVar);
                    }
                }
            } else if (q()) {
                this.f50355d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                canvas.drawRect(this.f50360i, this.f50355d);
            }
        }
        l5.e.b("Layer#restoreLayer");
        canvas.restore();
        l5.e.c("Layer#restoreLayer");
    }

    private void p(Canvas canvas, Matrix matrix, o5.a aVar) {
        this.f50352a.set((Path) aVar.h());
        this.f50352a.transform(matrix);
        canvas.drawPath(this.f50352a, this.f50357f);
    }

    private boolean q() {
        if (this.f50369r.a().isEmpty()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f50369r.b().size(); i10++) {
            if (((s5.i) this.f50369r.b().get(i10)).a() != i.a.MASK_MODE_NONE) {
                return false;
            }
        }
        return true;
    }

    private void r() {
        if (this.f50373v == null) {
            if (this.f50372u == null) {
                this.f50373v = Collections.EMPTY_LIST;
                return;
            }
            this.f50373v = new ArrayList();
            for (b bVar = this.f50372u; bVar != null; bVar = bVar.f50372u) {
                this.f50373v.add(bVar);
            }
        }
    }

    private void s(Canvas canvas) {
        l5.e.b("Layer#clearLayer");
        RectF rectF = this.f50360i;
        canvas.drawRect(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f, this.f50359h);
        l5.e.c("Layer#clearLayer");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b v(c cVar, e eVar, n nVar, l5.i iVar) {
        switch (a.f50378a[eVar.g().ordinal()]) {
            case 1:
                return new g(nVar, eVar, cVar, iVar);
            case 2:
                return new c(nVar, eVar, iVar.o(eVar.n()), iVar);
            case 3:
                return new h(nVar, eVar);
            case 4:
                return new d(nVar, eVar);
            case 5:
                return new f(nVar, eVar);
            case 6:
                return new i(nVar, eVar);
            default:
                x5.d.c("Unknown layer type " + eVar.g());
                return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e A() {
        return this.f50368q;
    }

    boolean B() {
        o5.h hVar = this.f50369r;
        if (hVar != null && !hVar.a().isEmpty()) {
            return true;
        }
        return false;
    }

    boolean C() {
        if (this.f50371t != null) {
            return true;
        }
        return false;
    }

    public void H(o5.a aVar) {
        this.f50374w.remove(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(b bVar) {
        this.f50371t = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (z10 && this.A == null) {
            this.A = new m5.a();
        }
        this.f50377z = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(b bVar) {
        this.f50372u = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(float f10) {
        l5.e.b("BaseLayer#setProgress");
        l5.e.b("BaseLayer#setProgress.transform");
        this.f50375x.j(f10);
        l5.e.c("BaseLayer#setProgress.transform");
        if (this.f50369r != null) {
            l5.e.b("BaseLayer#setProgress.mask");
            for (int i10 = 0; i10 < this.f50369r.a().size(); i10++) {
                ((o5.a) this.f50369r.a().get(i10)).n(f10);
            }
            l5.e.c("BaseLayer#setProgress.mask");
        }
        if (this.f50370s != null) {
            l5.e.b("BaseLayer#setProgress.inout");
            this.f50370s.n(f10);
            l5.e.c("BaseLayer#setProgress.inout");
        }
        if (this.f50371t != null) {
            l5.e.b("BaseLayer#setProgress.matte");
            this.f50371t.M(f10);
            l5.e.c("BaseLayer#setProgress.matte");
        }
        l5.e.b("BaseLayer#setProgress.animations." + this.f50374w.size());
        for (int i11 = 0; i11 < this.f50374w.size(); i11++) {
            ((o5.a) this.f50374w.get(i11)).n(f10);
        }
        l5.e.c("BaseLayer#setProgress.animations." + this.f50374w.size());
        l5.e.c("BaseLayer#setProgress");
    }

    @Override // o5.a.b
    public void a() {
        F();
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        b bVar = this.f50371t;
        if (bVar != null) {
            q5.e a10 = eVar2.a(bVar.getName());
            if (eVar.c(this.f50371t.getName(), i10)) {
                list.add(a10.i(this.f50371t));
            }
            if (eVar.h(getName(), i10)) {
                this.f50371t.I(eVar, eVar.e(this.f50371t.getName(), i10) + i10, list, a10);
            }
        }
        if (eVar.g(getName(), i10)) {
            if (!"__container".equals(getName())) {
                eVar2 = eVar2.a(getName());
                if (eVar.c(getName(), i10)) {
                    list.add(eVar2.i(this));
                }
            }
            if (eVar.h(getName(), i10)) {
                I(eVar, i10 + eVar.e(getName(), i10), list, eVar2);
            }
        }
    }

    @Override // q5.f
    public void d(Object obj, y5.c cVar) {
        this.f50375x.c(obj, cVar);
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f50360i.set(0.0f, 0.0f, 0.0f, 0.0f);
        r();
        this.f50366o.set(matrix);
        if (z10) {
            List list = this.f50373v;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.f50366o.preConcat(((b) this.f50373v.get(size)).f50375x.f());
                }
            } else {
                b bVar = this.f50372u;
                if (bVar != null) {
                    this.f50366o.preConcat(bVar.f50375x.f());
                }
            }
        }
        this.f50366o.preConcat(this.f50375x.f());
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        int i11;
        Paint paint;
        Integer num;
        l5.e.b(this.f50365n);
        if (this.f50376y && !this.f50368q.y()) {
            r();
            l5.e.b("Layer#parentMatrix");
            this.f50353b.reset();
            this.f50353b.set(matrix);
            for (int size = this.f50373v.size() - 1; size >= 0; size--) {
                this.f50353b.preConcat(((b) this.f50373v.get(size)).f50375x.f());
            }
            l5.e.c("Layer#parentMatrix");
            o5.a h10 = this.f50375x.h();
            if (h10 != null && (num = (Integer) h10.h()) != null) {
                i11 = num.intValue();
            } else {
                i11 = 100;
            }
            int i12 = (int) ((((i10 / 255.0f) * i11) / 100.0f) * 255.0f);
            if (!C() && !B()) {
                this.f50353b.preConcat(this.f50375x.f());
                l5.e.b("Layer#drawLayer");
                u(canvas, this.f50353b, i12);
                l5.e.c("Layer#drawLayer");
                G(l5.e.c(this.f50365n));
                return;
            }
            l5.e.b("Layer#computeBounds");
            e(this.f50360i, this.f50353b, false);
            E(this.f50360i, matrix);
            this.f50353b.preConcat(this.f50375x.f());
            D(this.f50360i, this.f50353b);
            this.f50361j.set(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
            canvas.getMatrix(this.f50354c);
            if (!this.f50354c.isIdentity()) {
                Matrix matrix2 = this.f50354c;
                matrix2.invert(matrix2);
                this.f50354c.mapRect(this.f50361j);
            }
            if (!this.f50360i.intersect(this.f50361j)) {
                this.f50360i.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
            l5.e.c("Layer#computeBounds");
            if (this.f50360i.width() >= 1.0f && this.f50360i.height() >= 1.0f) {
                l5.e.b("Layer#saveLayer");
                this.f50355d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                j.m(canvas, this.f50360i, this.f50355d);
                l5.e.c("Layer#saveLayer");
                s(canvas);
                l5.e.b("Layer#drawLayer");
                u(canvas, this.f50353b, i12);
                l5.e.c("Layer#drawLayer");
                if (B()) {
                    o(canvas, this.f50353b);
                }
                if (C()) {
                    l5.e.b("Layer#drawMatte");
                    l5.e.b("Layer#saveLayer");
                    j.n(canvas, this.f50360i, this.f50358g, 19);
                    l5.e.c("Layer#saveLayer");
                    s(canvas);
                    this.f50371t.g(canvas, matrix, i12);
                    l5.e.b("Layer#restoreLayer");
                    canvas.restore();
                    l5.e.c("Layer#restoreLayer");
                    l5.e.c("Layer#drawMatte");
                }
                l5.e.b("Layer#restoreLayer");
                canvas.restore();
                l5.e.c("Layer#restoreLayer");
            }
            if (this.f50377z && (paint = this.A) != null) {
                paint.setStyle(Paint.Style.STROKE);
                this.A.setColor(-251901);
                this.A.setStrokeWidth(4.0f);
                canvas.drawRect(this.f50360i, this.A);
                this.A.setStyle(Paint.Style.FILL);
                this.A.setColor(1357638635);
                canvas.drawRect(this.f50360i, this.A);
            }
            G(l5.e.c(this.f50365n));
            return;
        }
        l5.e.c(this.f50365n);
    }

    @Override // n5.c
    public String getName() {
        return this.f50368q.j();
    }

    public void i(o5.a aVar) {
        if (aVar == null) {
            return;
        }
        this.f50374w.add(aVar);
    }

    abstract void u(Canvas canvas, Matrix matrix, int i10);

    public s5.h w() {
        return this.f50368q.a();
    }

    public s5.a x() {
        return this.f50368q.b();
    }

    public BlurMaskFilter y(float f10) {
        if (this.B == f10) {
            return this.C;
        }
        BlurMaskFilter blurMaskFilter = new BlurMaskFilter(f10 / 2.0f, BlurMaskFilter.Blur.NORMAL);
        this.C = blurMaskFilter;
        this.B = f10;
        return blurMaskFilter;
    }

    public v5.j z() {
        return this.f50368q.d();
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }

    void I(q5.e eVar, int i10, List list, q5.e eVar2) {
    }
}
