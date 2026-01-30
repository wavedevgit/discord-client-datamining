package vs;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Function2 f51951a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f51952b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51953c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ char f51955e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(char c10) {
            super(0);
            this.f51955e = c10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Expected " + s.this.f51953c + " but got " + this.f51955e;
        }
    }

    public s(Function2 isNegativeSetter, boolean z10, String whatThisExpects) {
        Intrinsics.checkNotNullParameter(isNegativeSetter, "isNegativeSetter");
        Intrinsics.checkNotNullParameter(whatThisExpects, "whatThisExpects");
        this.f51951a = isNegativeSetter;
        this.f51952b = z10;
        this.f51953c = whatThisExpects;
    }

    @Override // vs.o
    public Object a(Object obj, CharSequence input, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        if (i10 >= input.length()) {
            return k.f51934a.b(i10);
        }
        char charAt = input.charAt(i10);
        if (charAt == '-') {
            this.f51951a.invoke(obj, Boolean.TRUE);
            return k.f51934a.b(i10 + 1);
        } else if (charAt == '+' && this.f51952b) {
            this.f51951a.invoke(obj, Boolean.FALSE);
            return k.f51934a.b(i10 + 1);
        } else {
            return k.f51934a.a(i10, new a(charAt));
        }
    }

    public String toString() {
        return this.f51953c;
    }
}
