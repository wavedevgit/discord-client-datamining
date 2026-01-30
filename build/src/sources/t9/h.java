package t9;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.collections.m0;
import kotlin.ranges.IntRange;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final int f49362a;

    public h(int i10) {
        this.f49362a = i10;
    }

    public final int a(int i10) {
        int i11 = i10 % this.f49362a;
        Integer valueOf = Integer.valueOf(i11);
        if (valueOf.intValue() < 0) {
            valueOf = null;
        }
        if (valueOf != null) {
            return valueOf.intValue();
        }
        return i11 + this.f49362a;
    }

    public final int b() {
        return this.f49362a;
    }

    public final boolean c(int i10, int i11, int i12) {
        int a10 = a(i12 + i10);
        if (i10 < a10) {
            if (i10 <= i11 && i11 <= a10) {
                return true;
            }
            return false;
        } else if ((i10 <= i11 && i11 <= this.f49362a) || (i11 >= 0 && i11 <= a10)) {
            return true;
        } else {
            return false;
        }
    }

    public final List d(int i10, int i11) {
        IntRange u10 = kotlin.ranges.d.u(0, i11);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            arrayList.add(Integer.valueOf(a(((m0) it).nextInt() + i10)));
        }
        return arrayList;
    }
}
