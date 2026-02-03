package ko;

import bo.g3;
import com.withpersona.sdk2.inquiry.governmentid.video_capture.VideoCaptureConfig;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {
    public k(mq.a aVar) {
    }

    public final mq.a b() {
        return null;
    }

    public final boolean c(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        tn.a e10 = e(renderProps);
        if (e10 != tn.a.f49944d && e10 != tn.a.f49945e) {
            return false;
        }
        return true;
    }

    public final boolean d() {
        return false;
    }

    public final tn.a e(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        VideoCaptureConfig v10 = renderProps.v();
        List c10 = v10.c();
        if (!v10.e()) {
            return tn.a.f49946i;
        }
        if (CollectionsKt.firstOrNull(v10.c()) == tn.a.f49944d && !mq.c.d()) {
            List c11 = v10.c();
            tn.a aVar = tn.a.f49945e;
            if (c11.contains(aVar)) {
                return aVar;
            }
            return tn.a.f49946i;
        }
        tn.a aVar2 = tn.a.f49945e;
        if (c10.contains(aVar2)) {
            return aVar2;
        }
        tn.a aVar3 = (tn.a) CollectionsKt.firstOrNull(c10);
        if (aVar3 == null) {
            return tn.a.f49946i;
        }
        return aVar3;
    }

    public final boolean f(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        List c10 = renderProps.v().c();
        if (renderProps.v().e() && CollectionsKt.firstOrNull(c10) == tn.a.f49944d && !mq.c.d()) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ k(mq.a r1, int r2, kotlin.jvm.internal.DefaultConstructorMarker r3) {
        /*
            r0 = this;
            r2 = r2 & 1
            if (r2 == 0) goto L8
            mq.c.b()
            r1 = 0
        L8:
            r0.<init>(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ko.k.<init>(mq.a, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    public final void a() {
    }
}
