package kotlin.reflect.jvm.internal.impl.load.java.descriptors;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.List;
import java.util.Map;
import kotlin.Pair;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SimpleFunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.SimpleFunctionDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorFactory;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.util.OperatorChecks;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class JavaMethodDescriptor extends SimpleFunctionDescriptorImpl implements JavaCallableMemberDescriptor {
    private c P;
    private final boolean Q;
    public static final CallableDescriptor.UserDataKey<ValueParameterDescriptor> ORIGINAL_VALUE_PARAMETER_FOR_EXTENSION_RECEIVER = new a();
    public static final CallableDescriptor.UserDataKey<Boolean> HAS_ERASED_VALUE_PARAMETERS = new b();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements CallableDescriptor.UserDataKey {
        a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class b implements CallableDescriptor.UserDataKey {
        b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum c {
        NON_STABLE_DECLARED(false, false),
        STABLE_DECLARED(true, false),
        NON_STABLE_SYNTHESIZED(false, true),
        STABLE_SYNTHESIZED(true, true);
        

        /* renamed from: d  reason: collision with root package name */
        public final boolean f34123d;

        /* renamed from: e  reason: collision with root package name */
        public final boolean f34124e;

        c(boolean z10, boolean z11) {
            this.f34123d = z10;
            this.f34124e = z11;
        }

        private static /* synthetic */ void a(int i10) {
            throw new IllegalStateException(String.format("@NotNull method %s.%s must not return null", "kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaMethodDescriptor$ParameterNamesStatus", "get"));
        }

        public static c d(boolean z10, boolean z11) {
            c cVar;
            if (z10) {
                if (z11) {
                    cVar = STABLE_SYNTHESIZED;
                } else {
                    cVar = STABLE_DECLARED;
                }
            } else if (z11) {
                cVar = NON_STABLE_SYNTHESIZED;
            } else {
                cVar = NON_STABLE_DECLARED;
            }
            if (cVar == null) {
                a(0);
            }
            return cVar;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    protected JavaMethodDescriptor(DeclarationDescriptor declarationDescriptor, SimpleFunctionDescriptor simpleFunctionDescriptor, Annotations annotations, Name name, CallableMemberDescriptor.Kind kind, SourceElement sourceElement, boolean z10) {
        super(declarationDescriptor, simpleFunctionDescriptor, annotations, name, kind, sourceElement);
        if (declarationDescriptor == null) {
            a(0);
        }
        if (annotations == null) {
            a(1);
        }
        if (name == null) {
            a(2);
        }
        if (kind == null) {
            a(3);
        }
        if (sourceElement == null) {
            a(4);
        }
        this.P = null;
        this.Q = z10;
    }

    private static /* synthetic */ void a(int i10) {
        String str = (i10 == 13 || i10 == 18 || i10 == 21) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
        Object[] objArr = new Object[(i10 == 13 || i10 == 18 || i10 == 21) ? 2 : 3];
        switch (i10) {
            case 1:
            case 6:
            case 16:
                objArr[0] = "annotations";
                break;
            case 2:
            case 7:
                objArr[0] = StackTraceHelper.NAME_KEY;
                break;
            case 3:
            case 15:
                objArr[0] = "kind";
                break;
            case 4:
            case 8:
            case 17:
                objArr[0] = "source";
                break;
            case 5:
            default:
                objArr[0] = "containingDeclaration";
                break;
            case 9:
                objArr[0] = "contextReceiverParameters";
                break;
            case 10:
                objArr[0] = "typeParameters";
                break;
            case 11:
                objArr[0] = "unsubstitutedValueParameters";
                break;
            case 12:
                objArr[0] = "visibility";
                break;
            case 13:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                objArr[0] = "kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaMethodDescriptor";
                break;
            case 14:
                objArr[0] = "newOwner";
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                objArr[0] = "enhancedValueParameterTypes";
                break;
            case 20:
                objArr[0] = "enhancedReturnType";
                break;
        }
        if (i10 == 13) {
            objArr[1] = "initialize";
        } else if (i10 == 18) {
            objArr[1] = "createSubstitutedCopy";
        } else if (i10 != 21) {
            objArr[1] = "kotlin/reflect/jvm/internal/impl/load/java/descriptors/JavaMethodDescriptor";
        } else {
            objArr[1] = "enhance";
        }
        switch (i10) {
            case 5:
            case 6:
            case 7:
            case 8:
                objArr[2] = "createJavaMethod";
                break;
            case 9:
            case 10:
            case 11:
            case 12:
                objArr[2] = "initialize";
                break;
            case 13:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                break;
            case 14:
            case 15:
            case 16:
            case 17:
                objArr[2] = "createSubstitutedCopy";
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
                objArr[2] = "enhance";
                break;
            default:
                objArr[2] = "<init>";
                break;
        }
        String format = String.format(str, objArr);
        if (i10 != 13 && i10 != 18 && i10 != 21) {
            throw new IllegalArgumentException(format);
        }
        throw new IllegalStateException(format);
    }

    @NotNull
    public static JavaMethodDescriptor createJavaMethod(@NotNull DeclarationDescriptor declarationDescriptor, @NotNull Annotations annotations, @NotNull Name name, @NotNull SourceElement sourceElement, boolean z10) {
        if (declarationDescriptor == null) {
            a(5);
        }
        if (annotations == null) {
            a(6);
        }
        if (name == null) {
            a(7);
        }
        if (sourceElement == null) {
            a(8);
        }
        return new JavaMethodDescriptor(declarationDescriptor, null, annotations, name, CallableMemberDescriptor.Kind.DECLARATION, sourceElement, z10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaCallableMemberDescriptor
    @NotNull
    public /* bridge */ /* synthetic */ JavaCallableMemberDescriptor enhance(KotlinType kotlinType, @NotNull List list, @NotNull KotlinType kotlinType2, Pair pair) {
        return enhance(kotlinType, (List<KotlinType>) list, kotlinType2, (Pair<CallableDescriptor.UserDataKey<?>, ?>) pair);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.FunctionDescriptorImpl
    public boolean hasStableParameterNames() {
        return this.P.f34123d;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.FunctionDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public boolean hasSynthesizedParameterNames() {
        return this.P.f34124e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.SimpleFunctionDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.impl.FunctionDescriptorImpl
    /* renamed from: i */
    public JavaMethodDescriptor createSubstitutedCopy(DeclarationDescriptor declarationDescriptor, FunctionDescriptor functionDescriptor, CallableMemberDescriptor.Kind kind, Name name, Annotations annotations, SourceElement sourceElement) {
        if (declarationDescriptor == null) {
            a(14);
        }
        if (kind == null) {
            a(15);
        }
        if (annotations == null) {
            a(16);
        }
        if (sourceElement == null) {
            a(17);
        }
        SimpleFunctionDescriptor simpleFunctionDescriptor = (SimpleFunctionDescriptor) functionDescriptor;
        if (name == null) {
            name = getName();
        }
        JavaMethodDescriptor javaMethodDescriptor = new JavaMethodDescriptor(declarationDescriptor, simpleFunctionDescriptor, annotations, name, kind, sourceElement, this.Q);
        javaMethodDescriptor.setParameterNamesStatus(hasStableParameterNames(), hasSynthesizedParameterNames());
        return javaMethodDescriptor;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.SimpleFunctionDescriptorImpl
    @NotNull
    public SimpleFunctionDescriptorImpl initialize(ReceiverParameterDescriptor receiverParameterDescriptor, ReceiverParameterDescriptor receiverParameterDescriptor2, @NotNull List<ReceiverParameterDescriptor> list, @NotNull List<? extends TypeParameterDescriptor> list2, @NotNull List<ValueParameterDescriptor> list3, KotlinType kotlinType, Modality modality, @NotNull DescriptorVisibility descriptorVisibility, Map<? extends CallableDescriptor.UserDataKey<?>, ?> map) {
        if (list == null) {
            a(9);
        }
        if (list2 == null) {
            a(10);
        }
        if (list3 == null) {
            a(11);
        }
        if (descriptorVisibility == null) {
            a(12);
        }
        SimpleFunctionDescriptorImpl initialize = super.initialize(receiverParameterDescriptor, receiverParameterDescriptor2, list, list2, list3, kotlinType, modality, descriptorVisibility, map);
        setOperator(OperatorChecks.INSTANCE.check(initialize).isSuccess());
        if (initialize == null) {
            a(13);
        }
        return initialize;
    }

    public void setParameterNamesStatus(boolean z10, boolean z11) {
        this.P = c.d(z10, z11);
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaCallableMemberDescriptor
    @NotNull
    public JavaMethodDescriptor enhance(KotlinType kotlinType, @NotNull List<KotlinType> list, @NotNull KotlinType kotlinType2, Pair<CallableDescriptor.UserDataKey<?>, ?> pair) {
        if (list == null) {
            a(19);
        }
        if (kotlinType2 == null) {
            a(20);
        }
        JavaMethodDescriptor javaMethodDescriptor = (JavaMethodDescriptor) newCopyBuilder().setValueParameters(UtilKt.copyValueParameters(list, getValueParameters(), this)).setReturnType(kotlinType2).setExtensionReceiverParameter(kotlinType == null ? null : DescriptorFactory.createExtensionReceiverParameterForCallable(this, kotlinType, Annotations.Companion.getEMPTY())).setDropOriginalInContainingParts().setPreserveSourceElement().build();
        if (pair != null) {
            javaMethodDescriptor.putInUserDataMap((CallableDescriptor.UserDataKey) pair.c(), pair.d());
        }
        if (javaMethodDescriptor == null) {
            a(21);
        }
        return javaMethodDescriptor;
    }
}
