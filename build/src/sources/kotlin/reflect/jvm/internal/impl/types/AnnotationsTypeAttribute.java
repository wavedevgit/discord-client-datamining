package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class AnnotationsTypeAttribute extends TypeAttribute<AnnotationsTypeAttribute> {

    /* renamed from: a  reason: collision with root package name */
    private final Annotations f35841a;

    public AnnotationsTypeAttribute(@NotNull Annotations annotations) {
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        this.f35841a = annotations;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof AnnotationsTypeAttribute)) {
            return false;
        }
        return Intrinsics.areEqual(((AnnotationsTypeAttribute) obj).f35841a, this.f35841a);
    }

    @NotNull
    public final Annotations getAnnotations() {
        return this.f35841a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeAttribute
    @NotNull
    public KClass getKey() {
        return Reflection.getOrCreateKotlinClass(AnnotationsTypeAttribute.class);
    }

    public int hashCode() {
        return this.f35841a.hashCode();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeAttribute
    @NotNull
    public AnnotationsTypeAttribute add(AnnotationsTypeAttribute annotationsTypeAttribute) {
        return annotationsTypeAttribute == null ? this : new AnnotationsTypeAttribute(AnnotationsKt.composeAnnotations(this.f35841a, annotationsTypeAttribute.f35841a));
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeAttribute
    public AnnotationsTypeAttribute intersect(AnnotationsTypeAttribute annotationsTypeAttribute) {
        if (Intrinsics.areEqual(annotationsTypeAttribute, this)) {
            return this;
        }
        return null;
    }
}
