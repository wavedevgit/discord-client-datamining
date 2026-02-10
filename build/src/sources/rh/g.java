package rh;

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
import rh.k;
import rh.l;
import rh.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends Drawable implements n {
    private static final String I = "g";
    private static final Paint J;
    private final qh.a A;
    private final l.b B;
    private final l C;
    private PorterDuffColorFilter D;
    private PorterDuffColorFilter E;
    private int F;
    private final RectF G;
    private boolean H;

    /* renamed from: d  reason: collision with root package name */
    private c f48950d;

    /* renamed from: e  reason: collision with root package name */
    private final m.g[] f48951e;

    /* renamed from: i  reason: collision with root package name */
    private final m.g[] f48952i;

    /* renamed from: o  reason: collision with root package name */
    private final BitSet f48953o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f48954p;

    /* renamed from: q  reason: collision with root package name */
    private final Matrix f48955q;

    /* renamed from: r  reason: collision with root package name */
    private final Path f48956r;

    /* renamed from: s  reason: collision with root package name */
    private final Path f48957s;

    /* renamed from: t  reason: collision with root package name */
    private final RectF f48958t;

    /* renamed from: u  reason: collision with root package name */
    private final RectF f48959u;

    /* renamed from: v  reason: collision with root package name */
    private final Region f48960v;

    /* renamed from: w  reason: collision with root package name */
    private final Region f48961w;

    /* renamed from: x  reason: collision with root package name */
    private k f48962x;

    /* renamed from: y  reason: collision with root package name */
    private final Paint f48963y;

    /* renamed from: z  reason: collision with root package name */
    private final Paint f48964z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements l.b {
        a() {
        }

        @Override // rh.l.b
        public void a(m mVar, Matrix matrix, int i10) {
            g.this.f48953o.set(i10, mVar.e());
            g.this.f48951e[i10] = mVar.f(matrix);
        }

        @Override // rh.l.b
        public void b(m mVar, Matrix matrix, int i10) {
            g.this.f48953o.set(i10 + 4, mVar.e());
            g.this.f48952i[i10] = mVar.f(matrix);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements k.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f48966a;

        b(float f10) {
            this.f48966a = f10;
        }

        @Override // rh.k.c
        public rh.c a(rh.c cVar) {
            if (cVar instanceof i) {
                return cVar;
            }
            return new rh.b(this.f48966a, cVar);
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
            return this.f48964z.getStrokeWidth() / 2.0f;
        }
        return 0.0f;
    }

    private boolean K() {
        c cVar = this.f48950d;
        int i10 = cVar.f48984q;
        if (i10 != 1 && cVar.f48985r > 0) {
            if (i10 == 2 || U()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean L() {
        Paint.Style style = this.f48950d.f48989v;
        if (style != Paint.Style.FILL_AND_STROKE && style != Paint.Style.FILL) {
            return false;
        }
        return true;
    }

    private boolean M() {
        Paint.Style style = this.f48950d.f48989v;
        if ((style == Paint.Style.FILL_AND_STROKE || style == Paint.Style.STROKE) && this.f48964z.getStrokeWidth() > 0.0f) {
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
            Bitmap createBitmap = Bitmap.createBitmap(((int) this.G.width()) + (this.f48950d.f48985r * 2) + width, ((int) this.G.height()) + (this.f48950d.f48985r * 2) + height, Bitmap.Config.ARGB_8888);
            Canvas canvas2 = new Canvas(createBitmap);
            float f10 = (getBounds().left - this.f48950d.f48985r) - width;
            float f11 = (getBounds().top - this.f48950d.f48985r) - height;
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
        if (this.f48950d.f48977j != 1.0f) {
            this.f48955q.reset();
            Matrix matrix = this.f48955q;
            float f10 = this.f48950d.f48977j;
            matrix.setScale(f10, f10, rectF.width() / 2.0f, rectF.height() / 2.0f);
            path.transform(this.f48955q);
        }
        path.computeBounds(this.G, true);
    }

    private boolean h0(int[] iArr) {
        boolean z10;
        int color;
        int colorForState;
        int color2;
        int colorForState2;
        if (this.f48950d.f48971d != null && color2 != (colorForState2 = this.f48950d.f48971d.getColorForState(iArr, (color2 = this.f48963y.getColor())))) {
            this.f48963y.setColor(colorForState2);
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f48950d.f48972e != null && color != (colorForState = this.f48950d.f48972e.getColorForState(iArr, (color = this.f48964z.getColor())))) {
            this.f48964z.setColor(colorForState);
            return true;
        }
        return z10;
    }

    private void i() {
        k y10 = D().y(new b(-E()));
        this.f48962x = y10;
        this.C.d(y10, this.f48950d.f48978k, v(), this.f48957s);
    }

    private boolean i0() {
        PorterDuffColorFilter porterDuffColorFilter = this.D;
        PorterDuffColorFilter porterDuffColorFilter2 = this.E;
        c cVar = this.f48950d;
        this.D = k(cVar.f48974g, cVar.f48975h, this.f48963y, true);
        c cVar2 = this.f48950d;
        this.E = k(cVar2.f48973f, cVar2.f48975h, this.f48964z, false);
        c cVar3 = this.f48950d;
        if (cVar3.f48988u) {
            this.A.d(cVar3.f48974g.getColorForState(getState(), 0));
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
        this.f48950d.f48985r = (int) Math.ceil(0.75f * J2);
        this.f48950d.f48986s = (int) Math.ceil(J2 * 0.25f);
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
            colorStateList = ColorStateList.valueOf(hh.a.c(context, bh.b.f6641o, g.class.getSimpleName()));
        }
        g gVar = new g();
        gVar.N(context);
        gVar.X(colorStateList);
        gVar.W(f10);
        return gVar;
    }

    private void n(Canvas canvas) {
        if (this.f48953o.cardinality() > 0) {
            Log.w(I, "Compatibility shadow requested but can't be drawn for all operations in this shape.");
        }
        if (this.f48950d.f48986s != 0) {
            canvas.drawPath(this.f48956r, this.A.c());
        }
        for (int i10 = 0; i10 < 4; i10++) {
            this.f48951e[i10].b(this.A, this.f48950d.f48985r, canvas);
            this.f48952i[i10].b(this.A, this.f48950d.f48985r, canvas);
        }
        if (this.H) {
            int B = B();
            int C = C();
            canvas.translate(-B, -C);
            canvas.drawPath(this.f48956r, J);
            canvas.translate(B, C);
        }
    }

    private void o(Canvas canvas) {
        q(canvas, this.f48963y, this.f48956r, this.f48950d.f48968a, u());
    }

    private void q(Canvas canvas, Paint paint, Path path, k kVar, RectF rectF) {
        if (kVar.u(rectF)) {
            float a10 = kVar.t().a(rectF) * this.f48950d.f48978k;
            canvas.drawRoundRect(rectF, a10, a10, paint);
            return;
        }
        canvas.drawPath(path, paint);
    }

    private RectF v() {
        this.f48959u.set(u());
        float E = E();
        this.f48959u.inset(E, E);
        return this.f48959u;
    }

    public int A() {
        return this.F;
    }

    public int B() {
        c cVar = this.f48950d;
        return (int) (cVar.f48986s * Math.sin(Math.toRadians(cVar.f48987t)));
    }

    public int C() {
        c cVar = this.f48950d;
        return (int) (cVar.f48986s * Math.cos(Math.toRadians(cVar.f48987t)));
    }

    public k D() {
        return this.f48950d.f48968a;
    }

    public ColorStateList F() {
        return this.f48950d.f48974g;
    }

    public float G() {
        return this.f48950d.f48968a.r().a(u());
    }

    public float H() {
        return this.f48950d.f48968a.t().a(u());
    }

    public float I() {
        return this.f48950d.f48983p;
    }

    public float J() {
        return w() + I();
    }

    public void N(Context context) {
        this.f48950d.f48969b = new jh.a(context);
        j0();
    }

    public boolean P() {
        jh.a aVar = this.f48950d.f48969b;
        if (aVar != null && aVar.d()) {
            return true;
        }
        return false;
    }

    public boolean Q() {
        return this.f48950d.f48968a.u(u());
    }

    public boolean U() {
        int i10 = Build.VERSION.SDK_INT;
        if (!Q() && !this.f48956r.isConvex() && i10 < 29) {
            return true;
        }
        return false;
    }

    public void V(rh.c cVar) {
        setShapeAppearanceModel(this.f48950d.f48968a.x(cVar));
    }

    public void W(float f10) {
        c cVar = this.f48950d;
        if (cVar.f48982o != f10) {
            cVar.f48982o = f10;
            j0();
        }
    }

    public void X(ColorStateList colorStateList) {
        c cVar = this.f48950d;
        if (cVar.f48971d != colorStateList) {
            cVar.f48971d = colorStateList;
            onStateChange(getState());
        }
    }

    public void Y(float f10) {
        c cVar = this.f48950d;
        if (cVar.f48978k != f10) {
            cVar.f48978k = f10;
            this.f48954p = true;
            invalidateSelf();
        }
    }

    public void Z(int i10, int i11, int i12, int i13) {
        c cVar = this.f48950d;
        if (cVar.f48976i == null) {
            cVar.f48976i = new Rect();
        }
        this.f48950d.f48976i.set(i10, i11, i12, i13);
        invalidateSelf();
    }

    public void a0(float f10) {
        c cVar = this.f48950d;
        if (cVar.f48981n != f10) {
            cVar.f48981n = f10;
            j0();
        }
    }

    public void b0(boolean z10) {
        this.H = z10;
    }

    public void c0(int i10) {
        this.A.d(i10);
        this.f48950d.f48988u = false;
        O();
    }

    public void d0(float f10, int i10) {
        g0(f10);
        f0(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f48963y.setColorFilter(this.D);
        int alpha = this.f48963y.getAlpha();
        this.f48963y.setAlpha(S(alpha, this.f48950d.f48980m));
        this.f48964z.setColorFilter(this.E);
        this.f48964z.setStrokeWidth(this.f48950d.f48979l);
        int alpha2 = this.f48964z.getAlpha();
        this.f48964z.setAlpha(S(alpha2, this.f48950d.f48980m));
        if (this.f48954p) {
            i();
            g(u(), this.f48956r);
            this.f48954p = false;
        }
        R(canvas);
        if (L()) {
            o(canvas);
        }
        if (M()) {
            r(canvas);
        }
        this.f48963y.setAlpha(alpha);
        this.f48964z.setAlpha(alpha2);
    }

    public void e0(float f10, ColorStateList colorStateList) {
        g0(f10);
        f0(colorStateList);
    }

    public void f0(ColorStateList colorStateList) {
        c cVar = this.f48950d;
        if (cVar.f48972e != colorStateList) {
            cVar.f48972e = colorStateList;
            onStateChange(getState());
        }
    }

    public void g0(float f10) {
        this.f48950d.f48979l = f10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f48950d.f48980m;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f48950d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f48950d.f48984q == 2) {
            return;
        }
        if (Q()) {
            outline.setRoundRect(getBounds(), G() * this.f48950d.f48978k);
            return;
        }
        g(u(), this.f48956r);
        com.google.android.material.drawable.c.k(outline, this.f48956r);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        Rect rect2 = this.f48950d.f48976i;
        if (rect2 != null) {
            rect.set(rect2);
            return true;
        }
        return super.getPadding(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public Region getTransparentRegion() {
        this.f48960v.set(getBounds());
        g(u(), this.f48956r);
        this.f48961w.setPath(this.f48956r, this.f48960v);
        this.f48960v.op(this.f48961w, Region.Op.DIFFERENCE);
        return this.f48960v;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h(RectF rectF, Path path) {
        l lVar = this.C;
        c cVar = this.f48950d;
        lVar.e(cVar.f48968a, cVar.f48978k, rectF, this.B, path);
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        this.f48954p = true;
        super.invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!super.isStateful()) {
            ColorStateList colorStateList = this.f48950d.f48974g;
            if (colorStateList == null || !colorStateList.isStateful()) {
                ColorStateList colorStateList2 = this.f48950d.f48973f;
                if (colorStateList2 == null || !colorStateList2.isStateful()) {
                    ColorStateList colorStateList3 = this.f48950d.f48972e;
                    if (colorStateList3 == null || !colorStateList3.isStateful()) {
                        ColorStateList colorStateList4 = this.f48950d.f48971d;
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
        jh.a aVar = this.f48950d.f48969b;
        if (aVar != null) {
            return aVar.c(i10, J2);
        }
        return i10;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.f48950d = new c(this.f48950d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f48954p = true;
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
        q(canvas, paint, path, this.f48950d.f48968a, rectF);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(Canvas canvas) {
        q(canvas, this.f48964z, this.f48957s, this.f48962x, v());
    }

    public float s() {
        return this.f48950d.f48968a.j().a(u());
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        c cVar = this.f48950d;
        if (cVar.f48980m != i10) {
            cVar.f48980m = i10;
            O();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f48950d.f48970c = colorFilter;
        O();
    }

    @Override // rh.n
    public void setShapeAppearanceModel(k kVar) {
        this.f48950d.f48968a = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        setTintList(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f48950d.f48974g = colorStateList;
        i0();
        O();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        c cVar = this.f48950d;
        if (cVar.f48975h != mode) {
            cVar.f48975h = mode;
            i0();
            O();
        }
    }

    public float t() {
        return this.f48950d.f48968a.l().a(u());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public RectF u() {
        this.f48958t.set(getBounds());
        return this.f48958t;
    }

    public float w() {
        return this.f48950d.f48982o;
    }

    public ColorStateList x() {
        return this.f48950d.f48971d;
    }

    public float y() {
        return this.f48950d.f48978k;
    }

    public float z() {
        return this.f48950d.f48981n;
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
        this.f48951e = new m.g[4];
        this.f48952i = new m.g[4];
        this.f48953o = new BitSet(8);
        this.f48955q = new Matrix();
        this.f48956r = new Path();
        this.f48957s = new Path();
        this.f48958t = new RectF();
        this.f48959u = new RectF();
        this.f48960v = new Region();
        this.f48961w = new Region();
        Paint paint = new Paint(1);
        this.f48963y = paint;
        Paint paint2 = new Paint(1);
        this.f48964z = paint2;
        this.A = new qh.a();
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            lVar = l.k();
        } else {
            lVar = new l();
        }
        this.C = lVar;
        this.G = new RectF();
        this.H = true;
        this.f48950d = cVar;
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
        k f48968a;

        /* renamed from: b  reason: collision with root package name */
        jh.a f48969b;

        /* renamed from: c  reason: collision with root package name */
        ColorFilter f48970c;

        /* renamed from: d  reason: collision with root package name */
        ColorStateList f48971d;

        /* renamed from: e  reason: collision with root package name */
        ColorStateList f48972e;

        /* renamed from: f  reason: collision with root package name */
        ColorStateList f48973f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f48974g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f48975h;

        /* renamed from: i  reason: collision with root package name */
        Rect f48976i;

        /* renamed from: j  reason: collision with root package name */
        float f48977j;

        /* renamed from: k  reason: collision with root package name */
        float f48978k;

        /* renamed from: l  reason: collision with root package name */
        float f48979l;

        /* renamed from: m  reason: collision with root package name */
        int f48980m;

        /* renamed from: n  reason: collision with root package name */
        float f48981n;

        /* renamed from: o  reason: collision with root package name */
        float f48982o;

        /* renamed from: p  reason: collision with root package name */
        float f48983p;

        /* renamed from: q  reason: collision with root package name */
        int f48984q;

        /* renamed from: r  reason: collision with root package name */
        int f48985r;

        /* renamed from: s  reason: collision with root package name */
        int f48986s;

        /* renamed from: t  reason: collision with root package name */
        int f48987t;

        /* renamed from: u  reason: collision with root package name */
        boolean f48988u;

        /* renamed from: v  reason: collision with root package name */
        Paint.Style f48989v;

        public c(k kVar, jh.a aVar) {
            this.f48971d = null;
            this.f48972e = null;
            this.f48973f = null;
            this.f48974g = null;
            this.f48975h = PorterDuff.Mode.SRC_IN;
            this.f48976i = null;
            this.f48977j = 1.0f;
            this.f48978k = 1.0f;
            this.f48980m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f48981n = 0.0f;
            this.f48982o = 0.0f;
            this.f48983p = 0.0f;
            this.f48984q = 0;
            this.f48985r = 0;
            this.f48986s = 0;
            this.f48987t = 0;
            this.f48988u = false;
            this.f48989v = Paint.Style.FILL_AND_STROKE;
            this.f48968a = kVar;
            this.f48969b = aVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            g gVar = new g(this);
            gVar.f48954p = true;
            return gVar;
        }

        public c(c cVar) {
            this.f48971d = null;
            this.f48972e = null;
            this.f48973f = null;
            this.f48974g = null;
            this.f48975h = PorterDuff.Mode.SRC_IN;
            this.f48976i = null;
            this.f48977j = 1.0f;
            this.f48978k = 1.0f;
            this.f48980m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f48981n = 0.0f;
            this.f48982o = 0.0f;
            this.f48983p = 0.0f;
            this.f48984q = 0;
            this.f48985r = 0;
            this.f48986s = 0;
            this.f48987t = 0;
            this.f48988u = false;
            this.f48989v = Paint.Style.FILL_AND_STROKE;
            this.f48968a = cVar.f48968a;
            this.f48969b = cVar.f48969b;
            this.f48979l = cVar.f48979l;
            this.f48970c = cVar.f48970c;
            this.f48971d = cVar.f48971d;
            this.f48972e = cVar.f48972e;
            this.f48975h = cVar.f48975h;
            this.f48974g = cVar.f48974g;
            this.f48980m = cVar.f48980m;
            this.f48977j = cVar.f48977j;
            this.f48986s = cVar.f48986s;
            this.f48984q = cVar.f48984q;
            this.f48988u = cVar.f48988u;
            this.f48978k = cVar.f48978k;
            this.f48981n = cVar.f48981n;
            this.f48982o = cVar.f48982o;
            this.f48983p = cVar.f48983p;
            this.f48985r = cVar.f48985r;
            this.f48987t = cVar.f48987t;
            this.f48973f = cVar.f48973f;
            this.f48989v = cVar.f48989v;
            if (cVar.f48976i != null) {
                this.f48976i = new Rect(cVar.f48976i);
            }
        }
    }
}
