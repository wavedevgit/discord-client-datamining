package nh;

import android.graphics.Canvas;
import android.graphics.LinearGradient;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RadialGradient;
import android.graphics.RectF;
import android.graphics.Region;
import android.graphics.Shader;
import r1.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: i  reason: collision with root package name */
    private static final int[] f41843i = new int[3];

    /* renamed from: j  reason: collision with root package name */
    private static final float[] f41844j = {0.0f, 0.5f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f41845k = new int[4];

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f41846l = {0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final Paint f41847a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f41848b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f41849c;

    /* renamed from: d  reason: collision with root package name */
    private int f41850d;

    /* renamed from: e  reason: collision with root package name */
    private int f41851e;

    /* renamed from: f  reason: collision with root package name */
    private int f41852f;

    /* renamed from: g  reason: collision with root package name */
    private final Path f41853g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f41854h;

    public a() {
        this(-16777216);
    }

    public void a(Canvas canvas, Matrix matrix, RectF rectF, int i10, float f10, float f11) {
        boolean z10;
        float f12;
        if (f11 < 0.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        Path path = this.f41853g;
        if (z10) {
            int[] iArr = f41845k;
            iArr[0] = 0;
            iArr[1] = this.f41852f;
            iArr[2] = this.f41851e;
            iArr[3] = this.f41850d;
            f12 = f10;
        } else {
            path.rewind();
            path.moveTo(rectF.centerX(), rectF.centerY());
            f12 = f10;
            path.arcTo(rectF, f12, f11);
            path.close();
            float f13 = -i10;
            rectF.inset(f13, f13);
            int[] iArr2 = f41845k;
            iArr2[0] = 0;
            iArr2[1] = this.f41850d;
            iArr2[2] = this.f41851e;
            iArr2[3] = this.f41852f;
        }
        float width = rectF.width() / 2.0f;
        if (width <= 0.0f) {
            return;
        }
        float f14 = 1.0f - (i10 / width);
        float[] fArr = f41846l;
        fArr[1] = f14;
        fArr[2] = ((1.0f - f14) / 2.0f) + f14;
        this.f41848b.setShader(new RadialGradient(rectF.centerX(), rectF.centerY(), width, f41845k, fArr, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.scale(1.0f, rectF.height() / rectF.width());
        if (!z10) {
            canvas.clipPath(path, Region.Op.DIFFERENCE);
            canvas.drawPath(path, this.f41854h);
        }
        canvas.drawArc(rectF, f12, f11, true, this.f41848b);
        canvas.restore();
    }

    public void b(Canvas canvas, Matrix matrix, RectF rectF, int i10) {
        rectF.bottom += i10;
        rectF.offset(0.0f, -i10);
        int[] iArr = f41843i;
        iArr[0] = this.f41852f;
        iArr[1] = this.f41851e;
        iArr[2] = this.f41850d;
        Paint paint = this.f41849c;
        float f10 = rectF.left;
        paint.setShader(new LinearGradient(f10, rectF.top, f10, rectF.bottom, iArr, f41844j, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.drawRect(rectF, this.f41849c);
        canvas.restore();
    }

    public Paint c() {
        return this.f41847a;
    }

    public void d(int i10) {
        this.f41850d = c.l(i10, 68);
        this.f41851e = c.l(i10, 20);
        this.f41852f = c.l(i10, 0);
        this.f41847a.setColor(this.f41850d);
    }

    public a(int i10) {
        this.f41853g = new Path();
        Paint paint = new Paint();
        this.f41854h = paint;
        this.f41847a = new Paint();
        d(i10);
        paint.setColor(0);
        Paint paint2 = new Paint(4);
        this.f41848b = paint2;
        paint2.setStyle(Paint.Style.FILL);
        this.f41849c = new Paint(paint2);
    }
}
