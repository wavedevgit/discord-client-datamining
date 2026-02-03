package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JvmBuiltIns f32738d;

    /* renamed from: e  reason: collision with root package name */
    private final StorageManager f32739e;

    public c(JvmBuiltIns jvmBuiltIns, StorageManager storageManager) {
        this.f32738d = jvmBuiltIns;
        this.f32739e = storageManager;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        JvmBuiltInsCustomizer t10;
        t10 = JvmBuiltIns.t(this.f32738d, this.f32739e);
        return t10;
    }
}
