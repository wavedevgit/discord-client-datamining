package h0;

import a0.d2;
import androidx.camera.core.internal.compat.quirk.IncorrectJpegMetadataQuirk;
import androidx.camera.core.n;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final IncorrectJpegMetadataQuirk f26685a;

    public d(d2 d2Var) {
        this.f26685a = (IncorrectJpegMetadataQuirk) d2Var.b(IncorrectJpegMetadataQuirk.class);
    }

    public byte[] a(n nVar) {
        IncorrectJpegMetadataQuirk incorrectJpegMetadataQuirk = this.f26685a;
        if (incorrectJpegMetadataQuirk == null) {
            ByteBuffer e10 = nVar.d1()[0].e();
            byte[] bArr = new byte[e10.capacity()];
            e10.rewind();
            e10.get(bArr);
            return bArr;
        }
        return incorrectJpegMetadataQuirk.f(nVar);
    }
}
