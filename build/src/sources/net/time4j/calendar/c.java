package net.time4j.calendar;

import java.text.ParsePosition;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends o {
    private static final c[] B;
    private static final long serialVersionUID = 4908662352833192131L;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a extends j {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ int f40452a;

        a(int i10) {
            this.f40452a = i10;
        }

        @Override // net.time4j.calendar.j
        public int d() {
            return (((this.f40452a - 1) * 60) + c.this.getNumber()) - 1;
        }
    }

    static {
        c[] cVarArr = new c[60];
        int i10 = 0;
        while (i10 < 60) {
            int i11 = i10 + 1;
            cVarArr[i10] = new c(i11);
            i10 = i11;
        }
        B = cVarArr;
    }

    private c(int i10) {
        super(i10);
    }

    public static c r(int i10) {
        if (i10 >= 1 && i10 <= 60) {
            return B[i10 - 1];
        }
        throw new IllegalArgumentException("Out of range: " + i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c s(CharSequence charSequence, ParsePosition parsePosition, Locale locale, boolean z10) {
        o o10 = o.o(charSequence, parsePosition, locale, z10);
        if (o10 == null) {
            return null;
        }
        return r(o10.getNumber());
    }

    public j q(int i10) {
        if (i10 >= 1) {
            return new a(i10);
        }
        throw new IllegalArgumentException("Cycle number must not be smaller than 1: " + i10);
    }

    @Override // net.time4j.calendar.o
    Object readResolve() {
        return r(super.getNumber());
    }
}
