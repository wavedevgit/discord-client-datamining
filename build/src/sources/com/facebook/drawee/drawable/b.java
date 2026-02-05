package com.facebook.drawee.drawable;

import android.graphics.Canvas;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends f implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private int f10036d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f10037e;

    /* renamed from: i  reason: collision with root package name */
    float f10038i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f10039o;

    public b(Drawable drawable, int i10) {
        this(drawable, i10, true);
    }

    private int i() {
        return (int) ((20.0f / this.f10036d) * 360.0f);
    }

    private void j() {
        if (!this.f10039o) {
            this.f10039o = true;
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
        float f10 = this.f10038i;
        if (!this.f10037e) {
            f10 = 360.0f - f10;
        }
        canvas.rotate(f10, i11 + (i12 / 2), i14 + (i15 / 2));
        super.draw(canvas);
        canvas.restoreToCount(save);
        j();
    }

    @Override // java.lang.Runnable
    public void run() {
        this.f10039o = false;
        this.f10038i += i();
        invalidateSelf();
    }

    public b(Drawable drawable, int i10, boolean z10) {
        super((Drawable) o8.j.g(drawable));
        this.f10038i = 0.0f;
        this.f10039o = false;
        this.f10036d = i10;
        this.f10037e = z10;
    }
}
