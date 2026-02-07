package kotlin.reflect.jvm.internal.impl.load.java.components;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final b f32871d = new b();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType b10;
        b10 = JavaAnnotationTargetMapper.b((ModuleDescriptor) obj);
        return b10;
    }
}
