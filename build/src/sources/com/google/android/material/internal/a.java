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
import oh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: t0  reason: collision with root package name */
    private static final boolean f15237t0 = false;

    /* renamed from: u0  reason: collision with root package name */
    private static final Paint f15238u0 = null;
    private Typeface A;
    private Typeface B;
    private Typeface C;
    private oh.a D;
    private oh.a E;
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
    private final View f15239a;

    /* renamed from: a0  reason: collision with root package name */
    private float f15240a0;

    /* renamed from: b  reason: collision with root package name */
    private float f15241b;

    /* renamed from: b0  reason: collision with root package name */
    private float f15242b0;

    /* renamed from: c  reason: collision with root package name */
    private boolean f15243c;

    /* renamed from: c0  reason: collision with root package name */
    private ColorStateList f15244c0;

    /* renamed from: d  reason: collision with root package name */
    private float f15245d;

    /* renamed from: d0  reason: collision with root package name */
    private float f15246d0;

    /* renamed from: e  reason: collision with root package name */
    private float f15247e;

    /* renamed from: e0  reason: collision with root package name */
    private float f15248e0;

    /* renamed from: f  reason: collision with root package name */
    private int f15249f;

    /* renamed from: f0  reason: collision with root package name */
    private float f15250f0;

    /* renamed from: g  reason: collision with root package name */
    private final Rect f15251g;

    /* renamed from: g0  reason: collision with root package name */
    private ColorStateList f15252g0;

    /* renamed from: h  reason: collision with root package name */
    private final Rect f15253h;

    /* renamed from: h0  reason: collision with root package name */
    private float f15254h0;

    /* renamed from: i  reason: collision with root package name */
    private final RectF f15255i;

    /* renamed from: i0  reason: collision with root package name */
    private float f15256i0;

    /* renamed from: j0  reason: collision with root package name */
    private float f15258j0;

    /* renamed from: k0  reason: collision with root package name */
    private StaticLayout f15260k0;

    /* renamed from: l0  reason: collision with root package name */
    private float f15262l0;

    /* renamed from: m0  reason: collision with root package name */
    private float f15264m0;

    /* renamed from: n  reason: collision with root package name */
    private ColorStateList f15265n;

    /* renamed from: n0  reason: collision with root package name */
    private float f15266n0;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f15267o;

    /* renamed from: o0  reason: collision with root package name */
    private CharSequence f15268o0;

    /* renamed from: p  reason: collision with root package name */
    private int f15269p;

    /* renamed from: q  reason: collision with root package name */
    private float f15271q;

    /* renamed from: r  reason: collision with root package name */
    private float f15273r;

    /* renamed from: s  reason: collision with root package name */
    private float f15275s;

    /* renamed from: t  reason: collision with root package name */
    private float f15277t;

    /* renamed from: u  reason: collision with root package name */
    private float f15278u;

    /* renamed from: v  reason: collision with root package name */
    private float f15279v;

    /* renamed from: w  reason: collision with root package name */
    private Typeface f15280w;

    /* renamed from: x  reason: collision with root package name */
    private Typeface f15281x;

    /* renamed from: y  reason: collision with root package name */
    private Typeface f15282y;

    /* renamed from: z  reason: collision with root package name */
    private Typeface f15283z;

    /* renamed from: j  reason: collision with root package name */
    private int f15257j = 16;

    /* renamed from: k  reason: collision with root package name */
    private int f15259k = 16;

    /* renamed from: l  reason: collision with root package name */
    private float f15261l = 15.0f;

    /* renamed from: m  reason: collision with root package name */
    private float f15263m = 15.0f;
    private TextUtils.TruncateAt F = TextUtils.TruncateAt.END;
    private boolean J = true;

    /* renamed from: p0  reason: collision with root package name */
    private int f15270p0 = 1;

    /* renamed from: q0  reason: collision with root package name */
    private float f15272q0 = 0.0f;

    /* renamed from: r0  reason: collision with root package name */
    private float f15274r0 = 1.0f;

    /* renamed from: s0  reason: collision with root package name */
    private int f15276s0 = h.f15294n;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.internal.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0205a implements a.InterfaceC0589a {
        C0205a() {
        }

        @Override // oh.a.InterfaceC0589a
        public void a(Typeface typeface) {
            a.this.T(typeface);
        }
    }

    public a(View view) {
        this.f15239a = view;
        TextPaint textPaint = new TextPaint(129);
        this.V = textPaint;
        this.W = new TextPaint(textPaint);
        this.f15253h = new Rect();
        this.f15251g = new Rect();
        this.f15255i = new RectF();
        this.f15247e = e();
        H(view.getContext().getResources().getConfiguration());
    }

    private void A(TextPaint textPaint) {
        textPaint.setTextSize(this.f15261l);
        textPaint.setTypeface(this.f15283z);
        textPaint.setLetterSpacing(this.f15256i0);
    }

    private void B(float f10) {
        Rect rect;
        if (this.f15243c) {
            RectF rectF = this.f15255i;
            if (f10 < this.f15247e) {
                rect = this.f15251g;
            } else {
                rect = this.f15253h;
            }
            rectF.set(rect);
            return;
        }
        this.f15255i.left = G(this.f15251g.left, this.f15253h.left, f10, this.X);
        this.f15255i.top = G(this.f15271q, this.f15273r, f10, this.X);
        this.f15255i.right = G(this.f15251g.right, this.f15253h.right, f10, this.X);
        this.f15255i.bottom = G(this.f15251g.bottom, this.f15253h.bottom, f10, this.X);
    }

    private static boolean C(float f10, float f11) {
        if (Math.abs(f10 - f11) < 1.0E-5f) {
            return true;
        }
        return false;
    }

    private boolean D() {
        if (h0.z(this.f15239a) == 1) {
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
        return ch.a.a(f10, f11, f12);
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
        this.f15264m0 = f10;
        h0.e0(this.f15239a);
    }

    private boolean U(Typeface typeface) {
        oh.a aVar = this.E;
        if (aVar != null) {
            aVar.c();
        }
        if (this.f15282y != typeface) {
            this.f15282y = typeface;
            Typeface b10 = oh.h.b(this.f15239a.getContext().getResources().getConfiguration(), typeface);
            this.f15281x = b10;
            if (b10 == null) {
                b10 = this.f15282y;
            }
            this.f15280w = b10;
            return true;
        }
        return false;
    }

    private void Y(float f10) {
        this.f15266n0 = f10;
        h0.e0(this.f15239a);
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
        if (charSequence != null && (staticLayout = this.f15260k0) != null) {
            this.f15268o0 = TextUtils.ellipsize(charSequence, this.V, staticLayout.getWidth(), this.F);
        }
        CharSequence charSequence2 = this.f15268o0;
        float f11 = 0.0f;
        if (charSequence2 != null) {
            this.f15262l0 = I(this.V, charSequence2);
        } else {
            this.f15262l0 = 0.0f;
        }
        int b10 = androidx.core.view.j.b(this.f15259k, this.I ? 1 : 0);
        int i11 = b10 & 112;
        if (i11 != 48) {
            if (i11 != 80) {
                this.f15273r = this.f15253h.centerY() - ((this.V.descent() - this.V.ascent()) / 2.0f);
            } else {
                this.f15273r = this.f15253h.bottom + this.V.ascent();
            }
        } else {
            this.f15273r = this.f15253h.top;
        }
        int i12 = b10 & 8388615;
        if (i12 != 1) {
            if (i12 != 5) {
                this.f15277t = this.f15253h.left;
            } else {
                this.f15277t = this.f15253h.right - this.f15262l0;
            }
        } else {
            this.f15277t = this.f15253h.centerX() - (this.f15262l0 / 2.0f);
        }
        i(0.0f, z10);
        StaticLayout staticLayout2 = this.f15260k0;
        if (staticLayout2 != null) {
            f10 = staticLayout2.getHeight();
        } else {
            f10 = 0.0f;
        }
        StaticLayout staticLayout3 = this.f15260k0;
        if (staticLayout3 != null && this.f15270p0 > 1) {
            f11 = staticLayout3.getWidth();
        } else {
            CharSequence charSequence3 = this.H;
            if (charSequence3 != null) {
                f11 = I(this.V, charSequence3);
            }
        }
        StaticLayout staticLayout4 = this.f15260k0;
        if (staticLayout4 != null) {
            i10 = staticLayout4.getLineCount();
        } else {
            i10 = 0;
        }
        this.f15269p = i10;
        int b11 = androidx.core.view.j.b(this.f15257j, this.I ? 1 : 0);
        int i13 = b11 & 112;
        if (i13 != 48) {
            if (i13 != 80) {
                this.f15271q = this.f15251g.centerY() - (f10 / 2.0f);
            } else {
                this.f15271q = (this.f15251g.bottom - f10) + this.V.descent();
            }
        } else {
            this.f15271q = this.f15251g.top;
        }
        int i14 = b11 & 8388615;
        if (i14 != 1) {
            if (i14 != 5) {
                this.f15275s = this.f15251g.left;
            } else {
                this.f15275s = this.f15251g.right - f11;
            }
        } else {
            this.f15275s = this.f15251g.centerX() - (f11 / 2.0f);
        }
        j();
        d0(this.f15241b);
    }

    private boolean b0(Typeface typeface) {
        oh.a aVar = this.D;
        if (aVar != null) {
            aVar.c();
        }
        if (this.B != typeface) {
            this.B = typeface;
            Typeface b10 = oh.h.b(this.f15239a.getContext().getResources().getConfiguration(), typeface);
            this.A = b10;
            if (b10 == null) {
                b10 = this.B;
            }
            this.f15283z = b10;
            return true;
        }
        return false;
    }

    private void c() {
        g(this.f15241b);
    }

    private float d(float f10) {
        float f11 = this.f15247e;
        if (f10 <= f11) {
            return ch.a.b(1.0f, 0.0f, this.f15245d, f11, f10);
        }
        return ch.a.b(0.0f, 1.0f, f11, 1.0f, f10);
    }

    private void d0(float f10) {
        boolean z10;
        h(f10);
        if (f15237t0 && this.N != 1.0f) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.K = z10;
        if (z10) {
            n();
        }
        h0.e0(this.f15239a);
    }

    private float e() {
        float f10 = this.f15245d;
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
        if (this.f15243c) {
            if (f10 < this.f15247e) {
                this.f15278u = this.f15275s;
                this.f15279v = this.f15271q;
                d0(0.0f);
                f11 = 0.0f;
            } else {
                this.f15278u = this.f15277t;
                this.f15279v = this.f15273r - Math.max(0, this.f15249f);
                d0(1.0f);
                f11 = 1.0f;
            }
        } else {
            this.f15278u = G(this.f15275s, this.f15277t, f10, this.X);
            this.f15279v = G(this.f15271q, this.f15273r, f10, this.X);
            d0(f10);
            f11 = f10;
        }
        TimeInterpolator timeInterpolator = ch.a.f7596b;
        Q(1.0f - G(0.0f, 1.0f, 1.0f - f10, timeInterpolator));
        Y(G(1.0f, 0.0f, f10, timeInterpolator));
        if (this.f15267o != this.f15265n) {
            this.V.setColor(a(v(), t(), f11));
        } else {
            this.V.setColor(t());
        }
        int i10 = Build.VERSION.SDK_INT;
        float f12 = this.f15254h0;
        float f13 = this.f15256i0;
        if (f12 != f13) {
            this.V.setLetterSpacing(G(f13, f12, f10, timeInterpolator));
        } else {
            this.V.setLetterSpacing(f12);
        }
        this.P = G(this.f15246d0, this.Z, f10, null);
        this.Q = G(this.f15248e0, this.f15240a0, f10, null);
        this.R = G(this.f15250f0, this.f15242b0, f10, null);
        int a10 = a(u(this.f15252g0), u(this.f15244c0), f10);
        this.S = a10;
        this.V.setShadowLayer(this.P, this.Q, this.R, a10);
        if (this.f15243c) {
            this.V.setAlpha((int) (d(f10) * this.V.getAlpha()));
            if (i10 >= 31) {
                TextPaint textPaint = this.V;
                textPaint.setShadowLayer(this.P, this.Q, this.R, hh.a.a(this.S, textPaint.getAlpha()));
            }
        }
        h0.e0(this.f15239a);
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
            float width = this.f15253h.width();
            float width2 = this.f15251g.width();
            if (C(f10, 1.0f)) {
                f11 = this.f15263m;
                f12 = this.f15254h0;
                this.N = 1.0f;
                typeface = this.f15280w;
            } else {
                float f13 = this.f15261l;
                float f14 = this.f15256i0;
                Typeface typeface2 = this.f15283z;
                if (C(f10, 0.0f)) {
                    this.N = 1.0f;
                } else {
                    this.N = G(this.f15261l, this.f15263m, f10, this.Y) / this.f15261l;
                }
                float f15 = this.f15263m / this.f15261l;
                float f16 = width2 * f15;
                if (!z10 && !this.f15243c && f16 > width) {
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
                if (this.f15258j0 != f12) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                if (this.C != typeface) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                if (this.f15260k0 != null && width != staticLayout.getWidth()) {
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
                this.f15258j0 = f12;
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
            this.V.setLetterSpacing(this.f15258j0);
            this.I = f(this.G);
            if (j0()) {
                i10 = this.f15270p0;
            }
            StaticLayout k10 = k(i10, width, this.I);
            this.f15260k0 = k10;
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
        if (this.f15270p0 > 1) {
            if ((!this.I || this.f15243c) && !this.K) {
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
        return (StaticLayout) b2.e.g(h.b(this.G, this.V, (int) f10).d(this.F).g(z10).c(y10).f(false).i(i10).h(this.f15272q0, this.f15274r0).e(this.f15276s0).j(null).a());
    }

    private void m(Canvas canvas, float f10, float f11) {
        int alpha = this.V.getAlpha();
        canvas.translate(f10, f11);
        if (!this.f15243c) {
            this.V.setAlpha((int) (this.f15266n0 * alpha));
            if (Build.VERSION.SDK_INT >= 31) {
                TextPaint textPaint = this.V;
                textPaint.setShadowLayer(this.P, this.Q, this.R, hh.a.a(this.S, textPaint.getAlpha()));
            }
            this.f15260k0.draw(canvas);
        }
        if (!this.f15243c) {
            this.V.setAlpha((int) (this.f15264m0 * alpha));
        }
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 31) {
            TextPaint textPaint2 = this.V;
            textPaint2.setShadowLayer(this.P, this.Q, this.R, hh.a.a(this.S, textPaint2.getAlpha()));
        }
        int lineBaseline = this.f15260k0.getLineBaseline(0);
        CharSequence charSequence = this.f15268o0;
        float f12 = lineBaseline;
        canvas.drawText(charSequence, 0, charSequence.length(), 0.0f, f12, this.V);
        if (i10 >= 31) {
            this.V.setShadowLayer(this.P, this.Q, this.R, this.S);
        }
        if (!this.f15243c) {
            String trim = this.f15268o0.toString().trim();
            if (trim.endsWith("…")) {
                trim = trim.substring(0, trim.length() - 1);
            }
            String str = trim;
            this.V.setAlpha(alpha);
            canvas.drawText(str, 0, Math.min(this.f15260k0.getLineEnd(0), str.length()), 0.0f, f12, (Paint) this.V);
        }
    }

    private void n() {
        if (this.L == null && !this.f15251g.isEmpty() && !TextUtils.isEmpty(this.H)) {
            g(0.0f);
            int width = this.f15260k0.getWidth();
            int height = this.f15260k0.getHeight();
            if (width > 0 && height > 0) {
                this.L = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
                this.f15260k0.draw(new Canvas(this.L));
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
                    return this.f15253h.right - this.f15262l0;
                }
                return this.f15253h.left;
            } else if (this.I) {
                return this.f15253h.left;
            } else {
                return this.f15253h.right - this.f15262l0;
            }
        }
        return (i10 / 2.0f) - (this.f15262l0 / 2.0f);
    }

    private float s(RectF rectF, int i10, int i11) {
        if (i11 != 17 && (i11 & 7) != 1) {
            if ((i11 & 8388613) != 8388613 && (i11 & 5) != 5) {
                if (this.I) {
                    return this.f15253h.right;
                }
                return rectF.left + this.f15262l0;
            } else if (this.I) {
                return rectF.left + this.f15262l0;
            } else {
                return this.f15253h.right;
            }
        }
        return (i10 / 2.0f) + (this.f15262l0 / 2.0f);
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
        return u(this.f15265n);
    }

    private Layout.Alignment y() {
        int b10 = androidx.core.view.j.b(this.f15257j, this.I ? 1 : 0) & 7;
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
        textPaint.setTextSize(this.f15263m);
        textPaint.setTypeface(this.f15280w);
        textPaint.setLetterSpacing(this.f15254h0);
    }

    public final boolean E() {
        ColorStateList colorStateList = this.f15267o;
        if (colorStateList == null || !colorStateList.isStateful()) {
            ColorStateList colorStateList2 = this.f15265n;
            if (colorStateList2 != null && colorStateList2.isStateful()) {
                return true;
            }
            return false;
        }
        return true;
    }

    public void H(Configuration configuration) {
        if (Build.VERSION.SDK_INT >= 31) {
            Typeface typeface = this.f15282y;
            if (typeface != null) {
                this.f15281x = oh.h.b(configuration, typeface);
            }
            Typeface typeface2 = this.B;
            if (typeface2 != null) {
                this.A = oh.h.b(configuration, typeface2);
            }
            Typeface typeface3 = this.f15281x;
            if (typeface3 == null) {
                typeface3 = this.f15282y;
            }
            this.f15280w = typeface3;
            Typeface typeface4 = this.A;
            if (typeface4 == null) {
                typeface4 = this.B;
            }
            this.f15283z = typeface4;
            K(true);
        }
    }

    public void J() {
        K(false);
    }

    public void K(boolean z10) {
        if ((this.f15239a.getHeight() > 0 && this.f15239a.getWidth() > 0) || z10) {
            b(z10);
            c();
        }
    }

    public void M(ColorStateList colorStateList) {
        if (this.f15267o == colorStateList && this.f15265n == colorStateList) {
            return;
        }
        this.f15267o = colorStateList;
        this.f15265n = colorStateList;
        J();
    }

    public void N(int i10, int i11, int i12, int i13) {
        if (!L(this.f15253h, i10, i11, i12, i13)) {
            this.f15253h.set(i10, i11, i12, i13);
            this.U = true;
        }
    }

    public void O(Rect rect) {
        N(rect.left, rect.top, rect.right, rect.bottom);
    }

    public void P(int i10) {
        oh.d dVar = new oh.d(this.f15239a.getContext(), i10);
        if (dVar.i() != null) {
            this.f15267o = dVar.i();
        }
        if (dVar.j() != 0.0f) {
            this.f15263m = dVar.j();
        }
        ColorStateList colorStateList = dVar.f41758c;
        if (colorStateList != null) {
            this.f15244c0 = colorStateList;
        }
        this.f15240a0 = dVar.f41763h;
        this.f15242b0 = dVar.f41764i;
        this.Z = dVar.f41765j;
        this.f15254h0 = dVar.f41767l;
        oh.a aVar = this.E;
        if (aVar != null) {
            aVar.c();
        }
        this.E = new oh.a(new C0205a(), dVar.e());
        dVar.h(this.f15239a.getContext(), this.E);
        J();
    }

    public void R(ColorStateList colorStateList) {
        if (this.f15267o != colorStateList) {
            this.f15267o = colorStateList;
            J();
        }
    }

    public void S(int i10) {
        if (this.f15259k != i10) {
            this.f15259k = i10;
            J();
        }
    }

    public void T(Typeface typeface) {
        if (U(typeface)) {
            J();
        }
    }

    public void V(int i10, int i11, int i12, int i13) {
        if (!L(this.f15251g, i10, i11, i12, i13)) {
            this.f15251g.set(i10, i11, i12, i13);
            this.U = true;
        }
    }

    public void W(Rect rect) {
        V(rect.left, rect.top, rect.right, rect.bottom);
    }

    public void X(float f10) {
        if (this.f15256i0 != f10) {
            this.f15256i0 = f10;
            J();
        }
    }

    public void Z(int i10) {
        if (this.f15257j != i10) {
            this.f15257j = i10;
            J();
        }
    }

    public void a0(float f10) {
        if (this.f15261l != f10) {
            this.f15261l = f10;
            J();
        }
    }

    public void c0(float f10) {
        float a10 = u1.a.a(f10, 0.0f, 1.0f);
        if (a10 != this.f15241b) {
            this.f15241b = a10;
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
        if (this.H != null && this.f15255i.width() > 0.0f && this.f15255i.height() > 0.0f) {
            this.V.setTextSize(this.O);
            float f10 = this.f15278u;
            float f11 = this.f15279v;
            if (this.K && this.L != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            float f12 = this.N;
            if (f12 != 1.0f && !this.f15243c) {
                canvas.scale(f12, f12, f10, f11);
            }
            if (z10) {
                canvas.drawBitmap(this.L, f10, f11, this.M);
                canvas.restoreToCount(save);
                return;
            }
            if (j0() && (!this.f15243c || this.f15241b > this.f15247e)) {
                m(canvas, this.f15278u - this.f15260k0.getLineStart(0), f11);
            } else {
                canvas.translate(f10, f11);
                this.f15260k0.draw(canvas);
            }
            canvas.restoreToCount(save);
        }
    }

    public void o(RectF rectF, int i10, int i11) {
        this.I = f(this.G);
        rectF.left = Math.max(r(i10, i11), this.f15253h.left);
        rectF.top = this.f15253h.top;
        rectF.right = Math.min(s(rectF, i10, i11), this.f15253h.right);
        rectF.bottom = this.f15253h.top + q();
    }

    public ColorStateList p() {
        return this.f15267o;
    }

    public float q() {
        z(this.W);
        return -this.W.ascent();
    }

    public int t() {
        return u(this.f15267o);
    }

    public float w() {
        A(this.W);
        return -this.W.ascent();
    }

    public float x() {
        return this.f15241b;
    }
}
