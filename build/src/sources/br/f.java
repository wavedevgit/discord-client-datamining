package br;

import android.content.Context;
import android.widget.TextView;
import br.e;
import br.g;
import br.k;
import br.n;
import cr.c;
import fv.d;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class f implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final Context f7523a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7524b = new ArrayList(3);

    /* renamed from: c  reason: collision with root package name */
    private TextView.BufferType f7525c = TextView.BufferType.SPANNABLE;

    /* renamed from: d  reason: collision with root package name */
    private boolean f7526d = true;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(Context context) {
        this.f7523a = context;
    }

    private static List b(List list) {
        return new p(list).b();
    }

    @Override // br.e.a
    public e.a a(i iVar) {
        this.f7524b.add(iVar);
        return this;
    }

    @Override // br.e.a
    public e build() {
        if (!this.f7524b.isEmpty()) {
            List<i> b10 = b(this.f7524b);
            d.b bVar = new d.b();
            c.a i10 = cr.c.i(this.f7523a);
            g.b bVar2 = new g.b();
            n.a aVar = new n.a();
            k.a aVar2 = new k.a();
            for (i iVar : b10) {
                iVar.k(bVar);
                iVar.a(i10);
                iVar.e(bVar2);
                iVar.h(aVar);
                iVar.b(aVar2);
            }
            g h10 = bVar2.h(i10.z(), aVar2.build());
            return new h(this.f7525c, null, bVar.f(), m.b(aVar, h10), h10, Collections.unmodifiableList(b10), this.f7526d);
        }
        throw new IllegalStateException("No plugins were added to this builder. Use #usePlugin method to add them");
    }
}
