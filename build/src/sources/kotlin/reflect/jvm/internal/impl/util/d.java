package kotlin.reflect.jvm.internal.impl.util;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class d implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final d f34811d = new d();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        String e10;
        e10 = OperatorChecks.e((FunctionDescriptor) obj);
        return e10;
    }
}
