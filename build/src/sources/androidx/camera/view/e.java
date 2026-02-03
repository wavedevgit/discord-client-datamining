package androidx.camera.view;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.util.Size;
import android.view.Display;
import android.view.TextureView;
import android.view.View;
import androidx.camera.view.PreviewView;
import x.w1;
import x.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: i  reason: collision with root package name */
    private static final PreviewView.d f2102i = PreviewView.d.FILL_CENTER;

    /* renamed from: a  reason: collision with root package name */
    private Size f2103a;

    /* renamed from: b  reason: collision with root package name */
    private Rect f2104b;

    /* renamed from: c  reason: collision with root package name */
    private int f2105c;

    /* renamed from: d  reason: collision with root package name */
    private Matrix f2106d;

    /* renamed from: e  reason: collision with root package name */
    private int f2107e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f2108f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f2109g;

    /* renamed from: h  reason: collision with root package name */
    private PreviewView.d f2110h = f2102i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f2111a;

        static {
            int[] iArr = new int[PreviewView.d.values().length];
            f2111a = iArr;
            try {
                iArr[PreviewView.d.FIT_CENTER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f2111a[PreviewView.d.FILL_CENTER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f2111a[PreviewView.d.FIT_END.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f2111a[PreviewView.d.FILL_END.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f2111a[PreviewView.d.FIT_START.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f2111a[PreviewView.d.FILL_START.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    private static RectF b(RectF rectF, float f10) {
        float f11 = f10 + f10;
        return new RectF(f11 - rectF.right, rectF.top, f11 - rectF.left, rectF.bottom);
    }

    private int e() {
        if (!this.f2109g) {
            return this.f2105c;
        }
        return -b0.c.b(this.f2107e);
    }

    private Size f() {
        if (b0.q.i(this.f2105c)) {
            return new Size(this.f2104b.height(), this.f2104b.width());
        }
        return new Size(this.f2104b.width(), this.f2104b.height());
    }

    private RectF l(Size size, int i10) {
        b2.e.i(m());
        Matrix j10 = j(size, i10);
        RectF rectF = new RectF(0.0f, 0.0f, this.f2103a.getWidth(), this.f2103a.getHeight());
        j10.mapRect(rectF);
        return rectF;
    }

    private boolean m() {
        boolean z10;
        if (this.f2109g && this.f2107e == -1) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (this.f2104b != null && this.f2103a != null && z10) {
            return true;
        }
        return false;
    }

    private static void p(Matrix matrix, RectF rectF, RectF rectF2, PreviewView.d dVar) {
        Matrix.ScaleToFit scaleToFit;
        switch (a.f2111a[dVar.ordinal()]) {
            case 1:
            case 2:
                scaleToFit = Matrix.ScaleToFit.CENTER;
                break;
            case 3:
            case 4:
                scaleToFit = Matrix.ScaleToFit.END;
                break;
            case 5:
            case 6:
                scaleToFit = Matrix.ScaleToFit.START;
                break;
            default:
                y0.c("PreviewTransform", "Unexpected crop rect: " + dVar);
                scaleToFit = Matrix.ScaleToFit.FILL;
                break;
        }
        if (dVar != PreviewView.d.FIT_CENTER && dVar != PreviewView.d.FIT_START && dVar != PreviewView.d.FIT_END) {
            matrix.setRectToRect(rectF2, rectF, scaleToFit);
            matrix.invert(matrix);
            return;
        }
        matrix.setRectToRect(rectF, rectF2, scaleToFit);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Bitmap a(Bitmap bitmap, Size size, int i10) {
        if (!m()) {
            return bitmap;
        }
        Matrix k10 = k();
        RectF l10 = l(size, i10);
        Bitmap createBitmap = Bitmap.createBitmap(size.getWidth(), size.getHeight(), bitmap.getConfig());
        Canvas canvas = new Canvas(createBitmap);
        Matrix matrix = new Matrix();
        matrix.postConcat(k10);
        matrix.postScale(l10.width() / this.f2103a.getWidth(), l10.height() / this.f2103a.getHeight());
        matrix.postTranslate(l10.left, l10.top);
        canvas.drawBitmap(bitmap, matrix, new Paint(7));
        return createBitmap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix c(Size size, int i10, Rect rect) {
        if (!m()) {
            return null;
        }
        Matrix matrix = new Matrix();
        h(size, i10).invert(matrix);
        Matrix matrix2 = new Matrix();
        matrix2.setRectToRect(new RectF(0.0f, 0.0f, rect.width(), rect.height()), new RectF(0.0f, 0.0f, 1.0f, 1.0f), Matrix.ScaleToFit.FILL);
        matrix.postConcat(matrix2);
        return matrix;
    }

    RectF d(Size size, int i10) {
        RectF rectF = new RectF(0.0f, 0.0f, size.getWidth(), size.getHeight());
        Size f10 = f();
        RectF rectF2 = new RectF(0.0f, 0.0f, f10.getWidth(), f10.getHeight());
        Matrix matrix = new Matrix();
        p(matrix, rectF2, rectF, this.f2110h);
        matrix.mapRect(rectF2);
        if (i10 == 1) {
            return b(rectF2, size.getWidth() / 2.0f);
        }
        return rectF2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public PreviewView.d g() {
        return this.f2110h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix h(Size size, int i10) {
        if (!m()) {
            return null;
        }
        Matrix matrix = new Matrix(this.f2106d);
        matrix.postConcat(j(size, i10));
        return matrix;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Rect i() {
        return this.f2104b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Matrix j(Size size, int i10) {
        RectF d10;
        b2.e.i(m());
        if (n(size)) {
            d10 = new RectF(0.0f, 0.0f, size.getWidth(), size.getHeight());
        } else {
            d10 = d(size, i10);
        }
        Matrix d11 = b0.q.d(new RectF(this.f2104b), d10, this.f2105c);
        if (this.f2108f && this.f2109g) {
            if (b0.q.i(this.f2105c)) {
                d11.preScale(1.0f, -1.0f, this.f2104b.centerX(), this.f2104b.centerY());
                return d11;
            }
            d11.preScale(-1.0f, 1.0f, this.f2104b.centerX(), this.f2104b.centerY());
        }
        return d11;
    }

    Matrix k() {
        b2.e.i(m());
        RectF rectF = new RectF(0.0f, 0.0f, this.f2103a.getWidth(), this.f2103a.getHeight());
        return b0.q.d(rectF, rectF, e());
    }

    boolean n(Size size) {
        return b0.q.k(size, true, f(), false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void o(int i10, int i11) {
        if (!this.f2109g) {
            return;
        }
        this.f2105c = i10;
        this.f2107e = i11;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void q(PreviewView.d dVar) {
        this.f2110h = dVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void r(w1.h hVar, Size size, boolean z10) {
        y0.a("PreviewTransform", "Transformation info set: " + hVar + " " + size + " " + z10);
        this.f2104b = hVar.a();
        this.f2105c = hVar.b();
        this.f2107e = hVar.d();
        this.f2103a = size;
        this.f2108f = z10;
        this.f2109g = hVar.e();
        this.f2106d = hVar.c();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(Size size, int i10, View view) {
        boolean z10;
        if (size.getHeight() != 0 && size.getWidth() != 0) {
            if (!m()) {
                return;
            }
            if (view instanceof TextureView) {
                ((TextureView) view).setTransform(k());
            } else {
                Display display = view.getDisplay();
                boolean z11 = false;
                if (this.f2109g && display != null && display.getRotation() != this.f2107e) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!this.f2109g && e() != 0) {
                    z11 = true;
                }
                if (z10 || z11) {
                    y0.c("PreviewTransform", "Custom rotation not supported with SurfaceView/PERFORMANCE mode.");
                }
            }
            RectF l10 = l(size, i10);
            view.setPivotX(0.0f);
            view.setPivotY(0.0f);
            view.setScaleX(l10.width() / this.f2103a.getWidth());
            view.setScaleY(l10.height() / this.f2103a.getHeight());
            view.setTranslationX(l10.left - view.getLeft());
            view.setTranslationY(l10.top - view.getTop());
            return;
        }
        y0.l("PreviewTransform", "Transform not applied due to PreviewView size: " + size);
    }
}
