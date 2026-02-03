package dr;

import android.content.Context;
import android.widget.TextView;
import dr.e;
import dr.g;
import dr.k;
import dr.n;
import er.c;
import hv.d;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f20839a;

    /* renamed from: b  reason: collision with root package name */
    private final List f20840b = new ArrayList(3);

    /* renamed from: c  reason: collision with root package name */
    private TextView.BufferType f20841c = TextView.BufferType.SPANNABLE;

    /* renamed from: d  reason: collision with root package name */
    private boolean f20842d = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context) {
        this.f20839a = context;
    }

    private static List b(List list) {
        return new p(list).b();
    }

    @Override // dr.e.a
    public e.a a(i iVar) {
        this.f20840b.add(iVar);
        return this;
    }

    @Override // dr.e.a
    public e build() {
        if (!this.f20840b.isEmpty()) {
            List<i> b10 = b(this.f20840b);
            d.b bVar = new d.b();
            c.a i10 = er.c.i(this.f20839a);
            g.b bVar2 = new g.b();
            n.a aVar = new n.a();
            k.a aVar2 = new k.a();
            for (i iVar : b10) {
                iVar.g(bVar);
                iVar.a(i10);
                iVar.c(bVar2);
                iVar.j(aVar);
                iVar.f(aVar2);
            }
            g h10 = bVar2.h(i10.z(), aVar2.build());
            return new h(this.f20841c, null, bVar.f(), m.b(aVar, h10), h10, Collections.unmodifiableList(b10), this.f20842d);
        }
        throw new IllegalStateException("No plugins were added to this builder. Use #usePlugin method to add them");
    }
}
