package androidx.camera.core.internal.compat.quirk;

import a0.z1;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static List a(z1 z1Var) {
        ArrayList arrayList = new ArrayList();
        if (z1Var.a(ImageCaptureRotationOptionQuirk.class, ImageCaptureRotationOptionQuirk.h())) {
            arrayList.add(new ImageCaptureRotationOptionQuirk());
        }
        if (z1Var.a(SurfaceOrderQuirk.class, SurfaceOrderQuirk.c())) {
            arrayList.add(new SurfaceOrderQuirk());
        }
        if (z1Var.a(CaptureFailedRetryQuirk.class, CaptureFailedRetryQuirk.d())) {
            arrayList.add(new CaptureFailedRetryQuirk());
        }
        if (z1Var.a(LowMemoryQuirk.class, LowMemoryQuirk.c())) {
            arrayList.add(new LowMemoryQuirk());
        }
        if (z1Var.a(LargeJpegImageQuirk.class, LargeJpegImageQuirk.f())) {
            arrayList.add(new LargeJpegImageQuirk());
        }
        if (z1Var.a(IncorrectJpegMetadataQuirk.class, IncorrectJpegMetadataQuirk.g())) {
            arrayList.add(new IncorrectJpegMetadataQuirk());
        }
        return arrayList;
    }
}
