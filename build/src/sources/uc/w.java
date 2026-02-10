package uc;

import com.google.android.exoplayer2.metadata.Metadata;
import java.io.EOFException;
import md.h;
import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final h0 f50709a = new h0(10);

    public Metadata a(l lVar, h.a aVar) {
        Metadata metadata = null;
        int i10 = 0;
        while (true) {
            try {
                lVar.n(this.f50709a.e(), 0, 10);
                this.f50709a.U(0);
                if (this.f50709a.K() != 4801587) {
                    break;
                }
                this.f50709a.V(3);
                int G = this.f50709a.G();
                int i11 = G + 10;
                if (metadata == null) {
                    byte[] bArr = new byte[i11];
                    System.arraycopy(this.f50709a.e(), 0, bArr, 0, 10);
                    lVar.n(bArr, 10, G);
                    metadata = new md.h(aVar).e(bArr, i11);
                } else {
                    lVar.h(G);
                }
                i10 += i11;
            } catch (EOFException unused) {
            }
        }
        lVar.e();
        lVar.h(i10);
        return metadata;
    }
}
