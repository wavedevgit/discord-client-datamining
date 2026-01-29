package kotlin.reflect.jvm.internal.impl.util;

import kotlin.jvm.functions.Function1;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class i implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeRegistry f36090d;

    public i(TypeRegistry typeRegistry) {
        this.f36090d = typeRegistry;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        int b10;
        b10 = TypeRegistry.b(this.f36090d, (String) obj);
        return Integer.valueOf(b10);
    }
}
