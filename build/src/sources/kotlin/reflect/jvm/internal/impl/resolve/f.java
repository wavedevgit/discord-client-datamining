package kotlin.reflect.jvm.internal.impl.resolve;

import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.utils.SmartSet;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final SmartSet f34175d;

    public f(SmartSet smartSet) {
        this.f34175d = smartSet;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit b10;
        b10 = OverridingUtilsKt.b(this.f34175d, obj);
        return b10;
    }
}
