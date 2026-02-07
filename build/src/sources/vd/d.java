package vd;

import android.net.Uri;
import android.text.TextUtils;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import dd.h0;
import java.io.EOFException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import mc.t1;
import ne.c0;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d implements h {

    /* renamed from: d  reason: collision with root package name */
    private static final int[] f52488d = {8, 13, 11, 2, 0, 1, 7};

    /* renamed from: b  reason: collision with root package name */
    private final int f52489b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f52490c;

    public d() {
        this(0, true);
    }

    private static void b(int i10, List list) {
        if (pi.e.h(f52488d, i10) != -1 && !list.contains(Integer.valueOf(i10))) {
            list.add(Integer.valueOf(i10));
        }
    }

    private tc.k d(int i10, Format format, List list, s0 s0Var) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 7) {
                        if (i10 != 8) {
                            if (i10 != 11) {
                                if (i10 != 13) {
                                    return null;
                                }
                                return new t(format.f11578i, s0Var);
                            }
                            return f(this.f52489b, this.f52490c, format, list, s0Var);
                        }
                        return e(s0Var, format, list);
                    }
                    return new ad.f(0, 0L);
                }
                return new dd.h();
            }
            return new dd.e();
        }
        return new dd.b();
    }

    private static bd.g e(s0 s0Var, Format format, List list) {
        int i10;
        if (g(format)) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        if (list == null) {
            list = Collections.EMPTY_LIST;
        }
        return new bd.g(i10, s0Var, null, list);
    }

    private static h0 f(int i10, boolean z10, Format format, List list, s0 s0Var) {
        int i11 = i10 | 16;
        if (list != null) {
            i11 = i10 | 48;
        } else if (z10) {
            list = Collections.singletonList(new Format.b().g0("application/cea-608").G());
        } else {
            list = Collections.EMPTY_LIST;
        }
        String str = format.f11584t;
        if (!TextUtils.isEmpty(str)) {
            if (!c0.b(str, "audio/mp4a-latm")) {
                i11 |= 2;
            }
            if (!c0.b(str, "video/avc")) {
                i11 |= 4;
            }
        }
        return new h0(2, s0Var, new dd.j(i11, list));
    }

    private static boolean g(Format format) {
        Metadata.b d10;
        Metadata metadata = format.f11585u;
        if (metadata == null) {
            return false;
        }
        for (int i10 = 0; i10 < metadata.e(); i10++) {
            if (metadata.d(i10) instanceof q) {
                return !((q) d10).f52600i.isEmpty();
            }
        }
        return false;
    }

    private static boolean h(tc.k kVar, tc.l lVar) {
        try {
            boolean f10 = kVar.f(lVar);
            lVar.e();
            return f10;
        } catch (EOFException unused) {
            lVar.e();
            return false;
        } catch (Throwable th2) {
            lVar.e();
            throw th2;
        }
    }

    @Override // vd.h
    /* renamed from: c */
    public b a(Uri uri, Format format, List list, s0 s0Var, Map map, tc.l lVar, t1 t1Var) {
        int a10 = ne.p.a(format.f11587w);
        int b10 = ne.p.b(map);
        int c10 = ne.p.c(uri);
        int[] iArr = f52488d;
        ArrayList arrayList = new ArrayList(iArr.length);
        b(a10, arrayList);
        b(b10, arrayList);
        b(c10, arrayList);
        for (int i10 : iArr) {
            b(i10, arrayList);
        }
        lVar.e();
        tc.k kVar = null;
        for (int i11 = 0; i11 < arrayList.size(); i11++) {
            int intValue = ((Integer) arrayList.get(i11)).intValue();
            tc.k kVar2 = (tc.k) ne.a.e(d(intValue, format, list, s0Var));
            if (h(kVar2, lVar)) {
                return new b(kVar2, format, s0Var);
            }
            if (kVar == null && (intValue == a10 || intValue == b10 || intValue == c10 || intValue == 11)) {
                kVar = kVar2;
            }
        }
        return new b((tc.k) ne.a.e(kVar), format, s0Var);
    }

    public d(int i10, boolean z10) {
        this.f52489b = i10;
        this.f52490c = z10;
    }
}
