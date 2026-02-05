package ie;

import android.text.TextUtils;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: f  reason: collision with root package name */
    private int f27332f;

    /* renamed from: h  reason: collision with root package name */
    private int f27334h;

    /* renamed from: o  reason: collision with root package name */
    private float f27341o;

    /* renamed from: a  reason: collision with root package name */
    private String f27327a = "";

    /* renamed from: b  reason: collision with root package name */
    private String f27328b = "";

    /* renamed from: c  reason: collision with root package name */
    private Set f27329c = Collections.EMPTY_SET;

    /* renamed from: d  reason: collision with root package name */
    private String f27330d = "";

    /* renamed from: e  reason: collision with root package name */
    private String f27331e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f27333g = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f27335i = false;

    /* renamed from: j  reason: collision with root package name */
    private int f27336j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f27337k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f27338l = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f27339m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f27340n = -1;

    /* renamed from: p  reason: collision with root package name */
    private int f27342p = -1;

    /* renamed from: q  reason: collision with root package name */
    private boolean f27343q = false;

    private static int B(int i10, String str, String str2, int i11) {
        if (!str.isEmpty() && i10 != -1) {
            if (!str.equals(str2)) {
                return -1;
            }
            return i10 + i11;
        }
        return i10;
    }

    public d A(boolean z10) {
        this.f27337k = z10 ? 1 : 0;
        return this;
    }

    public int a() {
        if (this.f27335i) {
            return this.f27334h;
        }
        throw new IllegalStateException("Background color not defined.");
    }

    public boolean b() {
        return this.f27343q;
    }

    public int c() {
        if (this.f27333g) {
            return this.f27332f;
        }
        throw new IllegalStateException("Font color not defined");
    }

    public String d() {
        return this.f27331e;
    }

    public float e() {
        return this.f27341o;
    }

    public int f() {
        return this.f27340n;
    }

    public int g() {
        return this.f27342p;
    }

    public int h(String str, String str2, Set set, String str3) {
        if (this.f27327a.isEmpty() && this.f27328b.isEmpty() && this.f27329c.isEmpty() && this.f27330d.isEmpty()) {
            return TextUtils.isEmpty(str2) ? 1 : 0;
        }
        int B = B(B(B(0, this.f27327a, str, 1073741824), this.f27328b, str2, 2), this.f27330d, str3, 4);
        if (B == -1 || !set.containsAll(this.f27329c)) {
            return 0;
        }
        return B + (this.f27329c.size() * 4);
    }

    public int i() {
        int i10;
        int i11 = this.f27338l;
        if (i11 == -1 && this.f27339m == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f27339m == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public boolean j() {
        return this.f27335i;
    }

    public boolean k() {
        return this.f27333g;
    }

    public boolean l() {
        if (this.f27336j == 1) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if (this.f27337k == 1) {
            return true;
        }
        return false;
    }

    public d n(int i10) {
        this.f27334h = i10;
        this.f27335i = true;
        return this;
    }

    public d o(boolean z10) {
        this.f27338l = z10 ? 1 : 0;
        return this;
    }

    public d p(boolean z10) {
        this.f27343q = z10;
        return this;
    }

    public d q(int i10) {
        this.f27332f = i10;
        this.f27333g = true;
        return this;
    }

    public d r(String str) {
        String e10;
        if (str == null) {
            e10 = null;
        } else {
            e10 = li.b.e(str);
        }
        this.f27331e = e10;
        return this;
    }

    public d s(float f10) {
        this.f27341o = f10;
        return this;
    }

    public d t(int i10) {
        this.f27340n = i10;
        return this;
    }

    public d u(boolean z10) {
        this.f27339m = z10 ? 1 : 0;
        return this;
    }

    public d v(int i10) {
        this.f27342p = i10;
        return this;
    }

    public void w(String[] strArr) {
        this.f27329c = new HashSet(Arrays.asList(strArr));
    }

    public void x(String str) {
        this.f27327a = str;
    }

    public void y(String str) {
        this.f27328b = str;
    }

    public void z(String str) {
        this.f27330d = str;
    }
}
