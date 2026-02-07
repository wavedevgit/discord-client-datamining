package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.FieldDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyAccessorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyGetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertySetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ContextReceiver;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ExtensionReceiver;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ImplicitContextReceiver;
import kotlin.reflect.jvm.internal.impl.types.DescriptorSubstitutor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitution;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutor;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.utils.SmartSet;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class PropertyDescriptorImpl extends VariableDescriptorWithInitializerImpl implements PropertyDescriptor {
    private final boolean A;
    private final boolean B;
    private final boolean C;
    private final boolean D;
    private List E;
    private ReceiverParameterDescriptor F;
    private ReceiverParameterDescriptor G;
    private List H;
    private PropertyGetterDescriptorImpl I;
    private PropertySetterDescriptor J;
    private boolean K;
    private FieldDescriptor L;
    private FieldDescriptor M;

    /* renamed from: t  reason: collision with root package name */
    private final Modality f32593t;

    /* renamed from: u  reason: collision with root package name */
    private DescriptorVisibility f32594u;

    /* renamed from: v  reason: collision with root package name */
    private Collection f32595v;

    /* renamed from: w  reason: collision with root package name */
    private final PropertyDescriptor f32596w;

    /* renamed from: x  reason: collision with root package name */
    private final CallableMemberDescriptor.Kind f32597x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f32598y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f32599z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class CopyConfiguration {

        /* renamed from: a  reason: collision with root package name */
        private DeclarationDescriptor f32600a;

        /* renamed from: b  reason: collision with root package name */
        private Modality f32601b;

        /* renamed from: c  reason: collision with root package name */
        private DescriptorVisibility f32602c;

        /* renamed from: f  reason: collision with root package name */
        private CallableMemberDescriptor.Kind f32605f;

        /* renamed from: i  reason: collision with root package name */
        private ReceiverParameterDescriptor f32608i;

        /* renamed from: k  reason: collision with root package name */
        private Name f32610k;

        /* renamed from: l  reason: collision with root package name */
        private KotlinType f32611l;

        /* renamed from: d  reason: collision with root package name */
        private PropertyDescriptor f32603d = null;

        /* renamed from: e  reason: collision with root package name */
        private boolean f32604e = false;

        /* renamed from: g  reason: collision with root package name */
        private TypeSubstitution f32606g = TypeSubstitution.EMPTY;

        /* renamed from: h  reason: collision with root package name */
        private boolean f32607h = true;

        /* renamed from: j  reason: collision with root package name */
        private List f32609j = null;

        public CopyConfiguration() {
            this.f32600a = PropertyDescriptorImpl.this.getContainingDeclaration();
            this.f32601b = PropertyDescriptorImpl.this.getModality();
            this.f32602c = PropertyDescriptorImpl.this.getVisibility();
            this.f32605f = PropertyDescriptorImpl.this.getKind();
            this.f32608i = PropertyDescriptorImpl.this.F;
            this.f32610k = PropertyDescriptorImpl.this.getName();
            this.f32611l = PropertyDescriptorImpl.this.getType();
        }

        private static /* synthetic */ void a(int i10) {
            String str = (i10 == 1 || i10 == 2 || i10 == 3 || i10 == 5 || i10 == 7 || i10 == 9 || i10 == 11 || i10 == 19 || i10 == 13 || i10 == 14 || i10 == 16 || i10 == 17) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
            Object[] objArr = new Object[(i10 == 1 || i10 == 2 || i10 == 3 || i10 == 5 || i10 == 7 || i10 == 9 || i10 == 11 || i10 == 19 || i10 == 13 || i10 == 14 || i10 == 16 || i10 == 17) ? 2 : 3];
            switch (i10) {
                case 1:
                case 2:
                case 3:
                case 5:
                case 7:
                case 9:
                case 11:
                case 13:
                case 14:
                case 16:
                case 17:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    objArr[0] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyDescriptorImpl$CopyConfiguration";
                    break;
                case 4:
                    objArr[0] = "type";
                    break;
                case 6:
                    objArr[0] = "modality";
                    break;
                case 8:
                    objArr[0] = "visibility";
                    break;
                case 10:
                    objArr[0] = "kind";
                    break;
                case 12:
                    objArr[0] = "typeParameters";
                    break;
                case 15:
                    objArr[0] = "substitution";
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    objArr[0] = StackTraceHelper.NAME_KEY;
                    break;
                default:
                    objArr[0] = "owner";
                    break;
            }
            if (i10 == 1) {
                objArr[1] = "setOwner";
            } else if (i10 == 2) {
                objArr[1] = "setOriginal";
            } else if (i10 == 3) {
                objArr[1] = "setPreserveSourceElement";
            } else if (i10 == 5) {
                objArr[1] = "setReturnType";
            } else if (i10 == 7) {
                objArr[1] = "setModality";
            } else if (i10 == 9) {
                objArr[1] = "setVisibility";
            } else if (i10 == 11) {
                objArr[1] = "setKind";
            } else if (i10 == 19) {
                objArr[1] = "setName";
            } else if (i10 == 13) {
                objArr[1] = "setTypeParameters";
            } else if (i10 == 14) {
                objArr[1] = "setDispatchReceiverParameter";
            } else if (i10 == 16) {
                objArr[1] = "setSubstitution";
            } else if (i10 != 17) {
                objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/PropertyDescriptorImpl$CopyConfiguration";
            } else {
                objArr[1] = "setCopyOverrides";
            }
            switch (i10) {
                case 1:
                case 2:
                case 3:
                case 5:
                case 7:
                case 9:
                case 11:
                case 13:
                case 14:
                case 16:
                case 17:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    break;
                case 4:
                    objArr[2] = "setReturnType";
                    break;
                case 6:
                    objArr[2] = "setModality";
                    break;
                case 8:
                    objArr[2] = "setVisibility";
                    break;
                case 10:
                    objArr[2] = "setKind";
                    break;
                case 12:
                    objArr[2] = "setTypeParameters";
                    break;
                case 15:
                    objArr[2] = "setSubstitution";
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    objArr[2] = "setName";
                    break;
                default:
                    objArr[2] = "setOwner";
                    break;
            }
            String format = String.format(str, objArr);
            if (i10 != 1 && i10 != 2 && i10 != 3 && i10 != 5 && i10 != 7 && i10 != 9 && i10 != 11 && i10 != 19 && i10 != 13 && i10 != 14 && i10 != 16 && i10 != 17) {
                throw new IllegalArgumentException(format);
            }
            throw new IllegalStateException(format);
        }

        public PropertyDescriptor build() {
            return PropertyDescriptorImpl.this.d(this);
        }

        PropertyGetterDescriptor n() {
            PropertyDescriptor propertyDescriptor = this.f32603d;
            if (propertyDescriptor == null) {
                return null;
            }
            return propertyDescriptor.getGetter();
        }

        PropertySetterDescriptor o() {
            PropertyDescriptor propertyDescriptor = this.f32603d;
            if (propertyDescriptor == null) {
                return null;
            }
            return propertyDescriptor.getSetter();
        }

        @NotNull
        public CopyConfiguration setCopyOverrides(boolean z10) {
            this.f32607h = z10;
            return this;
        }

        @NotNull
        public CopyConfiguration setKind(@NotNull CallableMemberDescriptor.Kind kind) {
            if (kind == null) {
                a(10);
            }
            this.f32605f = kind;
            return this;
        }

        @NotNull
        public CopyConfiguration setModality(@NotNull Modality modality) {
            if (modality == null) {
                a(6);
            }
            this.f32601b = modality;
            return this;
        }

        @NotNull
        public CopyConfiguration setOriginal(CallableMemberDescriptor callableMemberDescriptor) {
            this.f32603d = (PropertyDescriptor) callableMemberDescriptor;
            return this;
        }

        @NotNull
        public CopyConfiguration setOwner(@NotNull DeclarationDescriptor declarationDescriptor) {
            if (declarationDescriptor == null) {
                a(0);
            }
            this.f32600a = declarationDescriptor;
            return this;
        }

        @NotNull
        public CopyConfiguration setSubstitution(@NotNull TypeSubstitution typeSubstitution) {
            if (typeSubstitution == null) {
                a(15);
            }
            this.f32606g = typeSubstitution;
            return this;
        }

        @NotNull
        public CopyConfiguration setVisibility(@NotNull DescriptorVisibility descriptorVisibility) {
            if (descriptorVisibility == null) {
                a(8);
            }
            this.f32602c = descriptorVisibility;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public PropertyDescriptorImpl(DeclarationDescriptor declarationDescriptor, PropertyDescriptor propertyDescriptor, Annotations annotations, Modality modality, DescriptorVisibility descriptorVisibility, boolean z10, Name name, CallableMemberDescriptor.Kind kind, SourceElement sourceElement, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, boolean z16) {
        super(declarationDescriptor, annotations, name, null, z10, sourceElement);
        if (declarationDescriptor == null) {
            a(0);
        }
        if (annotations == null) {
            a(1);
        }
        if (modality == null) {
            a(2);
        }
        if (descriptorVisibility == null) {
            a(3);
        }
        if (name == null) {
            a(4);
        }
        if (kind == null) {
            a(5);
        }
        if (sourceElement == null) {
            a(6);
        }
        this.f32595v = null;
        this.E = Collections.EMPTY_LIST;
        this.f32593t = modality;
        this.f32594u = descriptorVisibility;
        this.f32596w = propertyDescriptor == null ? this : propertyDescriptor;
        this.f32597x = kind;
        this.f32598y = z11;
        this.f32599z = z12;
        this.A = z13;
        this.B = z14;
        this.C = z15;
        this.D = z16;
    }

    /* JADX WARN: Removed duplicated region for block: B:18:0x002a  */
    /* JADX WARN: Removed duplicated region for block: B:22:0x0035  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0041  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x0046  */
    /* JADX WARN: Removed duplicated region for block: B:26:0x004b  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0050  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x0055  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x005a  */
    /* JADX WARN: Removed duplicated region for block: B:30:0x005f  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x0064  */
    /* JADX WARN: Removed duplicated region for block: B:32:0x0069  */
    /* JADX WARN: Removed duplicated region for block: B:33:0x006c  */
    /* JADX WARN: Removed duplicated region for block: B:34:0x0071  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x0076  */
    /* JADX WARN: Removed duplicated region for block: B:36:0x007b  */
    /* JADX WARN: Removed duplicated region for block: B:37:0x0080  */
    /* JADX WARN: Removed duplicated region for block: B:38:0x0085  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x008a  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x008f  */
    /* JADX WARN: Removed duplicated region for block: B:41:0x0094  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x0099  */
    /* JADX WARN: Removed duplicated region for block: B:45:0x00a0  */
    /* JADX WARN: Removed duplicated region for block: B:61:0x00e0  */
    /* JADX WARN: Removed duplicated region for block: B:63:0x00e7  */
    /* JADX WARN: Removed duplicated region for block: B:64:0x00ec  */
    /* JADX WARN: Removed duplicated region for block: B:65:0x00f1  */
    /* JADX WARN: Removed duplicated region for block: B:66:0x00f6  */
    /* JADX WARN: Removed duplicated region for block: B:67:0x00fb  */
    /* JADX WARN: Removed duplicated region for block: B:68:0x0100  */
    /* JADX WARN: Removed duplicated region for block: B:69:0x0105  */
    /* JADX WARN: Removed duplicated region for block: B:70:0x010a  */
    /* JADX WARN: Removed duplicated region for block: B:71:0x010f  */
    /* JADX WARN: Removed duplicated region for block: B:72:0x0114  */
    /* JADX WARN: Removed duplicated region for block: B:75:0x011e A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:80:0x0129  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private static /* synthetic */ void a(int r11) {
        /*
            Method dump skipped, instructions count: 538
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl.a(int):void");
    }

    @NotNull
    public static PropertyDescriptorImpl create(@NotNull DeclarationDescriptor declarationDescriptor, @NotNull Annotations annotations, @NotNull Modality modality, @NotNull DescriptorVisibility descriptorVisibility, boolean z10, @NotNull Name name, @NotNull CallableMemberDescriptor.Kind kind, @NotNull SourceElement sourceElement, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15, boolean z16) {
        if (declarationDescriptor == null) {
            a(7);
        }
        if (annotations == null) {
            a(8);
        }
        if (modality == null) {
            a(9);
        }
        if (descriptorVisibility == null) {
            a(10);
        }
        if (name == null) {
            a(11);
        }
        if (kind == null) {
            a(12);
        }
        if (sourceElement == null) {
            a(13);
        }
        return new PropertyDescriptorImpl(declarationDescriptor, null, annotations, modality, descriptorVisibility, z10, name, kind, sourceElement, z11, z12, z13, z14, z15, z16);
    }

    private SourceElement e(boolean z10, PropertyDescriptor propertyDescriptor) {
        SourceElement sourceElement;
        if (z10) {
            if (propertyDescriptor == null) {
                propertyDescriptor = getOriginal();
            }
            sourceElement = propertyDescriptor.getSource();
        } else {
            sourceElement = SourceElement.NO_SOURCE;
        }
        if (sourceElement == null) {
            a(28);
        }
        return sourceElement;
    }

    private static FunctionDescriptor f(TypeSubstitutor typeSubstitutor, PropertyAccessorDescriptor propertyAccessorDescriptor) {
        if (typeSubstitutor == null) {
            a(30);
        }
        if (propertyAccessorDescriptor == null) {
            a(31);
        }
        if (propertyAccessorDescriptor.getInitialSignatureDescriptor() != null) {
            return propertyAccessorDescriptor.getInitialSignatureDescriptor().substitute(typeSubstitutor);
        }
        return null;
    }

    private static DescriptorVisibility g(DescriptorVisibility descriptorVisibility, CallableMemberDescriptor.Kind kind) {
        if (kind == CallableMemberDescriptor.Kind.FAKE_OVERRIDE && DescriptorVisibilities.isPrivate(descriptorVisibility.normalize())) {
            return DescriptorVisibilities.INVISIBLE_FAKE;
        }
        return descriptorVisibility;
    }

    private static ReceiverParameterDescriptor h(TypeSubstitutor typeSubstitutor, PropertyDescriptor propertyDescriptor, ReceiverParameterDescriptor receiverParameterDescriptor) {
        KotlinType substitute = typeSubstitutor.substitute(receiverParameterDescriptor.getType(), Variance.IN_VARIANCE);
        if (substitute == null) {
            return null;
        }
        return new ReceiverParameterDescriptorImpl(propertyDescriptor, new ContextReceiver(propertyDescriptor, substitute, ((ImplicitContextReceiver) receiverParameterDescriptor.getValue()).getCustomLabelName(), receiverParameterDescriptor.getValue()), receiverParameterDescriptor.getAnnotations());
    }

    private static ReceiverParameterDescriptor i(TypeSubstitutor typeSubstitutor, PropertyDescriptor propertyDescriptor, ReceiverParameterDescriptor receiverParameterDescriptor) {
        KotlinType substitute = typeSubstitutor.substitute(receiverParameterDescriptor.getType(), Variance.IN_VARIANCE);
        if (substitute == null) {
            return null;
        }
        return new ReceiverParameterDescriptorImpl(propertyDescriptor, new ExtensionReceiver(propertyDescriptor, substitute, receiverParameterDescriptor.getValue()), receiverParameterDescriptor.getAnnotations());
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    public <R, D> R accept(DeclarationDescriptorVisitor<R, D> declarationDescriptorVisitor, D d10) {
        return declarationDescriptorVisitor.visitPropertyDescriptor(this, d10);
    }

    protected PropertyDescriptorImpl c(DeclarationDescriptor declarationDescriptor, Modality modality, DescriptorVisibility descriptorVisibility, PropertyDescriptor propertyDescriptor, CallableMemberDescriptor.Kind kind, Name name, SourceElement sourceElement) {
        if (declarationDescriptor == null) {
            a(32);
        }
        if (modality == null) {
            a(33);
        }
        if (descriptorVisibility == null) {
            a(34);
        }
        if (kind == null) {
            a(35);
        }
        if (name == null) {
            a(36);
        }
        if (sourceElement == null) {
            a(37);
        }
        return new PropertyDescriptorImpl(declarationDescriptor, propertyDescriptor, getAnnotations(), modality, descriptorVisibility, isVar(), name, kind, sourceElement, isLateInit(), isConst(), isExpect(), isActual(), isExternal(), isDelegated());
    }

    protected PropertyDescriptor d(CopyConfiguration copyConfiguration) {
        List<TypeParameterDescriptor> list;
        ReceiverParameterDescriptor receiverParameterDescriptor;
        ReceiverParameterDescriptor receiverParameterDescriptor2;
        PropertyGetterDescriptorImpl propertyGetterDescriptorImpl;
        PropertySetterDescriptorImpl propertySetterDescriptorImpl;
        FieldDescriptorImpl fieldDescriptorImpl;
        FieldDescriptorImpl fieldDescriptorImpl2;
        Function0 function0;
        KotlinType kotlinType;
        if (copyConfiguration == null) {
            a(29);
        }
        PropertyDescriptorImpl c10 = c(copyConfiguration.f32600a, copyConfiguration.f32601b, copyConfiguration.f32602c, copyConfiguration.f32603d, copyConfiguration.f32605f, copyConfiguration.f32610k, e(copyConfiguration.f32604e, copyConfiguration.f32603d));
        if (copyConfiguration.f32609j != null) {
            list = copyConfiguration.f32609j;
        } else {
            list = getTypeParameters();
        }
        ArrayList arrayList = new ArrayList(list.size());
        TypeSubstitutor substituteTypeParameters = DescriptorSubstitutor.substituteTypeParameters(list, copyConfiguration.f32606g, c10, arrayList);
        KotlinType kotlinType2 = copyConfiguration.f32611l;
        KotlinType substitute = substituteTypeParameters.substitute(kotlinType2, Variance.OUT_VARIANCE);
        if (substitute == null) {
            return null;
        }
        KotlinType substitute2 = substituteTypeParameters.substitute(kotlinType2, Variance.IN_VARIANCE);
        if (substitute2 != null) {
            c10.setInType(substitute2);
        }
        ReceiverParameterDescriptor receiverParameterDescriptor3 = copyConfiguration.f32608i;
        if (receiverParameterDescriptor3 != null) {
            ReceiverParameterDescriptor substitute3 = receiverParameterDescriptor3.substitute(substituteTypeParameters);
            if (substitute3 == null) {
                return null;
            }
            receiverParameterDescriptor = substitute3;
        } else {
            receiverParameterDescriptor = null;
        }
        ReceiverParameterDescriptor receiverParameterDescriptor4 = this.G;
        if (receiverParameterDescriptor4 != null) {
            receiverParameterDescriptor2 = i(substituteTypeParameters, c10, receiverParameterDescriptor4);
        } else {
            receiverParameterDescriptor2 = null;
        }
        ArrayList arrayList2 = new ArrayList();
        for (ReceiverParameterDescriptor receiverParameterDescriptor5 : this.E) {
            ReceiverParameterDescriptor h10 = h(substituteTypeParameters, c10, receiverParameterDescriptor5);
            if (h10 != null) {
                arrayList2.add(h10);
            }
        }
        c10.setType(substitute, arrayList, receiverParameterDescriptor, receiverParameterDescriptor2, arrayList2);
        if (this.I == null) {
            propertyGetterDescriptorImpl = null;
        } else {
            propertyGetterDescriptorImpl = new PropertyGetterDescriptorImpl(c10, this.I.getAnnotations(), copyConfiguration.f32601b, g(this.I.getVisibility(), copyConfiguration.f32605f), this.I.isDefault(), this.I.isExternal(), this.I.isInline(), copyConfiguration.f32605f, copyConfiguration.n(), SourceElement.NO_SOURCE);
        }
        if (propertyGetterDescriptorImpl != null) {
            KotlinType returnType = this.I.getReturnType();
            propertyGetterDescriptorImpl.setInitialSignatureDescriptor(f(substituteTypeParameters, this.I));
            if (returnType != null) {
                kotlinType = substituteTypeParameters.substitute(returnType, Variance.OUT_VARIANCE);
            } else {
                kotlinType = null;
            }
            propertyGetterDescriptorImpl.initialize(kotlinType);
        }
        if (this.J == null) {
            propertySetterDescriptorImpl = null;
        } else {
            propertySetterDescriptorImpl = new PropertySetterDescriptorImpl(c10, this.J.getAnnotations(), copyConfiguration.f32601b, g(this.J.getVisibility(), copyConfiguration.f32605f), this.J.isDefault(), this.J.isExternal(), this.J.isInline(), copyConfiguration.f32605f, copyConfiguration.o(), SourceElement.NO_SOURCE);
        }
        if (propertySetterDescriptorImpl != null) {
            List<ValueParameterDescriptor> substitutedValueParameters = FunctionDescriptorImpl.getSubstitutedValueParameters(propertySetterDescriptorImpl, this.J.getValueParameters(), substituteTypeParameters, false, false, null);
            if (substitutedValueParameters == null) {
                c10.setSetterProjectedOut(true);
                substitutedValueParameters = Collections.singletonList(PropertySetterDescriptorImpl.createSetterParameter(propertySetterDescriptorImpl, DescriptorUtilsKt.getBuiltIns(copyConfiguration.f32600a).getNothingType(), this.J.getValueParameters().get(0).getAnnotations()));
            }
            if (substitutedValueParameters.size() == 1) {
                propertySetterDescriptorImpl.setInitialSignatureDescriptor(f(substituteTypeParameters, this.J));
                propertySetterDescriptorImpl.initialize(substitutedValueParameters.get(0));
            } else {
                throw new IllegalStateException();
            }
        }
        FieldDescriptor fieldDescriptor = this.L;
        if (fieldDescriptor == null) {
            fieldDescriptorImpl = null;
        } else {
            fieldDescriptorImpl = new FieldDescriptorImpl(fieldDescriptor.getAnnotations(), c10);
        }
        FieldDescriptor fieldDescriptor2 = this.M;
        if (fieldDescriptor2 == null) {
            fieldDescriptorImpl2 = null;
        } else {
            fieldDescriptorImpl2 = new FieldDescriptorImpl(fieldDescriptor2.getAnnotations(), c10);
        }
        c10.initialize(propertyGetterDescriptorImpl, propertySetterDescriptorImpl, fieldDescriptorImpl, fieldDescriptorImpl2);
        if (copyConfiguration.f32607h) {
            SmartSet create = SmartSet.create();
            for (PropertyDescriptor propertyDescriptor : getOverriddenDescriptors()) {
                create.add(propertyDescriptor.substitute(substituteTypeParameters));
            }
            c10.setOverriddenDescriptors(create);
        }
        if (isConst() && (function0 = this.f32634s) != null) {
            c10.setCompileTimeInitializer(this.f32633r, function0);
        }
        return c10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor
    @NotNull
    public List<PropertyAccessorDescriptor> getAccessors() {
        ArrayList arrayList = new ArrayList(2);
        PropertyGetterDescriptorImpl propertyGetterDescriptorImpl = this.I;
        if (propertyGetterDescriptorImpl != null) {
            arrayList.add(propertyGetterDescriptorImpl);
        }
        PropertySetterDescriptor propertySetterDescriptor = this.J;
        if (propertySetterDescriptor != null) {
            arrayList.add(propertySetterDescriptor);
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor
    public FieldDescriptor getBackingField() {
        return this.L;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    @NotNull
    public List<ReceiverParameterDescriptor> getContextReceiverParameters() {
        List<ReceiverParameterDescriptor> list = this.E;
        if (list == null) {
            a(22);
        }
        return list;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor
    public FieldDescriptor getDelegateField() {
        return this.M;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public ReceiverParameterDescriptor getDispatchReceiverParameter() {
        return this.F;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public ReceiverParameterDescriptor getExtensionReceiverParameter() {
        return this.G;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor
    @NotNull
    public CallableMemberDescriptor.Kind getKind() {
        CallableMemberDescriptor.Kind kind = this.f32597x;
        if (kind == null) {
            a(39);
        }
        return kind;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    @NotNull
    public Modality getModality() {
        Modality modality = this.f32593t;
        if (modality == null) {
            a(24);
        }
        return modality;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    @NotNull
    public Collection<? extends PropertyDescriptor> getOverriddenDescriptors() {
        Collection<? extends PropertyDescriptor> collection = this.f32595v;
        if (collection == null) {
            collection = Collections.EMPTY_LIST;
        }
        if (collection == null) {
            a(41);
        }
        return collection;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    @NotNull
    public KotlinType getReturnType() {
        KotlinType type = getType();
        if (type == null) {
            a(23);
        }
        return type;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor
    public PropertySetterDescriptor getSetter() {
        return this.J;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    @NotNull
    public List<TypeParameterDescriptor> getTypeParameters() {
        List<TypeParameterDescriptor> list = this.H;
        if (list != null) {
            return list;
        }
        throw new IllegalStateException("typeParameters == null for " + this);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public <V> V getUserData(CallableDescriptor.UserDataKey<V> userDataKey) {
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithVisibility
    @NotNull
    public DescriptorVisibility getVisibility() {
        DescriptorVisibility descriptorVisibility = this.f32594u;
        if (descriptorVisibility == null) {
            a(25);
        }
        return descriptorVisibility;
    }

    public void initialize(PropertyGetterDescriptorImpl propertyGetterDescriptorImpl, PropertySetterDescriptor propertySetterDescriptor) {
        initialize(propertyGetterDescriptorImpl, propertySetterDescriptor, null, null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isActual() {
        return this.B;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.VariableDescriptor
    public boolean isConst() {
        return this.f32599z;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.VariableDescriptorWithAccessors
    public boolean isDelegated() {
        return this.D;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isExpect() {
        return this.A;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isExternal() {
        return this.C;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.VariableDescriptor
    public boolean isLateInit() {
        return this.f32598y;
    }

    public boolean isSetterProjectedOut() {
        return this.K;
    }

    @NotNull
    public CopyConfiguration newCopyBuilder() {
        return new CopyConfiguration();
    }

    public void setInType(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(14);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor
    public void setOverriddenDescriptors(@NotNull Collection<? extends CallableMemberDescriptor> collection) {
        if (collection == null) {
            a(40);
        }
        this.f32595v = collection;
    }

    public void setSetterProjectedOut(boolean z10) {
        this.K = z10;
    }

    public void setType(@NotNull KotlinType kotlinType, @NotNull List<? extends TypeParameterDescriptor> list, ReceiverParameterDescriptor receiverParameterDescriptor, ReceiverParameterDescriptor receiverParameterDescriptor2, @NotNull List<ReceiverParameterDescriptor> list2) {
        if (kotlinType == null) {
            a(17);
        }
        if (list == null) {
            a(18);
        }
        if (list2 == null) {
            a(19);
        }
        setOutType(kotlinType);
        this.H = new ArrayList(list);
        this.G = receiverParameterDescriptor2;
        this.F = receiverParameterDescriptor;
        this.E = list2;
    }

    public void setVisibility(@NotNull DescriptorVisibility descriptorVisibility) {
        if (descriptorVisibility == null) {
            a(20);
        }
        this.f32594u = descriptorVisibility;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor
    @NotNull
    public PropertyDescriptor copy(DeclarationDescriptor declarationDescriptor, Modality modality, DescriptorVisibility descriptorVisibility, CallableMemberDescriptor.Kind kind, boolean z10) {
        PropertyDescriptor build = newCopyBuilder().setOwner(declarationDescriptor).setOriginal(null).setModality(modality).setVisibility(descriptorVisibility).setKind(kind).setCopyOverrides(z10).build();
        if (build == null) {
            a(42);
        }
        return build;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor
    public PropertyGetterDescriptorImpl getGetter() {
        return this.I;
    }

    public void initialize(PropertyGetterDescriptorImpl propertyGetterDescriptorImpl, PropertySetterDescriptor propertySetterDescriptor, FieldDescriptor fieldDescriptor, FieldDescriptor fieldDescriptor2) {
        this.I = propertyGetterDescriptorImpl;
        this.J = propertySetterDescriptor;
        this.L = fieldDescriptor;
        this.M = fieldDescriptor2;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.Substitutable
    public PropertyDescriptor substitute(@NotNull TypeSubstitutor typeSubstitutor) {
        if (typeSubstitutor == null) {
            a(27);
        }
        return typeSubstitutor.isEmpty() ? this : newCopyBuilder().setSubstitution(typeSubstitutor.getSubstitution()).setOriginal(getOriginal()).build();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorNonRootImpl, kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    @NotNull
    public PropertyDescriptor getOriginal() {
        PropertyDescriptor propertyDescriptor = this.f32596w;
        PropertyDescriptor original = propertyDescriptor == this ? this : propertyDescriptor.getOriginal();
        if (original == null) {
            a(38);
        }
        return original;
    }
}
