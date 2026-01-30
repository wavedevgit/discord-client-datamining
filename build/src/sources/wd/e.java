package wd;

import com.google.android.exoplayer2.upstream.j;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements j {

    /* renamed from: a  reason: collision with root package name */
    private final j f52342a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52343b;

    public e(j jVar, List list) {
        this.f52342a = jVar;
        this.f52343b = list;
    }

    @Override // wd.j
    public j.a a(g gVar, f fVar) {
        return new pd.b(this.f52342a.a(gVar, fVar), this.f52343b);
    }

    @Override // wd.j
    public j.a b() {
        return new pd.b(this.f52342a.b(), this.f52343b);
    }
}
