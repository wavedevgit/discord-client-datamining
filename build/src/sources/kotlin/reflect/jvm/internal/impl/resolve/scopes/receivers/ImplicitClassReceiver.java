package kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ImplicitClassReceiver implements ImplicitReceiver, ThisClassReceiver {

    /* renamed from: a  reason: collision with root package name */
    private final ClassDescriptor f34253a;

    /* renamed from: b  reason: collision with root package name */
    private final ImplicitClassReceiver f34254b;

    /* renamed from: c  reason: collision with root package name */
    private final ClassDescriptor f34255c;

    public ImplicitClassReceiver(@NotNull ClassDescriptor classDescriptor, ImplicitClassReceiver implicitClassReceiver) {
        Intrinsics.checkNotNullParameter(classDescriptor, "classDescriptor");
        this.f34253a = classDescriptor;
        this.f34254b = implicitClassReceiver == null ? this : implicitClassReceiver;
        this.f34255c = classDescriptor;
    }

    public boolean equals(Object obj) {
        ImplicitClassReceiver implicitClassReceiver;
        ClassDescriptor classDescriptor = this.f34253a;
        ClassDescriptor classDescriptor2 = null;
        if (obj instanceof ImplicitClassReceiver) {
            implicitClassReceiver = (ImplicitClassReceiver) obj;
        } else {
            implicitClassReceiver = null;
        }
        if (implicitClassReceiver != null) {
            classDescriptor2 = implicitClassReceiver.f34253a;
        }
        return Intrinsics.areEqual(classDescriptor, classDescriptor2);
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ThisClassReceiver
    @NotNull
    public final ClassDescriptor getClassDescriptor() {
        return this.f34253a;
    }

    public int hashCode() {
        return this.f34253a.hashCode();
    }

    @NotNull
    public String toString() {
        return "Class{" + getType() + '}';
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ReceiverValue
    @NotNull
    public SimpleType getType() {
        SimpleType defaultType = this.f34253a.getDefaultType();
        Intrinsics.checkNotNullExpressionValue(defaultType, "getDefaultType(...)");
        return defaultType;
    }
}
