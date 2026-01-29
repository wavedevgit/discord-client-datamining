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
    private static final int[] f41925i = new int[3];

    /* renamed from: j  reason: collision with root package name */
    private static final float[] f41926j = {0.0f, 0.5f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f41927k = new int[4];

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f41928l = {0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final Paint f41929a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f41930b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f41931c;

    /* renamed from: d  reason: collision with root package name */
    private int f41932d;

    /* renamed from: e  reason: collision with root package name */
    private int f41933e;

    /* renamed from: f  reason: collision with root package name */
    private int f41934f;

    /* renamed from: g  reason: collision with root package name */
    private final Path f41935g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f41936h;

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
        Path path = this.f41935g;
        if (z10) {
            int[] iArr = f41927k;
            iArr[0] = 0;
            iArr[1] = this.f41934f;
            iArr[2] = this.f41933e;
            iArr[3] = this.f41932d;
            f12 = f10;
        } else {
            path.rewind();
            path.moveTo(rectF.centerX(), rectF.centerY());
            f12 = f10;
            path.arcTo(rectF, f12, f11);
            path.close();
            float f13 = -i10;
            rectF.inset(f13, f13);
            int[] iArr2 = f41927k;
            iArr2[0] = 0;
            iArr2[1] = this.f41932d;
            iArr2[2] = this.f41933e;
            iArr2[3] = this.f41934f;
        }
        float width = rectF.width() / 2.0f;
        if (width <= 0.0f) {
            return;
        }
        float f14 = 1.0f - (i10 / width);
        float[] fArr = f41928l;
        fArr[1] = f14;
        fArr[2] = ((1.0f - f14) / 2.0f) + f14;
        this.f41930b.setShader(new RadialGradient(rectF.centerX(), rectF.centerY(), width, f41927k, fArr, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.scale(1.0f, rectF.height() / rectF.width());
        if (!z10) {
            canvas.clipPath(path, Region.Op.DIFFERENCE);
            canvas.drawPath(path, this.f41936h);
        }
        canvas.drawArc(rectF, f12, f11, true, this.f41930b);
        canvas.restore();
    }

    public void b(Canvas canvas, Matrix matrix, RectF rectF, int i10) {
        rectF.bottom += i10;
        rectF.offset(0.0f, -i10);
        int[] iArr = f41925i;
        iArr[0] = this.f41934f;
        iArr[1] = this.f41933e;
        iArr[2] = this.f41932d;
        Paint paint = this.f41931c;
        float f10 = rectF.left;
        paint.setShader(new LinearGradient(f10, rectF.top, f10, rectF.bottom, iArr, f41926j, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.drawRect(rectF, this.f41931c);
        canvas.restore();
    }

    public Paint c() {
        return this.f41929a;
    }

    public void d(int i10) {
        this.f41932d = c.l(i10, 68);
        this.f41933e = c.l(i10, 20);
        this.f41934f = c.l(i10, 0);
        this.f41929a.setColor(this.f41932d);
    }

    public a(int i10) {
        this.f41935g = new Path();
        Paint paint = new Paint();
        this.f41936h = paint;
        this.f41929a = new Paint();
        d(i10);
        paint.setColor(0);
        Paint paint2 = new Paint(4);
        this.f41930b = paint2;
        paint2.setStyle(Paint.Style.FILL);
        this.f41931c = new Paint(paint2);
    }
}
