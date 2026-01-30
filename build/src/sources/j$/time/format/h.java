package j$.time.format;

import j$.time.DateTimeException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class h implements e {

    /* renamed from: f  reason: collision with root package name */
    public static final long[] f31589f = {0, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000L};

    /* renamed from: a  reason: collision with root package name */
    public final j$.time.temporal.n f31590a;

    /* renamed from: b  reason: collision with root package name */
    public final int f31591b;

    /* renamed from: c  reason: collision with root package name */
    public final int f31592c;

    /* renamed from: d  reason: collision with root package name */
    public final w f31593d;

    /* renamed from: e  reason: collision with root package name */
    public final int f31594e;

    public h(j$.time.temporal.n nVar, int i10, int i11, w wVar) {
        this.f31590a = nVar;
        this.f31591b = i10;
        this.f31592c = i11;
        this.f31593d = wVar;
        this.f31594e = 0;
    }

    public h(j$.time.temporal.n nVar, int i10, int i11, w wVar, int i12) {
        this.f31590a = nVar;
        this.f31591b = i10;
        this.f31592c = i11;
        this.f31593d = wVar;
        this.f31594e = i12;
    }

    @Override // j$.time.format.e
    public final boolean r(q qVar, StringBuilder sb2) {
        j$.time.temporal.n nVar = this.f31590a;
        Long a10 = qVar.a(nVar);
        if (a10 == null) {
            return false;
        }
        long longValue = a10.longValue();
        t tVar = qVar.f31620b.f31568c;
        String l10 = longValue == Long.MIN_VALUE ? "9223372036854775808" : Long.toString(Math.abs(longValue));
        int length = l10.length();
        int i10 = this.f31592c;
        if (length > i10) {
            throw new DateTimeException("Field " + nVar + " cannot be printed as the value " + longValue + " exceeds the maximum print width of " + i10);
        }
        tVar.getClass();
        int i11 = (longValue > 0L ? 1 : (longValue == 0L ? 0 : -1));
        int i12 = this.f31591b;
        w wVar = this.f31593d;
        if (i11 >= 0) {
            int i13 = b.f31579a[wVar.ordinal()];
            if (i13 != 1) {
                if (i13 == 2) {
                    sb2.append('+');
                }
            } else if (i12 < 19 && longValue >= f31589f[i12]) {
                sb2.append('+');
            }
        } else {
            int i14 = b.f31579a[wVar.ordinal()];
            if (i14 == 1 || i14 == 2 || i14 == 3) {
                sb2.append('-');
            } else if (i14 == 4) {
                throw new DateTimeException("Field " + nVar + " cannot be printed as the value " + longValue + " cannot be negative according to the SignStyle");
            }
        }
        for (int i15 = 0; i15 < i12 - l10.length(); i15++) {
            sb2.append('0');
        }
        sb2.append(l10);
        return true;
    }

    /* JADX WARN: Code restructure failed: missing block: B:95:0x013b, code lost:
        r6 = r13;
        r4 = r21;
     */
    @Override // j$.time.format.e
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final int t(j$.time.format.o r28, java.lang.CharSequence r29, int r30) {
        /*
            Method dump skipped, instructions count: 431
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: j$.time.format.h.t(j$.time.format.o, java.lang.CharSequence, int):int");
    }

    public final String toString() {
        j$.time.temporal.n nVar = this.f31590a;
        w wVar = this.f31593d;
        int i10 = this.f31592c;
        int i11 = this.f31591b;
        if (i11 == 1 && i10 == 19 && wVar == w.NORMAL) {
            return "Value(" + nVar + ")";
        } else if (i11 == i10 && wVar == w.NOT_NEGATIVE) {
            return "Value(" + nVar + "," + i11 + ")";
        } else {
            return "Value(" + nVar + "," + i11 + "," + i10 + "," + wVar + ")";
        }
    }
}
