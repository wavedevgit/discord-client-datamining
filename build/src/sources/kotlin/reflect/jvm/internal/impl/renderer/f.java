package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class f implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final f f34534d = new f();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit d10;
        d10 = DescriptorRenderer.d((DescriptorRendererOptions) obj);
        return d10;
    }
}
