package rr;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements a {

    /* renamed from: a  reason: collision with root package name */
    private final Bitmap.CompressFormat f48312a;

    public f(Bitmap.CompressFormat format) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f48312a = format;
    }

    @Override // rr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        if (this.f48312a == qr.c.c(imageFile)) {
            return true;
        }
        return false;
    }

    @Override // rr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return qr.c.k(imageFile, qr.c.i(imageFile), this.f48312a, 0, 8, null);
    }
}
