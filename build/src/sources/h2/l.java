package h2;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l extends m {

    /* renamed from: o  reason: collision with root package name */
    private final String f27340o;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l(String type, CharSequence charSequence) {
        super(type, charSequence);
        Intrinsics.checkNotNullParameter(type, "type");
        this.f27340o = type;
        if (a().length() > 0) {
            return;
        }
        throw new IllegalArgumentException("type must not be empty");
    }

    public String a() {
        return this.f27340o;
    }
}
