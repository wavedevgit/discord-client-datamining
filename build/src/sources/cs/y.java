package cs;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ParameterDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final CallableMemberDescriptor f21310d;

    /* renamed from: e  reason: collision with root package name */
    private final int f21311e;

    public y(CallableMemberDescriptor callableMemberDescriptor, int i10) {
        this.f21310d = callableMemberDescriptor;
        this.f21311e = i10;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ParameterDescriptor h10;
        h10 = a0.h(this.f21310d, this.f21311e);
        return h10;
    }
}
