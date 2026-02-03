package fs;

import fs.w0;
import java.lang.reflect.Type;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class l0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final KotlinType f24564d;

    /* renamed from: e  reason: collision with root package name */
    private final w0.a f24565e;

    /* renamed from: i  reason: collision with root package name */
    private final w0 f24566i;

    public l0(KotlinType kotlinType, w0.a aVar, w0 w0Var) {
        this.f24564d = kotlinType;
        this.f24565e = aVar;
        this.f24566i = w0Var;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Type b02;
        b02 = w0.a.b0(this.f24564d, this.f24565e, this.f24566i);
        return b02;
    }
}
