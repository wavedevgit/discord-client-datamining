package qd;

import android.os.Bundle;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    private static final String f46921q = ne.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f46922r = ne.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    public static final g.a f46923s = new g.a() { // from class: qd.t0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return u0.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f46924d;

    /* renamed from: e  reason: collision with root package name */
    public final String f46925e;

    /* renamed from: i  reason: collision with root package name */
    public final int f46926i;

    /* renamed from: o  reason: collision with root package name */
    private final Format[] f46927o;

    /* renamed from: p  reason: collision with root package name */
    private int f46928p;

    public u0(Format... formatArr) {
        this("", formatArr);
    }

    public static /* synthetic */ u0 a(Bundle bundle) {
        ni.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f46921q);
        if (parcelableArrayList == null) {
            d10 = ni.s.t();
        } else {
            d10 = ne.d.d(Format.A0, parcelableArrayList);
        }
        return new u0(bundle.getString(f46922r, ""), (Format[]) d10.toArray(new Format[0]));
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
        String f10 = f(this.f46927o[0].f11578i);
        int g10 = g(this.f46927o[0].f11580p);
        int i10 = 1;
        while (true) {
            Format[] formatArr = this.f46927o;
            if (i10 < formatArr.length) {
                if (!f10.equals(f(formatArr[i10].f11578i))) {
                    Format[] formatArr2 = this.f46927o;
                    e("languages", formatArr2[0].f11578i, formatArr2[i10].f11578i, i10);
                    return;
                } else if (g10 != g(this.f46927o[i10].f11580p)) {
                    e("role flags", Integer.toBinaryString(this.f46927o[0].f11580p), Integer.toBinaryString(this.f46927o[i10].f11580p), i10);
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
        return new u0(str, this.f46927o);
    }

    public Format c(int i10) {
        return this.f46927o[i10];
    }

    public int d(Format format) {
        int i10 = 0;
        while (true) {
            Format[] formatArr = this.f46927o;
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
            if (this.f46925e.equals(u0Var.f46925e) && Arrays.equals(this.f46927o, u0Var.f46927o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f46928p == 0) {
            this.f46928p = ((527 + this.f46925e.hashCode()) * 31) + Arrays.hashCode(this.f46927o);
        }
        return this.f46928p;
    }

    public u0(String str, Format... formatArr) {
        ne.a.a(formatArr.length > 0);
        this.f46925e = str;
        this.f46927o = formatArr;
        this.f46924d = formatArr.length;
        int k10 = ne.c0.k(formatArr[0].f11587w);
        this.f46926i = k10 == -1 ? ne.c0.k(formatArr[0].f11586v) : k10;
        h();
    }
}
