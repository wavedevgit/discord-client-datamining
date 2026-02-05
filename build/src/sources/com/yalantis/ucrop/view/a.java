package com.yalantis.ucrop.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.os.AsyncTask;
import android.util.AttributeSet;
import com.yalantis.ucrop.task.BitmapCropTask;
import com.yalantis.ucrop.view.b;
import java.lang.ref.WeakReference;
import java.util.Arrays;
import tq.h;
import uq.c;
import vq.d;
import xq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a extends com.yalantis.ucrop.view.b {
    private final RectF A;
    private final Matrix B;
    private float C;
    private float D;
    private c E;
    private Runnable F;
    private Runnable G;
    private float H;
    private float I;
    private int J;
    private int K;
    private long L;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: com.yalantis.ucrop.view.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class RunnableC0268a implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final WeakReference f19943d;

        /* renamed from: e  reason: collision with root package name */
        private final long f19944e;

        /* renamed from: i  reason: collision with root package name */
        private final long f19945i = System.currentTimeMillis();

        /* renamed from: o  reason: collision with root package name */
        private final float f19946o;

        /* renamed from: p  reason: collision with root package name */
        private final float f19947p;

        /* renamed from: q  reason: collision with root package name */
        private final float f19948q;

        /* renamed from: r  reason: collision with root package name */
        private final float f19949r;

        /* renamed from: s  reason: collision with root package name */
        private final float f19950s;

        /* renamed from: t  reason: collision with root package name */
        private final float f19951t;

        /* renamed from: u  reason: collision with root package name */
        private final boolean f19952u;

        public RunnableC0268a(a aVar, long j10, float f10, float f11, float f12, float f13, float f14, float f15, boolean z10) {
            this.f19943d = new WeakReference(aVar);
            this.f19944e = j10;
            this.f19946o = f10;
            this.f19947p = f11;
            this.f19948q = f12;
            this.f19949r = f13;
            this.f19950s = f14;
            this.f19951t = f15;
            this.f19952u = z10;
        }

        @Override // java.lang.Runnable
        public void run() {
            a aVar = (a) this.f19943d.get();
            if (aVar != null) {
                float min = (float) Math.min(this.f19944e, System.currentTimeMillis() - this.f19945i);
                float b10 = xq.b.b(min, 0.0f, this.f19948q, (float) this.f19944e);
                float b11 = xq.b.b(min, 0.0f, this.f19949r, (float) this.f19944e);
                float a10 = xq.b.a(min, 0.0f, this.f19951t, (float) this.f19944e);
                if (min < ((float) this.f19944e)) {
                    float[] fArr = aVar.f19961e;
                    aVar.m(b10 - (fArr[0] - this.f19946o), b11 - (fArr[1] - this.f19947p));
                    if (!this.f19952u) {
                        aVar.D(this.f19950s + a10, aVar.A.centerX(), aVar.A.centerY());
                    }
                    if (!aVar.v()) {
                        aVar.post(this);
                    }
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private final WeakReference f19953d;

        /* renamed from: e  reason: collision with root package name */
        private final long f19954e;

        /* renamed from: i  reason: collision with root package name */
        private final long f19955i = System.currentTimeMillis();

        /* renamed from: o  reason: collision with root package name */
        private final float f19956o;

        /* renamed from: p  reason: collision with root package name */
        private final float f19957p;

        /* renamed from: q  reason: collision with root package name */
        private final float f19958q;

        /* renamed from: r  reason: collision with root package name */
        private final float f19959r;

        public b(a aVar, long j10, float f10, float f11, float f12, float f13) {
            this.f19953d = new WeakReference(aVar);
            this.f19954e = j10;
            this.f19956o = f10;
            this.f19957p = f11;
            this.f19958q = f12;
            this.f19959r = f13;
        }

        @Override // java.lang.Runnable
        public void run() {
            a aVar = (a) this.f19953d.get();
            if (aVar == null) {
                return;
            }
            float min = (float) Math.min(this.f19954e, System.currentTimeMillis() - this.f19955i);
            float a10 = xq.b.a(min, 0.0f, this.f19957p, (float) this.f19954e);
            if (min < ((float) this.f19954e)) {
                aVar.D(this.f19956o + a10, this.f19958q, this.f19959r);
                aVar.post(this);
                return;
            }
            aVar.z();
        }
    }

    public a(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.A = new RectF();
        this.B = new Matrix();
        this.D = 10.0f;
        this.G = null;
        this.J = 0;
        this.K = 0;
        this.L = 500L;
    }

    private void A(float f10, float f11) {
        float width = this.A.width();
        float height = this.A.height();
        float max = Math.max(this.A.width() / f10, this.A.height() / f11);
        RectF rectF = this.A;
        float f12 = ((height - (f11 * max)) / 2.0f) + rectF.top;
        this.f19963o.reset();
        this.f19963o.postScale(max, max);
        this.f19963o.postTranslate(((width - (f10 * max)) / 2.0f) + rectF.left, f12);
        setImageMatrix(this.f19963o);
    }

    private float[] q() {
        this.B.reset();
        this.B.setRotate(-getCurrentAngle());
        float[] fArr = this.f19960d;
        float[] copyOf = Arrays.copyOf(fArr, fArr.length);
        float[] b10 = g.b(this.A);
        this.B.mapPoints(copyOf);
        this.B.mapPoints(b10);
        RectF d10 = g.d(copyOf);
        RectF d11 = g.d(b10);
        float f10 = d10.left - d11.left;
        float f11 = d10.top - d11.top;
        float f12 = d10.right - d11.right;
        float f13 = d10.bottom - d11.bottom;
        if (f10 <= 0.0f) {
            f10 = 0.0f;
        }
        if (f11 <= 0.0f) {
            f11 = 0.0f;
        }
        if (f12 >= 0.0f) {
            f12 = 0.0f;
        }
        if (f13 >= 0.0f) {
            f13 = 0.0f;
        }
        float[] fArr2 = {f10, f11, f12, f13};
        this.B.reset();
        this.B.setRotate(getCurrentAngle());
        this.B.mapPoints(fArr2);
        return fArr2;
    }

    private void r() {
        Drawable drawable = getDrawable();
        if (drawable == null) {
            return;
        }
        s(drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
    }

    private void s(float f10, float f11) {
        float min = Math.min(Math.min(this.A.width() / f10, this.A.width() / f11), Math.min(this.A.height() / f11, this.A.height() / f10));
        this.I = min;
        this.H = min * this.D;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void B(float f10, float f11, float f12, long j10) {
        if (f10 > getMaxScale()) {
            f10 = getMaxScale();
        }
        float currentScale = getCurrentScale();
        b bVar = new b(this, j10, currentScale, f10 - currentScale, f11, f12);
        this.G = bVar;
        post(bVar);
    }

    public void C(float f10) {
        D(f10, this.A.centerX(), this.A.centerY());
    }

    public void D(float f10, float f11, float f12) {
        if (f10 <= getMaxScale()) {
            l(f10 / getCurrentScale(), f11, f12);
        }
    }

    public void E(float f10) {
        F(f10, this.A.centerX(), this.A.centerY());
    }

    public void F(float f10, float f11, float f12) {
        if (f10 >= getMinScale()) {
            l(f10 / getCurrentScale(), f11, f12);
        }
    }

    public c getCropBoundsChangeListener() {
        return this.E;
    }

    public float getMaxScale() {
        return this.H;
    }

    public float getMinScale() {
        return this.I;
    }

    public float getTargetAspectRatio() {
        return this.C;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.yalantis.ucrop.view.b
    public void j() {
        int i10;
        int i11;
        int i12;
        super.j();
        Drawable drawable = getDrawable();
        if (drawable != null) {
            float intrinsicWidth = drawable.getIntrinsicWidth();
            float intrinsicHeight = drawable.getIntrinsicHeight();
            if (this.C == 0.0f) {
                this.C = intrinsicWidth / intrinsicHeight;
            }
            int i13 = this.f19964p;
            float f10 = this.C;
            int i14 = (int) (i13 / f10);
            int i15 = this.f19965q;
            if (i14 > i15) {
                this.A.set((i13 - ((int) (i15 * f10))) / 2, 0.0f, i11 + i12, i15);
            } else {
                this.A.set(0.0f, (i15 - i14) / 2, i13, i14 + i10);
            }
            s(intrinsicWidth, intrinsicHeight);
            A(intrinsicWidth, intrinsicHeight);
            c cVar = this.E;
            if (cVar != null) {
                cVar.a(this.C);
            }
            b.InterfaceC0269b interfaceC0269b = this.f19966r;
            if (interfaceC0269b != null) {
                interfaceC0269b.c(getCurrentScale());
                this.f19966r.d(getCurrentAngle());
            }
        }
    }

    @Override // com.yalantis.ucrop.view.b
    public void l(float f10, float f11, float f12) {
        if (f10 > 1.0f && getCurrentScale() * f10 <= getMaxScale()) {
            super.l(f10, f11, f12);
        } else if (f10 < 1.0f && getCurrentScale() * f10 >= getMinScale()) {
            super.l(f10, f11, f12);
        }
    }

    public void setCropBoundsChangeListener(c cVar) {
        this.E = cVar;
    }

    public void setCropRect(RectF rectF) {
        this.C = rectF.width() / rectF.height();
        this.A.set(rectF.left - getPaddingLeft(), rectF.top - getPaddingTop(), rectF.right - getPaddingRight(), rectF.bottom - getPaddingBottom());
        r();
        z();
    }

    public void setImageToWrapCropBounds(boolean z10) {
        float f10;
        float max;
        if (this.f19970v && !v()) {
            float[] fArr = this.f19961e;
            float f11 = fArr[0];
            float f12 = fArr[1];
            float currentScale = getCurrentScale();
            float centerX = this.A.centerX() - f11;
            float centerY = this.A.centerY() - f12;
            this.B.reset();
            this.B.setTranslate(centerX, centerY);
            float[] fArr2 = this.f19960d;
            float[] copyOf = Arrays.copyOf(fArr2, fArr2.length);
            this.B.mapPoints(copyOf);
            boolean w10 = w(copyOf);
            if (w10) {
                float[] q10 = q();
                centerY = -(q10[1] + q10[3]);
                max = 0.0f;
                f10 = -(q10[0] + q10[2]);
            } else {
                RectF rectF = new RectF(this.A);
                this.B.reset();
                this.B.setRotate(getCurrentAngle());
                this.B.mapRect(rectF);
                float[] c10 = g.c(this.f19960d);
                f10 = centerX;
                max = (Math.max(rectF.width() / c10[0], rectF.height() / c10[1]) * currentScale) - currentScale;
            }
            float f13 = centerY;
            if (z10) {
                RunnableC0268a runnableC0268a = new RunnableC0268a(this, this.L, f11, f12, f10, f13, currentScale, max, w10);
                this.F = runnableC0268a;
                post(runnableC0268a);
                return;
            }
            m(f10, f13);
            if (!w10) {
                D(currentScale + max, this.A.centerX(), this.A.centerY());
            }
        }
    }

    public void setImageToWrapCropBoundsAnimDuration(long j10) {
        if (j10 > 0) {
            this.L = j10;
            return;
        }
        throw new IllegalArgumentException("Animation duration cannot be negative value.");
    }

    public void setMaxResultImageSizeX(int i10) {
        this.J = i10;
    }

    public void setMaxResultImageSizeY(int i10) {
        this.K = i10;
    }

    public void setMaxScaleMultiplier(float f10) {
        this.D = f10;
    }

    public void setTargetAspectRatio(float f10) {
        Drawable drawable = getDrawable();
        if (drawable == null) {
            this.C = f10;
            return;
        }
        if (f10 == 0.0f) {
            this.C = drawable.getIntrinsicWidth() / drawable.getIntrinsicHeight();
        } else {
            this.C = f10;
        }
        c cVar = this.E;
        if (cVar != null) {
            cVar.a(this.C);
        }
    }

    public void t() {
        removeCallbacks(this.F);
        removeCallbacks(this.G);
    }

    public void u(Bitmap.CompressFormat compressFormat, int i10, uq.a aVar) {
        t();
        setImageToWrapCropBounds(false);
        new BitmapCropTask(getViewBitmap(), new d(this.A, g.d(this.f19960d), getCurrentScale(), getCurrentAngle()), new vq.b(this.J, this.K, compressFormat, i10, getImageInputPath(), getImageOutputPath(), getExifInfo()), aVar).executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR, new Void[0]);
    }

    protected boolean v() {
        return w(this.f19960d);
    }

    protected boolean w(float[] fArr) {
        this.B.reset();
        this.B.setRotate(-getCurrentAngle());
        float[] copyOf = Arrays.copyOf(fArr, fArr.length);
        this.B.mapPoints(copyOf);
        float[] b10 = g.b(this.A);
        this.B.mapPoints(b10);
        return g.d(copyOf).contains(g.d(b10));
    }

    public void x(float f10) {
        k(f10, this.A.centerX(), this.A.centerY());
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void y(TypedArray typedArray) {
        float abs = Math.abs(typedArray.getFloat(h.f50987f, 0.0f));
        float abs2 = Math.abs(typedArray.getFloat(h.f50988g, 0.0f));
        if (abs != 0.0f && abs2 != 0.0f) {
            this.C = abs / abs2;
        } else {
            this.C = 0.0f;
        }
    }

    public void z() {
        setImageToWrapCropBounds(true);
    }
}
