package app.rive;

import app.rive.core.CommandQueue;
import app.rive.core.ViewModelInstanceHandle;
import app.rive.runtime.kotlin.core.ViewModel;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.coroutines.flow.FlowCollector;
import org.jetbrains.annotations.NotNull;
import wr.b;
/* JADX INFO: Access modifiers changed from: package-private */
@Metadata(d1 = {"\u0000\u0010\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\u0010\u0000\u001a\u00020\u0001\"\u0004\b\u0000\u0010\u0002*\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00020\u00040\u0003H\u008a@"}, d2 = {"<anonymous>", "", "T", "Lkotlinx/coroutines/flow/FlowCollector;", "Lapp/rive/core/CommandQueue$PropertyUpdate;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.ViewModelInstance$getPropertyFlow$1$1", f = "ViewModelInstance.kt", l = {91}, m = "invokeSuspend")
@SourceDebugExtension({"SMAP\nViewModelInstance.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ViewModelInstance.kt\napp/rive/ViewModelInstance$getPropertyFlow$1$1\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,364:1\n1#2:365\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ViewModelInstance$getPropertyFlow$1$1 extends k implements Function2<FlowCollector, Continuation<? super Unit>, Object> {
    final /* synthetic */ Function3 $getter;
    final /* synthetic */ String $propertyPath;
    final /* synthetic */ ViewModel.PropertyDataType $propertyType;
    private /* synthetic */ Object L$0;
    int label;
    final /* synthetic */ ViewModelInstance this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ViewModelInstance$getPropertyFlow$1$1(ViewModelInstance viewModelInstance, String str, ViewModel.PropertyDataType propertyDataType, Function3 function3, Continuation<? super ViewModelInstance$getPropertyFlow$1$1> continuation) {
        super(2, continuation);
        this.this$0 = viewModelInstance;
        this.$propertyPath = str;
        this.$propertyType = propertyDataType;
        this.$getter = function3;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(Object obj, @NotNull Continuation<?> continuation) {
        ViewModelInstance$getPropertyFlow$1$1 viewModelInstance$getPropertyFlow$1$1 = new ViewModelInstance$getPropertyFlow$1$1(this.this$0, this.$propertyPath, this.$propertyType, this.$getter, continuation);
        viewModelInstance$getPropertyFlow$1$1.L$0 = obj;
        return viewModelInstance$getPropertyFlow$1$1;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        CommandQueue commandQueue;
        Object f10 = b.f();
        int i10 = this.label;
        try {
            if (i10 != 0) {
                if (i10 == 1) {
                    c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                c.b(obj);
                FlowCollector flowCollector = (FlowCollector) this.L$0;
                commandQueue = this.this$0.commandQueue;
                commandQueue.m151subscribeToPropertyiFQtAB8(this.this$0.m46getInstanceHandleVPLto4w$kotlin_release(), this.$propertyPath, this.$propertyType);
                Function3 function3 = this.$getter;
                ViewModelInstance viewModelInstance = this.this$0;
                String str = this.$propertyPath;
                Result.a aVar = kotlin.Result.f32005e;
                ViewModelInstanceHandle m197boximpl = ViewModelInstanceHandle.m197boximpl(viewModelInstance.m46getInstanceHandleVPLto4w$kotlin_release());
                this.label = 1;
                obj = function3.invoke(m197boximpl, str, this);
                if (obj == f10) {
                    return f10;
                }
            }
            kotlin.Result.b(obj);
        } catch (Throwable th2) {
            Result.a aVar2 = kotlin.Result.f32005e;
            kotlin.Result.b(c.a(th2));
        }
        return Unit.f32008a;
    }

    @Override // kotlin.jvm.functions.Function2
    public final Object invoke(@NotNull FlowCollector flowCollector, Continuation<? super Unit> continuation) {
        return ((ViewModelInstance$getPropertyFlow$1$1) create(flowCollector, continuation)).invokeSuspend(Unit.f32008a);
    }
}
