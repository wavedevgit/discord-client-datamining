package xd;

import com.google.android.exoplayer2.upstream.k;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e implements j {

    /* renamed from: a  reason: collision with root package name */
    private final j f54508a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54509b;

    public e(j jVar, List list) {
        this.f54508a = jVar;
        this.f54509b = list;
    }

    @Override // xd.j
    public k.a a(g gVar, f fVar) {
        return new qd.b(this.f54508a.a(gVar, fVar), this.f54509b);
    }

    @Override // xd.j
    public k.a b() {
        return new qd.b(this.f54508a.b(), this.f54509b);
    }
}
