package kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ContextClassReceiver extends AbstractReceiverValue implements ImplicitContextReceiver {

    /* renamed from: c  reason: collision with root package name */
    private final ClassDescriptor f35538c;

    /* renamed from: d  reason: collision with root package name */
    private final Name f35539d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ContextClassReceiver(@NotNull ClassDescriptor classDescriptor, @NotNull KotlinType receiverType, Name name, ReceiverValue receiverValue) {
        super(receiverType, receiverValue);
        Intrinsics.checkNotNullParameter(classDescriptor, "classDescriptor");
        Intrinsics.checkNotNullParameter(receiverType, "receiverType");
        this.f35538c = classDescriptor;
        this.f35539d = name;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ImplicitContextReceiver
    public Name getCustomLabelName() {
        return this.f35539d;
    }

    @NotNull
    public String toString() {
        return getType() + ": Ctx { " + this.f35538c + " }";
    }
}
