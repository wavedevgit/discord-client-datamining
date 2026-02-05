package jk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f30991a;

    /* renamed from: b  reason: collision with root package name */
    private int f30992b;

    /* renamed from: c  reason: collision with root package name */
    private final String f30993c;

    /* renamed from: d  reason: collision with root package name */
    private final List f30994d;

    /* renamed from: e  reason: collision with root package name */
    private final String f30995e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f30996f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f30997g;

    /* renamed from: h  reason: collision with root package name */
    private Object f30998h;

    /* renamed from: i  reason: collision with root package name */
    private final int f30999i;

    /* renamed from: j  reason: collision with root package name */
    private final int f31000j;

    /* renamed from: k  reason: collision with root package name */
    private final int f31001k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f30994d;
    }

    public String b() {
        return this.f30995e;
    }

    public Integer c() {
        return this.f30997g;
    }

    public Integer d() {
        return this.f30996f;
    }

    public int e() {
        return this.f30992b;
    }

    public Object f() {
        return this.f30998h;
    }

    public byte[] g() {
        return this.f30991a;
    }

    public int h() {
        return this.f30999i;
    }

    public int i() {
        return this.f31000j;
    }

    public int j() {
        return this.f31001k;
    }

    public String k() {
        return this.f30993c;
    }

    public boolean l() {
        if (this.f30999i >= 0 && this.f31000j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f30997g = num;
    }

    public void n(Integer num) {
        this.f30996f = num;
    }

    public void o(int i10) {
        this.f30992b = i10;
    }

    public void p(Object obj) {
        this.f30998h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f30991a = bArr;
        this.f30992b = bArr == null ? 0 : bArr.length * 8;
        this.f30993c = str;
        this.f30994d = list;
        this.f30995e = str2;
        this.f30999i = i11;
        this.f31000j = i10;
        this.f31001k = i12;
    }
}
