package sh;

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
    private static final int[] f48120i = new int[3];

    /* renamed from: j  reason: collision with root package name */
    private static final float[] f48121j = {0.0f, 0.5f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f48122k = new int[4];

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f48123l = {0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final Paint f48124a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f48125b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f48126c;

    /* renamed from: d  reason: collision with root package name */
    private int f48127d;

    /* renamed from: e  reason: collision with root package name */
    private int f48128e;

    /* renamed from: f  reason: collision with root package name */
    private int f48129f;

    /* renamed from: g  reason: collision with root package name */
    private final Path f48130g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f48131h;

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
        Path path = this.f48130g;
        if (z10) {
            int[] iArr = f48122k;
            iArr[0] = 0;
            iArr[1] = this.f48129f;
            iArr[2] = this.f48128e;
            iArr[3] = this.f48127d;
            f12 = f10;
        } else {
            path.rewind();
            path.moveTo(rectF.centerX(), rectF.centerY());
            f12 = f10;
            path.arcTo(rectF, f12, f11);
            path.close();
            float f13 = -i10;
            rectF.inset(f13, f13);
            int[] iArr2 = f48122k;
            iArr2[0] = 0;
            iArr2[1] = this.f48127d;
            iArr2[2] = this.f48128e;
            iArr2[3] = this.f48129f;
        }
        float width = rectF.width() / 2.0f;
        if (width <= 0.0f) {
            return;
        }
        float f14 = 1.0f - (i10 / width);
        float[] fArr = f48123l;
        fArr[1] = f14;
        fArr[2] = ((1.0f - f14) / 2.0f) + f14;
        this.f48125b.setShader(new RadialGradient(rectF.centerX(), rectF.centerY(), width, f48122k, fArr, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.scale(1.0f, rectF.height() / rectF.width());
        if (!z10) {
            canvas.clipPath(path, Region.Op.DIFFERENCE);
            canvas.drawPath(path, this.f48131h);
        }
        canvas.drawArc(rectF, f12, f11, true, this.f48125b);
        canvas.restore();
    }

    public void b(Canvas canvas, Matrix matrix, RectF rectF, int i10) {
        rectF.bottom += i10;
        rectF.offset(0.0f, -i10);
        int[] iArr = f48120i;
        iArr[0] = this.f48129f;
        iArr[1] = this.f48128e;
        iArr[2] = this.f48127d;
        Paint paint = this.f48126c;
        float f10 = rectF.left;
        paint.setShader(new LinearGradient(f10, rectF.top, f10, rectF.bottom, iArr, f48121j, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.drawRect(rectF, this.f48126c);
        canvas.restore();
    }

    public Paint c() {
        return this.f48124a;
    }

    public void d(int i10) {
        this.f48127d = c.l(i10, 68);
        this.f48128e = c.l(i10, 20);
        this.f48129f = c.l(i10, 0);
        this.f48124a.setColor(this.f48127d);
    }

    public a(int i10) {
        this.f48130g = new Path();
        Paint paint = new Paint();
        this.f48131h = paint;
        this.f48124a = new Paint();
        d(i10);
        paint.setColor(0);
        Paint paint2 = new Paint(4);
        this.f48125b = paint2;
        paint2.setStyle(Paint.Style.FILL);
        this.f48126c = new Paint(paint2);
    }
}
