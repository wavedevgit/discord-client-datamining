package app.rive;

import app.rive.core.CommandQueue;
import app.rive.core.StateMachineHandle;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.d;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import ks.a0;
import org.jetbrains.annotations.NotNull;
import pr.b;
import w0.q;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.RiveUIKt$RiveUI$5", f = "RiveUI.kt", l = {207}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nRiveUI.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$5\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt\n+ 4 SafeCollector.common.kt\nkotlinx/coroutines/flow/internal/SafeCollector_commonKt\n*L\n1#1,310:1\n17#2:311\n19#2:315\n46#3:312\n51#3:314\n105#4:313\n*S KotlinDebug\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$5\n*L\n206#1:311\n206#1:315\n206#1:312\n206#1:314\n206#1:313\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveUIKt$RiveUI$5 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ CommandQueue $commandQueue;
    final /* synthetic */ q $isSettled$delegate;
    final /* synthetic */ long $stateMachineHandle;
    int label;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    RiveUIKt$RiveUI$5(CommandQueue commandQueue, long j10, q qVar, Continuation<? super RiveUIKt$RiveUI$5> continuation) {
        super(2, continuation);
        this.$commandQueue = commandQueue;
        this.$stateMachineHandle = j10;
        this.$isSettled$delegate = qVar;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        return new RiveUIKt$RiveUI$5(this.$commandQueue, this.$stateMachineHandle, this.$isSettled$delegate, continuation);
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
            final a0 settledFlow = this.$commandQueue.getSettledFlow();
            final long j10 = this.$stateMachineHandle;
            Flow flow = new Flow() { // from class: app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1

                @Metadata(d1 = {"\u0000\f\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0003\u0010\u0006\u001a\u00020\u0003\"\u0004\b\u0000\u0010\u0000\"\u0004\b\u0001\u0010\u00012\u0006\u0010\u0002\u001a\u00028\u0000H\u008a@¢\u0006\u0004\b\u0004\u0010\u0005"}, d2 = {"T", "R", "value", "", "emit", "(Ljava/lang/Object;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "<anonymous>"}, k = 3, mv = {1, 9, 0})
                @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1\n+ 2 Transform.kt\nkotlinx/coroutines/flow/FlowKt__TransformKt\n+ 3 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$5\n*L\n1#1,218:1\n18#2:219\n19#2:221\n206#3:220\n*E\n"})
                /* renamed from: app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1$2  reason: invalid class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                public static final class AnonymousClass2<T> implements FlowCollector {
                    final /* synthetic */ long $stateMachineHandle$inlined;
                    final /* synthetic */ FlowCollector $this_unsafeFlow;

                    @Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
                    @e(c = "app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1$2", f = "RiveUI.kt", l = {219}, m = "emit")
                    @SourceDebugExtension({"SMAP\nEmitters.kt\nKotlin\n*S Kotlin\n*F\n+ 1 Emitters.kt\nkotlinx/coroutines/flow/FlowKt__EmittersKt$unsafeTransform$1$1$emit$1\n*L\n1#1,218:1\n*E\n"})
                    /* renamed from: app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1$2$1  reason: invalid class name */
                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
                    public static final class AnonymousClass1 extends d {
                        Object L$0;
                        Object L$1;
                        int label;
                        /* synthetic */ Object result;

                        public AnonymousClass1(Continuation continuation) {
                            super(continuation);
                        }

                        @Override // kotlin.coroutines.jvm.internal.a
                        public final Object invokeSuspend(@NotNull Object obj) {
                            this.result = obj;
                            this.label |= Integer.MIN_VALUE;
                            return AnonymousClass2.this.emit(null, this);
                        }
                    }

                    public AnonymousClass2(FlowCollector flowCollector, long j10) {
                        this.$this_unsafeFlow = flowCollector;
                        this.$stateMachineHandle$inlined = j10;
                    }

                    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
                    /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
                    @Override // kotlinx.coroutines.flow.FlowCollector
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public final java.lang.Object emit(java.lang.Object r9, @org.jetbrains.annotations.NotNull kotlin.coroutines.Continuation r10) {
                        /*
                            r8 = this;
                            boolean r0 = r10 instanceof app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1.AnonymousClass2.AnonymousClass1
                            if (r0 == 0) goto L13
                            r0 = r10
                            app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1$2$1 r0 = (app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1.AnonymousClass2.AnonymousClass1) r0
                            int r1 = r0.label
                            r2 = -2147483648(0xffffffff80000000, float:-0.0)
                            r3 = r1 & r2
                            if (r3 == 0) goto L13
                            int r1 = r1 - r2
                            r0.label = r1
                            goto L18
                        L13:
                            app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1$2$1 r0 = new app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1$2$1
                            r0.<init>(r10)
                        L18:
                            java.lang.Object r10 = r0.result
                            java.lang.Object r1 = pr.b.f()
                            int r2 = r0.label
                            r3 = 1
                            if (r2 == 0) goto L31
                            if (r2 != r3) goto L29
                            kotlin.c.b(r10)
                            goto L4c
                        L29:
                            java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
                            java.lang.String r10 = "call to 'resume' before 'invoke' with coroutine"
                            r9.<init>(r10)
                            throw r9
                        L31:
                            kotlin.c.b(r10)
                            kotlinx.coroutines.flow.FlowCollector r10 = r8.$this_unsafeFlow
                            r2 = r9
                            app.rive.core.StateMachineHandle r2 = (app.rive.core.StateMachineHandle) r2
                            long r4 = r2.m198unboximpl()
                            long r6 = r8.$stateMachineHandle$inlined
                            int r2 = (r4 > r6 ? 1 : (r4 == r6 ? 0 : -1))
                            if (r2 != 0) goto L4c
                            r0.label = r3
                            java.lang.Object r9 = r10.emit(r9, r0)
                            if (r9 != r1) goto L4c
                            return r1
                        L4c:
                            kotlin.Unit r9 = kotlin.Unit.f33074a
                            return r9
                        */
                        throw new UnsupportedOperationException("Method not decompiled: app.rive.RiveUIKt$RiveUI$5$invokeSuspend$$inlined$filter$1.AnonymousClass2.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                    }
                }

                @Override // kotlinx.coroutines.flow.Flow
                public Object collect(@NotNull FlowCollector flowCollector, @NotNull Continuation continuation) {
                    Object collect = Flow.this.collect(new AnonymousClass2(flowCollector, j10), continuation);
                    if (collect == b.f()) {
                        return collect;
                    }
                    return Unit.f33074a;
                }
            };
            final long j11 = this.$stateMachineHandle;
            final q qVar = this.$isSettled$delegate;
            FlowCollector flowCollector = new FlowCollector() { // from class: app.rive.RiveUIKt$RiveUI$5.2
                @Override // kotlinx.coroutines.flow.FlowCollector
                public /* bridge */ /* synthetic */ Object emit(Object obj2, Continuation continuation) {
                    return m43emitOFH3VyA(((StateMachineHandle) obj2).m198unboximpl(), continuation);
                }

                /* renamed from: emit-OFH3VyA  reason: not valid java name */
                public final Object m43emitOFH3VyA(long j12, @NotNull Continuation<? super Unit> continuation) {
                    final long j13 = j11;
                    RiveLog.INSTANCE.getLogger().v("RiveUI/SM", new Function0<String>() { // from class: app.rive.RiveUIKt.RiveUI.5.2.1
                        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                        {
                            super(0);
                        }

                        @Override // kotlin.jvm.functions.Function0
                        @NotNull
                        public final String invoke() {
                            String m197toStringimpl = StateMachineHandle.m197toStringimpl(j13);
                            return "State machine " + m197toStringimpl + " settled";
                        }
                    });
                    RiveUIKt.RiveUI$lambda$4(qVar, true);
                    return Unit.f33074a;
                }
            };
            this.label = 1;
            if (flow.collect(flowCollector, this) == f10) {
                return f10;
            }
        }
        return Unit.f33074a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((RiveUIKt$RiveUI$5) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
    }
}
