package qh;

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
    private static final int[] f46571i = new int[3];

    /* renamed from: j  reason: collision with root package name */
    private static final float[] f46572j = {0.0f, 0.5f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f46573k = new int[4];

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f46574l = {0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final Paint f46575a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f46576b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f46577c;

    /* renamed from: d  reason: collision with root package name */
    private int f46578d;

    /* renamed from: e  reason: collision with root package name */
    private int f46579e;

    /* renamed from: f  reason: collision with root package name */
    private int f46580f;

    /* renamed from: g  reason: collision with root package name */
    private final Path f46581g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f46582h;

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
        Path path = this.f46581g;
        if (z10) {
            int[] iArr = f46573k;
            iArr[0] = 0;
            iArr[1] = this.f46580f;
            iArr[2] = this.f46579e;
            iArr[3] = this.f46578d;
            f12 = f10;
        } else {
            path.rewind();
            path.moveTo(rectF.centerX(), rectF.centerY());
            f12 = f10;
            path.arcTo(rectF, f12, f11);
            path.close();
            float f13 = -i10;
            rectF.inset(f13, f13);
            int[] iArr2 = f46573k;
            iArr2[0] = 0;
            iArr2[1] = this.f46578d;
            iArr2[2] = this.f46579e;
            iArr2[3] = this.f46580f;
        }
        float width = rectF.width() / 2.0f;
        if (width <= 0.0f) {
            return;
        }
        float f14 = 1.0f - (i10 / width);
        float[] fArr = f46574l;
        fArr[1] = f14;
        fArr[2] = ((1.0f - f14) / 2.0f) + f14;
        this.f46576b.setShader(new RadialGradient(rectF.centerX(), rectF.centerY(), width, f46573k, fArr, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.scale(1.0f, rectF.height() / rectF.width());
        if (!z10) {
            canvas.clipPath(path, Region.Op.DIFFERENCE);
            canvas.drawPath(path, this.f46582h);
        }
        canvas.drawArc(rectF, f12, f11, true, this.f46576b);
        canvas.restore();
    }

    public void b(Canvas canvas, Matrix matrix, RectF rectF, int i10) {
        rectF.bottom += i10;
        rectF.offset(0.0f, -i10);
        int[] iArr = f46571i;
        iArr[0] = this.f46580f;
        iArr[1] = this.f46579e;
        iArr[2] = this.f46578d;
        Paint paint = this.f46577c;
        float f10 = rectF.left;
        paint.setShader(new LinearGradient(f10, rectF.top, f10, rectF.bottom, iArr, f46572j, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.drawRect(rectF, this.f46577c);
        canvas.restore();
    }

    public Paint c() {
        return this.f46575a;
    }

    public void d(int i10) {
        this.f46578d = c.l(i10, 68);
        this.f46579e = c.l(i10, 20);
        this.f46580f = c.l(i10, 0);
        this.f46575a.setColor(this.f46578d);
    }

    public a(int i10) {
        this.f46581g = new Path();
        Paint paint = new Paint();
        this.f46582h = paint;
        this.f46575a = new Paint();
        d(i10);
        paint.setColor(0);
        Paint paint2 = new Paint(4);
        this.f46576b = paint2;
        paint2.setStyle(Paint.Style.FILL);
        this.f46577c = new Paint(paint2);
    }
}
