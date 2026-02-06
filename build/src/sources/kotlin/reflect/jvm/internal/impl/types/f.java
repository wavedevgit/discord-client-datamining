package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeConstructor f34731d;

    public f(AbstractTypeConstructor abstractTypeConstructor) {
        this.f34731d = abstractTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Iterable w10;
        w10 = AbstractTypeConstructor.w(this.f34731d, (TypeConstructor) obj);
        return w10;
    }
}
