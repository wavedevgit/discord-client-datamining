package bb;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
import sa.e;
import sa.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements ra.a {
    @Override // ra.a
    public Drawable a(e image) {
        g gVar;
        Intrinsics.checkNotNullParameter(image, "image");
        if (image instanceof g) {
            gVar = (g) image;
        } else {
            gVar = null;
        }
        if (gVar == null) {
            return null;
        }
        return gVar.F1();
    }

    @Override // ra.a
    public boolean b(e image) {
        Intrinsics.checkNotNullParameter(image, "image");
        return image instanceof g;
    }
}
