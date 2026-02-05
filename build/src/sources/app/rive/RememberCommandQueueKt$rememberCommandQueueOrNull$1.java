package app.rive;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import app.rive.core.CommandQueue;
import app.rive.core.FrameTicker;
import app.rive.core.FrameTickerKt;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
import ur.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.RememberCommandQueueKt$rememberCommandQueueOrNull$1", f = "rememberCommandQueue.kt", l = {86}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RememberCommandQueueKt$rememberCommandQueueOrNull$1 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ CommandQueue $commandQueue;
    final /* synthetic */ LifecycleOwner $lifecycleOwner;
    int label;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RememberCommandQueueKt$rememberCommandQueueOrNull$1(CommandQueue commandQueue, LifecycleOwner lifecycleOwner, Continuation<? super RememberCommandQueueKt$rememberCommandQueueOrNull$1> continuation) {
        super(2, continuation);
        this.$commandQueue = commandQueue;
        this.$lifecycleOwner = lifecycleOwner;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        return new RememberCommandQueueKt$rememberCommandQueueOrNull$1(this.$commandQueue, this.$lifecycleOwner, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            c.b(obj);
            CommandQueue commandQueue = this.$commandQueue;
            if (commandQueue == null) {
                return Unit.f31988a;
            }
            Lifecycle lifecycle = this.$lifecycleOwner.getLifecycle();
            FrameTicker composeFrameTicker = FrameTickerKt.getComposeFrameTicker();
            this.label = 1;
            if (commandQueue.beginPolling(lifecycle, composeFrameTicker, this) == f10) {
                return f10;
            }
        }
        return Unit.f31988a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((RememberCommandQueueKt$rememberCommandQueueOrNull$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
    }
}
