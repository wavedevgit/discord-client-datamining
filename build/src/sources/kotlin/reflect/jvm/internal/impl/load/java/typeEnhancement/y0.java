package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final ValueParameterDescriptor f34448d;

    public y0(ValueParameterDescriptor valueParameterDescriptor) {
        this.f34448d = valueParameterDescriptor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType o10;
        o10 = SignatureEnhancement.o(this.f34448d, (CallableMemberDescriptor) obj);
        return o10;
    }
}
