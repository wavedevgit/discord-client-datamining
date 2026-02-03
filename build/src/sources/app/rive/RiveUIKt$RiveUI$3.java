package app.rive;

import app.rive.core.CommandQueue;
import app.rive.core.StateMachineHandle;
import app.rive.core.ViewModelInstanceHandle;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.FlowCollector;
import lr.h;
import ms.a0;
import org.jetbrains.annotations.NotNull;
import rr.b;
import w0.q;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001*\u00020\u0002H\u008a@"}, d2 = {"<anonymous>", "", "Lkotlinx/coroutines/CoroutineScope;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.RiveUIKt$RiveUI$3", f = "RiveUI.kt", l = {189}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nRiveUI.kt\nKotlin\n*S Kotlin\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$3\n+ 2 RiveLog.kt\napp/rive/RiveLog\n*L\n1#1,310:1\n57#2:311\n57#2:312\n*S KotlinDebug\n*F\n+ 1 RiveUI.kt\napp/rive/RiveUIKt$RiveUI$3\n*L\n175#1:311\n179#1:312\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveUIKt$RiveUI$3 extends k implements Function2<CoroutineScope, Continuation<? super Unit>, Object> {
    final /* synthetic */ CommandQueue $commandQueue;
    final /* synthetic */ q $isSettled$delegate;
    final /* synthetic */ long $stateMachineHandle;
    final /* synthetic */ ViewModelInstance $viewModelInstance;
    int label;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    RiveUIKt$RiveUI$3(ViewModelInstance viewModelInstance, CommandQueue commandQueue, long j10, q qVar, Continuation<? super RiveUIKt$RiveUI$3> continuation) {
        super(2, continuation);
        this.$viewModelInstance = viewModelInstance;
        this.$commandQueue = commandQueue;
        this.$stateMachineHandle = j10;
        this.$isSettled$delegate = qVar;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        return new RiveUIKt$RiveUI$3(this.$viewModelInstance, this.$commandQueue, this.$stateMachineHandle, this.$isSettled$delegate, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 != 1) {
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            c.b(obj);
        } else {
            c.b(obj);
            final ViewModelInstance viewModelInstance = this.$viewModelInstance;
            if (viewModelInstance == null) {
                final long j10 = this.$stateMachineHandle;
                RiveLog.INSTANCE.getLogger().d(ViewModelInstanceKt.VM_INSTANCE_TAG, new Function0<String>() { // from class: app.rive.RiveUIKt$RiveUI$3.1
                    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                    {
                        super(0);
                    }

                    @Override // kotlin.jvm.functions.Function0
                    @NotNull
                    public final String invoke() {
                        String m195toStringimpl = StateMachineHandle.m195toStringimpl(j10);
                        return "No view model instance to bind for " + m195toStringimpl;
                    }
                });
                return Unit.f32464a;
            }
            RiveLog.INSTANCE.getLogger().d(ViewModelInstanceKt.VM_INSTANCE_TAG, new Function0<String>() { // from class: app.rive.RiveUIKt$RiveUI$3.2
                {
                    super(0);
                }

                @Override // kotlin.jvm.functions.Function0
                @NotNull
                public final String invoke() {
                    String m202toStringimpl = ViewModelInstanceHandle.m202toStringimpl(ViewModelInstance.this.m46getInstanceHandleVPLto4w$kotlin_release());
                    return "Binding view model instance " + m202toStringimpl;
                }
            });
            this.$commandQueue.m109bindViewModelInstanceeiyHz8(this.$stateMachineHandle, this.$viewModelInstance.m46getInstanceHandleVPLto4w$kotlin_release());
            RiveUIKt.RiveUI$lambda$4(this.$isSettled$delegate, false);
            a0 dirtyFlow$kotlin_release = this.$viewModelInstance.getDirtyFlow$kotlin_release();
            final long j11 = this.$stateMachineHandle;
            final q qVar = this.$isSettled$delegate;
            FlowCollector flowCollector = new FlowCollector() { // from class: app.rive.RiveUIKt$RiveUI$3.3
                @Override // kotlinx.coroutines.flow.FlowCollector
                public /* bridge */ /* synthetic */ Object emit(Object obj2, Continuation continuation) {
                    return emit((Unit) obj2, (Continuation<? super Unit>) continuation);
                }

                public final Object emit(@NotNull Unit unit, @NotNull Continuation<? super Unit> continuation) {
                    final long j12 = j11;
                    RiveLog.INSTANCE.getLogger().v(ViewModelInstanceKt.VM_INSTANCE_TAG, new Function0<String>() { // from class: app.rive.RiveUIKt.RiveUI.3.3.1
                        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
                        {
                            super(0);
                        }

                        @Override // kotlin.jvm.functions.Function0
                        @NotNull
                        public final String invoke() {
                            String m195toStringimpl = StateMachineHandle.m195toStringimpl(j12);
                            return "View model instance dirty, unsettling " + m195toStringimpl;
                        }
                    });
                    RiveUIKt.RiveUI$lambda$4(qVar, false);
                    return Unit.f32464a;
                }
            };
            this.label = 1;
            if (dirtyFlow$kotlin_release.collect(flowCollector, this) == f10) {
                return f10;
            }
        }
        throw new h();
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull CoroutineScope coroutineScope, Continuation<? super Unit> continuation) {
        return ((RiveUIKt$RiveUI$3) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
    }
}
