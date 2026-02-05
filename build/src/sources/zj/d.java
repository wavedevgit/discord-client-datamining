package zj;

import android.graphics.Bitmap;
import android.media.Image;
import gf.i;
import gf.q;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private static final i f55995a = new i("MLKitImageUtils", "");

    /* renamed from: b  reason: collision with root package name */
    private static final d f55996b = new d();

    private d() {
    }

    public static d b() {
        return f55996b;
    }

    public sf.a a(yj.a aVar) {
        int g10 = aVar.g();
        if (g10 != -1) {
            if (g10 != 17) {
                if (g10 != 35) {
                    if (g10 != 842094169) {
                        int g11 = aVar.g();
                        throw new oj.a("Unsupported image format: " + g11, 3);
                    }
                } else {
                    return sf.b.W0(aVar.i());
                }
            }
            return sf.b.W0((ByteBuffer) q.l(aVar.e()));
        }
        return sf.b.W0((Bitmap) q.l(aVar.d()));
    }

    public int c(yj.a aVar) {
        return aVar.g();
    }

    public int d(yj.a aVar) {
        if (aVar.g() == -1) {
            return ((Bitmap) q.l(aVar.d())).getAllocationByteCount();
        }
        if (aVar.g() != 17 && aVar.g() != 842094169) {
            if (aVar.g() != 35) {
                return 0;
            }
            return (((Image.Plane[]) q.l(aVar.j()))[0].getBuffer().limit() * 3) / 2;
        }
        return ((ByteBuffer) q.l(aVar.e())).limit();
    }
}
