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
    public static final C0626a f45323r = new C0626a(null);

    /* renamed from: s  reason: collision with root package name */
    private static final Class f45324s = a.class;

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f45325a;

    /* renamed from: b  reason: collision with root package name */
    private final b f45326b;

    /* renamed from: c  reason: collision with root package name */
    private final d f45327c;

    /* renamed from: d  reason: collision with root package name */
    private final c f45328d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f45329e;

    /* renamed from: f  reason: collision with root package name */
    private final s9.a f45330f;

    /* renamed from: g  reason: collision with root package name */
    private final s9.b f45331g;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f45332h;

    /* renamed from: i  reason: collision with root package name */
    private final Bitmap.Config f45333i;

    /* renamed from: j  reason: collision with root package name */
    private final Paint f45334j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f45335k;

    /* renamed from: l  reason: collision with root package name */
    private int f45336l;

    /* renamed from: m  reason: collision with root package name */
    private int f45337m;

    /* renamed from: n  reason: collision with root package name */
    private final Path f45338n;

    /* renamed from: o  reason: collision with root package name */
    private final Matrix f45339o;

    /* renamed from: p  reason: collision with root package name */
    private int f45340p;

    /* renamed from: q  reason: collision with root package name */
    private a.InterfaceC0610a f45341q;

    /* renamed from: q9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0626a {
        public /* synthetic */ C0626a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0626a() {
        }
    }

    public a(PlatformBitmapFactory platformBitmapFactory, b bitmapFrameCache, d animationInformation, c bitmapFrameRenderer, boolean z10, s9.a aVar, s9.b bVar, ca.d dVar) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        this.f45325a = platformBitmapFactory;
        this.f45326b = bitmapFrameCache;
        this.f45327c = animationInformation;
        this.f45328d = bitmapFrameRenderer;
        this.f45329e = z10;
        this.f45330f = aVar;
        this.f45331g = bVar;
        this.f45332h = null;
        this.f45333i = Bitmap.Config.ARGB_8888;
        this.f45334j = new Paint(6);
        this.f45338n = new Path();
        this.f45339o = new Matrix();
        this.f45340p = -1;
        s();
    }

    private final void o(int i10, Bitmap bitmap, Canvas canvas) {
        Rect rect = this.f45335k;
        if (rect == null) {
            canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f45334j);
        } else if (t(i10, bitmap, rect.width(), rect.height())) {
            canvas.drawPath(this.f45338n, this.f45334j);
        } else {
            canvas.drawBitmap(bitmap, (Rect) null, rect, this.f45334j);
        }
    }

    private final boolean p(int i10, CloseableReference closeableReference, Canvas canvas, int i11) {
        if (closeableReference != null && CloseableReference.G0(closeableReference)) {
            Object J = closeableReference.J();
            Intrinsics.checkNotNullExpressionValue(J, "get(...)");
            o(i10, (Bitmap) J, canvas);
            if (i11 != 3 && !this.f45329e) {
                this.f45326b.b(i10, closeableReference, i11);
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
            if (this.f45329e) {
                s9.a aVar = this.f45330f;
                if (aVar != null) {
                    closeableReference = aVar.c(i10, canvas.getWidth(), canvas.getHeight());
                } else {
                    closeableReference = null;
                }
                if (closeableReference != null) {
                    try {
                        if (closeableReference.D0()) {
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
                s9.a aVar2 = this.f45330f;
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
                        e10 = this.f45326b.c(i10);
                        p10 = p(i10, e10, canvas, 3);
                        i12 = -1;
                    } else {
                        try {
                            e10 = this.f45325a.b(this.f45336l, this.f45337m, this.f45333i);
                            if (r(i10, e10) && p(i10, e10, canvas, 2)) {
                                z10 = true;
                            }
                            p10 = z10;
                            i12 = 3;
                        } catch (RuntimeException e11) {
                            q8.a.G(f45324s, "Failed to create frame bitmap", e11);
                            CloseableReference.z(null);
                            return false;
                        }
                    }
                } else {
                    e10 = this.f45326b.d(i10, this.f45336l, this.f45337m);
                    if (r(i10, e10) && p(i10, e10, canvas, 1)) {
                        z10 = true;
                    }
                    p10 = z10;
                    i12 = 2;
                }
            } else {
                e10 = this.f45326b.e(i10);
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
        if (closeableReference != null && closeableReference.D0()) {
            c cVar = this.f45328d;
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
        int e10 = this.f45328d.e();
        this.f45336l = e10;
        int i11 = -1;
        if (e10 == -1) {
            Rect rect = this.f45335k;
            if (rect != null) {
                i10 = rect.width();
            } else {
                i10 = -1;
            }
            this.f45336l = i10;
        }
        int c10 = this.f45328d.c();
        this.f45337m = c10;
        if (c10 == -1) {
            Rect rect2 = this.f45335k;
            if (rect2 != null) {
                i11 = rect2.height();
            }
            this.f45337m = i11;
        }
    }

    private final boolean t(int i10, Bitmap bitmap, float f10, float f11) {
        if (this.f45332h == null) {
            return false;
        }
        if (i10 == this.f45340p) {
            return true;
        }
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        BitmapShader bitmapShader = new BitmapShader(bitmap, tileMode, tileMode);
        this.f45339o.setRectToRect(new RectF(0.0f, 0.0f, this.f45336l, this.f45337m), new RectF(0.0f, 0.0f, f10, f11), Matrix.ScaleToFit.FILL);
        bitmapShader.setLocalMatrix(this.f45339o);
        this.f45334j.setShader(bitmapShader);
        this.f45338n.addRoundRect(new RectF(0.0f, 0.0f, f10, f11), this.f45332h, Path.Direction.CW);
        this.f45340p = i10;
        return true;
    }

    @Override // p9.d
    public int a() {
        return this.f45327c.a();
    }

    @Override // p9.d
    public int b() {
        return this.f45327c.b();
    }

    @Override // p9.a
    public int c() {
        return this.f45337m;
    }

    @Override // p9.a
    public void clear() {
        if (this.f45329e) {
            s9.a aVar = this.f45330f;
            if (aVar != null) {
                aVar.d();
                return;
            }
            return;
        }
        this.f45326b.clear();
    }

    @Override // p9.a
    public void d(Rect rect) {
        this.f45335k = rect;
        this.f45328d.d(rect);
        s();
    }

    @Override // p9.a
    public int e() {
        return this.f45336l;
    }

    @Override // p9.a
    public void f(ColorFilter colorFilter) {
        this.f45334j.setColorFilter(colorFilter);
    }

    @Override // p9.d
    public int g() {
        return this.f45327c.g();
    }

    @Override // p9.a
    public boolean h(Drawable parent, Canvas canvas, int i10) {
        s9.b bVar;
        s9.a aVar;
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        boolean q10 = q(canvas, i10, 0);
        if (!this.f45329e && (bVar = this.f45331g) != null && (aVar = this.f45330f) != null) {
            a.C0664a.f(aVar, bVar, this.f45326b, this, i10, null, 16, null);
        }
        return q10;
    }

    @Override // p9.c.b
    public void i() {
        if (this.f45329e) {
            s9.a aVar = this.f45330f;
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
        return this.f45327c.j();
    }

    @Override // p9.d
    public int k(int i10) {
        return this.f45327c.k(i10);
    }

    @Override // p9.a
    public void l(int i10) {
        this.f45334j.setAlpha(i10);
    }

    @Override // p9.d
    public int m() {
        return this.f45327c.m();
    }

    @Override // p9.a
    public void n(a.InterfaceC0610a interfaceC0610a) {
        this.f45341q = interfaceC0610a;
    }
}
