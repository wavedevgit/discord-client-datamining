package kotlin.reflect.jvm.internal.impl.types;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeConstructor f35967d;

    public e(AbstractTypeConstructor abstractTypeConstructor) {
        this.f35967d = abstractTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit v10;
        v10 = AbstractTypeConstructor.v(this.f35967d, (AbstractTypeConstructor.b) obj);
        return v10;
    }
}
