package hg;

import java.io.IOException;
import java.util.Iterator;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b0 implements Iterable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ CharSequence f25828d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ e0 f25829e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b0(e0 e0Var, CharSequence charSequence) {
        this.f25828d = charSequence;
        Objects.requireNonNull(e0Var);
        this.f25829e = e0Var;
    }

    @Override // java.lang.Iterable
    public final Iterator iterator() {
        return this.f25829e.e(this.f25828d);
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append('[');
        Iterator it = iterator();
        try {
            if (it.hasNext()) {
                sb2.append(y.a(it.next(), ", "));
                while (it.hasNext()) {
                    sb2.append((CharSequence) ", ");
                    sb2.append(y.a(it.next(), ", "));
                }
            }
            sb2.append(']');
            return sb2.toString();
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }
}
