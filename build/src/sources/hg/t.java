package hg;

import java.io.IOException;
import java.util.Iterator;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class t implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ CharSequence f26995d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ b f26996e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(b bVar, CharSequence charSequence) {
        this.f26995d = charSequence;
        this.f26996e = bVar;
    }

    @Override // java.lang.Iterable
    public final Iterator iterator() {
        Iterator h10;
        h10 = this.f26996e.h(this.f26995d);
        return h10;
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append('[');
        Iterator it = iterator();
        try {
            if (it.hasNext()) {
                sb2.append(p.a(it.next(), ", "));
                while (it.hasNext()) {
                    sb2.append((CharSequence) ", ");
                    sb2.append(p.a(it.next(), ", "));
                }
            }
            sb2.append(']');
            return sb2.toString();
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }
}
