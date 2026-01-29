package app.rive;

import app.rive.core.ArtboardHandle;
import app.rive.core.FileHandle;
import app.rive.core.StateMachineHandle;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Lambda;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\b\n\u0000\n\u0002\u0010\u000e\n\u0000\u0010\u0000\u001a\u00020\u0001H\n¢\u0006\u0002\b\u0002"}, d2 = {"<anonymous>", "", "invoke"}, k = 3, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveUIKt$RiveUI$stateMachineHandle$1$1 extends Lambda implements Function0<String> {
    final /* synthetic */ long $artboardHandle;
    final /* synthetic */ RiveFile $file;
    final /* synthetic */ long $handle;
    final /* synthetic */ String $stateMachineName;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    RiveUIKt$RiveUI$stateMachineHandle$1$1(long j10, String str, long j11, RiveFile riveFile) {
        super(0);
        this.$handle = j10;
        this.$stateMachineName = str;
        this.$artboardHandle = j11;
        this.$file = riveFile;
    }

    @Override // kotlin.jvm.functions.Function0
    @NotNull
    public final String invoke() {
        String m195toStringimpl = StateMachineHandle.m195toStringimpl(this.$handle);
        String str = this.$stateMachineName;
        String m97toStringimpl = ArtboardHandle.m97toStringimpl(this.$artboardHandle);
        String m170toStringimpl = FileHandle.m170toStringimpl(this.$file.m31getFileHandleENT3xMk$kotlin_release());
        return "Created " + m195toStringimpl + " with name " + str + " (" + m97toStringimpl + "; " + m170toStringimpl + ")";
    }
}
