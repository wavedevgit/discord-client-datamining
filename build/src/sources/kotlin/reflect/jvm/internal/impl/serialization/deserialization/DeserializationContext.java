package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.BinaryVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.VersionRequirementTable;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.VersionSpecificBehaviorKt;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedContainerSource;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DeserializationContext {

    /* renamed from: a  reason: collision with root package name */
    private final DeserializationComponents f34072a;

    /* renamed from: b  reason: collision with root package name */
    private final NameResolver f34073b;

    /* renamed from: c  reason: collision with root package name */
    private final DeclarationDescriptor f34074c;

    /* renamed from: d  reason: collision with root package name */
    private final TypeTable f34075d;

    /* renamed from: e  reason: collision with root package name */
    private final VersionRequirementTable f34076e;

    /* renamed from: f  reason: collision with root package name */
    private final BinaryVersion f34077f;

    /* renamed from: g  reason: collision with root package name */
    private final DeserializedContainerSource f34078g;

    /* renamed from: h  reason: collision with root package name */
    private final TypeDeserializer f34079h;

    /* renamed from: i  reason: collision with root package name */
    private final MemberDeserializer f34080i;

    public DeserializationContext(@NotNull DeserializationComponents components, @NotNull NameResolver nameResolver, @NotNull DeclarationDescriptor containingDeclaration, @NotNull TypeTable typeTable, @NotNull VersionRequirementTable versionRequirementTable, @NotNull BinaryVersion metadataVersion, DeserializedContainerSource deserializedContainerSource, TypeDeserializer typeDeserializer, @NotNull List<ProtoBuf.TypeParameter> typeParameters) {
        Intrinsics.checkNotNullParameter(components, "components");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(containingDeclaration, "containingDeclaration");
        Intrinsics.checkNotNullParameter(typeTable, "typeTable");
        Intrinsics.checkNotNullParameter(versionRequirementTable, "versionRequirementTable");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(typeParameters, "typeParameters");
        this.f34072a = components;
        this.f34073b = nameResolver;
        this.f34074c = containingDeclaration;
        this.f34075d = typeTable;
        this.f34076e = versionRequirementTable;
        this.f34077f = metadataVersion;
        this.f34078g = deserializedContainerSource;
        this.f34079h = new TypeDeserializer(this, typeDeserializer, typeParameters, "Deserializer for \"" + containingDeclaration.getName() + '\"', (deserializedContainerSource == null || (r3 = deserializedContainerSource.getPresentableString()) == null) ? "[container not found]" : "[container not found]");
        this.f34080i = new MemberDeserializer(this);
    }

    public static /* synthetic */ DeserializationContext childContext$default(DeserializationContext deserializationContext, DeclarationDescriptor declarationDescriptor, List list, NameResolver nameResolver, TypeTable typeTable, VersionRequirementTable versionRequirementTable, BinaryVersion binaryVersion, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            nameResolver = deserializationContext.f34073b;
        }
        NameResolver nameResolver2 = nameResolver;
        if ((i10 & 8) != 0) {
            typeTable = deserializationContext.f34075d;
        }
        TypeTable typeTable2 = typeTable;
        if ((i10 & 16) != 0) {
            versionRequirementTable = deserializationContext.f34076e;
        }
        VersionRequirementTable versionRequirementTable2 = versionRequirementTable;
        if ((i10 & 32) != 0) {
            binaryVersion = deserializationContext.f34077f;
        }
        return deserializationContext.childContext(declarationDescriptor, list, nameResolver2, typeTable2, versionRequirementTable2, binaryVersion);
    }

    @NotNull
    public final DeserializationContext childContext(@NotNull DeclarationDescriptor descriptor, @NotNull List<ProtoBuf.TypeParameter> typeParameterProtos, @NotNull NameResolver nameResolver, @NotNull TypeTable typeTable, @NotNull VersionRequirementTable versionRequirementTable, @NotNull BinaryVersion metadataVersion) {
        VersionRequirementTable versionRequirementTable2;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(typeParameterProtos, "typeParameterProtos");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(typeTable, "typeTable");
        Intrinsics.checkNotNullParameter(versionRequirementTable, "versionRequirementTable");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        DeserializationComponents deserializationComponents = this.f34072a;
        if (VersionSpecificBehaviorKt.isVersionRequirementTableWrittenCorrectly(metadataVersion)) {
            versionRequirementTable2 = versionRequirementTable;
        } else {
            versionRequirementTable2 = this.f34076e;
        }
        return new DeserializationContext(deserializationComponents, nameResolver, descriptor, typeTable, versionRequirementTable2, metadataVersion, this.f34078g, this.f34079h, typeParameterProtos);
    }

    @NotNull
    public final DeserializationComponents getComponents() {
        return this.f34072a;
    }

    public final DeserializedContainerSource getContainerSource() {
        return this.f34078g;
    }

    @NotNull
    public final DeclarationDescriptor getContainingDeclaration() {
        return this.f34074c;
    }

    @NotNull
    public final MemberDeserializer getMemberDeserializer() {
        return this.f34080i;
    }

    @NotNull
    public final NameResolver getNameResolver() {
        return this.f34073b;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f34072a.getStorageManager();
    }

    @NotNull
    public final TypeDeserializer getTypeDeserializer() {
        return this.f34079h;
    }

    @NotNull
    public final TypeTable getTypeTable() {
        return this.f34075d;
    }

    @NotNull
    public final VersionRequirementTable getVersionRequirementTable() {
        return this.f34076e;
    }
}
