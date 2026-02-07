package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.ArrayList;
import java.util.Collection;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.BinaryVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolverImpl;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedContainerSource;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPackageMemberScope;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nDeserializedPackageFragmentImpl.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DeserializedPackageFragmentImpl.kt\norg/jetbrains/kotlin/serialization/deserialization/DeserializedPackageFragmentImpl\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,63:1\n774#2:64\n865#2,2:65\n1563#2:67\n1634#2,3:68\n*S KotlinDebug\n*F\n+ 1 DeserializedPackageFragmentImpl.kt\norg/jetbrains/kotlin/serialization/deserialization/DeserializedPackageFragmentImpl\n*L\n54#1:64\n54#1:65,2\n56#1:67\n56#1:68,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class DeserializedPackageFragmentImpl extends DeserializedPackageFragment {

    /* renamed from: s  reason: collision with root package name */
    private final BinaryVersion f34374s;

    /* renamed from: t  reason: collision with root package name */
    private final DeserializedContainerSource f34375t;

    /* renamed from: u  reason: collision with root package name */
    private final NameResolverImpl f34376u;

    /* renamed from: v  reason: collision with root package name */
    private final ProtoBasedClassDataFinder f34377v;

    /* renamed from: w  reason: collision with root package name */
    private ProtoBuf.PackageFragment f34378w;

    /* renamed from: x  reason: collision with root package name */
    private MemberScope f34379x;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public DeserializedPackageFragmentImpl(@NotNull FqName fqName, @NotNull StorageManager storageManager, @NotNull ModuleDescriptor module, @NotNull ProtoBuf.PackageFragment proto, @NotNull BinaryVersion metadataVersion, DeserializedContainerSource deserializedContainerSource) {
        super(fqName, storageManager, module);
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        Intrinsics.checkNotNullParameter(storageManager, "storageManager");
        Intrinsics.checkNotNullParameter(module, "module");
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
        this.f34374s = metadataVersion;
        this.f34375t = deserializedContainerSource;
        ProtoBuf.StringTable strings = proto.getStrings();
        Intrinsics.checkNotNullExpressionValue(strings, "getStrings(...)");
        ProtoBuf.QualifiedNameTable qualifiedNames = proto.getQualifiedNames();
        Intrinsics.checkNotNullExpressionValue(qualifiedNames, "getQualifiedNames(...)");
        NameResolverImpl nameResolverImpl = new NameResolverImpl(strings, qualifiedNames);
        this.f34376u = nameResolverImpl;
        this.f34377v = new ProtoBasedClassDataFinder(proto, nameResolverImpl, metadataVersion, new c(this));
        this.f34378w = proto;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SourceElement d(DeserializedPackageFragmentImpl deserializedPackageFragmentImpl, ClassId it) {
        Intrinsics.checkNotNullParameter(it, "it");
        DeserializedContainerSource deserializedContainerSource = deserializedPackageFragmentImpl.f34375t;
        if (deserializedContainerSource != null) {
            return deserializedContainerSource;
        }
        SourceElement NO_SOURCE = SourceElement.NO_SOURCE;
        Intrinsics.checkNotNullExpressionValue(NO_SOURCE, "NO_SOURCE");
        return NO_SOURCE;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection e(DeserializedPackageFragmentImpl deserializedPackageFragmentImpl) {
        ArrayList<ClassId> arrayList = new ArrayList();
        for (Object obj : deserializedPackageFragmentImpl.getClassDataFinder().getAllClassIds()) {
            ClassId classId = (ClassId) obj;
            if (!classId.isNestedClass() && !ClassDeserializer.Companion.getBLACK_LIST().contains(classId)) {
                arrayList.add(obj);
            }
        }
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (ClassId classId2 : arrayList) {
            arrayList2.add(classId2.getShortClassName());
        }
        return arrayList2;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor
    @NotNull
    public MemberScope getMemberScope() {
        MemberScope memberScope = this.f34379x;
        if (memberScope == null) {
            Intrinsics.throwUninitializedPropertyAccessException("_memberScope");
            return null;
        }
        return memberScope;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializedPackageFragment
    public void initialize(@NotNull DeserializationComponents components) {
        Intrinsics.checkNotNullParameter(components, "components");
        ProtoBuf.PackageFragment packageFragment = this.f34378w;
        if (packageFragment != null) {
            this.f34378w = null;
            ProtoBuf.Package r42 = packageFragment.getPackage();
            Intrinsics.checkNotNullExpressionValue(r42, "getPackage(...)");
            NameResolverImpl nameResolverImpl = this.f34376u;
            BinaryVersion binaryVersion = this.f34374s;
            DeserializedContainerSource deserializedContainerSource = this.f34375t;
            this.f34379x = new DeserializedPackageMemberScope(this, r42, nameResolverImpl, binaryVersion, deserializedContainerSource, components, "scope of " + this, new d(this));
            return;
        }
        throw new IllegalStateException("Repeated call to DeserializedPackageFragmentImpl::initialize");
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializedPackageFragment
    @NotNull
    public ProtoBasedClassDataFinder getClassDataFinder() {
        return this.f34377v;
    }
}
