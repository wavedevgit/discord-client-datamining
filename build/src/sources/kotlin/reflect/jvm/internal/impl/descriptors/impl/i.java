package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeAliasConstructorDescriptorImpl f33051d;

    /* renamed from: e  reason: collision with root package name */
    private final ClassConstructorDescriptor f33052e;

    public i(TypeAliasConstructorDescriptorImpl typeAliasConstructorDescriptorImpl, ClassConstructorDescriptor classConstructorDescriptor) {
        this.f33051d = typeAliasConstructorDescriptorImpl;
        this.f33052e = classConstructorDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        TypeAliasConstructorDescriptorImpl k10;
        k10 = TypeAliasConstructorDescriptorImpl.k(this.f33051d, this.f33052e);
        return k10;
    }
}
