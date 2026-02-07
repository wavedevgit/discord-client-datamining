package wd;

import com.google.android.exoplayer2.upstream.k;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements j {

    /* renamed from: a  reason: collision with root package name */
    private final j f53612a;

    /* renamed from: b  reason: collision with root package name */
    private final List f53613b;

    public e(j jVar, List list) {
        this.f53612a = jVar;
        this.f53613b = list;
    }

    @Override // wd.j
    public k.a a(g gVar, f fVar) {
        return new pd.b(this.f53612a.a(gVar, fVar), this.f53613b);
    }

    @Override // wd.j
    public k.a b() {
        return new pd.b(this.f53612a.b(), this.f53613b);
    }
}
