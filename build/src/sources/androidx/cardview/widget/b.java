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
    private float f2306a;

    /* renamed from: c  reason: collision with root package name */
    private final RectF f2308c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f2309d;

    /* renamed from: e  reason: collision with root package name */
    private float f2310e;

    /* renamed from: h  reason: collision with root package name */
    private ColorStateList f2313h;

    /* renamed from: i  reason: collision with root package name */
    private PorterDuffColorFilter f2314i;

    /* renamed from: j  reason: collision with root package name */
    private ColorStateList f2315j;

    /* renamed from: f  reason: collision with root package name */
    private boolean f2311f = false;

    /* renamed from: g  reason: collision with root package name */
    private boolean f2312g = true;

    /* renamed from: k  reason: collision with root package name */
    private PorterDuff.Mode f2316k = PorterDuff.Mode.SRC_IN;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f2307b = new Paint(5);

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(ColorStateList colorStateList, float f10) {
        this.f2306a = f10;
        e(colorStateList);
        this.f2308c = new RectF();
        this.f2309d = new Rect();
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
        this.f2313h = colorStateList;
        this.f2307b.setColor(colorStateList.getColorForState(getState(), this.f2313h.getDefaultColor()));
    }

    private void i(Rect rect) {
        if (rect == null) {
            rect = getBounds();
        }
        this.f2308c.set(rect.left, rect.top, rect.right, rect.bottom);
        this.f2309d.set(rect);
        if (this.f2311f) {
            float b10 = c.b(this.f2310e, this.f2306a, this.f2312g);
            this.f2309d.inset((int) Math.ceil(c.a(this.f2310e, this.f2306a, this.f2312g)), (int) Math.ceil(b10));
            this.f2308c.set(this.f2309d);
        }
    }

    public ColorStateList b() {
        return this.f2313h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public float c() {
        return this.f2310e;
    }

    public float d() {
        return this.f2306a;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        boolean z10;
        Paint paint = this.f2307b;
        if (this.f2314i != null && paint.getColorFilter() == null) {
            paint.setColorFilter(this.f2314i);
            z10 = true;
        } else {
            z10 = false;
        }
        RectF rectF = this.f2308c;
        float f10 = this.f2306a;
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
        if (f10 == this.f2310e && this.f2311f == z10 && this.f2312g == z11) {
            return;
        }
        this.f2310e = f10;
        this.f2311f = z10;
        this.f2312g = z11;
        i(null);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void getOutline(Outline outline) {
        outline.setRoundRect(this.f2309d, this.f2306a);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(float f10) {
        if (f10 == this.f2306a) {
            return;
        }
        this.f2306a = f10;
        i(null);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        ColorStateList colorStateList = this.f2315j;
        if (colorStateList == null || !colorStateList.isStateful()) {
            ColorStateList colorStateList2 = this.f2313h;
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
        ColorStateList colorStateList = this.f2313h;
        int colorForState = colorStateList.getColorForState(iArr, colorStateList.getDefaultColor());
        if (colorForState != this.f2307b.getColor()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f2307b.setColor(colorForState);
        }
        ColorStateList colorStateList2 = this.f2315j;
        if (colorStateList2 != null && (mode = this.f2316k) != null) {
            this.f2314i = a(colorStateList2, mode);
            return true;
        }
        return z10;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f2307b.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f2307b.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f2315j = colorStateList;
        this.f2314i = a(colorStateList, this.f2316k);
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        this.f2316k = mode;
        this.f2314i = a(this.f2315j, mode);
        invalidateSelf();
    }
}
