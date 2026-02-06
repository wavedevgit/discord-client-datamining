package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import java.util.List;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final StaticScopeForKotlinEnum f34239d;

    public d(StaticScopeForKotlinEnum staticScopeForKotlinEnum) {
        this.f34239d = staticScopeForKotlinEnum;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        List c10;
        c10 = StaticScopeForKotlinEnum.c(this.f34239d);
        return c10;
    }
}
