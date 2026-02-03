package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class f0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f33572d;

    /* renamed from: e  reason: collision with root package name */
    private final String f33573e;

    public f0(String str, String str2) {
        this.f33572d = str;
        this.f33573e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit E;
        E = PredefinedEnhancementInfoKt.E(this.f33572d, this.f33573e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return E;
    }
}
