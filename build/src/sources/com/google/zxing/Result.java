package com.google.zxing;

import java.util.EnumMap;
import java.util.Map;
import kk.a;
import kk.o;
import kk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Result {

    /* renamed from: a  reason: collision with root package name */
    private final String f17442a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f17443b;

    /* renamed from: c  reason: collision with root package name */
    private final int f17444c;

    /* renamed from: d  reason: collision with root package name */
    private p[] f17445d;

    /* renamed from: e  reason: collision with root package name */
    private final a f17446e;

    /* renamed from: f  reason: collision with root package name */
    private Map f17447f;

    /* renamed from: g  reason: collision with root package name */
    private final long f17448g;

    public Result(String str, byte[] bArr, p[] pVarArr, a aVar) {
        this(str, bArr, pVarArr, aVar, System.currentTimeMillis());
    }

    public void a(p[] pVarArr) {
        p[] pVarArr2 = this.f17445d;
        if (pVarArr2 == null) {
            this.f17445d = pVarArr;
        } else if (pVarArr != null && pVarArr.length > 0) {
            p[] pVarArr3 = new p[pVarArr2.length + pVarArr.length];
            System.arraycopy(pVarArr2, 0, pVarArr3, 0, pVarArr2.length);
            System.arraycopy(pVarArr, 0, pVarArr3, pVarArr2.length, pVarArr.length);
            this.f17445d = pVarArr3;
        }
    }

    public a b() {
        return this.f17446e;
    }

    public byte[] c() {
        return this.f17443b;
    }

    public Map d() {
        return this.f17447f;
    }

    public p[] e() {
        return this.f17445d;
    }

    public String f() {
        return this.f17442a;
    }

    public void g(Map map) {
        if (map != null) {
            Map map2 = this.f17447f;
            if (map2 == null) {
                this.f17447f = map;
            } else {
                map2.putAll(map);
            }
        }
    }

    public void h(o oVar, Object obj) {
        if (this.f17447f == null) {
            this.f17447f = new EnumMap(o.class);
        }
        this.f17447f.put(oVar, obj);
    }

    public String toString() {
        return this.f17442a;
    }

    public Result(String str, byte[] bArr, p[] pVarArr, a aVar, long j10) {
        this(str, bArr, bArr == null ? 0 : bArr.length * 8, pVarArr, aVar, j10);
    }

    public Result(String str, byte[] bArr, int i10, p[] pVarArr, a aVar, long j10) {
        this.f17442a = str;
        this.f17443b = bArr;
        this.f17444c = i10;
        this.f17445d = pVarArr;
        this.f17446e = aVar;
        this.f17447f = null;
        this.f17448g = j10;
    }
}
