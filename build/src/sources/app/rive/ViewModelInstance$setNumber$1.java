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
/* synthetic */ class ViewModelInstance$setNumber$1 extends FunctionReferenceImpl implements Function3 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public ViewModelInstance$setNumber$1(Object obj) {
        super(3, obj, CommandQueue.class, "setNumberProperty", "setNumberProperty-iFQtAB8(JLjava/lang/String;F)V", 0);
    }

    @Override // kotlin.jvm.functions.Function3
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3) {
        m56invokeiFQtAB8(((ViewModelInstanceHandle) obj).m203unboximpl(), (String) obj2, ((Number) obj3).floatValue());
        return Unit.f33298a;
    }

    /* renamed from: invoke-iFQtAB8  reason: not valid java name */
    public final void m56invokeiFQtAB8(long j10, @NotNull String p12, float f10) {
        Intrinsics.checkNotNullParameter(p12, "p1");
        ((CommandQueue) this.receiver).m149setNumberPropertyiFQtAB8(j10, p12, f10);
    }
}
