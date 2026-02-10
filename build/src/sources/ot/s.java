package ot;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class s implements o {

    /* renamed from: a  reason: collision with root package name */
    private final Function2 f41232a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f41233b;

    /* renamed from: c  reason: collision with root package name */
    private final String f41234c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ char f41236e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(char c10) {
            super(0);
            this.f41236e = c10;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Expected " + s.this.f41234c + " but got " + this.f41236e;
        }
    }

    public s(Function2 isNegativeSetter, boolean z10, String whatThisExpects) {
        Intrinsics.checkNotNullParameter(isNegativeSetter, "isNegativeSetter");
        Intrinsics.checkNotNullParameter(whatThisExpects, "whatThisExpects");
        this.f41232a = isNegativeSetter;
        this.f41233b = z10;
        this.f41234c = whatThisExpects;
    }

    @Override // ot.o
    public Object a(Object obj, CharSequence input, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        if (i10 >= input.length()) {
            return k.f41215a.b(i10);
        }
        char charAt = input.charAt(i10);
        if (charAt == '-') {
            this.f41232a.invoke(obj, Boolean.TRUE);
            return k.f41215a.b(i10 + 1);
        } else if (charAt == '+' && this.f41233b) {
            this.f41232a.invoke(obj, Boolean.FALSE);
            return k.f41215a.b(i10 + 1);
        } else {
            return k.f41215a.a(i10, new a(charAt));
        }
    }

    public String toString() {
        return this.f41234c;
    }
}
