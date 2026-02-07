package com.google.android.exoplayer2.ui;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.text.Layout;
import android.text.StaticLayout;
import android.text.TextPaint;
import android.text.TextUtils;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class f {
    private int A;
    private int B;
    private int C;
    private int D;
    private StaticLayout E;
    private StaticLayout F;
    private int G;
    private int H;
    private int I;
    private Rect J;

    /* renamed from: a  reason: collision with root package name */
    private final float f13230a;

    /* renamed from: b  reason: collision with root package name */
    private final float f13231b;

    /* renamed from: c  reason: collision with root package name */
    private final float f13232c;

    /* renamed from: d  reason: collision with root package name */
    private final float f13233d;

    /* renamed from: e  reason: collision with root package name */
    private final float f13234e;

    /* renamed from: f  reason: collision with root package name */
    private final TextPaint f13235f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f13236g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f13237h;

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f13238i;

    /* renamed from: j  reason: collision with root package name */
    private Layout.Alignment f13239j;

    /* renamed from: k  reason: collision with root package name */
    private Bitmap f13240k;

    /* renamed from: l  reason: collision with root package name */
    private float f13241l;

    /* renamed from: m  reason: collision with root package name */
    private int f13242m;

    /* renamed from: n  reason: collision with root package name */
    private int f13243n;

    /* renamed from: o  reason: collision with root package name */
    private float f13244o;

    /* renamed from: p  reason: collision with root package name */
    private int f13245p;

    /* renamed from: q  reason: collision with root package name */
    private float f13246q;

    /* renamed from: r  reason: collision with root package name */
    private float f13247r;

    /* renamed from: s  reason: collision with root package name */
    private int f13248s;

    /* renamed from: t  reason: collision with root package name */
    private int f13249t;

    /* renamed from: u  reason: collision with root package name */
    private int f13250u;

    /* renamed from: v  reason: collision with root package name */
    private int f13251v;

    /* renamed from: w  reason: collision with root package name */
    private int f13252w;

    /* renamed from: x  reason: collision with root package name */
    private float f13253x;

    /* renamed from: y  reason: collision with root package name */
    private float f13254y;

    /* renamed from: z  reason: collision with root package name */
    private float f13255z;

    public f(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(null, new int[]{16843287, 16843288}, 0, 0);
        this.f13234e = obtainStyledAttributes.getDimensionPixelSize(0, 0);
        this.f13233d = obtainStyledAttributes.getFloat(1, 1.0f);
        obtainStyledAttributes.recycle();
        float round = Math.round((context.getResources().getDisplayMetrics().densityDpi * 2.0f) / 160.0f);
        this.f13230a = round;
        this.f13231b = round;
        this.f13232c = round;
        TextPaint textPaint = new TextPaint();
        this.f13235f = textPaint;
        textPaint.setAntiAlias(true);
        textPaint.setSubpixelText(true);
        Paint paint = new Paint();
        this.f13236g = paint;
        paint.setAntiAlias(true);
        paint.setStyle(Paint.Style.FILL);
        Paint paint2 = new Paint();
        this.f13237h = paint2;
        paint2.setAntiAlias(true);
        paint2.setFilterBitmap(true);
    }

    private static boolean a(CharSequence charSequence, CharSequence charSequence2) {
        if (charSequence != charSequence2) {
            if (charSequence == null || !charSequence.equals(charSequence2)) {
                return false;
            }
            return true;
        }
        return true;
    }

    private void c(Canvas canvas) {
        canvas.drawBitmap(this.f13240k, (Rect) null, this.J, this.f13237h);
    }

    private void d(Canvas canvas, boolean z10) {
        if (z10) {
            e(canvas);
            return;
        }
        ne.a.e(this.J);
        ne.a.e(this.f13240k);
        c(canvas);
    }

    private void e(Canvas canvas) {
        Canvas canvas2;
        int i10;
        StaticLayout staticLayout = this.E;
        StaticLayout staticLayout2 = this.F;
        if (staticLayout != null && staticLayout2 != null) {
            int save = canvas.save();
            canvas.translate(this.G, this.H);
            if (Color.alpha(this.f13250u) > 0) {
                this.f13236g.setColor(this.f13250u);
                canvas2 = canvas;
                canvas2.drawRect(-this.I, 0.0f, staticLayout.getWidth() + this.I, staticLayout.getHeight(), this.f13236g);
            } else {
                canvas2 = canvas;
            }
            int i11 = this.f13252w;
            boolean z10 = true;
            if (i11 == 1) {
                this.f13235f.setStrokeJoin(Paint.Join.ROUND);
                this.f13235f.setStrokeWidth(this.f13230a);
                this.f13235f.setColor(this.f13251v);
                this.f13235f.setStyle(Paint.Style.FILL_AND_STROKE);
                staticLayout2.draw(canvas2);
            } else if (i11 == 2) {
                TextPaint textPaint = this.f13235f;
                float f10 = this.f13231b;
                float f11 = this.f13232c;
                textPaint.setShadowLayer(f10, f11, f11, this.f13251v);
            } else if (i11 == 3 || i11 == 4) {
                if (i11 != 3) {
                    z10 = false;
                }
                int i12 = -1;
                if (z10) {
                    i10 = -1;
                } else {
                    i10 = this.f13251v;
                }
                if (z10) {
                    i12 = this.f13251v;
                }
                float f12 = this.f13231b / 2.0f;
                this.f13235f.setColor(this.f13248s);
                this.f13235f.setStyle(Paint.Style.FILL);
                float f13 = -f12;
                this.f13235f.setShadowLayer(this.f13231b, f13, f13, i10);
                staticLayout2.draw(canvas2);
                this.f13235f.setShadowLayer(this.f13231b, f12, f12, i12);
            }
            this.f13235f.setColor(this.f13248s);
            this.f13235f.setStyle(Paint.Style.FILL);
            staticLayout.draw(canvas2);
            this.f13235f.setShadowLayer(0.0f, 0.0f, 0.0f, 0);
            canvas2.restoreToCount(save);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:14:0x0056  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0059  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void f() {
        /*
            r7 = this;
            android.graphics.Bitmap r0 = r7.f13240k
            int r1 = r7.C
            int r2 = r7.A
            int r1 = r1 - r2
            int r3 = r7.D
            int r4 = r7.B
            int r3 = r3 - r4
            float r2 = (float) r2
            float r1 = (float) r1
            float r5 = r7.f13244o
            float r5 = r5 * r1
            float r2 = r2 + r5
            float r4 = (float) r4
            float r3 = (float) r3
            float r5 = r7.f13241l
            float r5 = r5 * r3
            float r4 = r4 + r5
            float r5 = r7.f13246q
            float r1 = r1 * r5
            int r1 = java.lang.Math.round(r1)
            float r5 = r7.f13247r
            r6 = -8388609(0xffffffffff7fffff, float:-3.4028235E38)
            int r6 = (r5 > r6 ? 1 : (r5 == r6 ? 0 : -1))
            if (r6 == 0) goto L2e
            float r3 = r3 * r5
            int r0 = java.lang.Math.round(r3)
            goto L3f
        L2e:
            float r3 = (float) r1
            int r5 = r0.getHeight()
            float r5 = (float) r5
            int r0 = r0.getWidth()
            float r0 = (float) r0
            float r5 = r5 / r0
            float r3 = r3 * r5
            int r0 = java.lang.Math.round(r3)
        L3f:
            int r3 = r7.f13245p
            r5 = 1
            r6 = 2
            if (r3 != r6) goto L48
            float r3 = (float) r1
        L46:
            float r2 = r2 - r3
            goto L4e
        L48:
            if (r3 != r5) goto L4e
            int r3 = r1 / 2
            float r3 = (float) r3
            goto L46
        L4e:
            int r2 = java.lang.Math.round(r2)
            int r3 = r7.f13243n
            if (r3 != r6) goto L59
            float r3 = (float) r0
        L57:
            float r4 = r4 - r3
            goto L5f
        L59:
            if (r3 != r5) goto L5f
            int r3 = r0 / 2
            float r3 = (float) r3
            goto L57
        L5f:
            int r3 = java.lang.Math.round(r4)
            android.graphics.Rect r4 = new android.graphics.Rect
            int r1 = r1 + r2
            int r0 = r0 + r3
            r4.<init>(r2, r3, r1, r0)
            r7.J = r4
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.ui.f.f():void");
    }

    /* JADX WARN: Removed duplicated region for block: B:72:0x019a  */
    /* JADX WARN: Removed duplicated region for block: B:73:0x019d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void g() {
        /*
            Method dump skipped, instructions count: 479
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.ui.f.g():void");
    }

    public void b(zd.b bVar, ke.b bVar2, float f10, float f11, float f12, Canvas canvas, int i10, int i11, int i12, int i13) {
        boolean z10;
        int i14;
        if (bVar.f56241o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            if (TextUtils.isEmpty(bVar.f56238d)) {
                return;
            }
            if (bVar.f56249w) {
                i14 = bVar.f56250x;
            } else {
                i14 = bVar2.f31602c;
            }
        } else {
            i14 = -16777216;
        }
        if (a(this.f13238i, bVar.f56238d) && w0.c(this.f13239j, bVar.f56239e) && this.f13240k == bVar.f56241o && this.f13241l == bVar.f56242p && this.f13242m == bVar.f56243q && w0.c(Integer.valueOf(this.f13243n), Integer.valueOf(bVar.f56244r)) && this.f13244o == bVar.f56245s && w0.c(Integer.valueOf(this.f13245p), Integer.valueOf(bVar.f56246t)) && this.f13246q == bVar.f56247u && this.f13247r == bVar.f56248v && this.f13248s == bVar2.f31600a && this.f13249t == bVar2.f31601b && this.f13250u == i14 && this.f13252w == bVar2.f31603d && this.f13251v == bVar2.f31604e && w0.c(this.f13235f.getTypeface(), bVar2.f31605f) && this.f13253x == f10 && this.f13254y == f11 && this.f13255z == f12 && this.A == i10 && this.B == i11 && this.C == i12 && this.D == i13) {
            d(canvas, z10);
            return;
        }
        this.f13238i = bVar.f56238d;
        this.f13239j = bVar.f56239e;
        this.f13240k = bVar.f56241o;
        this.f13241l = bVar.f56242p;
        this.f13242m = bVar.f56243q;
        this.f13243n = bVar.f56244r;
        this.f13244o = bVar.f56245s;
        this.f13245p = bVar.f56246t;
        this.f13246q = bVar.f56247u;
        this.f13247r = bVar.f56248v;
        this.f13248s = bVar2.f31600a;
        this.f13249t = bVar2.f31601b;
        this.f13250u = i14;
        this.f13252w = bVar2.f31603d;
        this.f13251v = bVar2.f31604e;
        this.f13235f.setTypeface(bVar2.f31605f);
        this.f13253x = f10;
        this.f13254y = f11;
        this.f13255z = f12;
        this.A = i10;
        this.B = i11;
        this.C = i12;
        this.D = i13;
        if (z10) {
            ne.a.e(this.f13238i);
            g();
        } else {
            ne.a.e(this.f13240k);
            f();
        }
        d(canvas, z10);
    }
}
