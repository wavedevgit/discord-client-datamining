package com.budiyev.android.codescanner;

import com.google.zxing.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f8476a;

    /* renamed from: b  reason: collision with root package name */
    private final i f8477b;

    /* renamed from: c  reason: collision with root package name */
    private final i f8478c;

    /* renamed from: d  reason: collision with root package name */
    private final i f8479d;

    /* renamed from: e  reason: collision with root package name */
    private final l f8480e;

    /* renamed from: f  reason: collision with root package name */
    private final int f8481f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f8482g;

    public e(byte[] bArr, i iVar, i iVar2, i iVar3, l lVar, int i10, boolean z10) {
        this.f8476a = bArr;
        this.f8477b = iVar;
        this.f8478c = iVar2;
        this.f8479d = iVar3;
        this.f8480e = lVar;
        this.f8481f = i10;
        this.f8482g = z10;
    }

    public Result a(ik.j jVar) {
        int i10;
        int i11;
        int a10 = this.f8477b.a();
        int b10 = this.f8477b.b();
        int i12 = this.f8481f;
        byte[] q10 = n.q(this.f8476a, a10, b10, i12);
        if (i12 != 90 && i12 != 270) {
            i11 = a10;
            i10 = b10;
        } else {
            i10 = a10;
            i11 = b10;
        }
        l m10 = n.m(i11, i10, this.f8480e, this.f8478c, this.f8479d);
        int h10 = m10.h();
        int d10 = m10.d();
        if (h10 >= 1 && d10 >= 1) {
            return n.h(jVar, new ik.l(q10, i11, i10, m10.e(), m10.g(), h10, d10, this.f8482g));
        }
        return null;
    }
}
