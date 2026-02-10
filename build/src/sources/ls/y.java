package ls;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ParameterDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final CallableMemberDescriptor f36607d;

    /* renamed from: e  reason: collision with root package name */
    private final int f36608e;

    public y(CallableMemberDescriptor callableMemberDescriptor, int i10) {
        this.f36607d = callableMemberDescriptor;
        this.f36608e = i10;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ParameterDescriptor h10;
        h10 = a0.h(this.f36607d, this.f36608e);
        return h10;
    }
}
