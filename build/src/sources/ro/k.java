package ro;

import com.withpersona.sdk2.inquiry.governmentid.video_capture.VideoCaptureConfig;
import java.util.List;
import jo.g3;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {
    public k(tq.a aVar) {
    }

    public final tq.a b() {
        return null;
    }

    public final boolean c(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        ao.a e10 = e(renderProps);
        if (e10 != ao.a.f6226d && e10 != ao.a.f6227e) {
            return false;
        }
        return true;
    }

    public final boolean d() {
        return false;
    }

    public final ao.a e(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        VideoCaptureConfig v10 = renderProps.v();
        List c10 = v10.c();
        if (!v10.e()) {
            return ao.a.f6228i;
        }
        if (CollectionsKt.firstOrNull(v10.c()) == ao.a.f6226d && !tq.c.d()) {
            List c11 = v10.c();
            ao.a aVar = ao.a.f6227e;
            if (c11.contains(aVar)) {
                return aVar;
            }
            return ao.a.f6228i;
        }
        ao.a aVar2 = ao.a.f6227e;
        if (c10.contains(aVar2)) {
            return aVar2;
        }
        ao.a aVar3 = (ao.a) CollectionsKt.firstOrNull(c10);
        if (aVar3 == null) {
            return ao.a.f6228i;
        }
        return aVar3;
    }

    public final boolean f(g3.a renderProps) {
        Intrinsics.checkNotNullParameter(renderProps, "renderProps");
        List c10 = renderProps.v().c();
        if (renderProps.v().e() && CollectionsKt.firstOrNull(c10) == ao.a.f6226d && !tq.c.d()) {
            return false;
        }
        return true;
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ k(tq.a r1, int r2, kotlin.jvm.internal.DefaultConstructorMarker r3) {
        /*
            r0 = this;
            r2 = r2 & 1
            if (r2 == 0) goto L8
            tq.c.b()
            r1 = 0
        L8:
            r0.<init>(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ro.k.<init>(tq.a, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    public final void a() {
    }
}
