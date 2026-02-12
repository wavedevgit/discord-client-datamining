package fo;

import android.graphics.BitmapFactory;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f23995a = as.l.b(new Function0() { // from class: fo.c1
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            gk.c d10;
            d10 = d1.d();
            return d10;
        }
    });

    private final gk.c c() {
        return (gk.c) this.f23995a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final gk.c d() {
        gk.c a10 = gk.b.a(ik.a.f27973d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    public final String b(String imagePath) {
        Intrinsics.checkNotNullParameter(imagePath, "imagePath");
        try {
            ck.a a10 = ck.a.a(BitmapFactory.decodeFile(imagePath), 0);
            Intrinsics.checkNotNullExpressionValue(a10, "fromBitmap(...)");
            Task e10 = c().e(a10);
            Intrinsics.checkNotNullExpressionValue(e10, "process(...)");
            try {
                zg.m.a(e10);
            } catch (ExecutionException unused) {
            }
            return ((gk.a) e10.l()).a();
        } catch (Exception unused2) {
            return null;
        }
    }
}
