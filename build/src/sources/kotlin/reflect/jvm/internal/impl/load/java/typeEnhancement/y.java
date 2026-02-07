package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class y implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f33204d;

    /* renamed from: e  reason: collision with root package name */
    private final String f33205e;

    public y(String str, String str2) {
        this.f33204d = str;
        this.f33205e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit y10;
        y10 = PredefinedEnhancementInfoKt.y(this.f33204d, this.f33205e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return y10;
    }
}
