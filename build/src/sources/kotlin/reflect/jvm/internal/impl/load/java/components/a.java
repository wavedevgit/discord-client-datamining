package kotlin.reflect.jvm.internal.impl.load.java.components;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaResolverContext f33277d;

    /* renamed from: e  reason: collision with root package name */
    private final JavaAnnotationDescriptor f33278e;

    public a(LazyJavaResolverContext lazyJavaResolverContext, JavaAnnotationDescriptor javaAnnotationDescriptor) {
        this.f33277d = lazyJavaResolverContext;
        this.f33278e = javaAnnotationDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        SimpleType c10;
        c10 = JavaAnnotationDescriptor.c(this.f33277d, this.f33278e);
        return c10;
    }
}
