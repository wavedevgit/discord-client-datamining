package je;

import android.text.TextUtils;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: f  reason: collision with root package name */
    private int f30921f;

    /* renamed from: h  reason: collision with root package name */
    private int f30923h;

    /* renamed from: o  reason: collision with root package name */
    private float f30930o;

    /* renamed from: a  reason: collision with root package name */
    private String f30916a = "";

    /* renamed from: b  reason: collision with root package name */
    private String f30917b = "";

    /* renamed from: c  reason: collision with root package name */
    private Set f30918c = Collections.EMPTY_SET;

    /* renamed from: d  reason: collision with root package name */
    private String f30919d = "";

    /* renamed from: e  reason: collision with root package name */
    private String f30920e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f30922g = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f30924i = false;

    /* renamed from: j  reason: collision with root package name */
    private int f30925j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f30926k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f30927l = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f30928m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f30929n = -1;

    /* renamed from: p  reason: collision with root package name */
    private int f30931p = -1;

    /* renamed from: q  reason: collision with root package name */
    private boolean f30932q = false;

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
        this.f30926k = z10 ? 1 : 0;
        return this;
    }

    public int a() {
        if (this.f30924i) {
            return this.f30923h;
        }
        throw new IllegalStateException("Background color not defined.");
    }

    public boolean b() {
        return this.f30932q;
    }

    public int c() {
        if (this.f30922g) {
            return this.f30921f;
        }
        throw new IllegalStateException("Font color not defined");
    }

    public String d() {
        return this.f30920e;
    }

    public float e() {
        return this.f30930o;
    }

    public int f() {
        return this.f30929n;
    }

    public int g() {
        return this.f30931p;
    }

    public int h(String str, String str2, Set set, String str3) {
        if (this.f30916a.isEmpty() && this.f30917b.isEmpty() && this.f30918c.isEmpty() && this.f30919d.isEmpty()) {
            return TextUtils.isEmpty(str2) ? 1 : 0;
        }
        int B = B(B(B(0, this.f30916a, str, 1073741824), this.f30917b, str2, 2), this.f30919d, str3, 4);
        if (B == -1 || !set.containsAll(this.f30918c)) {
            return 0;
        }
        return B + (this.f30918c.size() * 4);
    }

    public int i() {
        int i10;
        int i11 = this.f30927l;
        if (i11 == -1 && this.f30928m == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f30928m == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public boolean j() {
        return this.f30924i;
    }

    public boolean k() {
        return this.f30922g;
    }

    public boolean l() {
        if (this.f30925j == 1) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if (this.f30926k == 1) {
            return true;
        }
        return false;
    }

    public d n(int i10) {
        this.f30923h = i10;
        this.f30924i = true;
        return this;
    }

    public d o(boolean z10) {
        this.f30927l = z10 ? 1 : 0;
        return this;
    }

    public d p(boolean z10) {
        this.f30932q = z10;
        return this;
    }

    public d q(int i10) {
        this.f30921f = i10;
        this.f30922g = true;
        return this;
    }

    public d r(String str) {
        String e10;
        if (str == null) {
            e10 = null;
        } else {
            e10 = pi.b.e(str);
        }
        this.f30920e = e10;
        return this;
    }

    public d s(float f10) {
        this.f30930o = f10;
        return this;
    }

    public d t(int i10) {
        this.f30929n = i10;
        return this;
    }

    public d u(boolean z10) {
        this.f30928m = z10 ? 1 : 0;
        return this;
    }

    public d v(int i10) {
        this.f30931p = i10;
        return this;
    }

    public void w(String[] strArr) {
        this.f30918c = new HashSet(Arrays.asList(strArr));
    }

    public void x(String str) {
        this.f30916a = str;
    }

    public void y(String str) {
        this.f30917b = str;
    }

    public void z(String str) {
        this.f30919d = str;
    }
}
