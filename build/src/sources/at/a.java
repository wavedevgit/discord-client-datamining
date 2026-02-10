package at;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a implements n {
    public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @Override // at.n
    public Object a(CharSequence input) {
        CharSequence charSequence;
        String str;
        Intrinsics.checkNotNullParameter(input, "input");
        try {
            charSequence = input;
            try {
                try {
                    return d(et.l.c(et.l.a(b().b()), charSequence, c(), 0, 4, null));
                } catch (IllegalArgumentException e10) {
                    String message = e10.getMessage();
                    if (message == null) {
                        str = "The value parsed from '" + ((Object) charSequence) + "' is invalid";
                    } else {
                        str = message + " (when parsing '" + ((Object) charSequence) + "')";
                    }
                    throw new zs.b(str, e10);
                }
            } catch (et.j e11) {
                e = e11;
                throw new zs.b("Failed to parse value from '" + ((Object) charSequence) + '\'', e);
            }
        } catch (et.j e12) {
            e = e12;
            charSequence = input;
        }
    }

    public abstract ct.f b();

    public abstract et.c c();

    public abstract Object d(et.c cVar);

    private a() {
    }
}
