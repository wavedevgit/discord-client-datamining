package d;

import androidx.activity.result.contract.e;
import d.f;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g {
    public static final f a(e.f mediaType, int i10, boolean z10, e.b defaultTab) {
        Intrinsics.checkNotNullParameter(mediaType, "mediaType");
        Intrinsics.checkNotNullParameter(defaultTab, "defaultTab");
        return new f.a().d(mediaType).c(i10).e(z10).b(defaultTab).a();
    }

    public static /* synthetic */ f b(e.f fVar, int i10, boolean z10, e.b bVar, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            fVar = e.c.f887a;
        }
        if ((i11 & 2) != 0) {
            i10 = androidx.activity.result.contract.d.f882b.a();
        }
        if ((i11 & 4) != 0) {
            z10 = false;
        }
        if ((i11 & 8) != 0) {
            bVar = e.b.a.f885a;
        }
        return a(fVar, i10, z10, bVar);
    }
}
