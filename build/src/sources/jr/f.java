package jr;

import android.content.Context;
import android.widget.TextView;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import jr.e;
import jr.g;
import jr.k;
import jr.n;
import kr.c;
import sv.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f30417a;

    /* renamed from: b  reason: collision with root package name */
    private final List f30418b = new ArrayList(3);

    /* renamed from: c  reason: collision with root package name */
    private TextView.BufferType f30419c = TextView.BufferType.SPANNABLE;

    /* renamed from: d  reason: collision with root package name */
    private boolean f30420d = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context) {
        this.f30417a = context;
    }

    private static List b(List list) {
        return new p(list).b();
    }

    @Override // jr.e.a
    public e.a a(i iVar) {
        this.f30418b.add(iVar);
        return this;
    }

    @Override // jr.e.a
    public e build() {
        if (!this.f30418b.isEmpty()) {
            List<i> b10 = b(this.f30418b);
            d.b bVar = new d.b();
            c.a i10 = kr.c.i(this.f30417a);
            g.b bVar2 = new g.b();
            n.a aVar = new n.a();
            k.a aVar2 = new k.a();
            for (i iVar : b10) {
                iVar.g(bVar);
                iVar.j(i10);
                iVar.a(bVar2);
                iVar.f(aVar);
                iVar.b(aVar2);
            }
            g h10 = bVar2.h(i10.z(), aVar2.build());
            return new h(this.f30419c, null, bVar.f(), m.b(aVar, h10), h10, Collections.unmodifiableList(b10), this.f30420d);
        }
        throw new IllegalStateException("No plugins were added to this builder. Use #usePlugin method to add them");
    }
}
