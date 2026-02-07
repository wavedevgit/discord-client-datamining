package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class w implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f33198d;

    /* renamed from: e  reason: collision with root package name */
    private final String f33199e;

    public w(String str, String str2) {
        this.f33198d = str;
        this.f33199e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit w10;
        w10 = PredefinedEnhancementInfoKt.w(this.f33198d, this.f33199e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return w10;
    }
}
