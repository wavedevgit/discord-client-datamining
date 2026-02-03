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
    private final NameResolver f34739a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f34740b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f34741c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f34742d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f34739a = nameResolver;
        this.f34740b = classProto;
        this.f34741c = metadataVersion;
        this.f34742d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f34739a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f34740b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f34741c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f34742d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f34739a, classData.f34739a) && Intrinsics.areEqual(this.f34740b, classData.f34740b) && Intrinsics.areEqual(this.f34741c, classData.f34741c) && Intrinsics.areEqual(this.f34742d, classData.f34742d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f34739a.hashCode() * 31) + this.f34740b.hashCode()) * 31) + this.f34741c.hashCode()) * 31) + this.f34742d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f34739a + ", classProto=" + this.f34740b + ", metadataVersion=" + this.f34741c + ", sourceElement=" + this.f34742d + ')';
    }
}
