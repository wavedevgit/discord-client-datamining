package app.rive;

import app.rive.core.CommandQueue;
import app.rive.core.ViewModelInstanceHandle;
import kotlin.Metadata;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import org.jetbrains.annotations.NotNull;
@Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class ViewModelInstance$getStringFlow$1 extends FunctionReferenceImpl implements Function3 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public ViewModelInstance$getStringFlow$1(Object obj) {
        super(3, obj, CommandQueue.class, "getStringProperty", "getStringProperty-iFQtAB8(JLjava/lang/String;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", 0);
    }

    @Override // kotlin.jvm.functions.Function3
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
        return m52invokeiFQtAB8(((ViewModelInstanceHandle) obj).m203unboximpl(), (String) obj2, (Continuation) obj3);
    }

    /* renamed from: invoke-iFQtAB8  reason: not valid java name */
    public final Object m52invokeiFQtAB8(long j10, @NotNull String str, @NotNull Continuation<? super String> continuation) {
        return ((CommandQueue) this.receiver).m134getStringPropertyiFQtAB8(j10, str, continuation);
    }
}
