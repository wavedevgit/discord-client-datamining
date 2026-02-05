package oh;

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
    private static final int[] f43667i = new int[3];

    /* renamed from: j  reason: collision with root package name */
    private static final float[] f43668j = {0.0f, 0.5f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f43669k = new int[4];

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f43670l = {0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final Paint f43671a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f43672b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f43673c;

    /* renamed from: d  reason: collision with root package name */
    private int f43674d;

    /* renamed from: e  reason: collision with root package name */
    private int f43675e;

    /* renamed from: f  reason: collision with root package name */
    private int f43676f;

    /* renamed from: g  reason: collision with root package name */
    private final Path f43677g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f43678h;

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
        Path path = this.f43677g;
        if (z10) {
            int[] iArr = f43669k;
            iArr[0] = 0;
            iArr[1] = this.f43676f;
            iArr[2] = this.f43675e;
            iArr[3] = this.f43674d;
            f12 = f10;
        } else {
            path.rewind();
            path.moveTo(rectF.centerX(), rectF.centerY());
            f12 = f10;
            path.arcTo(rectF, f12, f11);
            path.close();
            float f13 = -i10;
            rectF.inset(f13, f13);
            int[] iArr2 = f43669k;
            iArr2[0] = 0;
            iArr2[1] = this.f43674d;
            iArr2[2] = this.f43675e;
            iArr2[3] = this.f43676f;
        }
        float width = rectF.width() / 2.0f;
        if (width <= 0.0f) {
            return;
        }
        float f14 = 1.0f - (i10 / width);
        float[] fArr = f43670l;
        fArr[1] = f14;
        fArr[2] = ((1.0f - f14) / 2.0f) + f14;
        this.f43672b.setShader(new RadialGradient(rectF.centerX(), rectF.centerY(), width, f43669k, fArr, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.scale(1.0f, rectF.height() / rectF.width());
        if (!z10) {
            canvas.clipPath(path, Region.Op.DIFFERENCE);
            canvas.drawPath(path, this.f43678h);
        }
        canvas.drawArc(rectF, f12, f11, true, this.f43672b);
        canvas.restore();
    }

    public void b(Canvas canvas, Matrix matrix, RectF rectF, int i10) {
        rectF.bottom += i10;
        rectF.offset(0.0f, -i10);
        int[] iArr = f43667i;
        iArr[0] = this.f43676f;
        iArr[1] = this.f43675e;
        iArr[2] = this.f43674d;
        Paint paint = this.f43673c;
        float f10 = rectF.left;
        paint.setShader(new LinearGradient(f10, rectF.top, f10, rectF.bottom, iArr, f43668j, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.drawRect(rectF, this.f43673c);
        canvas.restore();
    }

    public Paint c() {
        return this.f43671a;
    }

    public void d(int i10) {
        this.f43674d = c.l(i10, 68);
        this.f43675e = c.l(i10, 20);
        this.f43676f = c.l(i10, 0);
        this.f43671a.setColor(this.f43674d);
    }

    public a(int i10) {
        this.f43677g = new Path();
        Paint paint = new Paint();
        this.f43678h = paint;
        this.f43671a = new Paint();
        d(i10);
        paint.setColor(0);
        Paint paint2 = new Paint(4);
        this.f43672b = paint2;
        paint2.setStyle(Paint.Style.FILL);
        this.f43673c = new Paint(paint2);
    }
}
