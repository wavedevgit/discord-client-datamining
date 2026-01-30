package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class r0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f34431d;

    public r0(String str) {
        this.f34431d = str;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit R;
        R = PredefinedEnhancementInfoKt.R(this.f34431d, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return R;
    }
}
