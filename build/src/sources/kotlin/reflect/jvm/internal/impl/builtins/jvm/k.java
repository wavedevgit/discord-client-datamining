package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class k implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaClassDescriptor f32341d;

    /* renamed from: e  reason: collision with root package name */
    private final ClassDescriptor f32342e;

    public k(LazyJavaClassDescriptor lazyJavaClassDescriptor, ClassDescriptor classDescriptor) {
        this.f32341d = lazyJavaClassDescriptor;
        this.f32342e = classDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ClassDescriptor p10;
        p10 = JvmBuiltInsCustomizer.p(this.f32341d, this.f32342e);
        return p10;
    }
}
