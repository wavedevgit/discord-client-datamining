package dd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import dd.i;
import java.util.Arrays;
import java.util.List;
import oc.w;
import oe.h0;
import qi.s;
import uc.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends i {

    /* renamed from: o  reason: collision with root package name */
    private static final byte[] f21602o = {79, 112, 117, 115, 72, 101, 97, 100};

    /* renamed from: p  reason: collision with root package name */
    private static final byte[] f21603p = {79, 112, 117, 115, 84, 97, 103, 115};

    /* renamed from: n  reason: collision with root package name */
    private boolean f21604n;

    private static boolean n(h0 h0Var, byte[] bArr) {
        if (h0Var.a() < bArr.length) {
            return false;
        }
        int f10 = h0Var.f();
        byte[] bArr2 = new byte[bArr.length];
        h0Var.l(bArr2, 0, bArr.length);
        h0Var.U(f10);
        return Arrays.equals(bArr2, bArr);
    }

    public static boolean o(h0 h0Var) {
        return n(h0Var, f21602o);
    }

    @Override // dd.i
    protected long f(h0 h0Var) {
        return c(w.e(h0Var.e()));
    }

    @Override // dd.i
    protected boolean h(h0 h0Var, long j10, i.b bVar) {
        if (n(h0Var, f21602o)) {
            byte[] copyOf = Arrays.copyOf(h0Var.e(), h0Var.g());
            int c10 = w.c(copyOf);
            List a10 = w.a(copyOf);
            if (bVar.f21618a != null) {
                return true;
            }
            bVar.f21618a = new Format.b().g0("audio/opus").J(c10).h0(48000).V(a10).G();
            return true;
        }
        byte[] bArr = f21603p;
        if (n(h0Var, bArr)) {
            oe.a.i(bVar.f21618a);
            if (this.f21604n) {
                return true;
            }
            this.f21604n = true;
            h0Var.V(bArr.length);
            Metadata c11 = e0.c(s.p(e0.i(h0Var, false, false).f50649b));
            if (c11 == null) {
                return true;
            }
            bVar.f21618a = bVar.f21618a.b().Z(c11.b(bVar.f21618a.f12302u)).G();
            return true;
        }
        oe.a.i(bVar.f21618a);
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f21604n = false;
        }
    }
}
