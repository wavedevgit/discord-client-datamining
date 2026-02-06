package ph;

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
    private static final int[] f45009i = new int[3];

    /* renamed from: j  reason: collision with root package name */
    private static final float[] f45010j = {0.0f, 0.5f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f45011k = new int[4];

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f45012l = {0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final Paint f45013a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f45014b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f45015c;

    /* renamed from: d  reason: collision with root package name */
    private int f45016d;

    /* renamed from: e  reason: collision with root package name */
    private int f45017e;

    /* renamed from: f  reason: collision with root package name */
    private int f45018f;

    /* renamed from: g  reason: collision with root package name */
    private final Path f45019g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f45020h;

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
        Path path = this.f45019g;
        if (z10) {
            int[] iArr = f45011k;
            iArr[0] = 0;
            iArr[1] = this.f45018f;
            iArr[2] = this.f45017e;
            iArr[3] = this.f45016d;
            f12 = f10;
        } else {
            path.rewind();
            path.moveTo(rectF.centerX(), rectF.centerY());
            f12 = f10;
            path.arcTo(rectF, f12, f11);
            path.close();
            float f13 = -i10;
            rectF.inset(f13, f13);
            int[] iArr2 = f45011k;
            iArr2[0] = 0;
            iArr2[1] = this.f45016d;
            iArr2[2] = this.f45017e;
            iArr2[3] = this.f45018f;
        }
        float width = rectF.width() / 2.0f;
        if (width <= 0.0f) {
            return;
        }
        float f14 = 1.0f - (i10 / width);
        float[] fArr = f45012l;
        fArr[1] = f14;
        fArr[2] = ((1.0f - f14) / 2.0f) + f14;
        this.f45014b.setShader(new RadialGradient(rectF.centerX(), rectF.centerY(), width, f45011k, fArr, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.scale(1.0f, rectF.height() / rectF.width());
        if (!z10) {
            canvas.clipPath(path, Region.Op.DIFFERENCE);
            canvas.drawPath(path, this.f45020h);
        }
        canvas.drawArc(rectF, f12, f11, true, this.f45014b);
        canvas.restore();
    }

    public void b(Canvas canvas, Matrix matrix, RectF rectF, int i10) {
        rectF.bottom += i10;
        rectF.offset(0.0f, -i10);
        int[] iArr = f45009i;
        iArr[0] = this.f45018f;
        iArr[1] = this.f45017e;
        iArr[2] = this.f45016d;
        Paint paint = this.f45015c;
        float f10 = rectF.left;
        paint.setShader(new LinearGradient(f10, rectF.top, f10, rectF.bottom, iArr, f45010j, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.drawRect(rectF, this.f45015c);
        canvas.restore();
    }

    public Paint c() {
        return this.f45013a;
    }

    public void d(int i10) {
        this.f45016d = c.l(i10, 68);
        this.f45017e = c.l(i10, 20);
        this.f45018f = c.l(i10, 0);
        this.f45013a.setColor(this.f45016d);
    }

    public a(int i10) {
        this.f45019g = new Path();
        Paint paint = new Paint();
        this.f45020h = paint;
        this.f45013a = new Paint();
        d(i10);
        paint.setColor(0);
        Paint paint2 = new Paint(4);
        this.f45014b = paint2;
        paint2.setStyle(Paint.Style.FILL);
        this.f45015c = new Paint(paint2);
    }
}
