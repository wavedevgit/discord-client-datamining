package com.yalantis.ucrop.view;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Matrix;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.util.AttributeSet;
import android.util.Log;
import android.widget.ImageView;
import androidx.appcompat.widget.m;
import vq.c;
import xq.d;
import xq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends m {

    /* renamed from: d  reason: collision with root package name */
    protected final float[] f19960d;

    /* renamed from: e  reason: collision with root package name */
    protected final float[] f19961e;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f19962i;

    /* renamed from: o  reason: collision with root package name */
    protected Matrix f19963o;

    /* renamed from: p  reason: collision with root package name */
    protected int f19964p;

    /* renamed from: q  reason: collision with root package name */
    protected int f19965q;

    /* renamed from: r  reason: collision with root package name */
    protected InterfaceC0269b f19966r;

    /* renamed from: s  reason: collision with root package name */
    private float[] f19967s;

    /* renamed from: t  reason: collision with root package name */
    private float[] f19968t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f19969u;

    /* renamed from: v  reason: collision with root package name */
    protected boolean f19970v;

    /* renamed from: w  reason: collision with root package name */
    private int f19971w;

    /* renamed from: x  reason: collision with root package name */
    private String f19972x;

    /* renamed from: y  reason: collision with root package name */
    private String f19973y;

    /* renamed from: z  reason: collision with root package name */
    private c f19974z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements uq.b {
        a() {
        }

        @Override // uq.b
        public void a(Bitmap bitmap, c cVar, String str, String str2) {
            b.this.f19972x = str;
            b.this.f19973y = str2;
            b.this.f19974z = cVar;
            b bVar = b.this;
            bVar.f19969u = true;
            bVar.setImageBitmap(bitmap);
        }

        @Override // uq.b
        public void onFailure(Exception exc) {
            Log.e("TransformImageView", "onFailure: setImageUri", exc);
            InterfaceC0269b interfaceC0269b = b.this.f19966r;
            if (interfaceC0269b != null) {
                interfaceC0269b.b(exc);
            }
        }
    }

    /* renamed from: com.yalantis.ucrop.view.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0269b {
        void a();

        void b(Exception exc);

        void c(float f10);

        void d(float f10);
    }

    public b(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19960d = new float[8];
        this.f19961e = new float[2];
        this.f19962i = new float[9];
        this.f19963o = new Matrix();
        this.f19969u = false;
        this.f19970v = false;
        this.f19971w = 0;
        i();
    }

    private void o() {
        this.f19963o.mapPoints(this.f19960d, this.f19967s);
        this.f19963o.mapPoints(this.f19961e, this.f19968t);
    }

    public float f(Matrix matrix) {
        return (float) (-(Math.atan2(h(matrix, 1), h(matrix, 0)) * 57.29577951308232d));
    }

    public float g(Matrix matrix) {
        return (float) Math.sqrt(Math.pow(h(matrix, 0), 2.0d) + Math.pow(h(matrix, 3), 2.0d));
    }

    public float getCurrentAngle() {
        return f(this.f19963o);
    }

    public float getCurrentScale() {
        return g(this.f19963o);
    }

    public c getExifInfo() {
        return this.f19974z;
    }

    public String getImageInputPath() {
        return this.f19972x;
    }

    public String getImageOutputPath() {
        return this.f19973y;
    }

    public int getMaxBitmapSize() {
        if (this.f19971w <= 0) {
            this.f19971w = xq.a.b(getContext());
        }
        return this.f19971w;
    }

    public Bitmap getViewBitmap() {
        if (getDrawable() != null && (getDrawable() instanceof d)) {
            return ((d) getDrawable()).a();
        }
        return null;
    }

    protected float h(Matrix matrix, int i10) {
        matrix.getValues(this.f19962i);
        return this.f19962i[i10];
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void i() {
        setScaleType(ImageView.ScaleType.MATRIX);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void j() {
        Drawable drawable = getDrawable();
        if (drawable != null) {
            float intrinsicWidth = drawable.getIntrinsicWidth();
            float intrinsicHeight = drawable.getIntrinsicHeight();
            Log.d("TransformImageView", String.format("Image size: [%d:%d]", Integer.valueOf((int) intrinsicWidth), Integer.valueOf((int) intrinsicHeight)));
            RectF rectF = new RectF(0.0f, 0.0f, intrinsicWidth, intrinsicHeight);
            this.f19967s = g.b(rectF);
            this.f19968t = g.a(rectF);
            this.f19970v = true;
            InterfaceC0269b interfaceC0269b = this.f19966r;
            if (interfaceC0269b != null) {
                interfaceC0269b.a();
            }
        }
    }

    public void k(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f19963o.postRotate(f10, f11, f12);
            setImageMatrix(this.f19963o);
            InterfaceC0269b interfaceC0269b = this.f19966r;
            if (interfaceC0269b != null) {
                interfaceC0269b.d(f(this.f19963o));
            }
        }
    }

    public void l(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f19963o.postScale(f10, f10, f11, f12);
            setImageMatrix(this.f19963o);
            InterfaceC0269b interfaceC0269b = this.f19966r;
            if (interfaceC0269b != null) {
                interfaceC0269b.c(g(this.f19963o));
            }
        }
    }

    public void m(float f10, float f11) {
        if (f10 == 0.0f && f11 == 0.0f) {
            return;
        }
        this.f19963o.postTranslate(f10, f11);
        setImageMatrix(this.f19963o);
    }

    public void n(Uri uri, Uri uri2) {
        int maxBitmapSize = getMaxBitmapSize();
        xq.a.d(getContext(), uri, uri2, maxBitmapSize, maxBitmapSize, new a());
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (!z10 && (!this.f19969u || this.f19970v)) {
            return;
        }
        int paddingLeft = getPaddingLeft();
        int paddingTop = getPaddingTop();
        this.f19964p = (getWidth() - getPaddingRight()) - paddingLeft;
        this.f19965q = (getHeight() - getPaddingBottom()) - paddingTop;
        j();
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        setImageDrawable(new d(bitmap));
    }

    @Override // android.widget.ImageView
    public void setImageMatrix(Matrix matrix) {
        super.setImageMatrix(matrix);
        this.f19963o.set(matrix);
        o();
    }

    public void setMaxBitmapSize(int i10) {
        this.f19971w = i10;
    }

    @Override // android.widget.ImageView
    public void setScaleType(ImageView.ScaleType scaleType) {
        if (scaleType == ImageView.ScaleType.MATRIX) {
            super.setScaleType(scaleType);
        } else {
            Log.w("TransformImageView", "Invalid ScaleType. Only ScaleType.MATRIX can be used");
        }
    }

    public void setTransformImageListener(InterfaceC0269b interfaceC0269b) {
        this.f19966r = interfaceC0269b;
    }
}
