package oh;

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
import oh.k;
import oh.l;
import oh.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends Drawable implements n {
    private static final String I = "g";
    private static final Paint J;
    private final nh.a A;
    private final l.b B;
    private final l C;
    private PorterDuffColorFilter D;
    private PorterDuffColorFilter E;
    private int F;
    private final RectF G;
    private boolean H;

    /* renamed from: d  reason: collision with root package name */
    private c f43965d;

    /* renamed from: e  reason: collision with root package name */
    private final m.g[] f43966e;

    /* renamed from: i  reason: collision with root package name */
    private final m.g[] f43967i;

    /* renamed from: o  reason: collision with root package name */
    private final BitSet f43968o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f43969p;

    /* renamed from: q  reason: collision with root package name */
    private final Matrix f43970q;

    /* renamed from: r  reason: collision with root package name */
    private final Path f43971r;

    /* renamed from: s  reason: collision with root package name */
    private final Path f43972s;

    /* renamed from: t  reason: collision with root package name */
    private final RectF f43973t;

    /* renamed from: u  reason: collision with root package name */
    private final RectF f43974u;

    /* renamed from: v  reason: collision with root package name */
    private final Region f43975v;

    /* renamed from: w  reason: collision with root package name */
    private final Region f43976w;

    /* renamed from: x  reason: collision with root package name */
    private k f43977x;

    /* renamed from: y  reason: collision with root package name */
    private final Paint f43978y;

    /* renamed from: z  reason: collision with root package name */
    private final Paint f43979z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements l.b {
        a() {
        }

        @Override // oh.l.b
        public void a(m mVar, Matrix matrix, int i10) {
            g.this.f43968o.set(i10, mVar.e());
            g.this.f43966e[i10] = mVar.f(matrix);
        }

        @Override // oh.l.b
        public void b(m mVar, Matrix matrix, int i10) {
            g.this.f43968o.set(i10 + 4, mVar.e());
            g.this.f43967i[i10] = mVar.f(matrix);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements k.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f43981a;

        b(float f10) {
            this.f43981a = f10;
        }

        @Override // oh.k.c
        public oh.c a(oh.c cVar) {
            if (cVar instanceof i) {
                return cVar;
            }
            return new oh.b(this.f43981a, cVar);
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
            return this.f43979z.getStrokeWidth() / 2.0f;
        }
        return 0.0f;
    }

    private boolean K() {
        c cVar = this.f43965d;
        int i10 = cVar.f43999q;
        if (i10 != 1 && cVar.f44000r > 0) {
            if (i10 == 2 || U()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean L() {
        Paint.Style style = this.f43965d.f44004v;
        if (style != Paint.Style.FILL_AND_STROKE && style != Paint.Style.FILL) {
            return false;
        }
        return true;
    }

    private boolean M() {
        Paint.Style style = this.f43965d.f44004v;
        if ((style == Paint.Style.FILL_AND_STROKE || style == Paint.Style.STROKE) && this.f43979z.getStrokeWidth() > 0.0f) {
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
            Bitmap createBitmap = Bitmap.createBitmap(((int) this.G.width()) + (this.f43965d.f44000r * 2) + width, ((int) this.G.height()) + (this.f43965d.f44000r * 2) + height, Bitmap.Config.ARGB_8888);
            Canvas canvas2 = new Canvas(createBitmap);
            float f10 = (getBounds().left - this.f43965d.f44000r) - width;
            float f11 = (getBounds().top - this.f43965d.f44000r) - height;
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
        if (this.f43965d.f43992j != 1.0f) {
            this.f43970q.reset();
            Matrix matrix = this.f43970q;
            float f10 = this.f43965d.f43992j;
            matrix.setScale(f10, f10, rectF.width() / 2.0f, rectF.height() / 2.0f);
            path.transform(this.f43970q);
        }
        path.computeBounds(this.G, true);
    }

    private boolean h0(int[] iArr) {
        boolean z10;
        int color;
        int colorForState;
        int color2;
        int colorForState2;
        if (this.f43965d.f43986d != null && color2 != (colorForState2 = this.f43965d.f43986d.getColorForState(iArr, (color2 = this.f43978y.getColor())))) {
            this.f43978y.setColor(colorForState2);
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f43965d.f43987e != null && color != (colorForState = this.f43965d.f43987e.getColorForState(iArr, (color = this.f43979z.getColor())))) {
            this.f43979z.setColor(colorForState);
            return true;
        }
        return z10;
    }

    private void i() {
        k y10 = D().y(new b(-E()));
        this.f43977x = y10;
        this.C.d(y10, this.f43965d.f43993k, v(), this.f43972s);
    }

    private boolean i0() {
        PorterDuffColorFilter porterDuffColorFilter = this.D;
        PorterDuffColorFilter porterDuffColorFilter2 = this.E;
        c cVar = this.f43965d;
        this.D = k(cVar.f43989g, cVar.f43990h, this.f43978y, true);
        c cVar2 = this.f43965d;
        this.E = k(cVar2.f43988f, cVar2.f43990h, this.f43979z, false);
        c cVar3 = this.f43965d;
        if (cVar3.f44003u) {
            this.A.d(cVar3.f43989g.getColorForState(getState(), 0));
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
        this.f43965d.f44000r = (int) Math.ceil(0.75f * J2);
        this.f43965d.f44001s = (int) Math.ceil(J2 * 0.25f);
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
            colorStateList = ColorStateList.valueOf(eh.a.c(context, yg.b.f54345o, g.class.getSimpleName()));
        }
        g gVar = new g();
        gVar.N(context);
        gVar.X(colorStateList);
        gVar.W(f10);
        return gVar;
    }

    private void n(Canvas canvas) {
        if (this.f43968o.cardinality() > 0) {
            Log.w(I, "Compatibility shadow requested but can't be drawn for all operations in this shape.");
        }
        if (this.f43965d.f44001s != 0) {
            canvas.drawPath(this.f43971r, this.A.c());
        }
        for (int i10 = 0; i10 < 4; i10++) {
            this.f43966e[i10].b(this.A, this.f43965d.f44000r, canvas);
            this.f43967i[i10].b(this.A, this.f43965d.f44000r, canvas);
        }
        if (this.H) {
            int B = B();
            int C = C();
            canvas.translate(-B, -C);
            canvas.drawPath(this.f43971r, J);
            canvas.translate(B, C);
        }
    }

    private void o(Canvas canvas) {
        q(canvas, this.f43978y, this.f43971r, this.f43965d.f43983a, u());
    }

    private void q(Canvas canvas, Paint paint, Path path, k kVar, RectF rectF) {
        if (kVar.u(rectF)) {
            float a10 = kVar.t().a(rectF) * this.f43965d.f43993k;
            canvas.drawRoundRect(rectF, a10, a10, paint);
            return;
        }
        canvas.drawPath(path, paint);
    }

    private RectF v() {
        this.f43974u.set(u());
        float E = E();
        this.f43974u.inset(E, E);
        return this.f43974u;
    }

    public int A() {
        return this.F;
    }

    public int B() {
        c cVar = this.f43965d;
        return (int) (cVar.f44001s * Math.sin(Math.toRadians(cVar.f44002t)));
    }

    public int C() {
        c cVar = this.f43965d;
        return (int) (cVar.f44001s * Math.cos(Math.toRadians(cVar.f44002t)));
    }

    public k D() {
        return this.f43965d.f43983a;
    }

    public ColorStateList F() {
        return this.f43965d.f43989g;
    }

    public float G() {
        return this.f43965d.f43983a.r().a(u());
    }

    public float H() {
        return this.f43965d.f43983a.t().a(u());
    }

    public float I() {
        return this.f43965d.f43998p;
    }

    public float J() {
        return w() + I();
    }

    public void N(Context context) {
        this.f43965d.f43984b = new gh.a(context);
        j0();
    }

    public boolean P() {
        gh.a aVar = this.f43965d.f43984b;
        if (aVar != null && aVar.d()) {
            return true;
        }
        return false;
    }

    public boolean Q() {
        return this.f43965d.f43983a.u(u());
    }

    public boolean U() {
        int i10 = Build.VERSION.SDK_INT;
        if (!Q() && !this.f43971r.isConvex() && i10 < 29) {
            return true;
        }
        return false;
    }

    public void V(oh.c cVar) {
        setShapeAppearanceModel(this.f43965d.f43983a.x(cVar));
    }

    public void W(float f10) {
        c cVar = this.f43965d;
        if (cVar.f43997o != f10) {
            cVar.f43997o = f10;
            j0();
        }
    }

    public void X(ColorStateList colorStateList) {
        c cVar = this.f43965d;
        if (cVar.f43986d != colorStateList) {
            cVar.f43986d = colorStateList;
            onStateChange(getState());
        }
    }

    public void Y(float f10) {
        c cVar = this.f43965d;
        if (cVar.f43993k != f10) {
            cVar.f43993k = f10;
            this.f43969p = true;
            invalidateSelf();
        }
    }

    public void Z(int i10, int i11, int i12, int i13) {
        c cVar = this.f43965d;
        if (cVar.f43991i == null) {
            cVar.f43991i = new Rect();
        }
        this.f43965d.f43991i.set(i10, i11, i12, i13);
        invalidateSelf();
    }

    public void a0(float f10) {
        c cVar = this.f43965d;
        if (cVar.f43996n != f10) {
            cVar.f43996n = f10;
            j0();
        }
    }

    public void b0(boolean z10) {
        this.H = z10;
    }

    public void c0(int i10) {
        this.A.d(i10);
        this.f43965d.f44003u = false;
        O();
    }

    public void d0(float f10, int i10) {
        g0(f10);
        f0(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f43978y.setColorFilter(this.D);
        int alpha = this.f43978y.getAlpha();
        this.f43978y.setAlpha(S(alpha, this.f43965d.f43995m));
        this.f43979z.setColorFilter(this.E);
        this.f43979z.setStrokeWidth(this.f43965d.f43994l);
        int alpha2 = this.f43979z.getAlpha();
        this.f43979z.setAlpha(S(alpha2, this.f43965d.f43995m));
        if (this.f43969p) {
            i();
            g(u(), this.f43971r);
            this.f43969p = false;
        }
        R(canvas);
        if (L()) {
            o(canvas);
        }
        if (M()) {
            r(canvas);
        }
        this.f43978y.setAlpha(alpha);
        this.f43979z.setAlpha(alpha2);
    }

    public void e0(float f10, ColorStateList colorStateList) {
        g0(f10);
        f0(colorStateList);
    }

    public void f0(ColorStateList colorStateList) {
        c cVar = this.f43965d;
        if (cVar.f43987e != colorStateList) {
            cVar.f43987e = colorStateList;
            onStateChange(getState());
        }
    }

    public void g0(float f10) {
        this.f43965d.f43994l = f10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f43965d.f43995m;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f43965d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f43965d.f43999q == 2) {
            return;
        }
        if (Q()) {
            outline.setRoundRect(getBounds(), G() * this.f43965d.f43993k);
            return;
        }
        g(u(), this.f43971r);
        com.google.android.material.drawable.c.k(outline, this.f43971r);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        Rect rect2 = this.f43965d.f43991i;
        if (rect2 != null) {
            rect.set(rect2);
            return true;
        }
        return super.getPadding(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public Region getTransparentRegion() {
        this.f43975v.set(getBounds());
        g(u(), this.f43971r);
        this.f43976w.setPath(this.f43971r, this.f43975v);
        this.f43975v.op(this.f43976w, Region.Op.DIFFERENCE);
        return this.f43975v;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h(RectF rectF, Path path) {
        l lVar = this.C;
        c cVar = this.f43965d;
        lVar.e(cVar.f43983a, cVar.f43993k, rectF, this.B, path);
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        this.f43969p = true;
        super.invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!super.isStateful()) {
            ColorStateList colorStateList = this.f43965d.f43989g;
            if (colorStateList == null || !colorStateList.isStateful()) {
                ColorStateList colorStateList2 = this.f43965d.f43988f;
                if (colorStateList2 == null || !colorStateList2.isStateful()) {
                    ColorStateList colorStateList3 = this.f43965d.f43987e;
                    if (colorStateList3 == null || !colorStateList3.isStateful()) {
                        ColorStateList colorStateList4 = this.f43965d.f43986d;
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
        gh.a aVar = this.f43965d.f43984b;
        if (aVar != null) {
            return aVar.c(i10, J2);
        }
        return i10;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.f43965d = new c(this.f43965d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f43969p = true;
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
        q(canvas, paint, path, this.f43965d.f43983a, rectF);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(Canvas canvas) {
        q(canvas, this.f43979z, this.f43972s, this.f43977x, v());
    }

    public float s() {
        return this.f43965d.f43983a.j().a(u());
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        c cVar = this.f43965d;
        if (cVar.f43995m != i10) {
            cVar.f43995m = i10;
            O();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f43965d.f43985c = colorFilter;
        O();
    }

    @Override // oh.n
    public void setShapeAppearanceModel(k kVar) {
        this.f43965d.f43983a = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        setTintList(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f43965d.f43989g = colorStateList;
        i0();
        O();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        c cVar = this.f43965d;
        if (cVar.f43990h != mode) {
            cVar.f43990h = mode;
            i0();
            O();
        }
    }

    public float t() {
        return this.f43965d.f43983a.l().a(u());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public RectF u() {
        this.f43973t.set(getBounds());
        return this.f43973t;
    }

    public float w() {
        return this.f43965d.f43997o;
    }

    public ColorStateList x() {
        return this.f43965d.f43986d;
    }

    public float y() {
        return this.f43965d.f43993k;
    }

    public float z() {
        return this.f43965d.f43996n;
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
        this.f43966e = new m.g[4];
        this.f43967i = new m.g[4];
        this.f43968o = new BitSet(8);
        this.f43970q = new Matrix();
        this.f43971r = new Path();
        this.f43972s = new Path();
        this.f43973t = new RectF();
        this.f43974u = new RectF();
        this.f43975v = new Region();
        this.f43976w = new Region();
        Paint paint = new Paint(1);
        this.f43978y = paint;
        Paint paint2 = new Paint(1);
        this.f43979z = paint2;
        this.A = new nh.a();
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            lVar = l.k();
        } else {
            lVar = new l();
        }
        this.C = lVar;
        this.G = new RectF();
        this.H = true;
        this.f43965d = cVar;
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
        k f43983a;

        /* renamed from: b  reason: collision with root package name */
        gh.a f43984b;

        /* renamed from: c  reason: collision with root package name */
        ColorFilter f43985c;

        /* renamed from: d  reason: collision with root package name */
        ColorStateList f43986d;

        /* renamed from: e  reason: collision with root package name */
        ColorStateList f43987e;

        /* renamed from: f  reason: collision with root package name */
        ColorStateList f43988f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f43989g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f43990h;

        /* renamed from: i  reason: collision with root package name */
        Rect f43991i;

        /* renamed from: j  reason: collision with root package name */
        float f43992j;

        /* renamed from: k  reason: collision with root package name */
        float f43993k;

        /* renamed from: l  reason: collision with root package name */
        float f43994l;

        /* renamed from: m  reason: collision with root package name */
        int f43995m;

        /* renamed from: n  reason: collision with root package name */
        float f43996n;

        /* renamed from: o  reason: collision with root package name */
        float f43997o;

        /* renamed from: p  reason: collision with root package name */
        float f43998p;

        /* renamed from: q  reason: collision with root package name */
        int f43999q;

        /* renamed from: r  reason: collision with root package name */
        int f44000r;

        /* renamed from: s  reason: collision with root package name */
        int f44001s;

        /* renamed from: t  reason: collision with root package name */
        int f44002t;

        /* renamed from: u  reason: collision with root package name */
        boolean f44003u;

        /* renamed from: v  reason: collision with root package name */
        Paint.Style f44004v;

        public c(k kVar, gh.a aVar) {
            this.f43986d = null;
            this.f43987e = null;
            this.f43988f = null;
            this.f43989g = null;
            this.f43990h = PorterDuff.Mode.SRC_IN;
            this.f43991i = null;
            this.f43992j = 1.0f;
            this.f43993k = 1.0f;
            this.f43995m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f43996n = 0.0f;
            this.f43997o = 0.0f;
            this.f43998p = 0.0f;
            this.f43999q = 0;
            this.f44000r = 0;
            this.f44001s = 0;
            this.f44002t = 0;
            this.f44003u = false;
            this.f44004v = Paint.Style.FILL_AND_STROKE;
            this.f43983a = kVar;
            this.f43984b = aVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            g gVar = new g(this);
            gVar.f43969p = true;
            return gVar;
        }

        public c(c cVar) {
            this.f43986d = null;
            this.f43987e = null;
            this.f43988f = null;
            this.f43989g = null;
            this.f43990h = PorterDuff.Mode.SRC_IN;
            this.f43991i = null;
            this.f43992j = 1.0f;
            this.f43993k = 1.0f;
            this.f43995m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f43996n = 0.0f;
            this.f43997o = 0.0f;
            this.f43998p = 0.0f;
            this.f43999q = 0;
            this.f44000r = 0;
            this.f44001s = 0;
            this.f44002t = 0;
            this.f44003u = false;
            this.f44004v = Paint.Style.FILL_AND_STROKE;
            this.f43983a = cVar.f43983a;
            this.f43984b = cVar.f43984b;
            this.f43994l = cVar.f43994l;
            this.f43985c = cVar.f43985c;
            this.f43986d = cVar.f43986d;
            this.f43987e = cVar.f43987e;
            this.f43990h = cVar.f43990h;
            this.f43989g = cVar.f43989g;
            this.f43995m = cVar.f43995m;
            this.f43992j = cVar.f43992j;
            this.f44001s = cVar.f44001s;
            this.f43999q = cVar.f43999q;
            this.f44003u = cVar.f44003u;
            this.f43993k = cVar.f43993k;
            this.f43996n = cVar.f43996n;
            this.f43997o = cVar.f43997o;
            this.f43998p = cVar.f43998p;
            this.f44000r = cVar.f44000r;
            this.f44002t = cVar.f44002t;
            this.f43988f = cVar.f43988f;
            this.f44004v = cVar.f44004v;
            if (cVar.f43991i != null) {
                this.f43991i = new Rect(cVar.f43991i);
            }
        }
    }
}
