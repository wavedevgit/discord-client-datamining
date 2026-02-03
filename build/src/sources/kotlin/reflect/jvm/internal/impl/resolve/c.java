package kotlin.reflect.jvm.internal.impl.resolve;

import kotlin.jvm.functions.Function2;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function2 {

    /* renamed from: d  reason: collision with root package name */
    public static final c f34580d = new c();

    @Override // kotlin.jvm.functions.Function2
    public Object invoke(Object obj, Object obj2) {
        boolean e10;
        e10 = DescriptorEquivalenceForOverrides.e((DeclarationDescriptor) obj, (DeclarationDescriptor) obj2);
        return Boolean.valueOf(e10);
    }
}
