package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import java.util.Collection;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class l0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final l0 f34287d = new l0();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Collection e02;
        e02 = LazyJavaStaticClassScope.e0((MemberScope) obj);
        return e02;
    }
}
