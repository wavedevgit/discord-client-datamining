package kotlin.reflect.jvm.internal.impl.util;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeRegistry f34796d;

    public i(TypeRegistry typeRegistry) {
        this.f34796d = typeRegistry;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        int b10;
        b10 = TypeRegistry.b(this.f34796d, (String) obj);
        return Integer.valueOf(b10);
    }
}
