package z;

import android.graphics.Bitmap;
import androidx.camera.core.ImageProcessingUtil;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class v implements j0.y {
    @Override // j0.y
    /* renamed from: a */
    public Bitmap apply(j0.z zVar) {
        String str;
        androidx.camera.core.q qVar;
        Bitmap k10;
        boolean z10;
        int width;
        int height;
        androidx.camera.core.q qVar2 = null;
        try {
            try {
                if (zVar.e() == 35) {
                    androidx.camera.core.n nVar = (androidx.camera.core.n) zVar.c();
                    if (zVar.f() % 180 != 0) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    if (z10) {
                        width = nVar.getHeight();
                    } else {
                        width = nVar.getWidth();
                    }
                    if (z10) {
                        height = nVar.getWidth();
                    } else {
                        height = nVar.getHeight();
                    }
                    qVar = new androidx.camera.core.q(androidx.camera.core.o.a(width, height, 1, 2));
                    try {
                        androidx.camera.core.n g10 = ImageProcessingUtil.g(nVar, qVar, ByteBuffer.allocateDirect(nVar.getWidth() * nVar.getHeight() * 4), zVar.f(), false);
                        nVar.close();
                        if (g10 != null) {
                            k10 = i0.b.b(g10);
                            g10.close();
                        } else {
                            throw new x.o0(0, "Can't covert YUV to RGB", null);
                        }
                    } catch (UnsupportedOperationException e10) {
                        e = e10;
                        if (zVar.e() == 35) {
                            str = "YUV";
                        } else {
                            str = "JPEG";
                        }
                        throw new x.o0(0, "Can't convert " + str + " to bitmap", e);
                    } catch (Throwable th2) {
                        th = th2;
                        qVar2 = qVar;
                        if (qVar2 != null) {
                            qVar2.close();
                        }
                        throw th;
                    }
                } else if (zVar.e() == 256) {
                    androidx.camera.core.n nVar2 = (androidx.camera.core.n) zVar.c();
                    Bitmap b10 = i0.b.b(nVar2);
                    nVar2.close();
                    qVar = null;
                    k10 = i0.b.k(b10, zVar.f());
                } else {
                    throw new IllegalArgumentException("Invalid postview image format : " + zVar.e());
                }
                if (qVar != null) {
                    qVar.close();
                }
                return k10;
            } catch (UnsupportedOperationException e11) {
                e = e11;
            }
        } catch (Throwable th3) {
            th = th3;
        }
    }
}
