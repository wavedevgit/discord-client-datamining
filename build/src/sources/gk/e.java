package gk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f26308a;

    /* renamed from: b  reason: collision with root package name */
    private int f26309b;

    /* renamed from: c  reason: collision with root package name */
    private final String f26310c;

    /* renamed from: d  reason: collision with root package name */
    private final List f26311d;

    /* renamed from: e  reason: collision with root package name */
    private final String f26312e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f26313f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f26314g;

    /* renamed from: h  reason: collision with root package name */
    private Object f26315h;

    /* renamed from: i  reason: collision with root package name */
    private final int f26316i;

    /* renamed from: j  reason: collision with root package name */
    private final int f26317j;

    /* renamed from: k  reason: collision with root package name */
    private final int f26318k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f26311d;
    }

    public String b() {
        return this.f26312e;
    }

    public Integer c() {
        return this.f26314g;
    }

    public Integer d() {
        return this.f26313f;
    }

    public int e() {
        return this.f26309b;
    }

    public Object f() {
        return this.f26315h;
    }

    public byte[] g() {
        return this.f26308a;
    }

    public int h() {
        return this.f26316i;
    }

    public int i() {
        return this.f26317j;
    }

    public int j() {
        return this.f26318k;
    }

    public String k() {
        return this.f26310c;
    }

    public boolean l() {
        if (this.f26316i >= 0 && this.f26317j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f26314g = num;
    }

    public void n(Integer num) {
        this.f26313f = num;
    }

    public void o(int i10) {
        this.f26309b = i10;
    }

    public void p(Object obj) {
        this.f26315h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f26308a = bArr;
        this.f26309b = bArr == null ? 0 : bArr.length * 8;
        this.f26310c = str;
        this.f26311d = list;
        this.f26312e = str2;
        this.f26316i = i11;
        this.f26317j = i10;
        this.f26318k = i12;
    }
}
