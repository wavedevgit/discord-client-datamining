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
import oe.w0;
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
    private final float f13370a;

    /* renamed from: b  reason: collision with root package name */
    private final float f13371b;

    /* renamed from: c  reason: collision with root package name */
    private final float f13372c;

    /* renamed from: d  reason: collision with root package name */
    private final float f13373d;

    /* renamed from: e  reason: collision with root package name */
    private final float f13374e;

    /* renamed from: f  reason: collision with root package name */
    private final TextPaint f13375f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f13376g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f13377h;

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f13378i;

    /* renamed from: j  reason: collision with root package name */
    private Layout.Alignment f13379j;

    /* renamed from: k  reason: collision with root package name */
    private Bitmap f13380k;

    /* renamed from: l  reason: collision with root package name */
    private float f13381l;

    /* renamed from: m  reason: collision with root package name */
    private int f13382m;

    /* renamed from: n  reason: collision with root package name */
    private int f13383n;

    /* renamed from: o  reason: collision with root package name */
    private float f13384o;

    /* renamed from: p  reason: collision with root package name */
    private int f13385p;

    /* renamed from: q  reason: collision with root package name */
    private float f13386q;

    /* renamed from: r  reason: collision with root package name */
    private float f13387r;

    /* renamed from: s  reason: collision with root package name */
    private int f13388s;

    /* renamed from: t  reason: collision with root package name */
    private int f13389t;

    /* renamed from: u  reason: collision with root package name */
    private int f13390u;

    /* renamed from: v  reason: collision with root package name */
    private int f13391v;

    /* renamed from: w  reason: collision with root package name */
    private int f13392w;

    /* renamed from: x  reason: collision with root package name */
    private float f13393x;

    /* renamed from: y  reason: collision with root package name */
    private float f13394y;

    /* renamed from: z  reason: collision with root package name */
    private float f13395z;

    public f(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(null, new int[]{16843287, 16843288}, 0, 0);
        this.f13374e = obtainStyledAttributes.getDimensionPixelSize(0, 0);
        this.f13373d = obtainStyledAttributes.getFloat(1, 1.0f);
        obtainStyledAttributes.recycle();
        float round = Math.round((context.getResources().getDisplayMetrics().densityDpi * 2.0f) / 160.0f);
        this.f13370a = round;
        this.f13371b = round;
        this.f13372c = round;
        TextPaint textPaint = new TextPaint();
        this.f13375f = textPaint;
        textPaint.setAntiAlias(true);
        textPaint.setSubpixelText(true);
        Paint paint = new Paint();
        this.f13376g = paint;
        paint.setAntiAlias(true);
        paint.setStyle(Paint.Style.FILL);
        Paint paint2 = new Paint();
        this.f13377h = paint2;
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
        canvas.drawBitmap(this.f13380k, (Rect) null, this.J, this.f13377h);
    }

    private void d(Canvas canvas, boolean z10) {
        if (z10) {
            e(canvas);
            return;
        }
        oe.a.e(this.J);
        oe.a.e(this.f13380k);
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
            if (Color.alpha(this.f13390u) > 0) {
                this.f13376g.setColor(this.f13390u);
                canvas2 = canvas;
                canvas2.drawRect(-this.I, 0.0f, staticLayout.getWidth() + this.I, staticLayout.getHeight(), this.f13376g);
            } else {
                canvas2 = canvas;
            }
            int i11 = this.f13392w;
            boolean z10 = true;
            if (i11 == 1) {
                this.f13375f.setStrokeJoin(Paint.Join.ROUND);
                this.f13375f.setStrokeWidth(this.f13370a);
                this.f13375f.setColor(this.f13391v);
                this.f13375f.setStyle(Paint.Style.FILL_AND_STROKE);
                staticLayout2.draw(canvas2);
            } else if (i11 == 2) {
                TextPaint textPaint = this.f13375f;
                float f10 = this.f13371b;
                float f11 = this.f13372c;
                textPaint.setShadowLayer(f10, f11, f11, this.f13391v);
            } else if (i11 == 3 || i11 == 4) {
                if (i11 != 3) {
                    z10 = false;
                }
                int i12 = -1;
                if (z10) {
                    i10 = -1;
                } else {
                    i10 = this.f13391v;
                }
                if (z10) {
                    i12 = this.f13391v;
                }
                float f12 = this.f13371b / 2.0f;
                this.f13375f.setColor(this.f13388s);
                this.f13375f.setStyle(Paint.Style.FILL);
                float f13 = -f12;
                this.f13375f.setShadowLayer(this.f13371b, f13, f13, i10);
                staticLayout2.draw(canvas2);
                this.f13375f.setShadowLayer(this.f13371b, f12, f12, i12);
            }
            this.f13375f.setColor(this.f13388s);
            this.f13375f.setStyle(Paint.Style.FILL);
            staticLayout.draw(canvas2);
            this.f13375f.setShadowLayer(0.0f, 0.0f, 0.0f, 0);
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
            android.graphics.Bitmap r0 = r7.f13380k
            int r1 = r7.C
            int r2 = r7.A
            int r1 = r1 - r2
            int r3 = r7.D
            int r4 = r7.B
            int r3 = r3 - r4
            float r2 = (float) r2
            float r1 = (float) r1
            float r5 = r7.f13384o
            float r5 = r5 * r1
            float r2 = r2 + r5
            float r4 = (float) r4
            float r3 = (float) r3
            float r5 = r7.f13381l
            float r5 = r5 * r3
            float r4 = r4 + r5
            float r5 = r7.f13386q
            float r1 = r1 * r5
            int r1 = java.lang.Math.round(r1)
            float r5 = r7.f13387r
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
            int r3 = r7.f13385p
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
            int r3 = r7.f13383n
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

    public void b(ae.b bVar, le.b bVar2, float f10, float f11, float f12, Canvas canvas, int i10, int i11, int i12, int i13) {
        boolean z10;
        int i14;
        if (bVar.f709o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            if (TextUtils.isEmpty(bVar.f706d)) {
                return;
            }
            if (bVar.f717w) {
                i14 = bVar.f718x;
            } else {
                i14 = bVar2.f35822c;
            }
        } else {
            i14 = -16777216;
        }
        if (a(this.f13378i, bVar.f706d) && w0.c(this.f13379j, bVar.f707e) && this.f13380k == bVar.f709o && this.f13381l == bVar.f710p && this.f13382m == bVar.f711q && w0.c(Integer.valueOf(this.f13383n), Integer.valueOf(bVar.f712r)) && this.f13384o == bVar.f713s && w0.c(Integer.valueOf(this.f13385p), Integer.valueOf(bVar.f714t)) && this.f13386q == bVar.f715u && this.f13387r == bVar.f716v && this.f13388s == bVar2.f35820a && this.f13389t == bVar2.f35821b && this.f13390u == i14 && this.f13392w == bVar2.f35823d && this.f13391v == bVar2.f35824e && w0.c(this.f13375f.getTypeface(), bVar2.f35825f) && this.f13393x == f10 && this.f13394y == f11 && this.f13395z == f12 && this.A == i10 && this.B == i11 && this.C == i12 && this.D == i13) {
            d(canvas, z10);
            return;
        }
        this.f13378i = bVar.f706d;
        this.f13379j = bVar.f707e;
        this.f13380k = bVar.f709o;
        this.f13381l = bVar.f710p;
        this.f13382m = bVar.f711q;
        this.f13383n = bVar.f712r;
        this.f13384o = bVar.f713s;
        this.f13385p = bVar.f714t;
        this.f13386q = bVar.f715u;
        this.f13387r = bVar.f716v;
        this.f13388s = bVar2.f35820a;
        this.f13389t = bVar2.f35821b;
        this.f13390u = i14;
        this.f13392w = bVar2.f35823d;
        this.f13391v = bVar2.f35824e;
        this.f13375f.setTypeface(bVar2.f35825f);
        this.f13393x = f10;
        this.f13394y = f11;
        this.f13395z = f12;
        this.A = i10;
        this.B = i11;
        this.C = i12;
        this.D = i13;
        if (z10) {
            oe.a.e(this.f13378i);
            g();
        } else {
            oe.a.e(this.f13380k);
            f();
        }
        d(canvas, z10);
    }
}
