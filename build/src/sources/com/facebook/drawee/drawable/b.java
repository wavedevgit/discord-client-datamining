package com.facebook.drawee.drawable;

import android.graphics.Canvas;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends f implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private int f9935d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f9936e;

    /* renamed from: i  reason: collision with root package name */
    float f9937i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f9938o;

    public b(Drawable drawable, int i10) {
        this(drawable, i10, true);
    }

    private int i() {
        return (int) ((20.0f / this.f9935d) * 360.0f);
    }

    private void j() {
        if (!this.f9938o) {
            this.f9938o = true;
            scheduleSelf(this, SystemClock.uptimeMillis() + 20);
        }
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        int save = canvas.save();
        Rect bounds = getBounds();
        int i10 = bounds.right;
        int i11 = bounds.left;
        int i12 = i10 - i11;
        int i13 = bounds.bottom;
        int i14 = bounds.top;
        int i15 = i13 - i14;
        float f10 = this.f9937i;
        if (!this.f9936e) {
            f10 = 360.0f - f10;
        }
        canvas.rotate(f10, i11 + (i12 / 2), i14 + (i15 / 2));
        super.draw(canvas);
        canvas.restoreToCount(save);
        j();
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f9938o = false;
        this.f9937i += i();
        invalidateSelf();
    }

    public b(Drawable drawable, int i10, boolean z10) {
        super((Drawable) o8.j.g(drawable));
        this.f9937i = 0.0f;
        this.f9938o = false;
        this.f9935d = i10;
        this.f9936e = z10;
    }
}
