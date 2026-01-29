package ie;

import android.text.TextUtils;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: f  reason: collision with root package name */
    private int f28457f;

    /* renamed from: h  reason: collision with root package name */
    private int f28459h;

    /* renamed from: o  reason: collision with root package name */
    private float f28466o;

    /* renamed from: a  reason: collision with root package name */
    private String f28452a = "";

    /* renamed from: b  reason: collision with root package name */
    private String f28453b = "";

    /* renamed from: c  reason: collision with root package name */
    private Set f28454c = Collections.EMPTY_SET;

    /* renamed from: d  reason: collision with root package name */
    private String f28455d = "";

    /* renamed from: e  reason: collision with root package name */
    private String f28456e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f28458g = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f28460i = false;

    /* renamed from: j  reason: collision with root package name */
    private int f28461j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f28462k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f28463l = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f28464m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f28465n = -1;

    /* renamed from: p  reason: collision with root package name */
    private int f28467p = -1;

    /* renamed from: q  reason: collision with root package name */
    private boolean f28468q = false;

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
        this.f28462k = z10 ? 1 : 0;
        return this;
    }

    public int a() {
        if (this.f28460i) {
            return this.f28459h;
        }
        throw new IllegalStateException("Background color not defined.");
    }

    public boolean b() {
        return this.f28468q;
    }

    public int c() {
        if (this.f28458g) {
            return this.f28457f;
        }
        throw new IllegalStateException("Font color not defined");
    }

    public String d() {
        return this.f28456e;
    }

    public float e() {
        return this.f28466o;
    }

    public int f() {
        return this.f28465n;
    }

    public int g() {
        return this.f28467p;
    }

    public int h(String str, String str2, Set set, String str3) {
        if (this.f28452a.isEmpty() && this.f28453b.isEmpty() && this.f28454c.isEmpty() && this.f28455d.isEmpty()) {
            return TextUtils.isEmpty(str2) ? 1 : 0;
        }
        int B = B(B(B(0, this.f28452a, str, 1073741824), this.f28453b, str2, 2), this.f28455d, str3, 4);
        if (B == -1 || !set.containsAll(this.f28454c)) {
            return 0;
        }
        return B + (this.f28454c.size() * 4);
    }

    public int i() {
        int i10;
        int i11 = this.f28463l;
        if (i11 == -1 && this.f28464m == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f28464m == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public boolean j() {
        return this.f28460i;
    }

    public boolean k() {
        return this.f28458g;
    }

    public boolean l() {
        if (this.f28461j == 1) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if (this.f28462k == 1) {
            return true;
        }
        return false;
    }

    public d n(int i10) {
        this.f28459h = i10;
        this.f28460i = true;
        return this;
    }

    public d o(boolean z10) {
        this.f28463l = z10 ? 1 : 0;
        return this;
    }

    public d p(boolean z10) {
        this.f28468q = z10;
        return this;
    }

    public d q(int i10) {
        this.f28457f = i10;
        this.f28458g = true;
        return this;
    }

    public d r(String str) {
        String e10;
        if (str == null) {
            e10 = null;
        } else {
            e10 = ii.b.e(str);
        }
        this.f28456e = e10;
        return this;
    }

    public d s(float f10) {
        this.f28466o = f10;
        return this;
    }

    public d t(int i10) {
        this.f28465n = i10;
        return this;
    }

    public d u(boolean z10) {
        this.f28464m = z10 ? 1 : 0;
        return this;
    }

    public d v(int i10) {
        this.f28467p = i10;
        return this;
    }

    public void w(String[] strArr) {
        this.f28454c = new HashSet(Arrays.asList(strArr));
    }

    public void x(String str) {
        this.f28452a = str;
    }

    public void y(String str) {
        this.f28453b = str;
    }

    public void z(String str) {
        this.f28455d = str;
    }
}
