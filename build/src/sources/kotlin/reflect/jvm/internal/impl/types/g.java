package kotlin.reflect.jvm.internal.impl.types;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeConstructor f35798d;

    public g(AbstractTypeConstructor abstractTypeConstructor) {
        this.f35798d = abstractTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit x10;
        x10 = AbstractTypeConstructor.x(this.f35798d, (KotlinType) obj);
        return x10;
    }
}
