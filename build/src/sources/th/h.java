package th;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.PorterDuffXfermode;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Region;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Looper;
import android.util.AttributeSet;
import android.util.Log;
import androidx.dynamicanimation.animation.SpringAnimation;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.BitSet;
import th.l;
import th.m;
import th.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class h extends Drawable implements o {
    private static final String Q = "h";
    static final l R = l.a().q(0, 0.0f).m();
    private static final Paint S;
    private static final e[] T;
    private final Paint A;
    private final sh.a B;
    private final m.b C;
    private final m D;
    private PorterDuffColorFilter E;
    private PorterDuffColorFilter F;
    private int G;
    private final RectF H;
    private boolean I;
    private boolean J;
    private l K;
    private androidx.dynamicanimation.animation.d L;
    SpringAnimation[] M;
    private float[] N;
    private float[] O;
    private d P;

    /* renamed from: d  reason: collision with root package name */
    private final l.c f48791d;

    /* renamed from: e  reason: collision with root package name */
    private c f48792e;

    /* renamed from: i  reason: collision with root package name */
    private final n.g[] f48793i;

    /* renamed from: o  reason: collision with root package name */
    private final n.g[] f48794o;

    /* renamed from: p  reason: collision with root package name */
    private final BitSet f48795p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f48796q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f48797r;

    /* renamed from: s  reason: collision with root package name */
    private final Matrix f48798s;

    /* renamed from: t  reason: collision with root package name */
    private final Path f48799t;

    /* renamed from: u  reason: collision with root package name */
    private final Path f48800u;

    /* renamed from: v  reason: collision with root package name */
    private final RectF f48801v;

    /* renamed from: w  reason: collision with root package name */
    private final RectF f48802w;

    /* renamed from: x  reason: collision with root package name */
    private final Region f48803x;

    /* renamed from: y  reason: collision with root package name */
    private final Region f48804y;

    /* renamed from: z  reason: collision with root package name */
    private final Paint f48805z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements l.c {
        a() {
        }

        @Override // th.l.c
        public th.d a(th.d dVar) {
            if (dVar instanceof j) {
                return dVar;
            }
            return new th.b(-h.this.K(), dVar);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class b implements m.b {
        b() {
        }

        @Override // th.m.b
        public void a(n nVar, Matrix matrix, int i10) {
            h.this.f48795p.set(i10, nVar.e());
            h.this.f48793i[i10] = nVar.f(matrix);
        }

        @Override // th.m.b
        public void b(n nVar, Matrix matrix, int i10) {
            h.this.f48795p.set(i10 + 4, nVar.e());
            h.this.f48794o[i10] = nVar.f(matrix);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface d {
        void a(float f10);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class e extends b3.d {

        /* renamed from: b  reason: collision with root package name */
        private final int f48831b;

        e(int i10) {
            super("cornerSizeAtIndex" + i10);
            this.f48831b = i10;
        }

        @Override // b3.d
        /* renamed from: c */
        public float a(h hVar) {
            if (hVar.N != null) {
                return hVar.N[this.f48831b];
            }
            return 0.0f;
        }

        @Override // b3.d
        /* renamed from: d */
        public void b(h hVar, float f10) {
            if (hVar.N != null && hVar.N[this.f48831b] != f10) {
                hVar.N[this.f48831b] = f10;
                if (hVar.P != null) {
                    hVar.P.a(hVar.B());
                }
                hVar.invalidateSelf();
            }
        }
    }

    static {
        int i10 = 0;
        Paint paint = new Paint(1);
        S = paint;
        paint.setColor(-1);
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DST_OUT));
        T = new e[4];
        while (true) {
            e[] eVarArr = T;
            if (i10 < eVarArr.length) {
                eVarArr[i10] = new e(i10);
                i10++;
            } else {
                return;
            }
        }
    }

    public h() {
        this(new l());
    }

    private RectF A() {
        this.f48802w.set(z());
        float K = K();
        this.f48802w.inset(K, K);
        return this.f48802w;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public float K() {
        if (S()) {
            return this.A.getStrokeWidth() / 2.0f;
        }
        return 0.0f;
    }

    private boolean Q() {
        c cVar = this.f48792e;
        int i10 = cVar.f48825r;
        if (i10 != 1 && cVar.f48826s > 0) {
            if (i10 == 2 || a0()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean R() {
        Paint.Style style = this.f48792e.f48830w;
        if (style != Paint.Style.FILL_AND_STROKE && style != Paint.Style.FILL) {
            return false;
        }
        return true;
    }

    private boolean S() {
        Paint.Style style = this.f48792e.f48830w;
        if ((style == Paint.Style.FILL_AND_STROKE || style == Paint.Style.STROKE) && this.A.getStrokeWidth() > 0.0f) {
            return true;
        }
        return false;
    }

    private void U() {
        super.invalidateSelf();
    }

    private void X(Canvas canvas) {
        if (!Q()) {
            return;
        }
        canvas.save();
        Z(canvas);
        if (!this.I) {
            s(canvas);
            canvas.restore();
            return;
        }
        int width = (int) (this.H.width() - getBounds().width());
        int height = (int) (this.H.height() - getBounds().height());
        if (width >= 0 && height >= 0) {
            Bitmap createBitmap = Bitmap.createBitmap(((int) this.H.width()) + (this.f48792e.f48826s * 2) + width, ((int) this.H.height()) + (this.f48792e.f48826s * 2) + height, Bitmap.Config.ARGB_8888);
            Canvas canvas2 = new Canvas(createBitmap);
            float f10 = (getBounds().left - this.f48792e.f48826s) - width;
            float f11 = (getBounds().top - this.f48792e.f48826s) - height;
            canvas2.translate(-f10, -f11);
            s(canvas2);
            canvas.drawBitmap(createBitmap, f10, f11, (Paint) null);
            createBitmap.recycle();
            canvas.restore();
            return;
        }
        throw new IllegalStateException("Invalid shadow bounds. Check that the treatments result in a valid path.");
    }

    private static int Y(int i10, int i11) {
        return (i10 * (i11 + (i11 >>> 7))) >>> 8;
    }

    private void Z(Canvas canvas) {
        canvas.translate(H(), I());
    }

    private PorterDuffColorFilter j(Paint paint, boolean z10) {
        if (z10) {
            int color = paint.getColor();
            int q10 = q(color);
            this.G = q10;
            if (q10 != color) {
                return new PorterDuffColorFilter(q10, PorterDuff.Mode.SRC_IN);
            }
            return null;
        }
        return null;
    }

    private void k(RectF rectF, Path path) {
        l(rectF, path);
        if (this.f48792e.f48818k != 1.0f) {
            this.f48798s.reset();
            Matrix matrix = this.f48798s;
            float f10 = this.f48792e.f48818k;
            matrix.setScale(f10, f10, rectF.width() / 2.0f, rectF.height() / 2.0f);
            path.transform(this.f48798s);
        }
        path.computeBounds(this.H, true);
    }

    private float m(RectF rectF, l lVar, float[] fArr) {
        if (fArr == null) {
            if (lVar.v(rectF)) {
                return lVar.r().a(rectF);
            }
            return -1.0f;
        } else if (nh.a.a(fArr) && lVar.u()) {
            return fArr[0];
        } else {
            return -1.0f;
        }
    }

    private void n() {
        u0();
        this.D.f(this.K, this.O, this.f48792e.f48819l, A(), null, this.f48800u);
    }

    private PorterDuffColorFilter o(ColorStateList colorStateList, PorterDuff.Mode mode, boolean z10) {
        int colorForState = colorStateList.getColorForState(getState(), 0);
        if (z10) {
            colorForState = q(colorForState);
        }
        this.G = colorForState;
        return new PorterDuffColorFilter(colorForState, mode);
    }

    private PorterDuffColorFilter p(ColorStateList colorStateList, PorterDuff.Mode mode, Paint paint, boolean z10) {
        if (colorStateList != null && mode != null) {
            return o(colorStateList, mode, z10);
        }
        return j(paint, z10);
    }

    public static h r(Context context, float f10, ColorStateList colorStateList) {
        if (colorStateList == null) {
            colorStateList = ColorStateList.valueOf(jh.a.c(context, bh.b.f6751o, h.class.getSimpleName()));
        }
        h hVar = new h();
        hVar.T(context);
        hVar.f0(colorStateList);
        hVar.e0(f10);
        return hVar;
    }

    private boolean r0(int[] iArr) {
        boolean z10;
        int color;
        int colorForState;
        int color2;
        int colorForState2;
        if (this.f48792e.f48812e != null && color2 != (colorForState2 = this.f48792e.f48812e.getColorForState(iArr, (color2 = this.f48805z.getColor())))) {
            this.f48805z.setColor(colorForState2);
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f48792e.f48813f != null && color != (colorForState = this.f48792e.f48813f.getColorForState(iArr, (color = this.A.getColor())))) {
            this.A.setColor(colorForState);
            return true;
        }
        return z10;
    }

    private void s(Canvas canvas) {
        if (this.f48795p.cardinality() > 0) {
            Log.w(Q, "Compatibility shadow requested but can't be drawn for all operations in this shape.");
        }
        if (this.f48792e.f48827t != 0) {
            canvas.drawPath(this.f48799t, this.B.c());
        }
        for (int i10 = 0; i10 < 4; i10++) {
            this.f48793i[i10].b(this.B, this.f48792e.f48826s, canvas);
            this.f48794o[i10].b(this.B, this.f48792e.f48826s, canvas);
        }
        if (this.I) {
            int H = H();
            int I = I();
            canvas.translate(-H, -I);
            canvas.drawPath(this.f48799t, S);
            canvas.translate(H, I);
        }
    }

    private void s0(int[] iArr) {
        t0(iArr, false);
    }

    private void t(Canvas canvas) {
        v(canvas, this.f48805z, this.f48799t, this.f48792e.f48808a, this.N, z());
    }

    private void t0(int[] iArr, boolean z10) {
        boolean z11;
        RectF z12 = z();
        if (this.f48792e.f48809b != null && !z12.isEmpty()) {
            if (this.L == null) {
                z11 = true;
            } else {
                z11 = false;
            }
            boolean z13 = z10 | z11;
            if (this.N == null) {
                this.N = new float[4];
            }
            l d10 = this.f48792e.f48809b.d(iArr);
            for (int i10 = 0; i10 < 4; i10++) {
                float a10 = this.D.h(i10, d10).a(z12);
                if (z13) {
                    this.N[i10] = a10;
                }
                SpringAnimation springAnimation = this.M[i10];
                if (springAnimation != null) {
                    springAnimation.u(a10);
                    if (z13) {
                        this.M[i10].A();
                    }
                }
            }
            if (z13) {
                invalidateSelf();
            }
        }
    }

    private void u0() {
        this.K = J().z(this.f48791d);
        float[] fArr = this.N;
        if (fArr == null) {
            this.O = null;
            return;
        }
        if (this.O == null) {
            this.O = new float[fArr.length];
        }
        float K = K();
        int i10 = 0;
        while (true) {
            float[] fArr2 = this.N;
            if (i10 < fArr2.length) {
                this.O[i10] = Math.max(0.0f, fArr2[i10] - K);
                i10++;
            } else {
                return;
            }
        }
    }

    private void v(Canvas canvas, Paint paint, Path path, l lVar, float[] fArr, RectF rectF) {
        float m10 = m(rectF, lVar, fArr);
        if (m10 >= 0.0f) {
            float f10 = m10 * this.f48792e.f48819l;
            canvas.drawRoundRect(rectF, f10, f10, paint);
            return;
        }
        canvas.drawPath(path, paint);
    }

    private boolean v0() {
        PorterDuffColorFilter porterDuffColorFilter = this.E;
        PorterDuffColorFilter porterDuffColorFilter2 = this.F;
        c cVar = this.f48792e;
        this.E = p(cVar.f48815h, cVar.f48816i, this.f48805z, true);
        c cVar2 = this.f48792e;
        this.F = p(cVar2.f48814g, cVar2.f48816i, this.A, false);
        c cVar3 = this.f48792e;
        if (cVar3.f48829v) {
            this.B.d(cVar3.f48815h.getColorForState(getState(), 0));
        }
        if (!b2.b.a(porterDuffColorFilter, this.E) || !b2.b.a(porterDuffColorFilter2, this.F)) {
            return true;
        }
        return false;
    }

    private void w0() {
        float P = P();
        this.f48792e.f48826s = (int) Math.ceil(0.75f * P);
        this.f48792e.f48827t = (int) Math.ceil(P * 0.25f);
        v0();
        U();
    }

    public float B() {
        float a10;
        float a11;
        float[] fArr = this.N;
        if (fArr != null) {
            a10 = (fArr[3] + fArr[2]) - fArr[1];
            a11 = fArr[0];
        } else {
            RectF z10 = z();
            a10 = (this.D.h(3, J()).a(z10) + this.D.h(2, J()).a(z10)) - this.D.h(1, J()).a(z10);
            a11 = this.D.h(0, J()).a(z10);
        }
        return (a10 - a11) / 2.0f;
    }

    public float C() {
        return this.f48792e.f48823p;
    }

    public ColorStateList D() {
        return this.f48792e.f48812e;
    }

    public float E() {
        return this.f48792e.f48819l;
    }

    public float F() {
        return this.f48792e.f48822o;
    }

    public int G() {
        return this.G;
    }

    public int H() {
        c cVar = this.f48792e;
        return (int) (cVar.f48827t * Math.sin(Math.toRadians(cVar.f48828u)));
    }

    public int I() {
        c cVar = this.f48792e;
        return (int) (cVar.f48827t * Math.cos(Math.toRadians(cVar.f48828u)));
    }

    public l J() {
        return this.f48792e.f48808a;
    }

    public ColorStateList L() {
        return this.f48792e.f48815h;
    }

    public float M() {
        float[] fArr = this.N;
        if (fArr != null) {
            return fArr[3];
        }
        return this.f48792e.f48808a.r().a(z());
    }

    public float N() {
        float[] fArr = this.N;
        if (fArr != null) {
            return fArr[0];
        }
        return this.f48792e.f48808a.t().a(z());
    }

    public float O() {
        return this.f48792e.f48824q;
    }

    public float P() {
        return C() + O();
    }

    public void T(Context context) {
        this.f48792e.f48810c = new lh.a(context);
        w0();
    }

    public boolean V() {
        lh.a aVar = this.f48792e.f48810c;
        if (aVar != null && aVar.d()) {
            return true;
        }
        return false;
    }

    public boolean W() {
        if (!this.f48792e.f48808a.v(z())) {
            float[] fArr = this.N;
            if (fArr == null || !nh.a.a(fArr) || !this.f48792e.f48808a.u()) {
                return false;
            }
            return true;
        }
        return true;
    }

    public boolean a0() {
        if (!W() && !this.f48799t.isConvex() && Build.VERSION.SDK_INT < 29) {
            return true;
        }
        return false;
    }

    public void b0(float f10) {
        setShapeAppearanceModel(this.f48792e.f48808a.x(f10));
    }

    public void c0(th.d dVar) {
        setShapeAppearanceModel(this.f48792e.f48808a.y(dVar));
    }

    public void d0(androidx.dynamicanimation.animation.d dVar) {
        if (this.L != dVar) {
            this.L = dVar;
            int i10 = 0;
            while (true) {
                SpringAnimation[] springAnimationArr = this.M;
                if (i10 < springAnimationArr.length) {
                    if (springAnimationArr[i10] == null) {
                        springAnimationArr[i10] = new SpringAnimation(this, T[i10]);
                    }
                    this.M[i10].z(new androidx.dynamicanimation.animation.d().f(dVar.a()).h(dVar.c()));
                    i10++;
                } else {
                    t0(getState(), true);
                    invalidateSelf();
                    return;
                }
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f48805z.setColorFilter(this.E);
        int alpha = this.f48805z.getAlpha();
        this.f48805z.setAlpha(Y(alpha, this.f48792e.f48821n));
        this.A.setColorFilter(this.F);
        this.A.setStrokeWidth(this.f48792e.f48820m);
        int alpha2 = this.A.getAlpha();
        this.A.setAlpha(Y(alpha2, this.f48792e.f48821n));
        if (R()) {
            if (this.f48796q) {
                k(z(), this.f48799t);
                this.f48796q = false;
            }
            X(canvas);
            t(canvas);
        }
        if (S()) {
            if (this.f48797r) {
                n();
                this.f48797r = false;
            }
            w(canvas);
        }
        this.f48805z.setAlpha(alpha);
        this.A.setAlpha(alpha2);
    }

    public void e0(float f10) {
        c cVar = this.f48792e;
        if (cVar.f48823p != f10) {
            cVar.f48823p = f10;
            w0();
        }
    }

    public void f0(ColorStateList colorStateList) {
        c cVar = this.f48792e;
        if (cVar.f48812e != colorStateList) {
            cVar.f48812e = colorStateList;
            onStateChange(getState());
        }
    }

    public void g0(float f10) {
        c cVar = this.f48792e;
        if (cVar.f48819l != f10) {
            cVar.f48819l = f10;
            this.f48796q = true;
            this.f48797r = true;
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f48792e.f48821n;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f48792e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f48792e.f48825r != 2) {
            RectF z10 = z();
            if (z10.isEmpty()) {
                return;
            }
            float m10 = m(z10, this.f48792e.f48808a, this.N);
            if (m10 >= 0.0f) {
                outline.setRoundRect(getBounds(), m10 * this.f48792e.f48819l);
                return;
            }
            if (this.f48796q) {
                k(z10, this.f48799t);
                this.f48796q = false;
            }
            com.google.android.material.drawable.c.l(outline, this.f48799t);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        Rect rect2 = this.f48792e.f48817j;
        if (rect2 != null) {
            rect.set(rect2);
            return true;
        }
        return super.getPadding(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public Region getTransparentRegion() {
        this.f48803x.set(getBounds());
        k(z(), this.f48799t);
        this.f48804y.setPath(this.f48799t, this.f48803x);
        this.f48803x.op(this.f48804y, Region.Op.DIFFERENCE);
        return this.f48803x;
    }

    public void h0(d dVar) {
        this.P = dVar;
    }

    public void i0(int i10, int i11, int i12, int i13) {
        c cVar = this.f48792e;
        if (cVar.f48817j == null) {
            cVar.f48817j = new Rect();
        }
        this.f48792e.f48817j.set(i10, i11, i12, i13);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        this.f48796q = true;
        this.f48797r = true;
        super.invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!super.isStateful()) {
            ColorStateList colorStateList = this.f48792e.f48815h;
            if (colorStateList == null || !colorStateList.isStateful()) {
                ColorStateList colorStateList2 = this.f48792e.f48814g;
                if (colorStateList2 == null || !colorStateList2.isStateful()) {
                    ColorStateList colorStateList3 = this.f48792e.f48813f;
                    if (colorStateList3 == null || !colorStateList3.isStateful()) {
                        ColorStateList colorStateList4 = this.f48792e.f48812e;
                        if (colorStateList4 == null || !colorStateList4.isStateful()) {
                            q qVar = this.f48792e.f48809b;
                            if (qVar == null || !qVar.f()) {
                                return false;
                            }
                            return true;
                        }
                        return true;
                    }
                    return true;
                }
                return true;
            }
            return true;
        }
        return true;
    }

    public void j0(float f10) {
        c cVar = this.f48792e;
        if (cVar.f48822o != f10) {
            cVar.f48822o = f10;
            w0();
        }
    }

    public void k0(boolean z10) {
        this.I = z10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void l(RectF rectF, Path path) {
        m mVar = this.D;
        c cVar = this.f48792e;
        mVar.f(cVar.f48808a, this.N, cVar.f48819l, rectF, this.C, path);
    }

    public void l0(int i10) {
        this.B.d(i10);
        this.f48792e.f48829v = false;
        U();
    }

    public void m0(q qVar) {
        c cVar = this.f48792e;
        if (cVar.f48809b != qVar) {
            cVar.f48809b = qVar;
            t0(getState(), true);
            invalidateSelf();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.f48792e = new c(this.f48792e);
        return this;
    }

    public void n0(float f10, int i10) {
        q0(f10);
        p0(ColorStateList.valueOf(i10));
    }

    public void o0(float f10, ColorStateList colorStateList) {
        q0(f10);
        p0(colorStateList);
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f48796q = true;
        this.f48797r = true;
        super.onBoundsChange(rect);
        if (this.f48792e.f48809b != null && !rect.isEmpty()) {
            t0(getState(), this.J);
        }
        this.J = rect.isEmpty();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.graphics.drawable.Drawable, com.google.android.material.internal.j.b
    public boolean onStateChange(int[] iArr) {
        boolean z10;
        if (this.f48792e.f48809b != null) {
            s0(iArr);
        }
        boolean r02 = r0(iArr);
        boolean v02 = v0();
        if (!r02 && !v02) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            invalidateSelf();
        }
        return z10;
    }

    public void p0(ColorStateList colorStateList) {
        c cVar = this.f48792e;
        if (cVar.f48813f != colorStateList) {
            cVar.f48813f = colorStateList;
            onStateChange(getState());
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int q(int i10) {
        float P = P() + F();
        lh.a aVar = this.f48792e.f48810c;
        if (aVar != null) {
            return aVar.c(i10, P);
        }
        return i10;
    }

    public void q0(float f10) {
        this.f48792e.f48820m = f10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        c cVar = this.f48792e;
        if (cVar.f48821n != i10) {
            cVar.f48821n = i10;
            U();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f48792e.f48811d = colorFilter;
        U();
    }

    @Override // th.o
    public void setShapeAppearanceModel(l lVar) {
        c cVar = this.f48792e;
        cVar.f48808a = lVar;
        cVar.f48809b = null;
        this.N = null;
        this.O = null;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        setTintList(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f48792e.f48815h = colorStateList;
        v0();
        U();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        c cVar = this.f48792e;
        if (cVar.f48816i != mode) {
            cVar.f48816i = mode;
            v0();
            U();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void u(Canvas canvas, Paint paint, Path path, RectF rectF) {
        v(canvas, paint, path, this.f48792e.f48808a, this.N, rectF);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void w(Canvas canvas) {
        v(canvas, this.A, this.f48800u, this.K, this.O, A());
    }

    public float x() {
        float[] fArr = this.N;
        if (fArr != null) {
            return fArr[2];
        }
        return this.f48792e.f48808a.j().a(z());
    }

    public float y() {
        float[] fArr = this.N;
        if (fArr != null) {
            return fArr[1];
        }
        return this.f48792e.f48808a.l().a(z());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public RectF z() {
        this.f48801v.set(getBounds());
        return this.f48801v;
    }

    public h(Context context, AttributeSet attributeSet, int i10, int i11) {
        this(l.e(context, attributeSet, i10, i11).m());
    }

    public h(l lVar) {
        this(new c(lVar, null));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public h(c cVar) {
        m mVar;
        this.f48791d = new a();
        this.f48793i = new n.g[4];
        this.f48794o = new n.g[4];
        this.f48795p = new BitSet(8);
        this.f48798s = new Matrix();
        this.f48799t = new Path();
        this.f48800u = new Path();
        this.f48801v = new RectF();
        this.f48802w = new RectF();
        this.f48803x = new Region();
        this.f48804y = new Region();
        Paint paint = new Paint(1);
        this.f48805z = paint;
        Paint paint2 = new Paint(1);
        this.A = paint2;
        this.B = new sh.a();
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            mVar = m.l();
        } else {
            mVar = new m();
        }
        this.D = mVar;
        this.H = new RectF();
        this.I = true;
        this.J = true;
        this.M = new SpringAnimation[4];
        this.f48792e = cVar;
        paint2.setStyle(Paint.Style.STROKE);
        paint.setStyle(Paint.Style.FILL);
        v0();
        r0(getState());
        this.C = new b();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        l f48808a;

        /* renamed from: b  reason: collision with root package name */
        q f48809b;

        /* renamed from: c  reason: collision with root package name */
        lh.a f48810c;

        /* renamed from: d  reason: collision with root package name */
        ColorFilter f48811d;

        /* renamed from: e  reason: collision with root package name */
        ColorStateList f48812e;

        /* renamed from: f  reason: collision with root package name */
        ColorStateList f48813f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f48814g;

        /* renamed from: h  reason: collision with root package name */
        ColorStateList f48815h;

        /* renamed from: i  reason: collision with root package name */
        PorterDuff.Mode f48816i;

        /* renamed from: j  reason: collision with root package name */
        Rect f48817j;

        /* renamed from: k  reason: collision with root package name */
        float f48818k;

        /* renamed from: l  reason: collision with root package name */
        float f48819l;

        /* renamed from: m  reason: collision with root package name */
        float f48820m;

        /* renamed from: n  reason: collision with root package name */
        int f48821n;

        /* renamed from: o  reason: collision with root package name */
        float f48822o;

        /* renamed from: p  reason: collision with root package name */
        float f48823p;

        /* renamed from: q  reason: collision with root package name */
        float f48824q;

        /* renamed from: r  reason: collision with root package name */
        int f48825r;

        /* renamed from: s  reason: collision with root package name */
        int f48826s;

        /* renamed from: t  reason: collision with root package name */
        int f48827t;

        /* renamed from: u  reason: collision with root package name */
        int f48828u;

        /* renamed from: v  reason: collision with root package name */
        boolean f48829v;

        /* renamed from: w  reason: collision with root package name */
        Paint.Style f48830w;

        public c(l lVar, lh.a aVar) {
            this.f48812e = null;
            this.f48813f = null;
            this.f48814g = null;
            this.f48815h = null;
            this.f48816i = PorterDuff.Mode.SRC_IN;
            this.f48817j = null;
            this.f48818k = 1.0f;
            this.f48819l = 1.0f;
            this.f48821n = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f48822o = 0.0f;
            this.f48823p = 0.0f;
            this.f48824q = 0.0f;
            this.f48825r = 0;
            this.f48826s = 0;
            this.f48827t = 0;
            this.f48828u = 0;
            this.f48829v = false;
            this.f48830w = Paint.Style.FILL_AND_STROKE;
            this.f48808a = lVar;
            this.f48810c = aVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            h hVar = new h(this);
            hVar.f48796q = true;
            hVar.f48797r = true;
            return hVar;
        }

        public c(c cVar) {
            this.f48812e = null;
            this.f48813f = null;
            this.f48814g = null;
            this.f48815h = null;
            this.f48816i = PorterDuff.Mode.SRC_IN;
            this.f48817j = null;
            this.f48818k = 1.0f;
            this.f48819l = 1.0f;
            this.f48821n = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f48822o = 0.0f;
            this.f48823p = 0.0f;
            this.f48824q = 0.0f;
            this.f48825r = 0;
            this.f48826s = 0;
            this.f48827t = 0;
            this.f48828u = 0;
            this.f48829v = false;
            this.f48830w = Paint.Style.FILL_AND_STROKE;
            this.f48808a = cVar.f48808a;
            this.f48809b = cVar.f48809b;
            this.f48810c = cVar.f48810c;
            this.f48820m = cVar.f48820m;
            this.f48811d = cVar.f48811d;
            this.f48812e = cVar.f48812e;
            this.f48813f = cVar.f48813f;
            this.f48816i = cVar.f48816i;
            this.f48815h = cVar.f48815h;
            this.f48821n = cVar.f48821n;
            this.f48818k = cVar.f48818k;
            this.f48827t = cVar.f48827t;
            this.f48825r = cVar.f48825r;
            this.f48829v = cVar.f48829v;
            this.f48819l = cVar.f48819l;
            this.f48822o = cVar.f48822o;
            this.f48823p = cVar.f48823p;
            this.f48824q = cVar.f48824q;
            this.f48826s = cVar.f48826s;
            this.f48828u = cVar.f48828u;
            this.f48814g = cVar.f48814g;
            this.f48830w = cVar.f48830w;
            if (cVar.f48817j != null) {
                this.f48817j = new Rect(cVar.f48817j);
            }
        }
    }
}
