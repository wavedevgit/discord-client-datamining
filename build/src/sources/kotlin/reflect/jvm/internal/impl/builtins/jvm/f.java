package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final JvmBuiltInsCustomizer f32287d;

    /* renamed from: e  reason: collision with root package name */
    private final StorageManager f32288e;

    public f(JvmBuiltInsCustomizer jvmBuiltInsCustomizer, StorageManager storageManager) {
        this.f32287d = jvmBuiltInsCustomizer;
        this.f32288e = storageManager;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        SimpleType j10;
        j10 = JvmBuiltInsCustomizer.j(this.f32287d, this.f32288e);
        return j10;
    }
}
