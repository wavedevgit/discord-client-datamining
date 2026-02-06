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
    private final Path f50304a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f50305b = new Matrix();

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f50306c = new Matrix();

    /* renamed from: d  reason: collision with root package name */
    private final Paint f50307d = new m5.a(1);

    /* renamed from: e  reason: collision with root package name */
    private final Paint f50308e;

    /* renamed from: f  reason: collision with root package name */
    private final Paint f50309f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f50310g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f50311h;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f50312i;

    /* renamed from: j  reason: collision with root package name */
    private final RectF f50313j;

    /* renamed from: k  reason: collision with root package name */
    private final RectF f50314k;

    /* renamed from: l  reason: collision with root package name */
    private final RectF f50315l;

    /* renamed from: m  reason: collision with root package name */
    private final RectF f50316m;

    /* renamed from: n  reason: collision with root package name */
    private final String f50317n;

    /* renamed from: o  reason: collision with root package name */
    final Matrix f50318o;

    /* renamed from: p  reason: collision with root package name */
    final n f50319p;

    /* renamed from: q  reason: collision with root package name */
    final e f50320q;

    /* renamed from: r  reason: collision with root package name */
    private o5.h f50321r;

    /* renamed from: s  reason: collision with root package name */
    private o5.d f50322s;

    /* renamed from: t  reason: collision with root package name */
    private b f50323t;

    /* renamed from: u  reason: collision with root package name */
    private b f50324u;

    /* renamed from: v  reason: collision with root package name */
    private List f50325v;

    /* renamed from: w  reason: collision with root package name */
    private final List f50326w;

    /* renamed from: x  reason: collision with root package name */
    final p f50327x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f50328y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f50329z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50330a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f50331b;

        static {
            int[] iArr = new int[i.a.values().length];
            f50331b = iArr;
            try {
                iArr[i.a.MASK_MODE_NONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50331b[i.a.MASK_MODE_SUBTRACT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50331b[i.a.MASK_MODE_INTERSECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f50331b[i.a.MASK_MODE_ADD.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            int[] iArr2 = new int[e.a.values().length];
            f50330a = iArr2;
            try {
                iArr2[e.a.SHAPE.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f50330a[e.a.PRE_COMP.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f50330a[e.a.SOLID.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f50330a[e.a.IMAGE.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f50330a[e.a.NULL.ordinal()] = 5;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f50330a[e.a.TEXT.ordinal()] = 6;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f50330a[e.a.UNKNOWN.ordinal()] = 7;
            } catch (NoSuchFieldError unused11) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(n nVar, e eVar) {
        PorterDuff.Mode mode = PorterDuff.Mode.DST_IN;
        this.f50308e = new m5.a(1, mode);
        PorterDuff.Mode mode2 = PorterDuff.Mode.DST_OUT;
        this.f50309f = new m5.a(1, mode2);
        m5.a aVar = new m5.a(1);
        this.f50310g = aVar;
        this.f50311h = new m5.a(PorterDuff.Mode.CLEAR);
        this.f50312i = new RectF();
        this.f50313j = new RectF();
        this.f50314k = new RectF();
        this.f50315l = new RectF();
        this.f50316m = new RectF();
        this.f50318o = new Matrix();
        this.f50326w = new ArrayList();
        this.f50328y = true;
        this.B = 0.0f;
        this.f50319p = nVar;
        this.f50320q = eVar;
        this.f50317n = eVar.j() + "#draw";
        if (eVar.i() == e.b.INVERT) {
            aVar.setXfermode(new PorterDuffXfermode(mode2));
        } else {
            aVar.setXfermode(new PorterDuffXfermode(mode));
        }
        p b10 = eVar.x().b();
        this.f50327x = b10;
        b10.b(this);
        if (eVar.h() != null && !eVar.h().isEmpty()) {
            o5.h hVar = new o5.h(eVar.h());
            this.f50321r = hVar;
            for (o5.a aVar2 : hVar.a()) {
                aVar2.a(this);
            }
            for (o5.a aVar3 : this.f50321r.c()) {
                i(aVar3);
                aVar3.a(this);
            }
        }
        O();
    }

    private void D(RectF rectF, Matrix matrix) {
        this.f50314k.set(0.0f, 0.0f, 0.0f, 0.0f);
        if (B()) {
            int size = this.f50321r.b().size();
            for (int i10 = 0; i10 < size; i10++) {
                s5.i iVar = (s5.i) this.f50321r.b().get(i10);
                Path path = (Path) ((o5.a) this.f50321r.a().get(i10)).h();
                if (path != null) {
                    this.f50304a.set(path);
                    this.f50304a.transform(matrix);
                    int i11 = a.f50331b[iVar.a().ordinal()];
                    if (i11 != 1 && i11 != 2) {
                        if ((i11 != 3 && i11 != 4) || !iVar.d()) {
                            this.f50304a.computeBounds(this.f50316m, false);
                            if (i10 == 0) {
                                this.f50314k.set(this.f50316m);
                            } else {
                                RectF rectF2 = this.f50314k;
                                rectF2.set(Math.min(rectF2.left, this.f50316m.left), Math.min(this.f50314k.top, this.f50316m.top), Math.max(this.f50314k.right, this.f50316m.right), Math.max(this.f50314k.bottom, this.f50316m.bottom));
                            }
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                }
            }
            if (!rectF.intersect(this.f50314k)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void E(RectF rectF, Matrix matrix) {
        if (C() && this.f50320q.i() != e.b.INVERT) {
            this.f50315l.set(0.0f, 0.0f, 0.0f, 0.0f);
            this.f50323t.e(this.f50315l, matrix, true);
            if (!rectF.intersect(this.f50315l)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void F() {
        this.f50319p.invalidateSelf();
    }

    private void G(float f10) {
        this.f50319p.K().n().a(this.f50320q.j(), f10);
    }

    private void N(boolean z10) {
        if (z10 != this.f50328y) {
            this.f50328y = z10;
            F();
        }
    }

    private void O() {
        boolean z10 = true;
        if (!this.f50320q.f().isEmpty()) {
            o5.d dVar = new o5.d(this.f50320q.f());
            this.f50322s = dVar;
            dVar.m();
            this.f50322s.a(new a.b() { // from class: t5.a
                @Override // o5.a.b
                public final void a() {
                    b.f(b.this);
                }
            });
            if (((Float) this.f50322s.h()).floatValue() != 1.0f) {
                z10 = false;
            }
            N(z10);
            i(this.f50322s);
            return;
        }
        N(true);
    }

    public static /* synthetic */ void f(b bVar) {
        boolean z10;
        if (bVar.f50322s.q() == 1.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        bVar.N(z10);
    }

    private void j(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        this.f50304a.set((Path) aVar.h());
        this.f50304a.transform(matrix);
        this.f50307d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f50304a, this.f50307d);
    }

    private void k(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f50312i, this.f50308e);
        this.f50304a.set((Path) aVar.h());
        this.f50304a.transform(matrix);
        this.f50307d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f50304a, this.f50307d);
        canvas.restore();
    }

    private void l(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f50312i, this.f50307d);
        canvas.drawRect(this.f50312i, this.f50307d);
        this.f50304a.set((Path) aVar.h());
        this.f50304a.transform(matrix);
        this.f50307d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f50304a, this.f50309f);
        canvas.restore();
    }

    private void m(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f50312i, this.f50308e);
        canvas.drawRect(this.f50312i, this.f50307d);
        this.f50309f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f50304a.set((Path) aVar.h());
        this.f50304a.transform(matrix);
        canvas.drawPath(this.f50304a, this.f50309f);
        canvas.restore();
    }

    private void n(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f50312i, this.f50309f);
        canvas.drawRect(this.f50312i, this.f50307d);
        this.f50309f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f50304a.set((Path) aVar.h());
        this.f50304a.transform(matrix);
        canvas.drawPath(this.f50304a, this.f50309f);
        canvas.restore();
    }

    private void o(Canvas canvas, Matrix matrix) {
        l5.e.b("Layer#saveLayer");
        j.n(canvas, this.f50312i, this.f50308e, 19);
        if (Build.VERSION.SDK_INT < 28) {
            s(canvas);
        }
        l5.e.c("Layer#saveLayer");
        for (int i10 = 0; i10 < this.f50321r.b().size(); i10++) {
            s5.i iVar = (s5.i) this.f50321r.b().get(i10);
            o5.a aVar = (o5.a) this.f50321r.a().get(i10);
            o5.a aVar2 = (o5.a) this.f50321r.c().get(i10);
            int i11 = a.f50331b[iVar.a().ordinal()];
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
                        this.f50307d.setColor(-16777216);
                        this.f50307d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        canvas.drawRect(this.f50312i, this.f50307d);
                    }
                    if (iVar.d()) {
                        n(canvas, matrix, aVar, aVar2);
                    } else {
                        p(canvas, matrix, aVar);
                    }
                }
            } else if (q()) {
                this.f50307d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                canvas.drawRect(this.f50312i, this.f50307d);
            }
        }
        l5.e.b("Layer#restoreLayer");
        canvas.restore();
        l5.e.c("Layer#restoreLayer");
    }

    private void p(Canvas canvas, Matrix matrix, o5.a aVar) {
        this.f50304a.set((Path) aVar.h());
        this.f50304a.transform(matrix);
        canvas.drawPath(this.f50304a, this.f50309f);
    }

    private boolean q() {
        if (this.f50321r.a().isEmpty()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f50321r.b().size(); i10++) {
            if (((s5.i) this.f50321r.b().get(i10)).a() != i.a.MASK_MODE_NONE) {
                return false;
            }
        }
        return true;
    }

    private void r() {
        if (this.f50325v == null) {
            if (this.f50324u == null) {
                this.f50325v = Collections.EMPTY_LIST;
                return;
            }
            this.f50325v = new ArrayList();
            for (b bVar = this.f50324u; bVar != null; bVar = bVar.f50324u) {
                this.f50325v.add(bVar);
            }
        }
    }

    private void s(Canvas canvas) {
        l5.e.b("Layer#clearLayer");
        RectF rectF = this.f50312i;
        canvas.drawRect(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f, this.f50311h);
        l5.e.c("Layer#clearLayer");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b v(c cVar, e eVar, n nVar, l5.i iVar) {
        switch (a.f50330a[eVar.g().ordinal()]) {
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
        return this.f50320q;
    }

    boolean B() {
        o5.h hVar = this.f50321r;
        if (hVar != null && !hVar.a().isEmpty()) {
            return true;
        }
        return false;
    }

    boolean C() {
        if (this.f50323t != null) {
            return true;
        }
        return false;
    }

    public void H(o5.a aVar) {
        this.f50326w.remove(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(b bVar) {
        this.f50323t = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (z10 && this.A == null) {
            this.A = new m5.a();
        }
        this.f50329z = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(b bVar) {
        this.f50324u = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(float f10) {
        l5.e.b("BaseLayer#setProgress");
        l5.e.b("BaseLayer#setProgress.transform");
        this.f50327x.j(f10);
        l5.e.c("BaseLayer#setProgress.transform");
        if (this.f50321r != null) {
            l5.e.b("BaseLayer#setProgress.mask");
            for (int i10 = 0; i10 < this.f50321r.a().size(); i10++) {
                ((o5.a) this.f50321r.a().get(i10)).n(f10);
            }
            l5.e.c("BaseLayer#setProgress.mask");
        }
        if (this.f50322s != null) {
            l5.e.b("BaseLayer#setProgress.inout");
            this.f50322s.n(f10);
            l5.e.c("BaseLayer#setProgress.inout");
        }
        if (this.f50323t != null) {
            l5.e.b("BaseLayer#setProgress.matte");
            this.f50323t.M(f10);
            l5.e.c("BaseLayer#setProgress.matte");
        }
        l5.e.b("BaseLayer#setProgress.animations." + this.f50326w.size());
        for (int i11 = 0; i11 < this.f50326w.size(); i11++) {
            ((o5.a) this.f50326w.get(i11)).n(f10);
        }
        l5.e.c("BaseLayer#setProgress.animations." + this.f50326w.size());
        l5.e.c("BaseLayer#setProgress");
    }

    @Override // o5.a.b
    public void a() {
        F();
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        b bVar = this.f50323t;
        if (bVar != null) {
            q5.e a10 = eVar2.a(bVar.getName());
            if (eVar.c(this.f50323t.getName(), i10)) {
                list.add(a10.i(this.f50323t));
            }
            if (eVar.h(getName(), i10)) {
                this.f50323t.I(eVar, eVar.e(this.f50323t.getName(), i10) + i10, list, a10);
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
        this.f50327x.c(obj, cVar);
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f50312i.set(0.0f, 0.0f, 0.0f, 0.0f);
        r();
        this.f50318o.set(matrix);
        if (z10) {
            List list = this.f50325v;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.f50318o.preConcat(((b) this.f50325v.get(size)).f50327x.f());
                }
            } else {
                b bVar = this.f50324u;
                if (bVar != null) {
                    this.f50318o.preConcat(bVar.f50327x.f());
                }
            }
        }
        this.f50318o.preConcat(this.f50327x.f());
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        int i11;
        Paint paint;
        Integer num;
        l5.e.b(this.f50317n);
        if (this.f50328y && !this.f50320q.y()) {
            r();
            l5.e.b("Layer#parentMatrix");
            this.f50305b.reset();
            this.f50305b.set(matrix);
            for (int size = this.f50325v.size() - 1; size >= 0; size--) {
                this.f50305b.preConcat(((b) this.f50325v.get(size)).f50327x.f());
            }
            l5.e.c("Layer#parentMatrix");
            o5.a h10 = this.f50327x.h();
            if (h10 != null && (num = (Integer) h10.h()) != null) {
                i11 = num.intValue();
            } else {
                i11 = 100;
            }
            int i12 = (int) ((((i10 / 255.0f) * i11) / 100.0f) * 255.0f);
            if (!C() && !B()) {
                this.f50305b.preConcat(this.f50327x.f());
                l5.e.b("Layer#drawLayer");
                u(canvas, this.f50305b, i12);
                l5.e.c("Layer#drawLayer");
                G(l5.e.c(this.f50317n));
                return;
            }
            l5.e.b("Layer#computeBounds");
            e(this.f50312i, this.f50305b, false);
            E(this.f50312i, matrix);
            this.f50305b.preConcat(this.f50327x.f());
            D(this.f50312i, this.f50305b);
            this.f50313j.set(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
            canvas.getMatrix(this.f50306c);
            if (!this.f50306c.isIdentity()) {
                Matrix matrix2 = this.f50306c;
                matrix2.invert(matrix2);
                this.f50306c.mapRect(this.f50313j);
            }
            if (!this.f50312i.intersect(this.f50313j)) {
                this.f50312i.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
            l5.e.c("Layer#computeBounds");
            if (this.f50312i.width() >= 1.0f && this.f50312i.height() >= 1.0f) {
                l5.e.b("Layer#saveLayer");
                this.f50307d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                j.m(canvas, this.f50312i, this.f50307d);
                l5.e.c("Layer#saveLayer");
                s(canvas);
                l5.e.b("Layer#drawLayer");
                u(canvas, this.f50305b, i12);
                l5.e.c("Layer#drawLayer");
                if (B()) {
                    o(canvas, this.f50305b);
                }
                if (C()) {
                    l5.e.b("Layer#drawMatte");
                    l5.e.b("Layer#saveLayer");
                    j.n(canvas, this.f50312i, this.f50310g, 19);
                    l5.e.c("Layer#saveLayer");
                    s(canvas);
                    this.f50323t.g(canvas, matrix, i12);
                    l5.e.b("Layer#restoreLayer");
                    canvas.restore();
                    l5.e.c("Layer#restoreLayer");
                    l5.e.c("Layer#drawMatte");
                }
                l5.e.b("Layer#restoreLayer");
                canvas.restore();
                l5.e.c("Layer#restoreLayer");
            }
            if (this.f50329z && (paint = this.A) != null) {
                paint.setStyle(Paint.Style.STROKE);
                this.A.setColor(-251901);
                this.A.setStrokeWidth(4.0f);
                canvas.drawRect(this.f50312i, this.A);
                this.A.setStyle(Paint.Style.FILL);
                this.A.setColor(1357638635);
                canvas.drawRect(this.f50312i, this.A);
            }
            G(l5.e.c(this.f50317n));
            return;
        }
        l5.e.c(this.f50317n);
    }

    @Override // n5.c
    public String getName() {
        return this.f50320q.j();
    }

    public void i(o5.a aVar) {
        if (aVar == null) {
            return;
        }
        this.f50326w.add(aVar);
    }

    abstract void u(Canvas canvas, Matrix matrix, int i10);

    public s5.h w() {
        return this.f50320q.a();
    }

    public s5.a x() {
        return this.f50320q.b();
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
        return this.f50320q.d();
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }

    void I(q5.e eVar, int i10, List list, q5.e eVar2) {
    }
}
