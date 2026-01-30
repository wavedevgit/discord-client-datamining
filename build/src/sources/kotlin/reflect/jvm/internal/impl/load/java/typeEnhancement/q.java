package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
import kotlin.reflect.jvm.internal.impl.load.kotlin.SignatureBuildingComponents;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class q implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final SignatureBuildingComponents f34428d;

    public q(SignatureBuildingComponents signatureBuildingComponents) {
        this.f34428d = signatureBuildingComponents;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit q10;
        q10 = PredefinedEnhancementInfoKt.q(this.f34428d, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return q10;
    }
}
