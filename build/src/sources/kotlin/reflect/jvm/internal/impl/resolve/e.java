package kotlin.reflect.jvm.internal.impl.resolve;

import kotlin.jvm.functions.Function2;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function2 {

    /* renamed from: d  reason: collision with root package name */
    private final CallableDescriptor f34153d;

    /* renamed from: e  reason: collision with root package name */
    private final CallableDescriptor f34154e;

    public e(CallableDescriptor callableDescriptor, CallableDescriptor callableDescriptor2) {
        this.f34153d = callableDescriptor;
        this.f34154e = callableDescriptor2;
    }

    @Override // kotlin.jvm.functions.Function2
    public Object invoke(Object obj, Object obj2) {
        boolean g10;
        g10 = DescriptorEquivalenceForOverrides.g(this.f34153d, this.f34154e, (DeclarationDescriptor) obj, (DeclarationDescriptor) obj2);
        return Boolean.valueOf(g10);
    }
}
