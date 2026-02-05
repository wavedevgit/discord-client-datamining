package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class s implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final s f34071d = new s();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        String c10;
        c10 = DescriptorRendererOptionsImpl.c((ValueParameterDescriptor) obj);
        return c10;
    }
}
