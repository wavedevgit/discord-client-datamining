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
    private static final int[] f45057i = new int[3];

    /* renamed from: j  reason: collision with root package name */
    private static final float[] f45058j = {0.0f, 0.5f, 1.0f};

    /* renamed from: k  reason: collision with root package name */
    private static final int[] f45059k = new int[4];

    /* renamed from: l  reason: collision with root package name */
    private static final float[] f45060l = {0.0f, 0.0f, 0.5f, 1.0f};

    /* renamed from: a  reason: collision with root package name */
    private final Paint f45061a;

    /* renamed from: b  reason: collision with root package name */
    private final Paint f45062b;

    /* renamed from: c  reason: collision with root package name */
    private final Paint f45063c;

    /* renamed from: d  reason: collision with root package name */
    private int f45064d;

    /* renamed from: e  reason: collision with root package name */
    private int f45065e;

    /* renamed from: f  reason: collision with root package name */
    private int f45066f;

    /* renamed from: g  reason: collision with root package name */
    private final Path f45067g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f45068h;

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
        Path path = this.f45067g;
        if (z10) {
            int[] iArr = f45059k;
            iArr[0] = 0;
            iArr[1] = this.f45066f;
            iArr[2] = this.f45065e;
            iArr[3] = this.f45064d;
            f12 = f10;
        } else {
            path.rewind();
            path.moveTo(rectF.centerX(), rectF.centerY());
            f12 = f10;
            path.arcTo(rectF, f12, f11);
            path.close();
            float f13 = -i10;
            rectF.inset(f13, f13);
            int[] iArr2 = f45059k;
            iArr2[0] = 0;
            iArr2[1] = this.f45064d;
            iArr2[2] = this.f45065e;
            iArr2[3] = this.f45066f;
        }
        float width = rectF.width() / 2.0f;
        if (width <= 0.0f) {
            return;
        }
        float f14 = 1.0f - (i10 / width);
        float[] fArr = f45060l;
        fArr[1] = f14;
        fArr[2] = ((1.0f - f14) / 2.0f) + f14;
        this.f45062b.setShader(new RadialGradient(rectF.centerX(), rectF.centerY(), width, f45059k, fArr, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.scale(1.0f, rectF.height() / rectF.width());
        if (!z10) {
            canvas.clipPath(path, Region.Op.DIFFERENCE);
            canvas.drawPath(path, this.f45068h);
        }
        canvas.drawArc(rectF, f12, f11, true, this.f45062b);
        canvas.restore();
    }

    public void b(Canvas canvas, Matrix matrix, RectF rectF, int i10) {
        rectF.bottom += i10;
        rectF.offset(0.0f, -i10);
        int[] iArr = f45057i;
        iArr[0] = this.f45066f;
        iArr[1] = this.f45065e;
        iArr[2] = this.f45064d;
        Paint paint = this.f45063c;
        float f10 = rectF.left;
        paint.setShader(new LinearGradient(f10, rectF.top, f10, rectF.bottom, iArr, f45058j, Shader.TileMode.CLAMP));
        canvas.save();
        canvas.concat(matrix);
        canvas.drawRect(rectF, this.f45063c);
        canvas.restore();
    }

    public Paint c() {
        return this.f45061a;
    }

    public void d(int i10) {
        this.f45064d = c.l(i10, 68);
        this.f45065e = c.l(i10, 20);
        this.f45066f = c.l(i10, 0);
        this.f45061a.setColor(this.f45064d);
    }

    public a(int i10) {
        this.f45067g = new Path();
        Paint paint = new Paint();
        this.f45068h = paint;
        this.f45061a = new Paint();
        d(i10);
        paint.setColor(0);
        Paint paint2 = new Paint(4);
        this.f45062b = paint2;
        paint2.setStyle(Paint.Style.FILL);
        this.f45063c = new Paint(paint2);
    }
}
