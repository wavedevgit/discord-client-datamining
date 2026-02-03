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
import sq.c;
import uq.d;
import uq.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b extends m {

    /* renamed from: d  reason: collision with root package name */
    protected final float[] f19554d;

    /* renamed from: e  reason: collision with root package name */
    protected final float[] f19555e;

    /* renamed from: i  reason: collision with root package name */
    private final float[] f19556i;

    /* renamed from: o  reason: collision with root package name */
    protected Matrix f19557o;

    /* renamed from: p  reason: collision with root package name */
    protected int f19558p;

    /* renamed from: q  reason: collision with root package name */
    protected int f19559q;

    /* renamed from: r  reason: collision with root package name */
    protected InterfaceC0251b f19560r;

    /* renamed from: s  reason: collision with root package name */
    private float[] f19561s;

    /* renamed from: t  reason: collision with root package name */
    private float[] f19562t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f19563u;

    /* renamed from: v  reason: collision with root package name */
    protected boolean f19564v;

    /* renamed from: w  reason: collision with root package name */
    private int f19565w;

    /* renamed from: x  reason: collision with root package name */
    private String f19566x;

    /* renamed from: y  reason: collision with root package name */
    private String f19567y;

    /* renamed from: z  reason: collision with root package name */
    private c f19568z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements rq.b {
        a() {
        }

        @Override // rq.b
        public void a(Bitmap bitmap, c cVar, String str, String str2) {
            b.this.f19566x = str;
            b.this.f19567y = str2;
            b.this.f19568z = cVar;
            b bVar = b.this;
            bVar.f19563u = true;
            bVar.setImageBitmap(bitmap);
        }

        @Override // rq.b
        public void onFailure(Exception exc) {
            Log.e("TransformImageView", "onFailure: setImageUri", exc);
            InterfaceC0251b interfaceC0251b = b.this.f19560r;
            if (interfaceC0251b != null) {
                interfaceC0251b.b(exc);
            }
        }
    }

    /* renamed from: com.yalantis.ucrop.view.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0251b {
        void a();

        void b(Exception exc);

        void c(float f10);

        void d(float f10);
    }

    public b(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19554d = new float[8];
        this.f19555e = new float[2];
        this.f19556i = new float[9];
        this.f19557o = new Matrix();
        this.f19563u = false;
        this.f19564v = false;
        this.f19565w = 0;
        i();
    }

    private void o() {
        this.f19557o.mapPoints(this.f19554d, this.f19561s);
        this.f19557o.mapPoints(this.f19555e, this.f19562t);
    }

    public float f(Matrix matrix) {
        return (float) (-(Math.atan2(h(matrix, 1), h(matrix, 0)) * 57.29577951308232d));
    }

    public float g(Matrix matrix) {
        return (float) Math.sqrt(Math.pow(h(matrix, 0), 2.0d) + Math.pow(h(matrix, 3), 2.0d));
    }

    public float getCurrentAngle() {
        return f(this.f19557o);
    }

    public float getCurrentScale() {
        return g(this.f19557o);
    }

    public c getExifInfo() {
        return this.f19568z;
    }

    public String getImageInputPath() {
        return this.f19566x;
    }

    public String getImageOutputPath() {
        return this.f19567y;
    }

    public int getMaxBitmapSize() {
        if (this.f19565w <= 0) {
            this.f19565w = uq.a.b(getContext());
        }
        return this.f19565w;
    }

    public Bitmap getViewBitmap() {
        if (getDrawable() != null && (getDrawable() instanceof d)) {
            return ((d) getDrawable()).a();
        }
        return null;
    }

    protected float h(Matrix matrix, int i10) {
        matrix.getValues(this.f19556i);
        return this.f19556i[i10];
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
            this.f19561s = g.b(rectF);
            this.f19562t = g.a(rectF);
            this.f19564v = true;
            InterfaceC0251b interfaceC0251b = this.f19560r;
            if (interfaceC0251b != null) {
                interfaceC0251b.a();
            }
        }
    }

    public void k(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f19557o.postRotate(f10, f11, f12);
            setImageMatrix(this.f19557o);
            InterfaceC0251b interfaceC0251b = this.f19560r;
            if (interfaceC0251b != null) {
                interfaceC0251b.d(f(this.f19557o));
            }
        }
    }

    public void l(float f10, float f11, float f12) {
        if (f10 != 0.0f) {
            this.f19557o.postScale(f10, f10, f11, f12);
            setImageMatrix(this.f19557o);
            InterfaceC0251b interfaceC0251b = this.f19560r;
            if (interfaceC0251b != null) {
                interfaceC0251b.c(g(this.f19557o));
            }
        }
    }

    public void m(float f10, float f11) {
        if (f10 == 0.0f && f11 == 0.0f) {
            return;
        }
        this.f19557o.postTranslate(f10, f11);
        setImageMatrix(this.f19557o);
    }

    public void n(Uri uri, Uri uri2) {
        int maxBitmapSize = getMaxBitmapSize();
        uq.a.d(getContext(), uri, uri2, maxBitmapSize, maxBitmapSize, new a());
    }

    @Override // android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (!z10 && (!this.f19563u || this.f19564v)) {
            return;
        }
        int paddingLeft = getPaddingLeft();
        int paddingTop = getPaddingTop();
        this.f19558p = (getWidth() - getPaddingRight()) - paddingLeft;
        this.f19559q = (getHeight() - getPaddingBottom()) - paddingTop;
        j();
    }

    @Override // androidx.appcompat.widget.m, android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        setImageDrawable(new d(bitmap));
    }

    @Override // android.widget.ImageView
    public void setImageMatrix(Matrix matrix) {
        super.setImageMatrix(matrix);
        this.f19557o.set(matrix);
        o();
    }

    public void setMaxBitmapSize(int i10) {
        this.f19565w = i10;
    }

    @Override // android.widget.ImageView
    public void setScaleType(ImageView.ScaleType scaleType) {
        if (scaleType == ImageView.ScaleType.MATRIX) {
            super.setScaleType(scaleType);
        } else {
            Log.w("TransformImageView", "Invalid ScaleType. Only ScaleType.MATRIX can be used");
        }
    }

    public void setTransformImageListener(InterfaceC0251b interfaceC0251b) {
        this.f19560r = interfaceC0251b;
    }
}
