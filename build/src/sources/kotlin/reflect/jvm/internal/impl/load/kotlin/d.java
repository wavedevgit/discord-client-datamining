package kotlin.reflect.jvm.internal.impl.load.kotlin;

import java.util.Collection;
import kotlin.jvm.functions.Function0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    public static final d f33309d = new d();

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        Collection b10;
        b10 = DeserializedDescriptorResolver.b();
        return b10;
    }
}
