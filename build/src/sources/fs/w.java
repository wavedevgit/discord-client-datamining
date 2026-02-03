package fs;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class w implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final ReceiverParameterDescriptor f24652d;

    public w(ReceiverParameterDescriptor receiverParameterDescriptor) {
        this.f24652d = receiverParameterDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ParameterDescriptor f10;
        f10 = a0.f(this.f24652d);
        return f10;
    }
}
