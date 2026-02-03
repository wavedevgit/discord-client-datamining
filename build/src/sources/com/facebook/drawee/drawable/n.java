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
    private ScalingUtils$ScaleType f9717d;

    /* renamed from: e  reason: collision with root package name */
    public Object f9718e;

    /* renamed from: i  reason: collision with root package name */
    public PointF f9719i;

    /* renamed from: o  reason: collision with root package name */
    public int f9720o;

    /* renamed from: p  reason: collision with root package name */
    public int f9721p;

    /* renamed from: q  reason: collision with root package name */
    public Matrix f9722q;

    /* renamed from: r  reason: collision with root package name */
    private final Matrix f9723r;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(Drawable drawable, ScalingUtils$ScaleType scaleType) {
        super(drawable);
        Intrinsics.checkNotNullParameter(scaleType, "scaleType");
        this.f9723r = new Matrix();
        this.f9717d = scaleType;
    }

    private final void j() {
        Drawable current = getCurrent();
        if (current == null) {
            return;
        }
        if (this.f9720o == current.getIntrinsicWidth() && this.f9721p == current.getIntrinsicHeight()) {
            return;
        }
        i();
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        j();
        if (this.f9722q != null) {
            int save = canvas.save();
            canvas.clipRect(getBounds());
            canvas.concat(this.f9722q);
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
        Matrix matrix = this.f9722q;
        if (matrix != null) {
            transform.preConcat(matrix);
        }
    }

    public final void i() {
        float f10;
        Drawable current = getCurrent();
        if (current == null) {
            this.f9721p = 0;
            this.f9720o = 0;
            this.f9722q = null;
            return;
        }
        Rect bounds = getBounds();
        Intrinsics.checkNotNullExpressionValue(bounds, "getBounds(...)");
        int width = bounds.width();
        int height = bounds.height();
        int intrinsicWidth = current.getIntrinsicWidth();
        this.f9720o = intrinsicWidth;
        int intrinsicHeight = current.getIntrinsicHeight();
        this.f9721p = intrinsicHeight;
        if (intrinsicWidth > 0 && intrinsicHeight > 0) {
            if (intrinsicWidth == width && intrinsicHeight == height) {
                current.setBounds(bounds);
                this.f9722q = null;
                return;
            } else if (this.f9717d == ScalingUtils$ScaleType.f9630a) {
                current.setBounds(bounds);
                this.f9722q = null;
                return;
            } else {
                current.setBounds(0, 0, intrinsicWidth, intrinsicHeight);
                this.f9723r.reset();
                ScalingUtils$ScaleType scalingUtils$ScaleType = this.f9717d;
                Matrix matrix = this.f9723r;
                PointF pointF = this.f9719i;
                float f11 = 0.5f;
                if (pointF != null) {
                    Intrinsics.checkNotNull(pointF);
                    f10 = pointF.x;
                } else {
                    f10 = 0.5f;
                }
                PointF pointF2 = this.f9719i;
                if (pointF2 != null) {
                    Intrinsics.checkNotNull(pointF2);
                    f11 = pointF2.y;
                }
                scalingUtils$ScaleType.getTransform(matrix, bounds, intrinsicWidth, intrinsicHeight, f10, f11);
                this.f9722q = this.f9723r;
                return;
            }
        }
        current.setBounds(bounds);
        this.f9722q = null;
    }

    public final PointF k() {
        return this.f9719i;
    }

    public final ScalingUtils$ScaleType l() {
        return this.f9717d;
    }

    public final void m(PointF pointF) {
        if (o8.h.a(this.f9719i, pointF)) {
            return;
        }
        if (pointF == null) {
            this.f9719i = null;
        } else {
            if (this.f9719i == null) {
                this.f9719i = new PointF();
            }
            PointF pointF2 = this.f9719i;
            Intrinsics.checkNotNull(pointF2);
            pointF2.set(pointF);
        }
        i();
        invalidateSelf();
    }

    public final void n(ScalingUtils$ScaleType scaleType) {
        Intrinsics.checkNotNullParameter(scaleType, "scaleType");
        if (o8.h.a(this.f9717d, scaleType)) {
            return;
        }
        this.f9717d = scaleType;
        this.f9718e = null;
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
