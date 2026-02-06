package un;

import android.graphics.BitmapFactory;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f51691a = qr.l.a(new Function0() { // from class: un.c1
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            dk.c d10;
            d10 = d1.d();
            return d10;
        }
    });

    private final dk.c c() {
        return (dk.c) this.f51691a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final dk.c d() {
        dk.c a10 = dk.b.a(fk.a.f23319d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    public final String b(String imagePath) {
        Intrinsics.checkNotNullParameter(imagePath, "imagePath");
        try {
            zj.a a10 = zj.a.a(BitmapFactory.decodeFile(imagePath), 0);
            Intrinsics.checkNotNullExpressionValue(a10, "fromBitmap(...)");
            Task j10 = c().j(a10);
            Intrinsics.checkNotNullExpressionValue(j10, "process(...)");
            try {
                yg.m.a(j10);
            } catch (ExecutionException unused) {
            }
            return ((dk.a) j10.l()).a();
        } catch (Exception unused2) {
            return null;
        }
    }
}
