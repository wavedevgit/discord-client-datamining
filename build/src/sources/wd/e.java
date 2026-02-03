package wd;

import com.google.android.exoplayer2.upstream.j;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements j {

    /* renamed from: a  reason: collision with root package name */
    private final j f51909a;

    /* renamed from: b  reason: collision with root package name */
    private final List f51910b;

    public e(j jVar, List list) {
        this.f51909a = jVar;
        this.f51910b = list;
    }

    @Override // wd.j
    public j.a a(g gVar, f fVar) {
        return new pd.b(this.f51909a.a(gVar, fVar), this.f51910b);
    }

    @Override // wd.j
    public j.a b() {
        return new pd.b(this.f51909a.b(), this.f51910b);
    }
}
