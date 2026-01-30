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
    private final float f14287a;

    /* renamed from: b  reason: collision with root package name */
    private final float f14288b;

    /* renamed from: c  reason: collision with root package name */
    private final float f14289c;

    /* renamed from: d  reason: collision with root package name */
    private final float f14290d;

    /* renamed from: e  reason: collision with root package name */
    private final float f14291e;

    /* renamed from: f  reason: collision with root package name */
    private final TextPaint f14292f;

    /* renamed from: g  reason: collision with root package name */
    private final Paint f14293g;

    /* renamed from: h  reason: collision with root package name */
    private final Paint f14294h;

    /* renamed from: i  reason: collision with root package name */
    private CharSequence f14295i;

    /* renamed from: j  reason: collision with root package name */
    private Layout.Alignment f14296j;

    /* renamed from: k  reason: collision with root package name */
    private Bitmap f14297k;

    /* renamed from: l  reason: collision with root package name */
    private float f14298l;

    /* renamed from: m  reason: collision with root package name */
    private int f14299m;

    /* renamed from: n  reason: collision with root package name */
    private int f14300n;

    /* renamed from: o  reason: collision with root package name */
    private float f14301o;

    /* renamed from: p  reason: collision with root package name */
    private int f14302p;

    /* renamed from: q  reason: collision with root package name */
    private float f14303q;

    /* renamed from: r  reason: collision with root package name */
    private float f14304r;

    /* renamed from: s  reason: collision with root package name */
    private int f14305s;

    /* renamed from: t  reason: collision with root package name */
    private int f14306t;

    /* renamed from: u  reason: collision with root package name */
    private int f14307u;

    /* renamed from: v  reason: collision with root package name */
    private int f14308v;

    /* renamed from: w  reason: collision with root package name */
    private int f14309w;

    /* renamed from: x  reason: collision with root package name */
    private float f14310x;

    /* renamed from: y  reason: collision with root package name */
    private float f14311y;

    /* renamed from: z  reason: collision with root package name */
    private float f14312z;

    public f(Context context) {
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(null, new int[]{16843287, 16843288}, 0, 0);
        this.f14291e = obtainStyledAttributes.getDimensionPixelSize(0, 0);
        this.f14290d = obtainStyledAttributes.getFloat(1, 1.0f);
        obtainStyledAttributes.recycle();
        float round = Math.round((context.getResources().getDisplayMetrics().densityDpi * 2.0f) / 160.0f);
        this.f14287a = round;
        this.f14288b = round;
        this.f14289c = round;
        TextPaint textPaint = new TextPaint();
        this.f14292f = textPaint;
        textPaint.setAntiAlias(true);
        textPaint.setSubpixelText(true);
        Paint paint = new Paint();
        this.f14293g = paint;
        paint.setAntiAlias(true);
        paint.setStyle(Paint.Style.FILL);
        Paint paint2 = new Paint();
        this.f14294h = paint2;
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
        canvas.drawBitmap(this.f14297k, (Rect) null, this.J, this.f14294h);
    }

    private void d(Canvas canvas, boolean z10) {
        if (z10) {
            e(canvas);
            return;
        }
        ne.a.e(this.J);
        ne.a.e(this.f14297k);
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
            if (Color.alpha(this.f14307u) > 0) {
                this.f14293g.setColor(this.f14307u);
                canvas2 = canvas;
                canvas2.drawRect(-this.I, 0.0f, staticLayout.getWidth() + this.I, staticLayout.getHeight(), this.f14293g);
            } else {
                canvas2 = canvas;
            }
            int i11 = this.f14309w;
            boolean z10 = true;
            if (i11 == 1) {
                this.f14292f.setStrokeJoin(Paint.Join.ROUND);
                this.f14292f.setStrokeWidth(this.f14287a);
                this.f14292f.setColor(this.f14308v);
                this.f14292f.setStyle(Paint.Style.FILL_AND_STROKE);
                staticLayout2.draw(canvas2);
            } else if (i11 == 2) {
                TextPaint textPaint = this.f14292f;
                float f10 = this.f14288b;
                float f11 = this.f14289c;
                textPaint.setShadowLayer(f10, f11, f11, this.f14308v);
            } else if (i11 == 3 || i11 == 4) {
                if (i11 != 3) {
                    z10 = false;
                }
                int i12 = -1;
                if (z10) {
                    i10 = -1;
                } else {
                    i10 = this.f14308v;
                }
                if (z10) {
                    i12 = this.f14308v;
                }
                float f12 = this.f14288b / 2.0f;
                this.f14292f.setColor(this.f14305s);
                this.f14292f.setStyle(Paint.Style.FILL);
                float f13 = -f12;
                this.f14292f.setShadowLayer(this.f14288b, f13, f13, i10);
                staticLayout2.draw(canvas2);
                this.f14292f.setShadowLayer(this.f14288b, f12, f12, i12);
            }
            this.f14292f.setColor(this.f14305s);
            this.f14292f.setStyle(Paint.Style.FILL);
            staticLayout.draw(canvas2);
            this.f14292f.setShadowLayer(0.0f, 0.0f, 0.0f, 0);
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
            android.graphics.Bitmap r0 = r7.f14297k
            int r1 = r7.C
            int r2 = r7.A
            int r1 = r1 - r2
            int r3 = r7.D
            int r4 = r7.B
            int r3 = r3 - r4
            float r2 = (float) r2
            float r1 = (float) r1
            float r5 = r7.f14301o
            float r5 = r5 * r1
            float r2 = r2 + r5
            float r4 = (float) r4
            float r3 = (float) r3
            float r5 = r7.f14298l
            float r5 = r5 * r3
            float r4 = r4 + r5
            float r5 = r7.f14303q
            float r1 = r1 * r5
            int r1 = java.lang.Math.round(r1)
            float r5 = r7.f14304r
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
            int r3 = r7.f14302p
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
            int r3 = r7.f14300n
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
        if (bVar.f55606o == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            if (TextUtils.isEmpty(bVar.f55603d)) {
                return;
            }
            if (bVar.f55614w) {
                i14 = bVar.f55615x;
            } else {
                i14 = bVar2.f33103c;
            }
        } else {
            i14 = -16777216;
        }
        if (a(this.f14295i, bVar.f55603d) && w0.c(this.f14296j, bVar.f55604e) && this.f14297k == bVar.f55606o && this.f14298l == bVar.f55607p && this.f14299m == bVar.f55608q && w0.c(Integer.valueOf(this.f14300n), Integer.valueOf(bVar.f55609r)) && this.f14301o == bVar.f55610s && w0.c(Integer.valueOf(this.f14302p), Integer.valueOf(bVar.f55611t)) && this.f14303q == bVar.f55612u && this.f14304r == bVar.f55613v && this.f14305s == bVar2.f33101a && this.f14306t == bVar2.f33102b && this.f14307u == i14 && this.f14309w == bVar2.f33104d && this.f14308v == bVar2.f33105e && w0.c(this.f14292f.getTypeface(), bVar2.f33106f) && this.f14310x == f10 && this.f14311y == f11 && this.f14312z == f12 && this.A == i10 && this.B == i11 && this.C == i12 && this.D == i13) {
            d(canvas, z10);
            return;
        }
        this.f14295i = bVar.f55603d;
        this.f14296j = bVar.f55604e;
        this.f14297k = bVar.f55606o;
        this.f14298l = bVar.f55607p;
        this.f14299m = bVar.f55608q;
        this.f14300n = bVar.f55609r;
        this.f14301o = bVar.f55610s;
        this.f14302p = bVar.f55611t;
        this.f14303q = bVar.f55612u;
        this.f14304r = bVar.f55613v;
        this.f14305s = bVar2.f33101a;
        this.f14306t = bVar2.f33102b;
        this.f14307u = i14;
        this.f14309w = bVar2.f33104d;
        this.f14308v = bVar2.f33105e;
        this.f14292f.setTypeface(bVar2.f33106f);
        this.f14310x = f10;
        this.f14311y = f11;
        this.f14312z = f12;
        this.A = i10;
        this.B = i11;
        this.C = i12;
        this.D = i13;
        if (z10) {
            ne.a.e(this.f14295i);
            g();
        } else {
            ne.a.e(this.f14297k);
            f();
        }
        d(canvas, z10);
    }
}
