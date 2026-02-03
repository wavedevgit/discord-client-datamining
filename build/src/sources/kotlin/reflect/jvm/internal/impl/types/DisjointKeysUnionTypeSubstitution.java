package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DisjointKeysUnionTypeSubstitution extends TypeSubstitution {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final TypeSubstitution f35018a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeSubstitution f35019b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final TypeSubstitution create(@NotNull TypeSubstitution first, @NotNull TypeSubstitution second) {
            Intrinsics.checkNotNullParameter(first, "first");
            Intrinsics.checkNotNullParameter(second, "second");
            if (first.isEmpty()) {
                return second;
            }
            if (second.isEmpty()) {
                return first;
            }
            return new DisjointKeysUnionTypeSubstitution(first, second, null);
        }

        private Companion() {
        }
    }

    public /* synthetic */ DisjointKeysUnionTypeSubstitution(TypeSubstitution typeSubstitution, TypeSubstitution typeSubstitution2, DefaultConstructorMarker defaultConstructorMarker) {
        this(typeSubstitution, typeSubstitution2);
    }

    @NotNull
    public static final TypeSubstitution create(@NotNull TypeSubstitution typeSubstitution, @NotNull TypeSubstitution typeSubstitution2) {
        return Companion.create(typeSubstitution, typeSubstitution2);
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    public boolean approximateCapturedTypes() {
        if (!this.f35018a.approximateCapturedTypes() && !this.f35019b.approximateCapturedTypes()) {
            return false;
        }
        return true;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    public boolean approximateContravariantCapturedTypes() {
        if (!this.f35018a.approximateContravariantCapturedTypes() && !this.f35019b.approximateContravariantCapturedTypes()) {
            return false;
        }
        return true;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    @NotNull
    public Annotations filterAnnotations(@NotNull Annotations annotations) {
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        return this.f35019b.filterAnnotations(this.f35018a.filterAnnotations(annotations));
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    /* renamed from: get */
    public TypeProjection mo1200get(@NotNull KotlinType key) {
        Intrinsics.checkNotNullParameter(key, "key");
        TypeProjection mo1200get = this.f35018a.mo1200get(key);
        if (mo1200get == null) {
            return this.f35019b.mo1200get(key);
        }
        return mo1200get;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    public boolean isEmpty() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.TypeSubstitution
    @NotNull
    public KotlinType prepareTopLevelType(@NotNull KotlinType topLevelType, @NotNull Variance position) {
        Intrinsics.checkNotNullParameter(topLevelType, "topLevelType");
        Intrinsics.checkNotNullParameter(position, "position");
        return this.f35019b.prepareTopLevelType(this.f35018a.prepareTopLevelType(topLevelType, position), position);
    }

    private DisjointKeysUnionTypeSubstitution(TypeSubstitution typeSubstitution, TypeSubstitution typeSubstitution2) {
        this.f35018a = typeSubstitution;
        this.f35019b = typeSubstitution2;
    }
}
