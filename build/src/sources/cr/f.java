package cr;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements a {

    /* renamed from: a  reason: collision with root package name */
    private final Bitmap.CompressFormat f19813a;

    public f(Bitmap.CompressFormat format) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f19813a = format;
    }

    @Override // cr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        if (this.f19813a == br.c.c(imageFile)) {
            return true;
        }
        return false;
    }

    @Override // cr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return br.c.k(imageFile, br.c.i(imageFile), this.f19813a, 0, 8, null);
    }
}
