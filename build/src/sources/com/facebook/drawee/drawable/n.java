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
    private ScalingUtils$ScaleType f11120d;

    /* renamed from: e  reason: collision with root package name */
    public Object f11121e;

    /* renamed from: i  reason: collision with root package name */
    public PointF f11122i;

    /* renamed from: o  reason: collision with root package name */
    public int f11123o;

    /* renamed from: p  reason: collision with root package name */
    public int f11124p;

    /* renamed from: q  reason: collision with root package name */
    public Matrix f11125q;

    /* renamed from: r  reason: collision with root package name */
    private final Matrix f11126r;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(Drawable drawable, ScalingUtils$ScaleType scaleType) {
        super(drawable);
        Intrinsics.checkNotNullParameter(scaleType, "scaleType");
        this.f11126r = new Matrix();
        this.f11120d = scaleType;
    }

    private final void j() {
        Drawable current = getCurrent();
        if (current == null) {
            return;
        }
        if (this.f11123o == current.getIntrinsicWidth() && this.f11124p == current.getIntrinsicHeight()) {
            return;
        }
        i();
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        j();
        if (this.f11125q != null) {
            int save = canvas.save();
            canvas.clipRect(getBounds());
            canvas.concat(this.f11125q);
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
        Matrix matrix = this.f11125q;
        if (matrix != null) {
            transform.preConcat(matrix);
        }
    }

    public final void i() {
        float f10;
        Drawable current = getCurrent();
        if (current == null) {
            this.f11124p = 0;
            this.f11123o = 0;
            this.f11125q = null;
            return;
        }
        Rect bounds = getBounds();
        Intrinsics.checkNotNullExpressionValue(bounds, "getBounds(...)");
        int width = bounds.width();
        int height = bounds.height();
        int intrinsicWidth = current.getIntrinsicWidth();
        this.f11123o = intrinsicWidth;
        int intrinsicHeight = current.getIntrinsicHeight();
        this.f11124p = intrinsicHeight;
        if (intrinsicWidth > 0 && intrinsicHeight > 0) {
            if (intrinsicWidth == width && intrinsicHeight == height) {
                current.setBounds(bounds);
                this.f11125q = null;
                return;
            } else if (this.f11120d == ScalingUtils$ScaleType.f11033a) {
                current.setBounds(bounds);
                this.f11125q = null;
                return;
            } else {
                current.setBounds(0, 0, intrinsicWidth, intrinsicHeight);
                this.f11126r.reset();
                ScalingUtils$ScaleType scalingUtils$ScaleType = this.f11120d;
                Matrix matrix = this.f11126r;
                PointF pointF = this.f11122i;
                float f11 = 0.5f;
                if (pointF != null) {
                    Intrinsics.checkNotNull(pointF);
                    f10 = pointF.x;
                } else {
                    f10 = 0.5f;
                }
                PointF pointF2 = this.f11122i;
                if (pointF2 != null) {
                    Intrinsics.checkNotNull(pointF2);
                    f11 = pointF2.y;
                }
                scalingUtils$ScaleType.getTransform(matrix, bounds, intrinsicWidth, intrinsicHeight, f10, f11);
                this.f11125q = this.f11126r;
                return;
            }
        }
        current.setBounds(bounds);
        this.f11125q = null;
    }

    public final PointF k() {
        return this.f11122i;
    }

    public final ScalingUtils$ScaleType l() {
        return this.f11120d;
    }

    public final void m(PointF pointF) {
        if (o8.h.a(this.f11122i, pointF)) {
            return;
        }
        if (pointF == null) {
            this.f11122i = null;
        } else {
            if (this.f11122i == null) {
                this.f11122i = new PointF();
            }
            PointF pointF2 = this.f11122i;
            Intrinsics.checkNotNull(pointF2);
            pointF2.set(pointF);
        }
        i();
        invalidateSelf();
    }

    public final void n(ScalingUtils$ScaleType scaleType) {
        Intrinsics.checkNotNullParameter(scaleType, "scaleType");
        if (o8.h.a(this.f11120d, scaleType)) {
            return;
        }
        this.f11120d = scaleType;
        this.f11121e = null;
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
