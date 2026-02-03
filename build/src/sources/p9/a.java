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
    public static final C0558a f45034r = new C0558a(null);

    /* renamed from: s  reason: collision with root package name */
    private static final Class f45035s = a.class;

    /* renamed from: a  reason: collision with root package name */
    private final PlatformBitmapFactory f45036a;

    /* renamed from: b  reason: collision with root package name */
    private final b f45037b;

    /* renamed from: c  reason: collision with root package name */
    private final d f45038c;

    /* renamed from: d  reason: collision with root package name */
    private final c f45039d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f45040e;

    /* renamed from: f  reason: collision with root package name */
    private final r9.a f45041f;

    /* renamed from: g  reason: collision with root package name */
    private final r9.b f45042g;

    /* renamed from: h  reason: collision with root package name */
    private final float[] f45043h;

    /* renamed from: i  reason: collision with root package name */
    private final Bitmap.Config f45044i;

    /* renamed from: j  reason: collision with root package name */
    private final Paint f45045j;

    /* renamed from: k  reason: collision with root package name */
    private Rect f45046k;

    /* renamed from: l  reason: collision with root package name */
    private int f45047l;

    /* renamed from: m  reason: collision with root package name */
    private int f45048m;

    /* renamed from: n  reason: collision with root package name */
    private final Path f45049n;

    /* renamed from: o  reason: collision with root package name */
    private final Matrix f45050o;

    /* renamed from: p  reason: collision with root package name */
    private int f45051p;

    /* renamed from: q  reason: collision with root package name */
    private a.InterfaceC0540a f45052q;

    /* renamed from: p9.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0558a {
        public /* synthetic */ C0558a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0558a() {
        }
    }

    public a(PlatformBitmapFactory platformBitmapFactory, b bitmapFrameCache, d animationInformation, c bitmapFrameRenderer, boolean z10, r9.a aVar, r9.b bVar, ba.d dVar) {
        Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
        Intrinsics.checkNotNullParameter(bitmapFrameCache, "bitmapFrameCache");
        Intrinsics.checkNotNullParameter(animationInformation, "animationInformation");
        Intrinsics.checkNotNullParameter(bitmapFrameRenderer, "bitmapFrameRenderer");
        this.f45036a = platformBitmapFactory;
        this.f45037b = bitmapFrameCache;
        this.f45038c = animationInformation;
        this.f45039d = bitmapFrameRenderer;
        this.f45040e = z10;
        this.f45041f = aVar;
        this.f45042g = bVar;
        this.f45043h = null;
        this.f45044i = Bitmap.Config.ARGB_8888;
        this.f45045j = new Paint(6);
        this.f45049n = new Path();
        this.f45050o = new Matrix();
        this.f45051p = -1;
        s();
    }

    private final void o(int i10, Bitmap bitmap, Canvas canvas) {
        Rect rect = this.f45046k;
        if (rect == null) {
            canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f45045j);
        } else if (t(i10, bitmap, rect.width(), rect.height())) {
            canvas.drawPath(this.f45049n, this.f45045j);
        } else {
            canvas.drawBitmap(bitmap, (Rect) null, rect, this.f45045j);
        }
    }

    private final boolean p(int i10, CloseableReference closeableReference, Canvas canvas, int i11) {
        if (closeableReference != null && CloseableReference.F0(closeableReference)) {
            Object C0 = closeableReference.C0();
            Intrinsics.checkNotNullExpressionValue(C0, "get(...)");
            o(i10, (Bitmap) C0, canvas);
            if (i11 != 3 && !this.f45040e) {
                this.f45037b.b(i10, closeableReference, i11);
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
            if (this.f45040e) {
                r9.a aVar = this.f45041f;
                if (aVar != null) {
                    closeableReference = aVar.c(i10, canvas.getWidth(), canvas.getHeight());
                } else {
                    closeableReference = null;
                }
                if (closeableReference != null) {
                    try {
                        if (closeableReference.E0()) {
                            Object C0 = closeableReference.C0();
                            Intrinsics.checkNotNullExpressionValue(C0, "get(...)");
                            o(i10, (Bitmap) C0, canvas);
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
                r9.a aVar2 = this.f45041f;
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
                        e10 = this.f45037b.c(i10);
                        p10 = p(i10, e10, canvas, 3);
                        i12 = -1;
                    } else {
                        try {
                            e10 = this.f45036a.b(this.f45047l, this.f45048m, this.f45044i);
                            if (r(i10, e10) && p(i10, e10, canvas, 2)) {
                                z10 = true;
                            }
                            p10 = z10;
                            i12 = 3;
                        } catch (RuntimeException e11) {
                            p8.a.G(f45035s, "Failed to create frame bitmap", e11);
                            CloseableReference.N(null);
                            return false;
                        }
                    }
                } else {
                    e10 = this.f45037b.d(i10, this.f45047l, this.f45048m);
                    if (r(i10, e10) && p(i10, e10, canvas, 1)) {
                        z10 = true;
                    }
                    p10 = z10;
                    i12 = 2;
                }
            } else {
                e10 = this.f45037b.e(i10);
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
        if (closeableReference != null && closeableReference.E0()) {
            c cVar = this.f45039d;
            Object C0 = closeableReference.C0();
            Intrinsics.checkNotNullExpressionValue(C0, "get(...)");
            boolean a10 = cVar.a(i10, (Bitmap) C0);
            if (!a10) {
                CloseableReference.N(closeableReference);
            }
            return a10;
        }
        return false;
    }

    private final void s() {
        int i10;
        int e10 = this.f45039d.e();
        this.f45047l = e10;
        int i11 = -1;
        if (e10 == -1) {
            Rect rect = this.f45046k;
            if (rect != null) {
                i10 = rect.width();
            } else {
                i10 = -1;
            }
            this.f45047l = i10;
        }
        int c10 = this.f45039d.c();
        this.f45048m = c10;
        if (c10 == -1) {
            Rect rect2 = this.f45046k;
            if (rect2 != null) {
                i11 = rect2.height();
            }
            this.f45048m = i11;
        }
    }

    private final boolean t(int i10, Bitmap bitmap, float f10, float f11) {
        if (this.f45043h == null) {
            return false;
        }
        if (i10 == this.f45051p) {
            return true;
        }
        Shader.TileMode tileMode = Shader.TileMode.CLAMP;
        BitmapShader bitmapShader = new BitmapShader(bitmap, tileMode, tileMode);
        this.f45050o.setRectToRect(new RectF(0.0f, 0.0f, this.f45047l, this.f45048m), new RectF(0.0f, 0.0f, f10, f11), Matrix.ScaleToFit.FILL);
        bitmapShader.setLocalMatrix(this.f45050o);
        this.f45045j.setShader(bitmapShader);
        this.f45049n.addRoundRect(new RectF(0.0f, 0.0f, f10, f11), this.f45043h, Path.Direction.CW);
        this.f45051p = i10;
        return true;
    }

    @Override // o9.d
    public int a() {
        return this.f45038c.a();
    }

    @Override // o9.d
    public int b() {
        return this.f45038c.b();
    }

    @Override // o9.a
    public int c() {
        return this.f45048m;
    }

    @Override // o9.a
    public void clear() {
        if (this.f45040e) {
            r9.a aVar = this.f45041f;
            if (aVar != null) {
                aVar.d();
                return;
            }
            return;
        }
        this.f45037b.clear();
    }

    @Override // o9.a
    public void d(Rect rect) {
        this.f45046k = rect;
        this.f45039d.d(rect);
        s();
    }

    @Override // o9.a
    public int e() {
        return this.f45047l;
    }

    @Override // o9.a
    public void f(ColorFilter colorFilter) {
        this.f45045j.setColorFilter(colorFilter);
    }

    @Override // o9.d
    public int g() {
        return this.f45038c.g();
    }

    @Override // o9.a
    public boolean h(Drawable parent, Canvas canvas, int i10) {
        r9.b bVar;
        r9.a aVar;
        Intrinsics.checkNotNullParameter(parent, "parent");
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        boolean q10 = q(canvas, i10, 0);
        if (!this.f45040e && (bVar = this.f45042g) != null && (aVar = this.f45041f) != null) {
            a.C0595a.f(aVar, bVar, this.f45037b, this, i10, null, 16, null);
        }
        return q10;
    }

    @Override // o9.c.b
    public void i() {
        if (this.f45040e) {
            r9.a aVar = this.f45041f;
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
        return this.f45038c.j();
    }

    @Override // o9.a
    public void k(a.InterfaceC0540a interfaceC0540a) {
        this.f45052q = interfaceC0540a;
    }

    @Override // o9.d
    public int l(int i10) {
        return this.f45038c.l(i10);
    }

    @Override // o9.a
    public void m(int i10) {
        this.f45045j.setAlpha(i10);
    }

    @Override // o9.d
    public int n() {
        return this.f45038c.n();
    }
}
