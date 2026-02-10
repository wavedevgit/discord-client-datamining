package so;

import com.withpersona.sdk2.inquiry.governmentid.video_capture.VideoCaptureConfig;
import java.util.List;
import ko.g3;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {
    public k(uq.a aVar) {
    }

    public final uq.a b() {
        return null;
    }

    public final boolean c(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        bo.a e10 = e(renderProps);
        if (e10 != bo.a.f7161d && e10 != bo.a.f7162e) {
            return false;
        }
        return true;
    }

    public final boolean d() {
        return false;
    }

    public final bo.a e(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        VideoCaptureConfig v10 = renderProps.v();
        List c10 = v10.c();
        if (!v10.e()) {
            return bo.a.f7163i;
        }
        if (CollectionsKt.firstOrNull(v10.c()) == bo.a.f7161d && !uq.c.d()) {
            List c11 = v10.c();
            bo.a aVar = bo.a.f7162e;
            if (c11.contains(aVar)) {
                return aVar;
            }
            return bo.a.f7163i;
        }
        bo.a aVar2 = bo.a.f7162e;
        if (c10.contains(aVar2)) {
            return aVar2;
        }
        bo.a aVar3 = (bo.a) CollectionsKt.firstOrNull(c10);
        if (aVar3 == null) {
            return bo.a.f7163i;
        }
        return aVar3;
    }

    public final boolean f(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        List c10 = renderProps.v().c();
        if (renderProps.v().e() && CollectionsKt.firstOrNull(c10) == bo.a.f7161d && !uq.c.d()) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ k(uq.a r1, int r2, kotlin.jvm.internal.DefaultConstructorMarker r3) {
        /*
            r0 = this;
            r2 = r2 & 1
            if (r2 == 0) goto L8
            uq.c.b()
            r1 = 0
        L8:
            r0.<init>(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: so.k.<init>(uq.a, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    public final void a() {
    }
}
