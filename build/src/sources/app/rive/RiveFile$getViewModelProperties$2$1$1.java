package app.rive;

import app.rive.core.CommandQueue;
import app.rive.runtime.kotlin.core.ViewModel;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.c;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.e;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import org.jetbrains.annotations.NotNull;
import rr.b;
@Metadata(d1 = {"\u0000\n\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\u0010\u0000\u001a\b\u0012\u0004\u0012\u00020\u00020\u0001H\u008a@"}, d2 = {"<anonymous>", "", "Lapp/rive/runtime/kotlin/core/ViewModel$Property;"}, k = 3, mv = {1, 9, 0}, xi = 48)
@e(c = "app.rive.RiveFile$getViewModelProperties$2$1$1", f = "RiveFile.kt", l = {125}, m = "invokeSuspend")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class RiveFile$getViewModelProperties$2$1$1 extends k implements Function1<Continuation<? super List<? extends ViewModel.Property>>, Object> {
    final /* synthetic */ String $viewModel;
    int label;
    final /* synthetic */ RiveFile this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public RiveFile$getViewModelProperties$2$1$1(RiveFile riveFile, String str, Continuation<? super RiveFile$getViewModelProperties$2$1$1> continuation) {
        super(1, continuation);
        this.this$0 = riveFile;
        this.$viewModel = str;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    @NotNull
    public final Continuation<Unit> create(@NotNull Continuation<?> continuation) {
        return new RiveFile$getViewModelProperties$2$1$1(this.this$0, this.$viewModel, continuation);
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public final Object invokeSuspend(@NotNull Object obj) {
        Object f10 = b.f();
        int i10 = this.label;
        if (i10 != 0) {
            if (i10 == 1) {
                c.b(obj);
                return obj;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }
        c.b(obj);
        CommandQueue commandQueue$kotlin_release = this.this$0.getCommandQueue$kotlin_release();
        long m31getFileHandleENT3xMk$kotlin_release = this.this$0.m31getFileHandleENT3xMk$kotlin_release();
        String str = this.$viewModel;
        this.label = 1;
        Object m137getViewModelPropertiesmgMojzc = commandQueue$kotlin_release.m137getViewModelPropertiesmgMojzc(m31getFileHandleENT3xMk$kotlin_release, str, this);
        if (m137getViewModelPropertiesmgMojzc == f10) {
            return f10;
        }
        return m137getViewModelPropertiesmgMojzc;
    }

    @Override // kotlin.jvm.functions.Function1
    public final Object invoke(Continuation<? super List<ViewModel.Property>> continuation) {
        return ((RiveFile$getViewModelProperties$2$1$1) create(continuation)).invokeSuspend(Unit.f32464a);
    }
}
