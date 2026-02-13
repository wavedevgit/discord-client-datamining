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
    public static final C0603a f44560r = new C0603a(null);

    /* renamed from: s  reason: collision with root package name */
    private static final Class f44561s = a.class;

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f44562a;

    /* renamed from: b  reason: collision with root package name */
    private final b f44563b;

    /* renamed from: c  reason: collision with root package name */
    private final d f44564c;

    /* renamed from: d  reason: collision with root package name */
    private final c f44565d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f44566e;

    /* renamed from: f  reason: collision with root package name */
    private final s9.a f44567f;

    /* renamed from: g  reason: collision with root package name */
    private final s9.b f44568g;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f44569h;

    /* renamed from: i  reason: collision with root package name */
    private final Bitmap.Config f44570i;

    /* renamed from: j  reason: collision with root package name */
    private final Paint f44571j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f44572k;

    /* renamed from: l  reason: collision with root package name */
    private int f44573l;

    /* renamed from: m  reason: collision with root package name */
    private int f44574m;

    /* renamed from: n  reason: collision with root package name */
    private final Path f44575n;

    /* renamed from: o  reason: collision with root package name */
    private final Matrix f44576o;

    /* renamed from: p  reason: collision with root package name */
    private int f44577p;

    /* renamed from: q  reason: collision with root package name */
    private a.InterfaceC0586a f44578q;

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
        this.f44562a = platformBitmapFactory;
        this.f44563b = bitmapFrameCache;
        this.f44564c = animationInformation;
        this.f44565d = bitmapFrameRenderer;
        this.f44566e = z10;
        this.f44567f = aVar;
        this.f44568g = bVar;
        this.f44569h = null;
        this.f44570i = Bitmap.Config.ARGB_8888;
        this.f44571j = new Paint(6);
        this.f44575n = new Path();
        this.f44576o = new Matrix();
        this.f44577p = -1;
        s();
    }

    private final void o(int i10, Bitmap bitmap, Canvas canvas) {
        Rect rect = this.f44572k;
        if (rect == null) {
            canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f44571j);
        } else if (t(i10, bitmap, rect.width(), rect.height())) {
            canvas.drawPath(this.f44575n, this.f44571j);
        } else {
            canvas.drawBitmap(bitmap, (Rect) null, rect, this.f44571j);
        }
    }

    private final boolean p(int i10, CloseableReference closeableReference, Canvas canvas, int i11) {
        if (closeableReference != null && CloseableReference.C0(closeableReference)) {
            Object J = closeableReference.J();
            Intrinsics.checkNotNullExpressionValue(J, "get(...)");
            o(i10, (Bitmap) J, canvas);
            if (i11 != 3 && !this.f44566e) {
                this.f44563b.b(i10, closeableReference, i11);
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
            if (this.f44566e) {
                s9.a aVar = this.f44567f;
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
                s9.a aVar2 = this.f44567f;
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
                        e10 = this.f44563b.c(i10);
                        p10 = p(i10, e10, canvas, 3);
                        i12 = -1;
                    } else {
                        try {
                            e10 = this.f44562a.b(this.f44573l, this.f44574m, this.f44570i);
                            if (r(i10, e10) && p(i10, e10, canvas, 2)) {
                                z10 = true;
                            }
                            p10 = z10;
                            i12 = 3;
                        } catch (RuntimeException e11) {
                            q8.a.G(f44561s, "Failed to create frame bitmap", e11);
                            CloseableReference.z(null);
                            return false;
                        }
                    }
                } else {
                    e10 = this.f44563b.d(i10, this.f44573l, this.f44574m);
                    if (r(i10, e10) && p(i10, e10, canvas, 1)) {
                        z10 = true;
                    }
                    p10 = z10;
                    i12 = 2;
                }
            } else {
                e10 = this.f44563b.e(i10);
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
            c cVar = this.f44565d;
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
        int e10 = this.f44565d.e();
        this.f44573l = e10;
        int i11 = -1;
        if (e10 == -1) {
            Rect rect = this.f44572k;
            if (rect != null) {
                i10 = rect.width();
            } else {
                i10 = -1;
            }
            this.f44573l = i10;
        }
        int c10 = this.f44565d.c();
        this.f44574m = c10;
        if (c10 == -1) {
            Rect rect2 = this.f44572k;
            if (rect2 != null) {
                i11 = rect2.height();
            }
            this.f44574m = i11;
        }
    }

    private final boolean t(int i10, Bitmap bitmap, float f10, float f11) {
        if (this.f44569h == null) {
            return false;
        }
        if (i10 == this.f44577p) {
            return true;
        }
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        BitmapShader bitmapShader = new BitmapShader(bitmap, tileMode, tileMode);
        this.f44576o.setRectToRect(new RectF(0.0f, 0.0f, this.f44573l, this.f44574m), new RectF(0.0f, 0.0f, f10, f11), Matrix.ScaleToFit.FILL);
        bitmapShader.setLocalMatrix(this.f44576o);
        this.f44571j.setShader(bitmapShader);
        this.f44575n.addRoundRect(new RectF(0.0f, 0.0f, f10, f11), this.f44569h, Path.Direction.CW);
        this.f44577p = i10;
        return true;
    }

    @Override // p9.d
    public int a() {
        return this.f44564c.a();
    }

    @Override // p9.d
    public int b() {
        return this.f44564c.b();
    }

    @Override // p9.a
    public int c() {
        return this.f44574m;
    }

    @Override // p9.a
    public void clear() {
        if (this.f44566e) {
            s9.a aVar = this.f44567f;
            if (aVar != null) {
                aVar.d();
                return;
            }
            return;
        }
        this.f44563b.clear();
    }

    @Override // p9.a
    public void d(Rect rect) {
        this.f44572k = rect;
        this.f44565d.d(rect);
        s();
    }

    @Override // p9.a
    public int e() {
        return this.f44573l;
    }

    @Override // p9.a
    public void f(ColorFilter colorFilter) {
        this.f44571j.setColorFilter(colorFilter);
    }

    @Override // p9.d
    public int g() {
        return this.f44564c.g();
    }

    @Override // p9.a
    public boolean h(Drawable parent, Canvas canvas, int i10) {
        s9.b bVar;
        s9.a aVar;
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        boolean q10 = q(canvas, i10, 0);
        if (!this.f44566e && (bVar = this.f44568g) != null && (aVar = this.f44567f) != null) {
            a.C0649a.f(aVar, bVar, this.f44563b, this, i10, null, 16, null);
        }
        return q10;
    }

    @Override // p9.c.b
    public void i() {
        if (this.f44566e) {
            s9.a aVar = this.f44567f;
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
        return this.f44564c.j();
    }

    @Override // p9.d
    public int k(int i10) {
        return this.f44564c.k(i10);
    }

    @Override // p9.a
    public void l(int i10) {
        this.f44571j.setAlpha(i10);
    }

    @Override // p9.d
    public int m() {
        return this.f44564c.m();
    }

    @Override // p9.a
    public void n(a.InterfaceC0586a interfaceC0586a) {
        this.f44578q = interfaceC0586a;
    }
}
