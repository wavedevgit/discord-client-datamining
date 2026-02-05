package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class DelegatedTypeSubstitution extends TypeSubstitution {

    /* renamed from: a  reason: collision with root package name */
    private final TypeSubstitution f34540a;

    public DelegatedTypeSubstitution(@NotNull TypeSubstitution substitution) {
        Intrinsics.checkNotNullParameter(substitution, "substitution");
        this.f34540a = substitution;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    public boolean approximateCapturedTypes() {
        return this.f34540a.approximateCapturedTypes();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    public boolean approximateContravariantCapturedTypes() {
        return this.f34540a.approximateContravariantCapturedTypes();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    @NotNull
    public Annotations filterAnnotations(@NotNull Annotations annotations) {
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        return this.f34540a.filterAnnotations(annotations);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    /* renamed from: get */
    public TypeProjection mo1202get(@NotNull KotlinType key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return this.f34540a.mo1202get(key);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    public boolean isEmpty() {
        return this.f34540a.isEmpty();
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    @NotNull
    public KotlinType prepareTopLevelType(@NotNull KotlinType topLevelType, @NotNull Variance position) {
        Intrinsics.checkNotNullParameter(topLevelType, "topLevelType");
        Intrinsics.checkNotNullParameter(position, "position");
        return this.f34540a.prepareTopLevelType(topLevelType, position);
    }
}
