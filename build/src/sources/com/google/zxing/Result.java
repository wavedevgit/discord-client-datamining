package com.google.zxing;

import fk.a;
import fk.o;
import fk.p;
import java.util.EnumMap;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Result {

    /* renamed from: a  reason: collision with root package name */
    private final String f16573a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f16574b;

    /* renamed from: c  reason: collision with root package name */
    private final int f16575c;

    /* renamed from: d  reason: collision with root package name */
    private p[] f16576d;

    /* renamed from: e  reason: collision with root package name */
    private final a f16577e;

    /* renamed from: f  reason: collision with root package name */
    private Map f16578f;

    /* renamed from: g  reason: collision with root package name */
    private final long f16579g;

    public Result(String str, byte[] bArr, p[] pVarArr, a aVar) {
        this(str, bArr, pVarArr, aVar, System.currentTimeMillis());
    }

    public void a(p[] pVarArr) {
        p[] pVarArr2 = this.f16576d;
        if (pVarArr2 == null) {
            this.f16576d = pVarArr;
        } else if (pVarArr != null && pVarArr.length > 0) {
            p[] pVarArr3 = new p[pVarArr2.length + pVarArr.length];
            System.arraycopy(pVarArr2, 0, pVarArr3, 0, pVarArr2.length);
            System.arraycopy(pVarArr, 0, pVarArr3, pVarArr2.length, pVarArr.length);
            this.f16576d = pVarArr3;
        }
    }

    public a b() {
        return this.f16577e;
    }

    public byte[] c() {
        return this.f16574b;
    }

    public Map d() {
        return this.f16578f;
    }

    public p[] e() {
        return this.f16576d;
    }

    public String f() {
        return this.f16573a;
    }

    public void g(Map map) {
        if (map != null) {
            Map map2 = this.f16578f;
            if (map2 == null) {
                this.f16578f = map;
            } else {
                map2.putAll(map);
            }
        }
    }

    public void h(o oVar, Object obj) {
        if (this.f16578f == null) {
            this.f16578f = new EnumMap(o.class);
        }
        this.f16578f.put(oVar, obj);
    }

    public String toString() {
        return this.f16573a;
    }

    public Result(String str, byte[] bArr, p[] pVarArr, a aVar, long j10) {
        this(str, bArr, bArr == null ? 0 : bArr.length * 8, pVarArr, aVar, j10);
    }

    public Result(String str, byte[] bArr, int i10, p[] pVarArr, a aVar, long j10) {
        this.f16573a = str;
        this.f16574b = bArr;
        this.f16575c = i10;
        this.f16576d = pVarArr;
        this.f16577e = aVar;
        this.f16578f = null;
        this.f16579g = j10;
    }
}
