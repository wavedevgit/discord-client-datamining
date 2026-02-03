package fs;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorVisitorEmptyBodies;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class j extends DeclarationDescriptorVisitorEmptyBodies {

    /* renamed from: a  reason: collision with root package name */
    private final c1 f24538a;

    public j(c1 container) {
        Intrinsics.checkNotNullParameter(container, "container");
        this.f24538a = container;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorVisitorEmptyBodies, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
    /* renamed from: a */
    public a0 visitFunctionDescriptor(FunctionDescriptor descriptor, Unit data) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(data, "data");
        return new h1(this.f24538a, descriptor);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorVisitorEmptyBodies, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor
    /* renamed from: b */
    public a0 visitPropertyDescriptor(PropertyDescriptor descriptor, Unit data) {
        int i10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(data, "data");
        int i11 = 0;
        if (descriptor.getDispatchReceiverParameter() != null) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (descriptor.getExtensionReceiverParameter() != null) {
            i11 = 1;
        }
        int i12 = i10 + i11;
        if (descriptor.isVar()) {
            if (i12 != 0) {
                if (i12 != 1) {
                    if (i12 == 2) {
                        return new n1(this.f24538a, descriptor);
                    }
                } else {
                    return new l1(this.f24538a, descriptor);
                }
            } else {
                return new j1(this.f24538a, descriptor);
            }
        } else if (i12 != 0) {
            if (i12 != 1) {
                if (i12 == 2) {
                    return new g2(this.f24538a, descriptor);
                }
            } else {
                return new d2(this.f24538a, descriptor);
            }
        } else {
            return new a2(this.f24538a, descriptor);
        }
        throw new x2("Unsupported property: " + descriptor);
    }
}
