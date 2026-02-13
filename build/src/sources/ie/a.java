package ie;

import ae.b;
import ae.f;
import ae.g;
import ae.i;
import android.text.SpannableStringBuilder;
import android.text.style.ForegroundColorSpan;
import android.text.style.StyleSpan;
import android.text.style.TypefaceSpan;
import android.text.style.UnderlineSpan;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.nio.charset.Charset;
import java.util.List;
import oe.h0;
import oe.w0;
import oe.y;
import pi.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends f {

    /* renamed from: o  reason: collision with root package name */
    private final h0 f28492o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f28493p;

    /* renamed from: q  reason: collision with root package name */
    private final int f28494q;

    /* renamed from: r  reason: collision with root package name */
    private final int f28495r;

    /* renamed from: s  reason: collision with root package name */
    private final String f28496s;

    /* renamed from: t  reason: collision with root package name */
    private final float f28497t;

    /* renamed from: u  reason: collision with root package name */
    private final int f28498u;

    public a(List list) {
        super("Tx3gDecoder");
        this.f28492o = new h0();
        if (list.size() == 1 && (((byte[]) list.get(0)).length == 48 || ((byte[]) list.get(0)).length == 53)) {
            byte[] bArr = (byte[]) list.get(0);
            this.f28494q = bArr[24];
            this.f28495r = ((bArr[26] & 255) << 24) | ((bArr[27] & 255) << 16) | ((bArr[28] & 255) << 8) | (bArr[29] & 255);
            this.f28496s = "Serif".equals(w0.F(bArr, 43, bArr.length - 43)) ? "serif" : "sans-serif";
            int i10 = bArr[25] * 20;
            this.f28498u = i10;
            boolean z10 = (bArr[0] & 32) != 0;
            this.f28493p = z10;
            if (z10) {
                this.f28497t = w0.p(((bArr[11] & 255) | ((bArr[10] & 255) << 8)) / i10, 0.0f, 0.95f);
                return;
            } else {
                this.f28497t = 0.85f;
                return;
            }
        }
        this.f28494q = 0;
        this.f28495r = -1;
        this.f28496s = "sans-serif";
        this.f28493p = false;
        this.f28497t = 0.85f;
        this.f28498u = -1;
    }

    private void B(h0 h0Var, SpannableStringBuilder spannableStringBuilder) {
        boolean z10;
        if (h0Var.a() >= 12) {
            z10 = true;
        } else {
            z10 = false;
        }
        C(z10);
        int N = h0Var.N();
        int N2 = h0Var.N();
        h0Var.V(2);
        int H = h0Var.H();
        h0Var.V(1);
        int q10 = h0Var.q();
        if (N2 > spannableStringBuilder.length()) {
            y.i("Tx3gDecoder", "Truncating styl end (" + N2 + ") to cueText.length() (" + spannableStringBuilder.length() + ").");
            N2 = spannableStringBuilder.length();
        }
        int i10 = N2;
        if (N >= i10) {
            y.i("Tx3gDecoder", "Ignoring styl with start (" + N + ") >= end (" + i10 + ").");
            return;
        }
        E(spannableStringBuilder, H, this.f28494q, N, i10, 0);
        D(spannableStringBuilder, q10, this.f28495r, N, i10, 0);
    }

    private static void C(boolean z10) {
        if (z10) {
            return;
        }
        throw new i("Unexpected subtitle format.");
    }

    private static void D(SpannableStringBuilder spannableStringBuilder, int i10, int i11, int i12, int i13, int i14) {
        if (i10 != i11) {
            spannableStringBuilder.setSpan(new ForegroundColorSpan((i10 >>> 8) | ((i10 & SetSpanOperation.SPAN_MAX_PRIORITY) << 24)), i12, i13, i14 | 33);
        }
    }

    private static void E(SpannableStringBuilder spannableStringBuilder, int i10, int i11, int i12, int i13, int i14) {
        boolean z10;
        boolean z11;
        if (i10 != i11) {
            int i15 = i14 | 33;
            boolean z12 = true;
            if ((i10 & 1) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if ((i10 & 2) != 0) {
                z11 = true;
            } else {
                z11 = false;
            }
            if (z10) {
                if (z11) {
                    spannableStringBuilder.setSpan(new StyleSpan(3), i12, i13, i15);
                } else {
                    spannableStringBuilder.setSpan(new StyleSpan(1), i12, i13, i15);
                }
            } else if (z11) {
                spannableStringBuilder.setSpan(new StyleSpan(2), i12, i13, i15);
            }
            if ((i10 & 4) == 0) {
                z12 = false;
            }
            if (z12) {
                spannableStringBuilder.setSpan(new UnderlineSpan(), i12, i13, i15);
            }
            if (!z12 && !z10 && !z11) {
                spannableStringBuilder.setSpan(new StyleSpan(0), i12, i13, i15);
            }
        }
    }

    private static void F(SpannableStringBuilder spannableStringBuilder, String str, int i10, int i11) {
        if (str != "sans-serif") {
            spannableStringBuilder.setSpan(new TypefaceSpan(str), i10, i11, 16711713);
        }
    }

    private static String G(h0 h0Var) {
        boolean z10;
        if (h0Var.a() >= 2) {
            z10 = true;
        } else {
            z10 = false;
        }
        C(z10);
        int N = h0Var.N();
        if (N == 0) {
            return "";
        }
        int f10 = h0Var.f();
        Charset P = h0Var.P();
        int f11 = N - (h0Var.f() - f10);
        if (P == null) {
            P = d.f43306c;
        }
        return h0Var.F(f11, P);
    }

    @Override // ae.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        this.f28492o.S(bArr, i10);
        String G = G(this.f28492o);
        if (G.isEmpty()) {
            return b.f28499e;
        }
        SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder(G);
        E(spannableStringBuilder, this.f28494q, 0, 0, spannableStringBuilder.length(), 16711680);
        D(spannableStringBuilder, this.f28495r, -1, 0, spannableStringBuilder.length(), 16711680);
        F(spannableStringBuilder, this.f28496s, 0, spannableStringBuilder.length());
        float f10 = this.f28497t;
        while (this.f28492o.a() >= 8) {
            int f11 = this.f28492o.f();
            int q10 = this.f28492o.q();
            int q11 = this.f28492o.q();
            boolean z11 = true;
            if (q11 == 1937013100) {
                if (this.f28492o.a() < 2) {
                    z11 = false;
                }
                C(z11);
                int N = this.f28492o.N();
                for (int i11 = 0; i11 < N; i11++) {
                    B(this.f28492o, spannableStringBuilder);
                }
            } else if (q11 == 1952608120 && this.f28493p) {
                if (this.f28492o.a() < 2) {
                    z11 = false;
                }
                C(z11);
                f10 = w0.p(this.f28492o.N() / this.f28498u, 0.0f, 0.95f);
            }
            this.f28492o.U(f11 + q10);
        }
        return new b(new b.C0009b().o(spannableStringBuilder).h(f10, 0).i(0).a());
    }
}
