package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f34179d;

    /* renamed from: e  reason: collision with root package name */
    private final String f34180e;

    public e0(String str, String str2) {
        this.f34179d = str;
        this.f34180e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit D;
        D = PredefinedEnhancementInfoKt.D(this.f34179d, this.f34180e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return D;
    }
}
