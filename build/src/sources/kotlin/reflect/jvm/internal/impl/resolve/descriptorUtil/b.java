package kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final b f35236d = new b();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        DeclarationDescriptor a10;
        a10 = DescriptorUtilsKt.a((DeclarationDescriptor) obj);
        return a10;
    }
}
