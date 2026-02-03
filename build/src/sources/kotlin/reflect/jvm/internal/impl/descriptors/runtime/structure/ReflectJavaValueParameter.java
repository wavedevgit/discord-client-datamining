package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import java.lang.annotation.Annotation;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaValueParameter;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nReflectJavaValueParameter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReflectJavaValueParameter.kt\norg/jetbrains/kotlin/descriptors/runtime/structure/ReflectJavaValueParameter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,46:1\n1#2:47\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReflectJavaValueParameter extends ReflectJavaElement implements JavaValueParameter {

    /* renamed from: a  reason: collision with root package name */
    private final ReflectJavaType f33117a;

    /* renamed from: b  reason: collision with root package name */
    private final Annotation[] f33118b;

    /* renamed from: c  reason: collision with root package name */
    private final String f33119c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f33120d;

    public ReflectJavaValueParameter(@NotNull ReflectJavaType type, @NotNull Annotation[] reflectAnnotations, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(reflectAnnotations, "reflectAnnotations");
        this.f33117a = type;
        this.f33118b = reflectAnnotations;
        this.f33119c = str;
        this.f33120d = z10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaValueParameter
    public Name getName() {
        String str = this.f33119c;
        if (str != null) {
            return Name.guessByFirstCharacter(str);
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationOwner
    public boolean isDeprecatedInJavaDoc() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaValueParameter
    public boolean isVararg() {
        return this.f33120d;
    }

    @NotNull
    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(ReflectJavaValueParameter.class.getName());
        sb2.append(": ");
        if (isVararg()) {
            str = "vararg ";
        } else {
            str = "";
        }
        sb2.append(str);
        sb2.append(getName());
        sb2.append(": ");
        sb2.append(getType());
        return sb2.toString();
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationOwner
    public ReflectJavaAnnotation findAnnotation(@NotNull FqName fqName) {
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        return ReflectJavaAnnotationOwnerKt.findAnnotation(this.f33118b, fqName);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationOwner
    @NotNull
    public List<ReflectJavaAnnotation> getAnnotations() {
        return ReflectJavaAnnotationOwnerKt.getAnnotations(this.f33118b);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaValueParameter
    @NotNull
    public ReflectJavaType getType() {
        return this.f33117a;
    }
}
