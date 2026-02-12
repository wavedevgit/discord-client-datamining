package yc;

import com.google.android.exoplayer2.Format;
import java.util.Collections;
import oc.a;
import oe.h0;
import uc.b0;
import yc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f55494e = {5512, 11025, 22050, 44100};

    /* renamed from: b  reason: collision with root package name */
    private boolean f55495b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f55496c;

    /* renamed from: d  reason: collision with root package name */
    private int f55497d;

    public a(b0 b0Var) {
        super(b0Var);
    }

    @Override // yc.e
    protected boolean b(h0 h0Var) {
        String str;
        if (!this.f55495b) {
            int H = h0Var.H();
            int i10 = (H >> 4) & 15;
            this.f55497d = i10;
            if (i10 == 2) {
                this.f55518a.c(new Format.b().g0("audio/mpeg").J(1).h0(f55494e[(H >> 2) & 3]).G());
                this.f55496c = true;
            } else if (i10 != 7 && i10 != 8) {
                if (i10 != 10) {
                    throw new e.a("Audio format not supported: " + this.f55497d);
                }
            } else {
                if (i10 == 7) {
                    str = "audio/g711-alaw";
                } else {
                    str = "audio/g711-mlaw";
                }
                this.f55518a.c(new Format.b().g0(str).J(1).h0(8000).G());
                this.f55496c = true;
            }
            this.f55495b = true;
        } else {
            h0Var.V(1);
        }
        return true;
    }

    @Override // yc.e
    protected boolean c(h0 h0Var, long j10) {
        if (this.f55497d == 2) {
            int a10 = h0Var.a();
            this.f55518a.e(h0Var, a10);
            this.f55518a.a(j10, 1, a10, 0, null);
            return true;
        }
        int H = h0Var.H();
        if (H == 0 && !this.f55496c) {
            int a11 = h0Var.a();
            byte[] bArr = new byte[a11];
            h0Var.l(bArr, 0, a11);
            a.b f10 = oc.a.f(bArr);
            this.f55518a.c(new Format.b().g0("audio/mp4a-latm").K(f10.f38771c).J(f10.f38770b).h0(f10.f38769a).V(Collections.singletonList(bArr)).G());
            this.f55496c = true;
            return false;
        } else if (this.f55497d == 10 && H != 1) {
            return false;
        } else {
            int a12 = h0Var.a();
            this.f55518a.e(h0Var, a12);
            this.f55518a.a(j10, 1, a12, 0, null);
            return true;
        }
    }
}
