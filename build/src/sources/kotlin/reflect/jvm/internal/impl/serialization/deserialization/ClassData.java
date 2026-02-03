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
    private final NameResolver f35349a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f35350b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f35351c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f35352d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f35349a = nameResolver;
        this.f35350b = classProto;
        this.f35351c = metadataVersion;
        this.f35352d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f35349a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f35350b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f35351c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f35352d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f35349a, classData.f35349a) && Intrinsics.areEqual(this.f35350b, classData.f35350b) && Intrinsics.areEqual(this.f35351c, classData.f35351c) && Intrinsics.areEqual(this.f35352d, classData.f35352d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f35349a.hashCode() * 31) + this.f35350b.hashCode()) * 31) + this.f35351c.hashCode()) * 31) + this.f35352d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f35349a + ", classProto=" + this.f35350b + ", metadataVersion=" + this.f35351c + ", sourceElement=" + this.f35352d + ')';
    }
}
