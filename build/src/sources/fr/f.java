package fr;

import android.graphics.Bitmap;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements a {

    /* renamed from: a  reason: collision with root package name */
    private final Bitmap.CompressFormat f23424a;

    public f(Bitmap.CompressFormat format) {
        Intrinsics.checkParameterIsNotNull(format, "format");
        this.f23424a = format;
    }

    @Override // fr.a
    public boolean isSatisfied(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        if (this.f23424a == er.c.c(imageFile)) {
            return true;
        }
        return false;
    }

    @Override // fr.a
    public File satisfy(File imageFile) {
        Intrinsics.checkParameterIsNotNull(imageFile, "imageFile");
        return er.c.k(imageFile, er.c.i(imageFile), this.f23424a, 0, 8, null);
    }
}
