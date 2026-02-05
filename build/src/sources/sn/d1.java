package sn;

import android.graphics.BitmapFactory;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.ExecutionException;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d1 {

    /* renamed from: a  reason: collision with root package name */
    private final Lazy f49845a = or.l.a(new Function0() { // from class: sn.c1
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            ck.c d10;
            d10 = d1.d();
            return d10;
        }
    });

    private final ck.c c() {
        return (ck.c) this.f49845a.getValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ck.c d() {
        ck.c a10 = ck.b.a(ek.a.f21628d);
        Intrinsics.checkNotNullExpressionValue(a10, "getClient(...)");
        return a10;
    }

    public final String b(String imagePath) {
        Intrinsics.checkNotNullParameter(imagePath, "imagePath");
        try {
            yj.a a10 = yj.a.a(BitmapFactory.decodeFile(imagePath), 0);
            Intrinsics.checkNotNullExpressionValue(a10, "fromBitmap(...)");
            Task e10 = c().e(a10);
            Intrinsics.checkNotNullExpressionValue(e10, "process(...)");
            try {
                xg.m.a(e10);
            } catch (ExecutionException unused) {
            }
            return ((ck.a) e10.l()).a();
        } catch (Exception unused2) {
            return null;
        }
    }
}
