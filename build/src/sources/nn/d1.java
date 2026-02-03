package nn;

import android.graphics.BitmapFactory;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f41937a = jr.l.b(new Function0() { // from class: nn.c1
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            zj.c d10;
            d10 = d1.d();
            return d10;
        }
    });

    private final zj.c c() {
        return (zj.c) this.f41937a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final zj.c d() {
        zj.c a10 = zj.b.a(bk.a.f6572d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    public final String b(String imagePath) {
        Intrinsics.checkNotNullParameter(imagePath, "imagePath");
        try {
            vj.a a10 = vj.a.a(BitmapFactory.decodeFile(imagePath), 0);
            Intrinsics.checkNotNullExpressionValue(a10, "fromBitmap(...)");
            Task g10 = c().g(a10);
            Intrinsics.checkNotNullExpressionValue(g10, "process(...)");
            try {
                wg.m.a(g10);
            } catch (ExecutionException unused) {
            }
            return ((zj.a) g10.l()).a();
        } catch (Exception unused2) {
            return null;
        }
    }
}
