package kotlin.reflect.jvm.internal.impl.resolve.constants;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.builtins.PrimitiveType;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final PrimitiveType f34155d;

    public a(PrimitiveType primitiveType) {
        this.f34155d = primitiveType;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType c10;
        c10 = ConstantValueFactory.c(this.f34155d, (ModuleDescriptor) obj);
        return c10;
    }
}
