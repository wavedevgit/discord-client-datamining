package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class h implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final h f34223d = new h();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CallableDescriptor f10;
        f10 = TypeIntersectionScope.f((SimpleFunctionDescriptor) obj);
        return f10;
    }
}
