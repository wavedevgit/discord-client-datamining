package app.rive.core;

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
import kotlin.jvm.internal.InlineMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import org.jetbrains.annotations.NotNull;
import wr.b;
/* JADX INFO: Add missing generic type declarations: [T] */
@Metadata(d1 = {"\u0000\b\n\u0002\b\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u0002H\u0001\"\u0006\b\u0000\u0010\u0001\u0018\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "T", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.core.CommandQueue$suspendNativeRequest$2", f = "CommandQueue.kt", l = {2460}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nCommandQueue.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CommandQueue.kt\napp/rive/core/CommandQueue$suspendNativeRequest$2\n+ 2 CancellableContinuation.kt\nkotlinx/coroutines/CancellableContinuationKt\n*L\n1#1,2459:1\n318#2,11:2460\n*S KotlinDebug\n*F\n+ 1 CommandQueue.kt\napp/rive/core/CommandQueue$suspendNativeRequest$2\n*L\n2268#1:2460,11\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CommandQueue$suspendNativeRequest$2<T> extends k implements Function2<CoroutineScope, Continuation<? super T>, Object> {
    final /* synthetic */ Function1<Long, Unit> $nativeFn;
    Object L$0;
    Object L$1;
    int label;
    final /* synthetic */ CommandQueue this$0;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public CommandQueue$suspendNativeRequest$2(CommandQueue commandQueue, Function1<? super Long, Unit> function1, Continuation<? super CommandQueue$suspendNativeRequest$2> continuation) {
        super(2, continuation);
        this.this$0 = commandQueue;
        this.$nativeFn = function1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        Intrinsics.needClassReification();
        return new CommandQueue$suspendNativeRequest$2(this.this$0, this.$nativeFn, continuation);
    }

    @Override // kotlin.jvm.functions.Function2
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
        return invoke((CoroutineScope) obj, (Continuation) ((Continuation) obj2));
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        AtomicLong atomicLong;
        ConcurrentHashMap concurrentHashMap;
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                Function1 function1 = (Function1) this.L$1;
                CommandQueue commandQueue = (CommandQueue) this.L$0;
                c.b(obj);
                return obj;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
        c.b(obj);
        CommandQueue commandQueue2 = this.this$0;
        Function1<Long, Unit> function12 = this.$nativeFn;
        this.L$0 = commandQueue2;
        this.L$1 = function12;
        this.label = 1;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(b.c(this), 1);
        eVar.H();
        atomicLong = commandQueue2.nextRequestID;
        long andIncrement = atomicLong.getAndIncrement();
        Long f11 = kotlin.coroutines.jvm.internal.b.f(andIncrement);
        concurrentHashMap = commandQueue2.pendingContinuations;
        concurrentHashMap.put(f11, eVar);
        eVar.c(new CommandQueue$suspendNativeRequest$2$1$1(commandQueue2, andIncrement));
        function12.invoke(kotlin.coroutines.jvm.internal.b.f(andIncrement));
        Object B = eVar.B();
        if (B == b.f()) {
            g.c(this);
        }
        if (B == f10) {
            return f10;
        }
        return B;
    }

    public final Object invokeSuspend$$forInline(@NotNull Object obj) {
        AtomicLong atomicLong;
        ConcurrentHashMap concurrentHashMap;
        CommandQueue commandQueue = this.this$0;
        Function1<Long, Unit> function1 = this.$nativeFn;
        InlineMarker.mark(0);
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(b.c(this), 1);
        eVar.H();
        atomicLong = commandQueue.nextRequestID;
        long andIncrement = atomicLong.getAndIncrement();
        Long valueOf = Long.valueOf(andIncrement);
        concurrentHashMap = commandQueue.pendingContinuations;
        Intrinsics.checkNotNull(eVar, "null cannot be cast to non-null type kotlinx.coroutines.CancellableContinuation<kotlin.Any>");
        concurrentHashMap.put(valueOf, eVar);
        eVar.c(new CommandQueue$suspendNativeRequest$2$1$1(commandQueue, andIncrement));
        function1.invoke(Long.valueOf(andIncrement));
        Unit unit = Unit.f32008a;
        Object B = eVar.B();
        if (B == b.f()) {
            g.c(this);
        }
        InlineMarker.mark(1);
        return B;
    }

    public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super T> continuation) {
        return ((CommandQueue$suspendNativeRequest$2) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
    }
}
