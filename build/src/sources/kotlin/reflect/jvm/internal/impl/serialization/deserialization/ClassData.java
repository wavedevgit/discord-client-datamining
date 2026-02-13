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
    private final NameResolver f34831a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f34832b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f34833c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f34834d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f34831a = nameResolver;
        this.f34832b = classProto;
        this.f34833c = metadataVersion;
        this.f34834d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f34831a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f34832b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f34833c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f34834d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f34831a, classData.f34831a) && Intrinsics.areEqual(this.f34832b, classData.f34832b) && Intrinsics.areEqual(this.f34833c, classData.f34833c) && Intrinsics.areEqual(this.f34834d, classData.f34834d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f34831a.hashCode() * 31) + this.f34832b.hashCode()) * 31) + this.f34833c.hashCode()) * 31) + this.f34834d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f34831a + ", classProto=" + this.f34832b + ", metadataVersion=" + this.f34833c + ", sourceElement=" + this.f34834d + ')';
    }
}
