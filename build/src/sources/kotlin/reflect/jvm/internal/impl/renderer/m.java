package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class m implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final m f35359d = new m();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Object K0;
        K0 = DescriptorRendererImpl.K0((KotlinType) obj);
        return K0;
    }
}
