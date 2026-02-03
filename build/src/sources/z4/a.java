package z4;

import android.content.res.ColorStateList;
import android.graphics.BlendMode;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.os.SystemClock;
import androidx.vectordrawable.graphics.drawable.b;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import h5.h;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.ranges.d;
import x4.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends Drawable implements Drawable.Callback, Animatable {

    /* renamed from: x  reason: collision with root package name */
    public static final C0778a f55578x = new C0778a(null);

    /* renamed from: d  reason: collision with root package name */
    private final h f55579d;

    /* renamed from: e  reason: collision with root package name */
    private final int f55580e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f55581i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f55582o;

    /* renamed from: p  reason: collision with root package name */
    private final List f55583p = new ArrayList();

    /* renamed from: q  reason: collision with root package name */
    private final int f55584q;

    /* renamed from: r  reason: collision with root package name */
    private final int f55585r;

    /* renamed from: s  reason: collision with root package name */
    private long f55586s;

    /* renamed from: t  reason: collision with root package name */
    private int f55587t;

    /* renamed from: u  reason: collision with root package name */
    private int f55588u;

    /* renamed from: v  reason: collision with root package name */
    private Drawable f55589v;

    /* renamed from: w  reason: collision with root package name */
    private final Drawable f55590w;

    /* renamed from: z4.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class C0778a {
        public /* synthetic */ C0778a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0778a() {
        }
    }

    public a(Drawable drawable, Drawable drawable2, h hVar, int i10, boolean z10, boolean z11) {
        Integer num;
        Integer num2;
        Integer num3;
        Integer num4;
        Drawable drawable3;
        this.f55579d = hVar;
        this.f55580e = i10;
        this.f55581i = z10;
        this.f55582o = z11;
        if (drawable != null) {
            num = Integer.valueOf(drawable.getIntrinsicWidth());
        } else {
            num = null;
        }
        if (drawable2 != null) {
            num2 = Integer.valueOf(drawable2.getIntrinsicWidth());
        } else {
            num2 = null;
        }
        this.f55584q = a(num, num2);
        if (drawable != null) {
            num3 = Integer.valueOf(drawable.getIntrinsicHeight());
        } else {
            num3 = null;
        }
        if (drawable2 != null) {
            num4 = Integer.valueOf(drawable2.getIntrinsicHeight());
        } else {
            num4 = null;
        }
        this.f55585r = a(num3, num4);
        this.f55587t = SetSpanOperation.SPAN_MAX_PRIORITY;
        if (drawable != null) {
            drawable3 = drawable.mutate();
        } else {
            drawable3 = null;
        }
        this.f55589v = drawable3;
        Drawable mutate = drawable2 != null ? drawable2.mutate() : null;
        this.f55590w = mutate;
        if (i10 > 0) {
            Drawable drawable4 = this.f55589v;
            if (drawable4 != null) {
                drawable4.setCallback(this);
            }
            if (mutate != null) {
                mutate.setCallback(this);
                return;
            }
            return;
        }
        throw new IllegalArgumentException("durationMillis must be > 0.");
    }

    private final int a(Integer num, Integer num2) {
        int i10;
        int i11 = -1;
        if (!this.f55582o && ((num != null && num.intValue() == -1) || (num2 != null && num2.intValue() == -1))) {
            return -1;
        }
        if (num != null) {
            i10 = num.intValue();
        } else {
            i10 = -1;
        }
        if (num2 != null) {
            i11 = num2.intValue();
        }
        return Math.max(i10, i11);
    }

    private final void b() {
        this.f55588u = 2;
        this.f55589v = null;
        List list = this.f55583p;
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((b) list.get(i10)).b(this);
        }
    }

    public final void c(Drawable drawable, Rect rect) {
        int intrinsicWidth = drawable.getIntrinsicWidth();
        int intrinsicHeight = drawable.getIntrinsicHeight();
        if (intrinsicWidth > 0 && intrinsicHeight > 0) {
            int width = rect.width();
            int height = rect.height();
            double c10 = j.c(intrinsicWidth, intrinsicHeight, width, height, this.f55579d);
            double d10 = 2;
            int b10 = as.a.b((width - (intrinsicWidth * c10)) / d10);
            int b11 = as.a.b((height - (c10 * intrinsicHeight)) / d10);
            drawable.setBounds(rect.left + b10, rect.top + b11, rect.right - b10, rect.bottom - b11);
            return;
        }
        drawable.setBounds(rect);
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        boolean z10;
        int save;
        Drawable drawable;
        int i10 = this.f55588u;
        if (i10 == 0) {
            Drawable drawable2 = this.f55589v;
            if (drawable2 != null) {
                drawable2.setAlpha(this.f55587t);
                save = canvas.save();
                try {
                    drawable2.draw(canvas);
                } finally {
                }
            }
        } else if (i10 == 2) {
            Drawable drawable3 = this.f55590w;
            if (drawable3 != null) {
                drawable3.setAlpha(this.f55587t);
                save = canvas.save();
                try {
                    drawable3.draw(canvas);
                } finally {
                }
            }
        } else {
            double uptimeMillis = (SystemClock.uptimeMillis() - this.f55586s) / this.f55580e;
            double k10 = d.k(uptimeMillis, 0.0d, 1.0d);
            int i11 = this.f55587t;
            int i12 = (int) (k10 * i11);
            if (this.f55581i) {
                i11 -= i12;
            }
            if (uptimeMillis >= 1.0d) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (!z10 && (drawable = this.f55589v) != null) {
                drawable.setAlpha(i11);
                save = canvas.save();
                try {
                    drawable.draw(canvas);
                } finally {
                }
            }
            Drawable drawable4 = this.f55590w;
            if (drawable4 != null) {
                drawable4.setAlpha(i12);
                save = canvas.save();
                try {
                    drawable4.draw(canvas);
                } finally {
                }
            }
            if (z10) {
                b();
            } else {
                invalidateSelf();
            }
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f55587t;
    }

    @Override // android.graphics.drawable.Drawable
    public ColorFilter getColorFilter() {
        ColorFilter colorFilter;
        Drawable drawable;
        int i10 = this.f55588u;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2 || (drawable = this.f55590w) == null) {
                    return null;
                }
                return drawable.getColorFilter();
            }
            Drawable drawable2 = this.f55590w;
            if (drawable2 != null && (colorFilter = drawable2.getColorFilter()) != null) {
                return colorFilter;
            }
            Drawable drawable3 = this.f55589v;
            if (drawable3 == null) {
                return null;
            }
            return drawable3.getColorFilter();
        }
        Drawable drawable4 = this.f55589v;
        if (drawable4 == null) {
            return null;
        }
        return drawable4.getColorFilter();
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f55585r;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f55584q;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        Drawable drawable = this.f55589v;
        Drawable drawable2 = this.f55590w;
        int i10 = this.f55588u;
        if (i10 == 0) {
            if (drawable == null) {
                return -2;
            }
            return drawable.getOpacity();
        } else if (i10 == 2) {
            if (drawable2 == null) {
                return -2;
            }
            return drawable2.getOpacity();
        } else if (drawable != null && drawable2 != null) {
            return Drawable.resolveOpacity(drawable.getOpacity(), drawable2.getOpacity());
        } else {
            if (drawable != null) {
                return drawable.getOpacity();
            }
            if (drawable2 == null) {
                return -2;
            }
            return drawable2.getOpacity();
        }
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void invalidateDrawable(Drawable drawable) {
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public boolean isRunning() {
        if (this.f55588u == 1) {
            return true;
        }
        return false;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        Drawable drawable = this.f55589v;
        if (drawable != null) {
            c(drawable, rect);
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 != null) {
            c(drawable2, rect);
        }
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onLevelChange(int i10) {
        boolean z10;
        boolean z11;
        Drawable drawable = this.f55589v;
        if (drawable != null) {
            z10 = drawable.setLevel(i10);
        } else {
            z10 = false;
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 != null) {
            z11 = drawable2.setLevel(i10);
        } else {
            z11 = false;
        }
        if (!z10 && !z11) {
            return false;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean z10;
        boolean z11;
        Drawable drawable = this.f55589v;
        if (drawable != null) {
            z10 = drawable.setState(iArr);
        } else {
            z10 = false;
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 != null) {
            z11 = drawable2.setState(iArr);
        } else {
            z11 = false;
        }
        if (!z10 && !z11) {
            return false;
        }
        return true;
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void scheduleDrawable(Drawable drawable, Runnable runnable, long j10) {
        scheduleSelf(runnable, j10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        if (i10 >= 0 && i10 < 256) {
            this.f55587t = i10;
            return;
        }
        throw new IllegalArgumentException(("Invalid alpha: " + i10).toString());
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        Drawable drawable = this.f55589v;
        if (drawable != null) {
            drawable.setColorFilter(colorFilter);
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 != null) {
            drawable2.setColorFilter(colorFilter);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        Drawable drawable = this.f55589v;
        if (drawable != null) {
            drawable.setTint(i10);
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 != null) {
            drawable2.setTint(i10);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintBlendMode(BlendMode blendMode) {
        Drawable drawable = this.f55589v;
        if (drawable != null) {
            drawable.setTintBlendMode(blendMode);
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 != null) {
            drawable2.setTintBlendMode(blendMode);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        Drawable drawable = this.f55589v;
        if (drawable != null) {
            drawable.setTintList(colorStateList);
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 != null) {
            drawable2.setTintList(colorStateList);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        Drawable drawable = this.f55589v;
        if (drawable != null) {
            drawable.setTintMode(mode);
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 != null) {
            drawable2.setTintMode(mode);
        }
    }

    @Override // android.graphics.drawable.Animatable
    public void start() {
        Animatable animatable;
        Drawable drawable = this.f55589v;
        Animatable animatable2 = null;
        if (drawable instanceof Animatable) {
            animatable = (Animatable) drawable;
        } else {
            animatable = null;
        }
        if (animatable != null) {
            animatable.start();
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 instanceof Animatable) {
            animatable2 = (Animatable) drawable2;
        }
        if (animatable2 != null) {
            animatable2.start();
        }
        if (this.f55588u != 0) {
            return;
        }
        this.f55588u = 1;
        this.f55586s = SystemClock.uptimeMillis();
        List list = this.f55583p;
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            ((b) list.get(i10)).c(this);
        }
        invalidateSelf();
    }

    @Override // android.graphics.drawable.Animatable
    public void stop() {
        Animatable animatable;
        Drawable drawable = this.f55589v;
        Animatable animatable2 = null;
        if (drawable instanceof Animatable) {
            animatable = (Animatable) drawable;
        } else {
            animatable = null;
        }
        if (animatable != null) {
            animatable.stop();
        }
        Drawable drawable2 = this.f55590w;
        if (drawable2 instanceof Animatable) {
            animatable2 = (Animatable) drawable2;
        }
        if (animatable2 != null) {
            animatable2.stop();
        }
        if (this.f55588u != 2) {
            b();
        }
    }

    @Override // android.graphics.drawable.Drawable.Callback
    public void unscheduleDrawable(Drawable drawable, Runnable runnable) {
        unscheduleSelf(runnable);
    }
}
