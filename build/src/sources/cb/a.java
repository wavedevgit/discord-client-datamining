package cb;

import android.graphics.drawable.Drawable;
import kotlin.jvm.internal.Intrinsics;
import ta.e;
import ta.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements sa.a {
    @Override // sa.a
    public boolean a(e image) {
        Intrinsics.checkNotNullParameter(image, "image");
        return image instanceof g;
    }

    @Override // sa.a
    public Drawable b(e image) {
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
        return gVar.A1();
    }
}
