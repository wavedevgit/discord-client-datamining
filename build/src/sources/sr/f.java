package sr;

import android.content.Context;
import android.widget.TextView;
import bw.d;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import sr.e;
import sr.g;
import sr.k;
import sr.n;
import tr.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f48302a;

    /* renamed from: b  reason: collision with root package name */
    private final List f48303b = new ArrayList(3);

    /* renamed from: c  reason: collision with root package name */
    private TextView.BufferType f48304c = TextView.BufferType.SPANNABLE;

    /* renamed from: d  reason: collision with root package name */
    private boolean f48305d = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context) {
        this.f48302a = context;
    }

    private static List b(List list) {
        return new p(list).b();
    }

    @Override // sr.e.a
    public e.a a(i iVar) {
        this.f48303b.add(iVar);
        return this;
    }

    @Override // sr.e.a
    public e build() {
        if (!this.f48303b.isEmpty()) {
            List<i> b10 = b(this.f48303b);
            d.b bVar = new d.b();
            c.a i10 = tr.c.i(this.f48302a);
            g.b bVar2 = new g.b();
            n.a aVar = new n.a();
            k.a aVar2 = new k.a();
            for (i iVar : b10) {
                iVar.a(bVar);
                iVar.g(i10);
                iVar.k(bVar2);
                iVar.h(aVar);
                iVar.c(aVar2);
            }
            g h10 = bVar2.h(i10.z(), aVar2.build());
            return new h(this.f48304c, null, bVar.f(), m.b(aVar, h10), h10, Collections.unmodifiableList(b10), this.f48305d);
        }
        throw new IllegalStateException("No plugins were added to this builder. Use #usePlugin method to add them");
    }
}
