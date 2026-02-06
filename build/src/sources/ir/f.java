package ir;

import android.content.Context;
import android.widget.TextView;
import ir.e;
import ir.g;
import ir.k;
import ir.n;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import jr.c;
import rv.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f29290a;

    /* renamed from: b  reason: collision with root package name */
    private final List f29291b = new ArrayList(3);

    /* renamed from: c  reason: collision with root package name */
    private TextView.BufferType f29292c = TextView.BufferType.SPANNABLE;

    /* renamed from: d  reason: collision with root package name */
    private boolean f29293d = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context) {
        this.f29290a = context;
    }

    private static List b(List list) {
        return new p(list).b();
    }

    @Override // ir.e.a
    public e.a a(i iVar) {
        this.f29291b.add(iVar);
        return this;
    }

    @Override // ir.e.a
    public e build() {
        if (!this.f29291b.isEmpty()) {
            List<i> b10 = b(this.f29291b);
            d.b bVar = new d.b();
            c.a i10 = jr.c.i(this.f29290a);
            g.b bVar2 = new g.b();
            n.a aVar = new n.a();
            k.a aVar2 = new k.a();
            for (i iVar : b10) {
                iVar.k(bVar);
                iVar.a(i10);
                iVar.h(bVar2);
                iVar.b(aVar);
                iVar.c(aVar2);
            }
            g h10 = bVar2.h(i10.z(), aVar2.build());
            return new h(this.f29292c, null, bVar.f(), m.b(aVar, h10), h10, Collections.unmodifiableList(b10), this.f29293d);
        }
        throw new IllegalStateException("No plugins were added to this builder. Use #usePlugin method to add them");
    }
}
