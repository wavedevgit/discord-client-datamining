package p9;

import android.graphics.Bitmap;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import android.graphics.drawable.Drawable;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import o9.a;
import o9.c;
import o9.d;
import r9.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements o9.a, c.b {

    /* renamed from: r  reason: collision with root package name */
    public static final C0578a f43761r = new C0578a(null);

    /* renamed from: s  reason: collision with root package name */
    private static final Class f43762s = a.class;

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f43763a;

    /* renamed from: b  reason: collision with root package name */
    private final b f43764b;

    /* renamed from: c  reason: collision with root package name */
    private final d f43765c;

    /* renamed from: d  reason: collision with root package name */
    private final c f43766d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f43767e;

    /* renamed from: f  reason: collision with root package name */
    private final r9.a f43768f;

    /* renamed from: g  reason: collision with root package name */
    private final r9.b f43769g;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f43770h;

    /* renamed from: i  reason: collision with root package name */
    private final Bitmap.Config f43771i;

    /* renamed from: j  reason: collision with root package name */
    private final Paint f43772j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f43773k;

    /* renamed from: l  reason: collision with root package name */
    private int f43774l;

    /* renamed from: m  reason: collision with root package name */
    private int f43775m;

    /* renamed from: n  reason: collision with root package name */
    private final Path f43776n;

    /* renamed from: o  reason: collision with root package name */
    private final Matrix f43777o;

    /* renamed from: p  reason: collision with root package name */
    private int f43778p;

    /* renamed from: q  reason: collision with root package name */
    private a.InterfaceC0557a f43779q;

    /* renamed from: p9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0578a {
        public /* synthetic */ C0578a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0578a() {
        }
    }

    public a(PlatformBitmapFactory platformBitmapFactory, b bitmapFrameCache, d animationInformation, c bitmapFrameRenderer, boolean z10, r9.a aVar, r9.b bVar, ba.d dVar) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        this.f43763a = platformBitmapFactory;
        this.f43764b = bitmapFrameCache;
        this.f43765c = animationInformation;
        this.f43766d = bitmapFrameRenderer;
        this.f43767e = z10;
        this.f43768f = aVar;
        this.f43769g = bVar;
        this.f43770h = null;
        this.f43771i = Bitmap.Config.ARGB_8888;
        this.f43772j = new Paint(6);
        this.f43776n = new Path();
        this.f43777o = new Matrix();
        this.f43778p = -1;
        s();
    }

    private final void o(int i10, Bitmap bitmap, Canvas canvas) {
        Rect rect = this.f43773k;
        if (rect == null) {
            canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f43772j);
        } else if (t(i10, bitmap, rect.width(), rect.height())) {
            canvas.drawPath(this.f43776n, this.f43772j);
        } else {
            canvas.drawBitmap(bitmap, (Rect) null, rect, this.f43772j);
        }
    }

    private final boolean p(int i10, CloseableReference closeableReference, Canvas canvas, int i11) {
        if (closeableReference != null && CloseableReference.I0(closeableReference)) {
            Object J = closeableReference.J();
            Intrinsics.checkNotNullExpressionValue(J, "get(...)");
            o(i10, (Bitmap) J, canvas);
            if (i11 != 3 && !this.f43767e) {
                this.f43764b.b(i10, closeableReference, i11);
                return true;
            }
            return true;
        }
        return false;
    }

    private final boolean q(Canvas canvas, int i10, int i11) {
        CloseableReference e10;
        boolean p10;
        CloseableReference closeableReference;
        CloseableReference closeableReference2 = null;
        try {
            boolean z10 = false;
            int i12 = 1;
            if (this.f43767e) {
                r9.a aVar = this.f43768f;
                if (aVar != null) {
                    closeableReference = aVar.c(i10, canvas.getWidth(), canvas.getHeight());
                } else {
                    closeableReference = null;
                }
                if (closeableReference != null) {
                    try {
                        if (closeableReference.F0()) {
                            Object J = closeableReference.J();
                            Intrinsics.checkNotNullExpressionValue(J, "get(...)");
                            o(i10, (Bitmap) J, canvas);
                            CloseableReference.z(closeableReference);
                            return true;
                        }
                    } catch (Throwable th2) {
                        th = th2;
                        closeableReference2 = closeableReference;
                        CloseableReference.z(closeableReference2);
                        throw th;
                    }
                }
                r9.a aVar2 = this.f43768f;
                if (aVar2 != null) {
                    aVar2.a(canvas.getWidth(), canvas.getHeight(), null);
                }
                CloseableReference.z(closeableReference);
                return false;
            }
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 != 3) {
                            CloseableReference.z(null);
                            return false;
                        }
                        e10 = this.f43764b.c(i10);
                        p10 = p(i10, e10, canvas, 3);
                        i12 = -1;
                    } else {
                        try {
                            e10 = this.f43763a.b(this.f43774l, this.f43775m, this.f43771i);
                            if (r(i10, e10) && p(i10, e10, canvas, 2)) {
                                z10 = true;
                            }
                            p10 = z10;
                            i12 = 3;
                        } catch (RuntimeException e11) {
                            p8.a.G(f43762s, "Failed to create frame bitmap", e11);
                            CloseableReference.z(null);
                            return false;
                        }
                    }
                } else {
                    e10 = this.f43764b.d(i10, this.f43774l, this.f43775m);
                    if (r(i10, e10) && p(i10, e10, canvas, 1)) {
                        z10 = true;
                    }
                    p10 = z10;
                    i12 = 2;
                }
            } else {
                e10 = this.f43764b.e(i10);
                p10 = p(i10, e10, canvas, 0);
            }
            CloseableReference.z(e10);
            if (!p10 && i12 != -1) {
                return q(canvas, i10, i12);
            }
            return p10;
        } catch (Throwable th3) {
            th = th3;
            CloseableReference.z(closeableReference2);
            throw th;
        }
    }

    private final boolean r(int i10, CloseableReference closeableReference) {
        if (closeableReference != null && closeableReference.F0()) {
            c cVar = this.f43766d;
            Object J = closeableReference.J();
            Intrinsics.checkNotNullExpressionValue(J, "get(...)");
            boolean a10 = cVar.a(i10, (Bitmap) J);
            if (!a10) {
                CloseableReference.z(closeableReference);
            }
            return a10;
        }
        return false;
    }

    private final void s() {
        int i10;
        int e10 = this.f43766d.e();
        this.f43774l = e10;
        int i11 = -1;
        if (e10 == -1) {
            Rect rect = this.f43773k;
            if (rect != null) {
                i10 = rect.width();
            } else {
                i10 = -1;
            }
            this.f43774l = i10;
        }
        int c10 = this.f43766d.c();
        this.f43775m = c10;
        if (c10 == -1) {
            Rect rect2 = this.f43773k;
            if (rect2 != null) {
                i11 = rect2.height();
            }
            this.f43775m = i11;
        }
    }

    private final boolean t(int i10, Bitmap bitmap, float f10, float f11) {
        if (this.f43770h == null) {
            return false;
        }
        if (i10 == this.f43778p) {
            return true;
        }
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        BitmapShader bitmapShader = new BitmapShader(bitmap, tileMode, tileMode);
        this.f43777o.setRectToRect(new RectF(0.0f, 0.0f, this.f43774l, this.f43775m), new RectF(0.0f, 0.0f, f10, f11), Matrix.ScaleToFit.FILL);
        bitmapShader.setLocalMatrix(this.f43777o);
        this.f43772j.setShader(bitmapShader);
        this.f43776n.addRoundRect(new RectF(0.0f, 0.0f, f10, f11), this.f43770h, Path.Direction.CW);
        this.f43778p = i10;
        return true;
    }

    @Override // o9.d
    public int a() {
        return this.f43765c.a();
    }

    @Override // o9.d
    public int b() {
        return this.f43765c.b();
    }

    @Override // o9.a
    public int c() {
        return this.f43775m;
    }

    @Override // o9.a
    public void clear() {
        if (this.f43767e) {
            r9.a aVar = this.f43768f;
            if (aVar != null) {
                aVar.d();
                return;
            }
            return;
        }
        this.f43764b.clear();
    }

    @Override // o9.a
    public void d(Rect rect) {
        this.f43773k = rect;
        this.f43766d.d(rect);
        s();
    }

    @Override // o9.a
    public int e() {
        return this.f43774l;
    }

    @Override // o9.a
    public void f(ColorFilter colorFilter) {
        this.f43772j.setColorFilter(colorFilter);
    }

    @Override // o9.d
    public int g() {
        return this.f43765c.g();
    }

    @Override // o9.a
    public boolean h(Drawable parent, Canvas canvas, int i10) {
        r9.b bVar;
        r9.a aVar;
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        boolean q10 = q(canvas, i10, 0);
        if (!this.f43767e && (bVar = this.f43769g) != null && (aVar = this.f43768f) != null) {
            a.C0618a.f(aVar, bVar, this.f43764b, this, i10, null, 16, null);
        }
        return q10;
    }

    @Override // o9.c.b
    public void i() {
        if (this.f43767e) {
            r9.a aVar = this.f43768f;
            if (aVar != null) {
                aVar.b();
                return;
            }
            return;
        }
        clear();
    }

    @Override // o9.d
    public int j() {
        return this.f43765c.j();
    }

    @Override // o9.a
    public void k(a.InterfaceC0557a interfaceC0557a) {
        this.f43779q = interfaceC0557a;
    }

    @Override // o9.d
    public int l(int i10) {
        return this.f43765c.l(i10);
    }

    @Override // o9.a
    public void m(int i10) {
        this.f43772j.setAlpha(i10);
    }

    @Override // o9.d
    public int n() {
        return this.f43765c.n();
    }
}
