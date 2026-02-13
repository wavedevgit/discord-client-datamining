package com.google.android.material.internal;

import android.animation.TimeInterpolator;
import android.content.res.ColorStateList;
import android.content.res.Configuration;
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
import android.view.Gravity;
import android.view.View;
import qh.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {
    private Typeface A;
    private Typeface B;
    private Typeface C;
    private Typeface D;
    private qh.a E;
    private qh.a F;
    private CharSequence H;
    private CharSequence I;
    private boolean J;
    private float L;
    private float M;
    private float N;
    private float O;
    private float P;
    private int Q;
    private int R;
    private int[] S;
    private boolean T;
    private final TextPaint U;
    private final TextPaint V;
    private TimeInterpolator W;
    private TimeInterpolator X;
    private float Y;
    private float Z;

    /* renamed from: a  reason: collision with root package name */
    private final View f15852a;

    /* renamed from: a0  reason: collision with root package name */
    private float f15853a0;

    /* renamed from: b  reason: collision with root package name */
    private float f15854b;

    /* renamed from: b0  reason: collision with root package name */
    private ColorStateList f15855b0;

    /* renamed from: c  reason: collision with root package name */
    private boolean f15856c;

    /* renamed from: c0  reason: collision with root package name */
    private float f15857c0;

    /* renamed from: d  reason: collision with root package name */
    private float f15858d;

    /* renamed from: d0  reason: collision with root package name */
    private float f15859d0;

    /* renamed from: e  reason: collision with root package name */
    private float f15860e;

    /* renamed from: e0  reason: collision with root package name */
    private float f15861e0;

    /* renamed from: f  reason: collision with root package name */
    private int f15862f;

    /* renamed from: f0  reason: collision with root package name */
    private ColorStateList f15863f0;

    /* renamed from: g  reason: collision with root package name */
    private final Rect f15864g;

    /* renamed from: g0  reason: collision with root package name */
    private float f15865g0;

    /* renamed from: h  reason: collision with root package name */
    private final Rect f15866h;

    /* renamed from: h0  reason: collision with root package name */
    private float f15867h0;

    /* renamed from: i  reason: collision with root package name */
    private Rect f15868i;

    /* renamed from: i0  reason: collision with root package name */
    private float f15869i0;

    /* renamed from: j  reason: collision with root package name */
    private final RectF f15870j;

    /* renamed from: j0  reason: collision with root package name */
    private StaticLayout f15871j0;

    /* renamed from: k0  reason: collision with root package name */
    private float f15873k0;

    /* renamed from: l0  reason: collision with root package name */
    private float f15875l0;

    /* renamed from: m0  reason: collision with root package name */
    private float f15877m0;

    /* renamed from: n0  reason: collision with root package name */
    private CharSequence f15879n0;

    /* renamed from: o  reason: collision with root package name */
    private ColorStateList f15880o;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f15882p;

    /* renamed from: q  reason: collision with root package name */
    private int f15884q;

    /* renamed from: r  reason: collision with root package name */
    private float f15886r;

    /* renamed from: s  reason: collision with root package name */
    private float f15888s;

    /* renamed from: t  reason: collision with root package name */
    private float f15890t;

    /* renamed from: t0  reason: collision with root package name */
    private i f15891t0;

    /* renamed from: u  reason: collision with root package name */
    private float f15892u;

    /* renamed from: v  reason: collision with root package name */
    private float f15894v;

    /* renamed from: w  reason: collision with root package name */
    private float f15896w;

    /* renamed from: w0  reason: collision with root package name */
    private boolean f15897w0;

    /* renamed from: x  reason: collision with root package name */
    private Typeface f15898x;

    /* renamed from: y  reason: collision with root package name */
    private Typeface f15899y;

    /* renamed from: z  reason: collision with root package name */
    private Typeface f15900z;

    /* renamed from: k  reason: collision with root package name */
    private int f15872k = 16;

    /* renamed from: l  reason: collision with root package name */
    private int f15874l = 16;

    /* renamed from: m  reason: collision with root package name */
    private float f15876m = 15.0f;

    /* renamed from: n  reason: collision with root package name */
    private float f15878n = 15.0f;
    private TextUtils.TruncateAt G = TextUtils.TruncateAt.END;
    private boolean K = true;

    /* renamed from: o0  reason: collision with root package name */
    private int f15881o0 = 1;

    /* renamed from: p0  reason: collision with root package name */
    private int f15883p0 = 1;

    /* renamed from: q0  reason: collision with root package name */
    private float f15885q0 = 0.0f;

    /* renamed from: r0  reason: collision with root package name */
    private float f15887r0 = 1.0f;

    /* renamed from: s0  reason: collision with root package name */
    private int f15889s0 = h.f15904o;

    /* renamed from: u0  reason: collision with root package name */
    private int f15893u0 = -1;

    /* renamed from: v0  reason: collision with root package name */
    private int f15895v0 = -1;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.google.android.material.internal.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class C0184a implements a.InterfaceC0604a {
        C0184a() {
        }

        @Override // qh.a.InterfaceC0604a
        public void a(Typeface typeface) {
            a.this.Y(typeface);
        }
    }

    public a(View view) {
        this.f15852a = view;
        TextPaint textPaint = new TextPaint(129);
        this.U = textPaint;
        this.V = new TextPaint(textPaint);
        this.f15866h = new Rect();
        this.f15864g = new Rect();
        this.f15870j = new RectF();
        this.f15860e = e();
        L(view.getContext().getResources().getConfiguration());
    }

    private Layout.Alignment C() {
        int absoluteGravity = Gravity.getAbsoluteGravity(this.f15872k, this.J ? 1 : 0) & 7;
        if (absoluteGravity != 1) {
            if (absoluteGravity != 5) {
                if (this.J) {
                    return Layout.Alignment.ALIGN_OPPOSITE;
                }
                return Layout.Alignment.ALIGN_NORMAL;
            } else if (this.J) {
                return Layout.Alignment.ALIGN_NORMAL;
            } else {
                return Layout.Alignment.ALIGN_OPPOSITE;
            }
        }
        return Layout.Alignment.ALIGN_CENTER;
    }

    private void D(TextPaint textPaint) {
        textPaint.setTextSize(this.f15878n);
        textPaint.setTypeface(this.f15898x);
        textPaint.setLetterSpacing(this.f15865g0);
    }

    private void E(TextPaint textPaint) {
        textPaint.setTextSize(this.f15876m);
        textPaint.setTypeface(this.A);
        textPaint.setLetterSpacing(this.f15867h0);
    }

    private void F(float f10) {
        Rect rect;
        if (this.f15856c) {
            RectF rectF = this.f15870j;
            if (f10 < this.f15860e) {
                rect = this.f15864g;
            } else {
                rect = this.f15866h;
            }
            rectF.set(rect);
            return;
        }
        this.f15870j.left = K(this.f15864g.left, this.f15866h.left, f10, this.W);
        this.f15870j.top = K(this.f15886r, this.f15888s, f10, this.W);
        this.f15870j.right = K(this.f15864g.right, this.f15866h.right, f10, this.W);
        this.f15870j.bottom = K(this.f15864g.bottom, this.f15866h.bottom, f10, this.W);
    }

    private static boolean G(float f10, float f11) {
        if (Math.abs(f10 - f11) < 1.0E-5f) {
            return true;
        }
        return false;
    }

    private boolean H() {
        if (this.f15852a.getLayoutDirection() == 1) {
            return true;
        }
        return false;
    }

    private boolean J(CharSequence charSequence, boolean z10) {
        a2.e eVar;
        if (z10) {
            eVar = a2.f.f365d;
        } else {
            eVar = a2.f.f364c;
        }
        return eVar.isRtl(charSequence, 0, charSequence.length());
    }

    private static float K(float f10, float f11, float f12, TimeInterpolator timeInterpolator) {
        if (timeInterpolator != null) {
            f12 = timeInterpolator.getInterpolation(f12);
        }
        return ch.a.a(f10, f11, f12);
    }

    private float M(TextPaint textPaint, CharSequence charSequence) {
        return textPaint.measureText(charSequence, 0, charSequence.length());
    }

    private static boolean P(Rect rect, int i10, int i11, int i12, int i13) {
        if (rect.left == i10 && rect.top == i11 && rect.right == i12 && rect.bottom == i13) {
            return true;
        }
        return false;
    }

    private void V(float f10) {
        this.f15875l0 = f10;
        this.f15852a.postInvalidateOnAnimation();
    }

    private boolean Z(Typeface typeface) {
        qh.a aVar = this.F;
        if (aVar != null) {
            aVar.c();
        }
        if (this.f15900z != typeface) {
            this.f15900z = typeface;
            Typeface b10 = qh.h.b(this.f15852a.getContext().getResources().getConfiguration(), typeface);
            this.f15899y = b10;
            if (b10 == null) {
                b10 = this.f15900z;
            }
            this.f15898x = b10;
            return true;
        }
        return false;
    }

    private static int a(int i10, int i11, float f10) {
        float f11 = 1.0f - f10;
        return Color.argb(Math.round((Color.alpha(i10) * f11) + (Color.alpha(i11) * f10)), Math.round((Color.red(i10) * f11) + (Color.red(i11) * f10)), Math.round((Color.green(i10) * f11) + (Color.green(i11) * f10)), Math.round((Color.blue(i10) * f11) + (Color.blue(i11) * f10)));
    }

    private void b(boolean z10) {
        float f10;
        float f11;
        int i10;
        CharSequence charSequence;
        i(1.0f, z10);
        if (this.I != null && this.f15871j0 != null) {
            if (r0()) {
                charSequence = TextUtils.ellipsize(this.I, this.U, this.f15871j0.getWidth(), this.G);
            } else {
                charSequence = this.I;
            }
            this.f15879n0 = charSequence;
        }
        CharSequence charSequence2 = this.f15879n0;
        float f12 = 0.0f;
        if (charSequence2 != null) {
            this.f15873k0 = M(this.U, charSequence2);
        } else {
            this.f15873k0 = 0.0f;
        }
        int absoluteGravity = Gravity.getAbsoluteGravity(this.f15874l, this.J ? 1 : 0);
        Rect rect = this.f15868i;
        if (rect == null) {
            rect = this.f15866h;
        }
        int i11 = absoluteGravity & 112;
        if (i11 != 48) {
            if (i11 != 80) {
                this.f15888s = rect.centerY() - ((this.U.descent() - this.U.ascent()) / 2.0f);
            } else {
                this.f15888s = rect.bottom + this.U.ascent();
            }
        } else {
            this.f15888s = rect.top;
        }
        int i12 = absoluteGravity & 8388615;
        if (i12 != 1) {
            if (i12 != 5) {
                this.f15892u = rect.left;
            } else {
                this.f15892u = rect.right - this.f15873k0;
            }
        } else {
            this.f15892u = rect.centerX() - (this.f15873k0 / 2.0f);
        }
        if (this.f15873k0 <= this.f15866h.width()) {
            float f13 = this.f15892u;
            float max = f13 + Math.max(0.0f, this.f15866h.left - f13);
            this.f15892u = max;
            this.f15892u = max + Math.min(0.0f, this.f15866h.right - (this.f15873k0 + max));
        }
        if (m() <= this.f15866h.height()) {
            float f14 = this.f15888s;
            float max2 = f14 + Math.max(0.0f, this.f15866h.top - f14);
            this.f15888s = max2;
            this.f15888s = max2 + Math.min(0.0f, this.f15866h.bottom - (q() + max2));
        }
        i(0.0f, z10);
        StaticLayout staticLayout = this.f15871j0;
        if (staticLayout != null) {
            f10 = staticLayout.getHeight();
        } else {
            f10 = 0.0f;
        }
        StaticLayout staticLayout2 = this.f15871j0;
        if (staticLayout2 != null && this.f15881o0 > 1) {
            f11 = staticLayout2.getWidth();
        } else {
            CharSequence charSequence3 = this.I;
            if (charSequence3 != null) {
                f11 = M(this.U, charSequence3);
            } else {
                f11 = 0.0f;
            }
        }
        StaticLayout staticLayout3 = this.f15871j0;
        if (staticLayout3 != null) {
            i10 = staticLayout3.getLineCount();
        } else {
            i10 = 0;
        }
        this.f15884q = i10;
        int absoluteGravity2 = Gravity.getAbsoluteGravity(this.f15872k, this.J ? 1 : 0);
        int i13 = absoluteGravity2 & 112;
        if (i13 != 48) {
            if (i13 != 80) {
                this.f15886r = this.f15864g.centerY() - (f10 / 2.0f);
            } else {
                float f15 = this.f15864g.bottom - f10;
                if (this.f15897w0) {
                    f12 = this.U.descent();
                }
                this.f15886r = f15 + f12;
            }
        } else {
            this.f15886r = this.f15864g.top;
        }
        int i14 = absoluteGravity2 & 8388615;
        if (i14 != 1) {
            if (i14 != 5) {
                this.f15890t = this.f15864g.left;
            } else {
                this.f15890t = this.f15864g.right - f11;
            }
        } else {
            this.f15890t = this.f15864g.centerX() - (f11 / 2.0f);
        }
        k0(this.f15854b);
    }

    private void c() {
        g(this.f15854b);
    }

    private float d(float f10) {
        float f11 = this.f15860e;
        if (f10 <= f11) {
            return ch.a.b(1.0f, 0.0f, this.f15858d, f11, f10);
        }
        return ch.a.b(0.0f, 1.0f, f11, 1.0f, f10);
    }

    private float e() {
        float f10 = this.f15858d;
        return f10 + ((1.0f - f10) * 0.5f);
    }

    private boolean f(CharSequence charSequence) {
        boolean H = H();
        if (this.K) {
            return J(charSequence, H);
        }
        return H;
    }

    private void f0(float f10) {
        this.f15877m0 = f10;
        this.f15852a.postInvalidateOnAnimation();
    }

    private void g(float f10) {
        float f11;
        F(f10);
        if (this.f15856c) {
            if (f10 < this.f15860e) {
                this.f15894v = this.f15890t;
                this.f15896w = this.f15886r;
                k0(0.0f);
                f11 = 0.0f;
            } else {
                this.f15894v = this.f15892u;
                this.f15896w = this.f15888s - Math.max(0, this.f15862f);
                k0(1.0f);
                f11 = 1.0f;
            }
        } else {
            this.f15894v = K(this.f15890t, this.f15892u, f10, this.W);
            this.f15896w = K(this.f15886r, this.f15888s, f10, this.W);
            k0(f10);
            f11 = f10;
        }
        TimeInterpolator timeInterpolator = ch.a.f8277b;
        V(1.0f - K(0.0f, 1.0f, 1.0f - f10, timeInterpolator));
        f0(K(1.0f, 0.0f, f10, timeInterpolator));
        if (this.f15882p != this.f15880o) {
            this.U.setColor(a(v(), t(), f11));
        } else {
            this.U.setColor(t());
        }
        float f12 = this.f15865g0;
        float f13 = this.f15867h0;
        if (f12 != f13) {
            this.U.setLetterSpacing(K(f13, f12, f10, timeInterpolator));
        } else {
            this.U.setLetterSpacing(f12);
        }
        this.N = K(this.f15857c0, this.Y, f10, null);
        this.O = K(this.f15859d0, this.Z, f10, null);
        this.P = K(this.f15861e0, this.f15853a0, f10, null);
        int a10 = a(u(this.f15863f0), u(this.f15855b0), f10);
        this.Q = a10;
        this.U.setShadowLayer(this.N, this.O, this.P, a10);
        if (this.f15856c) {
            this.U.setAlpha((int) (d(f10) * this.U.getAlpha()));
            if (Build.VERSION.SDK_INT >= 31) {
                TextPaint textPaint = this.U;
                textPaint.setShadowLayer(this.N, this.O, this.P, jh.a.a(this.Q, textPaint.getAlpha()));
            }
        }
        this.f15852a.postInvalidateOnAnimation();
    }

    private void h(float f10) {
        i(f10, false);
    }

    private void i(float f10, boolean z10) {
        Typeface typeface;
        float f11;
        float f12;
        int i10;
        int i11;
        boolean z11;
        boolean z12;
        boolean z13;
        StaticLayout staticLayout;
        boolean z14;
        boolean z15;
        boolean z16;
        float K;
        if (this.H != null) {
            float width = this.f15866h.width();
            float width2 = this.f15864g.width();
            float f13 = 1.0f;
            if (G(f10, 1.0f)) {
                if (r0()) {
                    f11 = this.f15878n;
                } else {
                    f11 = this.f15876m;
                }
                if (r0()) {
                    f12 = this.f15865g0;
                } else {
                    f12 = this.f15867h0;
                }
                if (r0()) {
                    K = 1.0f;
                } else {
                    K = K(this.f15876m, this.f15878n, f10, this.X) / this.f15876m;
                }
                this.L = K;
                if (!r0()) {
                    width = width2;
                }
                typeface = this.f15898x;
                width2 = width;
            } else {
                float f14 = this.f15876m;
                float f15 = this.f15867h0;
                typeface = this.A;
                if (G(f10, 0.0f)) {
                    this.L = 1.0f;
                } else {
                    this.L = K(this.f15876m, this.f15878n, f10, this.X) / this.f15876m;
                }
                float f16 = this.f15878n / this.f15876m;
                float f17 = width2 * f16;
                if (!z10 && !this.f15856c && f17 > width && r0()) {
                    width2 = Math.min(width / f16, width2);
                }
                f11 = f14;
                f12 = f15;
            }
            if (f10 < 0.5f) {
                i10 = this.f15881o0;
            } else {
                i10 = this.f15883p0;
            }
            boolean z17 = false;
            if (width2 > 0.0f) {
                if (this.M != f11) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (this.f15869i0 != f12) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                if (this.D != typeface) {
                    z13 = true;
                } else {
                    z13 = false;
                }
                if (this.f15871j0 != null && width2 != staticLayout.getWidth()) {
                    z14 = true;
                } else {
                    z14 = false;
                }
                if (this.R != i10) {
                    z15 = true;
                } else {
                    z15 = false;
                }
                if (!z11 && !z12 && !z14 && !z13 && !z15 && !this.T) {
                    z16 = false;
                } else {
                    z16 = true;
                }
                this.M = f11;
                this.f15869i0 = f12;
                this.D = typeface;
                this.T = false;
                this.R = i10;
                TextPaint textPaint = this.U;
                if (this.L != 1.0f) {
                    z17 = true;
                }
                textPaint.setLinearText(z17);
                z17 = z16;
            }
            if (this.I != null && !z17) {
                return;
            }
            this.U.setTextSize(this.M);
            this.U.setTypeface(this.D);
            this.U.setLetterSpacing(this.f15869i0);
            this.J = f(this.H);
            if (q0()) {
                i11 = i10;
            } else {
                i11 = 1;
            }
            TextPaint textPaint2 = this.U;
            CharSequence charSequence = this.H;
            if (!r0()) {
                f13 = this.L;
            }
            StaticLayout j10 = j(i11, textPaint2, charSequence, width2 * f13, this.J);
            this.f15871j0 = j10;
            this.I = j10.getText();
        }
    }

    private boolean i0(Typeface typeface) {
        qh.a aVar = this.E;
        if (aVar != null) {
            aVar.c();
        }
        if (this.C != typeface) {
            this.C = typeface;
            Typeface b10 = qh.h.b(this.f15852a.getContext().getResources().getConfiguration(), typeface);
            this.B = b10;
            if (b10 == null) {
                b10 = this.C;
            }
            this.A = b10;
            return true;
        }
        return false;
    }

    private StaticLayout j(int i10, TextPaint textPaint, CharSequence charSequence, float f10, boolean z10) {
        Layout.Alignment C;
        if (i10 == 1) {
            C = Layout.Alignment.ALIGN_NORMAL;
        } else {
            C = C();
        }
        return (StaticLayout) b2.e.g(h.b(charSequence, textPaint, (int) f10).d(this.G).g(z10).c(C).f(false).i(i10).h(this.f15885q0, this.f15887r0).e(this.f15889s0).j(this.f15891t0).a());
    }

    private void k0(float f10) {
        h(f10);
        this.f15852a.postInvalidateOnAnimation();
    }

    private void l(Canvas canvas, float f10, float f11) {
        int alpha = this.U.getAlpha();
        canvas.translate(f10, f11);
        if (!this.f15856c) {
            this.U.setAlpha((int) (this.f15877m0 * alpha));
            if (Build.VERSION.SDK_INT >= 31) {
                TextPaint textPaint = this.U;
                textPaint.setShadowLayer(this.N, this.O, this.P, jh.a.a(this.Q, textPaint.getAlpha()));
            }
            this.f15871j0.draw(canvas);
        }
        if (!this.f15856c) {
            this.U.setAlpha((int) (this.f15875l0 * alpha));
        }
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 31) {
            TextPaint textPaint2 = this.U;
            textPaint2.setShadowLayer(this.N, this.O, this.P, jh.a.a(this.Q, textPaint2.getAlpha()));
        }
        int lineBaseline = this.f15871j0.getLineBaseline(0);
        CharSequence charSequence = this.f15879n0;
        float f12 = lineBaseline;
        canvas.drawText(charSequence, 0, charSequence.length(), 0.0f, f12, this.U);
        if (i10 >= 31) {
            this.U.setShadowLayer(this.N, this.O, this.P, this.Q);
        }
        if (!this.f15856c) {
            String trim = this.f15879n0.toString().trim();
            if (trim.endsWith("…")) {
                trim = trim.substring(0, trim.length() - 1);
            }
            String str = trim;
            this.U.setAlpha(alpha);
            canvas.drawText(str, 0, Math.min(this.f15871j0.getLineEnd(0), str.length()), 0.0f, f12, (Paint) this.U);
        }
    }

    private boolean q0() {
        if (this.f15881o0 > 1 || this.f15883p0 > 1) {
            if (!this.J || this.f15856c) {
                return true;
            }
            return false;
        }
        return false;
    }

    private float r(int i10, int i11) {
        if (i11 != 17 && (i11 & 7) != 1) {
            if ((i11 & 8388613) != 8388613 && (i11 & 5) != 5) {
                if (this.J) {
                    return this.f15866h.right - this.f15873k0;
                }
                return this.f15866h.left;
            } else if (this.J) {
                return this.f15866h.left;
            } else {
                return this.f15866h.right - this.f15873k0;
            }
        }
        return (i10 / 2.0f) - (this.f15873k0 / 2.0f);
    }

    private boolean r0() {
        if (this.f15883p0 == 1) {
            return true;
        }
        return false;
    }

    private float s(RectF rectF, int i10, int i11) {
        if (i11 != 17 && (i11 & 7) != 1) {
            if ((i11 & 8388613) != 8388613 && (i11 & 5) != 5) {
                if (this.J) {
                    return this.f15866h.right;
                }
                return rectF.left + this.f15873k0;
            } else if (this.J) {
                return rectF.left + this.f15873k0;
            } else {
                return this.f15866h.right;
            }
        }
        return (i10 / 2.0f) + (this.f15873k0 / 2.0f);
    }

    private int u(ColorStateList colorStateList) {
        if (colorStateList == null) {
            return 0;
        }
        int[] iArr = this.S;
        if (iArr != null) {
            return colorStateList.getColorForState(iArr, 0);
        }
        return colorStateList.getDefaultColor();
    }

    private int v() {
        return u(this.f15880o);
    }

    public float A() {
        E(this.V);
        return -this.V.ascent();
    }

    public float B() {
        return this.f15854b;
    }

    public final boolean I() {
        ColorStateList colorStateList = this.f15882p;
        if (colorStateList == null || !colorStateList.isStateful()) {
            ColorStateList colorStateList2 = this.f15880o;
            if (colorStateList2 != null && colorStateList2.isStateful()) {
                return true;
            }
            return false;
        }
        return true;
    }

    public void L(Configuration configuration) {
        if (Build.VERSION.SDK_INT >= 31) {
            Typeface typeface = this.f15900z;
            if (typeface != null) {
                this.f15899y = qh.h.b(configuration, typeface);
            }
            Typeface typeface2 = this.C;
            if (typeface2 != null) {
                this.B = qh.h.b(configuration, typeface2);
            }
            Typeface typeface3 = this.f15899y;
            if (typeface3 == null) {
                typeface3 = this.f15900z;
            }
            this.f15898x = typeface3;
            Typeface typeface4 = this.B;
            if (typeface4 == null) {
                typeface4 = this.C;
            }
            this.A = typeface4;
            O(true);
        }
    }

    public void N() {
        O(false);
    }

    public void O(boolean z10) {
        if ((this.f15852a.getHeight() > 0 && this.f15852a.getWidth() > 0) || z10) {
            b(z10);
            c();
        }
    }

    public void Q(ColorStateList colorStateList) {
        if (this.f15882p == colorStateList && this.f15880o == colorStateList) {
            return;
        }
        this.f15882p = colorStateList;
        this.f15880o = colorStateList;
        N();
    }

    public void R(int i10, int i11, int i12, int i13) {
        if (!P(this.f15866h, i10, i11, i12, i13)) {
            this.f15866h.set(i10, i11, i12, i13);
            this.T = true;
        }
    }

    public void S(Rect rect) {
        R(rect.left, rect.top, rect.right, rect.bottom);
    }

    public void T(int i10) {
        if (i10 != this.f15883p0) {
            this.f15883p0 = i10;
            N();
        }
    }

    public void U(int i10) {
        qh.d dVar = new qh.d(this.f15852a.getContext(), i10);
        if (dVar.j() != null) {
            this.f15882p = dVar.j();
        }
        if (dVar.k() != 0.0f) {
            this.f15878n = dVar.k();
        }
        ColorStateList colorStateList = dVar.f45813c;
        if (colorStateList != null) {
            this.f15855b0 = colorStateList;
        }
        this.Z = dVar.f45819i;
        this.f15853a0 = dVar.f45820j;
        this.Y = dVar.f45821k;
        this.f15865g0 = dVar.f45823m;
        qh.a aVar = this.F;
        if (aVar != null) {
            aVar.c();
        }
        this.F = new qh.a(new C0184a(), dVar.e());
        dVar.h(this.f15852a.getContext(), this.F);
        N();
    }

    public void W(ColorStateList colorStateList) {
        if (this.f15882p != colorStateList) {
            this.f15882p = colorStateList;
            N();
        }
    }

    public void X(int i10) {
        if (this.f15874l != i10) {
            this.f15874l = i10;
            N();
        }
    }

    public void Y(Typeface typeface) {
        if (Z(typeface)) {
            N();
        }
    }

    public void a0(int i10, int i11, int i12, int i13) {
        b0(i10, i11, i12, i13, true);
    }

    public void b0(int i10, int i11, int i12, int i13, boolean z10) {
        if (P(this.f15864g, i10, i11, i12, i13) && z10 == this.f15897w0) {
            return;
        }
        this.f15864g.set(i10, i11, i12, i13);
        this.T = true;
        this.f15897w0 = z10;
    }

    public void c0(Rect rect) {
        a0(rect.left, rect.top, rect.right, rect.bottom);
    }

    public void d0(float f10) {
        if (this.f15867h0 != f10) {
            this.f15867h0 = f10;
            N();
        }
    }

    public void e0(int i10) {
        if (i10 != this.f15881o0) {
            this.f15881o0 = i10;
            N();
        }
    }

    public void g0(int i10) {
        if (this.f15872k != i10) {
            this.f15872k = i10;
            N();
        }
    }

    public void h0(float f10) {
        if (this.f15876m != f10) {
            this.f15876m = f10;
            N();
        }
    }

    public void j0(float f10) {
        float a10 = u1.a.a(f10, 0.0f, 1.0f);
        if (a10 != this.f15854b) {
            this.f15854b = a10;
            c();
        }
    }

    public void k(Canvas canvas) {
        int save = canvas.save();
        if (this.I != null && this.f15870j.width() > 0.0f && this.f15870j.height() > 0.0f) {
            this.U.setTextSize(this.M);
            float f10 = this.f15894v;
            float f11 = this.f15896w;
            float f12 = this.L;
            if (f12 != 1.0f && !this.f15856c) {
                canvas.scale(f12, f12, f10, f11);
            }
            if (q0() && r0() && (!this.f15856c || this.f15854b > this.f15860e)) {
                l(canvas, this.f15894v - this.f15871j0.getLineStart(0), f11);
            } else {
                canvas.translate(f10, f11);
                this.f15871j0.draw(canvas);
            }
            canvas.restoreToCount(save);
        }
    }

    public void l0(TimeInterpolator timeInterpolator) {
        this.W = timeInterpolator;
        N();
    }

    public float m() {
        D(this.V);
        return (-this.V.ascent()) + this.V.descent();
    }

    public final boolean m0(int[] iArr) {
        this.S = iArr;
        if (I()) {
            N();
            return true;
        }
        return false;
    }

    public float n() {
        D(this.V);
        return -this.V.ascent();
    }

    public void n0(CharSequence charSequence) {
        if (charSequence != null && TextUtils.equals(this.H, charSequence)) {
            return;
        }
        this.H = charSequence;
        this.I = null;
        N();
    }

    public void o(RectF rectF, int i10, int i11) {
        this.J = f(this.H);
        rectF.left = Math.max(r(i10, i11), this.f15866h.left);
        rectF.top = this.f15866h.top;
        rectF.right = Math.min(s(rectF, i10, i11), this.f15866h.right);
        rectF.bottom = this.f15866h.top + q();
        if (this.f15871j0 != null && !r0()) {
            StaticLayout staticLayout = this.f15871j0;
            float lineWidth = staticLayout.getLineWidth(staticLayout.getLineCount() - 1) * (this.f15878n / this.f15876m);
            if (this.J) {
                rectF.left = rectF.right - lineWidth;
            } else {
                rectF.right = rectF.left + lineWidth;
            }
        }
    }

    public void o0(TimeInterpolator timeInterpolator) {
        this.X = timeInterpolator;
        N();
    }

    public ColorStateList p() {
        return this.f15882p;
    }

    public void p0(Typeface typeface) {
        boolean Z = Z(typeface);
        boolean i02 = i0(typeface);
        if (!Z && !i02) {
            return;
        }
        N();
    }

    public float q() {
        int i10 = this.f15893u0;
        if (i10 != -1) {
            return i10;
        }
        return n();
    }

    public void s0(int i10) {
        D(this.V);
        float f10 = i10;
        this.f15893u0 = j(this.f15883p0, this.V, this.H, f10 * (this.f15878n / this.f15876m), this.J).getHeight();
        E(this.V);
        this.f15895v0 = j(this.f15881o0, this.V, this.H, f10, this.J).getHeight();
    }

    public int t() {
        return u(this.f15882p);
    }

    public int w() {
        return this.f15884q;
    }

    public int x() {
        return this.f15881o0;
    }

    public float y() {
        E(this.V);
        return (-this.V.ascent()) + this.V.descent();
    }

    public float z() {
        int i10 = this.f15895v0;
        if (i10 != -1) {
            return i10;
        }
        return A();
    }
}
