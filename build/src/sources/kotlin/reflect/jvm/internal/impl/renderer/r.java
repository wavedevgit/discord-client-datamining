package kotlin.reflect.jvm.internal.impl.renderer;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class r implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final r f35156d = new r();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType e10;
        e10 = DescriptorRendererOptionsImpl.e((KotlinType) obj);
        return e10;
    }
}
