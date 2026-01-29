package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j0 implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final j0 f34266d = new j0();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CallableDescriptor V;
        V = LazyJavaScope.V((SimpleFunctionDescriptor) obj);
        return V;
    }
}
