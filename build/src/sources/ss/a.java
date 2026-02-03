package ss;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a implements n {
    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @Override // ss.n
    public Object a(CharSequence input) {
        CharSequence charSequence;
        String str;
        Intrinsics.checkNotNullParameter(input, "input");
        try {
            charSequence = input;
            try {
                try {
                    return d(ws.l.c(ws.l.a(b().b()), charSequence, c(), 0, 4, null));
                } catch (IllegalArgumentException e10) {
                    String message = e10.getMessage();
                    if (message == null) {
                        str = "The value parsed from '" + ((Object) charSequence) + "' is invalid";
                    } else {
                        str = message + " (when parsing '" + ((Object) charSequence) + "')";
                    }
                    throw new rs.b(str, e10);
                }
            } catch (ws.j e11) {
                e = e11;
                throw new rs.b("Failed to parse value from '" + ((Object) charSequence) + '\'', e);
            }
        } catch (ws.j e12) {
            e = e12;
            charSequence = input;
        }
    }

    public abstract us.f b();

    public abstract ws.c c();

    public abstract Object d(ws.c cVar);

    private a() {
    }
}
