package tc;

import com.google.android.exoplayer2.metadata.Metadata;
import java.io.EOFException;
import ld.h;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final h0 f49996a = new h0(10);

    public Metadata a(l lVar, h.a aVar) {
        Metadata metadata = null;
        int i10 = 0;
        while (true) {
            try {
                lVar.n(this.f49996a.e(), 0, 10);
                this.f49996a.U(0);
                if (this.f49996a.K() != 4801587) {
                    break;
                }
                this.f49996a.V(3);
                int G = this.f49996a.G();
                int i11 = G + 10;
                if (metadata == null) {
                    byte[] bArr = new byte[i11];
                    System.arraycopy(this.f49996a.e(), 0, bArr, 0, 10);
                    lVar.n(bArr, 10, G);
                    metadata = new ld.h(aVar).e(bArr, i11);
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
