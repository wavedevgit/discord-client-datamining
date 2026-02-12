package je;

import android.text.TextUtils;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: f  reason: collision with root package name */
    private int f30922f;

    /* renamed from: h  reason: collision with root package name */
    private int f30924h;

    /* renamed from: o  reason: collision with root package name */
    private float f30931o;

    /* renamed from: a  reason: collision with root package name */
    private String f30917a = "";

    /* renamed from: b  reason: collision with root package name */
    private String f30918b = "";

    /* renamed from: c  reason: collision with root package name */
    private Set f30919c = Collections.EMPTY_SET;

    /* renamed from: d  reason: collision with root package name */
    private String f30920d = "";

    /* renamed from: e  reason: collision with root package name */
    private String f30921e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f30923g = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f30925i = false;

    /* renamed from: j  reason: collision with root package name */
    private int f30926j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f30927k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f30928l = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f30929m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f30930n = -1;

    /* renamed from: p  reason: collision with root package name */
    private int f30932p = -1;

    /* renamed from: q  reason: collision with root package name */
    private boolean f30933q = false;

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
        this.f30927k = z10 ? 1 : 0;
        return this;
    }

    public int a() {
        if (this.f30925i) {
            return this.f30924h;
        }
        throw new IllegalStateException("Background color not defined.");
    }

    public boolean b() {
        return this.f30933q;
    }

    public int c() {
        if (this.f30923g) {
            return this.f30922f;
        }
        throw new IllegalStateException("Font color not defined");
    }

    public String d() {
        return this.f30921e;
    }

    public float e() {
        return this.f30931o;
    }

    public int f() {
        return this.f30930n;
    }

    public int g() {
        return this.f30932p;
    }

    public int h(String str, String str2, Set set, String str3) {
        if (this.f30917a.isEmpty() && this.f30918b.isEmpty() && this.f30919c.isEmpty() && this.f30920d.isEmpty()) {
            return TextUtils.isEmpty(str2) ? 1 : 0;
        }
        int B = B(B(B(0, this.f30917a, str, 1073741824), this.f30918b, str2, 2), this.f30920d, str3, 4);
        if (B == -1 || !set.containsAll(this.f30919c)) {
            return 0;
        }
        return B + (this.f30919c.size() * 4);
    }

    public int i() {
        int i10;
        int i11 = this.f30928l;
        if (i11 == -1 && this.f30929m == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f30929m == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public boolean j() {
        return this.f30925i;
    }

    public boolean k() {
        return this.f30923g;
    }

    public boolean l() {
        if (this.f30926j == 1) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if (this.f30927k == 1) {
            return true;
        }
        return false;
    }

    public d n(int i10) {
        this.f30924h = i10;
        this.f30925i = true;
        return this;
    }

    public d o(boolean z10) {
        this.f30928l = z10 ? 1 : 0;
        return this;
    }

    public d p(boolean z10) {
        this.f30933q = z10;
        return this;
    }

    public d q(int i10) {
        this.f30922f = i10;
        this.f30923g = true;
        return this;
    }

    public d r(String str) {
        String e10;
        if (str == null) {
            e10 = null;
        } else {
            e10 = pi.b.e(str);
        }
        this.f30921e = e10;
        return this;
    }

    public d s(float f10) {
        this.f30931o = f10;
        return this;
    }

    public d t(int i10) {
        this.f30930n = i10;
        return this;
    }

    public d u(boolean z10) {
        this.f30929m = z10 ? 1 : 0;
        return this;
    }

    public d v(int i10) {
        this.f30932p = i10;
        return this;
    }

    public void w(String[] strArr) {
        this.f30919c = new HashSet(Arrays.asList(strArr));
    }

    public void x(String str) {
        this.f30917a = str;
    }

    public void y(String str) {
        this.f30918b = str;
    }

    public void z(String str) {
        this.f30920d = str;
    }
}
