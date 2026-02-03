package x1;

import android.os.Build;
import java.util.HashMap;
import kotlin.collections.o0;
import lr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: d  reason: collision with root package name */
    private final int f53071d;

    /* renamed from: a  reason: collision with root package name */
    private final int f53068a = 30;

    /* renamed from: b  reason: collision with root package name */
    private final int f53069b = 31;

    /* renamed from: c  reason: collision with root package name */
    private final int f53070c = 33;

    /* renamed from: e  reason: collision with root package name */
    private final HashMap f53072e = o0.k(v.a("robolectric-BrandX/ProductX/Device30:11", 30), v.a("robolectric-BrandX/ProductX/Device31:12", 31), v.a("OPPO/CPH2025EEA/OP4BA2L1:12", 30), v.a("OPPO/CPH2207EEA/OP4F0BL1:12", 30), v.a("OPPO/PENM00/OP4EC1:11", 30), v.a("OnePlus/OnePlus7TTMO/OnePlus7TTMO:11", 30), v.a("OnePlus/OnePlus8_BETA/OnePlus8:11", 30), v.a("Xiaomi/umi_global/umi:11", 30), v.a("realme/RMX2085/RMX2085L1:11", 30), v.a("samsung/c1qsqw/c1q:12", 30), v.a("samsung/o1quew/o1q:12", 30), v.a("samsung/r0quew/r0q:12", 30), v.a("samsung/r0sxxx/r0s:12", 30));

    /* renamed from: f  reason: collision with root package name */
    private final int f53073f = a();

    private final int a() {
        int d10 = d();
        if (e(d10)) {
            return d10;
        }
        int c10 = c();
        if (e(c10)) {
            return c10;
        }
        return this.f53071d;
    }

    private final int c() {
        String str = Build.BRAND;
        String str2 = Build.PRODUCT;
        String str3 = Build.DEVICE;
        String str4 = Build.VERSION.RELEASE;
        Integer num = (Integer) this.f53072e.get(str + '/' + str2 + '/' + str3 + ':' + str4);
        if (num == null) {
            num = Integer.valueOf(this.f53071d);
        }
        return num.intValue();
    }

    private final int d() {
        int i10;
        if (Build.VERSION.SDK_INT >= 31) {
            i10 = Build.VERSION.MEDIA_PERFORMANCE_CLASS;
            return i10;
        }
        return this.f53071d;
    }

    private final boolean e(int i10) {
        if (i10 >= this.f53068a) {
            return true;
        }
        return false;
    }

    public int b() {
        return this.f53073f;
    }
}
