package net.time4j.history;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: c  reason: collision with root package name */
    private static final int[] f38073c;

    /* renamed from: d  reason: collision with root package name */
    private static final h f38074d = h.i(j.AD, 8, 1, 1);

    /* renamed from: e  reason: collision with root package name */
    private static final h f38075e = h.i(j.BC, 45, 1, 1);

    /* renamed from: f  reason: collision with root package name */
    public static final a f38076f;

    /* renamed from: a  reason: collision with root package name */
    private final int[] f38077a;

    /* renamed from: b  reason: collision with root package name */
    private final b f38078b;

    /* renamed from: net.time4j.history.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class C0531a implements b {
        C0531a() {
        }

        private int b(int i10, int i11) {
            switch (i11) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    return 31;
                case 2:
                    if (g(i10)) {
                        return 29;
                    }
                    return 28;
                case 4:
                case 6:
                case 9:
                case 11:
                    return 30;
                default:
                    throw new IllegalArgumentException("Invalid month: " + i11);
            }
        }

        private int c(h hVar) {
            return hVar.e().a(hVar.g());
        }

        private boolean g(int i10) {
            if (Arrays.binarySearch(a.this.f38077a, i10) >= 0) {
                return true;
            }
            return false;
        }

        @Override // net.time4j.history.b
        public long a(h hVar) {
            long j10;
            if (hVar.compareTo(a.f38074d) >= 0) {
                return c.f38081e.a(hVar);
            }
            if (hVar.compareTo(a.f38075e) >= 0) {
                int c10 = c(hVar);
                long j11 = -676021;
                for (int i10 = 7; i10 >= c10; i10--) {
                    if (g(i10)) {
                        j10 = 366;
                    } else {
                        j10 = 365;
                    }
                    j11 -= j10;
                }
                for (int i11 = 1; i11 < hVar.f(); i11++) {
                    j11 += b(c10, i11);
                }
                return (j11 + hVar.d()) - 1;
            }
            throw new IllegalArgumentException("Not valid before 45 BC: " + hVar);
        }

        @Override // net.time4j.history.b
        public int d(h hVar) {
            if (hVar.compareTo(a.f38074d) >= 0) {
                return c.f38081e.d(hVar);
            }
            if (hVar.compareTo(a.f38075e) >= 0) {
                return b(c(hVar), hVar.f());
            }
            throw new IllegalArgumentException("Not valid before 45 BC: " + hVar);
        }

        @Override // net.time4j.history.b
        public h e(long j10) {
            long j11;
            j jVar;
            long j12 = -676021;
            if (j10 >= -676021) {
                return c.f38081e.e(j10);
            }
            int i10 = 7;
            while (i10 >= -44) {
                if (g(i10)) {
                    j11 = 366;
                } else {
                    j11 = 365;
                }
                j12 -= j11;
                if (j12 <= j10) {
                    int i11 = 1;
                    while (i11 <= 12) {
                        long b10 = b(i10, i11) + j12;
                        if (b10 > j10) {
                            if (i10 <= 0) {
                                jVar = j.BC;
                            } else {
                                jVar = j.AD;
                            }
                            if (i10 <= 0) {
                                i10 = 1 - i10;
                            }
                            return h.i(jVar, i10, i11, (int) ((j10 - j12) + 1));
                        }
                        i11++;
                        j12 = b10;
                    }
                    continue;
                }
                i10--;
            }
            throw new IllegalArgumentException("Not valid before 45 BC: " + j10);
        }

        @Override // net.time4j.history.b
        public boolean f(h hVar) {
            int c10;
            if (hVar != null && (c10 = c(hVar)) >= -44) {
                if (c10 >= 8) {
                    return c.f38081e.f(hVar);
                }
                if (hVar.d() <= b(c10, hVar.f())) {
                    return true;
                }
            }
            return false;
        }
    }

    static {
        int[] iArr = {42, 39, 36, 33, 30, 27, 24, 21, 18, 15, 12, 9};
        f38073c = iArr;
        f38076f = new a(iArr);
    }

    private a(int... iArr) {
        int i10;
        int[] iArr2 = new int[iArr.length];
        int i11 = 0;
        while (true) {
            i10 = 1;
            if (i11 >= iArr.length) {
                break;
            }
            iArr2[i11] = 1 - iArr[i11];
            i11++;
        }
        Arrays.sort(iArr2);
        this.f38077a = iArr2;
        if (iArr2.length != 0) {
            int i12 = iArr2[0];
            if (i12 >= -44 && iArr2[iArr2.length - 1] < 8) {
                while (i10 < iArr.length) {
                    int i13 = iArr2[i10];
                    if (i13 != i12) {
                        i10++;
                        i12 = i13;
                    } else {
                        throw new IllegalArgumentException("Contains duplicates: " + Arrays.toString(iArr));
                    }
                }
                this.f38078b = new C0531a();
                return;
            }
            throw new IllegalArgumentException("Out of range: " + Arrays.toString(iArr));
        }
        throw new IllegalArgumentException("Missing leap years.");
    }

    public static a f(int... iArr) {
        if (Arrays.equals(iArr, f38073c)) {
            return f38076f;
        }
        return new a(iArr);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b d() {
        return this.f38078b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int[] e() {
        return this.f38077a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof a) && this.f38077a == ((a) obj).f38077a) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return Arrays.hashCode(this.f38077a);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        for (int i10 = 0; i10 < this.f38077a.length; i10++) {
            if (i10 > 0) {
                sb2.append(", ");
            }
            int i11 = 1 - this.f38077a[i10];
            if (i11 > 0) {
                sb2.append("BC ");
                sb2.append(i11);
            } else {
                sb2.append("AD ");
                sb2.append(this.f38077a[i10]);
            }
        }
        return sb2.toString();
    }
}
