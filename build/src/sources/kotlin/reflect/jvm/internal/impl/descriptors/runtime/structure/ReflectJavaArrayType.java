package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import java.lang.reflect.GenericArrayType;
import java.lang.reflect.Type;
import java.util.Collection;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaType;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaArrayType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReflectJavaArrayType extends ReflectJavaType implements JavaArrayType {

    /* renamed from: a  reason: collision with root package name */
    private final Type f33093a;

    /* renamed from: b  reason: collision with root package name */
    private final ReflectJavaType f33094b;

    /* renamed from: c  reason: collision with root package name */
    private final Collection f33095c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f33096d;

    public ReflectJavaArrayType(@NotNull Type reflectType) {
        ReflectJavaType create;
        Intrinsics.checkNotNullParameter(reflectType, "reflectType");
        this.f33093a = reflectType;
        Type reflectType2 = getReflectType();
        if (reflectType2 instanceof GenericArrayType) {
            ReflectJavaType.Factory factory = ReflectJavaType.Factory;
            Type genericComponentType = ((GenericArrayType) reflectType2).getGenericComponentType();
            Intrinsics.checkNotNullExpressionValue(genericComponentType, "getGenericComponentType(...)");
            create = factory.create(genericComponentType);
        } else {
            if (reflectType2 instanceof Class) {
                Class cls = (Class) reflectType2;
                if (cls.isArray()) {
                    ReflectJavaType.Factory factory2 = ReflectJavaType.Factory;
                    Class<?> componentType = cls.getComponentType();
                    Intrinsics.checkNotNullExpressionValue(componentType, "getComponentType(...)");
                    create = factory2.create(componentType);
                }
            }
            throw new IllegalArgumentException("Not an array type (" + getReflectType().getClass() + "): " + getReflectType());
        }
        this.f33094b = create;
        this.f33095c = CollectionsKt.l();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationOwner
    @NotNull
    public Collection<JavaAnnotation> getAnnotations() {
        return this.f33095c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaType
    protected Type getReflectType() {
        return this.f33093a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationOwner
    public boolean isDeprecatedInJavaDoc() {
        return this.f33096d;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaArrayType
    @NotNull
    public ReflectJavaType getComponentType() {
        return this.f33094b;
    }
}
