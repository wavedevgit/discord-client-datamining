package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassOrPackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.JavaTypeQualifiersByElementType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaResolverContext f33338d;

    /* renamed from: e  reason: collision with root package name */
    private final ClassOrPackageFragmentDescriptor f33339e;

    public a(LazyJavaResolverContext lazyJavaResolverContext, ClassOrPackageFragmentDescriptor classOrPackageFragmentDescriptor) {
        this.f33338d = lazyJavaResolverContext;
        this.f33339e = classOrPackageFragmentDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        JavaTypeQualifiersByElementType d10;
        d10 = ContextKt.d(this.f33338d, this.f33339e);
        return d10;
    }
}
