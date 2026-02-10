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
import ar.d;
import ar.g;
import yq.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends m {

    /* renamed from: d  reason: collision with root package name */
    protected final float[] f20080d;

    /* renamed from: e  reason: collision with root package name */
    protected final float[] f20081e;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f20082i;

    /* renamed from: o  reason: collision with root package name */
    protected Matrix f20083o;

    /* renamed from: p  reason: collision with root package name */
    protected int f20084p;

    /* renamed from: q  reason: collision with root package name */
    protected int f20085q;

    /* renamed from: r  reason: collision with root package name */
    protected InterfaceC0288b f20086r;

    /* renamed from: s  reason: collision with root package name */
    private float[] f20087s;

    /* renamed from: t  reason: collision with root package name */
    private float[] f20088t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f20089u;

    /* renamed from: v  reason: collision with root package name */
    protected boolean f20090v;

    /* renamed from: w  reason: collision with root package name */
    private int f20091w;

    /* renamed from: x  reason: collision with root package name */
    private String f20092x;

    /* renamed from: y  reason: collision with root package name */
    private String f20093y;

    /* renamed from: z  reason: collision with root package name */
    private c f20094z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements xq.b {
        a() {
        }

        @Override // xq.b
        public void a(Bitmap bitmap, c cVar, String str, String str2) {
            b.this.f20092x = str;
            b.this.f20093y = str2;
            b.this.f20094z = cVar;
            b bVar = b.this;
            bVar.f20089u = true;
            bVar.setImageBitmap(bitmap);
        }

        @Override // xq.b
        public void onFailure(Exception exc) {
            Log.e("TransformImageView", "onFailure: setImageUri", exc);
            InterfaceC0288b interfaceC0288b = b.this.f20086r;
            if (interfaceC0288b != null) {
                interfaceC0288b.b(exc);
            }
        }
    }

    /* renamed from: com.yalantis.ucrop.view.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0288b {
        void a();

        void b(Exception exc);

        void c(float f10);

        void d(float f10);
    }

    public b(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20080d = new float[8];
        this.f20081e = new float[2];
        this.f20082i = new float[9];
        this.f20083o = new Matrix();
        this.f20089u = false;
        this.f20090v = false;
        this.f20091w = 0;
        i();
    }

    private void o() {
        this.f20083o.mapPoints(this.f20080d, this.f20087s);
        this.f20083o.mapPoints(this.f20081e, this.f20088t);
    }

    public float f(Matrix matrix) {
        return (float) (-(Math.atan2(h(matrix, 1), h(matrix, 0)) * 57.29577951308232d));
    }

    public float g(Matrix matrix) {
        return (float) Math.sqrt(Math.pow(h(matrix, 0), 2.0d) + Math.pow(h(matrix, 3), 2.0d));
    }

    public float getCurrentAngle() {
        return f(this.f20083o);
    }

    public float getCurrentScale() {
        return g(this.f20083o);
    }

    public c getExifInfo() {
        return this.f20094z;
    }

    public String getImageInputPath() {
        return this.f20092x;
    }

    public String getImageOutputPath() {
        return this.f20093y;
    }

    public int getMaxBitmapSize() {
        if (this.f20091w <= 0) {
            this.f20091w = ar.a.b(getContext());
        }
        return this.f20091w;
    }

    public Bitmap getViewBitmap() {
        if (getDrawable() != null && (getDrawable() instanceof d)) {
            return ((d) getDrawable()).a();
        }
        return null;
    }

    protected float h(Matrix matrix, int i10) {
        matrix.getValues(this.f20082i);
        return this.f20082i[i10];
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
            this.f20087s = g.b(rectF);
            this.f20088t = g.a(rectF);
            this.f20090v = true;
            InterfaceC0288b interfaceC0288b = this.f20086r;
            if (interfaceC0288b != null) {
                interfaceC0288b.a();
            }
        }
    }

    public void k(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f20083o.postRotate(f10, f11, f12);
            setImageMatrix(this.f20083o);
            InterfaceC0288b interfaceC0288b = this.f20086r;
            if (interfaceC0288b != null) {
                interfaceC0288b.d(f(this.f20083o));
            }
        }
    }

    public void l(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f20083o.postScale(f10, f10, f11, f12);
            setImageMatrix(this.f20083o);
            InterfaceC0288b interfaceC0288b = this.f20086r;
            if (interfaceC0288b != null) {
                interfaceC0288b.c(g(this.f20083o));
            }
        }
    }

    public void m(float f10, float f11) {
        if (f10 == 0.0f && f11 == 0.0f) {
            return;
        }
        this.f20083o.postTranslate(f10, f11);
        setImageMatrix(this.f20083o);
    }

    public void n(Uri uri, Uri uri2) {
        int maxBitmapSize = getMaxBitmapSize();
        ar.a.d(getContext(), uri, uri2, maxBitmapSize, maxBitmapSize, new a());
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (!z10 && (!this.f20089u || this.f20090v)) {
            return;
        }
        int paddingLeft = getPaddingLeft();
        int paddingTop = getPaddingTop();
        this.f20084p = (getWidth() - getPaddingRight()) - paddingLeft;
        this.f20085q = (getHeight() - getPaddingBottom()) - paddingTop;
        j();
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        setImageDrawable(new d(bitmap));
    }

    @Override // android.widget.ImageView
    public void setImageMatrix(Matrix matrix) {
        super.setImageMatrix(matrix);
        this.f20083o.set(matrix);
        o();
    }

    public void setMaxBitmapSize(int i10) {
        this.f20091w = i10;
    }

    @Override // android.widget.ImageView
    public void setScaleType(ImageView.ScaleType scaleType) {
        if (scaleType == ImageView.ScaleType.MATRIX) {
            super.setScaleType(scaleType);
        } else {
            Log.w("TransformImageView", "Invalid ScaleType. Only ScaleType.MATRIX can be used");
        }
    }

    public void setTransformImageListener(InterfaceC0288b interfaceC0288b) {
        this.f20086r = interfaceC0288b;
    }
}
