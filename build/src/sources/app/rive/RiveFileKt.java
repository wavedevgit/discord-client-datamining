package app.rive;

import app.rive.Result;
import app.rive.core.CommandQueue;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import w0.a;
import w0.b0;
import w0.c;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0003\u001a'\u0010\u0006\u001a\b\u0012\u0004\u0012\u00020\u00050\u00042\u0006\u0010\u0001\u001a\u00020\u00002\b\b\u0002\u0010\u0003\u001a\u00020\u0002H\u0007¢\u0006\u0004\b\u0006\u0010\u0007\"\u0014\u0010\t\u001a\u00020\b8\u0002X\u0082T¢\u0006\u0006\n\u0004\b\t\u0010\n¨\u0006\u000b"}, d2 = {"Lapp/rive/RiveFileSource;", "source", "Lapp/rive/core/CommandQueue;", "commandQueue", "Lapp/rive/Result;", "Lapp/rive/RiveFile;", "rememberRiveFile", "(Lapp/rive/RiveFileSource;Lapp/rive/core/CommandQueue;Lw0/a;II)Lapp/rive/Result;", "", "FILE_TAG", "Ljava/lang/String;", "kotlin_release"}, k = 2, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RiveFileKt {
    @NotNull
    private static final String FILE_TAG = "Rive/File";

    @ExperimentalRiveComposeAPI
    @NotNull
    public static final Result<RiveFile> rememberRiveFile(@NotNull RiveFileSource source, CommandQueue commandQueue, a aVar, int i10, int i11) {
        Intrinsics.checkNotNullParameter(source, "source");
        aVar.i(-1107398644);
        if ((i11 & 2) != 0) {
            commandQueue = RememberCommandQueueKt.rememberCommandQueue(aVar, 0);
        }
        if (c.c()) {
            c.e(-1107398644, i10, -1, "app.rive.rememberRiveFile (RiveFile.kt:173)");
        }
        Result<RiveFile> result = (Result) b0.e(Result.Loading.INSTANCE, source, new RiveFileKt$rememberRiveFile$1(source, commandQueue, null), aVar, ((i10 << 3) & 112) | 518).getValue();
        if (c.c()) {
            c.d();
        }
        aVar.g();
        return result;
    }
}
