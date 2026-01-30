package app.rive.core;

import app.rive.RiveLog;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.i;
import or.b;
import org.jetbrains.annotations.NotNull;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.core.CommandQueue$beginPolling$2", f = "CommandQueue.kt", l = {2175}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nCommandQueue.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CommandQueue.kt\napp/rive/core/CommandQueue$beginPolling$2\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,2459:1\n57#2:2460\n*S KotlinDebug\n*F\n+ 1 CommandQueue.kt\napp/rive/core/CommandQueue$beginPolling$2\n*L\n2173#1:2460\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CommandQueue$beginPolling$2 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ FrameTicker $ticker;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ CommandQueue this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CommandQueue$beginPolling$2(FrameTicker frameTicker, CommandQueue commandQueue, Continuation<? super CommandQueue$beginPolling$2> continuation) {
        super(2, continuation);
        this.$ticker = frameTicker;
        this.this$0 = commandQueue;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        CommandQueue$beginPolling$2 commandQueue$beginPolling$2 = new CommandQueue$beginPolling$2(this.$ticker, this.this$0, continuation);
        commandQueue$beginPolling$2.L$0 = obj;
        return commandQueue$beginPolling$2;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        CoroutineScope coroutineScope;
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                coroutineScope = (CoroutineScope) this.L$0;
                c.b(obj);
            } else {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
        } else {
            c.b(obj);
            RiveLog.INSTANCE.getLogger().d(CommandQueueKt.COMMAND_QUEUE_TAG, new Function0<String>() { // from class: app.rive.core.CommandQueue$beginPolling$2.1
                @Override // kotlin.jvm.functions.Function0
                @NotNull
                public final String invoke() {
                    return "Starting command queue polling";
                }
            });
            coroutineScope = (CoroutineScope) this.L$0;
        }
        while (i.i(coroutineScope)) {
            FrameTicker frameTicker = this.$ticker;
            final CommandQueue commandQueue = this.this$0;
            Function1<Long, Unit> function1 = new Function1<Long, Unit>() { // from class: app.rive.core.CommandQueue$beginPolling$2.2
                {
                    super(1);
                }

                @Override // kotlin.jvm.functions.Function1
                public /* bridge */ /* synthetic */ Object invoke(Object obj2) {
                    invoke(((Number) obj2).longValue());
                    return Unit.f33298a;
                }

                public final void invoke(long j10) {
                    CommandQueue.this.pollMessages();
                }
            };
            this.L$0 = coroutineScope;
            this.label = 1;
            if (frameTicker.withFrame(function1, this) == f10) {
                return f10;
            }
        }
        return Unit.f33298a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((CommandQueue$beginPolling$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
    }
}
