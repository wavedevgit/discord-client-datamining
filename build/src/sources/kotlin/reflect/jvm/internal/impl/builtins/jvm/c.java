package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JvmBuiltIns f33348d;

    /* renamed from: e  reason: collision with root package name */
    private final StorageManager f33349e;

    public c(JvmBuiltIns jvmBuiltIns, StorageManager storageManager) {
        this.f33348d = jvmBuiltIns;
        this.f33349e = storageManager;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        JvmBuiltInsCustomizer t10;
        t10 = JvmBuiltIns.t(this.f33348d, this.f33349e);
        return t10;
    }
}
