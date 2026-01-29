package com.budiyev.android.codescanner;

import com.google.zxing.Result;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final byte[] f9455a;

    /* renamed from: b  reason: collision with root package name */
    private final i f9456b;

    /* renamed from: c  reason: collision with root package name */
    private final i f9457c;

    /* renamed from: d  reason: collision with root package name */
    private final i f9458d;

    /* renamed from: e  reason: collision with root package name */
    private final l f9459e;

    /* renamed from: f  reason: collision with root package name */
    private final int f9460f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f9461g;

    public e(byte[] bArr, i iVar, i iVar2, i iVar3, l lVar, int i10, boolean z10) {
        this.f9455a = bArr;
        this.f9456b = iVar;
        this.f9457c = iVar2;
        this.f9458d = iVar3;
        this.f9459e = lVar;
        this.f9460f = i10;
        this.f9461g = z10;
    }

    public Result a(ck.j jVar) {
        int i10;
        int i11;
        int a10 = this.f9456b.a();
        int b10 = this.f9456b.b();
        int i12 = this.f9460f;
        byte[] q10 = n.q(this.f9455a, a10, b10, i12);
        if (i12 != 90 && i12 != 270) {
            i11 = a10;
            i10 = b10;
        } else {
            i10 = a10;
            i11 = b10;
        }
        l m10 = n.m(i11, i10, this.f9459e, this.f9457c, this.f9458d);
        int h10 = m10.h();
        int d10 = m10.d();
        if (h10 >= 1 && d10 >= 1) {
            return n.h(jVar, new ck.l(q10, i11, i10, m10.e(), m10.g(), h10, d10, this.f9461g));
        }
        return null;
    }
}
