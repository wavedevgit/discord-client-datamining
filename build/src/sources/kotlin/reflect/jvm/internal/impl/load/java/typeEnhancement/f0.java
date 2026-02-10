package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class f0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f33095d;

    /* renamed from: e  reason: collision with root package name */
    private final String f33096e;

    public f0(String str, String str2) {
        this.f33095d = str;
        this.f33096e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit E;
        E = PredefinedEnhancementInfoKt.E(this.f33095d, this.f33096e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return E;
    }
}
