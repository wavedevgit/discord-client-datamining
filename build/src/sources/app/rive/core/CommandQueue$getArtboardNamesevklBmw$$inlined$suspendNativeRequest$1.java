package app.rive.core;

import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.g;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
import wr.b;
@Metadata(d1 = {"\u0000\n\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\u0010\u0000\u001a\u0002H\u0001\"\u0006\b\u0000\u0010\u0001\u0018\u0001*\u00020\u0002H\u008a@¨\u0006\u0003"}, d2 = {"<anonymous>", "T", "Lkotlinx/coroutines/CoroutineScope;", "app/rive/core/CommandQueue$suspendNativeRequest$2"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.core.CommandQueue$getArtboardNames-evklBmw$$inlined$suspendNativeRequest$1", f = "CommandQueue.kt", l = {2460}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nCommandQueue.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CommandQueue.kt\napp/rive/core/CommandQueue$suspendNativeRequest$2\n+ 2 CancellableContinuation.kt\nkotlinx/coroutines/CancellableContinuationKt\n+ 3 CommandQueue.kt\napp/rive/core/CommandQueue\n*L\n1#1,2459:1\n318#2,9:2460\n327#2,2:2475\n792#3,6:2469\n*S KotlinDebug\n*F\n+ 1 CommandQueue.kt\napp/rive/core/CommandQueue$suspendNativeRequest$2\n*L\n2268#1:2460,9\n2268#1:2475,2\n*E\n"})
/* renamed from: app.rive.core.CommandQueue$getArtboardNames-evklBmw$$inlined$suspendNativeRequest$1  reason: invalid class name */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CommandQueue$getArtboardNamesevklBmw$$inlined$suspendNativeRequest$1 extends k implements Function2<CoroutineScope, Continuation<? super List<? extends String>>, Object> {
    final /* synthetic */ long $fileHandle$inlined;
    Object L$0;
    Object L$1;
    int label;
    final /* synthetic */ CommandQueue this$0;
    final /* synthetic */ CommandQueue this$0$inline_fun;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public CommandQueue$getArtboardNamesevklBmw$$inlined$suspendNativeRequest$1(CommandQueue commandQueue, Continuation continuation, CommandQueue commandQueue2, long j10) {
        super(2, continuation);
        this.this$0$inline_fun = commandQueue;
        this.this$0 = commandQueue2;
        this.$fileHandle$inlined = j10;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        return new CommandQueue$getArtboardNamesevklBmw$$inlined$suspendNativeRequest$1(this.this$0$inline_fun, continuation, this.this$0, this.$fileHandle$inlined);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        AtomicLong atomicLong;
        ConcurrentHashMap concurrentHashMap;
        RCPointer rCPointer;
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                CommandQueue commandQueue = (CommandQueue) this.L$0;
                c.b(obj);
                return obj;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
        c.b(obj);
        final CommandQueue commandQueue2 = this.this$0$inline_fun;
        this.L$0 = commandQueue2;
        this.label = 1;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(b.c(this), 1);
        eVar.H();
        atomicLong = commandQueue2.nextRequestID;
        final long andIncrement = atomicLong.getAndIncrement();
        Long f11 = kotlin.coroutines.jvm.internal.b.f(andIncrement);
        concurrentHashMap = commandQueue2.pendingContinuations;
        concurrentHashMap.put(f11, eVar);
        eVar.c(new Function1<Throwable, Unit>() { // from class: app.rive.core.CommandQueue$getArtboardNames-evklBmw$$inlined$suspendNativeRequest$1.1
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            {
                super(1);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj2) {
                invoke((Throwable) obj2);
                return Unit.f32056a;
            }

            public final void invoke(Throwable th2) {
                ConcurrentHashMap concurrentHashMap2;
                concurrentHashMap2 = CommandQueue.this.pendingContinuations;
                concurrentHashMap2.remove(Long.valueOf(andIncrement));
            }
        });
        CommandQueue commandQueue3 = this.this$0;
        rCPointer = commandQueue3.cppPointer;
        commandQueue3.cppGetArtboardNames(rCPointer.getPointer(), andIncrement, this.$fileHandle$inlined);
        Object B = eVar.B();
        if (B == b.f()) {
            g.c(this);
        }
        if (B == f10) {
            return f10;
        }
        return B;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super List<? extends String>> continuation) {
        return ((CommandQueue$getArtboardNamesevklBmw$$inlined$suspendNativeRequest$1) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
    }
}
