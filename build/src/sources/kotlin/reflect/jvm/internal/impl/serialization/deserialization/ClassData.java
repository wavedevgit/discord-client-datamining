package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.BinaryVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ClassData {

    /* renamed from: a  reason: collision with root package name */
    private final NameResolver f35557a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f35558b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f35559c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f35560d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f35557a = nameResolver;
        this.f35558b = classProto;
        this.f35559c = metadataVersion;
        this.f35560d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f35557a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f35558b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f35559c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f35560d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f35557a, classData.f35557a) && Intrinsics.areEqual(this.f35558b, classData.f35558b) && Intrinsics.areEqual(this.f35559c, classData.f35559c) && Intrinsics.areEqual(this.f35560d, classData.f35560d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f35557a.hashCode() * 31) + this.f35558b.hashCode()) * 31) + this.f35559c.hashCode()) * 31) + this.f35560d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f35557a + ", classProto=" + this.f35558b + ", metadataVersion=" + this.f35559c + ", sourceElement=" + this.f35560d + ')';
    }
}
