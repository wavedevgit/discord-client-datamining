package ok;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f40179a;

    /* renamed from: b  reason: collision with root package name */
    private int f40180b;

    /* renamed from: c  reason: collision with root package name */
    private final String f40181c;

    /* renamed from: d  reason: collision with root package name */
    private final List f40182d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40183e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f40184f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f40185g;

    /* renamed from: h  reason: collision with root package name */
    private Object f40186h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40187i;

    /* renamed from: j  reason: collision with root package name */
    private final int f40188j;

    /* renamed from: k  reason: collision with root package name */
    private final int f40189k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f40182d;
    }

    public String b() {
        return this.f40183e;
    }

    public Integer c() {
        return this.f40185g;
    }

    public Integer d() {
        return this.f40184f;
    }

    public int e() {
        return this.f40180b;
    }

    public Object f() {
        return this.f40186h;
    }

    public byte[] g() {
        return this.f40179a;
    }

    public int h() {
        return this.f40187i;
    }

    public int i() {
        return this.f40188j;
    }

    public int j() {
        return this.f40189k;
    }

    public String k() {
        return this.f40181c;
    }

    public boolean l() {
        if (this.f40187i >= 0 && this.f40188j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f40185g = num;
    }

    public void n(Integer num) {
        this.f40184f = num;
    }

    public void o(int i10) {
        this.f40180b = i10;
    }

    public void p(Object obj) {
        this.f40186h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f40179a = bArr;
        this.f40180b = bArr == null ? 0 : bArr.length * 8;
        this.f40181c = str;
        this.f40182d = list;
        this.f40183e = str2;
        this.f40187i = i11;
        this.f40188j = i10;
        this.f40189k = i12;
    }
}
