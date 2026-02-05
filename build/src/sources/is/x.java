package is;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class x implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final ReceiverParameterDescriptor f30365d;

    public x(ReceiverParameterDescriptor receiverParameterDescriptor) {
        this.f30365d = receiverParameterDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ParameterDescriptor g10;
        g10 = a0.g(this.f30365d);
        return g10;
    }
}
