package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeAliasDescriptor f33045d;

    public c(AbstractTypeAliasDescriptor abstractTypeAliasDescriptor) {
        this.f33045d = abstractTypeAliasDescriptor;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        SimpleType f10;
        f10 = AbstractTypeAliasDescriptor.f(this.f33045d, (KotlinTypeRefiner) obj);
        return f10;
    }
}
