package et;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Function2 f22122a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f22123b;

    /* renamed from: c  reason: collision with root package name */
    private final String f22124c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ char f22126e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(char c10) {
            super(0);
            this.f22126e = c10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Expected " + s.this.f22124c + " but got " + this.f22126e;
        }
    }

    public s(Function2 isNegativeSetter, boolean z10, String whatThisExpects) {
        Intrinsics.checkNotNullParameter(isNegativeSetter, "isNegativeSetter");
        Intrinsics.checkNotNullParameter(whatThisExpects, "whatThisExpects");
        this.f22122a = isNegativeSetter;
        this.f22123b = z10;
        this.f22124c = whatThisExpects;
    }

    @Override // et.o
    public Object a(Object obj, CharSequence input, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        if (i10 >= input.length()) {
            return k.f22105a.b(i10);
        }
        char charAt = input.charAt(i10);
        if (charAt == '-') {
            this.f22122a.invoke(obj, Boolean.TRUE);
            return k.f22105a.b(i10 + 1);
        } else if (charAt == '+' && this.f22123b) {
            this.f22122a.invoke(obj, Boolean.FALSE);
            return k.f22105a.b(i10 + 1);
        } else {
            return k.f22105a.a(i10, new a(charAt));
        }
    }

    public String toString() {
        return this.f22124c;
    }
}
