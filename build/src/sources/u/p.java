package u;

import a0.i2;
import android.hardware.camera2.CaptureRequest;
import android.util.Rational;
import android.util.Size;
import androidx.camera.camera2.internal.compat.quirk.PreviewPixelHDRnetQuirk;
import p.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p {

    /* renamed from: a  reason: collision with root package name */
    public static final Rational f51179a = new Rational(16, 9);

    private static boolean a(Size size, Rational rational) {
        return rational.equals(new Rational(size.getWidth(), size.getHeight()));
    }

    public static void b(Size size, i2.b bVar) {
        if (((PreviewPixelHDRnetQuirk) androidx.camera.camera2.internal.compat.quirk.b.b(PreviewPixelHDRnetQuirk.class)) == null || a(size, f51179a)) {
            return;
        }
        a.C0575a c0575a = new a.C0575a();
        c0575a.f(CaptureRequest.TONEMAP_MODE, 2);
        bVar.g(c0575a.c());
    }
}
