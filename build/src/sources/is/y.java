package is;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ParameterDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final CallableMemberDescriptor f30374d;

    /* renamed from: e  reason: collision with root package name */
    private final int f30375e;

    public y(CallableMemberDescriptor callableMemberDescriptor, int i10) {
        this.f30374d = callableMemberDescriptor;
        this.f30375e = i10;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ParameterDescriptor h10;
        h10 = a0.h(this.f30374d, this.f30375e);
        return h10;
    }
}
