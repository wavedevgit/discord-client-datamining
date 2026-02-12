package kotlin.reflect.jvm.internal.impl.builtins;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final PrimitiveType f32168d;

    public d(PrimitiveType primitiveType) {
        this.f32168d = primitiveType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        FqName f10;
        f10 = PrimitiveType.f(this.f32168d);
        return f10;
    }
}
