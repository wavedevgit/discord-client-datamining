package qh;

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
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.BitSet;
import qh.k;
import qh.l;
import qh.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends Drawable implements n {
    private static final String I = "g";
    private static final Paint J;
    private final ph.a A;
    private final l.b B;
    private final l C;
    private PorterDuffColorFilter D;
    private PorterDuffColorFilter E;
    private int F;
    private final RectF G;
    private boolean H;

    /* renamed from: d  reason: collision with root package name */
    private c f47784d;

    /* renamed from: e  reason: collision with root package name */
    private final m.g[] f47785e;

    /* renamed from: i  reason: collision with root package name */
    private final m.g[] f47786i;

    /* renamed from: o  reason: collision with root package name */
    private final BitSet f47787o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f47788p;

    /* renamed from: q  reason: collision with root package name */
    private final Matrix f47789q;

    /* renamed from: r  reason: collision with root package name */
    private final Path f47790r;

    /* renamed from: s  reason: collision with root package name */
    private final Path f47791s;

    /* renamed from: t  reason: collision with root package name */
    private final RectF f47792t;

    /* renamed from: u  reason: collision with root package name */
    private final RectF f47793u;

    /* renamed from: v  reason: collision with root package name */
    private final Region f47794v;

    /* renamed from: w  reason: collision with root package name */
    private final Region f47795w;

    /* renamed from: x  reason: collision with root package name */
    private k f47796x;

    /* renamed from: y  reason: collision with root package name */
    private final Paint f47797y;

    /* renamed from: z  reason: collision with root package name */
    private final Paint f47798z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements l.b {
        a() {
        }

        @Override // qh.l.b
        public void a(m mVar, Matrix matrix, int i10) {
            g.this.f47787o.set(i10, mVar.e());
            g.this.f47785e[i10] = mVar.f(matrix);
        }

        @Override // qh.l.b
        public void b(m mVar, Matrix matrix, int i10) {
            g.this.f47787o.set(i10 + 4, mVar.e());
            g.this.f47786i[i10] = mVar.f(matrix);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements k.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f47800a;

        b(float f10) {
            this.f47800a = f10;
        }

        @Override // qh.k.c
        public qh.c a(qh.c cVar) {
            if (cVar instanceof i) {
                return cVar;
            }
            return new qh.b(this.f47800a, cVar);
        }
    }

    static {
        Paint paint = new Paint(1);
        J = paint;
        paint.setColor(-1);
        paint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.DST_OUT));
    }

    public g() {
        this(new k());
    }

    private float E() {
        if (M()) {
            return this.f47798z.getStrokeWidth() / 2.0f;
        }
        return 0.0f;
    }

    private boolean K() {
        c cVar = this.f47784d;
        int i10 = cVar.f47818q;
        if (i10 != 1 && cVar.f47819r > 0) {
            if (i10 == 2 || U()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean L() {
        Paint.Style style = this.f47784d.f47823v;
        if (style != Paint.Style.FILL_AND_STROKE && style != Paint.Style.FILL) {
            return false;
        }
        return true;
    }

    private boolean M() {
        Paint.Style style = this.f47784d.f47823v;
        if ((style == Paint.Style.FILL_AND_STROKE || style == Paint.Style.STROKE) && this.f47798z.getStrokeWidth() > 0.0f) {
            return true;
        }
        return false;
    }

    private void O() {
        super.invalidateSelf();
    }

    private void R(Canvas canvas) {
        if (!K()) {
            return;
        }
        canvas.save();
        T(canvas);
        if (!this.H) {
            n(canvas);
            canvas.restore();
            return;
        }
        int width = (int) (this.G.width() - getBounds().width());
        int height = (int) (this.G.height() - getBounds().height());
        if (width >= 0 && height >= 0) {
            Bitmap createBitmap = Bitmap.createBitmap(((int) this.G.width()) + (this.f47784d.f47819r * 2) + width, ((int) this.G.height()) + (this.f47784d.f47819r * 2) + height, Bitmap.Config.ARGB_8888);
            Canvas canvas2 = new Canvas(createBitmap);
            float f10 = (getBounds().left - this.f47784d.f47819r) - width;
            float f11 = (getBounds().top - this.f47784d.f47819r) - height;
            canvas2.translate(-f10, -f11);
            n(canvas2);
            canvas.drawBitmap(createBitmap, f10, f11, (Paint) null);
            createBitmap.recycle();
            canvas.restore();
            return;
        }
        throw new IllegalStateException("Invalid shadow bounds. Check that the treatments result in a valid path.");
    }

    private static int S(int i10, int i11) {
        return (i10 * (i11 + (i11 >>> 7))) >>> 8;
    }

    private void T(Canvas canvas) {
        canvas.translate(B(), C());
    }

    private PorterDuffColorFilter f(Paint paint, boolean z10) {
        if (z10) {
            int color = paint.getColor();
            int l10 = l(color);
            this.F = l10;
            if (l10 != color) {
                return new PorterDuffColorFilter(l10, PorterDuff.Mode.SRC_IN);
            }
            return null;
        }
        return null;
    }

    private void g(RectF rectF, Path path) {
        h(rectF, path);
        if (this.f47784d.f47811j != 1.0f) {
            this.f47789q.reset();
            Matrix matrix = this.f47789q;
            float f10 = this.f47784d.f47811j;
            matrix.setScale(f10, f10, rectF.width() / 2.0f, rectF.height() / 2.0f);
            path.transform(this.f47789q);
        }
        path.computeBounds(this.G, true);
    }

    private boolean h0(int[] iArr) {
        boolean z10;
        int color;
        int colorForState;
        int color2;
        int colorForState2;
        if (this.f47784d.f47805d != null && color2 != (colorForState2 = this.f47784d.f47805d.getColorForState(iArr, (color2 = this.f47797y.getColor())))) {
            this.f47797y.setColor(colorForState2);
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f47784d.f47806e != null && color != (colorForState = this.f47784d.f47806e.getColorForState(iArr, (color = this.f47798z.getColor())))) {
            this.f47798z.setColor(colorForState);
            return true;
        }
        return z10;
    }

    private void i() {
        k y10 = D().y(new b(-E()));
        this.f47796x = y10;
        this.C.d(y10, this.f47784d.f47812k, v(), this.f47791s);
    }

    private boolean i0() {
        PorterDuffColorFilter porterDuffColorFilter = this.D;
        PorterDuffColorFilter porterDuffColorFilter2 = this.E;
        c cVar = this.f47784d;
        this.D = k(cVar.f47808g, cVar.f47809h, this.f47797y, true);
        c cVar2 = this.f47784d;
        this.E = k(cVar2.f47807f, cVar2.f47809h, this.f47798z, false);
        c cVar3 = this.f47784d;
        if (cVar3.f47822u) {
            this.A.d(cVar3.f47808g.getColorForState(getState(), 0));
        }
        if (!b2.b.a(porterDuffColorFilter, this.D) || !b2.b.a(porterDuffColorFilter2, this.E)) {
            return true;
        }
        return false;
    }

    private PorterDuffColorFilter j(ColorStateList colorStateList, PorterDuff.Mode mode, boolean z10) {
        int colorForState = colorStateList.getColorForState(getState(), 0);
        if (z10) {
            colorForState = l(colorForState);
        }
        this.F = colorForState;
        return new PorterDuffColorFilter(colorForState, mode);
    }

    private void j0() {
        float J2 = J();
        this.f47784d.f47819r = (int) Math.ceil(0.75f * J2);
        this.f47784d.f47820s = (int) Math.ceil(J2 * 0.25f);
        i0();
        O();
    }

    private PorterDuffColorFilter k(ColorStateList colorStateList, PorterDuff.Mode mode, Paint paint, boolean z10) {
        if (colorStateList != null && mode != null) {
            return j(colorStateList, mode, z10);
        }
        return f(paint, z10);
    }

    public static g m(Context context, float f10, ColorStateList colorStateList) {
        if (colorStateList == null) {
            colorStateList = ColorStateList.valueOf(gh.a.c(context, ah.b.f653o, g.class.getSimpleName()));
        }
        g gVar = new g();
        gVar.N(context);
        gVar.X(colorStateList);
        gVar.W(f10);
        return gVar;
    }

    private void n(Canvas canvas) {
        if (this.f47787o.cardinality() > 0) {
            Log.w(I, "Compatibility shadow requested but can't be drawn for all operations in this shape.");
        }
        if (this.f47784d.f47820s != 0) {
            canvas.drawPath(this.f47790r, this.A.c());
        }
        for (int i10 = 0; i10 < 4; i10++) {
            this.f47785e[i10].b(this.A, this.f47784d.f47819r, canvas);
            this.f47786i[i10].b(this.A, this.f47784d.f47819r, canvas);
        }
        if (this.H) {
            int B = B();
            int C = C();
            canvas.translate(-B, -C);
            canvas.drawPath(this.f47790r, J);
            canvas.translate(B, C);
        }
    }

    private void o(Canvas canvas) {
        q(canvas, this.f47797y, this.f47790r, this.f47784d.f47802a, u());
    }

    private void q(Canvas canvas, Paint paint, Path path, k kVar, RectF rectF) {
        if (kVar.u(rectF)) {
            float a10 = kVar.t().a(rectF) * this.f47784d.f47812k;
            canvas.drawRoundRect(rectF, a10, a10, paint);
            return;
        }
        canvas.drawPath(path, paint);
    }

    private RectF v() {
        this.f47793u.set(u());
        float E = E();
        this.f47793u.inset(E, E);
        return this.f47793u;
    }

    public int A() {
        return this.F;
    }

    public int B() {
        c cVar = this.f47784d;
        return (int) (cVar.f47820s * Math.sin(Math.toRadians(cVar.f47821t)));
    }

    public int C() {
        c cVar = this.f47784d;
        return (int) (cVar.f47820s * Math.cos(Math.toRadians(cVar.f47821t)));
    }

    public k D() {
        return this.f47784d.f47802a;
    }

    public ColorStateList F() {
        return this.f47784d.f47808g;
    }

    public float G() {
        return this.f47784d.f47802a.r().a(u());
    }

    public float H() {
        return this.f47784d.f47802a.t().a(u());
    }

    public float I() {
        return this.f47784d.f47817p;
    }

    public float J() {
        return w() + I();
    }

    public void N(Context context) {
        this.f47784d.f47803b = new ih.a(context);
        j0();
    }

    public boolean P() {
        ih.a aVar = this.f47784d.f47803b;
        if (aVar != null && aVar.d()) {
            return true;
        }
        return false;
    }

    public boolean Q() {
        return this.f47784d.f47802a.u(u());
    }

    public boolean U() {
        int i10 = Build.VERSION.SDK_INT;
        if (!Q() && !this.f47790r.isConvex() && i10 < 29) {
            return true;
        }
        return false;
    }

    public void V(qh.c cVar) {
        setShapeAppearanceModel(this.f47784d.f47802a.x(cVar));
    }

    public void W(float f10) {
        c cVar = this.f47784d;
        if (cVar.f47816o != f10) {
            cVar.f47816o = f10;
            j0();
        }
    }

    public void X(ColorStateList colorStateList) {
        c cVar = this.f47784d;
        if (cVar.f47805d != colorStateList) {
            cVar.f47805d = colorStateList;
            onStateChange(getState());
        }
    }

    public void Y(float f10) {
        c cVar = this.f47784d;
        if (cVar.f47812k != f10) {
            cVar.f47812k = f10;
            this.f47788p = true;
            invalidateSelf();
        }
    }

    public void Z(int i10, int i11, int i12, int i13) {
        c cVar = this.f47784d;
        if (cVar.f47810i == null) {
            cVar.f47810i = new Rect();
        }
        this.f47784d.f47810i.set(i10, i11, i12, i13);
        invalidateSelf();
    }

    public void a0(float f10) {
        c cVar = this.f47784d;
        if (cVar.f47815n != f10) {
            cVar.f47815n = f10;
            j0();
        }
    }

    public void b0(boolean z10) {
        this.H = z10;
    }

    public void c0(int i10) {
        this.A.d(i10);
        this.f47784d.f47822u = false;
        O();
    }

    public void d0(float f10, int i10) {
        g0(f10);
        f0(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f47797y.setColorFilter(this.D);
        int alpha = this.f47797y.getAlpha();
        this.f47797y.setAlpha(S(alpha, this.f47784d.f47814m));
        this.f47798z.setColorFilter(this.E);
        this.f47798z.setStrokeWidth(this.f47784d.f47813l);
        int alpha2 = this.f47798z.getAlpha();
        this.f47798z.setAlpha(S(alpha2, this.f47784d.f47814m));
        if (this.f47788p) {
            i();
            g(u(), this.f47790r);
            this.f47788p = false;
        }
        R(canvas);
        if (L()) {
            o(canvas);
        }
        if (M()) {
            r(canvas);
        }
        this.f47797y.setAlpha(alpha);
        this.f47798z.setAlpha(alpha2);
    }

    public void e0(float f10, ColorStateList colorStateList) {
        g0(f10);
        f0(colorStateList);
    }

    public void f0(ColorStateList colorStateList) {
        c cVar = this.f47784d;
        if (cVar.f47806e != colorStateList) {
            cVar.f47806e = colorStateList;
            onStateChange(getState());
        }
    }

    public void g0(float f10) {
        this.f47784d.f47813l = f10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f47784d.f47814m;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f47784d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f47784d.f47818q == 2) {
            return;
        }
        if (Q()) {
            outline.setRoundRect(getBounds(), G() * this.f47784d.f47812k);
            return;
        }
        g(u(), this.f47790r);
        com.google.android.material.drawable.c.k(outline, this.f47790r);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        Rect rect2 = this.f47784d.f47810i;
        if (rect2 != null) {
            rect.set(rect2);
            return true;
        }
        return super.getPadding(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public Region getTransparentRegion() {
        this.f47794v.set(getBounds());
        g(u(), this.f47790r);
        this.f47795w.setPath(this.f47790r, this.f47794v);
        this.f47794v.op(this.f47795w, Region.Op.DIFFERENCE);
        return this.f47794v;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h(RectF rectF, Path path) {
        l lVar = this.C;
        c cVar = this.f47784d;
        lVar.e(cVar.f47802a, cVar.f47812k, rectF, this.B, path);
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        this.f47788p = true;
        super.invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!super.isStateful()) {
            ColorStateList colorStateList = this.f47784d.f47808g;
            if (colorStateList == null || !colorStateList.isStateful()) {
                ColorStateList colorStateList2 = this.f47784d.f47807f;
                if (colorStateList2 == null || !colorStateList2.isStateful()) {
                    ColorStateList colorStateList3 = this.f47784d.f47806e;
                    if (colorStateList3 == null || !colorStateList3.isStateful()) {
                        ColorStateList colorStateList4 = this.f47784d.f47805d;
                        if (colorStateList4 == null || !colorStateList4.isStateful()) {
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

    /* JADX INFO: Access modifiers changed from: protected */
    public int l(int i10) {
        float J2 = J() + z();
        ih.a aVar = this.f47784d.f47803b;
        if (aVar != null) {
            return aVar.c(i10, J2);
        }
        return i10;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.f47784d = new c(this.f47784d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f47788p = true;
        super.onBoundsChange(rect);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.graphics.drawable.Drawable, com.google.android.material.internal.j.b
    public boolean onStateChange(int[] iArr) {
        boolean z10;
        boolean h02 = h0(iArr);
        boolean i02 = i0();
        if (!h02 && !i02) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10) {
            invalidateSelf();
        }
        return z10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void p(Canvas canvas, Paint paint, Path path, RectF rectF) {
        q(canvas, paint, path, this.f47784d.f47802a, rectF);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(Canvas canvas) {
        q(canvas, this.f47798z, this.f47791s, this.f47796x, v());
    }

    public float s() {
        return this.f47784d.f47802a.j().a(u());
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        c cVar = this.f47784d;
        if (cVar.f47814m != i10) {
            cVar.f47814m = i10;
            O();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f47784d.f47804c = colorFilter;
        O();
    }

    @Override // qh.n
    public void setShapeAppearanceModel(k kVar) {
        this.f47784d.f47802a = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        setTintList(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f47784d.f47808g = colorStateList;
        i0();
        O();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        c cVar = this.f47784d;
        if (cVar.f47809h != mode) {
            cVar.f47809h = mode;
            i0();
            O();
        }
    }

    public float t() {
        return this.f47784d.f47802a.l().a(u());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public RectF u() {
        this.f47792t.set(getBounds());
        return this.f47792t;
    }

    public float w() {
        return this.f47784d.f47816o;
    }

    public ColorStateList x() {
        return this.f47784d.f47805d;
    }

    public float y() {
        return this.f47784d.f47812k;
    }

    public float z() {
        return this.f47784d.f47815n;
    }

    public g(Context context, AttributeSet attributeSet, int i10, int i11) {
        this(k.e(context, attributeSet, i10, i11).m());
    }

    public g(k kVar) {
        this(new c(kVar, null));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public g(c cVar) {
        l lVar;
        this.f47785e = new m.g[4];
        this.f47786i = new m.g[4];
        this.f47787o = new BitSet(8);
        this.f47789q = new Matrix();
        this.f47790r = new Path();
        this.f47791s = new Path();
        this.f47792t = new RectF();
        this.f47793u = new RectF();
        this.f47794v = new Region();
        this.f47795w = new Region();
        Paint paint = new Paint(1);
        this.f47797y = paint;
        Paint paint2 = new Paint(1);
        this.f47798z = paint2;
        this.A = new ph.a();
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            lVar = l.k();
        } else {
            lVar = new l();
        }
        this.C = lVar;
        this.G = new RectF();
        this.H = true;
        this.f47784d = cVar;
        paint2.setStyle(Paint.Style.STROKE);
        paint.setStyle(Paint.Style.FILL);
        i0();
        h0(getState());
        this.B = new a();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class c extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        k f47802a;

        /* renamed from: b  reason: collision with root package name */
        ih.a f47803b;

        /* renamed from: c  reason: collision with root package name */
        ColorFilter f47804c;

        /* renamed from: d  reason: collision with root package name */
        ColorStateList f47805d;

        /* renamed from: e  reason: collision with root package name */
        ColorStateList f47806e;

        /* renamed from: f  reason: collision with root package name */
        ColorStateList f47807f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f47808g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f47809h;

        /* renamed from: i  reason: collision with root package name */
        Rect f47810i;

        /* renamed from: j  reason: collision with root package name */
        float f47811j;

        /* renamed from: k  reason: collision with root package name */
        float f47812k;

        /* renamed from: l  reason: collision with root package name */
        float f47813l;

        /* renamed from: m  reason: collision with root package name */
        int f47814m;

        /* renamed from: n  reason: collision with root package name */
        float f47815n;

        /* renamed from: o  reason: collision with root package name */
        float f47816o;

        /* renamed from: p  reason: collision with root package name */
        float f47817p;

        /* renamed from: q  reason: collision with root package name */
        int f47818q;

        /* renamed from: r  reason: collision with root package name */
        int f47819r;

        /* renamed from: s  reason: collision with root package name */
        int f47820s;

        /* renamed from: t  reason: collision with root package name */
        int f47821t;

        /* renamed from: u  reason: collision with root package name */
        boolean f47822u;

        /* renamed from: v  reason: collision with root package name */
        Paint.Style f47823v;

        public c(k kVar, ih.a aVar) {
            this.f47805d = null;
            this.f47806e = null;
            this.f47807f = null;
            this.f47808g = null;
            this.f47809h = PorterDuff.Mode.SRC_IN;
            this.f47810i = null;
            this.f47811j = 1.0f;
            this.f47812k = 1.0f;
            this.f47814m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f47815n = 0.0f;
            this.f47816o = 0.0f;
            this.f47817p = 0.0f;
            this.f47818q = 0;
            this.f47819r = 0;
            this.f47820s = 0;
            this.f47821t = 0;
            this.f47822u = false;
            this.f47823v = Paint.Style.FILL_AND_STROKE;
            this.f47802a = kVar;
            this.f47803b = aVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            g gVar = new g(this);
            gVar.f47788p = true;
            return gVar;
        }

        public c(c cVar) {
            this.f47805d = null;
            this.f47806e = null;
            this.f47807f = null;
            this.f47808g = null;
            this.f47809h = PorterDuff.Mode.SRC_IN;
            this.f47810i = null;
            this.f47811j = 1.0f;
            this.f47812k = 1.0f;
            this.f47814m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f47815n = 0.0f;
            this.f47816o = 0.0f;
            this.f47817p = 0.0f;
            this.f47818q = 0;
            this.f47819r = 0;
            this.f47820s = 0;
            this.f47821t = 0;
            this.f47822u = false;
            this.f47823v = Paint.Style.FILL_AND_STROKE;
            this.f47802a = cVar.f47802a;
            this.f47803b = cVar.f47803b;
            this.f47813l = cVar.f47813l;
            this.f47804c = cVar.f47804c;
            this.f47805d = cVar.f47805d;
            this.f47806e = cVar.f47806e;
            this.f47809h = cVar.f47809h;
            this.f47808g = cVar.f47808g;
            this.f47814m = cVar.f47814m;
            this.f47811j = cVar.f47811j;
            this.f47820s = cVar.f47820s;
            this.f47818q = cVar.f47818q;
            this.f47822u = cVar.f47822u;
            this.f47812k = cVar.f47812k;
            this.f47815n = cVar.f47815n;
            this.f47816o = cVar.f47816o;
            this.f47817p = cVar.f47817p;
            this.f47819r = cVar.f47819r;
            this.f47821t = cVar.f47821t;
            this.f47807f = cVar.f47807f;
            this.f47823v = cVar.f47823v;
            if (cVar.f47810i != null) {
                this.f47810i = new Rect(cVar.f47810i);
            }
        }
    }
}
