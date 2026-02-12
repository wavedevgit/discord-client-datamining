package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.UnwrappedType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class b implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeAliasDescriptor f32568d;

    public b(AbstractTypeAliasDescriptor abstractTypeAliasDescriptor) {
        this.f32568d = abstractTypeAliasDescriptor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Boolean i10;
        i10 = AbstractTypeAliasDescriptor.i(this.f32568d, (UnwrappedType) obj);
        return i10;
    }
}
