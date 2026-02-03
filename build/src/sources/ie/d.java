package ie;

import android.text.TextUtils;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: f  reason: collision with root package name */
    private int f28120f;

    /* renamed from: h  reason: collision with root package name */
    private int f28122h;

    /* renamed from: o  reason: collision with root package name */
    private float f28129o;

    /* renamed from: a  reason: collision with root package name */
    private String f28115a = "";

    /* renamed from: b  reason: collision with root package name */
    private String f28116b = "";

    /* renamed from: c  reason: collision with root package name */
    private Set f28117c = Collections.EMPTY_SET;

    /* renamed from: d  reason: collision with root package name */
    private String f28118d = "";

    /* renamed from: e  reason: collision with root package name */
    private String f28119e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f28121g = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f28123i = false;

    /* renamed from: j  reason: collision with root package name */
    private int f28124j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f28125k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f28126l = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f28127m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f28128n = -1;

    /* renamed from: p  reason: collision with root package name */
    private int f28130p = -1;

    /* renamed from: q  reason: collision with root package name */
    private boolean f28131q = false;

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
        this.f28125k = z10 ? 1 : 0;
        return this;
    }

    public int a() {
        if (this.f28123i) {
            return this.f28122h;
        }
        throw new IllegalStateException("Background color not defined.");
    }

    public boolean b() {
        return this.f28131q;
    }

    public int c() {
        if (this.f28121g) {
            return this.f28120f;
        }
        throw new IllegalStateException("Font color not defined");
    }

    public String d() {
        return this.f28119e;
    }

    public float e() {
        return this.f28129o;
    }

    public int f() {
        return this.f28128n;
    }

    public int g() {
        return this.f28130p;
    }

    public int h(String str, String str2, Set set, String str3) {
        if (this.f28115a.isEmpty() && this.f28116b.isEmpty() && this.f28117c.isEmpty() && this.f28118d.isEmpty()) {
            return TextUtils.isEmpty(str2) ? 1 : 0;
        }
        int B = B(B(B(0, this.f28115a, str, 1073741824), this.f28116b, str2, 2), this.f28118d, str3, 4);
        if (B == -1 || !set.containsAll(this.f28117c)) {
            return 0;
        }
        return B + (this.f28117c.size() * 4);
    }

    public int i() {
        int i10;
        int i11 = this.f28126l;
        if (i11 == -1 && this.f28127m == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f28127m == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public boolean j() {
        return this.f28123i;
    }

    public boolean k() {
        return this.f28121g;
    }

    public boolean l() {
        if (this.f28124j == 1) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if (this.f28125k == 1) {
            return true;
        }
        return false;
    }

    public d n(int i10) {
        this.f28122h = i10;
        this.f28123i = true;
        return this;
    }

    public d o(boolean z10) {
        this.f28126l = z10 ? 1 : 0;
        return this;
    }

    public d p(boolean z10) {
        this.f28131q = z10;
        return this;
    }

    public d q(int i10) {
        this.f28120f = i10;
        this.f28121g = true;
        return this;
    }

    public d r(String str) {
        String e10;
        if (str == null) {
            e10 = null;
        } else {
            e10 = ii.b.e(str);
        }
        this.f28119e = e10;
        return this;
    }

    public d s(float f10) {
        this.f28129o = f10;
        return this;
    }

    public d t(int i10) {
        this.f28128n = i10;
        return this;
    }

    public d u(boolean z10) {
        this.f28127m = z10 ? 1 : 0;
        return this;
    }

    public d v(int i10) {
        this.f28130p = i10;
        return this;
    }

    public void w(String[] strArr) {
        this.f28117c = new HashSet(Arrays.asList(strArr));
    }

    public void x(String str) {
        this.f28115a = str;
    }

    public void y(String str) {
        this.f28116b = str;
    }

    public void z(String str) {
        this.f28118d = str;
    }
}
