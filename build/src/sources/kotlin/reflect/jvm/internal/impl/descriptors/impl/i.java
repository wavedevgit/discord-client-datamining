package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeAliasConstructorDescriptorImpl f32595d;

    /* renamed from: e  reason: collision with root package name */
    private final ClassConstructorDescriptor f32596e;

    public i(TypeAliasConstructorDescriptorImpl typeAliasConstructorDescriptorImpl, ClassConstructorDescriptor classConstructorDescriptor) {
        this.f32595d = typeAliasConstructorDescriptorImpl;
        this.f32596e = classConstructorDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        TypeAliasConstructorDescriptorImpl k10;
        k10 = TypeAliasConstructorDescriptorImpl.k(this.f32595d, this.f32596e);
        return k10;
    }
}
