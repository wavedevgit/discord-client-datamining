package kotlin.reflect.jvm.internal.impl.descriptors;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class g implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final ScopesHolderForClass f32392d;

    public g(ScopesHolderForClass scopesHolderForClass) {
        this.f32392d = scopesHolderForClass;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        MemberScope e10;
        e10 = ScopesHolderForClass.e(this.f32392d);
        return e10;
    }
}
