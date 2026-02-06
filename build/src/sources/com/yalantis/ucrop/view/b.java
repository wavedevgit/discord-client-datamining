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
import xq.c;
import zq.d;
import zq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends m {

    /* renamed from: d  reason: collision with root package name */
    protected final float[] f19940d;

    /* renamed from: e  reason: collision with root package name */
    protected final float[] f19941e;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f19942i;

    /* renamed from: o  reason: collision with root package name */
    protected Matrix f19943o;

    /* renamed from: p  reason: collision with root package name */
    protected int f19944p;

    /* renamed from: q  reason: collision with root package name */
    protected int f19945q;

    /* renamed from: r  reason: collision with root package name */
    protected InterfaceC0261b f19946r;

    /* renamed from: s  reason: collision with root package name */
    private float[] f19947s;

    /* renamed from: t  reason: collision with root package name */
    private float[] f19948t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f19949u;

    /* renamed from: v  reason: collision with root package name */
    protected boolean f19950v;

    /* renamed from: w  reason: collision with root package name */
    private int f19951w;

    /* renamed from: x  reason: collision with root package name */
    private String f19952x;

    /* renamed from: y  reason: collision with root package name */
    private String f19953y;

    /* renamed from: z  reason: collision with root package name */
    private c f19954z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements wq.b {
        a() {
        }

        @Override // wq.b
        public void a(Bitmap bitmap, c cVar, String str, String str2) {
            b.this.f19952x = str;
            b.this.f19953y = str2;
            b.this.f19954z = cVar;
            b bVar = b.this;
            bVar.f19949u = true;
            bVar.setImageBitmap(bitmap);
        }

        @Override // wq.b
        public void onFailure(Exception exc) {
            Log.e("TransformImageView", "onFailure: setImageUri", exc);
            InterfaceC0261b interfaceC0261b = b.this.f19946r;
            if (interfaceC0261b != null) {
                interfaceC0261b.b(exc);
            }
        }
    }

    /* renamed from: com.yalantis.ucrop.view.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0261b {
        void a();

        void b(Exception exc);

        void c(float f10);

        void d(float f10);
    }

    public b(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19940d = new float[8];
        this.f19941e = new float[2];
        this.f19942i = new float[9];
        this.f19943o = new Matrix();
        this.f19949u = false;
        this.f19950v = false;
        this.f19951w = 0;
        i();
    }

    private void o() {
        this.f19943o.mapPoints(this.f19940d, this.f19947s);
        this.f19943o.mapPoints(this.f19941e, this.f19948t);
    }

    public float f(Matrix matrix) {
        return (float) (-(Math.atan2(h(matrix, 1), h(matrix, 0)) * 57.29577951308232d));
    }

    public float g(Matrix matrix) {
        return (float) Math.sqrt(Math.pow(h(matrix, 0), 2.0d) + Math.pow(h(matrix, 3), 2.0d));
    }

    public float getCurrentAngle() {
        return f(this.f19943o);
    }

    public float getCurrentScale() {
        return g(this.f19943o);
    }

    public c getExifInfo() {
        return this.f19954z;
    }

    public String getImageInputPath() {
        return this.f19952x;
    }

    public String getImageOutputPath() {
        return this.f19953y;
    }

    public int getMaxBitmapSize() {
        if (this.f19951w <= 0) {
            this.f19951w = zq.a.b(getContext());
        }
        return this.f19951w;
    }

    public Bitmap getViewBitmap() {
        if (getDrawable() != null && (getDrawable() instanceof d)) {
            return ((d) getDrawable()).a();
        }
        return null;
    }

    protected float h(Matrix matrix, int i10) {
        matrix.getValues(this.f19942i);
        return this.f19942i[i10];
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
            this.f19947s = g.b(rectF);
            this.f19948t = g.a(rectF);
            this.f19950v = true;
            InterfaceC0261b interfaceC0261b = this.f19946r;
            if (interfaceC0261b != null) {
                interfaceC0261b.a();
            }
        }
    }

    public void k(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f19943o.postRotate(f10, f11, f12);
            setImageMatrix(this.f19943o);
            InterfaceC0261b interfaceC0261b = this.f19946r;
            if (interfaceC0261b != null) {
                interfaceC0261b.d(f(this.f19943o));
            }
        }
    }

    public void l(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f19943o.postScale(f10, f10, f11, f12);
            setImageMatrix(this.f19943o);
            InterfaceC0261b interfaceC0261b = this.f19946r;
            if (interfaceC0261b != null) {
                interfaceC0261b.c(g(this.f19943o));
            }
        }
    }

    public void m(float f10, float f11) {
        if (f10 == 0.0f && f11 == 0.0f) {
            return;
        }
        this.f19943o.postTranslate(f10, f11);
        setImageMatrix(this.f19943o);
    }

    public void n(Uri uri, Uri uri2) {
        int maxBitmapSize = getMaxBitmapSize();
        zq.a.d(getContext(), uri, uri2, maxBitmapSize, maxBitmapSize, new a());
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (!z10 && (!this.f19949u || this.f19950v)) {
            return;
        }
        int paddingLeft = getPaddingLeft();
        int paddingTop = getPaddingTop();
        this.f19944p = (getWidth() - getPaddingRight()) - paddingLeft;
        this.f19945q = (getHeight() - getPaddingBottom()) - paddingTop;
        j();
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        setImageDrawable(new d(bitmap));
    }

    @Override // android.widget.ImageView
    public void setImageMatrix(Matrix matrix) {
        super.setImageMatrix(matrix);
        this.f19943o.set(matrix);
        o();
    }

    public void setMaxBitmapSize(int i10) {
        this.f19951w = i10;
    }

    @Override // android.widget.ImageView
    public void setScaleType(ImageView.ScaleType scaleType) {
        if (scaleType == ImageView.ScaleType.MATRIX) {
            super.setScaleType(scaleType);
        } else {
            Log.w("TransformImageView", "Invalid ScaleType. Only ScaleType.MATRIX can be used");
        }
    }

    public void setTransformImageListener(InterfaceC0261b interfaceC0261b) {
        this.f19946r = interfaceC0261b;
    }
}
