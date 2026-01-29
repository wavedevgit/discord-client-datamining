package com.google.zxing;

import ck.a;
import ck.o;
import ck.p;
import java.util.EnumMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Result {

    /* renamed from: a  reason: collision with root package name */
    private final String f17582a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f17583b;

    /* renamed from: c  reason: collision with root package name */
    private final int f17584c;

    /* renamed from: d  reason: collision with root package name */
    private p[] f17585d;

    /* renamed from: e  reason: collision with root package name */
    private final a f17586e;

    /* renamed from: f  reason: collision with root package name */
    private Map f17587f;

    /* renamed from: g  reason: collision with root package name */
    private final long f17588g;

    public Result(String str, byte[] bArr, p[] pVarArr, a aVar) {
        this(str, bArr, pVarArr, aVar, System.currentTimeMillis());
    }

    public void a(p[] pVarArr) {
        p[] pVarArr2 = this.f17585d;
        if (pVarArr2 == null) {
            this.f17585d = pVarArr;
        } else if (pVarArr != null && pVarArr.length > 0) {
            p[] pVarArr3 = new p[pVarArr2.length + pVarArr.length];
            System.arraycopy(pVarArr2, 0, pVarArr3, 0, pVarArr2.length);
            System.arraycopy(pVarArr, 0, pVarArr3, pVarArr2.length, pVarArr.length);
            this.f17585d = pVarArr3;
        }
    }

    public a b() {
        return this.f17586e;
    }

    public byte[] c() {
        return this.f17583b;
    }

    public Map d() {
        return this.f17587f;
    }

    public p[] e() {
        return this.f17585d;
    }

    public String f() {
        return this.f17582a;
    }

    public void g(Map map) {
        if (map != null) {
            Map map2 = this.f17587f;
            if (map2 == null) {
                this.f17587f = map;
            } else {
                map2.putAll(map);
            }
        }
    }

    public void h(o oVar, Object obj) {
        if (this.f17587f == null) {
            this.f17587f = new EnumMap(o.class);
        }
        this.f17587f.put(oVar, obj);
    }

    public String toString() {
        return this.f17582a;
    }

    public Result(String str, byte[] bArr, p[] pVarArr, a aVar, long j10) {
        this(str, bArr, bArr == null ? 0 : bArr.length * 8, pVarArr, aVar, j10);
    }

    public Result(String str, byte[] bArr, int i10, p[] pVarArr, a aVar, long j10) {
        this.f17582a = str;
        this.f17583b = bArr;
        this.f17584c = i10;
        this.f17585d = pVarArr;
        this.f17586e = aVar;
        this.f17587f = null;
        this.f17588g = j10;
    }
}
