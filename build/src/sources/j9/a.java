package j9;

import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.drawable.Drawable;
import com.facebook.drawee.drawable.ScalingUtils$ScaleType;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import k9.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends Drawable implements b {
    private int A;
    private int B;
    private int C;
    private int D;
    private int E;
    private long F;
    private String G;

    /* renamed from: d  reason: collision with root package name */
    private String f31688d;

    /* renamed from: e  reason: collision with root package name */
    private String f31689e;

    /* renamed from: i  reason: collision with root package name */
    private int f31690i;

    /* renamed from: o  reason: collision with root package name */
    private int f31691o;

    /* renamed from: p  reason: collision with root package name */
    private int f31692p;

    /* renamed from: q  reason: collision with root package name */
    private String f31693q;

    /* renamed from: r  reason: collision with root package name */
    private ScalingUtils$ScaleType f31694r;

    /* renamed from: t  reason: collision with root package name */
    private int f31696t;

    /* renamed from: u  reason: collision with root package name */
    private int f31697u;

    /* renamed from: s  reason: collision with root package name */
    private HashMap f31695s = new HashMap();

    /* renamed from: v  reason: collision with root package name */
    private int f31698v = 80;

    /* renamed from: w  reason: collision with root package name */
    private final Paint f31699w = new Paint(1);

    /* renamed from: x  reason: collision with root package name */
    private final Matrix f31700x = new Matrix();

    /* renamed from: y  reason: collision with root package name */
    private final Rect f31701y = new Rect();

    /* renamed from: z  reason: collision with root package name */
    private final RectF f31702z = new RectF();
    private int H = -1;
    private int I = 0;

    public a() {
        i();
    }

    private void c(Canvas canvas, String str, Object obj) {
        e(canvas, str, String.valueOf(obj), -1);
    }

    private void d(Canvas canvas, String str, String str2) {
        e(canvas, str, str2, -1);
    }

    private void e(Canvas canvas, String str, String str2, int i10) {
        String str3 = str + ": ";
        float measureText = this.f31699w.measureText(str3);
        float measureText2 = this.f31699w.measureText(str2);
        this.f31699w.setColor(1711276032);
        int i11 = this.D;
        int i12 = this.E;
        canvas.drawRect(i11 - 4, i12 + 8, i11 + measureText + measureText2 + 4.0f, i12 + this.C + 8, this.f31699w);
        this.f31699w.setColor(-1);
        canvas.drawText(str3, this.D, this.E, this.f31699w);
        this.f31699w.setColor(i10);
        canvas.drawText(str2, this.D + measureText, this.E, this.f31699w);
        this.E += this.C;
    }

    private static String g(String str, Object... objArr) {
        if (objArr == null) {
            return str;
        }
        return String.format(Locale.US, str, objArr);
    }

    private void h(Rect rect, int i10, int i11) {
        int i12;
        int min = Math.min(40, Math.max(10, Math.min(rect.width() / i11, rect.height() / i10)));
        this.f31699w.setTextSize(min);
        int i13 = min + 8;
        this.C = i13;
        int i14 = this.f31698v;
        if (i14 == 80) {
            this.C = i13 * (-1);
        }
        this.A = rect.left + 10;
        if (i14 == 80) {
            i12 = rect.bottom - 10;
        } else {
            i12 = rect.top + 20;
        }
        this.B = i12;
    }

    @Override // k9.b
    public void a(long j10) {
        this.F = j10;
        invalidateSelf();
    }

    public void b(String str, String str2) {
        this.f31695s.put(str, str2);
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Rect bounds = getBounds();
        this.f31699w.setStyle(Paint.Style.STROKE);
        this.f31699w.setStrokeWidth(2.0f);
        this.f31699w.setColor(-26624);
        canvas.drawRect(bounds.left, bounds.top, bounds.right, bounds.bottom, this.f31699w);
        Paint paint = this.f31699w;
        Paint.Style style = Paint.Style.FILL;
        paint.setStyle(style);
        this.f31699w.setColor(this.I);
        canvas.drawRect(bounds.left, bounds.top, bounds.right, bounds.bottom, this.f31699w);
        this.f31699w.setStyle(style);
        this.f31699w.setStrokeWidth(0.0f);
        this.f31699w.setColor(-1);
        this.D = this.A;
        this.E = this.B;
        String str = this.f31689e;
        if (str != null) {
            d(canvas, "IDs", g("%s, %s", this.f31688d, str));
        } else {
            d(canvas, "ID", this.f31688d);
        }
        d(canvas, "D", g("%dx%d", Integer.valueOf(bounds.width()), Integer.valueOf(bounds.height())));
        if (bounds.height() > 0) {
            c(canvas, "DAR", Float.valueOf(bounds.width() / bounds.height()));
        }
        e(canvas, "I", g("%dx%d", Integer.valueOf(this.f31690i), Integer.valueOf(this.f31691o)), f(this.f31690i, this.f31691o, this.f31694r));
        int i10 = this.f31691o;
        if (i10 > 0) {
            c(canvas, "IAR", Float.valueOf(this.f31690i / i10));
        }
        d(canvas, "I", g("%d KiB", Integer.valueOf(this.f31692p / IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET)));
        String str2 = this.f31693q;
        if (str2 != null) {
            d(canvas, "i format", str2);
        }
        int i11 = this.f31696t;
        if (i11 > 0) {
            d(canvas, "anim", g("f %d, l %d", Integer.valueOf(i11), Integer.valueOf(this.f31697u)));
        }
        ScalingUtils$ScaleType scalingUtils$ScaleType = this.f31694r;
        if (scalingUtils$ScaleType != null) {
            c(canvas, "scale", scalingUtils$ScaleType);
        }
        long j10 = this.F;
        if (j10 >= 0) {
            d(canvas, "t", g("%d ms", Long.valueOf(j10)));
        }
        String str3 = this.G;
        if (str3 != null) {
            e(canvas, "origin", str3, this.H);
        }
        for (Map.Entry entry : this.f31695s.entrySet()) {
            d(canvas, (String) entry.getKey(), (String) entry.getValue());
        }
    }

    int f(int i10, int i11, ScalingUtils$ScaleType scalingUtils$ScaleType) {
        int i12;
        int i13;
        int width = getBounds().width();
        int height = getBounds().height();
        if (width > 0 && height > 0 && i10 > 0 && i11 > 0) {
            if (scalingUtils$ScaleType != null) {
                Rect rect = this.f31701y;
                rect.top = 0;
                rect.left = 0;
                rect.right = width;
                rect.bottom = height;
                this.f31700x.reset();
                i12 = i10;
                i13 = i11;
                scalingUtils$ScaleType.getTransform(this.f31700x, this.f31701y, i12, i13, 0.0f, 0.0f);
                RectF rectF = this.f31702z;
                rectF.top = 0.0f;
                rectF.left = 0.0f;
                rectF.right = i12;
                rectF.bottom = i13;
                this.f31700x.mapRect(rectF);
                width = Math.min(width, (int) this.f31702z.width());
                height = Math.min(height, (int) this.f31702z.height());
            } else {
                i12 = i10;
                i13 = i11;
            }
            float f10 = width;
            float f11 = f10 * 0.1f;
            float f12 = f10 * 0.5f;
            float f13 = height;
            float f14 = 0.1f * f13;
            float f15 = f13 * 0.5f;
            int abs = Math.abs(i12 - width);
            int abs2 = Math.abs(i13 - height);
            float f16 = abs;
            if (f16 < f11 && abs2 < f14) {
                return -16711936;
            }
            if (f16 < f12 && abs2 < f15) {
                return -256;
            }
        }
        return -65536;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    public void i() {
        this.f31690i = -1;
        this.f31691o = -1;
        this.f31692p = -1;
        this.f31695s = new HashMap();
        this.f31696t = -1;
        this.f31697u = -1;
        this.f31693q = null;
        j(null);
        this.F = -1L;
        this.G = null;
        this.H = -1;
        invalidateSelf();
    }

    public void j(String str) {
        if (str == null) {
            str = ViewProps.NONE;
        }
        this.f31688d = str;
        invalidateSelf();
    }

    public void k(int i10, int i11) {
        this.f31690i = i10;
        this.f31691o = i11;
        invalidateSelf();
    }

    public void l(int i10) {
        this.f31692p = i10;
    }

    public void m(ScalingUtils$ScaleType scalingUtils$ScaleType) {
        this.f31694r = scalingUtils$ScaleType;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        h(rect, 9, 8);
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
    }
}
