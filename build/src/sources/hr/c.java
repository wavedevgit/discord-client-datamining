package hr;

import android.graphics.Bitmap;
import id.zelory.compressor.constraint.Compression;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c {
    public static final void a(Compression compression, int i10, int i11, Bitmap.CompressFormat format, int i12) {
        Intrinsics.checkParameterIsNotNull(compression, "$this$default");
        Intrinsics.checkParameterIsNotNull(format, "format");
        compression.a(new b(i10, i11, format, i12));
    }

    public static /* synthetic */ void b(Compression compression, int i10, int i11, Bitmap.CompressFormat compressFormat, int i12, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            i10 = 612;
        }
        if ((i13 & 2) != 0) {
            i11 = 816;
        }
        if ((i13 & 4) != 0) {
            compressFormat = Bitmap.CompressFormat.JPEG;
        }
        if ((i13 & 8) != 0) {
            i12 = 80;
        }
        a(compression, i10, i11, compressFormat, i12);
    }
}
