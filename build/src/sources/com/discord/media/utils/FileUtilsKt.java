package com.discord.media.utils;

import iu.x;
import iu.y;
import java.io.File;
import java.io.InputStream;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSink;
import okio.Sink;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\u001a\u0014\u0010\u0000\u001a\u00020\u0001*\u00020\u00022\u0006\u0010\u0003\u001a\u00020\u0001H\u0000¨\u0006\u0004"}, d2 = {"writeTo", "Ljava/io/File;", "Ljava/io/InputStream;", "outputFile", "media_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class FileUtilsKt {
    @NotNull
    public static final File writeTo(@NotNull InputStream inputStream, @NotNull File outputFile) {
        Sink g10;
        Intrinsics.checkNotNullParameter(inputStream, "<this>");
        Intrinsics.checkNotNullParameter(outputFile, "outputFile");
        g10 = y.g(outputFile, false, 1, null);
        BufferedSink c10 = x.c(g10);
        try {
            c10.y0(x.k(inputStream));
            Unit unit = Unit.f33298a;
            tr.c.a(c10, null);
            return outputFile;
        } finally {
        }
    }
}
