package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeConstructor f34655d;

    public c(AbstractTypeConstructor abstractTypeConstructor) {
        this.f34655d = abstractTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        AbstractTypeConstructor.b t10;
        t10 = AbstractTypeConstructor.t(this.f34655d);
        return t10;
    }
}
