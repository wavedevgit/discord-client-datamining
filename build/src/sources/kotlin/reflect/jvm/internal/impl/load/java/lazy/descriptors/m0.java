package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Collection;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class m0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final Name f34273d;

    public m0(Name name) {
        this.f34273d = name;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Collection d02;
        d02 = LazyJavaStaticClassScope.d0(this.f34273d, (MemberScope) obj);
        return d02;
    }
}
