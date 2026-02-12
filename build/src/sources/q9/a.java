package q9;

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
import p9.a;
import p9.c;
import p9.d;
import s9.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements p9.a, c.b {

    /* renamed from: r  reason: collision with root package name */
    public static final C0603a f43992r = new C0603a(null);

    /* renamed from: s  reason: collision with root package name */
    private static final Class f43993s = a.class;

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f43994a;

    /* renamed from: b  reason: collision with root package name */
    private final b f43995b;

    /* renamed from: c  reason: collision with root package name */
    private final d f43996c;

    /* renamed from: d  reason: collision with root package name */
    private final c f43997d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f43998e;

    /* renamed from: f  reason: collision with root package name */
    private final s9.a f43999f;

    /* renamed from: g  reason: collision with root package name */
    private final s9.b f44000g;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f44001h;

    /* renamed from: i  reason: collision with root package name */
    private final Bitmap.Config f44002i;

    /* renamed from: j  reason: collision with root package name */
    private final Paint f44003j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f44004k;

    /* renamed from: l  reason: collision with root package name */
    private int f44005l;

    /* renamed from: m  reason: collision with root package name */
    private int f44006m;

    /* renamed from: n  reason: collision with root package name */
    private final Path f44007n;

    /* renamed from: o  reason: collision with root package name */
    private final Matrix f44008o;

    /* renamed from: p  reason: collision with root package name */
    private int f44009p;

    /* renamed from: q  reason: collision with root package name */
    private a.InterfaceC0586a f44010q;

    /* renamed from: q9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0603a {
        public /* synthetic */ C0603a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0603a() {
        }
    }

    public a(PlatformBitmapFactory platformBitmapFactory, b bitmapFrameCache, d animationInformation, c bitmapFrameRenderer, boolean z10, s9.a aVar, s9.b bVar, ca.d dVar) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        this.f43994a = platformBitmapFactory;
        this.f43995b = bitmapFrameCache;
        this.f43996c = animationInformation;
        this.f43997d = bitmapFrameRenderer;
        this.f43998e = z10;
        this.f43999f = aVar;
        this.f44000g = bVar;
        this.f44001h = null;
        this.f44002i = Bitmap.Config.ARGB_8888;
        this.f44003j = new Paint(6);
        this.f44007n = new Path();
        this.f44008o = new Matrix();
        this.f44009p = -1;
        s();
    }

    private final void o(int i10, Bitmap bitmap, Canvas canvas) {
        Rect rect = this.f44004k;
        if (rect == null) {
            canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f44003j);
        } else if (t(i10, bitmap, rect.width(), rect.height())) {
            canvas.drawPath(this.f44007n, this.f44003j);
        } else {
            canvas.drawBitmap(bitmap, (Rect) null, rect, this.f44003j);
        }
    }

    private final boolean p(int i10, CloseableReference closeableReference, Canvas canvas, int i11) {
        if (closeableReference != null && CloseableReference.C0(closeableReference)) {
            Object J = closeableReference.J();
            Intrinsics.checkNotNullExpressionValue(J, "get(...)");
            o(i10, (Bitmap) J, canvas);
            if (i11 != 3 && !this.f43998e) {
                this.f43995b.b(i10, closeableReference, i11);
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
            if (this.f43998e) {
                s9.a aVar = this.f43999f;
                if (aVar != null) {
                    closeableReference = aVar.c(i10, canvas.getWidth(), canvas.getHeight());
                } else {
                    closeableReference = null;
                }
                if (closeableReference != null) {
                    try {
                        if (closeableReference.z0()) {
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
                s9.a aVar2 = this.f43999f;
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
                        e10 = this.f43995b.c(i10);
                        p10 = p(i10, e10, canvas, 3);
                        i12 = -1;
                    } else {
                        try {
                            e10 = this.f43994a.b(this.f44005l, this.f44006m, this.f44002i);
                            if (r(i10, e10) && p(i10, e10, canvas, 2)) {
                                z10 = true;
                            }
                            p10 = z10;
                            i12 = 3;
                        } catch (RuntimeException e11) {
                            q8.a.G(f43993s, "Failed to create frame bitmap", e11);
                            CloseableReference.z(null);
                            return false;
                        }
                    }
                } else {
                    e10 = this.f43995b.d(i10, this.f44005l, this.f44006m);
                    if (r(i10, e10) && p(i10, e10, canvas, 1)) {
                        z10 = true;
                    }
                    p10 = z10;
                    i12 = 2;
                }
            } else {
                e10 = this.f43995b.e(i10);
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
        if (closeableReference != null && closeableReference.z0()) {
            c cVar = this.f43997d;
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
        int e10 = this.f43997d.e();
        this.f44005l = e10;
        int i11 = -1;
        if (e10 == -1) {
            Rect rect = this.f44004k;
            if (rect != null) {
                i10 = rect.width();
            } else {
                i10 = -1;
            }
            this.f44005l = i10;
        }
        int c10 = this.f43997d.c();
        this.f44006m = c10;
        if (c10 == -1) {
            Rect rect2 = this.f44004k;
            if (rect2 != null) {
                i11 = rect2.height();
            }
            this.f44006m = i11;
        }
    }

    private final boolean t(int i10, Bitmap bitmap, float f10, float f11) {
        if (this.f44001h == null) {
            return false;
        }
        if (i10 == this.f44009p) {
            return true;
        }
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        BitmapShader bitmapShader = new BitmapShader(bitmap, tileMode, tileMode);
        this.f44008o.setRectToRect(new RectF(0.0f, 0.0f, this.f44005l, this.f44006m), new RectF(0.0f, 0.0f, f10, f11), Matrix.ScaleToFit.FILL);
        bitmapShader.setLocalMatrix(this.f44008o);
        this.f44003j.setShader(bitmapShader);
        this.f44007n.addRoundRect(new RectF(0.0f, 0.0f, f10, f11), this.f44001h, Path.Direction.CW);
        this.f44009p = i10;
        return true;
    }

    @Override // p9.d
    public int a() {
        return this.f43996c.a();
    }

    @Override // p9.d
    public int b() {
        return this.f43996c.b();
    }

    @Override // p9.a
    public int c() {
        return this.f44006m;
    }

    @Override // p9.a
    public void clear() {
        if (this.f43998e) {
            s9.a aVar = this.f43999f;
            if (aVar != null) {
                aVar.d();
                return;
            }
            return;
        }
        this.f43995b.clear();
    }

    @Override // p9.a
    public void d(Rect rect) {
        this.f44004k = rect;
        this.f43997d.d(rect);
        s();
    }

    @Override // p9.a
    public int e() {
        return this.f44005l;
    }

    @Override // p9.a
    public void f(ColorFilter colorFilter) {
        this.f44003j.setColorFilter(colorFilter);
    }

    @Override // p9.d
    public int g() {
        return this.f43996c.g();
    }

    @Override // p9.a
    public boolean h(Drawable parent, Canvas canvas, int i10) {
        s9.b bVar;
        s9.a aVar;
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        boolean q10 = q(canvas, i10, 0);
        if (!this.f43998e && (bVar = this.f44000g) != null && (aVar = this.f43999f) != null) {
            a.C0649a.f(aVar, bVar, this.f43995b, this, i10, null, 16, null);
        }
        return q10;
    }

    @Override // p9.c.b
    public void i() {
        if (this.f43998e) {
            s9.a aVar = this.f43999f;
            if (aVar != null) {
                aVar.b();
                return;
            }
            return;
        }
        clear();
    }

    @Override // p9.d
    public int j() {
        return this.f43996c.j();
    }

    @Override // p9.d
    public int k(int i10) {
        return this.f43996c.k(i10);
    }

    @Override // p9.a
    public void l(int i10) {
        this.f44003j.setAlpha(i10);
    }

    @Override // p9.d
    public int m() {
        return this.f43996c.m();
    }

    @Override // p9.a
    public void n(a.InterfaceC0586a interfaceC0586a) {
        this.f44010q = interfaceC0586a;
    }
}
