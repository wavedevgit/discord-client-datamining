package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class j implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final j f34082d = new j();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit j10;
        j10 = DescriptorRenderer.j((DescriptorRendererOptions) obj);
        return j10;
    }
}
