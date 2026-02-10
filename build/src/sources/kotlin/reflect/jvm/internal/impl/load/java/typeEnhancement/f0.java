package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class f0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f32873d;

    /* renamed from: e  reason: collision with root package name */
    private final String f32874e;

    public f0(String str, String str2) {
        this.f32873d = str;
        this.f32874e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit E;
        E = PredefinedEnhancementInfoKt.E(this.f32873d, this.f32874e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return E;
    }
}
