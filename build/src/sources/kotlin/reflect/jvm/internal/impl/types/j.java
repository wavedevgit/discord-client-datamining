package kotlin.reflect.jvm.internal.impl.types;

import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.AbstractTypeConstructor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeConstructor.a f36009d;

    /* renamed from: e  reason: collision with root package name */
    private final AbstractTypeConstructor f36010e;

    public j(AbstractTypeConstructor.a aVar, AbstractTypeConstructor abstractTypeConstructor) {
        this.f36009d = aVar;
        this.f36010e = abstractTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List d10;
        d10 = AbstractTypeConstructor.a.d(this.f36009d, this.f36010e);
        return d10;
    }
}
