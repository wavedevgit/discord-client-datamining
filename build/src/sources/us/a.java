package us;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a implements n {
    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @Override // us.n
    public Object a(CharSequence input) {
        CharSequence charSequence;
        String str;
        Intrinsics.checkNotNullParameter(input, "input");
        try {
            charSequence = input;
        } catch (ys.j e10) {
            e = e10;
            charSequence = input;
        }
        try {
            try {
                return d(ys.l.c(ys.l.a(b().b()), charSequence, c(), 0, 4, null));
            } catch (IllegalArgumentException e11) {
                String message = e11.getMessage();
                if (message == null) {
                    str = "The value parsed from '" + ((Object) charSequence) + "' is invalid";
                } else {
                    str = message + " (when parsing '" + ((Object) charSequence) + "')";
                }
                throw new ts.b(str, e11);
            }
        } catch (ys.j e12) {
            e = e12;
            throw new ts.b("Failed to parse value from '" + ((Object) charSequence) + '\'', e);
        }
    }

    public abstract ws.f b();

    public abstract ys.c c();

    public abstract Object d(ys.c cVar);

    private a() {
    }
}
