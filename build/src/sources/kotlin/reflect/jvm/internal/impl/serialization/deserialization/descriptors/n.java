package kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors;

import java.util.Set;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class n implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final Function0 f35527d;

    public n(Function0 function0) {
        this.f35527d = function0;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Set d10;
        d10 = DeserializedMemberScope.d(this.f35527d);
        return d10;
    }
}
