package kotlin.reflect.jvm.internal.impl.load.kotlin;

import java.util.Collection;
import java.util.Set;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.load.kotlin.header.KotlinClassHeader;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmNameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmProtoBufUtil;
import kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ClassData;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationComponents;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.IncompatibleVersionErrorData;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedContainerAbiStability;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPackageMemberScope;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nDeserializedDescriptorResolver.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DeserializedDescriptorResolver.kt\norg/jetbrains/kotlin/load/kotlin/DeserializedDescriptorResolver\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,152:1\n124#1,14:153\n124#1,14:167\n1#2:181\n*S KotlinDebug\n*F\n+ 1 DeserializedDescriptorResolver.kt\norg/jetbrains/kotlin/load/kotlin/DeserializedDescriptorResolver\n*L\n55#1:153,14\n67#1:167,14\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class DeserializedDescriptorResolver {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private static final Set f33190a = x0.c(KotlinClassHeader.Kind.CLASS);

    /* renamed from: b  reason: collision with root package name */
    private static final Set f33191b = x0.i(KotlinClassHeader.Kind.FILE_FACADE, KotlinClassHeader.Kind.MULTIFILE_CLASS_PART);

    /* renamed from: c  reason: collision with root package name */
    private static final MetadataVersion f33192c = new MetadataVersion(1, 1, 2);

    /* renamed from: d  reason: collision with root package name */
    private static final MetadataVersion f33193d = new MetadataVersion(1, 1, 11);

    /* renamed from: e  reason: collision with root package name */
    private static final MetadataVersion f33194e = new MetadataVersion(1, 1, 13);
    public DeserializationComponents components;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final MetadataVersion getKOTLIN_1_3_RC_METADATA_VERSION$descriptors_jvm() {
            return DeserializedDescriptorResolver.f33194e;
        }

        private Companion() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Collection b() {
        return CollectionsKt.l();
    }

    private final DeserializedContainerAbiStability c(KotlinJvmBinaryClass kotlinJvmBinaryClass) {
        if (getComponents().getConfiguration().getAllowUnstableDependencies()) {
            return DeserializedContainerAbiStability.STABLE;
        }
        if (kotlinJvmBinaryClass.getClassHeader().isUnstableJvmIrBinary()) {
            return DeserializedContainerAbiStability.UNSTABLE;
        }
        return DeserializedContainerAbiStability.STABLE;
    }

    private final IncompatibleVersionErrorData d(KotlinJvmBinaryClass kotlinJvmBinaryClass) {
        if (!f() && !kotlinJvmBinaryClass.getClassHeader().getMetadataVersion().isCompatible(e())) {
            return new IncompatibleVersionErrorData(kotlinJvmBinaryClass.getClassHeader().getMetadataVersion(), MetadataVersion.INSTANCE, e(), e().lastSupportedVersionWithThisLanguageVersion(kotlinJvmBinaryClass.getClassHeader().getMetadataVersion().isStrictSemantics()), kotlinJvmBinaryClass.getLocation(), kotlinJvmBinaryClass.getClassId());
        }
        return null;
    }

    private final MetadataVersion e() {
        return getComponents().getConfiguration().getMetadataVersion();
    }

    private final boolean f() {
        return getComponents().getConfiguration().getSkipMetadataVersionCheck();
    }

    private final boolean g(KotlinJvmBinaryClass kotlinJvmBinaryClass) {
        if (!getComponents().getConfiguration().getSkipPrereleaseCheck() && kotlinJvmBinaryClass.getClassHeader().isPreRelease() && Intrinsics.areEqual(kotlinJvmBinaryClass.getClassHeader().getMetadataVersion(), f33193d)) {
            return true;
        }
        return false;
    }

    private final boolean h(KotlinJvmBinaryClass kotlinJvmBinaryClass) {
        if ((getComponents().getConfiguration().getReportErrorsOnPreReleaseDependencies() && (kotlinJvmBinaryClass.getClassHeader().isPreRelease() || Intrinsics.areEqual(kotlinJvmBinaryClass.getClassHeader().getMetadataVersion(), f33192c))) || g(kotlinJvmBinaryClass)) {
            return true;
        }
        return false;
    }

    private final String[] i(KotlinJvmBinaryClass kotlinJvmBinaryClass, Set set) {
        KotlinClassHeader classHeader = kotlinJvmBinaryClass.getClassHeader();
        String[] data = classHeader.getData();
        if (data == null) {
            data = classHeader.getIncompatibleData();
        }
        if (data == null || !set.contains(classHeader.getKind())) {
            return null;
        }
        return data;
    }

    public final MemberScope createKotlinPackagePartScope(@NotNull PackageFragmentDescriptor descriptor, @NotNull KotlinJvmBinaryClass kotlinClass) {
        String[] strings;
        Pair<JvmNameResolver, ProtoBuf.Package> pair;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(kotlinClass, "kotlinClass");
        String[] i10 = i(kotlinClass, f33191b);
        if (i10 == null || (strings = kotlinClass.getClassHeader().getStrings()) == null) {
            return null;
        }
        try {
            try {
                pair = JvmProtoBufUtil.readPackageDataFrom(i10, strings);
            } catch (InvalidProtocolBufferException e10) {
                throw new IllegalStateException("Could not read data from " + kotlinClass.getLocation(), e10);
            }
        } catch (Throwable th2) {
            if (!f() && !kotlinClass.getClassHeader().getMetadataVersion().isCompatible(e())) {
                pair = null;
            } else {
                throw th2;
            }
        }
        if (pair == null) {
            return null;
        }
        JvmNameResolver jvmNameResolver = (JvmNameResolver) pair.a();
        ProtoBuf.Package r42 = (ProtoBuf.Package) pair.b();
        JvmPackagePartSource jvmPackagePartSource = new JvmPackagePartSource(kotlinClass, r42, jvmNameResolver, d(kotlinClass), h(kotlinClass), c(kotlinClass));
        return new DeserializedPackageMemberScope(descriptor, r42, jvmNameResolver, kotlinClass.getClassHeader().getMetadataVersion(), jvmPackagePartSource, getComponents(), "scope for " + jvmPackagePartSource + " in " + descriptor, d.f33241d);
    }

    @NotNull
    public final DeserializationComponents getComponents() {
        DeserializationComponents deserializationComponents = this.components;
        if (deserializationComponents != null) {
            return deserializationComponents;
        }
        Intrinsics.throwUninitializedPropertyAccessException("components");
        return null;
    }

    public final ClassData readClassData$descriptors_jvm(@NotNull KotlinJvmBinaryClass kotlinClass) {
        String[] strings;
        Pair<JvmNameResolver, ProtoBuf.Class> pair;
        Intrinsics.checkNotNullParameter(kotlinClass, "kotlinClass");
        String[] i10 = i(kotlinClass, f33190a);
        if (i10 == null || (strings = kotlinClass.getClassHeader().getStrings()) == null) {
            return null;
        }
        try {
            try {
                pair = JvmProtoBufUtil.readClassDataFrom(i10, strings);
            } catch (InvalidProtocolBufferException e10) {
                throw new IllegalStateException("Could not read data from " + kotlinClass.getLocation(), e10);
            }
        } catch (Throwable th2) {
            if (!f() && !kotlinClass.getClassHeader().getMetadataVersion().isCompatible(e())) {
                pair = null;
            } else {
                throw th2;
            }
        }
        if (pair == null) {
            return null;
        }
        return new ClassData((JvmNameResolver) pair.a(), (ProtoBuf.Class) pair.b(), kotlinClass.getClassHeader().getMetadataVersion(), new KotlinJvmBinarySourceElement(kotlinClass, d(kotlinClass), h(kotlinClass), c(kotlinClass)));
    }

    public final ClassDescriptor resolveClass(@NotNull KotlinJvmBinaryClass kotlinClass) {
        Intrinsics.checkNotNullParameter(kotlinClass, "kotlinClass");
        ClassData readClassData$descriptors_jvm = readClassData$descriptors_jvm(kotlinClass);
        if (readClassData$descriptors_jvm == null) {
            return null;
        }
        return getComponents().getClassDeserializer().deserializeClass(kotlinClass.getClassId(), readClassData$descriptors_jvm);
    }

    public final void setComponents(@NotNull DeserializationComponents deserializationComponents) {
        Intrinsics.checkNotNullParameter(deserializationComponents, "<set-?>");
        this.components = deserializationComponents;
    }

    public final void setComponents(@NotNull DeserializationComponentsForJava components) {
        Intrinsics.checkNotNullParameter(components, "components");
        setComponents(components.getComponents());
    }
}
