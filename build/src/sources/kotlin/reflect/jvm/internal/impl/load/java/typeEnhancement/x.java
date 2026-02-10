package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.SignatureEnhancementBuilder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class x implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final String f32910d;

    /* renamed from: e  reason: collision with root package name */
    private final String f32911e;

    public x(String str, String str2) {
        this.f32910d = str;
        this.f32911e = str2;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit x10;
        x10 = PredefinedEnhancementInfoKt.x(this.f32910d, this.f32911e, (SignatureEnhancementBuilder.ClassEnhancementBuilder.FunctionEnhancementBuilder) obj);
        return x10;
    }
}
