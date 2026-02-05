package po;

import com.withpersona.sdk2.inquiry.governmentid.video_capture.VideoCaptureConfig;
import ho.g3;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {
    public k(rq.a aVar) {
    }

    public final rq.a b() {
        return null;
    }

    public final boolean c(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        yn.a e10 = e(renderProps);
        if (e10 != yn.a.f54862d && e10 != yn.a.f54863e) {
            return false;
        }
        return true;
    }

    public final boolean d() {
        return false;
    }

    public final yn.a e(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        VideoCaptureConfig v10 = renderProps.v();
        List c10 = v10.c();
        if (!v10.e()) {
            return yn.a.f54864i;
        }
        if (CollectionsKt.firstOrNull(v10.c()) == yn.a.f54862d && !rq.c.d()) {
            List c11 = v10.c();
            yn.a aVar = yn.a.f54863e;
            if (c11.contains(aVar)) {
                return aVar;
            }
            return yn.a.f54864i;
        }
        yn.a aVar2 = yn.a.f54863e;
        if (c10.contains(aVar2)) {
            return aVar2;
        }
        yn.a aVar3 = (yn.a) CollectionsKt.firstOrNull(c10);
        if (aVar3 == null) {
            return yn.a.f54864i;
        }
        return aVar3;
    }

    public final boolean f(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        List c10 = renderProps.v().c();
        if (renderProps.v().e() && CollectionsKt.firstOrNull(c10) == yn.a.f54862d && !rq.c.d()) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ k(rq.a r1, int r2, kotlin.jvm.internal.DefaultConstructorMarker r3) {
        /*
            r0 = this;
            r2 = r2 & 1
            if (r2 == 0) goto L8
            rq.c.b()
            r1 = 0
        L8:
            r0.<init>(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: po.k.<init>(rq.a, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    public final void a() {
    }
}
