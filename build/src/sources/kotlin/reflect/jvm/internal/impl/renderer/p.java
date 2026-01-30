package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final DescriptorRendererImpl f35378d;

    public p(DescriptorRendererImpl descriptorRendererImpl) {
        this.f35378d = descriptorRendererImpl;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CharSequence H0;
        H0 = DescriptorRendererImpl.H0(this.f35378d, (KotlinType) obj);
        return H0;
    }
}
