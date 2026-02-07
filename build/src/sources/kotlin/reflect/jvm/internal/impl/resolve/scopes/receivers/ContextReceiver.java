package kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ContextReceiver extends AbstractReceiverValue implements ImplicitContextReceiver {

    /* renamed from: c  reason: collision with root package name */
    private final CallableDescriptor f34298c;

    /* renamed from: d  reason: collision with root package name */
    private final Name f34299d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ContextReceiver(@NotNull CallableDescriptor declarationDescriptor, @NotNull KotlinType receiverType, Name name, ReceiverValue receiverValue) {
        super(receiverType, receiverValue);
        Intrinsics.checkNotNullParameter(declarationDescriptor, "declarationDescriptor");
        Intrinsics.checkNotNullParameter(receiverType, "receiverType");
        this.f34298c = declarationDescriptor;
        this.f34299d = name;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ImplicitContextReceiver
    public Name getCustomLabelName() {
        return this.f34299d;
    }

    @NotNull
    public CallableDescriptor getDeclarationDescriptor() {
        return this.f34298c;
    }

    @NotNull
    public String toString() {
        return "Cxt { " + getDeclarationDescriptor() + " }";
    }
}
