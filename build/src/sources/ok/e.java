package ok;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f40747a;

    /* renamed from: b  reason: collision with root package name */
    private int f40748b;

    /* renamed from: c  reason: collision with root package name */
    private final String f40749c;

    /* renamed from: d  reason: collision with root package name */
    private final List f40750d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40751e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f40752f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f40753g;

    /* renamed from: h  reason: collision with root package name */
    private Object f40754h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40755i;

    /* renamed from: j  reason: collision with root package name */
    private final int f40756j;

    /* renamed from: k  reason: collision with root package name */
    private final int f40757k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f40750d;
    }

    public String b() {
        return this.f40751e;
    }

    public Integer c() {
        return this.f40753g;
    }

    public Integer d() {
        return this.f40752f;
    }

    public int e() {
        return this.f40748b;
    }

    public Object f() {
        return this.f40754h;
    }

    public byte[] g() {
        return this.f40747a;
    }

    public int h() {
        return this.f40755i;
    }

    public int i() {
        return this.f40756j;
    }

    public int j() {
        return this.f40757k;
    }

    public String k() {
        return this.f40749c;
    }

    public boolean l() {
        if (this.f40755i >= 0 && this.f40756j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f40753g = num;
    }

    public void n(Integer num) {
        this.f40752f = num;
    }

    public void o(int i10) {
        this.f40748b = i10;
    }

    public void p(Object obj) {
        this.f40754h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f40747a = bArr;
        this.f40748b = bArr == null ? 0 : bArr.length * 8;
        this.f40749c = str;
        this.f40750d = list;
        this.f40751e = str2;
        this.f40755i = i11;
        this.f40756j = i10;
        this.f40757k = i12;
    }
}
