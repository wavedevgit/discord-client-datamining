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
    private final Path f51004a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f51005b = new Matrix();

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f51006c = new Matrix();

    /* renamed from: d  reason: collision with root package name */
    private final Paint f51007d = new m5.a(1);

    /* renamed from: e  reason: collision with root package name */
    private final Paint f51008e;

    /* renamed from: f  reason: collision with root package name */
    private final Paint f51009f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f51010g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f51011h;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f51012i;

    /* renamed from: j  reason: collision with root package name */
    private final RectF f51013j;

    /* renamed from: k  reason: collision with root package name */
    private final RectF f51014k;

    /* renamed from: l  reason: collision with root package name */
    private final RectF f51015l;

    /* renamed from: m  reason: collision with root package name */
    private final RectF f51016m;

    /* renamed from: n  reason: collision with root package name */
    private final String f51017n;

    /* renamed from: o  reason: collision with root package name */
    final Matrix f51018o;

    /* renamed from: p  reason: collision with root package name */
    final n f51019p;

    /* renamed from: q  reason: collision with root package name */
    final e f51020q;

    /* renamed from: r  reason: collision with root package name */
    private o5.h f51021r;

    /* renamed from: s  reason: collision with root package name */
    private o5.d f51022s;

    /* renamed from: t  reason: collision with root package name */
    private b f51023t;

    /* renamed from: u  reason: collision with root package name */
    private b f51024u;

    /* renamed from: v  reason: collision with root package name */
    private List f51025v;

    /* renamed from: w  reason: collision with root package name */
    private final List f51026w;

    /* renamed from: x  reason: collision with root package name */
    public final p f51027x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f51028y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f51029z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f51030a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f51031b;

        static {
            int[] iArr = new int[i.a.values().length];
            f51031b = iArr;
            try {
                iArr[i.a.MASK_MODE_NONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f51031b[i.a.MASK_MODE_SUBTRACT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f51031b[i.a.MASK_MODE_INTERSECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f51031b[i.a.MASK_MODE_ADD.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            int[] iArr2 = new int[e.a.values().length];
            f51030a = iArr2;
            try {
                iArr2[e.a.SHAPE.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f51030a[e.a.PRE_COMP.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f51030a[e.a.SOLID.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f51030a[e.a.IMAGE.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f51030a[e.a.NULL.ordinal()] = 5;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f51030a[e.a.TEXT.ordinal()] = 6;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f51030a[e.a.UNKNOWN.ordinal()] = 7;
            } catch (NoSuchFieldError unused11) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(n nVar, e eVar) {
        PorterDuff.Mode mode = PorterDuff.Mode.DST_IN;
        this.f51008e = new m5.a(1, mode);
        PorterDuff.Mode mode2 = PorterDuff.Mode.DST_OUT;
        this.f51009f = new m5.a(1, mode2);
        m5.a aVar = new m5.a(1);
        this.f51010g = aVar;
        this.f51011h = new m5.a(PorterDuff.Mode.CLEAR);
        this.f51012i = new RectF();
        this.f51013j = new RectF();
        this.f51014k = new RectF();
        this.f51015l = new RectF();
        this.f51016m = new RectF();
        this.f51018o = new Matrix();
        this.f51026w = new ArrayList();
        this.f51028y = true;
        this.B = 0.0f;
        this.f51019p = nVar;
        this.f51020q = eVar;
        this.f51017n = eVar.j() + "#draw";
        if (eVar.i() == e.b.INVERT) {
            aVar.setXfermode(new PorterDuffXfermode(mode2));
        } else {
            aVar.setXfermode(new PorterDuffXfermode(mode));
        }
        p b10 = eVar.x().b();
        this.f51027x = b10;
        b10.b(this);
        if (eVar.h() != null && !eVar.h().isEmpty()) {
            o5.h hVar = new o5.h(eVar.h());
            this.f51021r = hVar;
            for (o5.a aVar2 : hVar.a()) {
                aVar2.a(this);
            }
            for (o5.a aVar3 : this.f51021r.c()) {
                i(aVar3);
                aVar3.a(this);
            }
        }
        O();
    }

    private void D(RectF rectF, Matrix matrix) {
        this.f51014k.set(0.0f, 0.0f, 0.0f, 0.0f);
        if (B()) {
            int size = this.f51021r.b().size();
            for (int i10 = 0; i10 < size; i10++) {
                t5.i iVar = (t5.i) this.f51021r.b().get(i10);
                Path path = (Path) ((o5.a) this.f51021r.a().get(i10)).h();
                if (path != null) {
                    this.f51004a.set(path);
                    this.f51004a.transform(matrix);
                    int i11 = a.f51031b[iVar.a().ordinal()];
                    if (i11 != 1 && i11 != 2) {
                        if ((i11 != 3 && i11 != 4) || !iVar.d()) {
                            this.f51004a.computeBounds(this.f51016m, false);
                            if (i10 == 0) {
                                this.f51014k.set(this.f51016m);
                            } else {
                                RectF rectF2 = this.f51014k;
                                rectF2.set(Math.min(rectF2.left, this.f51016m.left), Math.min(this.f51014k.top, this.f51016m.top), Math.max(this.f51014k.right, this.f51016m.right), Math.max(this.f51014k.bottom, this.f51016m.bottom));
                            }
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                }
            }
            if (!rectF.intersect(this.f51014k)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void E(RectF rectF, Matrix matrix) {
        if (C() && this.f51020q.i() != e.b.INVERT) {
            this.f51015l.set(0.0f, 0.0f, 0.0f, 0.0f);
            this.f51023t.f(this.f51015l, matrix, true);
            if (!rectF.intersect(this.f51015l)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void F() {
        this.f51019p.invalidateSelf();
    }

    private void G(float f10) {
        this.f51019p.J().n().a(this.f51020q.j(), f10);
    }

    private void N(boolean z10) {
        if (z10 != this.f51028y) {
            this.f51028y = z10;
            F();
        }
    }

    private void O() {
        boolean z10 = true;
        if (!this.f51020q.f().isEmpty()) {
            o5.d dVar = new o5.d(this.f51020q.f());
            this.f51022s = dVar;
            dVar.m();
            this.f51022s.a(new a.b() { // from class: u5.a
                @Override // o5.a.b
                public final void a() {
                    b.g(b.this);
                }
            });
            if (((Float) this.f51022s.h()).floatValue() != 1.0f) {
                z10 = false;
            }
            N(z10);
            i(this.f51022s);
            return;
        }
        N(true);
    }

    public static /* synthetic */ void g(b bVar) {
        boolean z10;
        if (bVar.f51022s.q() == 1.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        bVar.N(z10);
    }

    private void j(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        this.f51004a.set((Path) aVar.h());
        this.f51004a.transform(matrix);
        this.f51007d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f51004a, this.f51007d);
    }

    private void k(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.n(canvas, this.f51012i, this.f51008e);
        this.f51004a.set((Path) aVar.h());
        this.f51004a.transform(matrix);
        this.f51007d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f51004a, this.f51007d);
        canvas.restore();
    }

    private void l(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.n(canvas, this.f51012i, this.f51007d);
        canvas.drawRect(this.f51012i, this.f51007d);
        this.f51004a.set((Path) aVar.h());
        this.f51004a.transform(matrix);
        this.f51007d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f51004a, this.f51009f);
        canvas.restore();
    }

    private void m(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.n(canvas, this.f51012i, this.f51008e);
        canvas.drawRect(this.f51012i, this.f51007d);
        this.f51009f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f51004a.set((Path) aVar.h());
        this.f51004a.transform(matrix);
        canvas.drawPath(this.f51004a, this.f51009f);
        canvas.restore();
    }

    private void n(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.n(canvas, this.f51012i, this.f51009f);
        canvas.drawRect(this.f51012i, this.f51007d);
        this.f51009f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f51004a.set((Path) aVar.h());
        this.f51004a.transform(matrix);
        canvas.drawPath(this.f51004a, this.f51009f);
        canvas.restore();
    }

    private void o(Canvas canvas, Matrix matrix) {
        if (l5.e.h()) {
            l5.e.b("Layer#saveLayer");
        }
        j.o(canvas, this.f51012i, this.f51008e, 19);
        if (Build.VERSION.SDK_INT < 28) {
            s(canvas);
        }
        if (l5.e.h()) {
            l5.e.c("Layer#saveLayer");
        }
        for (int i10 = 0; i10 < this.f51021r.b().size(); i10++) {
            t5.i iVar = (t5.i) this.f51021r.b().get(i10);
            o5.a aVar = (o5.a) this.f51021r.a().get(i10);
            o5.a aVar2 = (o5.a) this.f51021r.c().get(i10);
            int i11 = a.f51031b[iVar.a().ordinal()];
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
                        this.f51007d.setColor(-16777216);
                        this.f51007d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        canvas.drawRect(this.f51012i, this.f51007d);
                    }
                    if (iVar.d()) {
                        n(canvas, matrix, aVar, aVar2);
                    } else {
                        p(canvas, matrix, aVar);
                    }
                }
            } else if (q()) {
                this.f51007d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                canvas.drawRect(this.f51012i, this.f51007d);
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
        this.f51004a.set((Path) aVar.h());
        this.f51004a.transform(matrix);
        canvas.drawPath(this.f51004a, this.f51009f);
    }

    private boolean q() {
        if (this.f51021r.a().isEmpty()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f51021r.b().size(); i10++) {
            if (((t5.i) this.f51021r.b().get(i10)).a() != i.a.MASK_MODE_NONE) {
                return false;
            }
        }
        return true;
    }

    private void r() {
        if (this.f51025v == null) {
            if (this.f51024u == null) {
                this.f51025v = Collections.EMPTY_LIST;
                return;
            }
            this.f51025v = new ArrayList();
            for (b bVar = this.f51024u; bVar != null; bVar = bVar.f51024u) {
                this.f51025v.add(bVar);
            }
        }
    }

    private void s(Canvas canvas) {
        if (l5.e.h()) {
            l5.e.b("Layer#clearLayer");
        }
        RectF rectF = this.f51012i;
        canvas.drawRect(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f, this.f51011h);
        if (l5.e.h()) {
            l5.e.c("Layer#clearLayer");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b v(c cVar, e eVar, n nVar, l5.i iVar) {
        switch (a.f51030a[eVar.g().ordinal()]) {
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
        return this.f51020q;
    }

    boolean B() {
        o5.h hVar = this.f51021r;
        if (hVar != null && !hVar.a().isEmpty()) {
            return true;
        }
        return false;
    }

    boolean C() {
        if (this.f51023t != null) {
            return true;
        }
        return false;
    }

    public void H(o5.a aVar) {
        this.f51026w.remove(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(b bVar) {
        this.f51023t = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (z10 && this.A == null) {
            this.A = new m5.a();
        }
        this.f51029z = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(b bVar) {
        this.f51024u = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(float f10) {
        if (l5.e.h()) {
            l5.e.b("BaseLayer#setProgress");
            l5.e.b("BaseLayer#setProgress.transform");
        }
        this.f51027x.j(f10);
        if (l5.e.h()) {
            l5.e.c("BaseLayer#setProgress.transform");
        }
        if (this.f51021r != null) {
            if (l5.e.h()) {
                l5.e.b("BaseLayer#setProgress.mask");
            }
            for (int i10 = 0; i10 < this.f51021r.a().size(); i10++) {
                ((o5.a) this.f51021r.a().get(i10)).n(f10);
            }
            if (l5.e.h()) {
                l5.e.c("BaseLayer#setProgress.mask");
            }
        }
        if (this.f51022s != null) {
            if (l5.e.h()) {
                l5.e.b("BaseLayer#setProgress.inout");
            }
            this.f51022s.n(f10);
            if (l5.e.h()) {
                l5.e.c("BaseLayer#setProgress.inout");
            }
        }
        if (this.f51023t != null) {
            if (l5.e.h()) {
                l5.e.b("BaseLayer#setProgress.matte");
            }
            this.f51023t.M(f10);
            if (l5.e.h()) {
                l5.e.c("BaseLayer#setProgress.matte");
            }
        }
        if (l5.e.h()) {
            l5.e.b("BaseLayer#setProgress.animations." + this.f51026w.size());
        }
        for (int i11 = 0; i11 < this.f51026w.size(); i11++) {
            ((o5.a) this.f51026w.get(i11)).n(f10);
        }
        if (l5.e.h()) {
            l5.e.c("BaseLayer#setProgress.animations." + this.f51026w.size());
            l5.e.c("BaseLayer#setProgress");
        }
    }

    @Override // o5.a.b
    public void a() {
        F();
    }

    @Override // r5.f
    public void d(Object obj, z5.c cVar) {
        this.f51027x.c(obj, cVar);
    }

    @Override // r5.f
    public void e(r5.e eVar, int i10, List list, r5.e eVar2) {
        b bVar = this.f51023t;
        if (bVar != null) {
            r5.e a10 = eVar2.a(bVar.getName());
            if (eVar.c(this.f51023t.getName(), i10)) {
                list.add(a10.i(this.f51023t));
            }
            if (eVar.h(getName(), i10)) {
                this.f51023t.I(eVar, eVar.e(this.f51023t.getName(), i10) + i10, list, a10);
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
        this.f51012i.set(0.0f, 0.0f, 0.0f, 0.0f);
        r();
        this.f51018o.set(matrix);
        if (z10) {
            List list = this.f51025v;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.f51018o.preConcat(((b) this.f51025v.get(size)).f51027x.f());
                }
            } else {
                b bVar = this.f51024u;
                if (bVar != null) {
                    this.f51018o.preConcat(bVar.f51027x.f());
                }
            }
        }
        this.f51018o.preConcat(this.f51027x.f());
    }

    @Override // n5.c
    public String getName() {
        return this.f51020q.j();
    }

    @Override // n5.e
    public void h(Canvas canvas, Matrix matrix, int i10) {
        int i11;
        Canvas canvas2;
        Paint paint;
        Integer num;
        l5.e.b(this.f51017n);
        if (this.f51028y && !this.f51020q.y()) {
            r();
            if (l5.e.h()) {
                l5.e.b("Layer#parentMatrix");
            }
            this.f51005b.reset();
            this.f51005b.set(matrix);
            for (int size = this.f51025v.size() - 1; size >= 0; size--) {
                this.f51005b.preConcat(((b) this.f51025v.get(size)).f51027x.f());
            }
            if (l5.e.h()) {
                l5.e.c("Layer#parentMatrix");
            }
            o5.a h10 = this.f51027x.h();
            if (h10 != null && (num = (Integer) h10.h()) != null) {
                i11 = num.intValue();
            } else {
                i11 = 100;
            }
            int i12 = (int) ((((i10 / 255.0f) * i11) / 100.0f) * 255.0f);
            if (!C() && !B() && w() == t5.h.NORMAL) {
                this.f51005b.preConcat(this.f51027x.f());
                if (l5.e.h()) {
                    l5.e.b("Layer#drawLayer");
                }
                u(canvas, this.f51005b, i12);
                if (l5.e.h()) {
                    l5.e.c("Layer#drawLayer");
                }
                G(l5.e.c(this.f51017n));
                return;
            }
            if (l5.e.h()) {
                l5.e.b("Layer#computeBounds");
            }
            f(this.f51012i, this.f51005b, false);
            E(this.f51012i, matrix);
            this.f51005b.preConcat(this.f51027x.f());
            D(this.f51012i, this.f51005b);
            this.f51013j.set(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
            canvas.getMatrix(this.f51006c);
            if (!this.f51006c.isIdentity()) {
                Matrix matrix2 = this.f51006c;
                matrix2.invert(matrix2);
                this.f51006c.mapRect(this.f51013j);
            }
            if (!this.f51012i.intersect(this.f51013j)) {
                this.f51012i.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
            if (l5.e.h()) {
                l5.e.c("Layer#computeBounds");
            }
            if (this.f51012i.width() >= 1.0f && this.f51012i.height() >= 1.0f) {
                if (l5.e.h()) {
                    l5.e.b("Layer#saveLayer");
                }
                this.f51007d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                r1.d.b(this.f51007d, w().d());
                j.n(canvas, this.f51012i, this.f51007d);
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
                    RectF rectF = this.f51012i;
                    canvas2 = canvas;
                    canvas2.drawRect(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f, this.D);
                }
                if (l5.e.h()) {
                    l5.e.b("Layer#drawLayer");
                }
                u(canvas2, this.f51005b, i12);
                if (l5.e.h()) {
                    l5.e.c("Layer#drawLayer");
                }
                if (B()) {
                    o(canvas2, this.f51005b);
                }
                if (C()) {
                    if (l5.e.h()) {
                        l5.e.b("Layer#drawMatte");
                        l5.e.b("Layer#saveLayer");
                    }
                    j.o(canvas2, this.f51012i, this.f51010g, 19);
                    if (l5.e.h()) {
                        l5.e.c("Layer#saveLayer");
                    }
                    s(canvas2);
                    this.f51023t.h(canvas2, matrix, i12);
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
            if (this.f51029z && (paint = this.A) != null) {
                paint.setStyle(Paint.Style.STROKE);
                this.A.setColor(-251901);
                this.A.setStrokeWidth(4.0f);
                canvas2.drawRect(this.f51012i, this.A);
                this.A.setStyle(Paint.Style.FILL);
                this.A.setColor(1357638635);
                canvas2.drawRect(this.f51012i, this.A);
            }
            G(l5.e.c(this.f51017n));
            return;
        }
        l5.e.c(this.f51017n);
    }

    public void i(o5.a aVar) {
        if (aVar == null) {
            return;
        }
        this.f51026w.add(aVar);
    }

    abstract void u(Canvas canvas, Matrix matrix, int i10);

    public t5.h w() {
        return this.f51020q.a();
    }

    public t5.a x() {
        return this.f51020q.b();
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
        return this.f51020q.d();
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }

    void I(r5.e eVar, int i10, List list, r5.e eVar2) {
    }
}
