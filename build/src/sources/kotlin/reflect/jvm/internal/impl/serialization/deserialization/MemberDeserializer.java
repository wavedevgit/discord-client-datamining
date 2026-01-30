package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassKind;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.PackageFragmentDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.FieldDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyGetterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertySetterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ValueParameterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.Flags;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoTypeTableUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.VersionRequirementTable;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorFactory;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.ProtoContainer;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedAnnotations;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedClassDescriptor;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedSimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedTypeAliasDescriptor;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.NonEmptyDeserializedAnnotations;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nMemberDeserializer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 MemberDeserializer.kt\norg/jetbrains/kotlin/serialization/deserialization/MemberDeserializer\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,371:1\n1#2:372\n1#2:391\n1573#3:373\n1604#3,4:374\n1583#3,11:378\n1878#3,2:389\n1880#3:392\n1594#3:393\n1563#3:394\n1634#3,3:395\n1573#3:398\n1604#3,4:399\n*S KotlinDebug\n*F\n+ 1 MemberDeserializer.kt\norg/jetbrains/kotlin/serialization/deserialization/MemberDeserializer\n*L\n215#1:391\n63#1:373\n63#1:374,4\n215#1:378,11\n215#1:389,2\n215#1:392\n215#1:393\n243#1:394\n243#1:395,3\n327#1:398\n327#1:399,4\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class MemberDeserializer {

    /* renamed from: a  reason: collision with root package name */
    private final DeserializationContext f35628a;

    /* renamed from: b  reason: collision with root package name */
    private final AnnotationDeserializer f35629b;

    public MemberDeserializer(@NotNull DeserializationContext c10) {
        Intrinsics.checkNotNullParameter(c10, "c");
        this.f35628a = c10;
        this.f35629b = new AnnotationDeserializer(c10.getComponents().getModuleDescriptor(), c10.getComponents().getNotFoundClasses());
    }

    private final ProtoContainer i(DeclarationDescriptor declarationDescriptor) {
        if (declarationDescriptor instanceof PackageFragmentDescriptor) {
            return new ProtoContainer.Package(((PackageFragmentDescriptor) declarationDescriptor).getFqName(), this.f35628a.getNameResolver(), this.f35628a.getTypeTable(), this.f35628a.getContainerSource());
        }
        if (declarationDescriptor instanceof DeserializedClassDescriptor) {
            return ((DeserializedClassDescriptor) declarationDescriptor).getThisAsProtoContainer$deserialization();
        }
        return null;
    }

    private final Annotations j(MessageLite messageLite, int i10, AnnotatedCallableKind annotatedCallableKind) {
        if (!Flags.HAS_ANNOTATIONS.get(i10).booleanValue()) {
            return Annotations.Companion.getEMPTY();
        }
        return new NonEmptyDeserializedAnnotations(this.f35628a.getStorageManager(), new g(this, messageLite, annotatedCallableKind));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List k(MemberDeserializer memberDeserializer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        List list;
        ProtoContainer i10 = memberDeserializer.i(memberDeserializer.f35628a.getContainingDeclaration());
        if (i10 != null) {
            list = CollectionsKt.h1(memberDeserializer.f35628a.getComponents().getAnnotationAndConstantLoader().loadCallableAnnotations(i10, messageLite, annotatedCallableKind));
        } else {
            list = null;
        }
        if (list == null) {
            return CollectionsKt.l();
        }
        return list;
    }

    private final ReceiverParameterDescriptor l() {
        ClassDescriptor classDescriptor;
        DeclarationDescriptor containingDeclaration = this.f35628a.getContainingDeclaration();
        if (containingDeclaration instanceof ClassDescriptor) {
            classDescriptor = (ClassDescriptor) containingDeclaration;
        } else {
            classDescriptor = null;
        }
        if (classDescriptor == null) {
            return null;
        }
        return classDescriptor.getThisAsReceiverParameter();
    }

    private final Annotations m(ProtoBuf.Property property, boolean z10) {
        if (!Flags.HAS_ANNOTATIONS.get(property.getFlags()).booleanValue()) {
            return Annotations.Companion.getEMPTY();
        }
        return new NonEmptyDeserializedAnnotations(this.f35628a.getStorageManager(), new h(this, z10, property));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List n(MemberDeserializer memberDeserializer, boolean z10, ProtoBuf.Property property) {
        List list;
        ProtoContainer i10 = memberDeserializer.i(memberDeserializer.f35628a.getContainingDeclaration());
        if (i10 != null) {
            if (z10) {
                list = CollectionsKt.h1(memberDeserializer.f35628a.getComponents().getAnnotationAndConstantLoader().loadPropertyDelegateFieldAnnotations(i10, property));
            } else {
                list = CollectionsKt.h1(memberDeserializer.f35628a.getComponents().getAnnotationAndConstantLoader().loadPropertyBackingFieldAnnotations(i10, property));
            }
        } else {
            list = null;
        }
        if (list == null) {
            return CollectionsKt.l();
        }
        return list;
    }

    private final Annotations o(MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        return new DeserializedAnnotations(this.f35628a.getStorageManager(), new i(this, messageLite, annotatedCallableKind));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List p(MemberDeserializer memberDeserializer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        List<AnnotationDescriptor> list;
        ProtoContainer i10 = memberDeserializer.i(memberDeserializer.f35628a.getContainingDeclaration());
        if (i10 != null) {
            list = memberDeserializer.f35628a.getComponents().getAnnotationAndConstantLoader().loadExtensionReceiverParameterAnnotations(i10, messageLite, annotatedCallableKind);
        } else {
            list = null;
        }
        if (list == null) {
            return CollectionsKt.l();
        }
        return list;
    }

    private final void q(DeserializedSimpleFunctionDescriptor deserializedSimpleFunctionDescriptor, ReceiverParameterDescriptor receiverParameterDescriptor, ReceiverParameterDescriptor receiverParameterDescriptor2, List list, List list2, List list3, KotlinType kotlinType, Modality modality, DescriptorVisibility descriptorVisibility, Map map) {
        deserializedSimpleFunctionDescriptor.initialize(receiverParameterDescriptor, receiverParameterDescriptor2, list, list2, list3, kotlinType, modality, descriptorVisibility, map);
    }

    private final int r(int i10) {
        return (i10 & 63) + ((i10 >> 8) << 6);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NullableLazyValue s(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        return memberDeserializer.f35628a.getStorageManager().createNullableLazyValue(new k(memberDeserializer, property, deserializedPropertyDescriptor));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ConstantValue t(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        ProtoContainer i10 = memberDeserializer.i(memberDeserializer.f35628a.getContainingDeclaration());
        Intrinsics.checkNotNull(i10);
        AnnotationAndConstantLoader<AnnotationDescriptor, ConstantValue<?>> annotationAndConstantLoader = memberDeserializer.f35628a.getComponents().getAnnotationAndConstantLoader();
        KotlinType returnType = deserializedPropertyDescriptor.getReturnType();
        Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
        return annotationAndConstantLoader.loadPropertyConstant(i10, property, returnType);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final NullableLazyValue u(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        return memberDeserializer.f35628a.getStorageManager().createNullableLazyValue(new l(memberDeserializer, property, deserializedPropertyDescriptor));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ConstantValue v(MemberDeserializer memberDeserializer, ProtoBuf.Property property, DeserializedPropertyDescriptor deserializedPropertyDescriptor) {
        ProtoContainer i10 = memberDeserializer.i(memberDeserializer.f35628a.getContainingDeclaration());
        Intrinsics.checkNotNull(i10);
        AnnotationAndConstantLoader<AnnotationDescriptor, ConstantValue<?>> annotationAndConstantLoader = memberDeserializer.f35628a.getComponents().getAnnotationAndConstantLoader();
        KotlinType returnType = deserializedPropertyDescriptor.getReturnType();
        Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
        return annotationAndConstantLoader.loadAnnotationDefaultValue(i10, property, returnType);
    }

    private final ReceiverParameterDescriptor w(ProtoBuf.Type type, DeserializationContext deserializationContext, CallableDescriptor callableDescriptor, int i10) {
        return DescriptorFactory.createContextReceiverParameterForCallable(callableDescriptor, deserializationContext.getTypeDeserializer().type(type), null, Annotations.Companion.getEMPTY(), i10);
    }

    private final List x(List list, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind) {
        int i10;
        Annotations empty;
        KotlinType kotlinType;
        DeclarationDescriptor containingDeclaration = this.f35628a.getContainingDeclaration();
        Intrinsics.checkNotNull(containingDeclaration, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.CallableDescriptor");
        CallableDescriptor callableDescriptor = (CallableDescriptor) containingDeclaration;
        DeclarationDescriptor containingDeclaration2 = callableDescriptor.getContainingDeclaration();
        Intrinsics.checkNotNullExpressionValue(containingDeclaration2, "getContainingDeclaration(...)");
        ProtoContainer i11 = i(containingDeclaration2);
        List list2 = list;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list2, 10));
        int i12 = 0;
        for (Object obj : list2) {
            int i13 = i12 + 1;
            if (i12 < 0) {
                CollectionsKt.v();
            }
            ProtoBuf.ValueParameter valueParameter = (ProtoBuf.ValueParameter) obj;
            if (valueParameter.hasFlags()) {
                i10 = valueParameter.getFlags();
            } else {
                i10 = 0;
            }
            if (i11 != null && Flags.HAS_ANNOTATIONS.get(i10).booleanValue()) {
                empty = new NonEmptyDeserializedAnnotations(this.f35628a.getStorageManager(), new j(this, i11, messageLite, annotatedCallableKind, i12, valueParameter));
            } else {
                empty = Annotations.Companion.getEMPTY();
            }
            Name name = NameResolverUtilKt.getName(this.f35628a.getNameResolver(), valueParameter.getName());
            KotlinType type = this.f35628a.getTypeDeserializer().type(ProtoTypeTableUtilKt.type(valueParameter, this.f35628a.getTypeTable()));
            Boolean bool = Flags.DECLARES_DEFAULT_VALUE.get(i10);
            Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
            boolean booleanValue = bool.booleanValue();
            Boolean bool2 = Flags.IS_CROSSINLINE.get(i10);
            Intrinsics.checkNotNullExpressionValue(bool2, "get(...)");
            boolean booleanValue2 = bool2.booleanValue();
            Boolean bool3 = Flags.IS_NOINLINE.get(i10);
            Intrinsics.checkNotNullExpressionValue(bool3, "get(...)");
            boolean booleanValue3 = bool3.booleanValue();
            ProtoBuf.Type varargElementType = ProtoTypeTableUtilKt.varargElementType(valueParameter, this.f35628a.getTypeTable());
            if (varargElementType != null) {
                kotlinType = this.f35628a.getTypeDeserializer().type(varargElementType);
            } else {
                kotlinType = null;
            }
            KotlinType kotlinType2 = kotlinType;
            SourceElement NO_SOURCE = SourceElement.NO_SOURCE;
            Intrinsics.checkNotNullExpressionValue(NO_SOURCE, "NO_SOURCE");
            CallableDescriptor callableDescriptor2 = callableDescriptor;
            arrayList.add(new ValueParameterDescriptorImpl(callableDescriptor2, null, i12, empty, name, type, booleanValue, booleanValue2, booleanValue3, kotlinType2, NO_SOURCE));
            callableDescriptor = callableDescriptor2;
            i12 = i13;
        }
        return CollectionsKt.h1(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final List y(MemberDeserializer memberDeserializer, ProtoContainer protoContainer, MessageLite messageLite, AnnotatedCallableKind annotatedCallableKind, int i10, ProtoBuf.ValueParameter valueParameter) {
        return CollectionsKt.h1(memberDeserializer.f35628a.getComponents().getAnnotationAndConstantLoader().loadValueParameterAnnotations(protoContainer, messageLite, annotatedCallableKind, i10, valueParameter));
    }

    @NotNull
    public final ClassConstructorDescriptor loadConstructor(@NotNull ProtoBuf.Constructor proto, boolean z10) {
        Intrinsics.checkNotNullParameter(proto, "proto");
        DeclarationDescriptor containingDeclaration = this.f35628a.getContainingDeclaration();
        Intrinsics.checkNotNull(containingDeclaration, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
        ClassDescriptor classDescriptor = (ClassDescriptor) containingDeclaration;
        int flags = proto.getFlags();
        AnnotatedCallableKind annotatedCallableKind = AnnotatedCallableKind.FUNCTION;
        DeserializedClassConstructorDescriptor deserializedClassConstructorDescriptor = new DeserializedClassConstructorDescriptor(classDescriptor, null, j(proto, flags, annotatedCallableKind), z10, CallableMemberDescriptor.Kind.DECLARATION, proto, this.f35628a.getNameResolver(), this.f35628a.getTypeTable(), this.f35628a.getVersionRequirementTable(), this.f35628a.getContainerSource(), null, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, null);
        MemberDeserializer memberDeserializer = DeserializationContext.childContext$default(this.f35628a, deserializedClassConstructorDescriptor, CollectionsKt.l(), null, null, null, null, 60, null).getMemberDeserializer();
        List<ProtoBuf.ValueParameter> valueParameterList = proto.getValueParameterList();
        Intrinsics.checkNotNullExpressionValue(valueParameterList, "getValueParameterList(...)");
        deserializedClassConstructorDescriptor.initialize(memberDeserializer.x(valueParameterList, proto, annotatedCallableKind), ProtoEnumFlagsUtilsKt.descriptorVisibility(ProtoEnumFlags.INSTANCE, Flags.VISIBILITY.get(proto.getFlags())));
        deserializedClassConstructorDescriptor.setReturnType(classDescriptor.getDefaultType());
        deserializedClassConstructorDescriptor.setExpect(classDescriptor.isExpect());
        deserializedClassConstructorDescriptor.setHasStableParameterNames(!Flags.IS_CONSTRUCTOR_WITH_NON_STABLE_PARAMETER_NAMES.get(proto.getFlags()).booleanValue());
        return deserializedClassConstructorDescriptor;
    }

    @NotNull
    public final SimpleFunctionDescriptor loadFunction(@NotNull ProtoBuf.Function proto) {
        int r10;
        Annotations empty;
        VersionRequirementTable versionRequirementTable;
        ReceiverParameterDescriptor receiverParameterDescriptor;
        KotlinType type;
        Intrinsics.checkNotNullParameter(proto, "proto");
        if (proto.hasFlags()) {
            r10 = proto.getFlags();
        } else {
            r10 = r(proto.getOldFlags());
        }
        int i10 = r10;
        AnnotatedCallableKind annotatedCallableKind = AnnotatedCallableKind.FUNCTION;
        Annotations j10 = j(proto, i10, annotatedCallableKind);
        if (ProtoTypeTableUtilKt.hasReceiver(proto)) {
            empty = o(proto, annotatedCallableKind);
        } else {
            empty = Annotations.Companion.getEMPTY();
        }
        if (Intrinsics.areEqual(DescriptorUtilsKt.getFqNameSafe(this.f35628a.getContainingDeclaration()).child(NameResolverUtilKt.getName(this.f35628a.getNameResolver(), proto.getName())), SuspendFunctionTypeUtilKt.KOTLIN_SUSPEND_BUILT_IN_FUNCTION_FQ_NAME)) {
            versionRequirementTable = VersionRequirementTable.Companion.getEMPTY();
        } else {
            versionRequirementTable = this.f35628a.getVersionRequirementTable();
        }
        Annotations annotations = empty;
        DeserializedSimpleFunctionDescriptor deserializedSimpleFunctionDescriptor = new DeserializedSimpleFunctionDescriptor(this.f35628a.getContainingDeclaration(), null, j10, NameResolverUtilKt.getName(this.f35628a.getNameResolver(), proto.getName()), ProtoEnumFlagsUtilsKt.memberKind(ProtoEnumFlags.INSTANCE, Flags.MEMBER_KIND.get(i10)), proto, this.f35628a.getNameResolver(), this.f35628a.getTypeTable(), versionRequirementTable, this.f35628a.getContainerSource(), null, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, null);
        DeserializationContext deserializationContext = this.f35628a;
        List<ProtoBuf.TypeParameter> typeParameterList = proto.getTypeParameterList();
        Intrinsics.checkNotNullExpressionValue(typeParameterList, "getTypeParameterList(...)");
        DeserializationContext childContext$default = DeserializationContext.childContext$default(deserializationContext, deserializedSimpleFunctionDescriptor, typeParameterList, null, null, null, null, 60, null);
        ProtoBuf.Type receiverType = ProtoTypeTableUtilKt.receiverType(proto, this.f35628a.getTypeTable());
        if (receiverType != null && (type = childContext$default.getTypeDeserializer().type(receiverType)) != null) {
            receiverParameterDescriptor = DescriptorFactory.createExtensionReceiverParameterForCallable(deserializedSimpleFunctionDescriptor, type, annotations);
        } else {
            receiverParameterDescriptor = null;
        }
        ReceiverParameterDescriptor l10 = l();
        List<ProtoBuf.Type> contextReceiverTypes = ProtoTypeTableUtilKt.contextReceiverTypes(proto, this.f35628a.getTypeTable());
        List arrayList = new ArrayList();
        int i11 = 0;
        for (Object obj : contextReceiverTypes) {
            int i12 = i11 + 1;
            if (i11 < 0) {
                CollectionsKt.v();
            }
            ReceiverParameterDescriptor w10 = w((ProtoBuf.Type) obj, childContext$default, deserializedSimpleFunctionDescriptor, i11);
            if (w10 != null) {
                arrayList.add(w10);
            }
            i11 = i12;
        }
        List ownTypeParameters = childContext$default.getTypeDeserializer().getOwnTypeParameters();
        MemberDeserializer memberDeserializer = childContext$default.getMemberDeserializer();
        List valueParameterList = proto.getValueParameterList();
        Intrinsics.checkNotNullExpressionValue(valueParameterList, "getValueParameterList(...)");
        List x10 = memberDeserializer.x(valueParameterList, proto, AnnotatedCallableKind.FUNCTION);
        KotlinType type2 = childContext$default.getTypeDeserializer().type(ProtoTypeTableUtilKt.returnType(proto, this.f35628a.getTypeTable()));
        ProtoEnumFlags protoEnumFlags = ProtoEnumFlags.INSTANCE;
        q(deserializedSimpleFunctionDescriptor, receiverParameterDescriptor, l10, arrayList, ownTypeParameters, x10, type2, protoEnumFlags.modality(Flags.MODALITY.get(i10)), ProtoEnumFlagsUtilsKt.descriptorVisibility(protoEnumFlags, Flags.VISIBILITY.get(i10)), o0.i());
        Boolean bool = Flags.IS_OPERATOR.get(i10);
        Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
        deserializedSimpleFunctionDescriptor.setOperator(bool.booleanValue());
        Boolean bool2 = Flags.IS_INFIX.get(i10);
        Intrinsics.checkNotNullExpressionValue(bool2, "get(...)");
        deserializedSimpleFunctionDescriptor.setInfix(bool2.booleanValue());
        Boolean bool3 = Flags.IS_EXTERNAL_FUNCTION.get(i10);
        Intrinsics.checkNotNullExpressionValue(bool3, "get(...)");
        deserializedSimpleFunctionDescriptor.setExternal(bool3.booleanValue());
        Boolean bool4 = Flags.IS_INLINE.get(i10);
        Intrinsics.checkNotNullExpressionValue(bool4, "get(...)");
        deserializedSimpleFunctionDescriptor.setInline(bool4.booleanValue());
        Boolean bool5 = Flags.IS_TAILREC.get(i10);
        Intrinsics.checkNotNullExpressionValue(bool5, "get(...)");
        deserializedSimpleFunctionDescriptor.setTailrec(bool5.booleanValue());
        Boolean bool6 = Flags.IS_SUSPEND.get(i10);
        Intrinsics.checkNotNullExpressionValue(bool6, "get(...)");
        deserializedSimpleFunctionDescriptor.setSuspend(bool6.booleanValue());
        Boolean bool7 = Flags.IS_EXPECT_FUNCTION.get(i10);
        Intrinsics.checkNotNullExpressionValue(bool7, "get(...)");
        deserializedSimpleFunctionDescriptor.setExpect(bool7.booleanValue());
        deserializedSimpleFunctionDescriptor.setHasStableParameterNames(!Flags.IS_FUNCTION_WITH_NON_STABLE_PARAMETER_NAMES.get(i10).booleanValue());
        Pair<CallableDescriptor.UserDataKey<?>, Object> deserializeContractFromFunction = this.f35628a.getComponents().getContractDeserializer().deserializeContractFromFunction(proto, deserializedSimpleFunctionDescriptor, this.f35628a.getTypeTable(), childContext$default.getTypeDeserializer());
        if (deserializeContractFromFunction != null) {
            deserializedSimpleFunctionDescriptor.putInUserDataMap((CallableDescriptor.UserDataKey) deserializeContractFromFunction.c(), deserializeContractFromFunction.d());
        }
        return deserializedSimpleFunctionDescriptor;
    }

    @NotNull
    public final PropertyDescriptor loadProperty(@NotNull ProtoBuf.Property proto) {
        int r10;
        Annotations empty;
        ReceiverParameterDescriptor receiverParameterDescriptor;
        DeserializationContext deserializationContext;
        Flags.FlagField<ProtoBuf.Visibility> flagField;
        Flags.FlagField<ProtoBuf.Modality> flagField2;
        PropertyGetterDescriptorImpl propertyGetterDescriptorImpl;
        PropertyGetterDescriptorImpl propertyGetterDescriptorImpl2;
        boolean z10;
        PropertySetterDescriptorImpl propertySetterDescriptorImpl;
        ClassDescriptor classDescriptor;
        int i10;
        KotlinType type;
        Intrinsics.checkNotNullParameter(proto, "proto");
        if (proto.hasFlags()) {
            r10 = proto.getFlags();
        } else {
            r10 = r(proto.getOldFlags());
        }
        DeclarationDescriptor containingDeclaration = this.f35628a.getContainingDeclaration();
        Annotations j10 = j(proto, r10, AnnotatedCallableKind.PROPERTY);
        ProtoEnumFlags protoEnumFlags = ProtoEnumFlags.INSTANCE;
        Modality modality = protoEnumFlags.modality(Flags.MODALITY.get(r10));
        DescriptorVisibility descriptorVisibility = ProtoEnumFlagsUtilsKt.descriptorVisibility(protoEnumFlags, Flags.VISIBILITY.get(r10));
        Boolean bool = Flags.IS_VAR.get(r10);
        Intrinsics.checkNotNullExpressionValue(bool, "get(...)");
        boolean booleanValue = bool.booleanValue();
        Name name = NameResolverUtilKt.getName(this.f35628a.getNameResolver(), proto.getName());
        CallableMemberDescriptor.Kind memberKind = ProtoEnumFlagsUtilsKt.memberKind(protoEnumFlags, Flags.MEMBER_KIND.get(r10));
        Boolean bool2 = Flags.IS_LATEINIT.get(r10);
        Intrinsics.checkNotNullExpressionValue(bool2, "get(...)");
        boolean booleanValue2 = bool2.booleanValue();
        Boolean bool3 = Flags.IS_CONST.get(r10);
        Intrinsics.checkNotNullExpressionValue(bool3, "get(...)");
        boolean booleanValue3 = bool3.booleanValue();
        Boolean bool4 = Flags.IS_EXTERNAL_PROPERTY.get(r10);
        Intrinsics.checkNotNullExpressionValue(bool4, "get(...)");
        boolean booleanValue4 = bool4.booleanValue();
        Boolean bool5 = Flags.IS_DELEGATED.get(r10);
        Intrinsics.checkNotNullExpressionValue(bool5, "get(...)");
        boolean booleanValue5 = bool5.booleanValue();
        Boolean bool6 = Flags.IS_EXPECT_PROPERTY.get(r10);
        Intrinsics.checkNotNullExpressionValue(bool6, "get(...)");
        int i11 = r10;
        DeserializedPropertyDescriptor deserializedPropertyDescriptor = new DeserializedPropertyDescriptor(containingDeclaration, null, j10, modality, descriptorVisibility, booleanValue, name, memberKind, booleanValue2, booleanValue3, booleanValue4, booleanValue5, bool6.booleanValue(), proto, this.f35628a.getNameResolver(), this.f35628a.getTypeTable(), this.f35628a.getVersionRequirementTable(), this.f35628a.getContainerSource());
        DeserializationContext deserializationContext2 = this.f35628a;
        List<ProtoBuf.TypeParameter> typeParameterList = proto.getTypeParameterList();
        Intrinsics.checkNotNullExpressionValue(typeParameterList, "getTypeParameterList(...)");
        DeserializationContext childContext$default = DeserializationContext.childContext$default(deserializationContext2, deserializedPropertyDescriptor, typeParameterList, null, null, null, null, 60, null);
        Boolean bool7 = Flags.HAS_GETTER.get(i11);
        Intrinsics.checkNotNullExpressionValue(bool7, "get(...)");
        boolean booleanValue6 = bool7.booleanValue();
        if (booleanValue6 && ProtoTypeTableUtilKt.hasReceiver(proto)) {
            empty = o(proto, AnnotatedCallableKind.PROPERTY_GETTER);
        } else {
            empty = Annotations.Companion.getEMPTY();
        }
        KotlinType type2 = childContext$default.getTypeDeserializer().type(ProtoTypeTableUtilKt.returnType(proto, this.f35628a.getTypeTable()));
        List<TypeParameterDescriptor> ownTypeParameters = childContext$default.getTypeDeserializer().getOwnTypeParameters();
        ReceiverParameterDescriptor l10 = l();
        ProtoBuf.Type receiverType = ProtoTypeTableUtilKt.receiverType(proto, this.f35628a.getTypeTable());
        ClassKind classKind = null;
        if (receiverType != null && (type = childContext$default.getTypeDeserializer().type(receiverType)) != null) {
            receiverParameterDescriptor = DescriptorFactory.createExtensionReceiverParameterForCallable(deserializedPropertyDescriptor, type, empty);
        } else {
            receiverParameterDescriptor = null;
        }
        List<ProtoBuf.Type> contextReceiverTypes = ProtoTypeTableUtilKt.contextReceiverTypes(proto, this.f35628a.getTypeTable());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(contextReceiverTypes, 10));
        int i12 = 0;
        for (Object obj : contextReceiverTypes) {
            int i13 = i12 + 1;
            if (i12 < 0) {
                CollectionsKt.v();
            }
            arrayList.add(w((ProtoBuf.Type) obj, childContext$default, deserializedPropertyDescriptor, i12));
            i12 = i13;
        }
        deserializedPropertyDescriptor.setType(type2, ownTypeParameters, l10, receiverParameterDescriptor, arrayList);
        Boolean bool8 = Flags.HAS_ANNOTATIONS.get(i11);
        Intrinsics.checkNotNullExpressionValue(bool8, "get(...)");
        boolean booleanValue7 = bool8.booleanValue();
        Flags.FlagField<ProtoBuf.Visibility> flagField3 = Flags.VISIBILITY;
        ProtoBuf.Visibility visibility = flagField3.get(i11);
        Flags.FlagField<ProtoBuf.Modality> flagField4 = Flags.MODALITY;
        int accessorFlags = Flags.getAccessorFlags(booleanValue7, visibility, flagField4.get(i11), false, false, false);
        if (booleanValue6) {
            if (proto.hasGetterFlags()) {
                i10 = proto.getGetterFlags();
            } else {
                i10 = accessorFlags;
            }
            Boolean bool9 = Flags.IS_NOT_DEFAULT.get(i10);
            Intrinsics.checkNotNullExpressionValue(bool9, "get(...)");
            boolean booleanValue8 = bool9.booleanValue();
            Boolean bool10 = Flags.IS_EXTERNAL_ACCESSOR.get(i10);
            Intrinsics.checkNotNullExpressionValue(bool10, "get(...)");
            boolean booleanValue9 = bool10.booleanValue();
            Boolean bool11 = Flags.IS_INLINE_ACCESSOR.get(i10);
            Intrinsics.checkNotNullExpressionValue(bool11, "get(...)");
            boolean booleanValue10 = bool11.booleanValue();
            Annotations j11 = j(proto, i10, AnnotatedCallableKind.PROPERTY_GETTER);
            if (booleanValue8) {
                ProtoEnumFlags protoEnumFlags2 = ProtoEnumFlags.INSTANCE;
                flagField = flagField3;
                deserializationContext = childContext$default;
                flagField2 = flagField4;
                propertyGetterDescriptorImpl = new PropertyGetterDescriptorImpl(deserializedPropertyDescriptor, j11, protoEnumFlags2.modality(flagField4.get(i10)), ProtoEnumFlagsUtilsKt.descriptorVisibility(protoEnumFlags2, flagField3.get(i10)), !booleanValue8, booleanValue9, booleanValue10, deserializedPropertyDescriptor.getKind(), null, SourceElement.NO_SOURCE);
            } else {
                deserializationContext = childContext$default;
                flagField = flagField3;
                flagField2 = flagField4;
                propertyGetterDescriptorImpl = DescriptorFactory.createDefaultGetter(deserializedPropertyDescriptor, j11);
                Intrinsics.checkNotNull(propertyGetterDescriptorImpl);
            }
            propertyGetterDescriptorImpl.initialize(deserializedPropertyDescriptor.getReturnType());
        } else {
            deserializationContext = childContext$default;
            flagField = flagField3;
            flagField2 = flagField4;
            propertyGetterDescriptorImpl = null;
        }
        if (Flags.HAS_SETTER.get(i11).booleanValue()) {
            if (proto.hasSetterFlags()) {
                accessorFlags = proto.getSetterFlags();
            }
            int i14 = accessorFlags;
            Boolean bool12 = Flags.IS_NOT_DEFAULT.get(i14);
            Intrinsics.checkNotNullExpressionValue(bool12, "get(...)");
            boolean booleanValue11 = bool12.booleanValue();
            Boolean bool13 = Flags.IS_EXTERNAL_ACCESSOR.get(i14);
            Intrinsics.checkNotNullExpressionValue(bool13, "get(...)");
            boolean booleanValue12 = bool13.booleanValue();
            Boolean bool14 = Flags.IS_INLINE_ACCESSOR.get(i14);
            Intrinsics.checkNotNullExpressionValue(bool14, "get(...)");
            boolean booleanValue13 = bool14.booleanValue();
            AnnotatedCallableKind annotatedCallableKind = AnnotatedCallableKind.PROPERTY_SETTER;
            Annotations j12 = j(proto, i14, annotatedCallableKind);
            if (booleanValue11) {
                ProtoEnumFlags protoEnumFlags3 = ProtoEnumFlags.INSTANCE;
                propertyGetterDescriptorImpl2 = propertyGetterDescriptorImpl;
                z10 = true;
                PropertySetterDescriptorImpl propertySetterDescriptorImpl2 = new PropertySetterDescriptorImpl(deserializedPropertyDescriptor, j12, protoEnumFlags3.modality(flagField2.get(i14)), ProtoEnumFlagsUtilsKt.descriptorVisibility(protoEnumFlags3, flagField.get(i14)), !booleanValue11, booleanValue12, booleanValue13, deserializedPropertyDescriptor.getKind(), null, SourceElement.NO_SOURCE);
                propertySetterDescriptorImpl = propertySetterDescriptorImpl2;
                propertySetterDescriptorImpl.initialize((ValueParameterDescriptor) CollectionsKt.Q0(DeserializationContext.childContext$default(deserializationContext, propertySetterDescriptorImpl2, CollectionsKt.l(), null, null, null, null, 60, null).getMemberDeserializer().x(CollectionsKt.e(proto.getSetterValueParameter()), proto, annotatedCallableKind)));
            } else {
                propertyGetterDescriptorImpl2 = propertyGetterDescriptorImpl;
                z10 = true;
                PropertySetterDescriptorImpl createDefaultSetter = DescriptorFactory.createDefaultSetter(deserializedPropertyDescriptor, j12, Annotations.Companion.getEMPTY());
                Intrinsics.checkNotNull(createDefaultSetter);
                propertySetterDescriptorImpl = createDefaultSetter;
            }
        } else {
            propertyGetterDescriptorImpl2 = propertyGetterDescriptorImpl;
            z10 = true;
            propertySetterDescriptorImpl = null;
        }
        if (Flags.HAS_CONSTANT.get(i11).booleanValue()) {
            deserializedPropertyDescriptor.setCompileTimeInitializerFactory(new e(this, proto, deserializedPropertyDescriptor));
        }
        DeclarationDescriptor containingDeclaration2 = this.f35628a.getContainingDeclaration();
        if (containingDeclaration2 instanceof ClassDescriptor) {
            classDescriptor = (ClassDescriptor) containingDeclaration2;
        } else {
            classDescriptor = null;
        }
        if (classDescriptor != null) {
            classKind = classDescriptor.getKind();
        }
        if (classKind == ClassKind.ANNOTATION_CLASS) {
            deserializedPropertyDescriptor.setCompileTimeInitializerFactory(new f(this, proto, deserializedPropertyDescriptor));
        }
        deserializedPropertyDescriptor.initialize(propertyGetterDescriptorImpl2, propertySetterDescriptorImpl, new FieldDescriptorImpl(m(proto, false), deserializedPropertyDescriptor), new FieldDescriptorImpl(m(proto, z10), deserializedPropertyDescriptor));
        return deserializedPropertyDescriptor;
    }

    @NotNull
    public final TypeAliasDescriptor loadTypeAlias(@NotNull ProtoBuf.TypeAlias proto) {
        Intrinsics.checkNotNullParameter(proto, "proto");
        Annotations.Companion companion = Annotations.Companion;
        List<ProtoBuf.Annotation> annotationList = proto.getAnnotationList();
        Intrinsics.checkNotNullExpressionValue(annotationList, "getAnnotationList(...)");
        List<ProtoBuf.Annotation> list = annotationList;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (ProtoBuf.Annotation annotation : list) {
            AnnotationDeserializer annotationDeserializer = this.f35629b;
            Intrinsics.checkNotNull(annotation);
            arrayList.add(annotationDeserializer.deserializeAnnotation(annotation, this.f35628a.getNameResolver()));
        }
        DeserializedTypeAliasDescriptor deserializedTypeAliasDescriptor = new DeserializedTypeAliasDescriptor(this.f35628a.getStorageManager(), this.f35628a.getContainingDeclaration(), companion.create(arrayList), NameResolverUtilKt.getName(this.f35628a.getNameResolver(), proto.getName()), ProtoEnumFlagsUtilsKt.descriptorVisibility(ProtoEnumFlags.INSTANCE, Flags.VISIBILITY.get(proto.getFlags())), proto, this.f35628a.getNameResolver(), this.f35628a.getTypeTable(), this.f35628a.getVersionRequirementTable(), this.f35628a.getContainerSource());
        DeserializationContext deserializationContext = this.f35628a;
        List<ProtoBuf.TypeParameter> typeParameterList = proto.getTypeParameterList();
        Intrinsics.checkNotNullExpressionValue(typeParameterList, "getTypeParameterList(...)");
        DeserializationContext childContext$default = DeserializationContext.childContext$default(deserializationContext, deserializedTypeAliasDescriptor, typeParameterList, null, null, null, null, 60, null);
        deserializedTypeAliasDescriptor.initialize(childContext$default.getTypeDeserializer().getOwnTypeParameters(), childContext$default.getTypeDeserializer().simpleType(ProtoTypeTableUtilKt.underlyingType(proto, this.f35628a.getTypeTable()), false), childContext$default.getTypeDeserializer().simpleType(ProtoTypeTableUtilKt.expandedType(proto, this.f35628a.getTypeTable()), false));
        return deserializedTypeAliasDescriptor;
    }
}
