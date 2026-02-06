package qd;

import android.os.Bundle;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    private static final String f46873q = ne.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f46874r = ne.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    public static final g.a f46875s = new g.a() { // from class: qd.t0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return u0.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f46876d;

    /* renamed from: e  reason: collision with root package name */
    public final String f46877e;

    /* renamed from: i  reason: collision with root package name */
    public final int f46878i;

    /* renamed from: o  reason: collision with root package name */
    private final Format[] f46879o;

    /* renamed from: p  reason: collision with root package name */
    private int f46880p;

    public u0(Format... formatArr) {
        this("", formatArr);
    }

    public static /* synthetic */ u0 a(Bundle bundle) {
        ni.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f46873q);
        if (parcelableArrayList == null) {
            d10 = ni.s.t();
        } else {
            d10 = ne.d.d(Format.A0, parcelableArrayList);
        }
        return new u0(bundle.getString(f46874r, ""), (Format[]) d10.toArray(new Format[0]));
    }

    private static void e(String str, String str2, String str3, int i10) {
        ne.y.d("TrackGroup", "", new IllegalStateException("Different " + str + " combined in one TrackGroup: '" + str2 + "' (track 0) and '" + str3 + "' (track " + i10 + ")"));
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
        String f10 = f(this.f46879o[0].f11578i);
        int g10 = g(this.f46879o[0].f11580p);
        int i10 = 1;
        while (true) {
            Format[] formatArr = this.f46879o;
            if (i10 < formatArr.length) {
                if (!f10.equals(f(formatArr[i10].f11578i))) {
                    Format[] formatArr2 = this.f46879o;
                    e("languages", formatArr2[0].f11578i, formatArr2[i10].f11578i, i10);
                    return;
                } else if (g10 != g(this.f46879o[i10].f11580p)) {
                    e("role flags", Integer.toBinaryString(this.f46879o[0].f11580p), Integer.toBinaryString(this.f46879o[i10].f11580p), i10);
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
        return new u0(str, this.f46879o);
    }

    public Format c(int i10) {
        return this.f46879o[i10];
    }

    public int d(Format format) {
        int i10 = 0;
        while (true) {
            Format[] formatArr = this.f46879o;
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
            if (this.f46877e.equals(u0Var.f46877e) && Arrays.equals(this.f46879o, u0Var.f46879o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f46880p == 0) {
            this.f46880p = ((527 + this.f46877e.hashCode()) * 31) + Arrays.hashCode(this.f46879o);
        }
        return this.f46880p;
    }

    public u0(String str, Format... formatArr) {
        ne.a.a(formatArr.length > 0);
        this.f46877e = str;
        this.f46879o = formatArr;
        this.f46876d = formatArr.length;
        int k10 = ne.c0.k(formatArr[0].f11587w);
        this.f46878i = k10 == -1 ? ne.c0.k(formatArr[0].f11586v) : k10;
        h();
    }
}
