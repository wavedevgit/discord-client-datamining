package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final c f34123d = new c();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit c10;
        c10 = DescriptorRenderer.c((DescriptorRendererOptions) obj);
        return c10;
    }
}
