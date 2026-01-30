package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeConstructor f36023d;

    public h(AbstractTypeConstructor abstractTypeConstructor) {
        this.f36023d = abstractTypeConstructor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Iterable y10;
        y10 = AbstractTypeConstructor.y(this.f36023d, (TypeConstructor) obj);
        return y10;
    }
}
