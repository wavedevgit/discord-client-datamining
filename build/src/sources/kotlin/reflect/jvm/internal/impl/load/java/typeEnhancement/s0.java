package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f34433d;

    public s0(String str) {
        this.f34433d = str;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit e10;
        e10 = PredefinedEnhancementInfoKt.e(this.f34433d, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return e10;
    }
}
