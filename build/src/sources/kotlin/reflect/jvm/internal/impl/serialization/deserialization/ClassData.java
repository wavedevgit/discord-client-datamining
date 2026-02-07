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
    private final NameResolver f34331a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f34332b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f34333c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f34334d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f34331a = nameResolver;
        this.f34332b = classProto;
        this.f34333c = metadataVersion;
        this.f34334d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f34331a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f34332b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f34333c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f34334d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f34331a, classData.f34331a) && Intrinsics.areEqual(this.f34332b, classData.f34332b) && Intrinsics.areEqual(this.f34333c, classData.f34333c) && Intrinsics.areEqual(this.f34334d, classData.f34334d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f34331a.hashCode() * 31) + this.f34332b.hashCode()) * 31) + this.f34333c.hashCode()) * 31) + this.f34334d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f34331a + ", classProto=" + this.f34332b + ", metadataVersion=" + this.f34333c + ", sourceElement=" + this.f34334d + ')';
    }
}
