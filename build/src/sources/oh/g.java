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
    private c f43821d;

    /* renamed from: e  reason: collision with root package name */
    private final m.g[] f43822e;

    /* renamed from: i  reason: collision with root package name */
    private final m.g[] f43823i;

    /* renamed from: o  reason: collision with root package name */
    private final BitSet f43824o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f43825p;

    /* renamed from: q  reason: collision with root package name */
    private final Matrix f43826q;

    /* renamed from: r  reason: collision with root package name */
    private final Path f43827r;

    /* renamed from: s  reason: collision with root package name */
    private final Path f43828s;

    /* renamed from: t  reason: collision with root package name */
    private final RectF f43829t;

    /* renamed from: u  reason: collision with root package name */
    private final RectF f43830u;

    /* renamed from: v  reason: collision with root package name */
    private final Region f43831v;

    /* renamed from: w  reason: collision with root package name */
    private final Region f43832w;

    /* renamed from: x  reason: collision with root package name */
    private k f43833x;

    /* renamed from: y  reason: collision with root package name */
    private final Paint f43834y;

    /* renamed from: z  reason: collision with root package name */
    private final Paint f43835z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements l.b {
        a() {
        }

        @Override // oh.l.b
        public void a(m mVar, Matrix matrix, int i10) {
            g.this.f43824o.set(i10, mVar.e());
            g.this.f43822e[i10] = mVar.f(matrix);
        }

        @Override // oh.l.b
        public void b(m mVar, Matrix matrix, int i10) {
            g.this.f43824o.set(i10 + 4, mVar.e());
            g.this.f43823i[i10] = mVar.f(matrix);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements k.c {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ float f43837a;

        b(float f10) {
            this.f43837a = f10;
        }

        @Override // oh.k.c
        public oh.c a(oh.c cVar) {
            if (cVar instanceof i) {
                return cVar;
            }
            return new oh.b(this.f43837a, cVar);
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
            return this.f43835z.getStrokeWidth() / 2.0f;
        }
        return 0.0f;
    }

    private boolean K() {
        c cVar = this.f43821d;
        int i10 = cVar.f43855q;
        if (i10 != 1 && cVar.f43856r > 0) {
            if (i10 == 2 || U()) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean L() {
        Paint.Style style = this.f43821d.f43860v;
        if (style != Paint.Style.FILL_AND_STROKE && style != Paint.Style.FILL) {
            return false;
        }
        return true;
    }

    private boolean M() {
        Paint.Style style = this.f43821d.f43860v;
        if ((style == Paint.Style.FILL_AND_STROKE || style == Paint.Style.STROKE) && this.f43835z.getStrokeWidth() > 0.0f) {
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
            Bitmap createBitmap = Bitmap.createBitmap(((int) this.G.width()) + (this.f43821d.f43856r * 2) + width, ((int) this.G.height()) + (this.f43821d.f43856r * 2) + height, Bitmap.Config.ARGB_8888);
            Canvas canvas2 = new Canvas(createBitmap);
            float f10 = (getBounds().left - this.f43821d.f43856r) - width;
            float f11 = (getBounds().top - this.f43821d.f43856r) - height;
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
        if (this.f43821d.f43848j != 1.0f) {
            this.f43826q.reset();
            Matrix matrix = this.f43826q;
            float f10 = this.f43821d.f43848j;
            matrix.setScale(f10, f10, rectF.width() / 2.0f, rectF.height() / 2.0f);
            path.transform(this.f43826q);
        }
        path.computeBounds(this.G, true);
    }

    private boolean h0(int[] iArr) {
        boolean z10;
        int color;
        int colorForState;
        int color2;
        int colorForState2;
        if (this.f43821d.f43842d != null && color2 != (colorForState2 = this.f43821d.f43842d.getColorForState(iArr, (color2 = this.f43834y.getColor())))) {
            this.f43834y.setColor(colorForState2);
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f43821d.f43843e != null && color != (colorForState = this.f43821d.f43843e.getColorForState(iArr, (color = this.f43835z.getColor())))) {
            this.f43835z.setColor(colorForState);
            return true;
        }
        return z10;
    }

    private void i() {
        k y10 = D().y(new b(-E()));
        this.f43833x = y10;
        this.C.d(y10, this.f43821d.f43849k, v(), this.f43828s);
    }

    private boolean i0() {
        PorterDuffColorFilter porterDuffColorFilter = this.D;
        PorterDuffColorFilter porterDuffColorFilter2 = this.E;
        c cVar = this.f43821d;
        this.D = k(cVar.f43845g, cVar.f43846h, this.f43834y, true);
        c cVar2 = this.f43821d;
        this.E = k(cVar2.f43844f, cVar2.f43846h, this.f43835z, false);
        c cVar3 = this.f43821d;
        if (cVar3.f43859u) {
            this.A.d(cVar3.f43845g.getColorForState(getState(), 0));
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
        this.f43821d.f43856r = (int) Math.ceil(0.75f * J2);
        this.f43821d.f43857s = (int) Math.ceil(J2 * 0.25f);
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
            colorStateList = ColorStateList.valueOf(eh.a.c(context, yg.b.f54354o, g.class.getSimpleName()));
        }
        g gVar = new g();
        gVar.N(context);
        gVar.X(colorStateList);
        gVar.W(f10);
        return gVar;
    }

    private void n(Canvas canvas) {
        if (this.f43824o.cardinality() > 0) {
            Log.w(I, "Compatibility shadow requested but can't be drawn for all operations in this shape.");
        }
        if (this.f43821d.f43857s != 0) {
            canvas.drawPath(this.f43827r, this.A.c());
        }
        for (int i10 = 0; i10 < 4; i10++) {
            this.f43822e[i10].b(this.A, this.f43821d.f43856r, canvas);
            this.f43823i[i10].b(this.A, this.f43821d.f43856r, canvas);
        }
        if (this.H) {
            int B = B();
            int C = C();
            canvas.translate(-B, -C);
            canvas.drawPath(this.f43827r, J);
            canvas.translate(B, C);
        }
    }

    private void o(Canvas canvas) {
        q(canvas, this.f43834y, this.f43827r, this.f43821d.f43839a, u());
    }

    private void q(Canvas canvas, Paint paint, Path path, k kVar, RectF rectF) {
        if (kVar.u(rectF)) {
            float a10 = kVar.t().a(rectF) * this.f43821d.f43849k;
            canvas.drawRoundRect(rectF, a10, a10, paint);
            return;
        }
        canvas.drawPath(path, paint);
    }

    private RectF v() {
        this.f43830u.set(u());
        float E = E();
        this.f43830u.inset(E, E);
        return this.f43830u;
    }

    public int A() {
        return this.F;
    }

    public int B() {
        c cVar = this.f43821d;
        return (int) (cVar.f43857s * Math.sin(Math.toRadians(cVar.f43858t)));
    }

    public int C() {
        c cVar = this.f43821d;
        return (int) (cVar.f43857s * Math.cos(Math.toRadians(cVar.f43858t)));
    }

    public k D() {
        return this.f43821d.f43839a;
    }

    public ColorStateList F() {
        return this.f43821d.f43845g;
    }

    public float G() {
        return this.f43821d.f43839a.r().a(u());
    }

    public float H() {
        return this.f43821d.f43839a.t().a(u());
    }

    public float I() {
        return this.f43821d.f43854p;
    }

    public float J() {
        return w() + I();
    }

    public void N(Context context) {
        this.f43821d.f43840b = new gh.a(context);
        j0();
    }

    public boolean P() {
        gh.a aVar = this.f43821d.f43840b;
        if (aVar != null && aVar.d()) {
            return true;
        }
        return false;
    }

    public boolean Q() {
        return this.f43821d.f43839a.u(u());
    }

    public boolean U() {
        int i10 = Build.VERSION.SDK_INT;
        if (!Q() && !this.f43827r.isConvex() && i10 < 29) {
            return true;
        }
        return false;
    }

    public void V(oh.c cVar) {
        setShapeAppearanceModel(this.f43821d.f43839a.x(cVar));
    }

    public void W(float f10) {
        c cVar = this.f43821d;
        if (cVar.f43853o != f10) {
            cVar.f43853o = f10;
            j0();
        }
    }

    public void X(ColorStateList colorStateList) {
        c cVar = this.f43821d;
        if (cVar.f43842d != colorStateList) {
            cVar.f43842d = colorStateList;
            onStateChange(getState());
        }
    }

    public void Y(float f10) {
        c cVar = this.f43821d;
        if (cVar.f43849k != f10) {
            cVar.f43849k = f10;
            this.f43825p = true;
            invalidateSelf();
        }
    }

    public void Z(int i10, int i11, int i12, int i13) {
        c cVar = this.f43821d;
        if (cVar.f43847i == null) {
            cVar.f43847i = new Rect();
        }
        this.f43821d.f43847i.set(i10, i11, i12, i13);
        invalidateSelf();
    }

    public void a0(float f10) {
        c cVar = this.f43821d;
        if (cVar.f43852n != f10) {
            cVar.f43852n = f10;
            j0();
        }
    }

    public void b0(boolean z10) {
        this.H = z10;
    }

    public void c0(int i10) {
        this.A.d(i10);
        this.f43821d.f43859u = false;
        O();
    }

    public void d0(float f10, int i10) {
        g0(f10);
        f0(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        this.f43834y.setColorFilter(this.D);
        int alpha = this.f43834y.getAlpha();
        this.f43834y.setAlpha(S(alpha, this.f43821d.f43851m));
        this.f43835z.setColorFilter(this.E);
        this.f43835z.setStrokeWidth(this.f43821d.f43850l);
        int alpha2 = this.f43835z.getAlpha();
        this.f43835z.setAlpha(S(alpha2, this.f43821d.f43851m));
        if (this.f43825p) {
            i();
            g(u(), this.f43827r);
            this.f43825p = false;
        }
        R(canvas);
        if (L()) {
            o(canvas);
        }
        if (M()) {
            r(canvas);
        }
        this.f43834y.setAlpha(alpha);
        this.f43835z.setAlpha(alpha2);
    }

    public void e0(float f10, ColorStateList colorStateList) {
        g0(f10);
        f0(colorStateList);
    }

    public void f0(ColorStateList colorStateList) {
        c cVar = this.f43821d;
        if (cVar.f43843e != colorStateList) {
            cVar.f43843e = colorStateList;
            onStateChange(getState());
        }
    }

    public void g0(float f10) {
        this.f43821d.f43850l = f10;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f43821d.f43851m;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f43821d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        if (this.f43821d.f43855q == 2) {
            return;
        }
        if (Q()) {
            outline.setRoundRect(getBounds(), G() * this.f43821d.f43849k);
            return;
        }
        g(u(), this.f43827r);
        com.google.android.material.drawable.c.k(outline, this.f43827r);
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        Rect rect2 = this.f43821d.f43847i;
        if (rect2 != null) {
            rect.set(rect2);
            return true;
        }
        return super.getPadding(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public Region getTransparentRegion() {
        this.f43831v.set(getBounds());
        g(u(), this.f43827r);
        this.f43832w.setPath(this.f43827r, this.f43831v);
        this.f43831v.op(this.f43832w, Region.Op.DIFFERENCE);
        return this.f43831v;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void h(RectF rectF, Path path) {
        l lVar = this.C;
        c cVar = this.f43821d;
        lVar.e(cVar.f43839a, cVar.f43849k, rectF, this.B, path);
    }

    @Override // android.graphics.drawable.Drawable
    public void invalidateSelf() {
        this.f43825p = true;
        super.invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!super.isStateful()) {
            ColorStateList colorStateList = this.f43821d.f43845g;
            if (colorStateList == null || !colorStateList.isStateful()) {
                ColorStateList colorStateList2 = this.f43821d.f43844f;
                if (colorStateList2 == null || !colorStateList2.isStateful()) {
                    ColorStateList colorStateList3 = this.f43821d.f43843e;
                    if (colorStateList3 == null || !colorStateList3.isStateful()) {
                        ColorStateList colorStateList4 = this.f43821d.f43842d;
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
        gh.a aVar = this.f43821d.f43840b;
        if (aVar != null) {
            return aVar.c(i10, J2);
        }
        return i10;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        this.f43821d = new c(this.f43821d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        this.f43825p = true;
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
        q(canvas, paint, path, this.f43821d.f43839a, rectF);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void r(Canvas canvas) {
        q(canvas, this.f43835z, this.f43828s, this.f43833x, v());
    }

    public float s() {
        return this.f43821d.f43839a.j().a(u());
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        c cVar = this.f43821d;
        if (cVar.f43851m != i10) {
            cVar.f43851m = i10;
            O();
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f43821d.f43841c = colorFilter;
        O();
    }

    @Override // oh.n
    public void setShapeAppearanceModel(k kVar) {
        this.f43821d.f43839a = kVar;
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        setTintList(ColorStateList.valueOf(i10));
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f43821d.f43845g = colorStateList;
        i0();
        O();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        c cVar = this.f43821d;
        if (cVar.f43846h != mode) {
            cVar.f43846h = mode;
            i0();
            O();
        }
    }

    public float t() {
        return this.f43821d.f43839a.l().a(u());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public RectF u() {
        this.f43829t.set(getBounds());
        return this.f43829t;
    }

    public float w() {
        return this.f43821d.f43853o;
    }

    public ColorStateList x() {
        return this.f43821d.f43842d;
    }

    public float y() {
        return this.f43821d.f43849k;
    }

    public float z() {
        return this.f43821d.f43852n;
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
        this.f43822e = new m.g[4];
        this.f43823i = new m.g[4];
        this.f43824o = new BitSet(8);
        this.f43826q = new Matrix();
        this.f43827r = new Path();
        this.f43828s = new Path();
        this.f43829t = new RectF();
        this.f43830u = new RectF();
        this.f43831v = new Region();
        this.f43832w = new Region();
        Paint paint = new Paint(1);
        this.f43834y = paint;
        Paint paint2 = new Paint(1);
        this.f43835z = paint2;
        this.A = new nh.a();
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            lVar = l.k();
        } else {
            lVar = new l();
        }
        this.C = lVar;
        this.G = new RectF();
        this.H = true;
        this.f43821d = cVar;
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
        k f43839a;

        /* renamed from: b  reason: collision with root package name */
        gh.a f43840b;

        /* renamed from: c  reason: collision with root package name */
        ColorFilter f43841c;

        /* renamed from: d  reason: collision with root package name */
        ColorStateList f43842d;

        /* renamed from: e  reason: collision with root package name */
        ColorStateList f43843e;

        /* renamed from: f  reason: collision with root package name */
        ColorStateList f43844f;

        /* renamed from: g  reason: collision with root package name */
        ColorStateList f43845g;

        /* renamed from: h  reason: collision with root package name */
        PorterDuff.Mode f43846h;

        /* renamed from: i  reason: collision with root package name */
        Rect f43847i;

        /* renamed from: j  reason: collision with root package name */
        float f43848j;

        /* renamed from: k  reason: collision with root package name */
        float f43849k;

        /* renamed from: l  reason: collision with root package name */
        float f43850l;

        /* renamed from: m  reason: collision with root package name */
        int f43851m;

        /* renamed from: n  reason: collision with root package name */
        float f43852n;

        /* renamed from: o  reason: collision with root package name */
        float f43853o;

        /* renamed from: p  reason: collision with root package name */
        float f43854p;

        /* renamed from: q  reason: collision with root package name */
        int f43855q;

        /* renamed from: r  reason: collision with root package name */
        int f43856r;

        /* renamed from: s  reason: collision with root package name */
        int f43857s;

        /* renamed from: t  reason: collision with root package name */
        int f43858t;

        /* renamed from: u  reason: collision with root package name */
        boolean f43859u;

        /* renamed from: v  reason: collision with root package name */
        Paint.Style f43860v;

        public c(k kVar, gh.a aVar) {
            this.f43842d = null;
            this.f43843e = null;
            this.f43844f = null;
            this.f43845g = null;
            this.f43846h = PorterDuff.Mode.SRC_IN;
            this.f43847i = null;
            this.f43848j = 1.0f;
            this.f43849k = 1.0f;
            this.f43851m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f43852n = 0.0f;
            this.f43853o = 0.0f;
            this.f43854p = 0.0f;
            this.f43855q = 0;
            this.f43856r = 0;
            this.f43857s = 0;
            this.f43858t = 0;
            this.f43859u = false;
            this.f43860v = Paint.Style.FILL_AND_STROKE;
            this.f43839a = kVar;
            this.f43840b = aVar;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public Drawable newDrawable() {
            g gVar = new g(this);
            gVar.f43825p = true;
            return gVar;
        }

        public c(c cVar) {
            this.f43842d = null;
            this.f43843e = null;
            this.f43844f = null;
            this.f43845g = null;
            this.f43846h = PorterDuff.Mode.SRC_IN;
            this.f43847i = null;
            this.f43848j = 1.0f;
            this.f43849k = 1.0f;
            this.f43851m = SetSpanOperation.SPAN_MAX_PRIORITY;
            this.f43852n = 0.0f;
            this.f43853o = 0.0f;
            this.f43854p = 0.0f;
            this.f43855q = 0;
            this.f43856r = 0;
            this.f43857s = 0;
            this.f43858t = 0;
            this.f43859u = false;
            this.f43860v = Paint.Style.FILL_AND_STROKE;
            this.f43839a = cVar.f43839a;
            this.f43840b = cVar.f43840b;
            this.f43850l = cVar.f43850l;
            this.f43841c = cVar.f43841c;
            this.f43842d = cVar.f43842d;
            this.f43843e = cVar.f43843e;
            this.f43846h = cVar.f43846h;
            this.f43845g = cVar.f43845g;
            this.f43851m = cVar.f43851m;
            this.f43848j = cVar.f43848j;
            this.f43857s = cVar.f43857s;
            this.f43855q = cVar.f43855q;
            this.f43859u = cVar.f43859u;
            this.f43849k = cVar.f43849k;
            this.f43852n = cVar.f43852n;
            this.f43853o = cVar.f43853o;
            this.f43854p = cVar.f43854p;
            this.f43856r = cVar.f43856r;
            this.f43858t = cVar.f43858t;
            this.f43844f = cVar.f43844f;
            this.f43860v = cVar.f43860v;
            if (cVar.f43847i != null) {
                this.f43847i = new Rect(cVar.f43847i);
            }
        }
    }
}
