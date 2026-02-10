package vn;

import android.graphics.BitmapFactory;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f52599a = rr.l.a(new Function0() { // from class: vn.c1
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ek.c d10;
            d10 = d1.d();
            return d10;
        }
    });

    private final ek.c c() {
        return (ek.c) this.f52599a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ek.c d() {
        ek.c a10 = ek.b.a(gk.a.f24404d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    public final String b(String imagePath) {
        Intrinsics.checkNotNullParameter(imagePath, "imagePath");
        try {
            ak.a a10 = ak.a.a(BitmapFactory.decodeFile(imagePath), 0);
            Intrinsics.checkNotNullExpressionValue(a10, "fromBitmap(...)");
            Task h10 = c().h(a10);
            Intrinsics.checkNotNullExpressionValue(h10, "process(...)");
            try {
                zg.m.a(h10);
            } catch (ExecutionException unused) {
            }
            return ((ek.a) h10.l()).a();
        } catch (Exception unused2) {
            return null;
        }
    }
}
