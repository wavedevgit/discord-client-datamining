package mk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f37205a;

    /* renamed from: b  reason: collision with root package name */
    private int f37206b;

    /* renamed from: c  reason: collision with root package name */
    private final String f37207c;

    /* renamed from: d  reason: collision with root package name */
    private final List f37208d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37209e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f37210f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f37211g;

    /* renamed from: h  reason: collision with root package name */
    private Object f37212h;

    /* renamed from: i  reason: collision with root package name */
    private final int f37213i;

    /* renamed from: j  reason: collision with root package name */
    private final int f37214j;

    /* renamed from: k  reason: collision with root package name */
    private final int f37215k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f37208d;
    }

    public String b() {
        return this.f37209e;
    }

    public Integer c() {
        return this.f37211g;
    }

    public Integer d() {
        return this.f37210f;
    }

    public int e() {
        return this.f37206b;
    }

    public Object f() {
        return this.f37212h;
    }

    public byte[] g() {
        return this.f37205a;
    }

    public int h() {
        return this.f37213i;
    }

    public int i() {
        return this.f37214j;
    }

    public int j() {
        return this.f37215k;
    }

    public String k() {
        return this.f37207c;
    }

    public boolean l() {
        if (this.f37213i >= 0 && this.f37214j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f37211g = num;
    }

    public void n(Integer num) {
        this.f37210f = num;
    }

    public void o(int i10) {
        this.f37206b = i10;
    }

    public void p(Object obj) {
        this.f37212h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f37205a = bArr;
        this.f37206b = bArr == null ? 0 : bArr.length * 8;
        this.f37207c = str;
        this.f37208d = list;
        this.f37209e = str2;
        this.f37213i = i11;
        this.f37214j = i10;
        this.f37215k = i12;
    }
}
