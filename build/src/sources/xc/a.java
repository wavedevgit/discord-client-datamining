package xc;

import com.google.android.exoplayer2.Format;
import java.util.Collections;
import nc.a;
import ne.h0;
import tc.b0;
import xc.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a extends e {

    /* renamed from: e  reason: collision with root package name */
    private static final int[] f53290e = {5512, 11025, 22050, 44100};

    /* renamed from: b  reason: collision with root package name */
    private boolean f53291b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f53292c;

    /* renamed from: d  reason: collision with root package name */
    private int f53293d;

    public a(b0 b0Var) {
        super(b0Var);
    }

    @Override // xc.e
    protected boolean b(h0 h0Var) {
        String str;
        if (!this.f53291b) {
            int H = h0Var.H();
            int i10 = (H >> 4) & 15;
            this.f53293d = i10;
            if (i10 == 2) {
                this.f53314a.b(new Format.b().g0("audio/mpeg").J(1).h0(f53290e[(H >> 2) & 3]).G());
                this.f53292c = true;
            } else if (i10 != 7 && i10 != 8) {
                if (i10 != 10) {
                    throw new e.a("Audio format not supported: " + this.f53293d);
                }
            } else {
                if (i10 == 7) {
                    str = "audio/g711-alaw";
                } else {
                    str = "audio/g711-mlaw";
                }
                this.f53314a.b(new Format.b().g0(str).J(1).h0(8000).G());
                this.f53292c = true;
            }
            this.f53291b = true;
        } else {
            h0Var.V(1);
        }
        return true;
    }

    @Override // xc.e
    protected boolean c(h0 h0Var, long j10) {
        if (this.f53293d == 2) {
            int a10 = h0Var.a();
            this.f53314a.f(h0Var, a10);
            this.f53314a.d(j10, 1, a10, 0, null);
            return true;
        }
        int H = h0Var.H();
        if (H == 0 && !this.f53292c) {
            int a11 = h0Var.a();
            byte[] bArr = new byte[a11];
            h0Var.l(bArr, 0, a11);
            a.b f10 = nc.a.f(bArr);
            this.f53314a.b(new Format.b().g0("audio/mp4a-latm").K(f10.f40028c).J(f10.f40027b).h0(f10.f40026a).V(Collections.singletonList(bArr)).G());
            this.f53292c = true;
            return false;
        } else if (this.f53293d == 10 && H != 1) {
            return false;
        } else {
            int a12 = h0Var.a();
            this.f53314a.f(h0Var, a12);
            this.f53314a.d(j10, 1, a12, 0, null);
            return true;
        }
    }
}
