package kotlin.reflect.jvm.internal.impl.types;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeConstructor f34782d;

    public i(AbstractTypeConstructor abstractTypeConstructor) {
        this.f34782d = abstractTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit z10;
        z10 = AbstractTypeConstructor.z(this.f34782d, (KotlinType) obj);
        return z10;
    }
}
