package ar;

import android.content.Context;
import android.widget.TextView;
import ar.e;
import ar.g;
import ar.k;
import ar.n;
import br.c;
import ev.d;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f6709a;

    /* renamed from: b  reason: collision with root package name */
    private final List f6710b = new ArrayList(3);

    /* renamed from: c  reason: collision with root package name */
    private TextView.BufferType f6711c = TextView.BufferType.SPANNABLE;

    /* renamed from: d  reason: collision with root package name */
    private boolean f6712d = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context) {
        this.f6709a = context;
    }

    private static List b(List list) {
        return new p(list).b();
    }

    @Override // ar.e.a
    public e.a a(i iVar) {
        this.f6710b.add(iVar);
        return this;
    }

    @Override // ar.e.a
    public e build() {
        if (!this.f6710b.isEmpty()) {
            List<i> b10 = b(this.f6710b);
            d.b bVar = new d.b();
            c.a i10 = br.c.i(this.f6709a);
            g.b bVar2 = new g.b();
            n.a aVar = new n.a();
            k.a aVar2 = new k.a();
            for (i iVar : b10) {
                iVar.b(bVar);
                iVar.f(i10);
                iVar.h(bVar2);
                iVar.d(aVar);
                iVar.a(aVar2);
            }
            g h10 = bVar2.h(i10.z(), aVar2.build());
            return new h(this.f6711c, null, bVar.f(), m.b(aVar, h10), h10, Collections.unmodifiableList(b10), this.f6712d);
        }
        throw new IllegalStateException("No plugins were added to this builder. Use #usePlugin method to add them");
    }
}
