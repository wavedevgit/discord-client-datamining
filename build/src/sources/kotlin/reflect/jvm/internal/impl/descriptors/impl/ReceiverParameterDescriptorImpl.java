package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import com.facebook.react.devsupport.StackTraceHelper;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.name.SpecialNames;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ReceiverValue;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ReceiverParameterDescriptorImpl extends AbstractReceiverParameterDescriptor {

    /* renamed from: i  reason: collision with root package name */
    private final DeclarationDescriptor f33025i;

    /* renamed from: o  reason: collision with root package name */
    private ReceiverValue f33026o;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ReceiverParameterDescriptorImpl(@NotNull DeclarationDescriptor declarationDescriptor, @NotNull ReceiverValue receiverValue, @NotNull Annotations annotations) {
        this(declarationDescriptor, receiverValue, annotations, SpecialNames.THIS);
        if (declarationDescriptor == null) {
            a(0);
        }
        if (receiverValue == null) {
            a(1);
        }
        if (annotations == null) {
            a(2);
        }
    }

    private static /* synthetic */ void a(int i10) {
        String str = (i10 == 7 || i10 == 8) ? "@NotNull method %s.%s must not return null" : "Argument for @NotNull parameter '%s' of %s.%s must not be null";
        Object[] objArr = new Object[(i10 == 7 || i10 == 8) ? 2 : 3];
        switch (i10) {
            case 1:
            case 4:
                objArr[0] = "value";
                break;
            case 2:
            case 5:
                objArr[0] = "annotations";
                break;
            case 3:
            default:
                objArr[0] = "containingDeclaration";
                break;
            case 6:
                objArr[0] = StackTraceHelper.NAME_KEY;
                break;
            case 7:
            case 8:
                objArr[0] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/ReceiverParameterDescriptorImpl";
                break;
            case 9:
                objArr[0] = "newOwner";
                break;
            case 10:
                objArr[0] = "outType";
                break;
        }
        if (i10 == 7) {
            objArr[1] = "getValue";
        } else if (i10 != 8) {
            objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/ReceiverParameterDescriptorImpl";
        } else {
            objArr[1] = "getContainingDeclaration";
        }
        switch (i10) {
            case 7:
            case 8:
                break;
            case 9:
                objArr[2] = "copy";
                break;
            case 10:
                objArr[2] = "setOutType";
                break;
            default:
                objArr[2] = "<init>";
                break;
        }
        String format = String.format(str, objArr);
        if (i10 != 7 && i10 != 8) {
            throw new IllegalArgumentException(format);
        }
        throw new IllegalStateException(format);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    @NotNull
    public DeclarationDescriptor getContainingDeclaration() {
        DeclarationDescriptor declarationDescriptor = this.f33025i;
        if (declarationDescriptor == null) {
            a(8);
        }
        return declarationDescriptor;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor
    @NotNull
    public ReceiverValue getValue() {
        ReceiverValue receiverValue = this.f33026o;
        if (receiverValue == null) {
            a(7);
        }
        return receiverValue;
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReceiverParameterDescriptorImpl(@NotNull DeclarationDescriptor declarationDescriptor, @NotNull ReceiverValue receiverValue, @NotNull Annotations annotations, @NotNull Name name) {
        super(annotations, name);
        if (declarationDescriptor == null) {
            a(3);
        }
        if (receiverValue == null) {
            a(4);
        }
        if (annotations == null) {
            a(5);
        }
        if (name == null) {
            a(6);
        }
        this.f33025i = declarationDescriptor;
        this.f33026o = receiverValue;
    }
}
