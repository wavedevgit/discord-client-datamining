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
    private final Type f32685a;

    /* renamed from: b  reason: collision with root package name */
    private final ReflectJavaType f32686b;

    /* renamed from: c  reason: collision with root package name */
    private final Collection f32687c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f32688d;

    public ReflectJavaArrayType(@NotNull Type reflectType) {
        ReflectJavaType create;
        Intrinsics.checkNotNullParameter(reflectType, "reflectType");
        this.f32685a = reflectType;
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
        this.f32686b = create;
        this.f32687c = CollectionsKt.l();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationOwner
    @NotNull
    public Collection<JavaAnnotation> getAnnotations() {
        return this.f32687c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaType
    protected Type getReflectType() {
        return this.f32685a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationOwner
    public boolean isDeprecatedInJavaDoc() {
        return this.f32688d;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaArrayType
    @NotNull
    public ReflectJavaType getComponentType() {
        return this.f32686b;
    }
}
