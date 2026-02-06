package dt;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Function2 f21174a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f21175b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21176c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ char f21178e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(char c10) {
            super(0);
            this.f21178e = c10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Expected " + s.this.f21176c + " but got " + this.f21178e;
        }
    }

    public s(Function2 isNegativeSetter, boolean z10, String whatThisExpects) {
        Intrinsics.checkNotNullParameter(isNegativeSetter, "isNegativeSetter");
        Intrinsics.checkNotNullParameter(whatThisExpects, "whatThisExpects");
        this.f21174a = isNegativeSetter;
        this.f21175b = z10;
        this.f21176c = whatThisExpects;
    }

    @Override // dt.o
    public Object a(Object obj, CharSequence input, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        if (i10 >= input.length()) {
            return k.f21157a.b(i10);
        }
        char charAt = input.charAt(i10);
        if (charAt == '-') {
            this.f21174a.invoke(obj, Boolean.TRUE);
            return k.f21157a.b(i10 + 1);
        } else if (charAt == '+' && this.f21175b) {
            this.f21174a.invoke(obj, Boolean.FALSE);
            return k.f21157a.b(i10 + 1);
        } else {
            return k.f21157a.a(i10, new a(charAt));
        }
    }

    public String toString() {
        return this.f21176c;
    }
}
