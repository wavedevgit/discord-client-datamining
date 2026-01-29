package kotlin.reflect.jvm.internal.impl.util;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.util.ReturnsCheck;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final f f36087d = new f();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        KotlinType a10;
        a10 = ReturnsCheck.ReturnsBoolean.a((KotlinBuiltIns) obj);
        return a10;
    }
}
