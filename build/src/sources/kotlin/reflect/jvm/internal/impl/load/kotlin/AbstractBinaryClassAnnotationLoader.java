package kotlin.reflect.jvm.internal.impl.load.kotlin;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.SpecialJvmAnnotations;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.load.kotlin.AbstractBinaryClassAnnotationLoader.AnnotationsContainer;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.load.kotlin.MemberSignature;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.Flags;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.MetadataVersion;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.NameResolver;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoBufUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoTypeTableUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.TypeTable;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.ClassMapperLite;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmProtoBufUtil;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmClassName;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotatedCallableKind;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoContainer;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nAbstractBinaryClassAnnotationLoader.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractBinaryClassAnnotationLoader.kt\norg/jetbrains/kotlin/load/kotlin/AbstractBinaryClassAnnotationLoader\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,338:1\n1563#2:339\n1634#2,3:340\n1563#2:343\n1634#2,3:344\n*S KotlinDebug\n*F\n+ 1 AbstractBinaryClassAnnotationLoader.kt\norg/jetbrains/kotlin/load/kotlin/AbstractBinaryClassAnnotationLoader\n*L\n197#1:339\n197#1:340,3\n201#1:343\n201#1:344,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractBinaryClassAnnotationLoader<A, S extends AnnotationsContainer<? extends A>> implements AnnotationLoader<A> {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: a  reason: collision with root package name */
    private final KotlinClassFinder f33172a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class AnnotationsContainer<A> {
        @NotNull
        public abstract Map<MemberSignature, List<A>> getMemberAnnotations();
    }

    @SourceDebugExtension({"SMAP\nAbstractBinaryClassAnnotationLoader.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AbstractBinaryClassAnnotationLoader.kt\norg/jetbrains/kotlin/load/kotlin/AbstractBinaryClassAnnotationLoader$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,338:1\n1#2:339\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final KotlinJvmBinaryClass getSpecialCaseContainerClass(@NotNull ProtoContainer container, boolean z10, boolean z11, Boolean bool, boolean z12, @NotNull KotlinClassFinder kotlinClassFinder, @NotNull MetadataVersion metadataVersion) {
            ProtoContainer.Class outerClass;
            KotlinJvmBinarySourceElement kotlinJvmBinarySourceElement;
            JvmPackagePartSource jvmPackagePartSource;
            JvmClassName jvmClassName;
            Intrinsics.checkNotNullParameter(container, "container");
            Intrinsics.checkNotNullParameter(kotlinClassFinder, "kotlinClassFinder");
            Intrinsics.checkNotNullParameter(metadataVersion, "metadataVersion");
            if (z10) {
                if (bool != null) {
                    if (container instanceof ProtoContainer.Class) {
                        ProtoContainer.Class r82 = (ProtoContainer.Class) container;
                        if (r82.getKind() == ProtoBuf.Class.Kind.INTERFACE) {
                            ClassId classId = r82.getClassId();
                            Name identifier = Name.identifier("DefaultImpls");
                            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
                            return KotlinClassFinderKt.findKotlinClass(kotlinClassFinder, classId.createNestedClassId(identifier), metadataVersion);
                        }
                    }
                    if (bool.booleanValue() && (container instanceof ProtoContainer.Package)) {
                        SourceElement source = container.getSource();
                        if (source instanceof JvmPackagePartSource) {
                            jvmPackagePartSource = (JvmPackagePartSource) source;
                        } else {
                            jvmPackagePartSource = null;
                        }
                        if (jvmPackagePartSource != null) {
                            jvmClassName = jvmPackagePartSource.getFacadeClassName();
                        } else {
                            jvmClassName = null;
                        }
                        if (jvmClassName != null) {
                            ClassId.Companion companion = ClassId.Companion;
                            String internalName = jvmClassName.getInternalName();
                            Intrinsics.checkNotNullExpressionValue(internalName, "getInternalName(...)");
                            return KotlinClassFinderKt.findKotlinClass(kotlinClassFinder, companion.topLevel(new FqName(StringsKt.I(internalName, '/', '.', false, 4, null))), metadataVersion);
                        }
                    }
                } else {
                    throw new IllegalStateException(("isConst should not be null for property (container=" + container + ')').toString());
                }
            }
            if (z11 && (container instanceof ProtoContainer.Class)) {
                ProtoContainer.Class r83 = (ProtoContainer.Class) container;
                if (r83.getKind() == ProtoBuf.Class.Kind.COMPANION_OBJECT && (outerClass = r83.getOuterClass()) != null && (outerClass.getKind() == ProtoBuf.Class.Kind.CLASS || outerClass.getKind() == ProtoBuf.Class.Kind.ENUM_CLASS || (z12 && (outerClass.getKind() == ProtoBuf.Class.Kind.INTERFACE || outerClass.getKind() == ProtoBuf.Class.Kind.ANNOTATION_CLASS)))) {
                    SourceElement source2 = outerClass.getSource();
                    if (source2 instanceof KotlinJvmBinarySourceElement) {
                        kotlinJvmBinarySourceElement = (KotlinJvmBinarySourceElement) source2;
                    } else {
                        kotlinJvmBinarySourceElement = null;
                    }
                    if (kotlinJvmBinarySourceElement == null) {
                        return null;
                    }
                    return kotlinJvmBinarySourceElement.getBinaryClass();
                }
            }
            if (!(container instanceof ProtoContainer.Package) || !(container.getSource() instanceof JvmPackagePartSource)) {
                return null;
            }
            SourceElement source3 = container.getSource();
            Intrinsics.checkNotNull(source3, "null cannot be cast to non-null type org.jetbrains.kotlin.load.kotlin.JvmPackagePartSource");
            JvmPackagePartSource jvmPackagePartSource2 = (JvmPackagePartSource) source3;
            KotlinJvmBinaryClass knownJvmBinaryClass = jvmPackagePartSource2.getKnownJvmBinaryClass();
            if (knownJvmBinaryClass == null) {
                return KotlinClassFinderKt.findKotlinClass(kotlinClassFinder, jvmPackagePartSource2.getClassId(), metadataVersion);
            }
            return knownJvmBinaryClass;
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[AnnotatedCallableKind.values().length];
            try {
                iArr[AnnotatedCallableKind.PROPERTY_GETTER.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[AnnotatedCallableKind.PROPERTY_SETTER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[AnnotatedCallableKind.PROPERTY.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        public static final a f33173d = new a("PROPERTY", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final a f33174e = new a("BACKING_FIELD", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final a f33175i = new a("DELEGATE_FIELD", 2);

        /* renamed from: o  reason: collision with root package name */
        private static final /* synthetic */ a[] f33176o;

        /* renamed from: p  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f33177p;

        static {
            a[] a10 = a();
            f33176o = a10;
            f33177p = xr.a.a(a10);
        }

        private a(String str, int i10) {
        }

        private static final /* synthetic */ a[] a() {
            return new a[]{f33173d, f33174e, f33175i};
        }

        public static a valueOf(String str) {
            return (a) Enum.valueOf(a.class, str);
        }

        public static a[] values() {
            return (a[]) f33176o.clone();
        }
    }

    public AbstractBinaryClassAnnotationLoader(@NotNull KotlinClassFinder kotlinClassFinder) {
        Intrinsics.checkNotNullParameter(kotlinClassFinder, "kotlinClassFinder");
        this.f33172a = kotlinClassFinder;
    }

    private final int a(ProtoContainer protoContainer, MessageLite messageLite) {
        if (messageLite instanceof ProtoBuf.Function) {
            if (!ProtoTypeTableUtilKt.hasReceiver((ProtoBuf.Function) messageLite)) {
                return 0;
            }
            return 1;
        } else if (messageLite instanceof ProtoBuf.Property) {
            if (!ProtoTypeTableUtilKt.hasReceiver((ProtoBuf.Property) messageLite)) {
                return 0;
            }
            return 1;
        } else if (messageLite instanceof ProtoBuf.Constructor) {
            Intrinsics.checkNotNull(protoContainer, "null cannot be cast to non-null type org.jetbrains.kotlin.serialization.deserialization.ProtoContainer.Class");
            ProtoContainer.Class r42 = (ProtoContainer.Class) protoContainer;
            if (r42.getKind() == ProtoBuf.Class.Kind.ENUM_CLASS) {
                return 2;
            }
            if (!r42.isInner()) {
                return 0;
            }
            return 1;
        } else {
            throw new UnsupportedOperationException("Unsupported message: " + messageLite.getClass());
        }
    }

    private final List b(ProtoContainer protoContainer, MemberSignature memberSignature, boolean z10, boolean z11, Boolean bool, boolean z12) {
        KotlinJvmBinaryClass d10 = d(protoContainer, Companion.getSpecialCaseContainerClass(protoContainer, z10, z11, bool, z12, this.f33172a, getMetadataVersion()));
        if (d10 == null) {
            return CollectionsKt.l();
        }
        List<A> list = getAnnotationsContainer(d10).getMemberAnnotations().get(memberSignature);
        if (list == null) {
            return CollectionsKt.l();
        }
        return list;
    }

    static /* synthetic */ List c(AbstractBinaryClassAnnotationLoader abstractBinaryClassAnnotationLoader, ProtoContainer protoContainer, MemberSignature memberSignature, boolean z10, boolean z11, Boolean bool, boolean z12, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 4) != 0) {
                z10 = false;
            }
            if ((i10 & 8) != 0) {
                z11 = false;
            }
            if ((i10 & 16) != 0) {
                bool = null;
            }
            if ((i10 & 32) != 0) {
                z12 = false;
            }
            return abstractBinaryClassAnnotationLoader.b(protoContainer, memberSignature, z10, z11, bool, z12);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: findClassAndLoadMemberAnnotations");
    }

    public static /* synthetic */ MemberSignature getCallableSignature$default(AbstractBinaryClassAnnotationLoader abstractBinaryClassAnnotationLoader, MessageLite messageLite, NameResolver nameResolver, TypeTable typeTable, AnnotatedCallableKind annotatedCallableKind, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 16) != 0) {
                z10 = false;
            }
            return abstractBinaryClassAnnotationLoader.f(messageLite, nameResolver, typeTable, annotatedCallableKind, z10);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: getCallableSignature");
    }

    private final List k(ProtoContainer protoContainer, ProtoBuf.Property property, a aVar) {
        Boolean bool = Flags.IS_CONST.get(property.getFlags());
        Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
        bool.booleanValue();
        boolean isMovedFromInterfaceCompanion = JvmProtoBufUtil.isMovedFromInterfaceCompanion(property);
        if (aVar == a.f33173d) {
            MemberSignature propertySignature$default = AbstractBinaryClassAnnotationLoaderKt.getPropertySignature$default(property, protoContainer.getNameResolver(), protoContainer.getTypeTable(), false, true, false, 40, null);
            if (propertySignature$default == null) {
                return CollectionsKt.l();
            }
            return c(this, protoContainer, propertySignature$default, true, false, bool, isMovedFromInterfaceCompanion, 8, null);
        }
        MemberSignature propertySignature$default2 = AbstractBinaryClassAnnotationLoaderKt.getPropertySignature$default(property, protoContainer.getNameResolver(), protoContainer.getTypeTable(), true, false, false, 48, null);
        if (propertySignature$default2 == null) {
            return CollectionsKt.l();
        }
        boolean z10 = false;
        boolean V = StringsKt.V(propertySignature$default2.getSignature(), "$delegate", false, 2, null);
        if (aVar == a.f33175i) {
            z10 = true;
        }
        if (V != z10) {
            return CollectionsKt.l();
        }
        return b(protoContainer, propertySignature$default2, true, true, bool, isMovedFromInterfaceCompanion);
    }

    private final KotlinJvmBinaryClass l(ProtoContainer.Class r32) {
        KotlinJvmBinarySourceElement kotlinJvmBinarySourceElement;
        SourceElement source = r32.getSource();
        if (source instanceof KotlinJvmBinarySourceElement) {
            kotlinJvmBinarySourceElement = (KotlinJvmBinarySourceElement) source;
        } else {
            kotlinJvmBinarySourceElement = null;
        }
        if (kotlinJvmBinarySourceElement == null) {
            return null;
        }
        return kotlinJvmBinarySourceElement.getBinaryClass();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final KotlinJvmBinaryClass d(ProtoContainer container, KotlinJvmBinaryClass kotlinJvmBinaryClass) {
        Intrinsics.checkNotNullParameter(container, "container");
        if (kotlinJvmBinaryClass == null) {
            if (container instanceof ProtoContainer.Class) {
                return l((ProtoContainer.Class) container);
            }
            return null;
        }
        return kotlinJvmBinaryClass;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public byte[] e(KotlinJvmBinaryClass kotlinClass) {
        Intrinsics.checkNotNullParameter(kotlinClass, "kotlinClass");
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final MemberSignature f(MessageLite proto, NameResolver nameResolver, TypeTable typeTable, AnnotatedCallableKind kind, boolean z10) {
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Intrinsics.checkNotNullParameter(typeTable, "typeTable");
        Intrinsics.checkNotNullParameter(kind, "kind");
        if (proto instanceof ProtoBuf.Constructor) {
            MemberSignature.Companion companion = MemberSignature.Companion;
            JvmMemberSignature.Method jvmConstructorSignature = JvmProtoBufUtil.INSTANCE.getJvmConstructorSignature((ProtoBuf.Constructor) proto, nameResolver, typeTable);
            if (jvmConstructorSignature == null) {
                return null;
            }
            return companion.fromJvmMemberSignature(jvmConstructorSignature);
        } else if (proto instanceof ProtoBuf.Function) {
            MemberSignature.Companion companion2 = MemberSignature.Companion;
            JvmMemberSignature.Method jvmMethodSignature = JvmProtoBufUtil.INSTANCE.getJvmMethodSignature((ProtoBuf.Function) proto, nameResolver, typeTable);
            if (jvmMethodSignature == null) {
                return null;
            }
            return companion2.fromJvmMemberSignature(jvmMethodSignature);
        } else {
            if (proto instanceof ProtoBuf.Property) {
                GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, JvmProtoBuf.JvmPropertySignature> propertySignature = JvmProtoBuf.propertySignature;
                Intrinsics.checkNotNullExpressionValue(propertySignature, "propertySignature");
                JvmProtoBuf.JvmPropertySignature jvmPropertySignature = (JvmProtoBuf.JvmPropertySignature) ProtoBufUtilKt.getExtensionOrNull((GeneratedMessageLite.ExtendableMessage) proto, propertySignature);
                if (jvmPropertySignature == null) {
                    return null;
                }
                int i10 = WhenMappings.$EnumSwitchMapping$0[kind.ordinal()];
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return null;
                        }
                        return AbstractBinaryClassAnnotationLoaderKt.getPropertySignature((ProtoBuf.Property) proto, nameResolver, typeTable, true, true, z10);
                    } else if (!jvmPropertySignature.hasSetter()) {
                        return null;
                    } else {
                        MemberSignature.Companion companion3 = MemberSignature.Companion;
                        JvmProtoBuf.JvmMethodSignature setter = jvmPropertySignature.getSetter();
                        Intrinsics.checkNotNullExpressionValue(setter, "getSetter(...)");
                        return companion3.fromMethod(nameResolver, setter);
                    }
                } else if (jvmPropertySignature.hasGetter()) {
                    MemberSignature.Companion companion4 = MemberSignature.Companion;
                    JvmProtoBuf.JvmMethodSignature getter = jvmPropertySignature.getGetter();
                    Intrinsics.checkNotNullExpressionValue(getter, "getGetter(...)");
                    return companion4.fromMethod(nameResolver, getter);
                }
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final KotlinClassFinder g() {
        return this.f33172a;
    }

    protected abstract AnnotationsContainer getAnnotationsContainer(KotlinJvmBinaryClass kotlinJvmBinaryClass);

    @NotNull
    public abstract MetadataVersion getMetadataVersion();

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean h(ClassId classId) {
        KotlinJvmBinaryClass findKotlinClass;
        Intrinsics.checkNotNullParameter(classId, "classId");
        if (classId.getOuterClassId() == null || !Intrinsics.areEqual(classId.getShortClassName().asString(), "Container") || (findKotlinClass = KotlinClassFinderKt.findKotlinClass(this.f33172a, classId, getMetadataVersion())) == null || !SpecialJvmAnnotations.INSTANCE.isAnnotatedWithContainerMetaAnnotation(findKotlinClass)) {
            return false;
        }
        return true;
    }

    protected abstract KotlinJvmBinaryClass.AnnotationArgumentVisitor i(ClassId classId, SourceElement sourceElement, List list);

    /* JADX INFO: Access modifiers changed from: protected */
    public final KotlinJvmBinaryClass.AnnotationArgumentVisitor j(ClassId annotationClassId, SourceElement source, List result) {
        Intrinsics.checkNotNullParameter(annotationClassId, "annotationClassId");
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(result, "result");
        if (SpecialJvmAnnotations.INSTANCE.getSPECIAL_ANNOTATIONS().contains(annotationClassId)) {
            return null;
        }
        return i(annotationClassId, source, result);
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public abstract A loadAnnotation(@NotNull ProtoBuf.Annotation annotation, @NotNull NameResolver nameResolver);

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadCallableAnnotations(@NotNull ProtoContainer container, @NotNull MessageLite proto, @NotNull AnnotatedCallableKind kind) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(kind, "kind");
        if (kind == AnnotatedCallableKind.PROPERTY) {
            return k(container, (ProtoBuf.Property) proto, a.f33173d);
        }
        MemberSignature callableSignature$default = getCallableSignature$default(this, proto, container.getNameResolver(), container.getTypeTable(), kind, false, 16, null);
        if (callableSignature$default == null) {
            return CollectionsKt.l();
        }
        return c(this, container, callableSignature$default, false, false, null, false, 60, null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadClassAnnotations(@NotNull ProtoContainer.Class container) {
        Intrinsics.checkNotNullParameter(container, "container");
        KotlinJvmBinaryClass l10 = l(container);
        if (l10 != null) {
            final ArrayList arrayList = new ArrayList(1);
            l10.loadClassAnnotations(new KotlinJvmBinaryClass.AnnotationVisitor() { // from class: kotlin.reflect.jvm.internal.impl.load.kotlin.AbstractBinaryClassAnnotationLoader$loadClassAnnotations$1
                @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationVisitor
                public KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation(ClassId classId, SourceElement source) {
                    Intrinsics.checkNotNullParameter(classId, "classId");
                    Intrinsics.checkNotNullParameter(source, "source");
                    return AbstractBinaryClassAnnotationLoader.this.j(classId, source, arrayList);
                }

                @Override // kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass.AnnotationVisitor
                public void visitEnd() {
                }
            }, e(l10));
            return arrayList;
        }
        throw new IllegalStateException(("Class for loading annotations is not found: " + container.debugFqName()).toString());
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadEnumEntryAnnotations(@NotNull ProtoContainer container, @NotNull ProtoBuf.EnumEntry proto) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        return c(this, container, MemberSignature.Companion.fromFieldNameAndDesc(container.getNameResolver().getString(proto.getName()), ClassMapperLite.mapClass(((ProtoContainer.Class) container).getClassId().asString())), false, false, null, false, 60, null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadExtensionReceiverParameterAnnotations(@NotNull ProtoContainer container, @NotNull MessageLite proto, @NotNull AnnotatedCallableKind kind) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(kind, "kind");
        MemberSignature callableSignature$default = getCallableSignature$default(this, proto, container.getNameResolver(), container.getTypeTable(), kind, false, 16, null);
        if (callableSignature$default != null) {
            return c(this, container, MemberSignature.Companion.fromMethodSignatureAndParameterIndex(callableSignature$default, 0), false, false, null, false, 60, null);
        }
        return CollectionsKt.l();
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadPropertyBackingFieldAnnotations(@NotNull ProtoContainer container, @NotNull ProtoBuf.Property proto) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        return k(container, proto, a.f33174e);
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadPropertyDelegateFieldAnnotations(@NotNull ProtoContainer container, @NotNull ProtoBuf.Property proto) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(proto, "proto");
        return k(container, proto, a.f33175i);
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadTypeAnnotations(@NotNull ProtoBuf.Type proto, @NotNull NameResolver nameResolver) {
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Object extension = proto.getExtension(JvmProtoBuf.typeAnnotation);
        Intrinsics.checkNotNullExpressionValue(extension, "getExtension(...)");
        Iterable<ProtoBuf.Annotation> iterable = (Iterable) extension;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(iterable, 10));
        for (ProtoBuf.Annotation annotation : iterable) {
            Intrinsics.checkNotNull(annotation);
            arrayList.add(loadAnnotation(annotation, nameResolver));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadTypeParameterAnnotations(@NotNull ProtoBuf.TypeParameter proto, @NotNull NameResolver nameResolver) {
        Intrinsics.checkNotNullParameter(proto, "proto");
        Intrinsics.checkNotNullParameter(nameResolver, "nameResolver");
        Object extension = proto.getExtension(JvmProtoBuf.typeParameterAnnotation);
        Intrinsics.checkNotNullExpressionValue(extension, "getExtension(...)");
        Iterable<ProtoBuf.Annotation> iterable = (Iterable) extension;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(iterable, 10));
        for (ProtoBuf.Annotation annotation : iterable) {
            Intrinsics.checkNotNull(annotation);
            arrayList.add(loadAnnotation(annotation, nameResolver));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.serialization.deserialization.AnnotationLoader
    @NotNull
    public List<A> loadValueParameterAnnotations(@NotNull ProtoContainer container, @NotNull MessageLite callableProto, @NotNull AnnotatedCallableKind kind, int i10, @NotNull ProtoBuf.ValueParameter proto) {
        Intrinsics.checkNotNullParameter(container, "container");
        Intrinsics.checkNotNullParameter(callableProto, "callableProto");
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(proto, "proto");
        MemberSignature callableSignature$default = getCallableSignature$default(this, callableProto, container.getNameResolver(), container.getTypeTable(), kind, false, 16, null);
        if (callableSignature$default != null) {
            return c(this, container, MemberSignature.Companion.fromMethodSignatureAndParameterIndex(callableSignature$default, i10 + a(container, callableProto)), false, false, null, false, 60, null);
        }
        return CollectionsKt.l();
    }
}
