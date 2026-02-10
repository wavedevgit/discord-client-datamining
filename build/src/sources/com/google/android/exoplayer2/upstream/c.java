package com.google.android.exoplayer2.upstream;

import android.content.Context;
import com.google.android.exoplayer2.upstream.DataSource;
import me.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements DataSource.Factory {

    /* renamed from: a  reason: collision with root package name */
    private final Context f13440a;

    /* renamed from: b  reason: collision with root package name */
    private final c0 f13441b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource.Factory f13442c;

    public c(Context context, c0 c0Var, DataSource.Factory factory) {
        this.f13440a = context.getApplicationContext();
        this.f13441b = c0Var;
        this.f13442c = factory;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
    /* renamed from: a */
    public b createDataSource() {
        b bVar = new b(this.f13440a, this.f13442c.createDataSource());
        c0 c0Var = this.f13441b;
        if (c0Var != null) {
            bVar.i(c0Var);
        }
        return bVar;
    }
}
