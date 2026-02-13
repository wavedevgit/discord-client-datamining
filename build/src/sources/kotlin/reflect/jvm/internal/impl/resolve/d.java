package kotlin.reflect.jvm.internal.impl.resolve;

import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements KotlinTypeChecker.TypeConstructorEquality {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f34707a;

    /* renamed from: b  reason: collision with root package name */
    private final CallableDescriptor f34708b;

    /* renamed from: c  reason: collision with root package name */
    private final CallableDescriptor f34709c;

    public d(boolean z10, CallableDescriptor callableDescriptor, CallableDescriptor callableDescriptor2) {
        this.f34707a = z10;
        this.f34708b = callableDescriptor;
        this.f34709c = callableDescriptor2;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker.TypeConstructorEquality
    public boolean equals(TypeConstructor typeConstructor, TypeConstructor typeConstructor2) {
        boolean f10;
        f10 = DescriptorEquivalenceForOverrides.f(this.f34707a, this.f34708b, this.f34709c, typeConstructor, typeConstructor2);
        return f10;
    }
}
