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
    private final Path f49726a = new Path();

    /* renamed from: b  reason: collision with root package name */
    private final Matrix f49727b = new Matrix();

    /* renamed from: c  reason: collision with root package name */
    private final Matrix f49728c = new Matrix();

    /* renamed from: d  reason: collision with root package name */
    private final Paint f49729d = new m5.a(1);

    /* renamed from: e  reason: collision with root package name */
    private final Paint f49730e;

    /* renamed from: f  reason: collision with root package name */
    private final Paint f49731f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f49732g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f49733h;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f49734i;

    /* renamed from: j  reason: collision with root package name */
    private final RectF f49735j;

    /* renamed from: k  reason: collision with root package name */
    private final RectF f49736k;

    /* renamed from: l  reason: collision with root package name */
    private final RectF f49737l;

    /* renamed from: m  reason: collision with root package name */
    private final RectF f49738m;

    /* renamed from: n  reason: collision with root package name */
    private final String f49739n;

    /* renamed from: o  reason: collision with root package name */
    final Matrix f49740o;

    /* renamed from: p  reason: collision with root package name */
    final n f49741p;

    /* renamed from: q  reason: collision with root package name */
    final e f49742q;

    /* renamed from: r  reason: collision with root package name */
    private o5.h f49743r;

    /* renamed from: s  reason: collision with root package name */
    private o5.d f49744s;

    /* renamed from: t  reason: collision with root package name */
    private b f49745t;

    /* renamed from: u  reason: collision with root package name */
    private b f49746u;

    /* renamed from: v  reason: collision with root package name */
    private List f49747v;

    /* renamed from: w  reason: collision with root package name */
    private final List f49748w;

    /* renamed from: x  reason: collision with root package name */
    final p f49749x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f49750y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f49751z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f49752a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f49753b;

        static {
            int[] iArr = new int[i.a.values().length];
            f49753b = iArr;
            try {
                iArr[i.a.MASK_MODE_NONE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f49753b[i.a.MASK_MODE_SUBTRACT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f49753b[i.a.MASK_MODE_INTERSECT.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f49753b[i.a.MASK_MODE_ADD.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            int[] iArr2 = new int[e.a.values().length];
            f49752a = iArr2;
            try {
                iArr2[e.a.SHAPE.ordinal()] = 1;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f49752a[e.a.PRE_COMP.ordinal()] = 2;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f49752a[e.a.SOLID.ordinal()] = 3;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f49752a[e.a.IMAGE.ordinal()] = 4;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f49752a[e.a.NULL.ordinal()] = 5;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f49752a[e.a.TEXT.ordinal()] = 6;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f49752a[e.a.UNKNOWN.ordinal()] = 7;
            } catch (NoSuchFieldError unused11) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(n nVar, e eVar) {
        PorterDuff.Mode mode = PorterDuff.Mode.DST_IN;
        this.f49730e = new m5.a(1, mode);
        PorterDuff.Mode mode2 = PorterDuff.Mode.DST_OUT;
        this.f49731f = new m5.a(1, mode2);
        m5.a aVar = new m5.a(1);
        this.f49732g = aVar;
        this.f49733h = new m5.a(PorterDuff.Mode.CLEAR);
        this.f49734i = new RectF();
        this.f49735j = new RectF();
        this.f49736k = new RectF();
        this.f49737l = new RectF();
        this.f49738m = new RectF();
        this.f49740o = new Matrix();
        this.f49748w = new ArrayList();
        this.f49750y = true;
        this.B = 0.0f;
        this.f49741p = nVar;
        this.f49742q = eVar;
        this.f49739n = eVar.j() + "#draw";
        if (eVar.i() == e.b.INVERT) {
            aVar.setXfermode(new PorterDuffXfermode(mode2));
        } else {
            aVar.setXfermode(new PorterDuffXfermode(mode));
        }
        p b10 = eVar.x().b();
        this.f49749x = b10;
        b10.b(this);
        if (eVar.h() != null && !eVar.h().isEmpty()) {
            o5.h hVar = new o5.h(eVar.h());
            this.f49743r = hVar;
            for (o5.a aVar2 : hVar.a()) {
                aVar2.a(this);
            }
            for (o5.a aVar3 : this.f49743r.c()) {
                i(aVar3);
                aVar3.a(this);
            }
        }
        O();
    }

    private void D(RectF rectF, Matrix matrix) {
        this.f49736k.set(0.0f, 0.0f, 0.0f, 0.0f);
        if (B()) {
            int size = this.f49743r.b().size();
            for (int i10 = 0; i10 < size; i10++) {
                s5.i iVar = (s5.i) this.f49743r.b().get(i10);
                Path path = (Path) ((o5.a) this.f49743r.a().get(i10)).h();
                if (path != null) {
                    this.f49726a.set(path);
                    this.f49726a.transform(matrix);
                    int i11 = a.f49753b[iVar.a().ordinal()];
                    if (i11 != 1 && i11 != 2) {
                        if ((i11 != 3 && i11 != 4) || !iVar.d()) {
                            this.f49726a.computeBounds(this.f49738m, false);
                            if (i10 == 0) {
                                this.f49736k.set(this.f49738m);
                            } else {
                                RectF rectF2 = this.f49736k;
                                rectF2.set(Math.min(rectF2.left, this.f49738m.left), Math.min(this.f49736k.top, this.f49738m.top), Math.max(this.f49736k.right, this.f49738m.right), Math.max(this.f49736k.bottom, this.f49738m.bottom));
                            }
                        } else {
                            return;
                        }
                    } else {
                        return;
                    }
                }
            }
            if (!rectF.intersect(this.f49736k)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void E(RectF rectF, Matrix matrix) {
        if (C() && this.f49742q.i() != e.b.INVERT) {
            this.f49737l.set(0.0f, 0.0f, 0.0f, 0.0f);
            this.f49745t.e(this.f49737l, matrix, true);
            if (!rectF.intersect(this.f49737l)) {
                rectF.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
        }
    }

    private void F() {
        this.f49741p.invalidateSelf();
    }

    private void G(float f10) {
        this.f49741p.K().n().a(this.f49742q.j(), f10);
    }

    private void N(boolean z10) {
        if (z10 != this.f49750y) {
            this.f49750y = z10;
            F();
        }
    }

    private void O() {
        boolean z10 = true;
        if (!this.f49742q.f().isEmpty()) {
            o5.d dVar = new o5.d(this.f49742q.f());
            this.f49744s = dVar;
            dVar.m();
            this.f49744s.a(new a.b() { // from class: t5.a
                @Override // o5.a.b
                public final void a() {
                    b.f(b.this);
                }
            });
            if (((Float) this.f49744s.h()).floatValue() != 1.0f) {
                z10 = false;
            }
            N(z10);
            i(this.f49744s);
            return;
        }
        N(true);
    }

    public static /* synthetic */ void f(b bVar) {
        boolean z10;
        if (bVar.f49744s.q() == 1.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        bVar.N(z10);
    }

    private void j(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        this.f49726a.set((Path) aVar.h());
        this.f49726a.transform(matrix);
        this.f49729d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f49726a, this.f49729d);
    }

    private void k(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f49734i, this.f49730e);
        this.f49726a.set((Path) aVar.h());
        this.f49726a.transform(matrix);
        this.f49729d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f49726a, this.f49729d);
        canvas.restore();
    }

    private void l(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f49734i, this.f49729d);
        canvas.drawRect(this.f49734i, this.f49729d);
        this.f49726a.set((Path) aVar.h());
        this.f49726a.transform(matrix);
        this.f49729d.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        canvas.drawPath(this.f49726a, this.f49731f);
        canvas.restore();
    }

    private void m(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f49734i, this.f49730e);
        canvas.drawRect(this.f49734i, this.f49729d);
        this.f49731f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f49726a.set((Path) aVar.h());
        this.f49726a.transform(matrix);
        canvas.drawPath(this.f49726a, this.f49731f);
        canvas.restore();
    }

    private void n(Canvas canvas, Matrix matrix, o5.a aVar, o5.a aVar2) {
        j.m(canvas, this.f49734i, this.f49731f);
        canvas.drawRect(this.f49734i, this.f49729d);
        this.f49731f.setAlpha((int) (((Integer) aVar2.h()).intValue() * 2.55f));
        this.f49726a.set((Path) aVar.h());
        this.f49726a.transform(matrix);
        canvas.drawPath(this.f49726a, this.f49731f);
        canvas.restore();
    }

    private void o(Canvas canvas, Matrix matrix) {
        l5.e.b("Layer#saveLayer");
        j.n(canvas, this.f49734i, this.f49730e, 19);
        if (Build.VERSION.SDK_INT < 28) {
            t(canvas);
        }
        l5.e.c("Layer#saveLayer");
        for (int i10 = 0; i10 < this.f49743r.b().size(); i10++) {
            s5.i iVar = (s5.i) this.f49743r.b().get(i10);
            o5.a aVar = (o5.a) this.f49743r.a().get(i10);
            o5.a aVar2 = (o5.a) this.f49743r.c().get(i10);
            int i11 = a.f49753b[iVar.a().ordinal()];
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
                        this.f49729d.setColor(-16777216);
                        this.f49729d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                        canvas.drawRect(this.f49734i, this.f49729d);
                    }
                    if (iVar.d()) {
                        n(canvas, matrix, aVar, aVar2);
                    } else {
                        p(canvas, matrix, aVar);
                    }
                }
            } else if (r()) {
                this.f49729d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                canvas.drawRect(this.f49734i, this.f49729d);
            }
        }
        l5.e.b("Layer#restoreLayer");
        canvas.restore();
        l5.e.c("Layer#restoreLayer");
    }

    private void p(Canvas canvas, Matrix matrix, o5.a aVar) {
        this.f49726a.set((Path) aVar.h());
        this.f49726a.transform(matrix);
        canvas.drawPath(this.f49726a, this.f49731f);
    }

    private boolean r() {
        if (this.f49743r.a().isEmpty()) {
            return false;
        }
        for (int i10 = 0; i10 < this.f49743r.b().size(); i10++) {
            if (((s5.i) this.f49743r.b().get(i10)).a() != i.a.MASK_MODE_NONE) {
                return false;
            }
        }
        return true;
    }

    private void s() {
        if (this.f49747v == null) {
            if (this.f49746u == null) {
                this.f49747v = Collections.EMPTY_LIST;
                return;
            }
            this.f49747v = new ArrayList();
            for (b bVar = this.f49746u; bVar != null; bVar = bVar.f49746u) {
                this.f49747v.add(bVar);
            }
        }
    }

    private void t(Canvas canvas) {
        l5.e.b("Layer#clearLayer");
        RectF rectF = this.f49734i;
        canvas.drawRect(rectF.left - 1.0f, rectF.top - 1.0f, rectF.right + 1.0f, rectF.bottom + 1.0f, this.f49733h);
        l5.e.c("Layer#clearLayer");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static b v(c cVar, e eVar, n nVar, l5.i iVar) {
        switch (a.f49752a[eVar.g().ordinal()]) {
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
        return this.f49742q;
    }

    boolean B() {
        o5.h hVar = this.f49743r;
        if (hVar != null && !hVar.a().isEmpty()) {
            return true;
        }
        return false;
    }

    boolean C() {
        if (this.f49745t != null) {
            return true;
        }
        return false;
    }

    public void H(o5.a aVar) {
        this.f49748w.remove(aVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(b bVar) {
        this.f49745t = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(boolean z10) {
        if (z10 && this.A == null) {
            this.A = new m5.a();
        }
        this.f49751z = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(b bVar) {
        this.f49746u = bVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(float f10) {
        l5.e.b("BaseLayer#setProgress");
        l5.e.b("BaseLayer#setProgress.transform");
        this.f49749x.j(f10);
        l5.e.c("BaseLayer#setProgress.transform");
        if (this.f49743r != null) {
            l5.e.b("BaseLayer#setProgress.mask");
            for (int i10 = 0; i10 < this.f49743r.a().size(); i10++) {
                ((o5.a) this.f49743r.a().get(i10)).n(f10);
            }
            l5.e.c("BaseLayer#setProgress.mask");
        }
        if (this.f49744s != null) {
            l5.e.b("BaseLayer#setProgress.inout");
            this.f49744s.n(f10);
            l5.e.c("BaseLayer#setProgress.inout");
        }
        if (this.f49745t != null) {
            l5.e.b("BaseLayer#setProgress.matte");
            this.f49745t.M(f10);
            l5.e.c("BaseLayer#setProgress.matte");
        }
        l5.e.b("BaseLayer#setProgress.animations." + this.f49748w.size());
        for (int i11 = 0; i11 < this.f49748w.size(); i11++) {
            ((o5.a) this.f49748w.get(i11)).n(f10);
        }
        l5.e.c("BaseLayer#setProgress.animations." + this.f49748w.size());
        l5.e.c("BaseLayer#setProgress");
    }

    @Override // o5.a.b
    public void a() {
        F();
    }

    @Override // q5.f
    public void c(q5.e eVar, int i10, List list, q5.e eVar2) {
        b bVar = this.f49745t;
        if (bVar != null) {
            q5.e a10 = eVar2.a(bVar.getName());
            if (eVar.c(this.f49745t.getName(), i10)) {
                list.add(a10.i(this.f49745t));
            }
            if (eVar.h(getName(), i10)) {
                this.f49745t.I(eVar, eVar.e(this.f49745t.getName(), i10) + i10, list, a10);
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
        this.f49749x.c(obj, cVar);
    }

    @Override // n5.e
    public void e(RectF rectF, Matrix matrix, boolean z10) {
        this.f49734i.set(0.0f, 0.0f, 0.0f, 0.0f);
        s();
        this.f49740o.set(matrix);
        if (z10) {
            List list = this.f49747v;
            if (list != null) {
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.f49740o.preConcat(((b) this.f49747v.get(size)).f49749x.f());
                }
            } else {
                b bVar = this.f49746u;
                if (bVar != null) {
                    this.f49740o.preConcat(bVar.f49749x.f());
                }
            }
        }
        this.f49740o.preConcat(this.f49749x.f());
    }

    @Override // n5.e
    public void g(Canvas canvas, Matrix matrix, int i10) {
        int i11;
        Paint paint;
        Integer num;
        l5.e.b(this.f49739n);
        if (this.f49750y && !this.f49742q.y()) {
            s();
            l5.e.b("Layer#parentMatrix");
            this.f49727b.reset();
            this.f49727b.set(matrix);
            for (int size = this.f49747v.size() - 1; size >= 0; size--) {
                this.f49727b.preConcat(((b) this.f49747v.get(size)).f49749x.f());
            }
            l5.e.c("Layer#parentMatrix");
            o5.a h10 = this.f49749x.h();
            if (h10 != null && (num = (Integer) h10.h()) != null) {
                i11 = num.intValue();
            } else {
                i11 = 100;
            }
            int i12 = (int) ((((i10 / 255.0f) * i11) / 100.0f) * 255.0f);
            if (!C() && !B()) {
                this.f49727b.preConcat(this.f49749x.f());
                l5.e.b("Layer#drawLayer");
                u(canvas, this.f49727b, i12);
                l5.e.c("Layer#drawLayer");
                G(l5.e.c(this.f49739n));
                return;
            }
            l5.e.b("Layer#computeBounds");
            e(this.f49734i, this.f49727b, false);
            E(this.f49734i, matrix);
            this.f49727b.preConcat(this.f49749x.f());
            D(this.f49734i, this.f49727b);
            this.f49735j.set(0.0f, 0.0f, canvas.getWidth(), canvas.getHeight());
            canvas.getMatrix(this.f49728c);
            if (!this.f49728c.isIdentity()) {
                Matrix matrix2 = this.f49728c;
                matrix2.invert(matrix2);
                this.f49728c.mapRect(this.f49735j);
            }
            if (!this.f49734i.intersect(this.f49735j)) {
                this.f49734i.set(0.0f, 0.0f, 0.0f, 0.0f);
            }
            l5.e.c("Layer#computeBounds");
            if (this.f49734i.width() >= 1.0f && this.f49734i.height() >= 1.0f) {
                l5.e.b("Layer#saveLayer");
                this.f49729d.setAlpha(SetSpanOperation.SPAN_MAX_PRIORITY);
                j.m(canvas, this.f49734i, this.f49729d);
                l5.e.c("Layer#saveLayer");
                t(canvas);
                l5.e.b("Layer#drawLayer");
                u(canvas, this.f49727b, i12);
                l5.e.c("Layer#drawLayer");
                if (B()) {
                    o(canvas, this.f49727b);
                }
                if (C()) {
                    l5.e.b("Layer#drawMatte");
                    l5.e.b("Layer#saveLayer");
                    j.n(canvas, this.f49734i, this.f49732g, 19);
                    l5.e.c("Layer#saveLayer");
                    t(canvas);
                    this.f49745t.g(canvas, matrix, i12);
                    l5.e.b("Layer#restoreLayer");
                    canvas.restore();
                    l5.e.c("Layer#restoreLayer");
                    l5.e.c("Layer#drawMatte");
                }
                l5.e.b("Layer#restoreLayer");
                canvas.restore();
                l5.e.c("Layer#restoreLayer");
            }
            if (this.f49751z && (paint = this.A) != null) {
                paint.setStyle(Paint.Style.STROKE);
                this.A.setColor(-251901);
                this.A.setStrokeWidth(4.0f);
                canvas.drawRect(this.f49734i, this.A);
                this.A.setStyle(Paint.Style.FILL);
                this.A.setColor(1357638635);
                canvas.drawRect(this.f49734i, this.A);
            }
            G(l5.e.c(this.f49739n));
            return;
        }
        l5.e.c(this.f49739n);
    }

    @Override // n5.c
    public String getName() {
        return this.f49742q.j();
    }

    public void i(o5.a aVar) {
        if (aVar == null) {
            return;
        }
        this.f49748w.add(aVar);
    }

    abstract void u(Canvas canvas, Matrix matrix, int i10);

    public s5.h w() {
        return this.f49742q.a();
    }

    public s5.a x() {
        return this.f49742q.b();
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
        return this.f49742q.d();
    }

    @Override // n5.c
    public void b(List list, List list2) {
    }

    void I(q5.e eVar, int i10, List list, q5.e eVar2) {
    }
}
