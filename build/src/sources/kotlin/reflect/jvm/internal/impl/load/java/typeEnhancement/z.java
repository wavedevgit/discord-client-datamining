package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class z implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f33139d;

    /* renamed from: e  reason: collision with root package name */
    private final String f33140e;

    public z(String str, String str2) {
        this.f33139d = str;
        this.f33140e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit z10;
        z10 = PredefinedEnhancementInfoKt.z(this.f33139d, this.f33140e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return z10;
    }
}
