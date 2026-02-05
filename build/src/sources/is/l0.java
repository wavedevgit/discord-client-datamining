package is;

import is.w0;
import java.lang.reflect.Type;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinType f30251d;

    /* renamed from: e  reason: collision with root package name */
    private final w0.a f30252e;

    /* renamed from: i  reason: collision with root package name */
    private final w0 f30253i;

    public l0(KotlinType kotlinType, w0.a aVar, w0 w0Var) {
        this.f30251d = kotlinType;
        this.f30252e = aVar;
        this.f30253i = w0Var;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Type b02;
        b02 = w0.a.b0(this.f30251d, this.f30252e, this.f30253i);
        return b02;
    }
}
