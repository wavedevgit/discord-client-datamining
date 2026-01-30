package gk;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f27000a;

    /* renamed from: b  reason: collision with root package name */
    private int f27001b;

    /* renamed from: c  reason: collision with root package name */
    private final String f27002c;

    /* renamed from: d  reason: collision with root package name */
    private final List f27003d;

    /* renamed from: e  reason: collision with root package name */
    private final String f27004e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f27005f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f27006g;

    /* renamed from: h  reason: collision with root package name */
    private Object f27007h;

    /* renamed from: i  reason: collision with root package name */
    private final int f27008i;

    /* renamed from: j  reason: collision with root package name */
    private final int f27009j;

    /* renamed from: k  reason: collision with root package name */
    private final int f27010k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f27003d;
    }

    public String b() {
        return this.f27004e;
    }

    public Integer c() {
        return this.f27006g;
    }

    public Integer d() {
        return this.f27005f;
    }

    public int e() {
        return this.f27001b;
    }

    public Object f() {
        return this.f27007h;
    }

    public byte[] g() {
        return this.f27000a;
    }

    public int h() {
        return this.f27008i;
    }

    public int i() {
        return this.f27009j;
    }

    public int j() {
        return this.f27010k;
    }

    public String k() {
        return this.f27002c;
    }

    public boolean l() {
        if (this.f27008i >= 0 && this.f27009j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f27006g = num;
    }

    public void n(Integer num) {
        this.f27005f = num;
    }

    public void o(int i10) {
        this.f27001b = i10;
    }

    public void p(Object obj) {
        this.f27007h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f27000a = bArr;
        this.f27001b = bArr == null ? 0 : bArr.length * 8;
        this.f27002c = str;
        this.f27003d = list;
        this.f27004e = str2;
        this.f27008i = i11;
        this.f27009j = i10;
        this.f27010k = i12;
    }
}
