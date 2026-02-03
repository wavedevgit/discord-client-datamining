package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class f implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final f f33292d = new f();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType b10;
        b10 = ErasedOverridabilityCondition.b((ValueParameterDescriptor) obj);
        return b10;
    }
}
