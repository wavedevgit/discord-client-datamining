package kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class ImplicitClassReceiver implements ImplicitReceiver, ThisClassReceiver {

    /* renamed from: a  reason: collision with root package name */
    private final ClassDescriptor f35543a;

    /* renamed from: b  reason: collision with root package name */
    private final ImplicitClassReceiver f35544b;

    /* renamed from: c  reason: collision with root package name */
    private final ClassDescriptor f35545c;

    public ImplicitClassReceiver(@NotNull ClassDescriptor classDescriptor, ImplicitClassReceiver implicitClassReceiver) {
        Intrinsics.checkNotNullParameter(classDescriptor, "classDescriptor");
        this.f35543a = classDescriptor;
        this.f35544b = implicitClassReceiver == null ? this : implicitClassReceiver;
        this.f35545c = classDescriptor;
    }

    public boolean equals(Object obj) {
        ImplicitClassReceiver implicitClassReceiver;
        ClassDescriptor classDescriptor = this.f35543a;
        ClassDescriptor classDescriptor2 = null;
        if (obj instanceof ImplicitClassReceiver) {
            implicitClassReceiver = (ImplicitClassReceiver) obj;
        } else {
            implicitClassReceiver = null;
        }
        if (implicitClassReceiver != null) {
            classDescriptor2 = implicitClassReceiver.f35543a;
        }
        return Intrinsics.areEqual(classDescriptor, classDescriptor2);
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ThisClassReceiver
    @NotNull
    public final ClassDescriptor getClassDescriptor() {
        return this.f35543a;
    }

    public int hashCode() {
        return this.f35543a.hashCode();
    }

    @NotNull
    public String toString() {
        return "Class{" + getType() + '}';
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ReceiverValue
    @NotNull
    public SimpleType getType() {
        SimpleType defaultType = this.f35543a.getDefaultType();
        Intrinsics.checkNotNullExpressionValue(defaultType, "getDefaultType(...)");
        return defaultType;
    }
}
