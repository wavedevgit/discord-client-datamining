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
    public static final C0567a f44964r = new C0567a(null);

    /* renamed from: s  reason: collision with root package name */
    private static final Class f44965s = a.class;

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f44966a;

    /* renamed from: b  reason: collision with root package name */
    private final b f44967b;

    /* renamed from: c  reason: collision with root package name */
    private final d f44968c;

    /* renamed from: d  reason: collision with root package name */
    private final c f44969d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f44970e;

    /* renamed from: f  reason: collision with root package name */
    private final r9.a f44971f;

    /* renamed from: g  reason: collision with root package name */
    private final r9.b f44972g;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f44973h;

    /* renamed from: i  reason: collision with root package name */
    private final Bitmap.Config f44974i;

    /* renamed from: j  reason: collision with root package name */
    private final Paint f44975j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f44976k;

    /* renamed from: l  reason: collision with root package name */
    private int f44977l;

    /* renamed from: m  reason: collision with root package name */
    private int f44978m;

    /* renamed from: n  reason: collision with root package name */
    private final Path f44979n;

    /* renamed from: o  reason: collision with root package name */
    private final Matrix f44980o;

    /* renamed from: p  reason: collision with root package name */
    private int f44981p;

    /* renamed from: q  reason: collision with root package name */
    private a.InterfaceC0548a f44982q;

    /* renamed from: p9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0567a {
        public /* synthetic */ C0567a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0567a() {
        }
    }

    public a(PlatformBitmapFactory platformBitmapFactory, b bitmapFrameCache, d animationInformation, c bitmapFrameRenderer, boolean z10, r9.a aVar, r9.b bVar, ba.d dVar) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        this.f44966a = platformBitmapFactory;
        this.f44967b = bitmapFrameCache;
        this.f44968c = animationInformation;
        this.f44969d = bitmapFrameRenderer;
        this.f44970e = z10;
        this.f44971f = aVar;
        this.f44972g = bVar;
        this.f44973h = null;
        this.f44974i = Bitmap.Config.ARGB_8888;
        this.f44975j = new Paint(6);
        this.f44979n = new Path();
        this.f44980o = new Matrix();
        this.f44981p = -1;
        s();
    }

    private final void o(int i10, Bitmap bitmap, Canvas canvas) {
        Rect rect = this.f44976k;
        if (rect == null) {
            canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f44975j);
        } else if (t(i10, bitmap, rect.width(), rect.height())) {
            canvas.drawPath(this.f44979n, this.f44975j);
        } else {
            canvas.drawBitmap(bitmap, (Rect) null, rect, this.f44975j);
        }
    }

    private final boolean p(int i10, CloseableReference closeableReference, Canvas canvas, int i11) {
        if (closeableReference != null && CloseableReference.K0(closeableReference)) {
            Object E0 = closeableReference.E0();
            Intrinsics.checkNotNullExpressionValue(E0, "get(...)");
            o(i10, (Bitmap) E0, canvas);
            if (i11 != 3 && !this.f44970e) {
                this.f44967b.b(i10, closeableReference, i11);
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
            if (this.f44970e) {
                r9.a aVar = this.f44971f;
                if (aVar != null) {
                    closeableReference = aVar.c(i10, canvas.getWidth(), canvas.getHeight());
                } else {
                    closeableReference = null;
                }
                if (closeableReference != null) {
                    try {
                        if (closeableReference.I0()) {
                            Object E0 = closeableReference.E0();
                            Intrinsics.checkNotNullExpressionValue(E0, "get(...)");
                            o(i10, (Bitmap) E0, canvas);
                            CloseableReference.N(closeableReference);
                            return true;
                        }
                    } catch (Throwable th2) {
                        th = th2;
                        closeableReference2 = closeableReference;
                        CloseableReference.N(closeableReference2);
                        throw th;
                    }
                }
                r9.a aVar2 = this.f44971f;
                if (aVar2 != null) {
                    aVar2.a(canvas.getWidth(), canvas.getHeight(), null);
                }
                CloseableReference.N(closeableReference);
                return false;
            }
            if (i11 != 0) {
                if (i11 != 1) {
                    if (i11 != 2) {
                        if (i11 != 3) {
                            CloseableReference.N(null);
                            return false;
                        }
                        e10 = this.f44967b.c(i10);
                        p10 = p(i10, e10, canvas, 3);
                        i12 = -1;
                    } else {
                        try {
                            e10 = this.f44966a.b(this.f44977l, this.f44978m, this.f44974i);
                            if (r(i10, e10) && p(i10, e10, canvas, 2)) {
                                z10 = true;
                            }
                            p10 = z10;
                            i12 = 3;
                        } catch (RuntimeException e11) {
                            p8.a.G(f44965s, "Failed to create frame bitmap", e11);
                            CloseableReference.N(null);
                            return false;
                        }
                    }
                } else {
                    e10 = this.f44967b.d(i10, this.f44977l, this.f44978m);
                    if (r(i10, e10) && p(i10, e10, canvas, 1)) {
                        z10 = true;
                    }
                    p10 = z10;
                    i12 = 2;
                }
            } else {
                e10 = this.f44967b.e(i10);
                p10 = p(i10, e10, canvas, 0);
            }
            CloseableReference.N(e10);
            if (!p10 && i12 != -1) {
                return q(canvas, i10, i12);
            }
            return p10;
        } catch (Throwable th3) {
            th = th3;
            CloseableReference.N(closeableReference2);
            throw th;
        }
    }

    private final boolean r(int i10, CloseableReference closeableReference) {
        if (closeableReference != null && closeableReference.I0()) {
            c cVar = this.f44969d;
            Object E0 = closeableReference.E0();
            Intrinsics.checkNotNullExpressionValue(E0, "get(...)");
            boolean a10 = cVar.a(i10, (Bitmap) E0);
            if (!a10) {
                CloseableReference.N(closeableReference);
            }
            return a10;
        }
        return false;
    }

    private final void s() {
        int i10;
        int e10 = this.f44969d.e();
        this.f44977l = e10;
        int i11 = -1;
        if (e10 == -1) {
            Rect rect = this.f44976k;
            if (rect != null) {
                i10 = rect.width();
            } else {
                i10 = -1;
            }
            this.f44977l = i10;
        }
        int c10 = this.f44969d.c();
        this.f44978m = c10;
        if (c10 == -1) {
            Rect rect2 = this.f44976k;
            if (rect2 != null) {
                i11 = rect2.height();
            }
            this.f44978m = i11;
        }
    }

    private final boolean t(int i10, Bitmap bitmap, float f10, float f11) {
        if (this.f44973h == null) {
            return false;
        }
        if (i10 == this.f44981p) {
            return true;
        }
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        BitmapShader bitmapShader = new BitmapShader(bitmap, tileMode, tileMode);
        this.f44980o.setRectToRect(new RectF(0.0f, 0.0f, this.f44977l, this.f44978m), new RectF(0.0f, 0.0f, f10, f11), Matrix.ScaleToFit.FILL);
        bitmapShader.setLocalMatrix(this.f44980o);
        this.f44975j.setShader(bitmapShader);
        this.f44979n.addRoundRect(new RectF(0.0f, 0.0f, f10, f11), this.f44973h, Path.Direction.CW);
        this.f44981p = i10;
        return true;
    }

    @Override // o9.d
    public int a() {
        return this.f44968c.a();
    }

    @Override // o9.d
    public int b() {
        return this.f44968c.b();
    }

    @Override // o9.a
    public int c() {
        return this.f44978m;
    }

    @Override // o9.a
    public void clear() {
        if (this.f44970e) {
            r9.a aVar = this.f44971f;
            if (aVar != null) {
                aVar.d();
                return;
            }
            return;
        }
        this.f44967b.clear();
    }

    @Override // o9.a
    public void d(Rect rect) {
        this.f44976k = rect;
        this.f44969d.d(rect);
        s();
    }

    @Override // o9.a
    public int e() {
        return this.f44977l;
    }

    @Override // o9.a
    public void f(ColorFilter colorFilter) {
        this.f44975j.setColorFilter(colorFilter);
    }

    @Override // o9.d
    public int g() {
        return this.f44968c.g();
    }

    @Override // o9.a
    public boolean h(Drawable parent, Canvas canvas, int i10) {
        r9.b bVar;
        r9.a aVar;
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        boolean q10 = q(canvas, i10, 0);
        if (!this.f44970e && (bVar = this.f44972g) != null && (aVar = this.f44971f) != null) {
            a.C0620a.f(aVar, bVar, this.f44967b, this, i10, null, 16, null);
        }
        return q10;
    }

    @Override // o9.c.b
    public void i() {
        if (this.f44970e) {
            r9.a aVar = this.f44971f;
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
        return this.f44968c.j();
    }

    @Override // o9.a
    public void k(a.InterfaceC0548a interfaceC0548a) {
        this.f44982q = interfaceC0548a;
    }

    @Override // o9.d
    public int l(int i10) {
        return this.f44968c.l(i10);
    }

    @Override // o9.a
    public void m(int i10) {
        this.f44975j.setAlpha(i10);
    }

    @Override // o9.d
    public int n() {
        return this.f44968c.n();
    }
}
