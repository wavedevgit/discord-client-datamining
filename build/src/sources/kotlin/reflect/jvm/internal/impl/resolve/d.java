package kotlin.reflect.jvm.internal.impl.resolve;

import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements KotlinTypeChecker.TypeConstructorEquality {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f33916a;

    /* renamed from: b  reason: collision with root package name */
    private final CallableDescriptor f33917b;

    /* renamed from: c  reason: collision with root package name */
    private final CallableDescriptor f33918c;

    public d(boolean z10, CallableDescriptor callableDescriptor, CallableDescriptor callableDescriptor2) {
        this.f33916a = z10;
        this.f33917b = callableDescriptor;
        this.f33918c = callableDescriptor2;
    }

    @Override // kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeChecker.TypeConstructorEquality
    public boolean equals(TypeConstructor typeConstructor, TypeConstructor typeConstructor2) {
        boolean f10;
        f10 = DescriptorEquivalenceForOverrides.f(this.f33916a, this.f33917b, this.f33918c, typeConstructor, typeConstructor2);
        return f10;
    }
}
