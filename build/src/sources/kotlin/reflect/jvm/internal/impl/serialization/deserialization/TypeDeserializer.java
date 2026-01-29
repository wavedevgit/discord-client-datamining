package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.FunctionTypesKt;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.Flags;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoTypeTableUtilKt;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedAnnotations;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedTypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.types.DefinitelyNotNullType;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeKt;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.SpecialTypesKt;
import kotlin.reflect.jvm.internal.impl.types.StarProjectionForAbsentTypeParameter;
import kotlin.reflect.jvm.internal.impl.types.StarProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributeTranslator;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.TypeProjection;
import kotlin.reflect.jvm.internal.impl.types.TypeProjectionImpl;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nTypeDeserializer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 TypeDeserializer.kt\norg/jetbrains/kotlin/serialization/deserialization/TypeDeserializer\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,300:1\n1563#2:301\n1634#2,3:302\n1573#2:305\n1604#2,4:306\n1563#2:311\n1634#2,3:312\n1#3:310\n*S KotlinDebug\n*F\n+ 1 TypeDeserializer.kt\norg/jetbrains/kotlin/serialization/deserialization/TypeDeserializer\n*L\n76#1:301\n76#1:302,3\n105#1:305\n105#1:306,4\n246#1:311\n246#1:312,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypeDeserializer {

    /* renamed from: a  reason: collision with root package name */
    private final DeserializationContext f35628a;

    /* renamed from: b  reason: collision with root package name */
    private final TypeDeserializer f35629b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35630c;

    /* renamed from: d  reason: collision with root package name */
    private final String f35631d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f35632e;

    /* renamed from: f  reason: collision with root package name */
    private final Function1 f35633f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f35634g;

    public TypeDeserializer(@NotNull DeserializationContext c10, TypeDeserializer typeDeserializer, @NotNull List<ProtoBuf.TypeParameter> typeParameterProtos, @NotNull String debugName, @NotNull String containerPresentableName) {
        Map linkedHashMap;
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(typeParameterProtos, "typeParameterProtos");
        Intrinsics.checkNotNullParameter(debugName, "debugName");
        Intrinsics.checkNotNullParameter(containerPresentableName, "containerPresentableName");
        this.f35628a = c10;
        this.f35629b = typeDeserializer;
        this.f35630c = debugName;
        this.f35631d = containerPresentableName;
        this.f35632e = c10.getStorageManager().createMemoizedFunctionWithNullableValues(new m(this));
        this.f35633f = c10.getStorageManager().createMemoizedFunctionWithNullableValues(new n(this));
        if (typeParameterProtos.isEmpty()) {
            linkedHashMap = o0.i();
        } else {
            linkedHashMap = new LinkedHashMap();
            int i10 = 0;
            for (ProtoBuf.TypeParameter typeParameter : typeParameterProtos) {
                linkedHashMap.put(Integer.valueOf(typeParameter.getId()), new DeserializedTypeParameterDescriptor(this.f35628a, typeParameter, i10));
                i10++;
            }
        }
        this.f35634g = linkedHashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassifierDescriptor f(TypeDeserializer typeDeserializer, int i10) {
        return typeDeserializer.g(i10);
    }

    private final ClassifierDescriptor g(int i10) {
        ClassId classId = NameResolverUtilKt.getClassId(this.f35628a.getNameResolver(), i10);
        if (classId.isLocal()) {
            return this.f35628a.getComponents().deserializeClass(classId);
        }
        return FindClassInModuleKt.findClassifierAcrossModuleDependencies(this.f35628a.getComponents().getModuleDescriptor(), classId);
    }

    private final SimpleType h(int i10) {
        if (NameResolverUtilKt.getClassId(this.f35628a.getNameResolver(), i10).isLocal()) {
            return this.f35628a.getComponents().getLocalClassifierTypeSettings().getReplacementTypeForLocalClassifiers();
        }
        return null;
    }

    private final ClassifierDescriptor i(int i10) {
        ClassId classId = NameResolverUtilKt.getClassId(this.f35628a.getNameResolver(), i10);
        if (classId.isLocal()) {
            return null;
        }
        return FindClassInModuleKt.findTypeAliasAcrossModuleDependencies(this.f35628a.getComponents().getModuleDescriptor(), classId);
    }

    private final SimpleType j(KotlinType kotlinType, KotlinType kotlinType2) {
        KotlinBuiltIns builtIns = TypeUtilsKt.getBuiltIns(kotlinType);
        Annotations annotations = kotlinType.getAnnotations();
        KotlinType receiverTypeFromFunctionType = FunctionTypesKt.getReceiverTypeFromFunctionType(kotlinType);
        List<KotlinType> contextReceiverTypesFromFunctionType = FunctionTypesKt.getContextReceiverTypesFromFunctionType(kotlinType);
        List<TypeProjection> g02 = CollectionsKt.g0(FunctionTypesKt.getValueParameterTypesFromFunctionType(kotlinType), 1);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g02, 10));
        for (TypeProjection typeProjection : g02) {
            arrayList.add(typeProjection.getType());
        }
        return FunctionTypesKt.createFunctionType(builtIns, annotations, receiverTypeFromFunctionType, contextReceiverTypesFromFunctionType, arrayList, null, kotlinType2, true).makeNullableAsSpecified(kotlinType.isMarkedNullable());
    }

    /* JADX WARN: Multi-variable type inference failed */
    private final SimpleType k(TypeAttributes typeAttributes, TypeConstructor typeConstructor, List list, boolean z10) {
        List list2;
        SimpleType l10;
        int size;
        int size2 = typeConstructor.getParameters().size() - list.size();
        if (size2 != 0) {
            l10 = null;
            if (size2 != 1 || (size = list.size() - 1) < 0) {
                list2 = list;
            } else {
                TypeConstructor typeConstructor2 = typeConstructor.getBuiltIns().getSuspendFunction(size).getTypeConstructor();
                Intrinsics.checkNotNullExpressionValue(typeConstructor2, "getTypeConstructor(...)");
                list2 = list;
                l10 = KotlinTypeFactory.simpleType$default(typeAttributes, typeConstructor2, list2, z10, (KotlinTypeRefiner) null, 16, (Object) null);
            }
        } else {
            list2 = list;
            l10 = l(typeAttributes, typeConstructor, list2, z10);
        }
        if (l10 == null) {
            return ErrorUtils.INSTANCE.createErrorTypeWithArguments(ErrorTypeKind.INCONSISTENT_SUSPEND_FUNCTION, list2, typeConstructor, new String[0]);
        }
        return l10;
    }

    private final SimpleType l(TypeAttributes typeAttributes, TypeConstructor typeConstructor, List list, boolean z10) {
        SimpleType simpleType$default = KotlinTypeFactory.simpleType$default(typeAttributes, typeConstructor, list, z10, (KotlinTypeRefiner) null, 16, (Object) null);
        if (!FunctionTypesKt.isFunctionType(simpleType$default)) {
            return null;
        }
        return q(simpleType$default);
    }

    private final TypeParameterDescriptor m(int i10) {
        TypeParameterDescriptor typeParameterDescriptor = (TypeParameterDescriptor) this.f35634g.get(Integer.valueOf(i10));
        if (typeParameterDescriptor == null) {
            TypeDeserializer typeDeserializer = this.f35629b;
            if (typeDeserializer != null) {
                return typeDeserializer.m(i10);
            }
            return null;
        }
        return typeParameterDescriptor;
    }

    private static final List n(ProtoBuf.Type type, TypeDeserializer typeDeserializer) {
        List list;
        List<ProtoBuf.Type.Argument> argumentList = type.getArgumentList();
        Intrinsics.checkNotNullExpressionValue(argumentList, "getArgumentList(...)");
        List<ProtoBuf.Type.Argument> list2 = argumentList;
        ProtoBuf.Type outerType = ProtoTypeTableUtilKt.outerType(type, typeDeserializer.f35628a.getTypeTable());
        if (outerType != null) {
            list = n(outerType, typeDeserializer);
        } else {
            list = null;
        }
        if (list == null) {
            list = CollectionsKt.l();
        }
        return CollectionsKt.L0(list2, list);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List o(TypeDeserializer typeDeserializer, ProtoBuf.Type type) {
        return typeDeserializer.f35628a.getComponents().getAnnotationAndConstantLoader().loadTypeAnnotations(type, typeDeserializer.f35628a.getNameResolver());
    }

    private final TypeAttributes p(List list, Annotations annotations, TypeConstructor typeConstructor, DeclarationDescriptor declarationDescriptor) {
        List<TypeAttributeTranslator> list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        for (TypeAttributeTranslator typeAttributeTranslator : list2) {
            arrayList.add(typeAttributeTranslator.toAttributes(annotations, typeConstructor, declarationDescriptor));
        }
        return TypeAttributes.Companion.create(CollectionsKt.y(arrayList));
    }

    /* JADX WARN: Code restructure failed: missing block: B:16:0x003f, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r2, r3) == false) goto L27;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final kotlin.reflect.jvm.internal.impl.types.SimpleType q(kotlin.reflect.jvm.internal.impl.types.KotlinType r6) {
        /*
            r5 = this;
            java.util.List r0 = kotlin.reflect.jvm.internal.impl.builtins.FunctionTypesKt.getValueParameterTypesFromFunctionType(r6)
            java.lang.Object r0 = kotlin.collections.CollectionsKt.B0(r0)
            kotlin.reflect.jvm.internal.impl.types.TypeProjection r0 = (kotlin.reflect.jvm.internal.impl.types.TypeProjection) r0
            r1 = 0
            if (r0 == 0) goto L7e
            kotlin.reflect.jvm.internal.impl.types.KotlinType r0 = r0.getType()
            if (r0 != 0) goto L14
            goto L7e
        L14:
            kotlin.reflect.jvm.internal.impl.types.TypeConstructor r2 = r0.getConstructor()
            kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor r2 = r2.mo1198getDeclarationDescriptor()
            if (r2 == 0) goto L23
            kotlin.reflect.jvm.internal.impl.name.FqName r2 = kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt.getFqNameSafe(r2)
            goto L24
        L23:
            r2 = r1
        L24:
            java.util.List r3 = r0.getArguments()
            int r3 = r3.size()
            r4 = 1
            if (r3 != r4) goto L7b
            kotlin.reflect.jvm.internal.impl.name.FqName r3 = kotlin.reflect.jvm.internal.impl.builtins.StandardNames.CONTINUATION_INTERFACE_FQ_NAME
            boolean r3 = kotlin.jvm.internal.Intrinsics.areEqual(r2, r3)
            if (r3 != 0) goto L42
            kotlin.reflect.jvm.internal.impl.name.FqName r3 = kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializerKt.access$getEXPERIMENTAL_CONTINUATION_FQ_NAME$p()
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r2, r3)
            if (r2 != 0) goto L42
            goto L7b
        L42:
            java.util.List r0 = r0.getArguments()
            java.lang.Object r0 = kotlin.collections.CollectionsKt.Q0(r0)
            kotlin.reflect.jvm.internal.impl.types.TypeProjection r0 = (kotlin.reflect.jvm.internal.impl.types.TypeProjection) r0
            kotlin.reflect.jvm.internal.impl.types.KotlinType r0 = r0.getType()
            java.lang.String r2 = "getType(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r2)
            kotlin.reflect.jvm.internal.impl.serialization.deserialization.DeserializationContext r2 = r5.f35628a
            kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor r2 = r2.getContainingDeclaration()
            boolean r3 = r2 instanceof kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
            if (r3 == 0) goto L62
            kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor r2 = (kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor) r2
            goto L63
        L62:
            r2 = r1
        L63:
            if (r2 == 0) goto L69
            kotlin.reflect.jvm.internal.impl.name.FqName r1 = kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt.fqNameOrNull(r2)
        L69:
            kotlin.reflect.jvm.internal.impl.name.FqName r2 = kotlin.reflect.jvm.internal.impl.serialization.deserialization.SuspendFunctionTypeUtilKt.KOTLIN_SUSPEND_BUILT_IN_FUNCTION_FQ_NAME
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r1 == 0) goto L76
            kotlin.reflect.jvm.internal.impl.types.SimpleType r6 = r5.j(r6, r0)
            return r6
        L76:
            kotlin.reflect.jvm.internal.impl.types.SimpleType r6 = r5.j(r6, r0)
            return r6
        L7b:
            kotlin.reflect.jvm.internal.impl.types.SimpleType r6 = (kotlin.reflect.jvm.internal.impl.types.SimpleType) r6
            return r6
        L7e:
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializer.q(kotlin.reflect.jvm.internal.impl.types.KotlinType):kotlin.reflect.jvm.internal.impl.types.SimpleType");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ClassifierDescriptor r(TypeDeserializer typeDeserializer, int i10) {
        return typeDeserializer.i(i10);
    }

    private final TypeProjection s(TypeParameterDescriptor typeParameterDescriptor, ProtoBuf.Type.Argument argument) {
        if (argument.getProjection() == ProtoBuf.Type.Argument.Projection.STAR) {
            if (typeParameterDescriptor == null) {
                return new StarProjectionForAbsentTypeParameter(this.f35628a.getComponents().getModuleDescriptor().getBuiltIns());
            }
            return new StarProjectionImpl(typeParameterDescriptor);
        }
        ProtoEnumFlags protoEnumFlags = ProtoEnumFlags.INSTANCE;
        ProtoBuf.Type.Argument.Projection projection = argument.getProjection();
        Intrinsics.checkNotNullExpressionValue(projection, "getProjection(...)");
        Variance variance = protoEnumFlags.variance(projection);
        ProtoBuf.Type type = ProtoTypeTableUtilKt.type(argument, this.f35628a.getTypeTable());
        if (type == null) {
            return new TypeProjectionImpl(ErrorUtils.createErrorType(ErrorTypeKind.NO_RECORDED_TYPE, argument.toString()));
        }
        return new TypeProjectionImpl(variance, type(type));
    }

    public static /* synthetic */ SimpleType simpleType$default(TypeDeserializer typeDeserializer, ProtoBuf.Type type, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        return typeDeserializer.simpleType(type, z10);
    }

    private final TypeConstructor t(ProtoBuf.Type type) {
        ClassifierDescriptor classifierDescriptor;
        Object obj;
        if (type.hasClassName()) {
            classifierDescriptor = (ClassifierDescriptor) this.f35632e.invoke(Integer.valueOf(type.getClassName()));
            if (classifierDescriptor == null) {
                classifierDescriptor = u(this, type, type.getClassName());
            }
        } else if (type.hasTypeParameter()) {
            classifierDescriptor = m(type.getTypeParameter());
            if (classifierDescriptor == null) {
                return ErrorUtils.INSTANCE.createErrorTypeConstructor(ErrorTypeKind.CANNOT_LOAD_DESERIALIZE_TYPE_PARAMETER, String.valueOf(type.getTypeParameter()), this.f35631d);
            }
        } else if (type.hasTypeParameterName()) {
            String string = this.f35628a.getNameResolver().getString(type.getTypeParameterName());
            Iterator<T> it = getOwnTypeParameters().iterator();
            while (true) {
                if (it.hasNext()) {
                    obj = it.next();
                    if (Intrinsics.areEqual(((TypeParameterDescriptor) obj).getName().asString(), string)) {
                        break;
                    }
                } else {
                    obj = null;
                    break;
                }
            }
            classifierDescriptor = (TypeParameterDescriptor) obj;
            if (classifierDescriptor == null) {
                return ErrorUtils.INSTANCE.createErrorTypeConstructor(ErrorTypeKind.CANNOT_LOAD_DESERIALIZE_TYPE_PARAMETER_BY_NAME, string, this.f35628a.getContainingDeclaration().toString());
            }
        } else if (type.hasTypeAliasName()) {
            classifierDescriptor = (ClassifierDescriptor) this.f35633f.invoke(Integer.valueOf(type.getTypeAliasName()));
            if (classifierDescriptor == null) {
                classifierDescriptor = u(this, type, type.getTypeAliasName());
            }
        } else {
            return ErrorUtils.INSTANCE.createErrorTypeConstructor(ErrorTypeKind.UNKNOWN_TYPE, new String[0]);
        }
        TypeConstructor typeConstructor = classifierDescriptor.getTypeConstructor();
        Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
        return typeConstructor;
    }

    private static final ClassDescriptor u(TypeDeserializer typeDeserializer, ProtoBuf.Type type, int i10) {
        ClassId classId = NameResolverUtilKt.getClassId(typeDeserializer.f35628a.getNameResolver(), i10);
        List<Integer> Z = kotlin.sequences.k.Z(kotlin.sequences.k.R(kotlin.sequences.k.q(type, new p(typeDeserializer)), q.f35782d));
        int C = kotlin.sequences.k.C(kotlin.sequences.k.q(classId, new PropertyReference1Impl() { // from class: kotlin.reflect.jvm.internal.impl.serialization.deserialization.TypeDeserializer.a
            @Override // kotlin.jvm.internal.PropertyReference1Impl, kotlin.jvm.internal.PropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((ClassId) obj).getOuterClassId();
            }
        }));
        while (Z.size() < C) {
            Z.add(0);
        }
        return typeDeserializer.f35628a.getComponents().getNotFoundClasses().getClass(classId, Z);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ProtoBuf.Type v(TypeDeserializer typeDeserializer, ProtoBuf.Type it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return ProtoTypeTableUtilKt.outerType(it, typeDeserializer.f35628a.getTypeTable());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int w(ProtoBuf.Type it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return it.getArgumentCount();
    }

    @NotNull
    public final List<TypeParameterDescriptor> getOwnTypeParameters() {
        return CollectionsKt.h1(this.f35634g.values());
    }

    @NotNull
    public final SimpleType simpleType(@NotNull ProtoBuf.Type proto, boolean z10) {
        SimpleType simpleType;
        SimpleType simpleType2;
        SimpleType withAbbreviation;
        boolean z11;
        Intrinsics.checkNotNullParameter(proto, "proto");
        if (proto.hasClassName()) {
            simpleType = h(proto.getClassName());
        } else if (proto.hasTypeAliasName()) {
            simpleType = h(proto.getTypeAliasName());
        } else {
            simpleType = null;
        }
        if (simpleType != null) {
            return simpleType;
        }
        TypeConstructor t10 = t(proto);
        if (ErrorUtils.isError(t10.mo1198getDeclarationDescriptor())) {
            return ErrorUtils.INSTANCE.createErrorType(ErrorTypeKind.TYPE_FOR_ERROR_TYPE_CONSTRUCTOR, t10, t10.toString());
        }
        DeserializedAnnotations deserializedAnnotations = new DeserializedAnnotations(this.f35628a.getStorageManager(), new o(this, proto));
        TypeAttributes p10 = p(this.f35628a.getComponents().getTypeAttributeTranslators(), deserializedAnnotations, t10, this.f35628a.getContainingDeclaration());
        List n10 = n(proto, this);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(n10, 10));
        int i10 = 0;
        for (Object obj : n10) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            List<TypeParameterDescriptor> parameters = t10.getParameters();
            Intrinsics.checkNotNullExpressionValue(parameters, "getParameters(...)");
            arrayList.add(s((TypeParameterDescriptor) CollectionsKt.q0(parameters, i10), (ProtoBuf.Type.Argument) obj));
            i10 = i11;
        }
        List h12 = CollectionsKt.h1(arrayList);
        ClassifierDescriptor mo1198getDeclarationDescriptor = t10.mo1198getDeclarationDescriptor();
        if (z10 && (mo1198getDeclarationDescriptor instanceof TypeAliasDescriptor)) {
            SimpleType computeExpandedType = KotlinTypeFactory.computeExpandedType((TypeAliasDescriptor) mo1198getDeclarationDescriptor, h12);
            TypeAttributes p11 = p(this.f35628a.getComponents().getTypeAttributeTranslators(), Annotations.Companion.create(CollectionsKt.J0(deserializedAnnotations, computeExpandedType.getAnnotations())), t10, this.f35628a.getContainingDeclaration());
            if (!KotlinTypeKt.isNullable(computeExpandedType) && !proto.getNullable()) {
                z11 = false;
            } else {
                z11 = true;
            }
            simpleType2 = computeExpandedType.makeNullableAsSpecified(z11).replaceAttributes(p11);
        } else if (Flags.SUSPEND_TYPE.get(proto.getFlags()).booleanValue()) {
            simpleType2 = k(p10, t10, h12, proto.getNullable());
        } else {
            SimpleType simpleType$default = KotlinTypeFactory.simpleType$default(p10, t10, h12, proto.getNullable(), (KotlinTypeRefiner) null, 16, (Object) null);
            if (Flags.DEFINITELY_NOT_NULL_TYPE.get(proto.getFlags()).booleanValue()) {
                simpleType2 = DefinitelyNotNullType.Companion.makeDefinitelyNotNull$default(DefinitelyNotNullType.Companion, simpleType$default, true, false, 4, null);
                if (simpleType2 == null) {
                    throw new IllegalStateException(("null DefinitelyNotNullType for '" + simpleType$default + '\'').toString());
                }
            } else {
                simpleType2 = simpleType$default;
            }
        }
        ProtoBuf.Type abbreviatedType = ProtoTypeTableUtilKt.abbreviatedType(proto, this.f35628a.getTypeTable());
        if (abbreviatedType != null && (withAbbreviation = SpecialTypesKt.withAbbreviation(simpleType2, simpleType(abbreviatedType, false))) != null) {
            return withAbbreviation;
        }
        return simpleType2;
    }

    @NotNull
    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f35630c);
        if (this.f35629b == null) {
            str = "";
        } else {
            str = ". Child of " + this.f35629b.f35630c;
        }
        sb2.append(str);
        return sb2.toString();
    }

    @NotNull
    public final KotlinType type(@NotNull ProtoBuf.Type proto) {
        Intrinsics.checkNotNullParameter(proto, "proto");
        if (proto.hasFlexibleTypeCapabilitiesId()) {
            String string = this.f35628a.getNameResolver().getString(proto.getFlexibleTypeCapabilitiesId());
            SimpleType simpleType$default = simpleType$default(this, proto, false, 2, null);
            ProtoBuf.Type flexibleUpperBound = ProtoTypeTableUtilKt.flexibleUpperBound(proto, this.f35628a.getTypeTable());
            Intrinsics.checkNotNull(flexibleUpperBound);
            return this.f35628a.getComponents().getFlexibleTypeDeserializer().create(proto, string, simpleType$default, simpleType$default(this, flexibleUpperBound, false, 2, null));
        }
        return simpleType(proto, true);
    }
}
