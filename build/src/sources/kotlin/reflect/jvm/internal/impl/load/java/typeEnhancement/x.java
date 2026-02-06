package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class x implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f33153d;

    /* renamed from: e  reason: collision with root package name */
    private final String f33154e;

    public x(String str, String str2) {
        this.f33153d = str;
        this.f33154e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit x10;
        x10 = PredefinedEnhancementInfoKt.x(this.f33153d, this.f33154e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return x10;
    }
}
