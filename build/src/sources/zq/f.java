package zq;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements a {

    /* renamed from: a  reason: collision with root package name */
    private final Bitmap.CompressFormat f56078a;

    public f(Bitmap.CompressFormat format) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f56078a = format;
    }

    @Override // zq.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        if (this.f56078a == yq.c.c(imageFile)) {
            return true;
        }
        return false;
    }

    @Override // zq.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return yq.c.k(imageFile, yq.c.i(imageFile), this.f56078a, 0, 8, null);
    }
}
