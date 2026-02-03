package androidx.cardview.widget;

import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Outline;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffColorFilter;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class b extends Drawable {

    /* renamed from: a  reason: collision with root package name */
    private float f2168a;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f2170c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f2171d;

    /* renamed from: e  reason: collision with root package name */
    private float f2172e;

    /* renamed from: h  reason: collision with root package name */
    private ColorStateList f2175h;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f2176i;

    /* renamed from: j  reason: collision with root package name */
    private ColorStateList f2177j;

    /* renamed from: f  reason: collision with root package name */
    private boolean f2173f = false;

    /* renamed from: g  reason: collision with root package name */
    private boolean f2174g = true;

    /* renamed from: k  reason: collision with root package name */
    private PorterDuff.Mode f2178k = PorterDuff.Mode.SRC_IN;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f2169b = new Paint(5);

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(ColorStateList colorStateList, float f10) {
        this.f2168a = f10;
        e(colorStateList);
        this.f2170c = new RectF();
        this.f2171d = new Rect();
    }

    private PorterDuffColorFilter a(ColorStateList colorStateList, PorterDuff.Mode mode) {
        if (colorStateList != null && mode != null) {
            return new PorterDuffColorFilter(colorStateList.getColorForState(getState(), 0), mode);
        }
        return null;
    }

    private void e(ColorStateList colorStateList) {
        if (colorStateList == null) {
            colorStateList = ColorStateList.valueOf(0);
        }
        this.f2175h = colorStateList;
        this.f2169b.setColor(colorStateList.getColorForState(getState(), this.f2175h.getDefaultColor()));
    }

    private void i(Rect rect) {
        if (rect == null) {
            rect = getBounds();
        }
        this.f2170c.set(rect.left, rect.top, rect.right, rect.bottom);
        this.f2171d.set(rect);
        if (this.f2173f) {
            float b10 = c.b(this.f2172e, this.f2168a, this.f2174g);
            this.f2171d.inset((int) Math.ceil(c.a(this.f2172e, this.f2168a, this.f2174g)), (int) Math.ceil(b10));
            this.f2170c.set(this.f2171d);
        }
    }

    public ColorStateList b() {
        return this.f2175h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float c() {
        return this.f2172e;
    }

    public float d() {
        return this.f2168a;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        boolean z10;
        Paint paint = this.f2169b;
        if (this.f2176i != null && paint.getColorFilter() == null) {
            paint.setColorFilter(this.f2176i);
            z10 = true;
        } else {
            z10 = false;
        }
        RectF rectF = this.f2170c;
        float f10 = this.f2168a;
        canvas.drawRoundRect(rectF, f10, f10, paint);
        if (z10) {
            paint.setColorFilter(null);
        }
    }

    public void f(ColorStateList colorStateList) {
        e(colorStateList);
        invalidateSelf();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(float f10, boolean z10, boolean z11) {
        if (f10 == this.f2172e && this.f2173f == z10 && this.f2174g == z11) {
            return;
        }
        this.f2172e = f10;
        this.f2173f = z10;
        this.f2174g = z11;
        i(null);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        outline.setRoundRect(this.f2171d, this.f2168a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(float f10) {
        if (f10 == this.f2168a) {
            return;
        }
        this.f2168a = f10;
        i(null);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f2177j;
        if (colorStateList == null || !colorStateList.isStateful()) {
            ColorStateList colorStateList2 = this.f2175h;
            if ((colorStateList2 != null && colorStateList2.isStateful()) || super.isStateful()) {
                return true;
            }
            return false;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        i(rect);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10;
        PorterDuff.Mode mode;
        ColorStateList colorStateList = this.f2175h;
        int colorForState = colorStateList.getColorForState(iArr, colorStateList.getDefaultColor());
        if (colorForState != this.f2169b.getColor()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f2169b.setColor(colorForState);
        }
        ColorStateList colorStateList2 = this.f2177j;
        if (colorStateList2 != null && (mode = this.f2178k) != null) {
            this.f2176i = a(colorStateList2, mode);
            return true;
        }
        return z10;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f2169b.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f2169b.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f2177j = colorStateList;
        this.f2176i = a(colorStateList, this.f2178k);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        this.f2178k = mode;
        this.f2176i = a(this.f2177j, mode);
        invalidateSelf();
    }
}
