package lu;

import kotlin.jvm.internal.Intrinsics;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.Sink;
import okio.Source;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class z {
    public static final Sink a() {
        return new d();
    }

    public static final BufferedSink b(Sink sink) {
        Intrinsics.checkNotNullParameter(sink, "<this>");
        return new e0(sink);
    }

    public static final BufferedSource c(Source source) {
        Intrinsics.checkNotNullParameter(source, "<this>");
        return new f0(source);
    }
}
