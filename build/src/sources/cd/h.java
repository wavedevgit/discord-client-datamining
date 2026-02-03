package cd;

import cd.i;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import java.util.List;
import ji.s;
import nc.w;
import ne.h0;
import tc.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h extends i {

    /* renamed from: o  reason: collision with root package name */
    private static final byte[] f7113o = {79, 112, 117, 115, 72, 101, 97, 100};

    /* renamed from: p  reason: collision with root package name */
    private static final byte[] f7114p = {79, 112, 117, 115, 84, 97, 103, 115};

    /* renamed from: n  reason: collision with root package name */
    private boolean f7115n;

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
        return n(h0Var, f7113o);
    }

    @Override // cd.i
    protected long f(h0 h0Var) {
        return c(w.e(h0Var.e()));
    }

    @Override // cd.i
    protected boolean h(h0 h0Var, long j10, i.b bVar) {
        if (n(h0Var, f7113o)) {
            byte[] copyOf = Arrays.copyOf(h0Var.e(), h0Var.g());
            int c10 = w.c(copyOf);
            List a10 = w.a(copyOf);
            if (bVar.f7129a != null) {
                return true;
            }
            bVar.f7129a = new Format.b().g0("audio/opus").J(c10).h0(48000).V(a10).G();
            return true;
        }
        byte[] bArr = f7114p;
        if (n(h0Var, bArr)) {
            ne.a.i(bVar.f7129a);
            if (this.f7115n) {
                return true;
            }
            this.f7115n = true;
            h0Var.V(bArr.length);
            Metadata c11 = e0.c(s.n(e0.i(h0Var, false, false).f49936b));
            if (c11 == null) {
                return true;
            }
            bVar.f7129a = bVar.f7129a.b().Z(c11.b(bVar.f7129a.f11301u)).G();
            return true;
        }
        ne.a.i(bVar.f7129a);
        return false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // cd.i
    public void l(boolean z10) {
        super.l(z10);
        if (z10) {
            this.f7115n = false;
        }
    }
}
