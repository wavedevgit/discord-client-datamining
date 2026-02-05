package gr;

import android.content.Context;
import android.widget.TextView;
import gr.e;
import gr.g;
import gr.k;
import gr.n;
import hr.c;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import kv.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f25163a;

    /* renamed from: b  reason: collision with root package name */
    private final List f25164b = new ArrayList(3);

    /* renamed from: c  reason: collision with root package name */
    private TextView.BufferType f25165c = TextView.BufferType.SPANNABLE;

    /* renamed from: d  reason: collision with root package name */
    private boolean f25166d = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context) {
        this.f25163a = context;
    }

    private static List b(List list) {
        return new p(list).b();
    }

    @Override // gr.e.a
    public e.a a(i iVar) {
        this.f25164b.add(iVar);
        return this;
    }

    @Override // gr.e.a
    public e build() {
        if (!this.f25164b.isEmpty()) {
            List<i> b10 = b(this.f25164b);
            d.b bVar = new d.b();
            c.a i10 = hr.c.i(this.f25163a);
            g.b bVar2 = new g.b();
            n.a aVar = new n.a();
            k.a aVar2 = new k.a();
            for (i iVar : b10) {
                iVar.b(bVar);
                iVar.i(i10);
                iVar.g(bVar2);
                iVar.d(aVar);
                iVar.h(aVar2);
            }
            g h10 = bVar2.h(i10.z(), aVar2.build());
            return new h(this.f25165c, null, bVar.f(), m.b(aVar, h10), h10, Collections.unmodifiableList(b10), this.f25166d);
        }
        throw new IllegalStateException("No plugins were added to this builder. Use #usePlugin method to add them");
    }
}
