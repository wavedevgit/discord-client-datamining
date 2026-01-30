package kotlin.reflect.jvm.internal.impl.load.kotlin;

import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.load.kotlin.AbstractBinaryClassAnnotationLoader;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class AnnotationsContainerWithConstants<A, C> extends AbstractBinaryClassAnnotationLoader.AnnotationsContainer<A> {

    /* renamed from: a  reason: collision with root package name */
    private final Map f34470a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f34471b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f34472c;

    public AnnotationsContainerWithConstants(@NotNull Map<MemberSignature, ? extends List<? extends A>> memberAnnotations, @NotNull Map<MemberSignature, ? extends C> propertyConstants, @NotNull Map<MemberSignature, ? extends C> annotationParametersDefaultValues) {
        Intrinsics.checkNotNullParameter(memberAnnotations, "memberAnnotations");
        Intrinsics.checkNotNullParameter(propertyConstants, "propertyConstants");
        Intrinsics.checkNotNullParameter(annotationParametersDefaultValues, "annotationParametersDefaultValues");
        this.f34470a = memberAnnotations;
        this.f34471b = propertyConstants;
        this.f34472c = annotationParametersDefaultValues;
    }

    @NotNull
    public final Map<MemberSignature, C> getAnnotationParametersDefaultValues() {
        return this.f34472c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.AbstractBinaryClassAnnotationLoader.AnnotationsContainer
    @NotNull
    public Map<MemberSignature, List<A>> getMemberAnnotations() {
        return this.f34470a;
    }

    @NotNull
    public final Map<MemberSignature, C> getPropertyConstants() {
        return this.f34471b;
    }
}
