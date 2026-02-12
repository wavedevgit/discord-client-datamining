package com.google.android.exoplayer2.upstream;

import android.content.Context;
import com.google.android.exoplayer2.upstream.DataSource;
import me.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements DataSource.Factory {

    /* renamed from: a  reason: collision with root package name */
    private final Context f14018a;

    /* renamed from: b  reason: collision with root package name */
    private final c0 f14019b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource.Factory f14020c;

    public c(Context context, c0 c0Var, DataSource.Factory factory) {
        this.f14018a = context.getApplicationContext();
        this.f14019b = c0Var;
        this.f14020c = factory;
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
    /* renamed from: a */
    public b createDataSource() {
        b bVar = new b(this.f14018a, this.f14020c.createDataSource());
        c0 c0Var = this.f14019b;
        if (c0Var != null) {
            bVar.i(c0Var);
        }
        return bVar;
    }
}
