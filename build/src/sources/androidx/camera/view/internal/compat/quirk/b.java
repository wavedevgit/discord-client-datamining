package androidx.camera.view.internal.compat.quirk;

import a0.z1;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static List a(z1 z1Var) {
        ArrayList arrayList = new ArrayList();
        if (z1Var.a(SurfaceViewStretchedQuirk.class, SurfaceViewStretchedQuirk.f())) {
            arrayList.add(new SurfaceViewStretchedQuirk());
        }
        if (z1Var.a(SurfaceViewNotCroppedByParentQuirk.class, SurfaceViewNotCroppedByParentQuirk.c())) {
            arrayList.add(new SurfaceViewNotCroppedByParentQuirk());
        }
        return arrayList;
    }
}
