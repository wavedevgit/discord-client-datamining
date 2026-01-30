package kotlin.reflect.jvm.internal.impl.resolve;

import kotlin.jvm.functions.Function2;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function2 {

    /* renamed from: d  reason: collision with root package name */
    public static final b f35413d = new b();

    @Override // kotlin.jvm.functions.Function2
    public Object invoke(Object obj, Object obj2) {
        boolean i10;
        i10 = DescriptorEquivalenceForOverrides.i((DeclarationDescriptor) obj, (DeclarationDescriptor) obj2);
        return Boolean.valueOf(i10);
    }
}
