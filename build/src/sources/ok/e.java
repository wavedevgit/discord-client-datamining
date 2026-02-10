package ok;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f40178a;

    /* renamed from: b  reason: collision with root package name */
    private int f40179b;

    /* renamed from: c  reason: collision with root package name */
    private final String f40180c;

    /* renamed from: d  reason: collision with root package name */
    private final List f40181d;

    /* renamed from: e  reason: collision with root package name */
    private final String f40182e;

    /* renamed from: f  reason: collision with root package name */
    private Integer f40183f;

    /* renamed from: g  reason: collision with root package name */
    private Integer f40184g;

    /* renamed from: h  reason: collision with root package name */
    private Object f40185h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40186i;

    /* renamed from: j  reason: collision with root package name */
    private final int f40187j;

    /* renamed from: k  reason: collision with root package name */
    private final int f40188k;

    public e(byte[] bArr, String str, List list, String str2) {
        this(bArr, str, list, str2, -1, -1, 0);
    }

    public List a() {
        return this.f40181d;
    }

    public String b() {
        return this.f40182e;
    }

    public Integer c() {
        return this.f40184g;
    }

    public Integer d() {
        return this.f40183f;
    }

    public int e() {
        return this.f40179b;
    }

    public Object f() {
        return this.f40185h;
    }

    public byte[] g() {
        return this.f40178a;
    }

    public int h() {
        return this.f40186i;
    }

    public int i() {
        return this.f40187j;
    }

    public int j() {
        return this.f40188k;
    }

    public String k() {
        return this.f40180c;
    }

    public boolean l() {
        if (this.f40186i >= 0 && this.f40187j >= 0) {
            return true;
        }
        return false;
    }

    public void m(Integer num) {
        this.f40184g = num;
    }

    public void n(Integer num) {
        this.f40183f = num;
    }

    public void o(int i10) {
        this.f40179b = i10;
    }

    public void p(Object obj) {
        this.f40185h = obj;
    }

    public e(byte[] bArr, String str, List list, String str2, int i10) {
        this(bArr, str, list, str2, -1, -1, i10);
    }

    public e(byte[] bArr, String str, List list, String str2, int i10, int i11, int i12) {
        this.f40178a = bArr;
        this.f40179b = bArr == null ? 0 : bArr.length * 8;
        this.f40180c = str;
        this.f40181d = list;
        this.f40182e = str2;
        this.f40186i = i11;
        this.f40187j = i10;
        this.f40188k = i12;
    }
}
