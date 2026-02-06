package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class i implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final i f34244d = new i();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CallableDescriptor g10;
        g10 = TypeIntersectionScope.g((PropertyDescriptor) obj);
        return g10;
    }
}
