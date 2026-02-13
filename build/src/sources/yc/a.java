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
    private static final int[] f56062e = {5512, 11025, 22050, 44100};

    /* renamed from: b  reason: collision with root package name */
    private boolean f56063b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f56064c;

    /* renamed from: d  reason: collision with root package name */
    private int f56065d;

    public a(b0 b0Var) {
        super(b0Var);
    }

    @Override // yc.e
    protected boolean b(h0 h0Var) {
        String str;
        if (!this.f56063b) {
            int H = h0Var.H();
            int i10 = (H >> 4) & 15;
            this.f56065d = i10;
            if (i10 == 2) {
                this.f56086a.c(new Format.b().g0("audio/mpeg").J(1).h0(f56062e[(H >> 2) & 3]).G());
                this.f56064c = true;
            } else if (i10 != 7 && i10 != 8) {
                if (i10 != 10) {
                    throw new e.a("Audio format not supported: " + this.f56065d);
                }
            } else {
                if (i10 == 7) {
                    str = "audio/g711-alaw";
                } else {
                    str = "audio/g711-mlaw";
                }
                this.f56086a.c(new Format.b().g0(str).J(1).h0(8000).G());
                this.f56064c = true;
            }
            this.f56063b = true;
        } else {
            h0Var.V(1);
        }
        return true;
    }

    @Override // yc.e
    protected boolean c(h0 h0Var, long j10) {
        if (this.f56065d == 2) {
            int a10 = h0Var.a();
            this.f56086a.e(h0Var, a10);
            this.f56086a.a(j10, 1, a10, 0, null);
            return true;
        }
        int H = h0Var.H();
        if (H == 0 && !this.f56064c) {
            int a11 = h0Var.a();
            byte[] bArr = new byte[a11];
            h0Var.l(bArr, 0, a11);
            a.b f10 = oc.a.f(bArr);
            this.f56086a.c(new Format.b().g0("audio/mp4a-latm").K(f10.f39339c).J(f10.f39338b).h0(f10.f39337a).V(Collections.singletonList(bArr)).G());
            this.f56064c = true;
            return false;
        } else if (this.f56065d == 10 && H != 1) {
            return false;
        } else {
            int a12 = h0Var.a();
            this.f56086a.e(h0Var, a12);
            this.f56086a.a(j10, 1, a12, 0, null);
            return true;
        }
    }
}
