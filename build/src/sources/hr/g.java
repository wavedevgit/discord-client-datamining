package hr;

import android.graphics.Bitmap;
import id.zelory.compressor.constraint.Compression;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class g {
    public static final void a(Compression format, Bitmap.CompressFormat format2) {
        Intrinsics.checkParameterIsNotNull(format, "$this$format");
        Intrinsics.checkParameterIsNotNull(format2, "format");
        format.a(new f(format2));
    }
}
