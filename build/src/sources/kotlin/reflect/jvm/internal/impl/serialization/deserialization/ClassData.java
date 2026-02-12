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
    private final NameResolver f34263a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f34264b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f34265c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f34266d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f34263a = nameResolver;
        this.f34264b = classProto;
        this.f34265c = metadataVersion;
        this.f34266d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f34263a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f34264b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f34265c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f34266d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f34263a, classData.f34263a) && Intrinsics.areEqual(this.f34264b, classData.f34264b) && Intrinsics.areEqual(this.f34265c, classData.f34265c) && Intrinsics.areEqual(this.f34266d, classData.f34266d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f34263a.hashCode() * 31) + this.f34264b.hashCode()) * 31) + this.f34265c.hashCode()) * 31) + this.f34266d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f34263a + ", classProto=" + this.f34264b + ", metadataVersion=" + this.f34265c + ", sourceElement=" + this.f34266d + ')';
    }
}
