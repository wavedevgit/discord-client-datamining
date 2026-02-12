package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaPackageScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class x implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaPackageScope f32995d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyJavaResolverContext f32996e;

    public x(LazyJavaPackageScope lazyJavaPackageScope, LazyJavaResolverContext lazyJavaResolverContext) {
        this.f32995d = lazyJavaPackageScope;
        this.f32996e = lazyJavaResolverContext;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ClassDescriptor Y;
        Y = LazyJavaPackageScope.Y(this.f32995d, this.f32996e, (LazyJavaPackageScope.a) obj);
        return Y;
    }
}
