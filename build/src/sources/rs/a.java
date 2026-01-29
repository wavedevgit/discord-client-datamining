package rs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a implements n {
    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @Override // rs.n
    public Object a(CharSequence input) {
        CharSequence charSequence;
        String str;
        Intrinsics.checkNotNullParameter(input, "input");
        try {
            charSequence = input;
            try {
                try {
                    return d(vs.l.c(vs.l.a(b().b()), charSequence, c(), 0, 4, null));
                } catch (IllegalArgumentException e10) {
                    String message = e10.getMessage();
                    if (message == null) {
                        str = "The value parsed from '" + ((Object) charSequence) + "' is invalid";
                    } else {
                        str = message + " (when parsing '" + ((Object) charSequence) + "')";
                    }
                    throw new qs.b(str, e10);
                }
            } catch (vs.j e11) {
                e = e11;
                throw new qs.b("Failed to parse value from '" + ((Object) charSequence) + '\'', e);
            }
        } catch (vs.j e12) {
            e = e12;
            charSequence = input;
        }
    }

    public abstract ts.f b();

    public abstract vs.c c();

    public abstract Object d(vs.c cVar);

    private a() {
    }
}
