package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.MemberScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class c implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final c f34286d = new c();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        boolean a10;
        a10 = MemberScope.Companion.a((Name) obj);
        return Boolean.valueOf(a10);
    }
}
