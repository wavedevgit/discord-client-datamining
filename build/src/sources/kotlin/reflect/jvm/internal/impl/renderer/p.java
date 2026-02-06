package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class p implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final DescriptorRendererImpl f34088d;

    public p(DescriptorRendererImpl descriptorRendererImpl) {
        this.f34088d = descriptorRendererImpl;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        CharSequence H0;
        H0 = DescriptorRendererImpl.H0(this.f34088d, (KotlinType) obj);
        return H0;
    }
}
