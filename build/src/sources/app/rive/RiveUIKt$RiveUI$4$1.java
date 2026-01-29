package app.rive;

import app.rive.core.RiveSurface;
import kotlin.Metadata;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import w0.g;
import w0.h;
import w0.q;
@Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0010\u0004\u001a\u00020\u0001*\u00020\u0000H\n¢\u0006\u0004\b\u0002\u0010\u0003"}, d2 = {"Lw0/h;", "Lw0/g;", "invoke", "(Lw0/h;)Lw0/g;", "<anonymous>"}, k = 3, mv = {1, 9, 0})
@SourceDebugExtension({"SMAP\nRiveUI.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$4$1\n+ 2 Effects.kt\nandroidx/compose/runtime/DisposableEffectScope\n*L\n1#1,310:1\n66#2,5:311\n66#2,5:316\n*S KotlinDebug\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$4$1\n*L\n197#1:311,5\n198#1:316,5\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveUIKt$RiveUI$4$1 extends Lambda implements Function1<h, g> {
    final /* synthetic */ q $surface$delegate;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    RiveUIKt$RiveUI$4$1(q qVar) {
        super(1);
        this.$surface$delegate = qVar;
    }

    @Override // kotlin.jvm.functions.Function1
    @NotNull
    public final g invoke(@NotNull h DisposableEffect) {
        final RiveSurface RiveUI$lambda$6;
        Intrinsics.checkNotNullParameter(DisposableEffect, "$this$DisposableEffect");
        RiveUI$lambda$6 = RiveUIKt.RiveUI$lambda$6(this.$surface$delegate);
        if (RiveUI$lambda$6 == null) {
            return new g() { // from class: app.rive.RiveUIKt$RiveUI$4$1$invoke$$inlined$onDispose$1
                public void dispose() {
                }
            };
        }
        return new g() { // from class: app.rive.RiveUIKt$RiveUI$4$1$invoke$$inlined$onDispose$2
            public void dispose() {
                RiveSurface.this.dispose();
            }
        };
    }
}
