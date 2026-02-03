package fs;

import fs.w0;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class c0 implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final w0 f24479d;

    public c0(w0 w0Var) {
        this.f24479d = w0Var;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        ClassDescriptor G;
        G = w0.a.G(this.f24479d);
        return G;
    }
}
