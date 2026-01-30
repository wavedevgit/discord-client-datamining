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
    private final NameResolver f35573a;

    /* renamed from: b  reason: collision with root package name */
    private final ProtoBuf.Class f35574b;

    /* renamed from: c  reason: collision with root package name */
    private final BinaryVersion f35575c;

    /* renamed from: d  reason: collision with root package name */
    private final SourceElement f35576d;

    public ClassData(@NotNull NameResolver nameResolver, @NotNull ProtoBuf.Class classProto, @NotNull BinaryVersion metadataVersion, @NotNull SourceElement sourceElement) {
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(classProto, "classProto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(sourceElement, "sourceElement");
        this.f35573a = nameResolver;
        this.f35574b = classProto;
        this.f35575c = metadataVersion;
        this.f35576d = sourceElement;
    }

    @NotNull
    public final NameResolver component1() {
        return this.f35573a;
    }

    @NotNull
    public final ProtoBuf.Class component2() {
        return this.f35574b;
    }

    @NotNull
    public final BinaryVersion component3() {
        return this.f35575c;
    }

    @NotNull
    public final SourceElement component4() {
        return this.f35576d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ClassData) {
            ClassData classData = (ClassData) obj;
            return Intrinsics.areEqual(this.f35573a, classData.f35573a) && Intrinsics.areEqual(this.f35574b, classData.f35574b) && Intrinsics.areEqual(this.f35575c, classData.f35575c) && Intrinsics.areEqual(this.f35576d, classData.f35576d);
        }
        return false;
    }

    public int hashCode() {
        return (((((this.f35573a.hashCode() * 31) + this.f35574b.hashCode()) * 31) + this.f35575c.hashCode()) * 31) + this.f35576d.hashCode();
    }

    @NotNull
    public String toString() {
        return "ClassData(nameResolver=" + this.f35573a + ", classProto=" + this.f35574b + ", metadataVersion=" + this.f35575c + ", sourceElement=" + this.f35576d + ')';
    }
}
