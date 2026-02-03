package com.facebook.drawee.drawable;

import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends f {

    /* renamed from: d  reason: collision with root package name */
    public final Matrix f10695d;

    /* renamed from: e  reason: collision with root package name */
    private final int f10696e;

    /* renamed from: i  reason: collision with root package name */
    private final int f10697i;

    /* renamed from: o  reason: collision with root package name */
    private final Matrix f10698o;

    /* renamed from: p  reason: collision with root package name */
    private final RectF f10699p;

    public g(Drawable drawable, int i10, int i11) {
        super(drawable);
        this.f10695d = new Matrix();
        this.f10696e = i10 - (i10 % 90);
        this.f10697i = (i11 < 0 || i11 > 8) ? 0 : 0;
        this.f10698o = new Matrix();
        this.f10699p = new RectF();
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        int i10;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f10696e <= 0 && ((i10 = this.f10697i) == 0 || i10 == 1)) {
            super.draw(canvas);
            return;
        }
        int save = canvas.save();
        canvas.concat(this.f10695d);
        super.draw(canvas);
        canvas.restoreToCount(save);
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        int i10 = this.f10697i;
        if (i10 != 5 && i10 != 7 && this.f10696e % 180 == 0) {
            return super.getIntrinsicHeight();
        }
        return super.getIntrinsicWidth();
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        int i10 = this.f10697i;
        if (i10 != 5 && i10 != 7 && this.f10696e % 180 == 0) {
            return super.getIntrinsicWidth();
        }
        return super.getIntrinsicHeight();
    }

    @Override // com.facebook.drawee.drawable.f, com.facebook.drawee.drawable.TransformCallback
    public void getTransform(Matrix transform) {
        Intrinsics.checkNotNullParameter(transform, "transform");
        getParentTransform(transform);
        if (!this.f10695d.isIdentity()) {
            transform.preConcat(this.f10695d);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void onBoundsChange(Rect bounds) {
        int i10;
        Intrinsics.checkNotNullParameter(bounds, "bounds");
        Drawable current = getCurrent();
        if (current == null) {
            return;
        }
        int i11 = this.f10696e;
        if (i11 <= 0 && ((i10 = this.f10697i) == 0 || i10 == 1)) {
            current.setBounds(bounds);
            return;
        }
        int i12 = this.f10697i;
        if (i12 != 2) {
            if (i12 != 7) {
                if (i12 != 4) {
                    if (i12 != 5) {
                        this.f10695d.setRotate(i11, bounds.centerX(), bounds.centerY());
                    } else {
                        this.f10695d.setRotate(270.0f, bounds.centerX(), bounds.centerY());
                        this.f10695d.postScale(1.0f, -1.0f);
                    }
                } else {
                    this.f10695d.setScale(1.0f, -1.0f);
                }
            } else {
                this.f10695d.setRotate(270.0f, bounds.centerX(), bounds.centerY());
                this.f10695d.postScale(-1.0f, 1.0f);
            }
        } else {
            this.f10695d.setScale(-1.0f, 1.0f);
        }
        this.f10698o.reset();
        this.f10695d.invert(this.f10698o);
        this.f10699p.set(bounds);
        this.f10698o.mapRect(this.f10699p);
        RectF rectF = this.f10699p;
        current.setBounds((int) rectF.left, (int) rectF.top, (int) rectF.right, (int) rectF.bottom);
    }
}
