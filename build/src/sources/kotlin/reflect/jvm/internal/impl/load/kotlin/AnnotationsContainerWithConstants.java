package kotlin.reflect.jvm.internal.impl.load.kotlin;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.load.kotlin.AbstractBinaryClassAnnotationLoader;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class AnnotationsContainerWithConstants<A, C> extends AbstractBinaryClassAnnotationLoader.AnnotationsContainer<A> {

    /* renamed from: a  reason: collision with root package name */
    private final Map f33636a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f33637b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f33638c;

    public AnnotationsContainerWithConstants(@NotNull Map<MemberSignature, ? extends List<? extends A>> memberAnnotations, @NotNull Map<MemberSignature, ? extends C> propertyConstants, @NotNull Map<MemberSignature, ? extends C> annotationParametersDefaultValues) {
        Intrinsics.checkNotNullParameter(memberAnnotations, "memberAnnotations");
        Intrinsics.checkNotNullParameter(propertyConstants, "propertyConstants");
        Intrinsics.checkNotNullParameter(annotationParametersDefaultValues, "annotationParametersDefaultValues");
        this.f33636a = memberAnnotations;
        this.f33637b = propertyConstants;
        this.f33638c = annotationParametersDefaultValues;
    }

    @NotNull
    public final Map<MemberSignature, C> getAnnotationParametersDefaultValues() {
        return this.f33638c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.AbstractBinaryClassAnnotationLoader.AnnotationsContainer
    @NotNull
    public Map<MemberSignature, List<A>> getMemberAnnotations() {
        return this.f33636a;
    }

    @NotNull
    public final Map<MemberSignature, C> getPropertyConstants() {
        return this.f33637b;
    }
}
