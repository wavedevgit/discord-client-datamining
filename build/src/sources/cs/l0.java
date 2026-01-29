package cs;

import cs.w0;
import java.lang.reflect.Type;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinType f21187d;

    /* renamed from: e  reason: collision with root package name */
    private final w0.a f21188e;

    /* renamed from: i  reason: collision with root package name */
    private final w0 f21189i;

    public l0(KotlinType kotlinType, w0.a aVar, w0 w0Var) {
        this.f21187d = kotlinType;
        this.f21188e = aVar;
        this.f21189i = w0Var;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Type b02;
        b02 = w0.a.b0(this.f21187d, this.f21188e, this.f21189i);
        return b02;
    }
}
