package com.rnlineargradient;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.LinearGradient;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.graphics.Shader;
import android.view.View;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.uimanager.PixelUtil;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends View {

    /* renamed from: d  reason: collision with root package name */
    private final Paint f17436d;

    /* renamed from: e  reason: collision with root package name */
    private Path f17437e;

    /* renamed from: i  reason: collision with root package name */
    private RectF f17438i;

    /* renamed from: o  reason: collision with root package name */
    private LinearGradient f17439o;

    /* renamed from: p  reason: collision with root package name */
    private float[] f17440p;

    /* renamed from: q  reason: collision with root package name */
    private float[] f17441q;

    /* renamed from: r  reason: collision with root package name */
    private float[] f17442r;

    /* renamed from: s  reason: collision with root package name */
    private int[] f17443s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f17444t;

    /* renamed from: u  reason: collision with root package name */
    private float[] f17445u;

    /* renamed from: v  reason: collision with root package name */
    private float f17446v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f17447w;

    /* renamed from: x  reason: collision with root package name */
    private float[] f17448x;

    public b(Context context) {
        super(context);
        this.f17436d = new Paint(1);
        this.f17441q = new float[]{0.0f, 0.0f};
        this.f17442r = new float[]{0.0f, 1.0f};
        this.f17444t = false;
        this.f17445u = new float[]{0.5f, 0.5f};
        this.f17446v = 45.0f;
        this.f17447w = new int[]{0, 0};
        this.f17448x = new float[]{0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
    }

    private void a() {
        float[] fArr;
        float[] fArr2;
        int[] iArr = this.f17443s;
        if (iArr != null) {
            float[] fArr3 = this.f17440p;
            if (fArr3 == null || iArr.length == fArr3.length) {
                if (this.f17444t && this.f17445u != null) {
                    float[] b10 = b(90.0f - this.f17446v, this.f17447w);
                    float[] fArr4 = this.f17445u;
                    float f10 = fArr4[0];
                    int[] iArr2 = this.f17447w;
                    float[] fArr5 = {f10 * iArr2[0], fArr4[1] * iArr2[1]};
                    fArr = new float[]{fArr5[0] + b10[0], fArr5[1] - b10[1]};
                    fArr2 = new float[]{fArr5[0] - b10[0], fArr5[1] + b10[1]};
                } else {
                    float[] fArr6 = this.f17441q;
                    float f11 = fArr6[0];
                    int[] iArr3 = this.f17447w;
                    int i10 = iArr3[0];
                    float f12 = fArr6[1];
                    int i11 = iArr3[1];
                    fArr = new float[]{f11 * i10, f12 * i11};
                    float[] fArr7 = this.f17442r;
                    fArr2 = new float[]{fArr7[0] * i10, fArr7[1] * i11};
                }
                LinearGradient linearGradient = new LinearGradient(fArr[0], fArr[1], fArr2[0], fArr2[1], this.f17443s, this.f17440p, Shader.TileMode.CLAMP);
                this.f17439o = linearGradient;
                this.f17436d.setShader(linearGradient);
                invalidate();
            }
        }
    }

    private static float[] b(float f10, int[] iArr) {
        float f11 = f10 % 360.0f;
        if (f11 < 0.0f) {
            f11 += 360.0f;
        }
        if (f11 % 90.0f == 0.0f) {
            return c(f11, iArr);
        }
        float tan = (float) Math.tan((f11 * 3.141592653589793d) / 180.0d);
        float f12 = (-1.0f) / tan;
        float[] d10 = d(f11, iArr);
        float f13 = (d10[1] - (d10[0] * f12)) / (tan - f12);
        return new float[]{f13, tan * f13};
    }

    private static float[] c(float f10, int[] iArr) {
        float f11 = iArr[0] / 2.0f;
        float f12 = iArr[1] / 2.0f;
        if (f10 == 0.0f) {
            return new float[]{-f11, 0.0f};
        }
        if (f10 == 90.0f) {
            return new float[]{0.0f, -f12};
        }
        return f10 == 180.0f ? new float[]{f11, 0.0f} : new float[]{0.0f, f12};
    }

    private static float[] d(float f10, int[] iArr) {
        float f11 = iArr[0] / 2.0f;
        float f12 = iArr[1] / 2.0f;
        if (f10 < 90.0f) {
            return new float[]{-f11, -f12};
        }
        if (f10 < 180.0f) {
            return new float[]{f11, -f12};
        }
        return f10 < 270.0f ? new float[]{f11, f12} : new float[]{-f11, f12};
    }

    private void e() {
        if (this.f17437e == null) {
            this.f17437e = new Path();
            this.f17438i = new RectF();
        }
        this.f17437e.reset();
        RectF rectF = this.f17438i;
        int[] iArr = this.f17447w;
        rectF.set(0.0f, 0.0f, iArr[0], iArr[1]);
        this.f17437e.addRoundRect(this.f17438i, this.f17448x, Path.Direction.CW);
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        Path path = this.f17437e;
        if (path == null) {
            canvas.drawPaint(this.f17436d);
        } else {
            canvas.drawPath(path, this.f17436d);
        }
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        this.f17447w = new int[]{i10, i11};
        e();
        a();
    }

    public void setAngle(float f10) {
        this.f17446v = f10;
        a();
    }

    public void setAngleCenter(ReadableMap readableMap) {
        this.f17445u = new float[]{(float) readableMap.getDouble("x"), (float) readableMap.getDouble("y")};
        a();
    }

    public void setBorderRadii(ReadableArray readableArray) {
        int size = readableArray.size();
        float[] fArr = new float[size];
        for (int i10 = 0; i10 < size; i10++) {
            fArr[i10] = PixelUtil.toPixelFromDIP((float) readableArray.getDouble(i10));
        }
        this.f17448x = fArr;
        e();
        a();
    }

    public void setColors(ReadableArray readableArray) {
        int i10;
        int size = readableArray.size();
        int[] iArr = new int[size];
        for (int i11 = 0; i11 < size; i11++) {
            if (readableArray.getType(i11) == ReadableType.Map) {
                i10 = ColorPropConverter.getColor(readableArray.getMap(i11), getContext()).intValue();
            } else {
                i10 = readableArray.getInt(i11);
            }
            iArr[i11] = i10;
        }
        this.f17443s = iArr;
        a();
    }

    public void setEndPoint(ReadableMap readableMap) {
        this.f17442r = new float[]{(float) readableMap.getDouble("x"), (float) readableMap.getDouble("y")};
        a();
    }

    public void setLocations(ReadableArray readableArray) {
        int size = readableArray.size();
        float[] fArr = new float[size];
        for (int i10 = 0; i10 < size; i10++) {
            fArr[i10] = (float) readableArray.getDouble(i10);
        }
        this.f17440p = fArr;
        a();
    }

    public void setStartPoint(ReadableMap readableMap) {
        this.f17441q = new float[]{(float) readableMap.getDouble("x"), (float) readableMap.getDouble("y")};
        a();
    }

    public void setUseAngle(boolean z10) {
        this.f17444t = z10;
        a();
    }
}
