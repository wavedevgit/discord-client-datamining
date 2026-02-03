package com.google.android.material.internal;

import android.animation.TimeInterpolator;
import android.content.res.ColorStateList;
import android.content.res.Configuration;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Typeface;
import android.os.Build;
import android.text.Layout;
import android.text.StaticLayout;
import android.text.TextPaint;
import android.text.TextUtils;
import android.view.View;
import androidx.core.view.h0;
import lh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: t0  reason: collision with root package name */
    private static final boolean f15755t0 = false;

    /* renamed from: u0  reason: collision with root package name */
    private static final Paint f15756u0 = null;
    private Typeface A;
    private Typeface B;
    private Typeface C;
    private lh.a D;
    private lh.a E;
    private CharSequence G;
    private CharSequence H;
    private boolean I;
    private boolean K;
    private Bitmap L;
    private Paint M;
    private float N;
    private float O;
    private float P;
    private float Q;
    private float R;
    private int S;
    private int[] T;
    private boolean U;
    private final TextPaint V;
    private final TextPaint W;
    private TimeInterpolator X;
    private TimeInterpolator Y;
    private float Z;

    /* renamed from: a  reason: collision with root package name */
    private final View f15757a;

    /* renamed from: a0  reason: collision with root package name */
    private float f15758a0;

    /* renamed from: b  reason: collision with root package name */
    private float f15759b;

    /* renamed from: b0  reason: collision with root package name */
    private float f15760b0;

    /* renamed from: c  reason: collision with root package name */
    private boolean f15761c;

    /* renamed from: c0  reason: collision with root package name */
    private ColorStateList f15762c0;

    /* renamed from: d  reason: collision with root package name */
    private float f15763d;

    /* renamed from: d0  reason: collision with root package name */
    private float f15764d0;

    /* renamed from: e  reason: collision with root package name */
    private float f15765e;

    /* renamed from: e0  reason: collision with root package name */
    private float f15766e0;

    /* renamed from: f  reason: collision with root package name */
    private int f15767f;

    /* renamed from: f0  reason: collision with root package name */
    private float f15768f0;

    /* renamed from: g  reason: collision with root package name */
    private final Rect f15769g;

    /* renamed from: g0  reason: collision with root package name */
    private ColorStateList f15770g0;

    /* renamed from: h  reason: collision with root package name */
    private final Rect f15771h;

    /* renamed from: h0  reason: collision with root package name */
    private float f15772h0;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f15773i;

    /* renamed from: i0  reason: collision with root package name */
    private float f15774i0;

    /* renamed from: j0  reason: collision with root package name */
    private float f15776j0;

    /* renamed from: k0  reason: collision with root package name */
    private StaticLayout f15778k0;

    /* renamed from: l0  reason: collision with root package name */
    private float f15780l0;

    /* renamed from: m0  reason: collision with root package name */
    private float f15782m0;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f15783n;

    /* renamed from: n0  reason: collision with root package name */
    private float f15784n0;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f15785o;

    /* renamed from: o0  reason: collision with root package name */
    private CharSequence f15786o0;

    /* renamed from: p  reason: collision with root package name */
    private int f15787p;

    /* renamed from: q  reason: collision with root package name */
    private float f15789q;

    /* renamed from: r  reason: collision with root package name */
    private float f15791r;

    /* renamed from: s  reason: collision with root package name */
    private float f15793s;

    /* renamed from: t  reason: collision with root package name */
    private float f15795t;

    /* renamed from: u  reason: collision with root package name */
    private float f15796u;

    /* renamed from: v  reason: collision with root package name */
    private float f15797v;

    /* renamed from: w  reason: collision with root package name */
    private Typeface f15798w;

    /* renamed from: x  reason: collision with root package name */
    private Typeface f15799x;

    /* renamed from: y  reason: collision with root package name */
    private Typeface f15800y;

    /* renamed from: z  reason: collision with root package name */
    private Typeface f15801z;

    /* renamed from: j  reason: collision with root package name */
    private int f15775j = 16;

    /* renamed from: k  reason: collision with root package name */
    private int f15777k = 16;

    /* renamed from: l  reason: collision with root package name */
    private float f15779l = 15.0f;

    /* renamed from: m  reason: collision with root package name */
    private float f15781m = 15.0f;
    private TextUtils.TruncateAt F = TextUtils.TruncateAt.END;
    private boolean J = true;

    /* renamed from: p0  reason: collision with root package name */
    private int f15788p0 = 1;

    /* renamed from: q0  reason: collision with root package name */
    private float f15790q0 = 0.0f;

    /* renamed from: r0  reason: collision with root package name */
    private float f15792r0 = 1.0f;

    /* renamed from: s0  reason: collision with root package name */
    private int f15794s0 = h.f15812n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.internal.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0189a implements a.InterfaceC0485a {
        C0189a() {
        }

        @Override // lh.a.InterfaceC0485a
        public void a(Typeface typeface) {
            a.this.T(typeface);
        }
    }

    public a(View view) {
        this.f15757a = view;
        TextPaint textPaint = new TextPaint(129);
        this.V = textPaint;
        this.W = new TextPaint(textPaint);
        this.f15771h = new Rect();
        this.f15769g = new Rect();
        this.f15773i = new RectF();
        this.f15765e = e();
        H(view.getContext().getResources().getConfiguration());
    }

    private void A(TextPaint textPaint) {
        textPaint.setTextSize(this.f15779l);
        textPaint.setTypeface(this.f15801z);
        textPaint.setLetterSpacing(this.f15774i0);
    }

    private void B(float f10) {
        Rect rect;
        if (this.f15761c) {
            RectF rectF = this.f15773i;
            if (f10 < this.f15765e) {
                rect = this.f15769g;
            } else {
                rect = this.f15771h;
            }
            rectF.set(rect);
            return;
        }
        this.f15773i.left = G(this.f15769g.left, this.f15771h.left, f10, this.X);
        this.f15773i.top = G(this.f15789q, this.f15791r, f10, this.X);
        this.f15773i.right = G(this.f15769g.right, this.f15771h.right, f10, this.X);
        this.f15773i.bottom = G(this.f15769g.bottom, this.f15771h.bottom, f10, this.X);
    }

    private static boolean C(float f10, float f11) {
        if (Math.abs(f10 - f11) < 1.0E-5f) {
            return true;
        }
        return false;
    }

    private boolean D() {
        if (h0.z(this.f15757a) == 1) {
            return true;
        }
        return false;
    }

    private boolean F(CharSequence charSequence, boolean z10) {
        a2.e eVar;
        if (z10) {
            eVar = a2.f.f365d;
        } else {
            eVar = a2.f.f364c;
        }
        return eVar.isRtl(charSequence, 0, charSequence.length());
    }

    private static float G(float f10, float f11, float f12, TimeInterpolator timeInterpolator) {
        if (timeInterpolator != null) {
            f12 = timeInterpolator.getInterpolation(f12);
        }
        return zg.a.a(f10, f11, f12);
    }

    private float I(TextPaint textPaint, CharSequence charSequence) {
        return textPaint.measureText(charSequence, 0, charSequence.length());
    }

    private static boolean L(Rect rect, int i10, int i11, int i12, int i13) {
        if (rect.left == i10 && rect.top == i11 && rect.right == i12 && rect.bottom == i13) {
            return true;
        }
        return false;
    }

    private void Q(float f10) {
        this.f15782m0 = f10;
        h0.e0(this.f15757a);
    }

    private boolean U(Typeface typeface) {
        lh.a aVar = this.E;
        if (aVar != null) {
            aVar.c();
        }
        if (this.f15800y != typeface) {
            this.f15800y = typeface;
            Typeface b10 = lh.h.b(this.f15757a.getContext().getResources().getConfiguration(), typeface);
            this.f15799x = b10;
            if (b10 == null) {
                b10 = this.f15800y;
            }
            this.f15798w = b10;
            return true;
        }
        return false;
    }

    private void Y(float f10) {
        this.f15784n0 = f10;
        h0.e0(this.f15757a);
    }

    private static int a(int i10, int i11, float f10) {
        float f11 = 1.0f - f10;
        return Color.argb(Math.round((Color.alpha(i10) * f11) + (Color.alpha(i11) * f10)), Math.round((Color.red(i10) * f11) + (Color.red(i11) * f10)), Math.round((Color.green(i10) * f11) + (Color.green(i11) * f10)), Math.round((Color.blue(i10) * f11) + (Color.blue(i11) * f10)));
    }

    private void b(boolean z10) {
        float f10;
        int i10;
        StaticLayout staticLayout;
        i(1.0f, z10);
        CharSequence charSequence = this.H;
        if (charSequence != null && (staticLayout = this.f15778k0) != null) {
            this.f15786o0 = TextUtils.ellipsize(charSequence, this.V, staticLayout.getWidth(), this.F);
        }
        CharSequence charSequence2 = this.f15786o0;
        float f11 = 0.0f;
        if (charSequence2 != null) {
            this.f15780l0 = I(this.V, charSequence2);
        } else {
            this.f15780l0 = 0.0f;
        }
        int b10 = androidx.core.view.j.b(this.f15777k, this.I ? 1 : 0);
        int i11 = b10 & 112;
        if (i11 != 48) {
            if (i11 != 80) {
                this.f15791r = this.f15771h.centerY() - ((this.V.descent() - this.V.ascent()) / 2.0f);
            } else {
                this.f15791r = this.f15771h.bottom + this.V.ascent();
            }
        } else {
            this.f15791r = this.f15771h.top;
        }
        int i12 = b10 & 8388615;
        if (i12 != 1) {
            if (i12 != 5) {
                this.f15795t = this.f15771h.left;
            } else {
                this.f15795t = this.f15771h.right - this.f15780l0;
            }
        } else {
            this.f15795t = this.f15771h.centerX() - (this.f15780l0 / 2.0f);
        }
        i(0.0f, z10);
        StaticLayout staticLayout2 = this.f15778k0;
        if (staticLayout2 != null) {
            f10 = staticLayout2.getHeight();
        } else {
            f10 = 0.0f;
        }
        StaticLayout staticLayout3 = this.f15778k0;
        if (staticLayout3 != null && this.f15788p0 > 1) {
            f11 = staticLayout3.getWidth();
        } else {
            CharSequence charSequence3 = this.H;
            if (charSequence3 != null) {
                f11 = I(this.V, charSequence3);
            }
        }
        StaticLayout staticLayout4 = this.f15778k0;
        if (staticLayout4 != null) {
            i10 = staticLayout4.getLineCount();
        } else {
            i10 = 0;
        }
        this.f15787p = i10;
        int b11 = androidx.core.view.j.b(this.f15775j, this.I ? 1 : 0);
        int i13 = b11 & 112;
        if (i13 != 48) {
            if (i13 != 80) {
                this.f15789q = this.f15769g.centerY() - (f10 / 2.0f);
            } else {
                this.f15789q = (this.f15769g.bottom - f10) + this.V.descent();
            }
        } else {
            this.f15789q = this.f15769g.top;
        }
        int i14 = b11 & 8388615;
        if (i14 != 1) {
            if (i14 != 5) {
                this.f15793s = this.f15769g.left;
            } else {
                this.f15793s = this.f15769g.right - f11;
            }
        } else {
            this.f15793s = this.f15769g.centerX() - (f11 / 2.0f);
        }
        j();
        d0(this.f15759b);
    }

    private boolean b0(Typeface typeface) {
        lh.a aVar = this.D;
        if (aVar != null) {
            aVar.c();
        }
        if (this.B != typeface) {
            this.B = typeface;
            Typeface b10 = lh.h.b(this.f15757a.getContext().getResources().getConfiguration(), typeface);
            this.A = b10;
            if (b10 == null) {
                b10 = this.B;
            }
            this.f15801z = b10;
            return true;
        }
        return false;
    }

    private void c() {
        g(this.f15759b);
    }

    private float d(float f10) {
        float f11 = this.f15765e;
        if (f10 <= f11) {
            return zg.a.b(1.0f, 0.0f, this.f15763d, f11, f10);
        }
        return zg.a.b(0.0f, 1.0f, f11, 1.0f, f10);
    }

    private void d0(float f10) {
        boolean z10;
        h(f10);
        if (f15755t0 && this.N != 1.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.K = z10;
        if (z10) {
            n();
        }
        h0.e0(this.f15757a);
    }

    private float e() {
        float f10 = this.f15763d;
        return f10 + ((1.0f - f10) * 0.5f);
    }

    private boolean f(CharSequence charSequence) {
        boolean D = D();
        if (this.J) {
            return F(charSequence, D);
        }
        return D;
    }

    private void g(float f10) {
        float f11;
        B(f10);
        if (this.f15761c) {
            if (f10 < this.f15765e) {
                this.f15796u = this.f15793s;
                this.f15797v = this.f15789q;
                d0(0.0f);
                f11 = 0.0f;
            } else {
                this.f15796u = this.f15795t;
                this.f15797v = this.f15791r - Math.max(0, this.f15767f);
                d0(1.0f);
                f11 = 1.0f;
            }
        } else {
            this.f15796u = G(this.f15793s, this.f15795t, f10, this.X);
            this.f15797v = G(this.f15789q, this.f15791r, f10, this.X);
            d0(f10);
            f11 = f10;
        }
        TimeInterpolator timeInterpolator = zg.a.f55807b;
        Q(1.0f - G(0.0f, 1.0f, 1.0f - f10, timeInterpolator));
        Y(G(1.0f, 0.0f, f10, timeInterpolator));
        if (this.f15785o != this.f15783n) {
            this.V.setColor(a(v(), t(), f11));
        } else {
            this.V.setColor(t());
        }
        int i10 = Build.VERSION.SDK_INT;
        float f12 = this.f15772h0;
        float f13 = this.f15774i0;
        if (f12 != f13) {
            this.V.setLetterSpacing(G(f13, f12, f10, timeInterpolator));
        } else {
            this.V.setLetterSpacing(f12);
        }
        this.P = G(this.f15764d0, this.Z, f10, null);
        this.Q = G(this.f15766e0, this.f15758a0, f10, null);
        this.R = G(this.f15768f0, this.f15760b0, f10, null);
        int a10 = a(u(this.f15770g0), u(this.f15762c0), f10);
        this.S = a10;
        this.V.setShadowLayer(this.P, this.Q, this.R, a10);
        if (this.f15761c) {
            this.V.setAlpha((int) (d(f10) * this.V.getAlpha()));
            if (i10 >= 31) {
                TextPaint textPaint = this.V;
                textPaint.setShadowLayer(this.P, this.Q, this.R, eh.a.a(this.S, textPaint.getAlpha()));
            }
        }
        h0.e0(this.f15757a);
    }

    private void h(float f10) {
        i(f10, false);
    }

    private void i(float f10, boolean z10) {
        float f11;
        float f12;
        Typeface typeface;
        boolean z11;
        boolean z12;
        boolean z13;
        StaticLayout staticLayout;
        boolean z14;
        boolean z15;
        if (this.G != null) {
            float width = this.f15771h.width();
            float width2 = this.f15769g.width();
            if (C(f10, 1.0f)) {
                f11 = this.f15781m;
                f12 = this.f15772h0;
                this.N = 1.0f;
                typeface = this.f15798w;
            } else {
                float f13 = this.f15779l;
                float f14 = this.f15774i0;
                Typeface typeface2 = this.f15801z;
                if (C(f10, 0.0f)) {
                    this.N = 1.0f;
                } else {
                    this.N = G(this.f15779l, this.f15781m, f10, this.Y) / this.f15779l;
                }
                float f15 = this.f15781m / this.f15779l;
                float f16 = width2 * f15;
                if (!z10 && !this.f15761c && f16 > width) {
                    width = Math.min(width / f15, width2);
                } else {
                    width = width2;
                }
                f11 = f13;
                f12 = f14;
                typeface = typeface2;
            }
            int i10 = 1;
            boolean z16 = false;
            if (width > 0.0f) {
                if (this.O != f11) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (this.f15776j0 != f12) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                if (this.C != typeface) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                if (this.f15778k0 != null && width != staticLayout.getWidth()) {
                    z14 = true;
                } else {
                    z14 = false;
                }
                if (!z11 && !z12 && !z14 && !z13 && !this.U) {
                    z15 = false;
                } else {
                    z15 = true;
                }
                this.O = f11;
                this.f15776j0 = f12;
                this.C = typeface;
                this.U = false;
                TextPaint textPaint = this.V;
                if (this.N != 1.0f) {
                    z16 = true;
                }
                textPaint.setLinearText(z16);
                z16 = z15;
            }
            if (this.H != null && !z16) {
                return;
            }
            this.V.setTextSize(this.O);
            this.V.setTypeface(this.C);
            this.V.setLetterSpacing(this.f15776j0);
            this.I = f(this.G);
            if (j0()) {
                i10 = this.f15788p0;
            }
            StaticLayout k10 = k(i10, width, this.I);
            this.f15778k0 = k10;
            this.H = k10.getText();
        }
    }

    private void j() {
        Bitmap bitmap = this.L;
        if (bitmap != null) {
            bitmap.recycle();
            this.L = null;
        }
    }

    private boolean j0() {
        if (this.f15788p0 > 1) {
            if ((!this.I || this.f15761c) && !this.K) {
                return true;
            }
            return false;
        }
        return false;
    }

    private StaticLayout k(int i10, float f10, boolean z10) {
        Layout.Alignment y10;
        if (i10 == 1) {
            y10 = Layout.Alignment.ALIGN_NORMAL;
        } else {
            y10 = y();
        }
        return (StaticLayout) b2.e.g(h.b(this.G, this.V, (int) f10).d(this.F).g(z10).c(y10).f(false).i(i10).h(this.f15790q0, this.f15792r0).e(this.f15794s0).j(null).a());
    }

    private void m(Canvas canvas, float f10, float f11) {
        int alpha = this.V.getAlpha();
        canvas.translate(f10, f11);
        if (!this.f15761c) {
            this.V.setAlpha((int) (this.f15784n0 * alpha));
            if (Build.VERSION.SDK_INT >= 31) {
                TextPaint textPaint = this.V;
                textPaint.setShadowLayer(this.P, this.Q, this.R, eh.a.a(this.S, textPaint.getAlpha()));
            }
            this.f15778k0.draw(canvas);
        }
        if (!this.f15761c) {
            this.V.setAlpha((int) (this.f15782m0 * alpha));
        }
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 31) {
            TextPaint textPaint2 = this.V;
            textPaint2.setShadowLayer(this.P, this.Q, this.R, eh.a.a(this.S, textPaint2.getAlpha()));
        }
        int lineBaseline = this.f15778k0.getLineBaseline(0);
        CharSequence charSequence = this.f15786o0;
        float f12 = lineBaseline;
        canvas.drawText(charSequence, 0, charSequence.length(), 0.0f, f12, this.V);
        if (i10 >= 31) {
            this.V.setShadowLayer(this.P, this.Q, this.R, this.S);
        }
        if (!this.f15761c) {
            String trim = this.f15786o0.toString().trim();
            if (trim.endsWith("…")) {
                trim = trim.substring(0, trim.length() - 1);
            }
            String str = trim;
            this.V.setAlpha(alpha);
            canvas.drawText(str, 0, Math.min(this.f15778k0.getLineEnd(0), str.length()), 0.0f, f12, (Paint) this.V);
        }
    }

    private void n() {
        if (this.L == null && !this.f15769g.isEmpty() && !TextUtils.isEmpty(this.H)) {
            g(0.0f);
            int width = this.f15778k0.getWidth();
            int height = this.f15778k0.getHeight();
            if (width > 0 && height > 0) {
                this.L = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
                this.f15778k0.draw(new Canvas(this.L));
                if (this.M == null) {
                    this.M = new Paint(3);
                }
            }
        }
    }

    private float r(int i10, int i11) {
        if (i11 != 17 && (i11 & 7) != 1) {
            if ((i11 & 8388613) != 8388613 && (i11 & 5) != 5) {
                if (this.I) {
                    return this.f15771h.right - this.f15780l0;
                }
                return this.f15771h.left;
            } else if (this.I) {
                return this.f15771h.left;
            } else {
                return this.f15771h.right - this.f15780l0;
            }
        }
        return (i10 / 2.0f) - (this.f15780l0 / 2.0f);
    }

    private float s(RectF rectF, int i10, int i11) {
        if (i11 != 17 && (i11 & 7) != 1) {
            if ((i11 & 8388613) != 8388613 && (i11 & 5) != 5) {
                if (this.I) {
                    return this.f15771h.right;
                }
                return rectF.left + this.f15780l0;
            } else if (this.I) {
                return rectF.left + this.f15780l0;
            } else {
                return this.f15771h.right;
            }
        }
        return (i10 / 2.0f) + (this.f15780l0 / 2.0f);
    }

    private int u(ColorStateList colorStateList) {
        if (colorStateList == null) {
            return 0;
        }
        int[] iArr = this.T;
        if (iArr != null) {
            return colorStateList.getColorForState(iArr, 0);
        }
        return colorStateList.getDefaultColor();
    }

    private int v() {
        return u(this.f15783n);
    }

    private Layout.Alignment y() {
        int b10 = androidx.core.view.j.b(this.f15775j, this.I ? 1 : 0) & 7;
        if (b10 != 1) {
            if (b10 != 5) {
                if (this.I) {
                    return Layout.Alignment.ALIGN_OPPOSITE;
                }
                return Layout.Alignment.ALIGN_NORMAL;
            } else if (this.I) {
                return Layout.Alignment.ALIGN_NORMAL;
            } else {
                return Layout.Alignment.ALIGN_OPPOSITE;
            }
        }
        return Layout.Alignment.ALIGN_CENTER;
    }

    private void z(TextPaint textPaint) {
        textPaint.setTextSize(this.f15781m);
        textPaint.setTypeface(this.f15798w);
        textPaint.setLetterSpacing(this.f15772h0);
    }

    public final boolean E() {
        ColorStateList colorStateList = this.f15785o;
        if (colorStateList == null || !colorStateList.isStateful()) {
            ColorStateList colorStateList2 = this.f15783n;
            if (colorStateList2 != null && colorStateList2.isStateful()) {
                return true;
            }
            return false;
        }
        return true;
    }

    public void H(Configuration configuration) {
        if (Build.VERSION.SDK_INT >= 31) {
            Typeface typeface = this.f15800y;
            if (typeface != null) {
                this.f15799x = lh.h.b(configuration, typeface);
            }
            Typeface typeface2 = this.B;
            if (typeface2 != null) {
                this.A = lh.h.b(configuration, typeface2);
            }
            Typeface typeface3 = this.f15799x;
            if (typeface3 == null) {
                typeface3 = this.f15800y;
            }
            this.f15798w = typeface3;
            Typeface typeface4 = this.A;
            if (typeface4 == null) {
                typeface4 = this.B;
            }
            this.f15801z = typeface4;
            K(true);
        }
    }

    public void J() {
        K(false);
    }

    public void K(boolean z10) {
        if ((this.f15757a.getHeight() > 0 && this.f15757a.getWidth() > 0) || z10) {
            b(z10);
            c();
        }
    }

    public void M(ColorStateList colorStateList) {
        if (this.f15785o == colorStateList && this.f15783n == colorStateList) {
            return;
        }
        this.f15785o = colorStateList;
        this.f15783n = colorStateList;
        J();
    }

    public void N(int i10, int i11, int i12, int i13) {
        if (!L(this.f15771h, i10, i11, i12, i13)) {
            this.f15771h.set(i10, i11, i12, i13);
            this.U = true;
        }
    }

    public void O(Rect rect) {
        N(rect.left, rect.top, rect.right, rect.bottom);
    }

    public void P(int i10) {
        lh.d dVar = new lh.d(this.f15757a.getContext(), i10);
        if (dVar.i() != null) {
            this.f15785o = dVar.i();
        }
        if (dVar.j() != 0.0f) {
            this.f15781m = dVar.j();
        }
        ColorStateList colorStateList = dVar.f37478c;
        if (colorStateList != null) {
            this.f15762c0 = colorStateList;
        }
        this.f15758a0 = dVar.f37483h;
        this.f15760b0 = dVar.f37484i;
        this.Z = dVar.f37485j;
        this.f15772h0 = dVar.f37487l;
        lh.a aVar = this.E;
        if (aVar != null) {
            aVar.c();
        }
        this.E = new lh.a(new C0189a(), dVar.e());
        dVar.h(this.f15757a.getContext(), this.E);
        J();
    }

    public void R(ColorStateList colorStateList) {
        if (this.f15785o != colorStateList) {
            this.f15785o = colorStateList;
            J();
        }
    }

    public void S(int i10) {
        if (this.f15777k != i10) {
            this.f15777k = i10;
            J();
        }
    }

    public void T(Typeface typeface) {
        if (U(typeface)) {
            J();
        }
    }

    public void V(int i10, int i11, int i12, int i13) {
        if (!L(this.f15769g, i10, i11, i12, i13)) {
            this.f15769g.set(i10, i11, i12, i13);
            this.U = true;
        }
    }

    public void W(Rect rect) {
        V(rect.left, rect.top, rect.right, rect.bottom);
    }

    public void X(float f10) {
        if (this.f15774i0 != f10) {
            this.f15774i0 = f10;
            J();
        }
    }

    public void Z(int i10) {
        if (this.f15775j != i10) {
            this.f15775j = i10;
            J();
        }
    }

    public void a0(float f10) {
        if (this.f15779l != f10) {
            this.f15779l = f10;
            J();
        }
    }

    public void c0(float f10) {
        float a10 = u1.a.a(f10, 0.0f, 1.0f);
        if (a10 != this.f15759b) {
            this.f15759b = a10;
            c();
        }
    }

    public void e0(TimeInterpolator timeInterpolator) {
        this.X = timeInterpolator;
        J();
    }

    public final boolean f0(int[] iArr) {
        this.T = iArr;
        if (E()) {
            J();
            return true;
        }
        return false;
    }

    public void g0(CharSequence charSequence) {
        if (charSequence != null && TextUtils.equals(this.G, charSequence)) {
            return;
        }
        this.G = charSequence;
        this.H = null;
        j();
        J();
    }

    public void h0(TimeInterpolator timeInterpolator) {
        this.Y = timeInterpolator;
        J();
    }

    public void i0(Typeface typeface) {
        boolean U = U(typeface);
        boolean b02 = b0(typeface);
        if (!U && !b02) {
            return;
        }
        J();
    }

    public void l(Canvas canvas) {
        boolean z10;
        int save = canvas.save();
        if (this.H != null && this.f15773i.width() > 0.0f && this.f15773i.height() > 0.0f) {
            this.V.setTextSize(this.O);
            float f10 = this.f15796u;
            float f11 = this.f15797v;
            if (this.K && this.L != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            float f12 = this.N;
            if (f12 != 1.0f && !this.f15761c) {
                canvas.scale(f12, f12, f10, f11);
            }
            if (z10) {
                canvas.drawBitmap(this.L, f10, f11, this.M);
                canvas.restoreToCount(save);
                return;
            }
            if (j0() && (!this.f15761c || this.f15759b > this.f15765e)) {
                m(canvas, this.f15796u - this.f15778k0.getLineStart(0), f11);
            } else {
                canvas.translate(f10, f11);
                this.f15778k0.draw(canvas);
            }
            canvas.restoreToCount(save);
        }
    }

    public void o(RectF rectF, int i10, int i11) {
        this.I = f(this.G);
        rectF.left = Math.max(r(i10, i11), this.f15771h.left);
        rectF.top = this.f15771h.top;
        rectF.right = Math.min(s(rectF, i10, i11), this.f15771h.right);
        rectF.bottom = this.f15771h.top + q();
    }

    public ColorStateList p() {
        return this.f15785o;
    }

    public float q() {
        z(this.W);
        return -this.W.ascent();
    }

    public int t() {
        return u(this.f15785o);
    }

    public float w() {
        A(this.W);
        return -this.W.ascent();
    }

    public float x() {
        return this.f15759b;
    }
}
