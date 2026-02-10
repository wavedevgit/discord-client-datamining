package us;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class e1 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final h1 f51029d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51030e;

    public e1(h1 h1Var, String str) {
        this.f51029d = h1Var;
        this.f51030e = str;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        FunctionDescriptor R;
        R = h1.R(this.f51029d, this.f51030e);
        return R;
    }
}
