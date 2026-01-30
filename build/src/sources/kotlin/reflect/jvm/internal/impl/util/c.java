package kotlin.reflect.jvm.internal.impl.util;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final c f36100d = new c();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        String d10;
        d10 = OperatorChecks.d((FunctionDescriptor) obj);
        return d10;
    }
}
