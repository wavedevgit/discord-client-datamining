package ls;

import java.lang.reflect.Type;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import ls.w0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinType f36484d;

    /* renamed from: e  reason: collision with root package name */
    private final w0.a f36485e;

    /* renamed from: i  reason: collision with root package name */
    private final w0 f36486i;

    public l0(KotlinType kotlinType, w0.a aVar, w0 w0Var) {
        this.f36484d = kotlinType;
        this.f36485e = aVar;
        this.f36486i = w0Var;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Type b02;
        b02 = w0.a.b0(this.f36484d, this.f36485e, this.f36486i);
        return b02;
    }
}
