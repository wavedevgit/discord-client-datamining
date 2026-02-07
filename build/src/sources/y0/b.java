package y0;

import java.util.List;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends d {
    public b(long j10, h hVar) {
        super(j10, hVar, null, new Function1() { // from class: y0.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit m10;
                m10 = b.m(obj);
                return m10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit m(Object obj) {
        synchronized (k.g()) {
            List b10 = k.b();
            int size = b10.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((Function1) b10.get(i10)).invoke(obj);
            }
        }
        return Unit.f32056a;
    }
}
