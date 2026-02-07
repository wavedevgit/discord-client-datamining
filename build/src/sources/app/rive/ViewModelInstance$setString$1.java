package app.rive;

import app.rive.core.CommandQueue;
import app.rive.core.ViewModelInstanceHandle;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class ViewModelInstance$setString$1 extends FunctionReferenceImpl implements Function3 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public ViewModelInstance$setString$1(Object obj) {
        super(3, obj, CommandQueue.class, "setStringProperty", "setStringProperty-iFQtAB8(JLjava/lang/String;Ljava/lang/String;)V", 0);
    }

    @Override // kotlin.jvm.functions.Function3
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
        m57invokeiFQtAB8(((ViewModelInstanceHandle) obj).m203unboximpl(), (String) obj2, (String) obj3);
        return Unit.f32056a;
    }

    /* renamed from: invoke-iFQtAB8  reason: not valid java name */
    public final void m57invokeiFQtAB8(long j10, @NotNull String p12, @NotNull String p22) {
        Intrinsics.checkNotNullParameter(p12, "p1");
        Intrinsics.checkNotNullParameter(p22, "p2");
        ((CommandQueue) this.receiver).m150setStringPropertyiFQtAB8(j10, p12, p22);
    }
}
