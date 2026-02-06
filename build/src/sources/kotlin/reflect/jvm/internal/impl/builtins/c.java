package kotlin.reflect.jvm.internal.impl.builtins;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.name.FqName;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final PrimitiveType f32187d;

    public c(PrimitiveType primitiveType) {
        this.f32187d = primitiveType;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        FqName g10;
        g10 = PrimitiveType.g(this.f32187d);
        return g10;
    }
}
