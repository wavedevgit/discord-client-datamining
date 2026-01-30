package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
import kotlin.reflect.jvm.internal.impl.types.checker.KotlinTypeRefiner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class h implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final ScopesHolderForClass f33683d;

    /* renamed from: e  reason: collision with root package name */
    private final KotlinTypeRefiner f33684e;

    public h(ScopesHolderForClass scopesHolderForClass, KotlinTypeRefiner kotlinTypeRefiner) {
        this.f33683d = scopesHolderForClass;
        this.f33684e = kotlinTypeRefiner;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        MemberScope c10;
        c10 = ScopesHolderForClass.c(this.f33683d, this.f33684e);
        return c10;
    }
}
