package u5;

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
import t5.i;
import u5.e;
import y5.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b implements n5.e, a.b, r5.f {
    private Paint A;
    float B;
    BlurMaskFilter C;
    m5.a D;

    /* renamed from: a  reason: collision with root package name */
    private final Path f50435a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f50436b = new Matrix();

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f50437c = new Matrix();

    /* renamed from: d  reason: collision with root package name */
    private final Paint f50438d = new m5.a(1);

    /* renamed from: e  reason: collision with root package name */
    private final Paint f50439e;

    /* renamed from: f  reason: collision with root package name */
    private final Paint f50440f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f50441g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f50442h;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f50443i;

    /* renamed from: j  reason: collision with root package name */
    private final RectF f50444j;

    /* renamed from: k  reason: collision with root package name */
    private final RectF f50445k;

    /* renamed from: l  reason: collision with root package name */
    private final RectF f50446l;

    /* renamed from: m  reason: collision with root package name */
    private final RectF f50447m;

    /* renamed from: n  reason: collision with root package name */
    private final String f50448n;

    /* renamed from: o  reason: collision with root package name */
    final Matrix f50449o;

    /* renamed from: p  reason: collision with root package name */
    final n f50450p;

    /* renamed from: q  reason: collision with root package name */
    final e f50451q;

    /* renamed from: r  reason: collision with root package name */
    private o5.h f50452r;

    /* renamed from: s  reason: collision with root package name */
    private o5.d f50453s;

    /* renamed from: t  reason: collision with root package name */
    private b f50454t;

    /* renamed from: u  reason: collision with root package name */
    private b f50455u;

    /* renamed from: v  reason: collision with root package name */
    private List f50456v;

    /* renamed from: w  reason: collision with root package name */
    private final List f50457w;

    /* renamed from: x  reason: collision with root package name */
    public final p f50458x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f50459y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f50460z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50461a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f50462b;

        static {
            int[] iArr = new int[i.a.values().length];
            f50462b = iArr;
            try {
                iArr[i.a.MASK_MODE_NONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50462b[i.a.MASK_MODE_SUBTRACT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50462b[i.a.MASK_MODE_INTERSECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f50462b[i.a.MASK_MODE_ADD.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            int[] iArr2 = new int[e.a.values().length];
            f50461a = iArr2;
            try {
                iArr2[e.a.SHAPE.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f50461a[e.a.PRE_COMP.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f50461a[e.a.SOLID.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f50461a[e.a.IMAGE.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f50461a[e.a.NULL.ordinal()] = 5;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f50461a[e.a.TEXT.ordinal()] = 6;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f50461a[e.a.UNKNOWN.ordinal()] = 7;
            } catch (NoSuchFieldError unused11) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(n nVar, e eVar) {
        PorterDuff.Mode mode = PorterDuff.Mode.DST_IN;
        this.f50439e = new m5.a(1, mode);
        PorterDuff.Mode mode2 = PorterDuff.Mode.DST_OUT;
        this.f50440f = new m5.a(1, mode2);
        m5.a aVar = new m5.a(1);
        this.f50441g = aVar;
        this.f50442h = new m5.a(PorterDuff.Mode.CLEAR);
        this.f50443i = new RectF();
        this.f50444j = new RectF();
        this.f50445k = new RectF();
        this.f50446l = new RectF();
        this.f50447m = new RectF();
        this.f50449o = new Matrix();
        this.f50457w = new ArrayList();
        this.f50459y = true;
        this.B = 0.0f;
        this.f50450p = nVar;
        this.f50451q = eVar;
        this.f50448n = eVar.j() + "#draw";
        if (eVar.i() == e.b.INVERT) {
            aVar.setXfermode(new PorterDuffXfermode(mode2));
        } else {
            aVar.setXfermode(new PorterDuffXfermode(mode));
        }
        p b10 = eVar.x().b();
        this.f50458x = b10;
        b10.b(this);
        if (eVar.h() != null && !eVar.h().isEmpty()) {
            o5.h hVar = new o5.h(eVar.h());
            this.f50452r = hVar;
            for (o5.a aVar2 : hVar.a()) {
                aVar2.a(this);
            }
            for (o5.a aVar3 : this.f50452r.c()) {
                i(aVar3);
                aVar3.a(this);
            }
        }
        O();
    }

    private void D(RectF rectF, Matrix matrix) {
        this.f50445k.set(0.0f, 0.0f, 0.0f, 0.0f);
        if (B()) {
            int size = this.f50452r.b().size();
            for (int i10 = 0; i10 < size; i10++) {
                t5.i iVar = (t5.i) this.f50452r.b().get(i10);
                Path path = (Path) ((o5.a) this.f50452r.a().get(i10)).h();
                if (path != null) {
                    this.f50435a.set(path);
                    this.f50435a.transform(matrix);
                    int i11 = a.f50462b[iVar.a().ordinal()];
                    if (i11 != 1 && i11 != 2) {
                        if ((i11 != 3 && i11 != 4) || !iVar.d()) {
                            this.f50435a.computeBounds(this.f50447m, false);
                            if (i10 == 0) {
                                this.f50445k.set(this.f50447m);
                            } else {
                                RectF rectF2 = this.f50445k;
                                rectF2.set(Math.min(rectF2.left, this.f50447m.left), Math.min(this.f50445k.top, this.f50447m.top), Math.max(this.f50445k.right, this.f50447m.right), Math.max(this.f50445k.bottom, this.f50447m.bottom));
                            }
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                }
            }
            if (!rectF.intersect(this.f50445k)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void E(RectF rectF, Matrix matrix) {
        if (C() && this.f50451q.i() != e.b.INVERT) {
            this.f50446l.set(0.0f, 0.0f, 0.0f, 0.0f);
            this.f50454t.f(this.f50446l, matrix, true);
            if (!rectF.intersect(this.f50446l)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void F() {
        this.f50450p.invalidateSelf();
    }

    private void G(float f10) {
        this.f50450p.J().n().a(this.f50451q.j(), f10);
    }

    private void N(boolean z10) {
        if (z10 != this.f50459y) {
            this.f50459y = z10;
            F();
        }
    }

    private void O() {
        boolean z10 = true;
        if (!this.f50451q.f().isEmpty()) {
            o5.d dVar = new o5.d(this.f50451q.f());
            this.f50453s = dVar;
            dVar.m();
            this.f50453s.a(new a.b() { // from class: u5.a
                @Override // o5.a.b
                public final void a() {
                    b.g(b.this);
                }
            });
            if (((Float) this.f50453s.h()).floatValue() != 1.0f) {
                z10 = false;
            }
            N(z10);
            i(this.f50453s);
            return;
        }
        N(true);
    }

    public static /* synthetic */ void g(b bVar) {
        boolean z10;
        if (bVar.f50453s.q() == 1.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        bVar.N(z10);
    }

    private void j(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        this.f50435a.set((Path) aVar.h());
        this.f50435a.transform(matrix);
        this.f50438d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f50435a, this.f50438d);
    }

    private void k(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.n(canvas, this.f50443i, this.f50439e);
        this.f50435a.set((Path) aVar.h());
        this.f50435a.transform(matrix);
        this.f50438d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f50435a, this.f50438d);
        canvas.restore();
    }

    private void l(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.n(canvas, this.f50443i, this.f50438d);
        canvas.drawRect(this.f50443i, this.f50438d);
        this.f50435a.set((Path) aVar.h());
        this.f50435a.transform(matrix);
        this.f50438d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f50435a, this.f50440f);
        canvas.restore();
    }

    private void m(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.n(canvas, this.f50443i, this.f50439e);
        canvas.drawRect(this.f50443i, this.f50438d);
        this.f50440f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f50435a.set((Path) aVar.h());
        this.f50435a.transform(matrix);
        canvas.drawPath(this.f50435a, this.f50440f);
        canvas.restore();
    }

    private void n(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.n(canvas, this.f50443i, this.f50440f);
        canvas.drawRect(this.f50443i, this.f50438d);
        this.f50440f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f50435a.set((Path) aVar.h());
        this.f50435a.transform(matrix);
        canvas.drawPath(this.f50435a, this.f50440f);
        canvas.restore();
    }

    private void o(Canvas canvas, Matrix matrix) {
        if (l5.e.h()) {
            l5.e.b("Layer#saveLayer");
        }
        j.o(canvas, this.f50443i, this.f50439e, 19);
        if (Build.VERSION.SDK_INT < 28) {
            s(canvas);
        }
        if (l5.e.h()) {
            l5.e.c("Layer#saveLayer");
        }
        for (int i10 = 0; i10 < this.f50452r.b().size(); i10++) {
            t5.i iVar = (t5.i) this.f50452r.b().get(i10);
            o5.a aVar = (o5.a) this.f50452r.a().get(i10);
            o5.a aVar2 = (o5.a) this.f50452r.c().get(i10);
            int i11 = a.f50462b[iVar.a().ordinal()];
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
                        this.f50438d.setColor(-16777216);
                        this.f50438d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        canvas.drawRect(this.f50443i, this.f50438d);
                    }
                    if (iVar.d()) {
                        n(canvas, matrix, aVar, aVar2);
                    } else {
                        p(canvas, matrix, aVar);
                    }
                }
            } else if (q()) {
                this.f50438d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                canvas.drawRect(this.f50443i, this.f50438d);
            }
        }
        if (l5.e.h()) {
            l5.e.b("Layer#restoreLayer");
        }
        canvas.restore();
        if (l5.e.h()) {
            l5.e.c("Layer#restoreLayer");
        }
    }

    private void p(Canvas canvas, Matrix matrix, o5.a aVar) {
        this.f50435a.set((Path) aVar.h());
        this.f50435a.transform(matrix);
        canvas.drawPath(this.f50435a, this.f50440f);
    }

    private boolean q() {
        if (this.f50452r.a().isEmpty()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f50452r.b().size(); i10++) {
            if (((t5.i) this.f50452r.b().get(i10)).a() != i.a.MASK_MODE_NONE) {
                return false;
            }
        }
        return true;
    }

    private void r() {
        if (this.f50456v == null) {
            if (this.f50455u == null) {
                this.f50456v = Collections.EMPTY_LIST;
                return;
            }
            this.f50456v = new ArrayList();
            for (b bVar = this.f50455u; bVar != null; bVar = bVar.f50455u) {
                this.f50456v.add(bVar);
            }
        }
    }

    private void s(Canvas canvas) {
        if (l5.e.h()) {
            l5.e.b("Layer#clearLayer");
        }
        RectF rectF = this.f50443i;
        canvas.drawRect(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f, this.f50442h);
        if (l5.e.h()) {
            l5.e.c("Layer#clearLayer");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b v(c cVar, e eVar, n nVar, l5.i iVar) {
        switch (a.f50461a[eVar.g().ordinal()]) {
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
                y5.d.c("Unknown layer type " + eVar.g());
                return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e A() {
        return this.f50451q;
    }

    boolean B() {
        o5.h hVar = this.f50452r;
        if (hVar != null && !hVar.a().isEmpty()) {
            return true;
        }
        return false;
    }

    boolean C() {
        if (this.f50454t != null) {
            return true;
        }
        return false;
    }

    public void H(o5.a aVar) {
        this.f50457w.remove(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(b bVar) {
        this.f50454t = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (z10 && this.A == null) {
            this.A = new m5.a();
        }
        this.f50460z = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(b bVar) {
        this.f50455u = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(float f10) {
        if (l5.e.h()) {
            l5.e.b("BaseLayer#setProgress");
            l5.e.b("BaseLayer#setProgress.transform");
        }
        this.f50458x.j(f10);
        if (l5.e.h()) {
            l5.e.c("BaseLayer#setProgress.transform");
        }
        if (this.f50452r != null) {
            if (l5.e.h()) {
                l5.e.b("BaseLayer#setProgress.mask");
            }
            for (int i10 = 0; i10 < this.f50452r.a().size(); i10++) {
                ((o5.a) this.f50452r.a().get(i10)).n(f10);
            }
            if (l5.e.h()) {
                l5.e.c("BaseLayer#setProgress.mask");
            }
        }
        if (this.f50453s != null) {
            if (l5.e.h()) {
                l5.e.b("BaseLayer#setProgress.inout");
            }
            this.f50453s.n(f10);
            if (l5.e.h()) {
                l5.e.c("BaseLayer#setProgress.inout");
            }
        }
        if (this.f50454t != null) {
            if (l5.e.h()) {
                l5.e.b("BaseLayer#setProgress.matte");
            }
            this.f50454t.M(f10);
            if (l5.e.h()) {
                l5.e.c("BaseLayer#setProgress.matte");
            }
        }
        if (l5.e.h()) {
            l5.e.b("BaseLayer#setProgress.animations." + this.f50457w.size());
        }
        for (int i11 = 0; i11 < this.f50457w.size(); i11++) {
            ((o5.a) this.f50457w.get(i11)).n(f10);
        }
        if (l5.e.h()) {
            l5.e.c("BaseLayer#setProgress.animations." + this.f50457w.size());
            l5.e.c("BaseLayer#setProgress");
        }
    }

    @Override // o5.a.b
    public void a() {
        F();
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        this.f50458x.c(obj, cVar);
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        b bVar = this.f50454t;
        if (bVar != null) {
            r5.e a10 = eVar2.a(bVar.getName());
            if (eVar.c(this.f50454t.getName(), i10)) {
                list.add(a10.i(this.f50454t));
            }
            if (eVar.h(getName(), i10)) {
                this.f50454t.I(eVar, eVar.e(this.f50454t.getName(), i10) + i10, list, a10);
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

    @Override // n5.e
    public void f(RectF rectF, Matrix matrix, boolean z10) {
        this.f50443i.set(0.0f, 0.0f, 0.0f, 0.0f);
        r();
        this.f50449o.set(matrix);
        if (z10) {
            List list = this.f50456v;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.f50449o.preConcat(((b) this.f50456v.get(size)).f50458x.f());
                }
            } else {
                b bVar = this.f50455u;
                if (bVar != null) {
                    this.f50449o.preConcat(bVar.f50458x.f());
                }
            }
        }
        this.f50449o.preConcat(this.f50458x.f());
    }

    @Override // n5.c
    public String getName() {
        return this.f50451q.j();
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        int i11;
        Canvas canvas2;
        Paint paint;
        Integer num;
        l5.e.b(this.f50448n);
        if (this.f50459y && !this.f50451q.y()) {
            r();
            if (l5.e.h()) {
                l5.e.b("Layer#parentMatrix");
            }
            this.f50436b.reset();
            this.f50436b.set(matrix);
            for (int size = this.f50456v.size() - 1; size >= 0; size--) {
                this.f50436b.preConcat(((b) this.f50456v.get(size)).f50458x.f());
            }
            if (l5.e.h()) {
                l5.e.c("Layer#parentMatrix");
            }
            o5.a h10 = this.f50458x.h();
            if (h10 != null && (num = (Integer) h10.h()) != null) {
                i11 = num.intValue();
            } else {
                i11 = 100;
            }
            int i12 = (int) ((((i10 / 255.0f) * i11) / 100.0f) * 255.0f);
            if (!C() && !B() && w() == t5.h.NORMAL) {
                this.f50436b.preConcat(this.f50458x.f());
                if (l5.e.h()) {
                    l5.e.b("Layer#drawLayer");
                }
                u(canvas, this.f50436b, i12);
                if (l5.e.h()) {
                    l5.e.c("Layer#drawLayer");
                }
                G(l5.e.c(this.f50448n));
                return;
            }
            if (l5.e.h()) {
                l5.e.b("Layer#computeBounds");
            }
            f(this.f50443i, this.f50436b, false);
            E(this.f50443i, matrix);
            this.f50436b.preConcat(this.f50458x.f());
            D(this.f50443i, this.f50436b);
            this.f50444j.set(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
            canvas.getMatrix(this.f50437c);
            if (!this.f50437c.isIdentity()) {
                Matrix matrix2 = this.f50437c;
                matrix2.invert(matrix2);
                this.f50437c.mapRect(this.f50444j);
            }
            if (!this.f50443i.intersect(this.f50444j)) {
                this.f50443i.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
            if (l5.e.h()) {
                l5.e.c("Layer#computeBounds");
            }
            if (this.f50443i.width() >= 1.0f && this.f50443i.height() >= 1.0f) {
                if (l5.e.h()) {
                    l5.e.b("Layer#saveLayer");
                }
                this.f50438d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                r1.d.b(this.f50438d, w().d());
                j.n(canvas, this.f50443i, this.f50438d);
                if (l5.e.h()) {
                    l5.e.c("Layer#saveLayer");
                }
                if (w() != t5.h.MULTIPLY) {
                    s(canvas);
                    canvas2 = canvas;
                } else {
                    if (this.D == null) {
                        m5.a aVar = new m5.a();
                        this.D = aVar;
                        aVar.setColor(-1);
                    }
                    RectF rectF = this.f50443i;
                    canvas2 = canvas;
                    canvas2.drawRect(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f, this.D);
                }
                if (l5.e.h()) {
                    l5.e.b("Layer#drawLayer");
                }
                u(canvas2, this.f50436b, i12);
                if (l5.e.h()) {
                    l5.e.c("Layer#drawLayer");
                }
                if (B()) {
                    o(canvas2, this.f50436b);
                }
                if (C()) {
                    if (l5.e.h()) {
                        l5.e.b("Layer#drawMatte");
                        l5.e.b("Layer#saveLayer");
                    }
                    j.o(canvas2, this.f50443i, this.f50441g, 19);
                    if (l5.e.h()) {
                        l5.e.c("Layer#saveLayer");
                    }
                    s(canvas2);
                    this.f50454t.h(canvas2, matrix, i12);
                    if (l5.e.h()) {
                        l5.e.b("Layer#restoreLayer");
                    }
                    canvas2.restore();
                    if (l5.e.h()) {
                        l5.e.c("Layer#restoreLayer");
                        l5.e.c("Layer#drawMatte");
                    }
                }
                if (l5.e.h()) {
                    l5.e.b("Layer#restoreLayer");
                }
                canvas2.restore();
                if (l5.e.h()) {
                    l5.e.c("Layer#restoreLayer");
                }
            } else {
                canvas2 = canvas;
            }
            if (this.f50460z && (paint = this.A) != null) {
                paint.setStyle(Paint.Style.STROKE);
                this.A.setColor(-251901);
                this.A.setStrokeWidth(4.0f);
                canvas2.drawRect(this.f50443i, this.A);
                this.A.setStyle(Paint.Style.FILL);
                this.A.setColor(1357638635);
                canvas2.drawRect(this.f50443i, this.A);
            }
            G(l5.e.c(this.f50448n));
            return;
        }
        l5.e.c(this.f50448n);
    }

    public void i(o5.a aVar) {
        if (aVar == null) {
            return;
        }
        this.f50457w.add(aVar);
    }

    abstract void u(Canvas canvas, Matrix matrix, int i10);

    public t5.h w() {
        return this.f50451q.a();
    }

    public t5.a x() {
        return this.f50451q.b();
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

    public w5.j z() {
        return this.f50451q.d();
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }

    void I(r5.e eVar, int i10, List list, r5.e eVar2) {
    }
}
