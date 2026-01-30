package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassOrPackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.JavaTypeQualifiersByElementType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaResolverContext f34172d;

    /* renamed from: e  reason: collision with root package name */
    private final ClassOrPackageFragmentDescriptor f34173e;

    public a(LazyJavaResolverContext lazyJavaResolverContext, ClassOrPackageFragmentDescriptor classOrPackageFragmentDescriptor) {
        this.f34172d = lazyJavaResolverContext;
        this.f34173e = classOrPackageFragmentDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        JavaTypeQualifiersByElementType d10;
        d10 = ContextKt.d(this.f34172d, this.f34173e);
        return d10;
    }
}
