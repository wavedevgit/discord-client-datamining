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
    private final DeserializationComponents f35605a;

    /* renamed from: b  reason: collision with root package name */
    private final NameResolver f35606b;

    /* renamed from: c  reason: collision with root package name */
    private final DeclarationDescriptor f35607c;

    /* renamed from: d  reason: collision with root package name */
    private final TypeTable f35608d;

    /* renamed from: e  reason: collision with root package name */
    private final VersionRequirementTable f35609e;

    /* renamed from: f  reason: collision with root package name */
    private final BinaryVersion f35610f;

    /* renamed from: g  reason: collision with root package name */
    private final DeserializedContainerSource f35611g;

    /* renamed from: h  reason: collision with root package name */
    private final TypeDeserializer f35612h;

    /* renamed from: i  reason: collision with root package name */
    private final MemberDeserializer f35613i;

    public DeserializationContext(@NotNull DeserializationComponents components, @NotNull NameResolver nameResolver, @NotNull DeclarationDescriptor containingDeclaration, @NotNull TypeTable typeTable, @NotNull VersionRequirementTable versionRequirementTable, @NotNull BinaryVersion metadataVersion, DeserializedContainerSource deserializedContainerSource, TypeDeserializer typeDeserializer, @NotNull List<ProtoBuf.TypeParameter> typeParameters) {
        Intrinsics.checkNotNullParameter(components, "components");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(containingDeclaration, "containingDeclaration");
        Intrinsics.checkNotNullParameter(typeTable, "typeTable");
        Intrinsics.checkNotNullParameter(versionRequirementTable, "versionRequirementTable");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        Intrinsics.checkNotNullParameter(typeParameters, "typeParameters");
        this.f35605a = components;
        this.f35606b = nameResolver;
        this.f35607c = containingDeclaration;
        this.f35608d = typeTable;
        this.f35609e = versionRequirementTable;
        this.f35610f = metadataVersion;
        this.f35611g = deserializedContainerSource;
        this.f35612h = new TypeDeserializer(this, typeDeserializer, typeParameters, "Deserializer for \"" + containingDeclaration.getName() + '\"', (deserializedContainerSource == null || (r3 = deserializedContainerSource.getPresentableString()) == null) ? "[container not found]" : "[container not found]");
        this.f35613i = new MemberDeserializer(this);
    }

    public static /* synthetic */ DeserializationContext childContext$default(DeserializationContext deserializationContext, DeclarationDescriptor declarationDescriptor, List list, NameResolver nameResolver, TypeTable typeTable, VersionRequirementTable versionRequirementTable, BinaryVersion binaryVersion, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            nameResolver = deserializationContext.f35606b;
        }
        NameResolver nameResolver2 = nameResolver;
        if ((i10 & 8) != 0) {
            typeTable = deserializationContext.f35608d;
        }
        TypeTable typeTable2 = typeTable;
        if ((i10 & 16) != 0) {
            versionRequirementTable = deserializationContext.f35609e;
        }
        VersionRequirementTable versionRequirementTable2 = versionRequirementTable;
        if ((i10 & 32) != 0) {
            binaryVersion = deserializationContext.f35610f;
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
        DeserializationComponents deserializationComponents = this.f35605a;
        if (VersionSpecificBehaviorKt.isVersionRequirementTableWrittenCorrectly(metadataVersion)) {
            versionRequirementTable2 = versionRequirementTable;
        } else {
            versionRequirementTable2 = this.f35609e;
        }
        return new DeserializationContext(deserializationComponents, nameResolver, descriptor, typeTable, versionRequirementTable2, metadataVersion, this.f35611g, this.f35612h, typeParameterProtos);
    }

    @NotNull
    public final DeserializationComponents getComponents() {
        return this.f35605a;
    }

    public final DeserializedContainerSource getContainerSource() {
        return this.f35611g;
    }

    @NotNull
    public final DeclarationDescriptor getContainingDeclaration() {
        return this.f35607c;
    }

    @NotNull
    public final MemberDeserializer getMemberDeserializer() {
        return this.f35613i;
    }

    @NotNull
    public final NameResolver getNameResolver() {
        return this.f35606b;
    }

    @NotNull
    public final StorageManager getStorageManager() {
        return this.f35605a.getStorageManager();
    }

    @NotNull
    public final TypeDeserializer getTypeDeserializer() {
        return this.f35612h;
    }

    @NotNull
    public final TypeTable getTypeTable() {
        return this.f35608d;
    }

    @NotNull
    public final VersionRequirementTable getVersionRequirementTable() {
        return this.f35609e;
    }
}
