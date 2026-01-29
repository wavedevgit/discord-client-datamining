package z;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.BitmapRegionDecoder;
import android.graphics.Rect;
import java.io.IOException;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class z implements j0.y {
    private Bitmap b(byte[] bArr, Rect rect) {
        try {
            return BitmapRegionDecoder.newInstance(bArr, 0, bArr.length, false).decodeRegion(rect, new BitmapFactory.Options());
        } catch (IOException e10) {
            throw new x.o0(1, "Failed to decode JPEG.", e10);
        }
    }

    @Override // j0.y
    /* renamed from: a */
    public j0.z apply(j0.z zVar) {
        Rect b10 = zVar.b();
        Bitmap b11 = b((byte[]) zVar.c(), b10);
        b0.f d10 = zVar.d();
        Objects.requireNonNull(d10);
        return j0.z.j(b11, d10, new Rect(0, 0, b11.getWidth(), b11.getHeight()), zVar.f(), b0.q.t(zVar.g(), b10), zVar.a());
    }
}
