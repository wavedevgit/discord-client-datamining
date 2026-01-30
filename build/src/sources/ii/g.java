package ii;

import java.io.IOException;
import java.util.Iterator;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    private final String f28541a;

    private g(String str) {
        this.f28541a = (String) m.j(str);
    }

    public static g d(char c10) {
        return new g(String.valueOf(c10));
    }

    public Appendable a(Appendable appendable, Iterator it) {
        m.j(appendable);
        if (it.hasNext()) {
            appendable.append(e(it.next()));
            while (it.hasNext()) {
                appendable.append(this.f28541a);
                appendable.append(e(it.next()));
            }
        }
        return appendable;
    }

    public final StringBuilder b(StringBuilder sb2, Iterable iterable) {
        return c(sb2, iterable.iterator());
    }

    public final StringBuilder c(StringBuilder sb2, Iterator it) {
        try {
            a(sb2, it);
            return sb2;
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }

    CharSequence e(Object obj) {
        Objects.requireNonNull(obj);
        if (obj instanceof CharSequence) {
            return (CharSequence) obj;
        }
        return obj.toString();
    }
}
