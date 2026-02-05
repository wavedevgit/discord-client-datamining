package pg;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.io.IOException;
import java.util.Iterator;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class rk {

    /* renamed from: a  reason: collision with root package name */
    private final String f45675a = ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE;

    private rk(String str) {
    }

    public static rk a(String str) {
        return new rk(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
    }

    static final CharSequence c(Object obj) {
        Objects.requireNonNull(obj);
        if (obj instanceof CharSequence) {
            return (CharSequence) obj;
        }
        return obj.toString();
    }

    public final String b(Iterable iterable) {
        Iterator it = iterable.iterator();
        StringBuilder sb2 = new StringBuilder();
        try {
            if (it.hasNext()) {
                sb2.append(c(it.next()));
                while (it.hasNext()) {
                    sb2.append((CharSequence) this.f45675a);
                    sb2.append(c(it.next()));
                }
            }
            return sb2.toString();
        } catch (IOException e10) {
            throw new AssertionError(e10);
        }
    }
}
