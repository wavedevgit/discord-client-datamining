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
    private final NameResolver f34262a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f34263b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f34264c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f34265d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f34262a = nameResolver;
        this.f34263b = classProto;
        this.f34264c = metadataVersion;
        this.f34265d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f34262a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f34263b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f34264c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f34265d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f34262a, classData.f34262a) && Intrinsics.areEqual(this.f34263b, classData.f34263b) && Intrinsics.areEqual(this.f34264c, classData.f34264c) && Intrinsics.areEqual(this.f34265d, classData.f34265d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f34262a.hashCode() * 31) + this.f34263b.hashCode()) * 31) + this.f34264c.hashCode()) * 31) + this.f34265d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f34262a + ", classProto=" + this.f34263b + ", metadataVersion=" + this.f34264c + ", sourceElement=" + this.f34265d + ')';
    }
}
