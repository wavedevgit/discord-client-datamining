package h0;

import a0.d2;
import androidx.camera.core.internal.compat.quirk.IncorrectJpegMetadataQuirk;
import androidx.camera.core.n;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final IncorrectJpegMetadataQuirk f25526a;

    public d(d2 d2Var) {
        this.f25526a = (IncorrectJpegMetadataQuirk) d2Var.b(IncorrectJpegMetadataQuirk.class);
    }

    public byte[] a(n nVar) {
        IncorrectJpegMetadataQuirk incorrectJpegMetadataQuirk = this.f25526a;
        if (incorrectJpegMetadataQuirk == null) {
            ByteBuffer f10 = nVar.d1()[0].f();
            byte[] bArr = new byte[f10.capacity()];
            f10.rewind();
            f10.get(bArr);
            return bArr;
        }
        return incorrectJpegMetadataQuirk.f(nVar);
    }
}
