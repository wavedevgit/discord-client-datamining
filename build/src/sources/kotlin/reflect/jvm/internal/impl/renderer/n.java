package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final DescriptorRendererImpl f35152d;

    public n(DescriptorRendererImpl descriptorRendererImpl) {
        this.f35152d = descriptorRendererImpl;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CharSequence E;
        E = DescriptorRendererImpl.E(this.f35152d, (TypeProjection) obj);
        return E;
    }
}
