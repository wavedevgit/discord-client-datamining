package ys;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r implements o {

    /* renamed from: a  reason: collision with root package name */
    private final String f55310a;

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
        final /* synthetic */ CharSequence f55313e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ int f55314i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ int f55315o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(CharSequence charSequence, int i10, int i11) {
            super(0);
            this.f55313e = charSequence;
            this.f55314i = i10;
            this.f55315o = i11;
        }

        @Override // kotlin.jvm.functions.Function0
        public final String invoke() {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Expected ");
            sb2.append(r.this.b());
            sb2.append(" but got ");
            CharSequence charSequence = this.f55313e;
            int i10 = this.f55314i;
            sb2.append(charSequence.subSequence(i10, this.f55315o + i10 + 1).toString());
            return sb2.toString();
        }
    }

    public r(String string) {
        Intrinsics.checkNotNullParameter(string, "string");
        this.f55310a = string;
        if (string.length() > 0) {
            if (!vs.d.b(string.charAt(0))) {
                if (!vs.d.b(string.charAt(string.length() - 1))) {
                    return;
                }
                throw new IllegalArgumentException(("String '" + string + "' ends with a digit").toString());
            }
            throw new IllegalArgumentException(("String '" + string + "' starts with a digit").toString());
        }
        throw new IllegalArgumentException("Empty string is not allowed");
    }

    @Override // ys.o
    public Object a(Object obj, CharSequence input, int i10) {
        Intrinsics.checkNotNullParameter(input, "input");
        if (this.f55310a.length() + i10 > input.length()) {
            return k.f55299a.a(i10, new a());
        }
        int length = this.f55310a.length();
        for (int i11 = 0; i11 < length; i11++) {
            if (input.charAt(i10 + i11) != this.f55310a.charAt(i11)) {
                return k.f55299a.a(i10, new b(input, i10, i11));
            }
        }
        return k.f55299a.b(i10 + this.f55310a.length());
    }

    public final String b() {
        return this.f55310a;
    }

    public String toString() {
        return '\'' + this.f55310a + '\'';
    }
}
