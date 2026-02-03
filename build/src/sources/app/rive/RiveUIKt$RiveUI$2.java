package app.rive;

import app.rive.core.ArtboardHandle;
import app.rive.core.CommandQueue;
import app.rive.core.FileHandle;
import app.rive.core.StateMachineHandle;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import w0.g;
import w0.h;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0010\u0004\u001a\u00020\u0001*\u00020\u0000H\n¢\u0006\u0004\b\u0002\u0010\u0003"}, d2 = {"Lw0/h;", "Lw0/g;", "invoke", "(Lw0/h;)Lw0/g;", "<anonymous>"}, k = 3, mv = {1, 9, 0})
@SourceDebugExtension({"SMAP\nRiveUI.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$2\n+ 2 Effects.kt\nandroidx/compose/runtime/DisposableEffectScope\n*L\n1#1,310:1\n66#2,5:311\n*S KotlinDebug\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$2\n*L\n166#1:311,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveUIKt$RiveUI$2 extends Lambda implements Function1<h, g> {
    final /* synthetic */ long $artboardHandle;
    final /* synthetic */ CommandQueue $commandQueue;
    final /* synthetic */ RiveFile $file;
    final /* synthetic */ long $stateMachineHandle;
    final /* synthetic */ String $stateMachineName;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    RiveUIKt$RiveUI$2(CommandQueue commandQueue, long j10, String str, long j11, RiveFile riveFile) {
        super(1);
        this.$commandQueue = commandQueue;
        this.$stateMachineHandle = j10;
        this.$stateMachineName = str;
        this.$artboardHandle = j11;
        this.$file = riveFile;
    }

    @Override // kotlin.jvm.functions.Function1
    @NotNull
    public final g invoke(@NotNull h DisposableEffect) {
        Intrinsics.checkNotNullParameter(DisposableEffect, "$this$DisposableEffect");
        final CommandQueue commandQueue = this.$commandQueue;
        final long j10 = this.$stateMachineHandle;
        final String str = this.$stateMachineName;
        final long j11 = this.$artboardHandle;
        final RiveFile riveFile = this.$file;
        return new g() { // from class: app.rive.RiveUIKt$RiveUI$2$invoke$$inlined$onDispose$1
            public void dispose() {
                final long j12 = j10;
                final String str2 = str;
                final long j13 = j11;
                final RiveFile riveFile2 = riveFile;
                RiveLog.INSTANCE.getLogger().d("RiveUI/SM", new Function0<String>() { // from class: app.rive.RiveUIKt$RiveUI$2$1$1
                    /* JADX INFO: Access modifiers changed from: package-private */
                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    {
                        super(0);
                    }

                    @Override // kotlin.jvm.functions.Function0
                    @NotNull
                    public final String invoke() {
                        String m195toStringimpl = StateMachineHandle.m195toStringimpl(j12);
                        String str3 = str2;
                        String m97toStringimpl = ArtboardHandle.m97toStringimpl(j13);
                        String m170toStringimpl = FileHandle.m170toStringimpl(riveFile2.m31getFileHandleENT3xMk$kotlin_release());
                        return "Deleting " + m195toStringimpl + " with name " + str3 + " (" + m97toStringimpl + "; " + m170toStringimpl + ")";
                    }
                });
                CommandQueue.this.m123deleteStateMachineAkTCgDQ(j10);
            }
        };
    }
}
