package kotlin.reflect.jvm.internal.impl.serialization.deserialization;

import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    public static final q f34488d = new q();

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        int w10;
        w10 = TypeDeserializer.w((ProtoBuf.Type) obj);
        return Integer.valueOf(w10);
    }
}
