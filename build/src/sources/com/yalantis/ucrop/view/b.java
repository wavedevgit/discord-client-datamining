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
import hr.c;
import jr.d;
import jr.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends m {

    /* renamed from: d  reason: collision with root package name */
    protected final float[] f20960d;

    /* renamed from: e  reason: collision with root package name */
    protected final float[] f20961e;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f20962i;

    /* renamed from: o  reason: collision with root package name */
    protected Matrix f20963o;

    /* renamed from: p  reason: collision with root package name */
    protected int f20964p;

    /* renamed from: q  reason: collision with root package name */
    protected int f20965q;

    /* renamed from: r  reason: collision with root package name */
    protected InterfaceC0273b f20966r;

    /* renamed from: s  reason: collision with root package name */
    private float[] f20967s;

    /* renamed from: t  reason: collision with root package name */
    private float[] f20968t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f20969u;

    /* renamed from: v  reason: collision with root package name */
    protected boolean f20970v;

    /* renamed from: w  reason: collision with root package name */
    private int f20971w;

    /* renamed from: x  reason: collision with root package name */
    private String f20972x;

    /* renamed from: y  reason: collision with root package name */
    private String f20973y;

    /* renamed from: z  reason: collision with root package name */
    private c f20974z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements gr.b {
        a() {
        }

        @Override // gr.b
        public void a(Bitmap bitmap, c cVar, String str, String str2) {
            b.this.f20972x = str;
            b.this.f20973y = str2;
            b.this.f20974z = cVar;
            b bVar = b.this;
            bVar.f20969u = true;
            bVar.setImageBitmap(bitmap);
        }

        @Override // gr.b
        public void onFailure(Exception exc) {
            Log.e("TransformImageView", "onFailure: setImageUri", exc);
            InterfaceC0273b interfaceC0273b = b.this.f20966r;
            if (interfaceC0273b != null) {
                interfaceC0273b.b(exc);
            }
        }
    }

    /* renamed from: com.yalantis.ucrop.view.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0273b {
        void a();

        void b(Exception exc);

        void c(float f10);

        void d(float f10);
    }

    public b(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20960d = new float[8];
        this.f20961e = new float[2];
        this.f20962i = new float[9];
        this.f20963o = new Matrix();
        this.f20969u = false;
        this.f20970v = false;
        this.f20971w = 0;
        i();
    }

    private void o() {
        this.f20963o.mapPoints(this.f20960d, this.f20967s);
        this.f20963o.mapPoints(this.f20961e, this.f20968t);
    }

    public float f(Matrix matrix) {
        return (float) (-(Math.atan2(h(matrix, 1), h(matrix, 0)) * 57.29577951308232d));
    }

    public float g(Matrix matrix) {
        return (float) Math.sqrt(Math.pow(h(matrix, 0), 2.0d) + Math.pow(h(matrix, 3), 2.0d));
    }

    public float getCurrentAngle() {
        return f(this.f20963o);
    }

    public float getCurrentScale() {
        return g(this.f20963o);
    }

    public c getExifInfo() {
        return this.f20974z;
    }

    public String getImageInputPath() {
        return this.f20972x;
    }

    public String getImageOutputPath() {
        return this.f20973y;
    }

    public int getMaxBitmapSize() {
        if (this.f20971w <= 0) {
            this.f20971w = jr.a.b(getContext());
        }
        return this.f20971w;
    }

    public Bitmap getViewBitmap() {
        if (getDrawable() != null && (getDrawable() instanceof d)) {
            return ((d) getDrawable()).a();
        }
        return null;
    }

    protected float h(Matrix matrix, int i10) {
        matrix.getValues(this.f20962i);
        return this.f20962i[i10];
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
            this.f20967s = g.b(rectF);
            this.f20968t = g.a(rectF);
            this.f20970v = true;
            InterfaceC0273b interfaceC0273b = this.f20966r;
            if (interfaceC0273b != null) {
                interfaceC0273b.a();
            }
        }
    }

    public void k(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f20963o.postRotate(f10, f11, f12);
            setImageMatrix(this.f20963o);
            InterfaceC0273b interfaceC0273b = this.f20966r;
            if (interfaceC0273b != null) {
                interfaceC0273b.d(f(this.f20963o));
            }
        }
    }

    public void l(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f20963o.postScale(f10, f10, f11, f12);
            setImageMatrix(this.f20963o);
            InterfaceC0273b interfaceC0273b = this.f20966r;
            if (interfaceC0273b != null) {
                interfaceC0273b.c(g(this.f20963o));
            }
        }
    }

    public void m(float f10, float f11) {
        if (f10 == 0.0f && f11 == 0.0f) {
            return;
        }
        this.f20963o.postTranslate(f10, f11);
        setImageMatrix(this.f20963o);
    }

    public void n(Uri uri, Uri uri2) {
        int maxBitmapSize = getMaxBitmapSize();
        jr.a.d(getContext(), uri, uri2, maxBitmapSize, maxBitmapSize, new a());
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (!z10 && (!this.f20969u || this.f20970v)) {
            return;
        }
        int paddingLeft = getPaddingLeft();
        int paddingTop = getPaddingTop();
        this.f20964p = (getWidth() - getPaddingRight()) - paddingLeft;
        this.f20965q = (getHeight() - getPaddingBottom()) - paddingTop;
        j();
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        setImageDrawable(new d(bitmap));
    }

    @Override // android.widget.ImageView
    public void setImageMatrix(Matrix matrix) {
        super.setImageMatrix(matrix);
        this.f20963o.set(matrix);
        o();
    }

    public void setMaxBitmapSize(int i10) {
        this.f20971w = i10;
    }

    @Override // android.widget.ImageView
    public void setScaleType(ImageView.ScaleType scaleType) {
        if (scaleType == ImageView.ScaleType.MATRIX) {
            super.setScaleType(scaleType);
        } else {
            Log.w("TransformImageView", "Invalid ScaleType. Only ScaleType.MATRIX can be used");
        }
    }

    public void setTransformImageListener(InterfaceC0273b interfaceC0273b) {
        this.f20966r = interfaceC0273b;
    }
}
