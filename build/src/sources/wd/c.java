package wd;

import com.google.android.exoplayer2.upstream.DataSource;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements g {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource.Factory f52543a;

    public c(DataSource.Factory factory) {
        this.f52543a = factory;
    }

    @Override // wd.g
    public DataSource a(int i10) {
        return this.f52543a.createDataSource();
    }
}
