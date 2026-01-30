package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceFile;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.IncompatibleVersionErrorData;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedContainerAbiStability;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedContainerSource;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class KotlinJvmBinarySourceElement implements DeserializedContainerSource {

    /* renamed from: a  reason: collision with root package name */
    private final KotlinJvmBinaryClass f34533a;

    /* renamed from: b  reason: collision with root package name */
    private final IncompatibleVersionErrorData f34534b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f34535c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedContainerAbiStability f34536d;

    public KotlinJvmBinarySourceElement(@NotNull KotlinJvmBinaryClass binaryClass, IncompatibleVersionErrorData<MetadataVersion> incompatibleVersionErrorData, boolean z10, @NotNull DeserializedContainerAbiStability abiStability) {
        Intrinsics.checkNotNullParameter(binaryClass, "binaryClass");
        Intrinsics.checkNotNullParameter(abiStability, "abiStability");
        this.f34533a = binaryClass;
        this.f34534b = incompatibleVersionErrorData;
        this.f34535c = z10;
        this.f34536d = abiStability;
    }

    @NotNull
    public final KotlinJvmBinaryClass getBinaryClass() {
        return this.f34533a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.SourceElement
    @NotNull
    public SourceFile getContainingFile() {
        SourceFile NO_SOURCE_FILE = SourceFile.NO_SOURCE_FILE;
        Intrinsics.checkNotNullExpressionValue(NO_SOURCE_FILE, "NO_SOURCE_FILE");
        return NO_SOURCE_FILE;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedContainerSource
    @NotNull
    public String getPresentableString() {
        return "Class '" + this.f34533a.getClassId().asSingleFqName().asString() + '\'';
    }

    @NotNull
    public String toString() {
        return KotlinJvmBinarySourceElement.class.getSimpleName() + ": " + this.f34533a;
    }
}
