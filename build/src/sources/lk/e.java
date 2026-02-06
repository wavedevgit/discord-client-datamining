package lk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f36327a;

    /* renamed from: b  reason: collision with root package name */
    private int f36328b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36329c;

    /* renamed from: d  reason: collision with root package name */
    private final List f36330d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36331e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f36332f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f36333g;

    /* renamed from: h  reason: collision with root package name */
    private Object f36334h;

    /* renamed from: i  reason: collision with root package name */
    private final int f36335i;

    /* renamed from: j  reason: collision with root package name */
    private final int f36336j;

    /* renamed from: k  reason: collision with root package name */
    private final int f36337k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f36330d;
    }

    public String b() {
        return this.f36331e;
    }

    public Integer c() {
        return this.f36333g;
    }

    public Integer d() {
        return this.f36332f;
    }

    public int e() {
        return this.f36328b;
    }

    public Object f() {
        return this.f36334h;
    }

    public byte[] g() {
        return this.f36327a;
    }

    public int h() {
        return this.f36335i;
    }

    public int i() {
        return this.f36336j;
    }

    public int j() {
        return this.f36337k;
    }

    public String k() {
        return this.f36329c;
    }

    public boolean l() {
        if (this.f36335i >= 0 && this.f36336j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f36333g = num;
    }

    public void n(Integer num) {
        this.f36332f = num;
    }

    public void o(int i10) {
        this.f36328b = i10;
    }

    public void p(Object obj) {
        this.f36334h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f36327a = bArr;
        this.f36328b = bArr == null ? 0 : bArr.length * 8;
        this.f36329c = str;
        this.f36330d = list;
        this.f36331e = str2;
        this.f36335i = i11;
        this.f36336j = i10;
        this.f36337k = i12;
    }
}
