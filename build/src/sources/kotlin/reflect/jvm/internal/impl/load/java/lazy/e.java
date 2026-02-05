package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaTypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaTypeParameter;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaTypeParameterResolver f33001d;

    public e(LazyJavaTypeParameterResolver lazyJavaTypeParameterResolver) {
        this.f33001d = lazyJavaTypeParameterResolver;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        LazyJavaTypeParameterDescriptor b10;
        b10 = LazyJavaTypeParameterResolver.b(this.f33001d, (JavaTypeParameter) obj);
        return b10;
    }
}
