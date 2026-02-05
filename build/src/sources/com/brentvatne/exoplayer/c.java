package com.brentvatne.exoplayer;

import android.content.Context;
import le.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements f {

    /* renamed from: a  reason: collision with root package name */
    private final r f8312a;

    public c(Context context) {
        this.f8312a = new r.b(context).a();
    }

    @Override // com.brentvatne.exoplayer.f
    public com.google.android.exoplayer2.upstream.h a(int i10) {
        return new com.google.android.exoplayer2.upstream.f(i10);
    }

    @Override // com.brentvatne.exoplayer.f
    public r b() {
        return this.f8312a;
    }
}
