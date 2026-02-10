package rd;

import android.os.Bundle;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    private static final String f46493q = oe.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f46494r = oe.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    public static final g.a f46495s = new g.a() { // from class: rd.t0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return u0.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f46496d;

    /* renamed from: e  reason: collision with root package name */
    public final String f46497e;

    /* renamed from: i  reason: collision with root package name */
    public final int f46498i;

    /* renamed from: o  reason: collision with root package name */
    private final Format[] f46499o;

    /* renamed from: p  reason: collision with root package name */
    private int f46500p;

    public u0(Format... formatArr) {
        this("", formatArr);
    }

    public static /* synthetic */ u0 a(Bundle bundle) {
        qi.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f46493q);
        if (parcelableArrayList == null) {
            d10 = qi.s.t();
        } else {
            d10 = oe.d.d(Format.A0, parcelableArrayList);
        }
        return new u0(bundle.getString(f46494r, ""), (Format[]) d10.toArray(new Format[0]));
    }

    private static void e(String str, String str2, String str3, int i10) {
        oe.y.d("TrackGroup", "", new IllegalStateException("Different " + str + " combined in one TrackGroup: '" + str2 + "' (track 0) and '" + str3 + "' (track " + i10 + ")"));
    }

    private static String f(String str) {
        if (str != null && !str.equals("und")) {
            return str;
        }
        return "";
    }

    private static int g(int i10) {
        return i10 | 16384;
    }

    private void h() {
        String f10 = f(this.f46499o[0].f12295i);
        int g10 = g(this.f46499o[0].f12297p);
        int i10 = 1;
        while (true) {
            Format[] formatArr = this.f46499o;
            if (i10 < formatArr.length) {
                if (!f10.equals(f(formatArr[i10].f12295i))) {
                    Format[] formatArr2 = this.f46499o;
                    e("languages", formatArr2[0].f12295i, formatArr2[i10].f12295i, i10);
                    return;
                } else if (g10 != g(this.f46499o[i10].f12297p)) {
                    e("role flags", Integer.toBinaryString(this.f46499o[0].f12297p), Integer.toBinaryString(this.f46499o[i10].f12297p), i10);
                    return;
                } else {
                    i10++;
                }
            } else {
                return;
            }
        }
    }

    public u0 b(String str) {
        return new u0(str, this.f46499o);
    }

    public Format c(int i10) {
        return this.f46499o[i10];
    }

    public int d(Format format) {
        int i10 = 0;
        while (true) {
            Format[] formatArr = this.f46499o;
            if (i10 < formatArr.length) {
                if (format == formatArr[i10]) {
                    return i10;
                }
                i10++;
            } else {
                return -1;
            }
        }
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && u0.class == obj.getClass()) {
            u0 u0Var = (u0) obj;
            if (this.f46497e.equals(u0Var.f46497e) && Arrays.equals(this.f46499o, u0Var.f46499o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f46500p == 0) {
            this.f46500p = ((527 + this.f46497e.hashCode()) * 31) + Arrays.hashCode(this.f46499o);
        }
        return this.f46500p;
    }

    public u0(String str, Format... formatArr) {
        oe.a.a(formatArr.length > 0);
        this.f46497e = str;
        this.f46499o = formatArr;
        this.f46496d = formatArr.length;
        int k10 = oe.c0.k(formatArr[0].f12304w);
        this.f46498i = k10 == -1 ? oe.c0.k(formatArr[0].f12303v) : k10;
        h();
    }
}
