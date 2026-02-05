package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeConstructor.a f34715d;

    /* renamed from: e  reason: collision with root package name */
    private final AbstractTypeConstructor f34716e;

    public j(AbstractTypeConstructor.a aVar, AbstractTypeConstructor abstractTypeConstructor) {
        this.f34715d = aVar;
        this.f34716e = abstractTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List d10;
        d10 = AbstractTypeConstructor.a.d(this.f34715d, this.f34716e);
        return d10;
    }
}
