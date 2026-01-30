package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final j f35535d = new j();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CallableDescriptor e10;
        e10 = TypeIntersectionScope.e((CallableDescriptor) obj);
        return e10;
    }
}
