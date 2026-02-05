package com.budiyev.android.codescanner;

import com.google.zxing.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f8437a;

    /* renamed from: b  reason: collision with root package name */
    private final i f8438b;

    /* renamed from: c  reason: collision with root package name */
    private final i f8439c;

    /* renamed from: d  reason: collision with root package name */
    private final i f8440d;

    /* renamed from: e  reason: collision with root package name */
    private final l f8441e;

    /* renamed from: f  reason: collision with root package name */
    private final int f8442f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f8443g;

    public e(byte[] bArr, i iVar, i iVar2, i iVar3, l lVar, int i10, boolean z10) {
        this.f8437a = bArr;
        this.f8438b = iVar;
        this.f8439c = iVar2;
        this.f8440d = iVar3;
        this.f8441e = lVar;
        this.f8442f = i10;
        this.f8443g = z10;
    }

    public Result a(fk.j jVar) {
        int i10;
        int i11;
        int a10 = this.f8438b.a();
        int b10 = this.f8438b.b();
        int i12 = this.f8442f;
        byte[] q10 = n.q(this.f8437a, a10, b10, i12);
        if (i12 != 90 && i12 != 270) {
            i11 = a10;
            i10 = b10;
        } else {
            i10 = a10;
            i11 = b10;
        }
        l m10 = n.m(i11, i10, this.f8441e, this.f8439c, this.f8440d);
        int h10 = m10.h();
        int d10 = m10.d();
        if (h10 >= 1 && d10 >= 1) {
            return n.h(jVar, new fk.l(q10, i11, i10, m10.e(), m10.g(), h10, d10, this.f8443g));
        }
        return null;
    }
}
