package kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.descriptors.LazyJavaPackageScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class x implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaPackageScope f33563d;

    /* renamed from: e  reason: collision with root package name */
    private final LazyJavaResolverContext f33564e;

    public x(LazyJavaPackageScope lazyJavaPackageScope, LazyJavaResolverContext lazyJavaResolverContext) {
        this.f33563d = lazyJavaPackageScope;
        this.f33564e = lazyJavaResolverContext;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        ClassDescriptor Y;
        Y = LazyJavaPackageScope.Y(this.f33563d, this.f33564e, (LazyJavaPackageScope.a) obj);
        return Y;
    }
}
