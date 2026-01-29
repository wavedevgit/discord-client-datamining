package vs;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements o {

    /* renamed from: a  reason: collision with root package name */
    private final String f51929a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends Lambda implements Function0 {
        a() {
            super(0);
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            return "Unexpected end of input: yet to parse '" + r.this.b() + '\'';
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends Lambda implements Function0 {

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ CharSequence f51932e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f51933i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ int f51934o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(CharSequence charSequence, int i10, int i11) {
            super(0);
            this.f51932e = charSequence;
            this.f51933i = i10;
            this.f51934o = i11;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Expected ");
            sb2.append(r.this.b());
            sb2.append(" but got ");
            CharSequence charSequence = this.f51932e;
            int i10 = this.f51933i;
            sb2.append(charSequence.subSequence(i10, this.f51934o + i10 + 1).toString());
            return sb2.toString();
        }
    }

    public r(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        this.f51929a = string;
        if (string.length() > 0) {
            if (!ss.d.b(string.charAt(0))) {
                if (!ss.d.b(string.charAt(string.length() - 1))) {
                    return;
                }
                throw new IllegalArgumentException(("String '" + string + "' ends with a digit").toString());
            }
            throw new IllegalArgumentException(("String '" + string + "' starts with a digit").toString());
        }
        throw new IllegalArgumentException("Empty string is not allowed");
    }

    @Override // vs.o
    public Object a(Object obj, CharSequence input, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        if (this.f51929a.length() + i10 > input.length()) {
            return k.f51918a.a(i10, new a());
        }
        int length = this.f51929a.length();
        for (int i11 = 0; i11 < length; i11++) {
            if (input.charAt(i10 + i11) != this.f51929a.charAt(i11)) {
                return k.f51918a.a(i10, new b(input, i10, i11));
            }
        }
        return k.f51918a.b(i10 + this.f51929a.length());
    }

    public final String b() {
        return this.f51929a;
    }

    public String toString() {
        return '\'' + this.f51929a + '\'';
    }
}
