package lk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f36375a;

    /* renamed from: b  reason: collision with root package name */
    private int f36376b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36377c;

    /* renamed from: d  reason: collision with root package name */
    private final List f36378d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36379e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f36380f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f36381g;

    /* renamed from: h  reason: collision with root package name */
    private Object f36382h;

    /* renamed from: i  reason: collision with root package name */
    private final int f36383i;

    /* renamed from: j  reason: collision with root package name */
    private final int f36384j;

    /* renamed from: k  reason: collision with root package name */
    private final int f36385k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f36378d;
    }

    public String b() {
        return this.f36379e;
    }

    public Integer c() {
        return this.f36381g;
    }

    public Integer d() {
        return this.f36380f;
    }

    public int e() {
        return this.f36376b;
    }

    public Object f() {
        return this.f36382h;
    }

    public byte[] g() {
        return this.f36375a;
    }

    public int h() {
        return this.f36383i;
    }

    public int i() {
        return this.f36384j;
    }

    public int j() {
        return this.f36385k;
    }

    public String k() {
        return this.f36377c;
    }

    public boolean l() {
        if (this.f36383i >= 0 && this.f36384j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f36381g = num;
    }

    public void n(Integer num) {
        this.f36380f = num;
    }

    public void o(int i10) {
        this.f36376b = i10;
    }

    public void p(Object obj) {
        this.f36382h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f36375a = bArr;
        this.f36376b = bArr == null ? 0 : bArr.length * 8;
        this.f36377c = str;
        this.f36378d = list;
        this.f36379e = str2;
        this.f36383i = i11;
        this.f36384j = i10;
        this.f36385k = i12;
    }
}
