package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ClassData;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ClassDataFinder;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaClassDataFinder implements ClassDataFinder {

    /* renamed from: a  reason: collision with root package name */
    private final KotlinClassFinder f33263a;

    /* renamed from: b  reason: collision with root package name */
    private final DeserializedDescriptorResolver f33264b;

    public JavaClassDataFinder(@NotNull KotlinClassFinder kotlinClassFinder, @NotNull DeserializedDescriptorResolver deserializedDescriptorResolver) {
        Intrinsics.checkNotNullParameter(kotlinClassFinder, "kotlinClassFinder");
        Intrinsics.checkNotNullParameter(deserializedDescriptorResolver, "deserializedDescriptorResolver");
        this.f33263a = kotlinClassFinder;
        this.f33264b = deserializedDescriptorResolver;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.ClassDataFinder
    public ClassData findClassData(@NotNull ClassId classId) {
        Intrinsics.checkNotNullParameter(classId, "classId");
        KotlinJvmBinaryClass findKotlinClass = KotlinClassFinderKt.findKotlinClass(this.f33263a, classId, this.f33264b.getComponents().getConfiguration().getMetadataVersion());
        if (findKotlinClass == null) {
            return null;
        }
        Intrinsics.areEqual(findKotlinClass.getClassId(), classId);
        return this.f33264b.readClassData$descriptors_jvm(findKotlinClass);
    }
}
