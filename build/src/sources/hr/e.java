package hr;

import id.zelory.compressor.constraint.Compression;
import java.io.File;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e {
    public static final void a(Compression destination, File destination2) {
        Intrinsics.checkParameterIsNotNull(destination, "$this$destination");
        Intrinsics.checkParameterIsNotNull(destination2, "destination");
        destination.a(new d(destination2));
    }
}
