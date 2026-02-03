package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Function0 f35303d;

    public b(Function0 function0) {
        this.f35303d = function0;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        MemberScope c10;
        c10 = LazyScopeAdapter.c(this.f35303d);
        return c10;
    }
}
