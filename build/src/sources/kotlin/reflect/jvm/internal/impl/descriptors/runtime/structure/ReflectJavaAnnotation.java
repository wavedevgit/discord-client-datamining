package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collection;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nReflectJavaAnnotation.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReflectJavaAnnotation.kt\norg/jetbrains/kotlin/descriptors/runtime/structure/ReflectJavaAnnotation\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,43:1\n11228#2:44\n11563#2,3:45\n*S KotlinDebug\n*F\n+ 1 ReflectJavaAnnotation.kt\norg/jetbrains/kotlin/descriptors/runtime/structure/ReflectJavaAnnotation\n*L\n26#1:44\n26#1:45,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReflectJavaAnnotation extends ReflectJavaElement implements JavaAnnotation {

    /* renamed from: a  reason: collision with root package name */
    private final Annotation f32613a;

    public ReflectJavaAnnotation(@NotNull Annotation annotation) {
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        this.f32613a = annotation;
    }

    public boolean equals(Object obj) {
        if ((obj instanceof ReflectJavaAnnotation) && this.f32613a == ((ReflectJavaAnnotation) obj).f32613a) {
            return true;
        }
        return false;
    }

    @NotNull
    public final Annotation getAnnotation() {
        return this.f32613a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation
    @NotNull
    public Collection<JavaAnnotationArgument> getArguments() {
        Method[] declaredMethods = bs.a.b(bs.a.a(this.f32613a)).getDeclaredMethods();
        Intrinsics.checkNotNullExpressionValue(declaredMethods, "getDeclaredMethods(...)");
        ArrayList arrayList = new ArrayList(declaredMethods.length);
        for (Method method : declaredMethods) {
            ReflectJavaAnnotationArgument.Factory factory = ReflectJavaAnnotationArgument.Factory;
            Object invoke = method.invoke(this.f32613a, null);
            Intrinsics.checkNotNullExpressionValue(invoke, "invoke(...)");
            arrayList.add(factory.create(invoke, Name.identifier(method.getName())));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation
    @NotNull
    public ClassId getClassId() {
        return ReflectClassUtilKt.getClassId(bs.a.b(bs.a.a(this.f32613a)));
    }

    public int hashCode() {
        return System.identityHashCode(this.f32613a);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation
    public boolean isFreshlySupportedTypeUseAnnotation() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation
    public boolean isIdeExternalAnnotation() {
        return false;
    }

    @NotNull
    public String toString() {
        return ReflectJavaAnnotation.class.getName() + ": " + this.f32613a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation
    @NotNull
    public ReflectJavaClass resolve() {
        return new ReflectJavaClass(bs.a.b(bs.a.a(this.f32613a)));
    }
}
