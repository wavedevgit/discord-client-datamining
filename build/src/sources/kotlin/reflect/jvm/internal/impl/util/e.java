package kotlin.reflect.jvm.internal.impl.util;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class e implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final e f35268d = new e();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        String g10;
        g10 = OperatorChecks.g((FunctionDescriptor) obj);
        return g10;
    }
}
