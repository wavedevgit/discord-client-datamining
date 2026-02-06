package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final GivenFunctionsMemberScope f34236d;

    public a(GivenFunctionsMemberScope givenFunctionsMemberScope) {
        this.f34236d = givenFunctionsMemberScope;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List b10;
        b10 = GivenFunctionsMemberScope.b(this.f34236d);
        return b10;
    }
}
