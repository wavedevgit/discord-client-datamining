package com.facebook.drawee.drawable;

import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.RectF;
import android.graphics.Shader;
import android.graphics.drawable.BitmapDrawable;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i extends l {
    private static boolean U = false;
    private final Paint O;
    private final Paint P;
    private final Bitmap Q;
    private WeakReference R;
    private boolean S;
    private RectF T;

    public i(Resources resources, Bitmap bitmap, Paint paint, boolean z10) {
        super(new BitmapDrawable(resources, bitmap));
        Paint paint2 = new Paint();
        this.O = paint2;
        Paint paint3 = new Paint(1);
        this.P = paint3;
        this.T = null;
        this.Q = bitmap;
        if (paint != null) {
            paint2.set(paint);
        }
        paint2.setFlags(1);
        paint3.setStyle(Paint.Style.STROKE);
        this.S = z10;
    }

    public static boolean n() {
        return U;
    }

    private void o() {
        Shader shader;
        WeakReference weakReference = this.R;
        if (weakReference == null || weakReference.get() != this.Q) {
            this.R = new WeakReference(this.Q);
            if (this.Q != null) {
                Paint paint = this.O;
                Bitmap bitmap = this.Q;
                Shader.TileMode tileMode = Shader.TileMode.CLAMP;
                paint.setShader(new BitmapShader(bitmap, tileMode, tileMode));
                this.f9991q = true;
            }
        }
        if (this.f9991q && (shader = this.O.getShader()) != null) {
            shader.setLocalMatrix(this.I);
            this.f9991q = false;
        }
        this.O.setFilterBitmap(i());
    }

    @Override // com.facebook.drawee.drawable.l, com.facebook.drawee.drawable.h
    public void d(boolean z10) {
        this.S = z10;
    }

    @Override // com.facebook.drawee.drawable.l, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (ya.b.d()) {
            ya.b.a("RoundedBitmapDrawable#draw");
        }
        if (!k()) {
            super.draw(canvas);
            if (ya.b.d()) {
                ya.b.b();
                return;
            }
            return;
        }
        m();
        l();
        o();
        int save = canvas.save();
        canvas.concat(this.F);
        if (!this.S && this.T != null) {
            int save2 = canvas.save();
            canvas.clipRect(this.T);
            canvas.drawPath(this.f9990p, this.O);
            canvas.restoreToCount(save2);
        } else {
            canvas.drawPath(this.f9990p, this.O);
        }
        float f10 = this.f9989o;
        if (f10 > 0.0f) {
            this.P.setStrokeWidth(f10);
            this.P.setColor(d.c(this.f9992r, this.O.getAlpha()));
            canvas.drawPath(this.f9993s, this.P);
        }
        canvas.restoreToCount(save);
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // com.facebook.drawee.drawable.l
    public boolean k() {
        if (super.k() && this.Q != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.drawable.l
    public void m() {
        super.m();
        if (!this.S) {
            if (this.T == null) {
                this.T = new RectF();
            }
            this.I.mapRect(this.T, this.f9999y);
        }
    }

    @Override // com.facebook.drawee.drawable.l, android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        super.setAlpha(i10);
        if (i10 != this.O.getAlpha()) {
            this.O.setAlpha(i10);
            super.setAlpha(i10);
            invalidateSelf();
        }
    }

    @Override // com.facebook.drawee.drawable.l, android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        super.setColorFilter(colorFilter);
        this.O.setColorFilter(colorFilter);
    }
}
