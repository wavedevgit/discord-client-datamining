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
    private final NameResolver f34040a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f34041b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f34042c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f34043d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f34040a = nameResolver;
        this.f34041b = classProto;
        this.f34042c = metadataVersion;
        this.f34043d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f34040a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f34041b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f34042c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f34043d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f34040a, classData.f34040a) && Intrinsics.areEqual(this.f34041b, classData.f34041b) && Intrinsics.areEqual(this.f34042c, classData.f34042c) && Intrinsics.areEqual(this.f34043d, classData.f34043d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f34040a.hashCode() * 31) + this.f34041b.hashCode()) * 31) + this.f34042c.hashCode()) * 31) + this.f34043d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f34040a + ", classProto=" + this.f34041b + ", metadataVersion=" + this.f34042c + ", sourceElement=" + this.f34043d + ')';
    }
}
