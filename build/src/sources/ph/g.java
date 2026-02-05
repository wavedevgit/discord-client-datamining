package ph;

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
import ph.k;
import ph.l;
import ph.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g extends Drawable implements n {
    private static final String I = "g";
    private static final Paint J;
    private final oh.a A;
    private final l.b B;
    private final l C;
    private PorterDuffColorFilter D;
    private PorterDuffColorFilter E;
    private int F;
    private final RectF G;
    private boolean H;

    /* renamed from: d  reason: collision with root package name */
    private c f45954d;

    /* renamed from: e  reason: collision with root package name */
    private final m.g[] f45955e;

    /* renamed from: i  reason: collision with root package name */
    private final m.g[] f45956i;

    /* renamed from: o  reason: collision with root package name */
    private final BitSet f45957o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f45958p;

    /* renamed from: q  reason: collision with root package name */
    private final Matrix f45959q;

    /* renamed from: r  reason: collision with root package name */
    private final Path f45960r;

    /* renamed from: s  reason: collision with root package name */
    private final Path f45961s;

    /* renamed from: t  reason: collision with root package name */
    private final RectF f45962t;

    /* renamed from: u  reason: collision with root package name */
    private final RectF f45963u;

    /* renamed from: v  reason: collision with root package name */
    private final Region f45964v;

    /* renamed from: w  reason: collision with root package name */
    private final Region f45965w;

    /* renamed from: x  reason: collision with root package name */
    private k f45966x;

    /* renamed from: y  reason: collision with root package name */
    private final Paint f45967y;

    /* renamed from: z  reason: collision with root package name */
    private final Paint f45968z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements l.b {
        a() {
        }

        @Override // ph.l.b
        public void a(m mVar, Matrix matrix, int i10) {
            g.this.f45957o.set(i10, mVar.e());
            g.this.f45955e[i10] = mVar.f(matrix);
        }

        @Override // ph.l.b
        public void b(m mVar, Matrix matrix, int i10) {
            g.this.f45957o.set(i10 + 4, mVar.e());
            g.this.f45956i[i10] = mVar.f(matrix);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements k.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f45970a;

        b(float f10) {
            this.f45970a = f10;
        }

        @Override // ph.k.c
        public ph.c a(ph.c cVar) {
            if (cVar instanceof i) {
                return cVar;
            }
            return new ph.b(this.f45970a, cVar);
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
            return this.f45968z.getStrokeWidth() / 2.0f;
        }
        return 0.0f;
    }

    private boolean K() {
        c cVar = this.f45954d;
        int i10 = cVar.f45988q;
        if (i10 != 1 && cVar.f45989r > 0) {
            if (i10 == 2 || U()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean L() {
        Paint.Style style = this.f45954d.f45993v;
        if (style != Paint.Style.FILL_AND_STROKE && style != Paint.Style.FILL) {
            return false;
        }
        return true;
    }

    private boolean M() {
        Paint.Style style = this.f45954d.f45993v;
        if ((style == Paint.Style.FILL_AND_STROKE || style == Paint.Style.STROKE) && this.f45968z.getStrokeWidth() > 0.0f) {
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
            Bitmap createBitmap = Bitmap.createBitmap(((int) this.G.width()) + (this.f45954d.f45989r * 2) + width, ((int) this.G.height()) + (this.f45954d.f45989r * 2) + height, Bitmap.Config.ARGB_8888);
            Canvas canvas2 = new Canvas(createBitmap);
            float f10 = (getBounds().left - this.f45954d.f45989r) - width;
            float f11 = (getBounds().top - this.f45954d.f45989r) - height;
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
        if (this.f45954d.f45981j != 1.0f) {
            this.f45959q.reset();
            Matrix matrix = this.f45959q;
            float f10 = this.f45954d.f45981j;
            matrix.setScale(f10, f10, rectF.width() / 2.0f, rectF.height() / 2.0f);
            path.transform(this.f45959q);
        }
        path.computeBounds(this.G, true);
    }

    private boolean h0(int[] iArr) {
        boolean z10;
        int color;
        int colorForState;
        int color2;
        int colorForState2;
        if (this.f45954d.f45975d != null && color2 != (colorForState2 = this.f45954d.f45975d.getColorForState(iArr, (color2 = this.f45967y.getColor())))) {
            this.f45967y.setColor(colorForState2);
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f45954d.f45976e != null && color != (colorForState = this.f45954d.f45976e.getColorForState(iArr, (color = this.f45968z.getColor())))) {
            this.f45968z.setColor(colorForState);
            return true;
        }
        return z10;
    }

    private void i() {
        k y10 = D().y(new b(-E()));
        this.f45966x = y10;
        this.C.d(y10, this.f45954d.f45982k, v(), this.f45961s);
    }

    private boolean i0() {
        PorterDuffColorFilter porterDuffColorFilter = this.D;
        PorterDuffColorFilter porterDuffColorFilter2 = this.E;
        c cVar = this.f45954d;
        this.D = k(cVar.f45978g, cVar.f45979h, this.f45967y, true);
        c cVar2 = this.f45954d;
        this.E = k(cVar2.f45977f, cVar2.f45979h, this.f45968z, false);
        c cVar3 = this.f45954d;
        if (cVar3.f45992u) {
            this.A.d(cVar3.f45978g.getColorForState(getState(), 0));
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
        this.f45954d.f45989r = (int) Math.ceil(0.75f * J2);
        this.f45954d.f45990s = (int) Math.ceil(J2 * 0.25f);
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
            colorStateList = ColorStateList.valueOf(fh.a.c(context, zg.b.f55558o, g.class.getSimpleName()));
        }
        g gVar = new g();
        gVar.N(context);
        gVar.X(colorStateList);
        gVar.W(f10);
        return gVar;
    }

    private void n(Canvas canvas) {
        if (this.f45957o.cardinality() > 0) {
            Log.w(I, "Compatibility shadow requested but can't be drawn for all operations in this shape.");
        }
        if (this.f45954d.f45990s != 0) {
            canvas.drawPath(this.f45960r, this.A.c());
        }
        for (int i10 = 0; i10 < 4; i10++) {
            this.f45955e[i10].b(this.A, this.f45954d.f45989r, canvas);
            this.f45956i[i10].b(this.A, this.f45954d.f45989r, canvas);
        }
        if (this.H) {
            int B = B();
            int C = C();
            canvas.translate(-B, -C);
            canvas.drawPath(this.f45960r, J);
            canvas.translate(B, C);
        }
    }

    private void o(Canvas canvas) {
        q(canvas, this.f45967y, this.f45960r, this.f45954d.f45972a, u());
    }

    private void q(Canvas canvas, Paint paint, Path path, k kVar, RectF rectF) {
        if (kVar.u(rectF)) {
            float a10 = kVar.t().a(rectF) * this.f45954d.f45982k;
            canvas.drawRoundRect(rectF, a10, a10, paint);
            return;
        }
        canvas.drawPath(path, paint);
    }

    private RectF v() {
        this.f45963u.set(u());
        float E = E();
        this.f45963u.inset(E, E);
        return this.f45963u;
    }

    public int A() {
        return this.F;
    }

    public int B() {
        c cVar = this.f45954d;
        return (int) (cVar.f45990s * Math.sin(Math.toRadians(cVar.f45991t)));
    }

    public int C() {
        c cVar = this.f45954d;
        return (int) (cVar.f45990s * Math.cos(Math.toRadians(cVar.f45991t)));
    }

    public k D() {
        return this.f45954d.f45972a;
    }

    public ColorStateList F() {
        return this.f45954d.f45978g;
    }

    public float G() {
        return this.f45954d.f45972a.r().a(u());
    }

    public float H() {
        return this.f45954d.f45972a.t().a(u());
    }

    public float I() {
        return this.f45954d.f45987p;
    }

    public float J() {
        return w() + I();
    }

    public void N(Context context) {
        this.f45954d.f45973b = new hh.a(context);
        j0();
    }

    public boolean P() {
        hh.a aVar = this.f45954d.f45973b;
        if (aVar != null && aVar.d()) {
            return true;
        }
        return false;
    }

    public boolean Q() {
        return this.f45954d.f45972a.u(u());
    }

    public boolean U() {
        int i10 = Build.VERSION.SDK_INT;
        if (!Q() && !this.f45960r.isConvex() && i10 < 29) {
            return true;
        }
        return false;
    }

    public void V(ph.c cVar) {
        setShapeAppearanceModel(this.f45954d.f45972a.x(cVar));
    }

    public void W(float f10) {
        c cVar = this.f45954d;
        if (cVar.f45986o != f10) {
            cVar.f45986o = f10;
            j0();
        }
    }

    public void X(ColorStateList colorStateList) {
        c cVar = this.f45954d;
        if (cVar.f45975d != colorStateList) {
            cVar.f45975d = colorStateList;
            onStateChange(getState());
        }
    }

    public void Y(float f10) {
        c cVar = this.f45954d;
        if (cVar.f45982k != f10) {
            cVar.f45982k = f10;
            this.f45958p = true;
            invalidateSelf();
        }
    }

    public void Z(int i10, int i11, int i12, int i13) {
        c cVar = this.f45954d;
        if (cVar.f45980i == null) {
            cVar.f45980i = new Rect();
        }
        this.f45954d.f45980i.set(i10, i11, i12, i13);
        invalidateSelf();
    }

    public void a0(float f10) {
        c cVar = this.f45954d;
        if (cVar.f45985n != f10) {
            cVar.f45985n = f10;
            j0();
        }
    }

    public void b0(boolean z10) {
        this.H = z10;
    }

    public void c0(int i10) {
        this.A.d(i10);
        this.f45954d.f45992u = false;
        O();
    }

    public void d0(float f10, int i10) {
        g0(f10);
        f0(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f45967y.setColorFilter(this.D);
        int alpha = this.f45967y.getAlpha();
        this.f45967y.setAlpha(S(alpha, this.f45954d.f45984m));
        this.f45968z.setColorFilter(this.E);
        this.f45968z.setStrokeWidth(this.f45954d.f45983l);
        int alpha2 = this.f45968z.getAlpha();
        this.f45968z.setAlpha(S(alpha2, this.f45954d.f45984m));
        if (this.f45958p) {
            i();
            g(u(), this.f45960r);
            this.f45958p = false;
        }
        R(canvas);
        if (L()) {
            o(canvas);
        }
        if (M()) {
            r(canvas);
        }
        this.f45967y.setAlpha(alpha);
        this.f45968z.setAlpha(alpha2);
    }

    public void e0(float f10, ColorStateList colorStateList) {
        g0(f10);
        f0(colorStateList);
    }

    public void f0(ColorStateList colorStateList) {
        c cVar = this.f45954d;
        if (cVar.f45976e != colorStateList) {
            cVar.f45976e = colorStateList;
            onStateChange(getState());
        }
    }

    public void g0(float f10) {
        this.f45954d.f45983l = f10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f45954d.f45984m;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f45954d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f45954d.f45988q == 2) {
            return;
        }
        if (Q()) {
            outline.setRoundRect(getBounds(), G() * this.f45954d.f45982k);
            return;
        }
        g(u(), this.f45960r);
        com.google.android.material.drawable.c.k(outline, this.f45960r);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        Rect rect2 = this.f45954d.f45980i;
        if (rect2 != null) {
            rect.set(rect2);
            return true;
        }
        return super.getPadding(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public Region getTransparentRegion() {
        this.f45964v.set(getBounds());
        g(u(), this.f45960r);
        this.f45965w.setPath(this.f45960r, this.f45964v);
        this.f45964v.op(this.f45965w, Region.Op.DIFFERENCE);
        return this.f45964v;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h(RectF rectF, Path path) {
        l lVar = this.C;
        c cVar = this.f45954d;
        lVar.e(cVar.f45972a, cVar.f45982k, rectF, this.B, path);
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        this.f45958p = true;
        super.invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!super.isStateful()) {
            ColorStateList colorStateList = this.f45954d.f45978g;
            if (colorStateList == null || !colorStateList.isStateful()) {
                ColorStateList colorStateList2 = this.f45954d.f45977f;
                if (colorStateList2 == null || !colorStateList2.isStateful()) {
                    ColorStateList colorStateList3 = this.f45954d.f45976e;
                    if (colorStateList3 == null || !colorStateList3.isStateful()) {
                        ColorStateList colorStateList4 = this.f45954d.f45975d;
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
        hh.a aVar = this.f45954d.f45973b;
        if (aVar != null) {
            return aVar.c(i10, J2);
        }
        return i10;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.f45954d = new c(this.f45954d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f45958p = true;
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
        q(canvas, paint, path, this.f45954d.f45972a, rectF);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(Canvas canvas) {
        q(canvas, this.f45968z, this.f45961s, this.f45966x, v());
    }

    public float s() {
        return this.f45954d.f45972a.j().a(u());
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        c cVar = this.f45954d;
        if (cVar.f45984m != i10) {
            cVar.f45984m = i10;
            O();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f45954d.f45974c = colorFilter;
        O();
    }

    @Override // ph.n
    public void setShapeAppearanceModel(k kVar) {
        this.f45954d.f45972a = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        setTintList(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f45954d.f45978g = colorStateList;
        i0();
        O();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        c cVar = this.f45954d;
        if (cVar.f45979h != mode) {
            cVar.f45979h = mode;
            i0();
            O();
        }
    }

    public float t() {
        return this.f45954d.f45972a.l().a(u());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public RectF u() {
        this.f45962t.set(getBounds());
        return this.f45962t;
    }

    public float w() {
        return this.f45954d.f45986o;
    }

    public ColorStateList x() {
        return this.f45954d.f45975d;
    }

    public float y() {
        return this.f45954d.f45982k;
    }

    public float z() {
        return this.f45954d.f45985n;
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
        this.f45955e = new m.g[4];
        this.f45956i = new m.g[4];
        this.f45957o = new BitSet(8);
        this.f45959q = new Matrix();
        this.f45960r = new Path();
        this.f45961s = new Path();
        this.f45962t = new RectF();
        this.f45963u = new RectF();
        this.f45964v = new Region();
        this.f45965w = new Region();
        Paint paint = new Paint(1);
        this.f45967y = paint;
        Paint paint2 = new Paint(1);
        this.f45968z = paint2;
        this.A = new oh.a();
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            lVar = l.k();
        } else {
            lVar = new l();
        }
        this.C = lVar;
        this.G = new RectF();
        this.H = true;
        this.f45954d = cVar;
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
        k f45972a;

        /* renamed from: b  reason: collision with root package name */
        hh.a f45973b;

        /* renamed from: c  reason: collision with root package name */
        ColorFilter f45974c;

        /* renamed from: d  reason: collision with root package name */
        ColorStateList f45975d;

        /* renamed from: e  reason: collision with root package name */
        ColorStateList f45976e;

        /* renamed from: f  reason: collision with root package name */
        ColorStateList f45977f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f45978g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f45979h;

        /* renamed from: i  reason: collision with root package name */
        Rect f45980i;

        /* renamed from: j  reason: collision with root package name */
        float f45981j;

        /* renamed from: k  reason: collision with root package name */
        float f45982k;

        /* renamed from: l  reason: collision with root package name */
        float f45983l;

        /* renamed from: m  reason: collision with root package name */
        int f45984m;

        /* renamed from: n  reason: collision with root package name */
        float f45985n;

        /* renamed from: o  reason: collision with root package name */
        float f45986o;

        /* renamed from: p  reason: collision with root package name */
        float f45987p;

        /* renamed from: q  reason: collision with root package name */
        int f45988q;

        /* renamed from: r  reason: collision with root package name */
        int f45989r;

        /* renamed from: s  reason: collision with root package name */
        int f45990s;

        /* renamed from: t  reason: collision with root package name */
        int f45991t;

        /* renamed from: u  reason: collision with root package name */
        boolean f45992u;

        /* renamed from: v  reason: collision with root package name */
        Paint.Style f45993v;

        public c(k kVar, hh.a aVar) {
            this.f45975d = null;
            this.f45976e = null;
            this.f45977f = null;
            this.f45978g = null;
            this.f45979h = PorterDuff.Mode.SRC_IN;
            this.f45980i = null;
            this.f45981j = 1.0f;
            this.f45982k = 1.0f;
            this.f45984m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f45985n = 0.0f;
            this.f45986o = 0.0f;
            this.f45987p = 0.0f;
            this.f45988q = 0;
            this.f45989r = 0;
            this.f45990s = 0;
            this.f45991t = 0;
            this.f45992u = false;
            this.f45993v = Paint.Style.FILL_AND_STROKE;
            this.f45972a = kVar;
            this.f45973b = aVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            g gVar = new g(this);
            gVar.f45958p = true;
            return gVar;
        }

        public c(c cVar) {
            this.f45975d = null;
            this.f45976e = null;
            this.f45977f = null;
            this.f45978g = null;
            this.f45979h = PorterDuff.Mode.SRC_IN;
            this.f45980i = null;
            this.f45981j = 1.0f;
            this.f45982k = 1.0f;
            this.f45984m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f45985n = 0.0f;
            this.f45986o = 0.0f;
            this.f45987p = 0.0f;
            this.f45988q = 0;
            this.f45989r = 0;
            this.f45990s = 0;
            this.f45991t = 0;
            this.f45992u = false;
            this.f45993v = Paint.Style.FILL_AND_STROKE;
            this.f45972a = cVar.f45972a;
            this.f45973b = cVar.f45973b;
            this.f45983l = cVar.f45983l;
            this.f45974c = cVar.f45974c;
            this.f45975d = cVar.f45975d;
            this.f45976e = cVar.f45976e;
            this.f45979h = cVar.f45979h;
            this.f45978g = cVar.f45978g;
            this.f45984m = cVar.f45984m;
            this.f45981j = cVar.f45981j;
            this.f45990s = cVar.f45990s;
            this.f45988q = cVar.f45988q;
            this.f45992u = cVar.f45992u;
            this.f45982k = cVar.f45982k;
            this.f45985n = cVar.f45985n;
            this.f45986o = cVar.f45986o;
            this.f45987p = cVar.f45987p;
            this.f45989r = cVar.f45989r;
            this.f45991t = cVar.f45991t;
            this.f45977f = cVar.f45977f;
            this.f45993v = cVar.f45993v;
            if (cVar.f45980i != null) {
                this.f45980i = new Rect(cVar.f45980i);
            }
        }
    }
}
