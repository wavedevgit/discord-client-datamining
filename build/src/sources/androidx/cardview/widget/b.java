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
    private float f2155a;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f2157c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f2158d;

    /* renamed from: e  reason: collision with root package name */
    private float f2159e;

    /* renamed from: h  reason: collision with root package name */
    private ColorStateList f2162h;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f2163i;

    /* renamed from: j  reason: collision with root package name */
    private ColorStateList f2164j;

    /* renamed from: f  reason: collision with root package name */
    private boolean f2160f = false;

    /* renamed from: g  reason: collision with root package name */
    private boolean f2161g = true;

    /* renamed from: k  reason: collision with root package name */
    private PorterDuff.Mode f2165k = PorterDuff.Mode.SRC_IN;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f2156b = new Paint(5);

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(ColorStateList colorStateList, float f10) {
        this.f2155a = f10;
        e(colorStateList);
        this.f2157c = new RectF();
        this.f2158d = new Rect();
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
        this.f2162h = colorStateList;
        this.f2156b.setColor(colorStateList.getColorForState(getState(), this.f2162h.getDefaultColor()));
    }

    private void i(Rect rect) {
        if (rect == null) {
            rect = getBounds();
        }
        this.f2157c.set(rect.left, rect.top, rect.right, rect.bottom);
        this.f2158d.set(rect);
        if (this.f2160f) {
            float b10 = c.b(this.f2159e, this.f2155a, this.f2161g);
            this.f2158d.inset((int) Math.ceil(c.a(this.f2159e, this.f2155a, this.f2161g)), (int) Math.ceil(b10));
            this.f2157c.set(this.f2158d);
        }
    }

    public ColorStateList b() {
        return this.f2162h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float c() {
        return this.f2159e;
    }

    public float d() {
        return this.f2155a;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        boolean z10;
        Paint paint = this.f2156b;
        if (this.f2163i != null && paint.getColorFilter() == null) {
            paint.setColorFilter(this.f2163i);
            z10 = true;
        } else {
            z10 = false;
        }
        RectF rectF = this.f2157c;
        float f10 = this.f2155a;
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
        if (f10 == this.f2159e && this.f2160f == z10 && this.f2161g == z11) {
            return;
        }
        this.f2159e = f10;
        this.f2160f = z10;
        this.f2161g = z11;
        i(null);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        outline.setRoundRect(this.f2158d, this.f2155a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(float f10) {
        if (f10 == this.f2155a) {
            return;
        }
        this.f2155a = f10;
        i(null);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f2164j;
        if (colorStateList == null || !colorStateList.isStateful()) {
            ColorStateList colorStateList2 = this.f2162h;
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
        ColorStateList colorStateList = this.f2162h;
        int colorForState = colorStateList.getColorForState(iArr, colorStateList.getDefaultColor());
        if (colorForState != this.f2156b.getColor()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f2156b.setColor(colorForState);
        }
        ColorStateList colorStateList2 = this.f2164j;
        if (colorStateList2 != null && (mode = this.f2165k) != null) {
            this.f2163i = a(colorStateList2, mode);
            return true;
        }
        return z10;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f2156b.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f2156b.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f2164j = colorStateList;
        this.f2163i = a(colorStateList, this.f2165k);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        this.f2165k = mode;
        this.f2163i = a(this.f2164j, mode);
        invalidateSelf();
    }
}
