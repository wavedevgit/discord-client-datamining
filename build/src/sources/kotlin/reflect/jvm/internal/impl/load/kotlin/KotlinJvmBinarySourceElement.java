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
    private final KotlinJvmBinaryClass f33223a;

    /* renamed from: b  reason: collision with root package name */
    private final IncompatibleVersionErrorData f33224b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f33225c;

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedContainerAbiStability f33226d;

    public KotlinJvmBinarySourceElement(@NotNull KotlinJvmBinaryClass binaryClass, IncompatibleVersionErrorData<MetadataVersion> incompatibleVersionErrorData, boolean z10, @NotNull DeserializedContainerAbiStability abiStability) {
        Intrinsics.checkNotNullParameter(binaryClass, "binaryClass");
        Intrinsics.checkNotNullParameter(abiStability, "abiStability");
        this.f33223a = binaryClass;
        this.f33224b = incompatibleVersionErrorData;
        this.f33225c = z10;
        this.f33226d = abiStability;
    }

    @NotNull
    public final KotlinJvmBinaryClass getBinaryClass() {
        return this.f33223a;
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
        return "Class '" + this.f33223a.getClassId().asSingleFqName().asString() + '\'';
    }

    @NotNull
    public String toString() {
        return KotlinJvmBinarySourceElement.class.getSimpleName() + ": " + this.f33223a;
    }
}
