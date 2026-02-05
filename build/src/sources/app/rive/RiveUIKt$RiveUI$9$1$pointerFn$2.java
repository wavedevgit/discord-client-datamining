package app.rive;

import app.rive.core.CommandQueue;
import app.rive.core.StateMachineHandle;
import app.rive.runtime.kotlin.core.Alignment;
import app.rive.runtime.kotlin.core.Fit;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function8;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(k = 3, mv = {1, 9, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
/* synthetic */ class RiveUIKt$RiveUI$9$1$pointerFn$2 extends FunctionReferenceImpl implements Function8 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public RiveUIKt$RiveUI$9$1$pointerFn$2(Object obj) {
        super(8, obj, CommandQueue.class, "pointerUp", "pointerUp-OV3vCas(JLapp/rive/runtime/kotlin/core/Fit;Lapp/rive/runtime/kotlin/core/Alignment;FFIFF)V", 0);
    }

    @Override // kotlin.jvm.functions.Function8
    public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2, Object obj3, Object obj4, Object obj5, Object obj6, Object obj7, Object obj8) {
        m43invokeOV3vCas(((StateMachineHandle) obj).m196unboximpl(), (Fit) obj2, (Alignment) obj3, ((Number) obj4).floatValue(), ((Number) obj5).floatValue(), ((Number) obj6).intValue(), ((Number) obj7).floatValue(), ((Number) obj8).floatValue());
        return Unit.f31988a;
    }

    /* renamed from: invoke-OV3vCas  reason: not valid java name */
    public final void m43invokeOV3vCas(long j10, @NotNull Fit p12, @NotNull Alignment p22, float f10, float f11, int i10, float f12, float f13) {
        Intrinsics.checkNotNullParameter(p12, "p1");
        Intrinsics.checkNotNullParameter(p22, "p2");
        ((CommandQueue) this.receiver).m142pointerUpOV3vCas(j10, p12, p22, f10, f11, i10, f12, f13);
    }
}
