package com.facebook.drawee.drawable;

import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends Drawable implements Drawable.Callback, TransformCallback, a0 {

    /* renamed from: d  reason: collision with root package name */
    private TransformCallback f10026d;

    /* renamed from: i  reason: collision with root package name */
    private final Drawable[] f10028i;

    /* renamed from: o  reason: collision with root package name */
    private final c[] f10029o;

    /* renamed from: e  reason: collision with root package name */
    private final DrawableProperties f10027e = new DrawableProperties();

    /* renamed from: p  reason: collision with root package name */
    private final Rect f10030p = new Rect();

    /* renamed from: q  reason: collision with root package name */
    private boolean f10031q = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f10032r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f10033s = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.facebook.drawee.drawable.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0152a implements c {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ int f10034d;

        C0152a(int i10) {
            this.f10034d = i10;
        }

        @Override // com.facebook.drawee.drawable.c
        public Drawable getDrawable() {
            return a.this.b(this.f10034d);
        }

        @Override // com.facebook.drawee.drawable.c
        public Drawable setDrawable(Drawable drawable) {
            return a.this.e(this.f10034d, drawable);
        }
    }

    public a(Drawable[] drawableArr) {
        int i10 = 0;
        o8.j.g(drawableArr);
        this.f10028i = drawableArr;
        while (true) {
            Drawable[] drawableArr2 = this.f10028i;
            if (i10 < drawableArr2.length) {
                d.d(drawableArr2[i10], this, this);
                i10++;
            } else {
                this.f10029o = new c[drawableArr2.length];
                return;
            }
        }
    }

    private c a(int i10) {
        return new C0152a(i10);
    }

    public Drawable b(int i10) {
        boolean z10;
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        if (i10 < this.f10028i.length) {
            z11 = true;
        }
        o8.j.b(Boolean.valueOf(z11));
        return this.f10028i[i10];
    }

    public c c(int i10) {
        boolean z10;
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        if (i10 < this.f10029o.length) {
            z11 = true;
        }
        o8.j.b(Boolean.valueOf(z11));
        c[] cVarArr = this.f10029o;
        if (cVarArr[i10] == null) {
            cVarArr[i10] = a(i10);
        }
        return this.f10029o[i10];
    }

    public int d() {
        return this.f10028i.length;
    }

    public Drawable e(int i10, Drawable drawable) {
        boolean z10;
        boolean z11 = true;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        if (i10 >= this.f10028i.length) {
            z11 = false;
        }
        o8.j.b(Boolean.valueOf(z11));
        Drawable drawable2 = this.f10028i[i10];
        if (drawable != drawable2) {
            if (drawable != null && this.f10033s) {
                drawable.mutate();
            }
            d.d(this.f10028i[i10], null, null);
            d.d(drawable, null, null);
            d.e(drawable, this.f10027e);
            d.a(drawable, this);
            d.d(drawable, this, this);
            this.f10032r = false;
            this.f10028i[i10] = drawable;
            invalidateSelf();
        }
        return drawable2;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        int i10 = 0;
        int i11 = -1;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 >= drawableArr.length) {
                break;
            }
            Drawable drawable = drawableArr[i10];
            if (drawable != null) {
                i11 = Math.max(i11, drawable.getIntrinsicHeight());
            }
            i10++;
        }
        if (i11 <= 0) {
            return -1;
        }
        return i11;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        int i10 = 0;
        int i11 = -1;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 >= drawableArr.length) {
                break;
            }
            Drawable drawable = drawableArr[i10];
            if (drawable != null) {
                i11 = Math.max(i11, drawable.getIntrinsicWidth());
            }
            i10++;
        }
        if (i11 <= 0) {
            return -1;
        }
        return i11;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        if (this.f10028i.length == 0) {
            return -2;
        }
        int i10 = 1;
        int i11 = -1;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null) {
                    i11 = Drawable.resolveOpacity(i11, drawable.getOpacity());
                }
                i10++;
            } else {
                return i11;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    public boolean getPadding(Rect rect) {
        int i10 = 0;
        rect.left = 0;
        rect.top = 0;
        rect.right = 0;
        rect.bottom = 0;
        Rect rect2 = this.f10030p;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null) {
                    drawable.getPadding(rect2);
                    rect.left = Math.max(rect.left, rect2.left);
                    rect.top = Math.max(rect.top, rect2.top);
                    rect.right = Math.max(rect.right, rect2.right);
                    rect.bottom = Math.max(rect.bottom, rect2.bottom);
                }
                i10++;
            } else {
                return true;
            }
        }
    }

    @Override // com.facebook.drawee.drawable.TransformCallback
    public void getRootBounds(RectF rectF) {
        TransformCallback transformCallback = this.f10026d;
        if (transformCallback != null) {
            transformCallback.getRootBounds(rectF);
        } else {
            rectF.set(getBounds());
        }
    }

    @Override // com.facebook.drawee.drawable.TransformCallback
    public void getTransform(Matrix matrix) {
        TransformCallback transformCallback = this.f10026d;
        if (transformCallback != null) {
            transformCallback.getTransform(matrix);
        } else {
            matrix.reset();
        }
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        if (!this.f10032r) {
            this.f10031q = false;
            int i10 = 0;
            while (true) {
                Drawable[] drawableArr = this.f10028i;
                boolean z10 = true;
                if (i10 >= drawableArr.length) {
                    break;
                }
                Drawable drawable = drawableArr[i10];
                boolean z11 = this.f10031q;
                if (drawable == null || !drawable.isStateful()) {
                    z10 = false;
                }
                this.f10031q = z11 | z10;
                i10++;
            }
            this.f10032r = true;
        }
        return this.f10031q;
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable mutate() {
        int i10 = 0;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null) {
                    drawable.mutate();
                }
                i10++;
            } else {
                this.f10033s = true;
                return this;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        int i10 = 0;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null) {
                    drawable.setBounds(rect);
                }
                i10++;
            } else {
                return;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        int i11 = 0;
        boolean z10 = false;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i11 < drawableArr.length) {
                Drawable drawable = drawableArr[i11];
                if (drawable != null && drawable.setLevel(i10)) {
                    z10 = true;
                }
                i11++;
            } else {
                return z10;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        int i10 = 0;
        boolean z10 = false;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null && drawable.setState(iArr)) {
                    z10 = true;
                }
                i10++;
            } else {
                return z10;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void scheduleDrawable(Drawable drawable, Runnable runnable, long j10) {
        scheduleSelf(runnable, j10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f10027e.c(colorFilter);
        int i10 = 0;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null) {
                    drawable.setColorFilter(colorFilter);
                }
                i10++;
            } else {
                return;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setDither(boolean z10) {
        this.f10027e.d(z10);
        int i10 = 0;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null) {
                    drawable.setDither(z10);
                }
                i10++;
            } else {
                return;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f10027e.e(z10);
        int i10 = 0;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null) {
                    drawable.setFilterBitmap(z10);
                }
                i10++;
            } else {
                return;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setHotspot(float f10, float f11) {
        int i10 = 0;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null) {
                    drawable.setHotspot(f10, f11);
                }
                i10++;
            } else {
                return;
            }
        }
    }

    @Override // com.facebook.drawee.drawable.a0
    public void setTransformCallback(TransformCallback transformCallback) {
        this.f10026d = transformCallback;
    }

    @Override // android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        boolean visible = super.setVisible(z10, z11);
        int i10 = 0;
        while (true) {
            Drawable[] drawableArr = this.f10028i;
            if (i10 < drawableArr.length) {
                Drawable drawable = drawableArr[i10];
                if (drawable != null) {
                    drawable.setVisible(z10, z11);
                }
                i10++;
            } else {
                return visible;
            }
        }
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void unscheduleDrawable(Drawable drawable, Runnable runnable) {
        unscheduleSelf(runnable);
    }
}
