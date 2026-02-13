package us;

import java.lang.reflect.Type;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import us.w0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinType f51658d;

    /* renamed from: e  reason: collision with root package name */
    private final w0.a f51659e;

    /* renamed from: i  reason: collision with root package name */
    private final w0 f51660i;

    public l0(KotlinType kotlinType, w0.a aVar, w0 w0Var) {
        this.f51658d = kotlinType;
        this.f51659e = aVar;
        this.f51660i = w0Var;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Type b02;
        b02 = w0.a.b0(this.f51658d, this.f51659e, this.f51660i);
        return b02;
    }
}
