package com.facebook.drawee.drawable;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.PointF;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n extends f {

    /* renamed from: d  reason: collision with root package name */
    private ScalingUtils$ScaleType f10102d;

    /* renamed from: e  reason: collision with root package name */
    public Object f10103e;

    /* renamed from: i  reason: collision with root package name */
    public PointF f10104i;

    /* renamed from: o  reason: collision with root package name */
    public int f10105o;

    /* renamed from: p  reason: collision with root package name */
    public int f10106p;

    /* renamed from: q  reason: collision with root package name */
    public Matrix f10107q;

    /* renamed from: r  reason: collision with root package name */
    private final Matrix f10108r;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(Drawable drawable, ScalingUtils$ScaleType scaleType) {
        super(drawable);
        Intrinsics.checkNotNullParameter(scaleType, "scaleType");
        this.f10108r = new Matrix();
        this.f10102d = scaleType;
    }

    private final void j() {
        Drawable current = getCurrent();
        if (current == null) {
            return;
        }
        if (this.f10105o == current.getIntrinsicWidth() && this.f10106p == current.getIntrinsicHeight()) {
            return;
        }
        i();
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        j();
        if (this.f10107q != null) {
            int save = canvas.save();
            canvas.clipRect(getBounds());
            canvas.concat(this.f10107q);
            super.draw(canvas);
            canvas.restoreToCount(save);
            return;
        }
        super.draw(canvas);
    }

    @Override // com.facebook.drawee.drawable.f, com.facebook.drawee.drawable.TransformCallback
    public void getTransform(Matrix transform) {
        Intrinsics.checkNotNullParameter(transform, "transform");
        getParentTransform(transform);
        j();
        Matrix matrix = this.f10107q;
        if (matrix != null) {
            transform.preConcat(matrix);
        }
    }

    public final void i() {
        float f10;
        Drawable current = getCurrent();
        if (current == null) {
            this.f10106p = 0;
            this.f10105o = 0;
            this.f10107q = null;
            return;
        }
        Rect bounds = getBounds();
        Intrinsics.checkNotNullExpressionValue(bounds, "getBounds(...)");
        int width = bounds.width();
        int height = bounds.height();
        int intrinsicWidth = current.getIntrinsicWidth();
        this.f10105o = intrinsicWidth;
        int intrinsicHeight = current.getIntrinsicHeight();
        this.f10106p = intrinsicHeight;
        if (intrinsicWidth > 0 && intrinsicHeight > 0) {
            if (intrinsicWidth == width && intrinsicHeight == height) {
                current.setBounds(bounds);
                this.f10107q = null;
                return;
            } else if (this.f10102d == ScalingUtils$ScaleType.f10015a) {
                current.setBounds(bounds);
                this.f10107q = null;
                return;
            } else {
                current.setBounds(0, 0, intrinsicWidth, intrinsicHeight);
                this.f10108r.reset();
                ScalingUtils$ScaleType scalingUtils$ScaleType = this.f10102d;
                Matrix matrix = this.f10108r;
                PointF pointF = this.f10104i;
                float f11 = 0.5f;
                if (pointF != null) {
                    Intrinsics.checkNotNull(pointF);
                    f10 = pointF.x;
                } else {
                    f10 = 0.5f;
                }
                PointF pointF2 = this.f10104i;
                if (pointF2 != null) {
                    Intrinsics.checkNotNull(pointF2);
                    f11 = pointF2.y;
                }
                scalingUtils$ScaleType.getTransform(matrix, bounds, intrinsicWidth, intrinsicHeight, f10, f11);
                this.f10107q = this.f10108r;
                return;
            }
        }
        current.setBounds(bounds);
        this.f10107q = null;
    }

    public final PointF k() {
        return this.f10104i;
    }

    public final ScalingUtils$ScaleType l() {
        return this.f10102d;
    }

    public final void m(PointF pointF) {
        if (o8.h.a(this.f10104i, pointF)) {
            return;
        }
        if (pointF == null) {
            this.f10104i = null;
        } else {
            if (this.f10104i == null) {
                this.f10104i = new PointF();
            }
            PointF pointF2 = this.f10104i;
            Intrinsics.checkNotNull(pointF2);
            pointF2.set(pointF);
        }
        i();
        invalidateSelf();
    }

    public final void n(ScalingUtils$ScaleType scaleType) {
        Intrinsics.checkNotNullParameter(scaleType, "scaleType");
        if (o8.h.a(this.f10102d, scaleType)) {
            return;
        }
        this.f10102d = scaleType;
        this.f10103e = null;
        i();
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void onBoundsChange(Rect bounds) {
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        i();
    }

    @Override // com.facebook.drawee.drawable.f
    public Drawable setCurrent(Drawable drawable) {
        Drawable current = super.setCurrent(drawable);
        i();
        return current;
    }
}
