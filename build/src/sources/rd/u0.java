package rd;

import android.os.Bundle;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u0 implements com.google.android.exoplayer2.g {

    /* renamed from: q  reason: collision with root package name */
    private static final String f48039q = oe.w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f48040r = oe.w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    public static final g.a f48041s = new g.a() { // from class: rd.t0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return u0.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f48042d;

    /* renamed from: e  reason: collision with root package name */
    public final String f48043e;

    /* renamed from: i  reason: collision with root package name */
    public final int f48044i;

    /* renamed from: o  reason: collision with root package name */
    private final Format[] f48045o;

    /* renamed from: p  reason: collision with root package name */
    private int f48046p;

    public u0(Format... formatArr) {
        this("", formatArr);
    }

    public static /* synthetic */ u0 a(Bundle bundle) {
        oi.s d10;
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f48039q);
        if (parcelableArrayList == null) {
            d10 = oi.s.t();
        } else {
            d10 = oe.d.d(Format.A0, parcelableArrayList);
        }
        return new u0(bundle.getString(f48040r, ""), (Format[]) d10.toArray(new Format[0]));
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
        String f10 = f(this.f48045o[0].f11718i);
        int g10 = g(this.f48045o[0].f11720p);
        int i10 = 1;
        while (true) {
            Format[] formatArr = this.f48045o;
            if (i10 < formatArr.length) {
                if (!f10.equals(f(formatArr[i10].f11718i))) {
                    Format[] formatArr2 = this.f48045o;
                    e("languages", formatArr2[0].f11718i, formatArr2[i10].f11718i, i10);
                    return;
                } else if (g10 != g(this.f48045o[i10].f11720p)) {
                    e("role flags", Integer.toBinaryString(this.f48045o[0].f11720p), Integer.toBinaryString(this.f48045o[i10].f11720p), i10);
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
        return new u0(str, this.f48045o);
    }

    public Format c(int i10) {
        return this.f48045o[i10];
    }

    public int d(Format format) {
        int i10 = 0;
        while (true) {
            Format[] formatArr = this.f48045o;
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
            if (this.f48043e.equals(u0Var.f48043e) && Arrays.equals(this.f48045o, u0Var.f48045o)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f48046p == 0) {
            this.f48046p = ((527 + this.f48043e.hashCode()) * 31) + Arrays.hashCode(this.f48045o);
        }
        return this.f48046p;
    }

    public u0(String str, Format... formatArr) {
        oe.a.a(formatArr.length > 0);
        this.f48043e = str;
        this.f48045o = formatArr;
        this.f48042d = formatArr.length;
        int k10 = oe.c0.k(formatArr[0].f11727w);
        this.f48044i = k10 == -1 ? oe.c0.k(formatArr[0].f11726v) : k10;
        h();
    }
}
