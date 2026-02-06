package com.budiyev.android.codescanner;

import com.google.zxing.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f8336a;

    /* renamed from: b  reason: collision with root package name */
    private final i f8337b;

    /* renamed from: c  reason: collision with root package name */
    private final i f8338c;

    /* renamed from: d  reason: collision with root package name */
    private final i f8339d;

    /* renamed from: e  reason: collision with root package name */
    private final l f8340e;

    /* renamed from: f  reason: collision with root package name */
    private final int f8341f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f8342g;

    public e(byte[] bArr, i iVar, i iVar2, i iVar3, l lVar, int i10, boolean z10) {
        this.f8336a = bArr;
        this.f8337b = iVar;
        this.f8338c = iVar2;
        this.f8339d = iVar3;
        this.f8340e = lVar;
        this.f8341f = i10;
        this.f8342g = z10;
    }

    public Result a(hk.j jVar) {
        int i10;
        int i11;
        int a10 = this.f8337b.a();
        int b10 = this.f8337b.b();
        int i12 = this.f8341f;
        byte[] q10 = n.q(this.f8336a, a10, b10, i12);
        if (i12 != 90 && i12 != 270) {
            i11 = a10;
            i10 = b10;
        } else {
            i10 = a10;
            i11 = b10;
        }
        l m10 = n.m(i11, i10, this.f8340e, this.f8338c, this.f8339d);
        int h10 = m10.h();
        int d10 = m10.d();
        if (h10 >= 1 && d10 >= 1) {
            return n.h(jVar, new hk.l(q10, i11, i10, m10.e(), m10.g(), h10, d10, this.f8342g));
        }
        return null;
    }
}
