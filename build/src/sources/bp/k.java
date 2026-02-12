package bp;

import com.withpersona.sdk2.inquiry.governmentid.video_capture.VideoCaptureConfig;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import to.g3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {
    public k(dr.a aVar) {
    }

    public final dr.a b() {
        return null;
    }

    public final boolean c(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        lo.a e10 = e(renderProps);
        if (e10 != lo.a.f35949d && e10 != lo.a.f35950e) {
            return false;
        }
        return true;
    }

    public final boolean d() {
        return false;
    }

    public final lo.a e(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        VideoCaptureConfig v10 = renderProps.v();
        List c10 = v10.c();
        if (!v10.e()) {
            return lo.a.f35951i;
        }
        if (CollectionsKt.firstOrNull(v10.c()) == lo.a.f35949d && !dr.c.d()) {
            List c11 = v10.c();
            lo.a aVar = lo.a.f35950e;
            if (c11.contains(aVar)) {
                return aVar;
            }
            return lo.a.f35951i;
        }
        lo.a aVar2 = lo.a.f35950e;
        if (c10.contains(aVar2)) {
            return aVar2;
        }
        lo.a aVar3 = (lo.a) CollectionsKt.firstOrNull(c10);
        if (aVar3 == null) {
            return lo.a.f35951i;
        }
        return aVar3;
    }

    public final boolean f(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        List c10 = renderProps.v().c();
        if (renderProps.v().e() && CollectionsKt.firstOrNull(c10) == lo.a.f35949d && !dr.c.d()) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ k(dr.a r1, int r2, kotlin.jvm.internal.DefaultConstructorMarker r3) {
        /*
            r0 = this;
            r2 = r2 & 1
            if (r2 == 0) goto L8
            dr.c.b()
            r1 = 0
        L8:
            r0.<init>(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: bp.k.<init>(dr.a, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    public final void a() {
    }
}
