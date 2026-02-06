package ie;

import android.text.TextUtils;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: f  reason: collision with root package name */
    private int f26669f;

    /* renamed from: h  reason: collision with root package name */
    private int f26671h;

    /* renamed from: o  reason: collision with root package name */
    private float f26678o;

    /* renamed from: a  reason: collision with root package name */
    private String f26664a = "";

    /* renamed from: b  reason: collision with root package name */
    private String f26665b = "";

    /* renamed from: c  reason: collision with root package name */
    private Set f26666c = Collections.EMPTY_SET;

    /* renamed from: d  reason: collision with root package name */
    private String f26667d = "";

    /* renamed from: e  reason: collision with root package name */
    private String f26668e = null;

    /* renamed from: g  reason: collision with root package name */
    private boolean f26670g = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f26672i = false;

    /* renamed from: j  reason: collision with root package name */
    private int f26673j = -1;

    /* renamed from: k  reason: collision with root package name */
    private int f26674k = -1;

    /* renamed from: l  reason: collision with root package name */
    private int f26675l = -1;

    /* renamed from: m  reason: collision with root package name */
    private int f26676m = -1;

    /* renamed from: n  reason: collision with root package name */
    private int f26677n = -1;

    /* renamed from: p  reason: collision with root package name */
    private int f26679p = -1;

    /* renamed from: q  reason: collision with root package name */
    private boolean f26680q = false;

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
        this.f26674k = z10 ? 1 : 0;
        return this;
    }

    public int a() {
        if (this.f26672i) {
            return this.f26671h;
        }
        throw new IllegalStateException("Background color not defined.");
    }

    public boolean b() {
        return this.f26680q;
    }

    public int c() {
        if (this.f26670g) {
            return this.f26669f;
        }
        throw new IllegalStateException("Font color not defined");
    }

    public String d() {
        return this.f26668e;
    }

    public float e() {
        return this.f26678o;
    }

    public int f() {
        return this.f26677n;
    }

    public int g() {
        return this.f26679p;
    }

    public int h(String str, String str2, Set set, String str3) {
        if (this.f26664a.isEmpty() && this.f26665b.isEmpty() && this.f26666c.isEmpty() && this.f26667d.isEmpty()) {
            return TextUtils.isEmpty(str2) ? 1 : 0;
        }
        int B = B(B(B(0, this.f26664a, str, 1073741824), this.f26665b, str2, 2), this.f26667d, str3, 4);
        if (B == -1 || !set.containsAll(this.f26666c)) {
            return 0;
        }
        return B + (this.f26666c.size() * 4);
    }

    public int i() {
        int i10;
        int i11 = this.f26675l;
        if (i11 == -1 && this.f26676m == -1) {
            return -1;
        }
        int i12 = 0;
        if (i11 == 1) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        if (this.f26676m == 1) {
            i12 = 2;
        }
        return i10 | i12;
    }

    public boolean j() {
        return this.f26672i;
    }

    public boolean k() {
        return this.f26670g;
    }

    public boolean l() {
        if (this.f26673j == 1) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if (this.f26674k == 1) {
            return true;
        }
        return false;
    }

    public d n(int i10) {
        this.f26671h = i10;
        this.f26672i = true;
        return this;
    }

    public d o(boolean z10) {
        this.f26675l = z10 ? 1 : 0;
        return this;
    }

    public d p(boolean z10) {
        this.f26680q = z10;
        return this;
    }

    public d q(int i10) {
        this.f26669f = i10;
        this.f26670g = true;
        return this;
    }

    public d r(String str) {
        String e10;
        if (str == null) {
            e10 = null;
        } else {
            e10 = mi.b.e(str);
        }
        this.f26668e = e10;
        return this;
    }

    public d s(float f10) {
        this.f26678o = f10;
        return this;
    }

    public d t(int i10) {
        this.f26677n = i10;
        return this;
    }

    public d u(boolean z10) {
        this.f26676m = z10 ? 1 : 0;
        return this;
    }

    public d v(int i10) {
        this.f26679p = i10;
        return this;
    }

    public void w(String[] strArr) {
        this.f26666c = new HashSet(Arrays.asList(strArr));
    }

    public void x(String str) {
        this.f26664a = str;
    }

    public void y(String str) {
        this.f26665b = str;
    }

    public void z(String str) {
        this.f26667d = str;
    }
}
