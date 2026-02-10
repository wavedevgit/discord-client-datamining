package ir;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements a {

    /* renamed from: a  reason: collision with root package name */
    private final Bitmap.CompressFormat f29637a;

    public f(Bitmap.CompressFormat format) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f29637a = format;
    }

    @Override // ir.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        if (this.f29637a == hr.c.c(imageFile)) {
            return true;
        }
        return false;
    }

    @Override // ir.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return hr.c.k(imageFile, hr.c.i(imageFile), this.f29637a, 0, 8, null);
    }
}
