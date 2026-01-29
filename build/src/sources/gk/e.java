package gk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f26984a;

    /* renamed from: b  reason: collision with root package name */
    private int f26985b;

    /* renamed from: c  reason: collision with root package name */
    private final String f26986c;

    /* renamed from: d  reason: collision with root package name */
    private final List f26987d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26988e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f26989f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f26990g;

    /* renamed from: h  reason: collision with root package name */
    private Object f26991h;

    /* renamed from: i  reason: collision with root package name */
    private final int f26992i;

    /* renamed from: j  reason: collision with root package name */
    private final int f26993j;

    /* renamed from: k  reason: collision with root package name */
    private final int f26994k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f26987d;
    }

    public String b() {
        return this.f26988e;
    }

    public Integer c() {
        return this.f26990g;
    }

    public Integer d() {
        return this.f26989f;
    }

    public int e() {
        return this.f26985b;
    }

    public Object f() {
        return this.f26991h;
    }

    public byte[] g() {
        return this.f26984a;
    }

    public int h() {
        return this.f26992i;
    }

    public int i() {
        return this.f26993j;
    }

    public int j() {
        return this.f26994k;
    }

    public String k() {
        return this.f26986c;
    }

    public boolean l() {
        if (this.f26992i >= 0 && this.f26993j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f26990g = num;
    }

    public void n(Integer num) {
        this.f26989f = num;
    }

    public void o(int i10) {
        this.f26985b = i10;
    }

    public void p(Object obj) {
        this.f26991h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f26984a = bArr;
        this.f26985b = bArr == null ? 0 : bArr.length * 8;
        this.f26986c = str;
        this.f26987d = list;
        this.f26988e = str2;
        this.f26992i = i11;
        this.f26993j = i10;
        this.f26994k = i12;
    }
}
