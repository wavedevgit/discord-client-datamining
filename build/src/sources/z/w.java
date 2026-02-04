package z;

import a0.d2;
import android.graphics.Rect;
import android.util.Size;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import i0.b;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class w implements j0.y {

    /* renamed from: a  reason: collision with root package name */
    private final h0.d f55474a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {
        /* JADX INFO: Access modifiers changed from: package-private */
        public static a c(j0.z zVar, int i10) {
            return new c(zVar, i10);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int a();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract j0.z b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(d2 d2Var) {
        this.f55474a = new h0.d(d2Var);
    }

    private static b0.f b(byte[] bArr) {
        try {
            return b0.f.k(new ByteArrayInputStream(bArr));
        } catch (IOException e10) {
            throw new x.o0(0, "Failed to extract Exif from YUV-generated JPEG", e10);
        }
    }

    private j0.z c(a aVar, int i10) {
        j0.z b10 = aVar.b();
        byte[] a10 = this.f55474a.a((androidx.camera.core.n) b10.c());
        b0.f d10 = b10.d();
        Objects.requireNonNull(d10);
        return j0.z.m(a10, d10, i10, b10.h(), b10.b(), b10.f(), b10.g(), b10.a());
    }

    private j0.z d(a aVar) {
        j0.z b10 = aVar.b();
        androidx.camera.core.n nVar = (androidx.camera.core.n) b10.c();
        Rect b11 = b10.b();
        try {
            byte[] l10 = i0.b.l(nVar, b11, aVar.a(), b10.f());
            return j0.z.m(l10, b(l10), IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER, new Size(b11.width(), b11.height()), new Rect(0, 0, b11.width(), b11.height()), b10.f(), b0.q.t(b10.g(), b11), b10.a());
        } catch (b.a e10) {
            throw new x.o0(1, "Failed to encode the image to JPEG.", e10);
        }
    }

    @Override // j0.y
    /* renamed from: a */
    public j0.z apply(a aVar) {
        j0.z d10;
        try {
            int e10 = aVar.b().e();
            if (e10 != 35) {
                if (e10 != 256 && e10 != 4101) {
                    throw new IllegalArgumentException("Unexpected format: " + e10);
                }
                d10 = c(aVar, e10);
            } else {
                d10 = d(aVar);
            }
            ((androidx.camera.core.n) aVar.b().c()).close();
            return d10;
        } catch (Throwable th2) {
            ((androidx.camera.core.n) aVar.b().c()).close();
            throw th2;
        }
    }
}
