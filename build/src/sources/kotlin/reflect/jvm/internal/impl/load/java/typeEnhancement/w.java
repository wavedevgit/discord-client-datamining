package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class w implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f33130d;

    /* renamed from: e  reason: collision with root package name */
    private final String f33131e;

    public w(String str, String str2) {
        this.f33130d = str;
        this.f33131e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit w10;
        w10 = PredefinedEnhancementInfoKt.w(this.f33130d, this.f33131e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return w10;
    }
}
