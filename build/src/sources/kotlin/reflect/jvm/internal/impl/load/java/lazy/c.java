package kotlin.reflect.jvm.internal.impl.load.java.lazy;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final LazyJavaAnnotations f32934d;

    public c(LazyJavaAnnotations lazyJavaAnnotations) {
        this.f32934d = lazyJavaAnnotations;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        AnnotationDescriptor c10;
        c10 = LazyJavaAnnotations.c(this.f32934d, (JavaAnnotation) obj);
        return c10;
    }
}
