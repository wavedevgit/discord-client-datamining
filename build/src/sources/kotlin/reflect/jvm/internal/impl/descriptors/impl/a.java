package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import java.util.Collection;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final AbstractTypeAliasDescriptor f33861d;

    public a(AbstractTypeAliasDescriptor abstractTypeAliasDescriptor) {
        this.f33861d = abstractTypeAliasDescriptor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Collection g10;
        g10 = AbstractTypeAliasDescriptor.g(this.f33861d);
        return g10;
    }
}
