package kotlin.reflect.jvm.internal.impl.resolve.scopes;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class f implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeSubstitutor f35515d;

    public f(TypeSubstitutor typeSubstitutor) {
        this.f35515d = typeSubstitutor;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        TypeSubstitutor g10;
        g10 = SubstitutingScope.g(this.f35515d);
        return g10;
    }
}
