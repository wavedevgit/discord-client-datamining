package kotlin.reflect.jvm.internal.impl.load.java.descriptors;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ConstUtil;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyGetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertySetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyGetterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertySetterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement.TypeEnhancementKt;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorFactory;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.storage.NullableLazyValue;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class JavaPropertyDescriptor extends PropertyDescriptorImpl implements JavaCallableMemberDescriptor {
    private final boolean N;
    private final Pair O;
    private KotlinType P;

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public JavaPropertyDescriptor(DeclarationDescriptor declarationDescriptor, Annotations annotations, Modality modality, DescriptorVisibility descriptorVisibility, boolean z10, Name name, SourceElement sourceElement, PropertyDescriptor propertyDescriptor, CallableMemberDescriptor.Kind kind, boolean z11, Pair pair) {
        super(declarationDescriptor, propertyDescriptor, annotations, modality, descriptorVisibility, z10, name, kind, sourceElement, false, false, false, false, false, false);
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
        if (sourceElement == null) {
            a(5);
        }
        if (kind == null) {
            a(6);
        }
        this.P = null;
        this.N = z11;
        this.O = pair;
    }

    private static /* synthetic */ void a(int i10) {
        String str = i10 != 21 ? "Argument for @NotNull parameter '%s' of %s.%s must not be null" : "@NotNull method %s.%s must not return null";
        Object[] objArr = new Object[i10 != 21 ? 3 : 2];
        switch (i10) {
            case 1:
            case 8:
                objArr[0] = "annotations";
                break;
            case 2:
            case 9:
                objArr[0] = "modality";
                break;
            case 3:
            case 10:
                objArr[0] = "visibility";
                break;
            case 4:
            case 11:
                objArr[0] = StackTraceHelper.NAME_KEY;
                break;
            case 5:
            case 12:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                objArr[0] = "source";
                break;
            case 6:
            case 16:
                objArr[0] = "kind";
                break;
            case 7:
            default:
                objArr[0] = "containingDeclaration";
                break;
            case 13:
                objArr[0] = "newOwner";
                break;
            case 14:
                objArr[0] = "newModality";
                break;
            case 15:
                objArr[0] = "newVisibility";
                break;
            case 17:
                objArr[0] = "newName";
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                objArr[0] = "enhancedValueParameterTypes";
                break;
            case 20:
                objArr[0] = "enhancedReturnType";
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                objArr[0] = "kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaPropertyDescriptor";
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                objArr[0] = "inType";
                break;
        }
        if (i10 != 21) {
            objArr[1] = "kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaPropertyDescriptor";
        } else {
            objArr[1] = "enhance";
        }
        switch (i10) {
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                objArr[2] = "create";
                break;
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                objArr[2] = "createSubstitutedCopy";
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
                objArr[2] = "enhance";
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                objArr[2] = "setInType";
                break;
            default:
                objArr[2] = "<init>";
                break;
        }
        String format = String.format(str, objArr);
        if (i10 == 21) {
            throw new IllegalStateException(format);
        }
    }

    @NotNull
    public static JavaPropertyDescriptor create(@NotNull DeclarationDescriptor declarationDescriptor, @NotNull Annotations annotations, @NotNull Modality modality, @NotNull DescriptorVisibility descriptorVisibility, boolean z10, @NotNull Name name, @NotNull SourceElement sourceElement, boolean z11) {
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
        if (sourceElement == null) {
            a(12);
        }
        return new JavaPropertyDescriptor(declarationDescriptor, annotations, modality, descriptorVisibility, z10, name, sourceElement, null, CallableMemberDescriptor.Kind.DECLARATION, z11, null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl
    protected PropertyDescriptorImpl c(DeclarationDescriptor declarationDescriptor, Modality modality, DescriptorVisibility descriptorVisibility, PropertyDescriptor propertyDescriptor, CallableMemberDescriptor.Kind kind, Name name, SourceElement sourceElement) {
        if (declarationDescriptor == null) {
            a(13);
        }
        if (modality == null) {
            a(14);
        }
        if (descriptorVisibility == null) {
            a(15);
        }
        if (kind == null) {
            a(16);
        }
        if (name == null) {
            a(17);
        }
        if (sourceElement == null) {
            a(18);
        }
        return new JavaPropertyDescriptor(declarationDescriptor, getAnnotations(), modality, descriptorVisibility, isVar(), name, sourceElement, propertyDescriptor, kind, this.N, this.O);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaCallableMemberDescriptor
    @NotNull
    public JavaCallableMemberDescriptor enhance(KotlinType kotlinType, @NotNull List<KotlinType> list, @NotNull KotlinType kotlinType2, Pair<CallableDescriptor.UserDataKey<?>, ?> pair) {
        PropertyDescriptor original;
        PropertyGetterDescriptorImpl propertyGetterDescriptorImpl;
        PropertySetterDescriptorImpl propertySetterDescriptorImpl;
        PropertySetterDescriptor setter;
        PropertyGetterDescriptor getter;
        if (list == null) {
            a(19);
        }
        if (kotlinType2 == null) {
            a(20);
        }
        ReceiverParameterDescriptor receiverParameterDescriptor = null;
        if (getOriginal() == this) {
            original = null;
        } else {
            original = getOriginal();
        }
        JavaPropertyDescriptor javaPropertyDescriptor = new JavaPropertyDescriptor(getContainingDeclaration(), getAnnotations(), getModality(), getVisibility(), isVar(), getName(), getSource(), original, getKind(), this.N, pair);
        PropertyGetterDescriptorImpl getter2 = getGetter();
        if (getter2 != null) {
            Annotations annotations = getter2.getAnnotations();
            Modality modality = getter2.getModality();
            DescriptorVisibility visibility = getter2.getVisibility();
            boolean isDefault = getter2.isDefault();
            boolean isExternal = getter2.isExternal();
            boolean isInline = getter2.isInline();
            CallableMemberDescriptor.Kind kind = getKind();
            if (original == null) {
                getter = null;
            } else {
                getter = original.getGetter();
            }
            PropertyGetterDescriptorImpl propertyGetterDescriptorImpl2 = new PropertyGetterDescriptorImpl(javaPropertyDescriptor, annotations, modality, visibility, isDefault, isExternal, isInline, kind, getter, getter2.getSource());
            propertyGetterDescriptorImpl2.setInitialSignatureDescriptor(getter2.getInitialSignatureDescriptor());
            propertyGetterDescriptorImpl2.initialize(kotlinType2);
            propertyGetterDescriptorImpl = propertyGetterDescriptorImpl2;
        } else {
            propertyGetterDescriptorImpl = null;
        }
        PropertySetterDescriptor setter2 = getSetter();
        if (setter2 != null) {
            Annotations annotations2 = setter2.getAnnotations();
            Modality modality2 = setter2.getModality();
            DescriptorVisibility visibility2 = setter2.getVisibility();
            boolean isDefault2 = setter2.isDefault();
            boolean isExternal2 = setter2.isExternal();
            boolean isInline2 = setter2.isInline();
            CallableMemberDescriptor.Kind kind2 = getKind();
            if (original == null) {
                setter = null;
            } else {
                setter = original.getSetter();
            }
            propertySetterDescriptorImpl = new PropertySetterDescriptorImpl(javaPropertyDescriptor, annotations2, modality2, visibility2, isDefault2, isExternal2, isInline2, kind2, setter, setter2.getSource());
            propertySetterDescriptorImpl.setInitialSignatureDescriptor(propertySetterDescriptorImpl.getInitialSignatureDescriptor());
            propertySetterDescriptorImpl.initialize(setter2.getValueParameters().get(0));
        } else {
            propertySetterDescriptorImpl = null;
        }
        javaPropertyDescriptor.initialize(propertyGetterDescriptorImpl, propertySetterDescriptorImpl, getBackingField(), getDelegateField());
        javaPropertyDescriptor.setSetterProjectedOut(isSetterProjectedOut());
        Function0<NullableLazyValue<ConstantValue<?>>> function0 = this.f32566s;
        if (function0 != null) {
            javaPropertyDescriptor.setCompileTimeInitializer(this.f32565r, function0);
        }
        javaPropertyDescriptor.setOverriddenDescriptors(getOverriddenDescriptors());
        if (kotlinType != null) {
            receiverParameterDescriptor = DescriptorFactory.createExtensionReceiverParameterForCallable(this, kotlinType, Annotations.Companion.getEMPTY());
        }
        javaPropertyDescriptor.setType(kotlinType2, getTypeParameters(), getDispatchReceiverParameter(), receiverParameterDescriptor, CollectionsKt.l());
        return javaPropertyDescriptor;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public <V> V getUserData(CallableDescriptor.UserDataKey<V> userDataKey) {
        Pair pair = this.O;
        if (pair != null && ((CallableDescriptor.UserDataKey) pair.c()).equals(userDataKey)) {
            return (V) this.O.d();
        }
        return null;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public boolean hasSynthesizedParameterNames() {
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.impl.VariableDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.VariableDescriptor
    public boolean isConst() {
        KotlinType type = getType();
        if (this.N && ConstUtil.canBeUsedForConstVal(type)) {
            if (!TypeEnhancementKt.hasEnhancedNullability(type) || KotlinBuiltIns.isString(type)) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.PropertyDescriptorImpl
    public void setInType(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(22);
        }
        this.P = kotlinType;
    }
}
