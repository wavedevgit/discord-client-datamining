package je;

import android.text.TextUtils;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: f  reason: collision with root package name */
    private int f31490f;

    /* renamed from: h  reason: collision with root package name */
    private int f31492h;

    /* renamed from: o  reason: collision with root package name */
    private float f31499o;

    /* renamed from: a  reason: collision with root package name */
    private String f31485a = "";

    /* renamed from: b  reason: collision with root package name */
    private String f31486b = "";

    /* renamed from: c  reason: collision with root package name */
    private Set f31487c = Collections.EMPTY_SET;

    /* renamed from: d  reason: collision with root package name */
    private String f31488d = "";

    /* renamed from: e  reason: collision with root package name */
    private String f31489e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f31491g = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f31493i = false;

    /* renamed from: j  reason: collision with root package name */
    private int f31494j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f31495k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f31496l = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f31497m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f31498n = -1;

    /* renamed from: p  reason: collision with root package name */
    private int f31500p = -1;

    /* renamed from: q  reason: collision with root package name */
    private boolean f31501q = false;

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
        this.f31495k = z10 ? 1 : 0;
        return this;
    }

    public int a() {
        if (this.f31493i) {
            return this.f31492h;
        }
        throw new IllegalStateException("Background color not defined.");
    }

    public boolean b() {
        return this.f31501q;
    }

    public int c() {
        if (this.f31491g) {
            return this.f31490f;
        }
        throw new IllegalStateException("Font color not defined");
    }

    public String d() {
        return this.f31489e;
    }

    public float e() {
        return this.f31499o;
    }

    public int f() {
        return this.f31498n;
    }

    public int g() {
        return this.f31500p;
    }

    public int h(String str, String str2, Set set, String str3) {
        if (this.f31485a.isEmpty() && this.f31486b.isEmpty() && this.f31487c.isEmpty() && this.f31488d.isEmpty()) {
            return TextUtils.isEmpty(str2) ? 1 : 0;
        }
        int B = B(B(B(0, this.f31485a, str, 1073741824), this.f31486b, str2, 2), this.f31488d, str3, 4);
        if (B == -1 || !set.containsAll(this.f31487c)) {
            return 0;
        }
        return B + (this.f31487c.size() * 4);
    }

    public int i() {
        int i10;
        int i11 = this.f31496l;
        if (i11 == -1 && this.f31497m == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f31497m == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public boolean j() {
        return this.f31493i;
    }

    public boolean k() {
        return this.f31491g;
    }

    public boolean l() {
        if (this.f31494j == 1) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if (this.f31495k == 1) {
            return true;
        }
        return false;
    }

    public d n(int i10) {
        this.f31492h = i10;
        this.f31493i = true;
        return this;
    }

    public d o(boolean z10) {
        this.f31496l = z10 ? 1 : 0;
        return this;
    }

    public d p(boolean z10) {
        this.f31501q = z10;
        return this;
    }

    public d q(int i10) {
        this.f31490f = i10;
        this.f31491g = true;
        return this;
    }

    public d r(String str) {
        String e10;
        if (str == null) {
            e10 = null;
        } else {
            e10 = pi.b.e(str);
        }
        this.f31489e = e10;
        return this;
    }

    public d s(float f10) {
        this.f31499o = f10;
        return this;
    }

    public d t(int i10) {
        this.f31498n = i10;
        return this;
    }

    public d u(boolean z10) {
        this.f31497m = z10 ? 1 : 0;
        return this;
    }

    public d v(int i10) {
        this.f31500p = i10;
        return this;
    }

    public void w(String[] strArr) {
        this.f31487c = new HashSet(Arrays.asList(strArr));
    }

    public void x(String str) {
        this.f31485a = str;
    }

    public void y(String str) {
        this.f31486b = str;
    }

    public void z(String str) {
        this.f31488d = str;
    }
}
