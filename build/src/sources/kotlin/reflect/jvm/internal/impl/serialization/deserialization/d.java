package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import java.util.Collection;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final DeserializedPackageFragmentImpl f35642d;

    public d(DeserializedPackageFragmentImpl deserializedPackageFragmentImpl) {
        this.f35642d = deserializedPackageFragmentImpl;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Collection e10;
        e10 = DeserializedPackageFragmentImpl.e(this.f35642d);
        return e10;
    }
}
