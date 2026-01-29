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
    public final Matrix f11066d;

    /* renamed from: e  reason: collision with root package name */
    private final int f11067e;

    /* renamed from: i  reason: collision with root package name */
    private final int f11068i;

    /* renamed from: o  reason: collision with root package name */
    private final Matrix f11069o;

    /* renamed from: p  reason: collision with root package name */
    private final RectF f11070p;

    public g(Drawable drawable, int i10, int i11) {
        super(drawable);
        this.f11066d = new Matrix();
        this.f11067e = i10 - (i10 % 90);
        this.f11068i = (i11 < 0 || i11 > 8) ? 0 : 0;
        this.f11069o = new Matrix();
        this.f11070p = new RectF();
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        int i10;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        if (this.f11067e <= 0 && ((i10 = this.f11068i) == 0 || i10 == 1)) {
            super.draw(canvas);
            return;
        }
        int save = canvas.save();
        canvas.concat(this.f11066d);
        super.draw(canvas);
        canvas.restoreToCount(save);
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        int i10 = this.f11068i;
        if (i10 != 5 && i10 != 7 && this.f11067e % 180 == 0) {
            return super.getIntrinsicHeight();
        }
        return super.getIntrinsicWidth();
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        int i10 = this.f11068i;
        if (i10 != 5 && i10 != 7 && this.f11067e % 180 == 0) {
            return super.getIntrinsicWidth();
        }
        return super.getIntrinsicHeight();
    }

    @Override // com.facebook.drawee.drawable.f, com.facebook.drawee.drawable.TransformCallback
    public void getTransform(Matrix transform) {
        Intrinsics.checkNotNullParameter(transform, "transform");
        getParentTransform(transform);
        if (!this.f11066d.isIdentity()) {
            transform.preConcat(this.f11066d);
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
        int i11 = this.f11067e;
        if (i11 <= 0 && ((i10 = this.f11068i) == 0 || i10 == 1)) {
            current.setBounds(bounds);
            return;
        }
        int i12 = this.f11068i;
        if (i12 != 2) {
            if (i12 != 7) {
                if (i12 != 4) {
                    if (i12 != 5) {
                        this.f11066d.setRotate(i11, bounds.centerX(), bounds.centerY());
                    } else {
                        this.f11066d.setRotate(270.0f, bounds.centerX(), bounds.centerY());
                        this.f11066d.postScale(1.0f, -1.0f);
                    }
                } else {
                    this.f11066d.setScale(1.0f, -1.0f);
                }
            } else {
                this.f11066d.setRotate(270.0f, bounds.centerX(), bounds.centerY());
                this.f11066d.postScale(-1.0f, 1.0f);
            }
        } else {
            this.f11066d.setScale(-1.0f, 1.0f);
        }
        this.f11069o.reset();
        this.f11066d.invert(this.f11069o);
        this.f11070p.set(bounds);
        this.f11069o.mapRect(this.f11070p);
        RectF rectF = this.f11070p;
        current.setBounds((int) rectF.left, (int) rectF.top, (int) rectF.right, (int) rectF.bottom);
    }
}
