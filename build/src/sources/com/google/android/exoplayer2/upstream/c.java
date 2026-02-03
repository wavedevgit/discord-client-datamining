package com.google.android.exoplayer2.upstream;

import android.content.Context;
import com.google.android.exoplayer2.upstream.DataSource;
import le.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements DataSource.Factory {

    /* renamed from: a  reason: collision with root package name */
    private final Context f14010a;

    /* renamed from: b  reason: collision with root package name */
    private final c0 f14011b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource.Factory f14012c;

    public c(Context context, c0 c0Var, DataSource.Factory factory) {
        this.f14010a = context.getApplicationContext();
        this.f14011b = c0Var;
        this.f14012c = factory;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
    /* renamed from: a */
    public b createDataSource() {
        b bVar = new b(this.f14010a, this.f14012c.createDataSource());
        c0 c0Var = this.f14011b;
        if (c0Var != null) {
            bVar.j(c0Var);
        }
        return bVar;
    }
}
