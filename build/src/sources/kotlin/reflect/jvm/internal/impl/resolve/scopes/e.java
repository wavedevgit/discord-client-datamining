package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final StaticScopeForKotlinEnum f35306d;

    public e(StaticScopeForKotlinEnum staticScopeForKotlinEnum) {
        this.f35306d = staticScopeForKotlinEnum;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List f10;
        f10 = StaticScopeForKotlinEnum.f(this.f35306d);
        return f10;
    }
}
