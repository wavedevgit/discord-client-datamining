package he;

import android.text.SpannableStringBuilder;
import android.text.style.ForegroundColorSpan;
import android.text.style.StyleSpan;
import android.text.style.TypefaceSpan;
import android.text.style.UnderlineSpan;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import ii.d;
import java.nio.charset.Charset;
import java.util.List;
import ne.h0;
import ne.w0;
import ne.y;
import zd.b;
import zd.f;
import zd.g;
import zd.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends f {

    /* renamed from: o  reason: collision with root package name */
    private final h0 f27498o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f27499p;

    /* renamed from: q  reason: collision with root package name */
    private final int f27500q;

    /* renamed from: r  reason: collision with root package name */
    private final int f27501r;

    /* renamed from: s  reason: collision with root package name */
    private final String f27502s;

    /* renamed from: t  reason: collision with root package name */
    private final float f27503t;

    /* renamed from: u  reason: collision with root package name */
    private final int f27504u;

    public a(List list) {
        super("Tx3gDecoder");
        this.f27498o = new h0();
        if (list.size() == 1 && (((byte[]) list.get(0)).length == 48 || ((byte[]) list.get(0)).length == 53)) {
            byte[] bArr = (byte[]) list.get(0);
            this.f27500q = bArr[24];
            this.f27501r = ((bArr[26] & 255) << 24) | ((bArr[27] & 255) << 16) | ((bArr[28] & 255) << 8) | (bArr[29] & 255);
            this.f27502s = "Serif".equals(w0.F(bArr, 43, bArr.length - 43)) ? "serif" : "sans-serif";
            int i10 = bArr[25] * 20;
            this.f27504u = i10;
            boolean z10 = (bArr[0] & 32) != 0;
            this.f27499p = z10;
            if (z10) {
                this.f27503t = w0.p(((bArr[11] & 255) | ((bArr[10] & 255) << 8)) / i10, 0.0f, 0.95f);
                return;
            } else {
                this.f27503t = 0.85f;
                return;
            }
        }
        this.f27500q = 0;
        this.f27501r = -1;
        this.f27502s = "sans-serif";
        this.f27499p = false;
        this.f27503t = 0.85f;
        this.f27504u = -1;
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
        E(spannableStringBuilder, H, this.f27500q, N, i10, 0);
        D(spannableStringBuilder, q10, this.f27501r, N, i10, 0);
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
            P = d.f28521c;
        }
        return h0Var.F(f11, P);
    }

    @Override // zd.f
    protected g z(byte[] bArr, int i10, boolean z10) {
        this.f27498o.S(bArr, i10);
        String G = G(this.f27498o);
        if (G.isEmpty()) {
            return b.f27505e;
        }
        SpannableStringBuilder spannableStringBuilder = new SpannableStringBuilder(G);
        E(spannableStringBuilder, this.f27500q, 0, 0, spannableStringBuilder.length(), 16711680);
        D(spannableStringBuilder, this.f27501r, -1, 0, spannableStringBuilder.length(), 16711680);
        F(spannableStringBuilder, this.f27502s, 0, spannableStringBuilder.length());
        float f10 = this.f27503t;
        while (this.f27498o.a() >= 8) {
            int f11 = this.f27498o.f();
            int q10 = this.f27498o.q();
            int q11 = this.f27498o.q();
            boolean z11 = true;
            if (q11 == 1937013100) {
                if (this.f27498o.a() < 2) {
                    z11 = false;
                }
                C(z11);
                int N = this.f27498o.N();
                for (int i11 = 0; i11 < N; i11++) {
                    B(this.f27498o, spannableStringBuilder);
                }
            } else if (q11 == 1952608120 && this.f27499p) {
                if (this.f27498o.a() < 2) {
                    z11 = false;
                }
                C(z11);
                f10 = w0.p(this.f27498o.N() / this.f27504u, 0.0f, 0.95f);
            }
            this.f27498o.U(f11 + q10);
        }
        return new b(new b.C0779b().o(spannableStringBuilder).h(f10, 0).i(0).a());
    }
}
