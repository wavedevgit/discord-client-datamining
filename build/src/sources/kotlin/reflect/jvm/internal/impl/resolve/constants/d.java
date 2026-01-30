package kotlin.reflect.jvm.internal.impl.resolve.constants;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinType f35448d;

    public d(KotlinType kotlinType) {
        this.f35448d = kotlinType;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType a10;
        a10 = TypedArrayValue.a(this.f35448d, (ModuleDescriptor) obj);
        return a10;
    }
}
