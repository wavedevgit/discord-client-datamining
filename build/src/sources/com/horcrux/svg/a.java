package com.horcrux.svg;

import android.graphics.Bitmap;
import android.graphics.BitmapShader;
import android.graphics.Canvas;
import android.graphics.LinearGradient;
import android.graphics.Matrix;
import android.graphics.Paint;
import android.graphics.RadialGradient;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Shader;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.ReactConstants;
import com.horcrux.svg.SVGLength;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private final EnumC0187a f16384a;

    /* renamed from: b  reason: collision with root package name */
    private final SVGLength[] f16385b;

    /* renamed from: c  reason: collision with root package name */
    private ReadableArray f16386c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f16387d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f16388e;

    /* renamed from: f  reason: collision with root package name */
    private Matrix f16389f;

    /* renamed from: g  reason: collision with root package name */
    private Rect f16390g;

    /* renamed from: h  reason: collision with root package name */
    private l0 f16391h;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.horcrux.svg.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum EnumC0187a {
        LINEAR_GRADIENT,
        RADIAL_GRADIENT,
        PATTERN
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b {
        OBJECT_BOUNDING_BOX,
        USER_SPACE_ON_USE
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(EnumC0187a enumC0187a, SVGLength[] sVGLengthArr, b bVar) {
        boolean z10;
        this.f16384a = enumC0187a;
        this.f16385b = sVGLengthArr;
        if (bVar == b.OBJECT_BOUNDING_BOX) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f16387d = z10;
    }

    private RectF a(RectF rectF) {
        float f10;
        float f11;
        if (!this.f16387d) {
            rectF = new RectF(this.f16390g);
        }
        float width = rectF.width();
        float height = rectF.height();
        if (this.f16387d) {
            f10 = rectF.left;
            f11 = rectF.top;
        } else {
            f10 = 0.0f;
            f11 = 0.0f;
        }
        return new RectF(f10, f11, width + f10, height + f11);
    }

    private double b(SVGLength sVGLength, double d10, float f10, float f11) {
        double d11;
        if (this.f16387d && sVGLength.f16341b == SVGLength.UnitType.NUMBER) {
            d11 = d10;
        } else {
            d11 = f10;
        }
        return n0.a(sVGLength, d10, 0.0d, d11, f11);
    }

    private static void c(ReadableArray readableArray, int i10, float[] fArr, int[] iArr, float f10) {
        for (int i11 = 0; i11 < i10; i11++) {
            int i12 = i11 * 2;
            fArr[i11] = (float) readableArray.getDouble(i12);
            int i13 = readableArray.getInt(i12 + 1);
            iArr[i11] = (i13 & 16777215) | (Math.round((i13 >>> 24) * f10) << 24);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(b bVar) {
        boolean z10;
        if (bVar == b.OBJECT_BOUNDING_BOX) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f16388e = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(ReadableArray readableArray) {
        this.f16386c = readableArray;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Matrix matrix) {
        this.f16389f = matrix;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(l0 l0Var) {
        this.f16391h = l0Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(Rect rect) {
        this.f16390g = rect;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void i(Paint paint, RectF rectF, float f10, float f11) {
        int[] iArr;
        float[] fArr;
        int[] iArr2;
        float[] fArr2;
        double d10;
        float f12;
        RectF a10 = a(rectF);
        float width = a10.width();
        float height = a10.height();
        float f13 = a10.left;
        float f14 = a10.top;
        float textSize = paint.getTextSize();
        if (this.f16384a == EnumC0187a.PATTERN) {
            double d11 = width;
            double b10 = b(this.f16385b[0], d11, f10, textSize);
            double d12 = height;
            double b11 = b(this.f16385b[1], d12, f10, textSize);
            double b12 = b(this.f16385b[2], d11, f10, textSize);
            double b13 = b(this.f16385b[3], d12, f10, textSize);
            if (b12 > 1.0d && b13 > 1.0d) {
                Bitmap createBitmap = Bitmap.createBitmap((int) b12, (int) b13, Bitmap.Config.ARGB_8888);
                Canvas canvas = new Canvas(createBitmap);
                RectF viewBox = this.f16391h.getViewBox();
                if (viewBox != null && viewBox.width() > 0.0f && viewBox.height() > 0.0f) {
                    f12 = height;
                    RectF rectF2 = new RectF((float) b10, (float) b11, (float) b12, (float) b13);
                    l0 l0Var = this.f16391h;
                    canvas.concat(l1.a(viewBox, rectF2, l0Var.A, l0Var.B));
                } else {
                    f12 = height;
                }
                if (this.f16388e) {
                    canvas.scale(width / f10, f12 / f10);
                }
                this.f16391h.draw(canvas, new Paint(), f11);
                Matrix matrix = new Matrix();
                Matrix matrix2 = this.f16389f;
                if (matrix2 != null) {
                    matrix.preConcat(matrix2);
                }
                Shader.TileMode tileMode = Shader.TileMode.REPEAT;
                BitmapShader bitmapShader = new BitmapShader(createBitmap, tileMode, tileMode);
                bitmapShader.setLocalMatrix(matrix);
                paint.setShader(bitmapShader);
                return;
            }
            return;
        }
        int size = this.f16386c.size();
        if (size == 0) {
            p8.a.J(ReactConstants.TAG, "Gradient contains no stops");
            return;
        }
        int i10 = size / 2;
        int[] iArr3 = new int[i10];
        float[] fArr3 = new float[i10];
        c(this.f16386c, i10, fArr3, iArr3, f11);
        if (i10 == 1) {
            int[] iArr4 = {iArr3[0], iArr3[0]};
            float[] fArr4 = {fArr3[0], fArr3[0]};
            p8.a.J(ReactConstants.TAG, "Gradient contains only one stop");
            fArr = fArr4;
            iArr = iArr4;
        } else {
            iArr = iArr3;
            fArr = fArr3;
        }
        EnumC0187a enumC0187a = this.f16384a;
        if (enumC0187a == EnumC0187a.LINEAR_GRADIENT) {
            double d13 = width;
            double d14 = f13;
            double b14 = b(this.f16385b[0], d13, f10, textSize) + d14;
            double d15 = height;
            double d16 = f14;
            LinearGradient linearGradient = new LinearGradient((float) b14, (float) (b(this.f16385b[1], d15, f10, textSize) + d16), (float) (d14 + b(this.f16385b[2], d13, f10, textSize)), (float) (b(this.f16385b[3], d15, f10, textSize) + d16), iArr, fArr, Shader.TileMode.CLAMP);
            if (this.f16389f != null) {
                Matrix matrix3 = new Matrix();
                matrix3.preConcat(this.f16389f);
                linearGradient.setLocalMatrix(matrix3);
            }
            paint.setShader(linearGradient);
            return;
        }
        int[] iArr5 = iArr;
        float[] fArr5 = fArr;
        if (enumC0187a == EnumC0187a.RADIAL_GRADIENT) {
            double d17 = width;
            double b15 = b(this.f16385b[2], d17, f10, textSize);
            double d18 = height;
            double b16 = b(this.f16385b[3], d18, f10, textSize);
            if (b15 > 0.0d && b16 > 0.0d) {
                iArr2 = iArr5;
                fArr2 = fArr5;
                d10 = b16;
            } else {
                float[] fArr6 = {fArr5[0], fArr5[fArr5.length - 1]};
                iArr2 = new int[]{iArr5[iArr5.length - 1], iArr5[iArr5.length - 1]};
                fArr2 = fArr6;
                b15 = d17;
                d10 = d18;
            }
            double d19 = d10 / b15;
            RadialGradient radialGradient = new RadialGradient((float) (b(this.f16385b[4], d17, f10, textSize) + f13), (float) (b(this.f16385b[5], d18 / d19, f10, textSize) + (f14 / d19)), (float) b15, iArr2, fArr2, Shader.TileMode.CLAMP);
            Matrix matrix4 = new Matrix();
            matrix4.preScale(1.0f, (float) d19);
            Matrix matrix5 = this.f16389f;
            if (matrix5 != null) {
                matrix4.preConcat(matrix5);
            }
            radialGradient.setLocalMatrix(matrix4);
            paint.setShader(radialGradient);
        }
    }
}
