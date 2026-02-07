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
    private c f47832d;

    /* renamed from: e  reason: collision with root package name */
    private final m.g[] f47833e;

    /* renamed from: i  reason: collision with root package name */
    private final m.g[] f47834i;

    /* renamed from: o  reason: collision with root package name */
    private final BitSet f47835o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f47836p;

    /* renamed from: q  reason: collision with root package name */
    private final Matrix f47837q;

    /* renamed from: r  reason: collision with root package name */
    private final Path f47838r;

    /* renamed from: s  reason: collision with root package name */
    private final Path f47839s;

    /* renamed from: t  reason: collision with root package name */
    private final RectF f47840t;

    /* renamed from: u  reason: collision with root package name */
    private final RectF f47841u;

    /* renamed from: v  reason: collision with root package name */
    private final Region f47842v;

    /* renamed from: w  reason: collision with root package name */
    private final Region f47843w;

    /* renamed from: x  reason: collision with root package name */
    private k f47844x;

    /* renamed from: y  reason: collision with root package name */
    private final Paint f47845y;

    /* renamed from: z  reason: collision with root package name */
    private final Paint f47846z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements l.b {
        a() {
        }

        @Override // qh.l.b
        public void a(m mVar, Matrix matrix, int i10) {
            g.this.f47835o.set(i10, mVar.e());
            g.this.f47833e[i10] = mVar.f(matrix);
        }

        @Override // qh.l.b
        public void b(m mVar, Matrix matrix, int i10) {
            g.this.f47835o.set(i10 + 4, mVar.e());
            g.this.f47834i[i10] = mVar.f(matrix);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements k.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f47848a;

        b(float f10) {
            this.f47848a = f10;
        }

        @Override // qh.k.c
        public qh.c a(qh.c cVar) {
            if (cVar instanceof i) {
                return cVar;
            }
            return new qh.b(this.f47848a, cVar);
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
            return this.f47846z.getStrokeWidth() / 2.0f;
        }
        return 0.0f;
    }

    private boolean K() {
        c cVar = this.f47832d;
        int i10 = cVar.f47866q;
        if (i10 != 1 && cVar.f47867r > 0) {
            if (i10 == 2 || U()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean L() {
        Paint.Style style = this.f47832d.f47871v;
        if (style != Paint.Style.FILL_AND_STROKE && style != Paint.Style.FILL) {
            return false;
        }
        return true;
    }

    private boolean M() {
        Paint.Style style = this.f47832d.f47871v;
        if ((style == Paint.Style.FILL_AND_STROKE || style == Paint.Style.STROKE) && this.f47846z.getStrokeWidth() > 0.0f) {
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
            Bitmap createBitmap = Bitmap.createBitmap(((int) this.G.width()) + (this.f47832d.f47867r * 2) + width, ((int) this.G.height()) + (this.f47832d.f47867r * 2) + height, Bitmap.Config.ARGB_8888);
            Canvas canvas2 = new Canvas(createBitmap);
            float f10 = (getBounds().left - this.f47832d.f47867r) - width;
            float f11 = (getBounds().top - this.f47832d.f47867r) - height;
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
        if (this.f47832d.f47859j != 1.0f) {
            this.f47837q.reset();
            Matrix matrix = this.f47837q;
            float f10 = this.f47832d.f47859j;
            matrix.setScale(f10, f10, rectF.width() / 2.0f, rectF.height() / 2.0f);
            path.transform(this.f47837q);
        }
        path.computeBounds(this.G, true);
    }

    private boolean h0(int[] iArr) {
        boolean z10;
        int color;
        int colorForState;
        int color2;
        int colorForState2;
        if (this.f47832d.f47853d != null && color2 != (colorForState2 = this.f47832d.f47853d.getColorForState(iArr, (color2 = this.f47845y.getColor())))) {
            this.f47845y.setColor(colorForState2);
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f47832d.f47854e != null && color != (colorForState = this.f47832d.f47854e.getColorForState(iArr, (color = this.f47846z.getColor())))) {
            this.f47846z.setColor(colorForState);
            return true;
        }
        return z10;
    }

    private void i() {
        k y10 = D().y(new b(-E()));
        this.f47844x = y10;
        this.C.d(y10, this.f47832d.f47860k, v(), this.f47839s);
    }

    private boolean i0() {
        PorterDuffColorFilter porterDuffColorFilter = this.D;
        PorterDuffColorFilter porterDuffColorFilter2 = this.E;
        c cVar = this.f47832d;
        this.D = k(cVar.f47856g, cVar.f47857h, this.f47845y, true);
        c cVar2 = this.f47832d;
        this.E = k(cVar2.f47855f, cVar2.f47857h, this.f47846z, false);
        c cVar3 = this.f47832d;
        if (cVar3.f47870u) {
            this.A.d(cVar3.f47856g.getColorForState(getState(), 0));
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
        this.f47832d.f47867r = (int) Math.ceil(0.75f * J2);
        this.f47832d.f47868s = (int) Math.ceil(J2 * 0.25f);
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
        if (this.f47835o.cardinality() > 0) {
            Log.w(I, "Compatibility shadow requested but can't be drawn for all operations in this shape.");
        }
        if (this.f47832d.f47868s != 0) {
            canvas.drawPath(this.f47838r, this.A.c());
        }
        for (int i10 = 0; i10 < 4; i10++) {
            this.f47833e[i10].b(this.A, this.f47832d.f47867r, canvas);
            this.f47834i[i10].b(this.A, this.f47832d.f47867r, canvas);
        }
        if (this.H) {
            int B = B();
            int C = C();
            canvas.translate(-B, -C);
            canvas.drawPath(this.f47838r, J);
            canvas.translate(B, C);
        }
    }

    private void o(Canvas canvas) {
        q(canvas, this.f47845y, this.f47838r, this.f47832d.f47850a, u());
    }

    private void q(Canvas canvas, Paint paint, Path path, k kVar, RectF rectF) {
        if (kVar.u(rectF)) {
            float a10 = kVar.t().a(rectF) * this.f47832d.f47860k;
            canvas.drawRoundRect(rectF, a10, a10, paint);
            return;
        }
        canvas.drawPath(path, paint);
    }

    private RectF v() {
        this.f47841u.set(u());
        float E = E();
        this.f47841u.inset(E, E);
        return this.f47841u;
    }

    public int A() {
        return this.F;
    }

    public int B() {
        c cVar = this.f47832d;
        return (int) (cVar.f47868s * Math.sin(Math.toRadians(cVar.f47869t)));
    }

    public int C() {
        c cVar = this.f47832d;
        return (int) (cVar.f47868s * Math.cos(Math.toRadians(cVar.f47869t)));
    }

    public k D() {
        return this.f47832d.f47850a;
    }

    public ColorStateList F() {
        return this.f47832d.f47856g;
    }

    public float G() {
        return this.f47832d.f47850a.r().a(u());
    }

    public float H() {
        return this.f47832d.f47850a.t().a(u());
    }

    public float I() {
        return this.f47832d.f47865p;
    }

    public float J() {
        return w() + I();
    }

    public void N(Context context) {
        this.f47832d.f47851b = new ih.a(context);
        j0();
    }

    public boolean P() {
        ih.a aVar = this.f47832d.f47851b;
        if (aVar != null && aVar.d()) {
            return true;
        }
        return false;
    }

    public boolean Q() {
        return this.f47832d.f47850a.u(u());
    }

    public boolean U() {
        int i10 = Build.VERSION.SDK_INT;
        if (!Q() && !this.f47838r.isConvex() && i10 < 29) {
            return true;
        }
        return false;
    }

    public void V(qh.c cVar) {
        setShapeAppearanceModel(this.f47832d.f47850a.x(cVar));
    }

    public void W(float f10) {
        c cVar = this.f47832d;
        if (cVar.f47864o != f10) {
            cVar.f47864o = f10;
            j0();
        }
    }

    public void X(ColorStateList colorStateList) {
        c cVar = this.f47832d;
        if (cVar.f47853d != colorStateList) {
            cVar.f47853d = colorStateList;
            onStateChange(getState());
        }
    }

    public void Y(float f10) {
        c cVar = this.f47832d;
        if (cVar.f47860k != f10) {
            cVar.f47860k = f10;
            this.f47836p = true;
            invalidateSelf();
        }
    }

    public void Z(int i10, int i11, int i12, int i13) {
        c cVar = this.f47832d;
        if (cVar.f47858i == null) {
            cVar.f47858i = new Rect();
        }
        this.f47832d.f47858i.set(i10, i11, i12, i13);
        invalidateSelf();
    }

    public void a0(float f10) {
        c cVar = this.f47832d;
        if (cVar.f47863n != f10) {
            cVar.f47863n = f10;
            j0();
        }
    }

    public void b0(boolean z10) {
        this.H = z10;
    }

    public void c0(int i10) {
        this.A.d(i10);
        this.f47832d.f47870u = false;
        O();
    }

    public void d0(float f10, int i10) {
        g0(f10);
        f0(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f47845y.setColorFilter(this.D);
        int alpha = this.f47845y.getAlpha();
        this.f47845y.setAlpha(S(alpha, this.f47832d.f47862m));
        this.f47846z.setColorFilter(this.E);
        this.f47846z.setStrokeWidth(this.f47832d.f47861l);
        int alpha2 = this.f47846z.getAlpha();
        this.f47846z.setAlpha(S(alpha2, this.f47832d.f47862m));
        if (this.f47836p) {
            i();
            g(u(), this.f47838r);
            this.f47836p = false;
        }
        R(canvas);
        if (L()) {
            o(canvas);
        }
        if (M()) {
            r(canvas);
        }
        this.f47845y.setAlpha(alpha);
        this.f47846z.setAlpha(alpha2);
    }

    public void e0(float f10, ColorStateList colorStateList) {
        g0(f10);
        f0(colorStateList);
    }

    public void f0(ColorStateList colorStateList) {
        c cVar = this.f47832d;
        if (cVar.f47854e != colorStateList) {
            cVar.f47854e = colorStateList;
            onStateChange(getState());
        }
    }

    public void g0(float f10) {
        this.f47832d.f47861l = f10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f47832d.f47862m;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f47832d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f47832d.f47866q == 2) {
            return;
        }
        if (Q()) {
            outline.setRoundRect(getBounds(), G() * this.f47832d.f47860k);
            return;
        }
        g(u(), this.f47838r);
        com.google.android.material.drawable.c.k(outline, this.f47838r);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        Rect rect2 = this.f47832d.f47858i;
        if (rect2 != null) {
            rect.set(rect2);
            return true;
        }
        return super.getPadding(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public Region getTransparentRegion() {
        this.f47842v.set(getBounds());
        g(u(), this.f47838r);
        this.f47843w.setPath(this.f47838r, this.f47842v);
        this.f47842v.op(this.f47843w, Region.Op.DIFFERENCE);
        return this.f47842v;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h(RectF rectF, Path path) {
        l lVar = this.C;
        c cVar = this.f47832d;
        lVar.e(cVar.f47850a, cVar.f47860k, rectF, this.B, path);
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        this.f47836p = true;
        super.invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!super.isStateful()) {
            ColorStateList colorStateList = this.f47832d.f47856g;
            if (colorStateList == null || !colorStateList.isStateful()) {
                ColorStateList colorStateList2 = this.f47832d.f47855f;
                if (colorStateList2 == null || !colorStateList2.isStateful()) {
                    ColorStateList colorStateList3 = this.f47832d.f47854e;
                    if (colorStateList3 == null || !colorStateList3.isStateful()) {
                        ColorStateList colorStateList4 = this.f47832d.f47853d;
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
        ih.a aVar = this.f47832d.f47851b;
        if (aVar != null) {
            return aVar.c(i10, J2);
        }
        return i10;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.f47832d = new c(this.f47832d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f47836p = true;
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
        q(canvas, paint, path, this.f47832d.f47850a, rectF);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(Canvas canvas) {
        q(canvas, this.f47846z, this.f47839s, this.f47844x, v());
    }

    public float s() {
        return this.f47832d.f47850a.j().a(u());
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        c cVar = this.f47832d;
        if (cVar.f47862m != i10) {
            cVar.f47862m = i10;
            O();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f47832d.f47852c = colorFilter;
        O();
    }

    @Override // qh.n
    public void setShapeAppearanceModel(k kVar) {
        this.f47832d.f47850a = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        setTintList(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f47832d.f47856g = colorStateList;
        i0();
        O();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        c cVar = this.f47832d;
        if (cVar.f47857h != mode) {
            cVar.f47857h = mode;
            i0();
            O();
        }
    }

    public float t() {
        return this.f47832d.f47850a.l().a(u());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public RectF u() {
        this.f47840t.set(getBounds());
        return this.f47840t;
    }

    public float w() {
        return this.f47832d.f47864o;
    }

    public ColorStateList x() {
        return this.f47832d.f47853d;
    }

    public float y() {
        return this.f47832d.f47860k;
    }

    public float z() {
        return this.f47832d.f47863n;
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
        this.f47833e = new m.g[4];
        this.f47834i = new m.g[4];
        this.f47835o = new BitSet(8);
        this.f47837q = new Matrix();
        this.f47838r = new Path();
        this.f47839s = new Path();
        this.f47840t = new RectF();
        this.f47841u = new RectF();
        this.f47842v = new Region();
        this.f47843w = new Region();
        Paint paint = new Paint(1);
        this.f47845y = paint;
        Paint paint2 = new Paint(1);
        this.f47846z = paint2;
        this.A = new ph.a();
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            lVar = l.k();
        } else {
            lVar = new l();
        }
        this.C = lVar;
        this.G = new RectF();
        this.H = true;
        this.f47832d = cVar;
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
        k f47850a;

        /* renamed from: b  reason: collision with root package name */
        ih.a f47851b;

        /* renamed from: c  reason: collision with root package name */
        ColorFilter f47852c;

        /* renamed from: d  reason: collision with root package name */
        ColorStateList f47853d;

        /* renamed from: e  reason: collision with root package name */
        ColorStateList f47854e;

        /* renamed from: f  reason: collision with root package name */
        ColorStateList f47855f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f47856g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f47857h;

        /* renamed from: i  reason: collision with root package name */
        Rect f47858i;

        /* renamed from: j  reason: collision with root package name */
        float f47859j;

        /* renamed from: k  reason: collision with root package name */
        float f47860k;

        /* renamed from: l  reason: collision with root package name */
        float f47861l;

        /* renamed from: m  reason: collision with root package name */
        int f47862m;

        /* renamed from: n  reason: collision with root package name */
        float f47863n;

        /* renamed from: o  reason: collision with root package name */
        float f47864o;

        /* renamed from: p  reason: collision with root package name */
        float f47865p;

        /* renamed from: q  reason: collision with root package name */
        int f47866q;

        /* renamed from: r  reason: collision with root package name */
        int f47867r;

        /* renamed from: s  reason: collision with root package name */
        int f47868s;

        /* renamed from: t  reason: collision with root package name */
        int f47869t;

        /* renamed from: u  reason: collision with root package name */
        boolean f47870u;

        /* renamed from: v  reason: collision with root package name */
        Paint.Style f47871v;

        public c(k kVar, ih.a aVar) {
            this.f47853d = null;
            this.f47854e = null;
            this.f47855f = null;
            this.f47856g = null;
            this.f47857h = PorterDuff.Mode.SRC_IN;
            this.f47858i = null;
            this.f47859j = 1.0f;
            this.f47860k = 1.0f;
            this.f47862m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f47863n = 0.0f;
            this.f47864o = 0.0f;
            this.f47865p = 0.0f;
            this.f47866q = 0;
            this.f47867r = 0;
            this.f47868s = 0;
            this.f47869t = 0;
            this.f47870u = false;
            this.f47871v = Paint.Style.FILL_AND_STROKE;
            this.f47850a = kVar;
            this.f47851b = aVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            g gVar = new g(this);
            gVar.f47836p = true;
            return gVar;
        }

        public c(c cVar) {
            this.f47853d = null;
            this.f47854e = null;
            this.f47855f = null;
            this.f47856g = null;
            this.f47857h = PorterDuff.Mode.SRC_IN;
            this.f47858i = null;
            this.f47859j = 1.0f;
            this.f47860k = 1.0f;
            this.f47862m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f47863n = 0.0f;
            this.f47864o = 0.0f;
            this.f47865p = 0.0f;
            this.f47866q = 0;
            this.f47867r = 0;
            this.f47868s = 0;
            this.f47869t = 0;
            this.f47870u = false;
            this.f47871v = Paint.Style.FILL_AND_STROKE;
            this.f47850a = cVar.f47850a;
            this.f47851b = cVar.f47851b;
            this.f47861l = cVar.f47861l;
            this.f47852c = cVar.f47852c;
            this.f47853d = cVar.f47853d;
            this.f47854e = cVar.f47854e;
            this.f47857h = cVar.f47857h;
            this.f47856g = cVar.f47856g;
            this.f47862m = cVar.f47862m;
            this.f47859j = cVar.f47859j;
            this.f47868s = cVar.f47868s;
            this.f47866q = cVar.f47866q;
            this.f47870u = cVar.f47870u;
            this.f47860k = cVar.f47860k;
            this.f47863n = cVar.f47863n;
            this.f47864o = cVar.f47864o;
            this.f47865p = cVar.f47865p;
            this.f47867r = cVar.f47867r;
            this.f47869t = cVar.f47869t;
            this.f47855f = cVar.f47855f;
            this.f47871v = cVar.f47871v;
            if (cVar.f47858i != null) {
                this.f47858i = new Rect(cVar.f47858i);
            }
        }
    }
}
