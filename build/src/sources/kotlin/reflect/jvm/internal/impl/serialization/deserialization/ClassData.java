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
    private final NameResolver f34283a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f34284b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f34285c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f34286d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f34283a = nameResolver;
        this.f34284b = classProto;
        this.f34285c = metadataVersion;
        this.f34286d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f34283a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f34284b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f34285c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f34286d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f34283a, classData.f34283a) && Intrinsics.areEqual(this.f34284b, classData.f34284b) && Intrinsics.areEqual(this.f34285c, classData.f34285c) && Intrinsics.areEqual(this.f34286d, classData.f34286d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f34283a.hashCode() * 31) + this.f34284b.hashCode()) * 31) + this.f34285c.hashCode()) * 31) + this.f34286d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f34283a + ", classProto=" + this.f34284b + ", metadataVersion=" + this.f34285c + ", sourceElement=" + this.f34286d + ')';
    }
}
