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
    private final Path f49227a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f49228b = new Matrix();

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f49229c = new Matrix();

    /* renamed from: d  reason: collision with root package name */
    private final Paint f49230d = new m5.a(1);

    /* renamed from: e  reason: collision with root package name */
    private final Paint f49231e;

    /* renamed from: f  reason: collision with root package name */
    private final Paint f49232f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f49233g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f49234h;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f49235i;

    /* renamed from: j  reason: collision with root package name */
    private final RectF f49236j;

    /* renamed from: k  reason: collision with root package name */
    private final RectF f49237k;

    /* renamed from: l  reason: collision with root package name */
    private final RectF f49238l;

    /* renamed from: m  reason: collision with root package name */
    private final RectF f49239m;

    /* renamed from: n  reason: collision with root package name */
    private final String f49240n;

    /* renamed from: o  reason: collision with root package name */
    final Matrix f49241o;

    /* renamed from: p  reason: collision with root package name */
    final n f49242p;

    /* renamed from: q  reason: collision with root package name */
    final e f49243q;

    /* renamed from: r  reason: collision with root package name */
    private o5.h f49244r;

    /* renamed from: s  reason: collision with root package name */
    private o5.d f49245s;

    /* renamed from: t  reason: collision with root package name */
    private b f49246t;

    /* renamed from: u  reason: collision with root package name */
    private b f49247u;

    /* renamed from: v  reason: collision with root package name */
    private List f49248v;

    /* renamed from: w  reason: collision with root package name */
    private final List f49249w;

    /* renamed from: x  reason: collision with root package name */
    final p f49250x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f49251y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f49252z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f49253a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f49254b;

        static {
            int[] iArr = new int[i.a.values().length];
            f49254b = iArr;
            try {
                iArr[i.a.MASK_MODE_NONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f49254b[i.a.MASK_MODE_SUBTRACT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f49254b[i.a.MASK_MODE_INTERSECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f49254b[i.a.MASK_MODE_ADD.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            int[] iArr2 = new int[e.a.values().length];
            f49253a = iArr2;
            try {
                iArr2[e.a.SHAPE.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f49253a[e.a.PRE_COMP.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f49253a[e.a.SOLID.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f49253a[e.a.IMAGE.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f49253a[e.a.NULL.ordinal()] = 5;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f49253a[e.a.TEXT.ordinal()] = 6;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f49253a[e.a.UNKNOWN.ordinal()] = 7;
            } catch (NoSuchFieldError unused11) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(n nVar, e eVar) {
        PorterDuff.Mode mode = PorterDuff.Mode.DST_IN;
        this.f49231e = new m5.a(1, mode);
        PorterDuff.Mode mode2 = PorterDuff.Mode.DST_OUT;
        this.f49232f = new m5.a(1, mode2);
        m5.a aVar = new m5.a(1);
        this.f49233g = aVar;
        this.f49234h = new m5.a(PorterDuff.Mode.CLEAR);
        this.f49235i = new RectF();
        this.f49236j = new RectF();
        this.f49237k = new RectF();
        this.f49238l = new RectF();
        this.f49239m = new RectF();
        this.f49241o = new Matrix();
        this.f49249w = new ArrayList();
        this.f49251y = true;
        this.B = 0.0f;
        this.f49242p = nVar;
        this.f49243q = eVar;
        this.f49240n = eVar.j() + "#draw";
        if (eVar.i() == e.b.INVERT) {
            aVar.setXfermode(new PorterDuffXfermode(mode2));
        } else {
            aVar.setXfermode(new PorterDuffXfermode(mode));
        }
        p b10 = eVar.x().b();
        this.f49250x = b10;
        b10.b(this);
        if (eVar.h() != null && !eVar.h().isEmpty()) {
            o5.h hVar = new o5.h(eVar.h());
            this.f49244r = hVar;
            for (o5.a aVar2 : hVar.a()) {
                aVar2.a(this);
            }
            for (o5.a aVar3 : this.f49244r.c()) {
                i(aVar3);
                aVar3.a(this);
            }
        }
        O();
    }

    private void D(RectF rectF, Matrix matrix) {
        this.f49237k.set(0.0f, 0.0f, 0.0f, 0.0f);
        if (B()) {
            int size = this.f49244r.b().size();
            for (int i10 = 0; i10 < size; i10++) {
                s5.i iVar = (s5.i) this.f49244r.b().get(i10);
                Path path = (Path) ((o5.a) this.f49244r.a().get(i10)).h();
                if (path != null) {
                    this.f49227a.set(path);
                    this.f49227a.transform(matrix);
                    int i11 = a.f49254b[iVar.a().ordinal()];
                    if (i11 != 1 && i11 != 2) {
                        if ((i11 != 3 && i11 != 4) || !iVar.d()) {
                            this.f49227a.computeBounds(this.f49239m, false);
                            if (i10 == 0) {
                                this.f49237k.set(this.f49239m);
                            } else {
                                RectF rectF2 = this.f49237k;
                                rectF2.set(Math.min(rectF2.left, this.f49239m.left), Math.min(this.f49237k.top, this.f49239m.top), Math.max(this.f49237k.right, this.f49239m.right), Math.max(this.f49237k.bottom, this.f49239m.bottom));
                            }
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                }
            }
            if (!rectF.intersect(this.f49237k)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void E(RectF rectF, Matrix matrix) {
        if (C() && this.f49243q.i() != e.b.INVERT) {
            this.f49238l.set(0.0f, 0.0f, 0.0f, 0.0f);
            this.f49246t.e(this.f49238l, matrix, true);
            if (!rectF.intersect(this.f49238l)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void F() {
        this.f49242p.invalidateSelf();
    }

    private void G(float f10) {
        this.f49242p.K().n().a(this.f49243q.j(), f10);
    }

    private void N(boolean z10) {
        if (z10 != this.f49251y) {
            this.f49251y = z10;
            F();
        }
    }

    private void O() {
        boolean z10 = true;
        if (!this.f49243q.f().isEmpty()) {
            o5.d dVar = new o5.d(this.f49243q.f());
            this.f49245s = dVar;
            dVar.m();
            this.f49245s.a(new a.b() { // from class: t5.a
                @Override // o5.a.b
                public final void a() {
                    b.f(b.this);
                }
            });
            if (((Float) this.f49245s.h()).floatValue() != 1.0f) {
                z10 = false;
            }
            N(z10);
            i(this.f49245s);
            return;
        }
        N(true);
    }

    public static /* synthetic */ void f(b bVar) {
        boolean z10;
        if (bVar.f49245s.q() == 1.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        bVar.N(z10);
    }

    private void j(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        this.f49227a.set((Path) aVar.h());
        this.f49227a.transform(matrix);
        this.f49230d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f49227a, this.f49230d);
    }

    private void k(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f49235i, this.f49231e);
        this.f49227a.set((Path) aVar.h());
        this.f49227a.transform(matrix);
        this.f49230d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f49227a, this.f49230d);
        canvas.restore();
    }

    private void l(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f49235i, this.f49230d);
        canvas.drawRect(this.f49235i, this.f49230d);
        this.f49227a.set((Path) aVar.h());
        this.f49227a.transform(matrix);
        this.f49230d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f49227a, this.f49232f);
        canvas.restore();
    }

    private void m(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f49235i, this.f49231e);
        canvas.drawRect(this.f49235i, this.f49230d);
        this.f49232f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f49227a.set((Path) aVar.h());
        this.f49227a.transform(matrix);
        canvas.drawPath(this.f49227a, this.f49232f);
        canvas.restore();
    }

    private void n(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f49235i, this.f49232f);
        canvas.drawRect(this.f49235i, this.f49230d);
        this.f49232f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f49227a.set((Path) aVar.h());
        this.f49227a.transform(matrix);
        canvas.drawPath(this.f49227a, this.f49232f);
        canvas.restore();
    }

    private void o(Canvas canvas, Matrix matrix) {
        l5.e.b("Layer#saveLayer");
        j.n(canvas, this.f49235i, this.f49231e, 19);
        if (Build.VERSION.SDK_INT < 28) {
            t(canvas);
        }
        l5.e.c("Layer#saveLayer");
        for (int i10 = 0; i10 < this.f49244r.b().size(); i10++) {
            s5.i iVar = (s5.i) this.f49244r.b().get(i10);
            o5.a aVar = (o5.a) this.f49244r.a().get(i10);
            o5.a aVar2 = (o5.a) this.f49244r.c().get(i10);
            int i11 = a.f49254b[iVar.a().ordinal()];
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
                        this.f49230d.setColor(-16777216);
                        this.f49230d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        canvas.drawRect(this.f49235i, this.f49230d);
                    }
                    if (iVar.d()) {
                        n(canvas, matrix, aVar, aVar2);
                    } else {
                        p(canvas, matrix, aVar);
                    }
                }
            } else if (r()) {
                this.f49230d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                canvas.drawRect(this.f49235i, this.f49230d);
            }
        }
        l5.e.b("Layer#restoreLayer");
        canvas.restore();
        l5.e.c("Layer#restoreLayer");
    }

    private void p(Canvas canvas, Matrix matrix, o5.a aVar) {
        this.f49227a.set((Path) aVar.h());
        this.f49227a.transform(matrix);
        canvas.drawPath(this.f49227a, this.f49232f);
    }

    private boolean r() {
        if (this.f49244r.a().isEmpty()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f49244r.b().size(); i10++) {
            if (((s5.i) this.f49244r.b().get(i10)).a() != i.a.MASK_MODE_NONE) {
                return false;
            }
        }
        return true;
    }

    private void s() {
        if (this.f49248v == null) {
            if (this.f49247u == null) {
                this.f49248v = Collections.EMPTY_LIST;
                return;
            }
            this.f49248v = new ArrayList();
            for (b bVar = this.f49247u; bVar != null; bVar = bVar.f49247u) {
                this.f49248v.add(bVar);
            }
        }
    }

    private void t(Canvas canvas) {
        l5.e.b("Layer#clearLayer");
        RectF rectF = this.f49235i;
        canvas.drawRect(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f, this.f49234h);
        l5.e.c("Layer#clearLayer");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b v(c cVar, e eVar, n nVar, l5.i iVar) {
        switch (a.f49253a[eVar.g().ordinal()]) {
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
        return this.f49243q;
    }

    boolean B() {
        o5.h hVar = this.f49244r;
        if (hVar != null && !hVar.a().isEmpty()) {
            return true;
        }
        return false;
    }

    boolean C() {
        if (this.f49246t != null) {
            return true;
        }
        return false;
    }

    public void H(o5.a aVar) {
        this.f49249w.remove(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(b bVar) {
        this.f49246t = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (z10 && this.A == null) {
            this.A = new m5.a();
        }
        this.f49252z = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(b bVar) {
        this.f49247u = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(float f10) {
        l5.e.b("BaseLayer#setProgress");
        l5.e.b("BaseLayer#setProgress.transform");
        this.f49250x.j(f10);
        l5.e.c("BaseLayer#setProgress.transform");
        if (this.f49244r != null) {
            l5.e.b("BaseLayer#setProgress.mask");
            for (int i10 = 0; i10 < this.f49244r.a().size(); i10++) {
                ((o5.a) this.f49244r.a().get(i10)).n(f10);
            }
            l5.e.c("BaseLayer#setProgress.mask");
        }
        if (this.f49245s != null) {
            l5.e.b("BaseLayer#setProgress.inout");
            this.f49245s.n(f10);
            l5.e.c("BaseLayer#setProgress.inout");
        }
        if (this.f49246t != null) {
            l5.e.b("BaseLayer#setProgress.matte");
            this.f49246t.M(f10);
            l5.e.c("BaseLayer#setProgress.matte");
        }
        l5.e.b("BaseLayer#setProgress.animations." + this.f49249w.size());
        for (int i11 = 0; i11 < this.f49249w.size(); i11++) {
            ((o5.a) this.f49249w.get(i11)).n(f10);
        }
        l5.e.c("BaseLayer#setProgress.animations." + this.f49249w.size());
        l5.e.c("BaseLayer#setProgress");
    }

    @Override // o5.a.b
    public void a() {
        F();
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        b bVar = this.f49246t;
        if (bVar != null) {
            q5.e a10 = eVar2.a(bVar.getName());
            if (eVar.c(this.f49246t.getName(), i10)) {
                list.add(a10.i(this.f49246t));
            }
            if (eVar.h(getName(), i10)) {
                this.f49246t.I(eVar, eVar.e(this.f49246t.getName(), i10) + i10, list, a10);
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
        this.f49250x.c(obj, cVar);
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f49235i.set(0.0f, 0.0f, 0.0f, 0.0f);
        s();
        this.f49241o.set(matrix);
        if (z10) {
            List list = this.f49248v;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.f49241o.preConcat(((b) this.f49248v.get(size)).f49250x.f());
                }
            } else {
                b bVar = this.f49247u;
                if (bVar != null) {
                    this.f49241o.preConcat(bVar.f49250x.f());
                }
            }
        }
        this.f49241o.preConcat(this.f49250x.f());
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        int i11;
        Paint paint;
        Integer num;
        l5.e.b(this.f49240n);
        if (this.f49251y && !this.f49243q.y()) {
            s();
            l5.e.b("Layer#parentMatrix");
            this.f49228b.reset();
            this.f49228b.set(matrix);
            for (int size = this.f49248v.size() - 1; size >= 0; size--) {
                this.f49228b.preConcat(((b) this.f49248v.get(size)).f49250x.f());
            }
            l5.e.c("Layer#parentMatrix");
            o5.a h10 = this.f49250x.h();
            if (h10 != null && (num = (Integer) h10.h()) != null) {
                i11 = num.intValue();
            } else {
                i11 = 100;
            }
            int i12 = (int) ((((i10 / 255.0f) * i11) / 100.0f) * 255.0f);
            if (!C() && !B()) {
                this.f49228b.preConcat(this.f49250x.f());
                l5.e.b("Layer#drawLayer");
                u(canvas, this.f49228b, i12);
                l5.e.c("Layer#drawLayer");
                G(l5.e.c(this.f49240n));
                return;
            }
            l5.e.b("Layer#computeBounds");
            e(this.f49235i, this.f49228b, false);
            E(this.f49235i, matrix);
            this.f49228b.preConcat(this.f49250x.f());
            D(this.f49235i, this.f49228b);
            this.f49236j.set(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
            canvas.getMatrix(this.f49229c);
            if (!this.f49229c.isIdentity()) {
                Matrix matrix2 = this.f49229c;
                matrix2.invert(matrix2);
                this.f49229c.mapRect(this.f49236j);
            }
            if (!this.f49235i.intersect(this.f49236j)) {
                this.f49235i.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
            l5.e.c("Layer#computeBounds");
            if (this.f49235i.width() >= 1.0f && this.f49235i.height() >= 1.0f) {
                l5.e.b("Layer#saveLayer");
                this.f49230d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                j.m(canvas, this.f49235i, this.f49230d);
                l5.e.c("Layer#saveLayer");
                t(canvas);
                l5.e.b("Layer#drawLayer");
                u(canvas, this.f49228b, i12);
                l5.e.c("Layer#drawLayer");
                if (B()) {
                    o(canvas, this.f49228b);
                }
                if (C()) {
                    l5.e.b("Layer#drawMatte");
                    l5.e.b("Layer#saveLayer");
                    j.n(canvas, this.f49235i, this.f49233g, 19);
                    l5.e.c("Layer#saveLayer");
                    t(canvas);
                    this.f49246t.g(canvas, matrix, i12);
                    l5.e.b("Layer#restoreLayer");
                    canvas.restore();
                    l5.e.c("Layer#restoreLayer");
                    l5.e.c("Layer#drawMatte");
                }
                l5.e.b("Layer#restoreLayer");
                canvas.restore();
                l5.e.c("Layer#restoreLayer");
            }
            if (this.f49252z && (paint = this.A) != null) {
                paint.setStyle(Paint.Style.STROKE);
                this.A.setColor(-251901);
                this.A.setStrokeWidth(4.0f);
                canvas.drawRect(this.f49235i, this.A);
                this.A.setStyle(Paint.Style.FILL);
                this.A.setColor(1357638635);
                canvas.drawRect(this.f49235i, this.A);
            }
            G(l5.e.c(this.f49240n));
            return;
        }
        l5.e.c(this.f49240n);
    }

    @Override // n5.c
    public String getName() {
        return this.f49243q.j();
    }

    public void i(o5.a aVar) {
        if (aVar == null) {
            return;
        }
        this.f49249w.add(aVar);
    }

    abstract void u(Canvas canvas, Matrix matrix, int i10);

    public s5.h w() {
        return this.f49243q.a();
    }

    public s5.a x() {
        return this.f49243q.b();
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
        return this.f49243q.d();
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }

    void I(q5.e eVar, int i10, List list, q5.e eVar2) {
    }
}
