package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class z implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f33707d;

    /* renamed from: e  reason: collision with root package name */
    private final String f33708e;

    public z(String str, String str2) {
        this.f33707d = str;
        this.f33708e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit z10;
        z10 = PredefinedEnhancementInfoKt.z(this.f33707d, this.f33708e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return z10;
    }
}
