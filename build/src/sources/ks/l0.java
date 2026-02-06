package ks;

import java.lang.reflect.Type;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import ks.w0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinType f35357d;

    /* renamed from: e  reason: collision with root package name */
    private final w0.a f35358e;

    /* renamed from: i  reason: collision with root package name */
    private final w0 f35359i;

    public l0(KotlinType kotlinType, w0.a aVar, w0 w0Var) {
        this.f35357d = kotlinType;
        this.f35358e = aVar;
        this.f35359i = w0Var;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Type b02;
        b02 = w0.a.b0(this.f35357d, this.f35358e, this.f35359i);
        return b02;
    }
}
