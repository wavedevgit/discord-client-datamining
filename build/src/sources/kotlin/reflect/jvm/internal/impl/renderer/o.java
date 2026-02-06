package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final o f34087d = new o();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CharSequence c02;
        c02 = DescriptorRendererImpl.c0((ValueParameterDescriptor) obj);
        return c02;
    }
}
