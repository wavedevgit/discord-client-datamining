package wd;

import com.google.android.exoplayer2.upstream.j;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements j {

    /* renamed from: a  reason: collision with root package name */
    private final j f52128a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52129b;

    public e(j jVar, List list) {
        this.f52128a = jVar;
        this.f52129b = list;
    }

    @Override // wd.j
    public j.a a(g gVar, f fVar) {
        return new pd.b(this.f52128a.a(gVar, fVar), this.f52129b);
    }

    @Override // wd.j
    public j.a b() {
        return new pd.b(this.f52128a.b(), this.f52129b);
    }
}
