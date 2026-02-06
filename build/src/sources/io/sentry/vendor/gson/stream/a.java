package io.sentry.vendor.gson.stream;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.Closeable;
import java.io.EOFException;
import java.io.IOException;
import java.io.Reader;
import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Reader f29013d;

    /* renamed from: t  reason: collision with root package name */
    private long f29021t;

    /* renamed from: u  reason: collision with root package name */
    private int f29022u;

    /* renamed from: v  reason: collision with root package name */
    private String f29023v;

    /* renamed from: w  reason: collision with root package name */
    private int[] f29024w;

    /* renamed from: y  reason: collision with root package name */
    private String[] f29026y;

    /* renamed from: z  reason: collision with root package name */
    private int[] f29027z;

    /* renamed from: e  reason: collision with root package name */
    private boolean f29014e = false;

    /* renamed from: i  reason: collision with root package name */
    private final char[] f29015i = new char[IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET];

    /* renamed from: o  reason: collision with root package name */
    private int f29016o = 0;

    /* renamed from: p  reason: collision with root package name */
    private int f29017p = 0;

    /* renamed from: q  reason: collision with root package name */
    private int f29018q = 0;

    /* renamed from: r  reason: collision with root package name */
    private int f29019r = 0;

    /* renamed from: s  reason: collision with root package name */
    int f29020s = 0;

    /* renamed from: x  reason: collision with root package name */
    private int f29025x = 1;

    public a(Reader reader) {
        int[] iArr = new int[32];
        this.f29024w = iArr;
        iArr[0] = 6;
        this.f29026y = new String[32];
        this.f29027z = new int[32];
        if (reader != null) {
            this.f29013d = reader;
            return;
        }
        throw new NullPointerException("in == null");
    }

    /* JADX WARN: Code restructure failed: missing block: B:25:0x005a, code lost:
        if (r1 != null) goto L34;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x005c, code lost:
        r1 = new java.lang.StringBuilder(java.lang.Math.max((r2 - r3) * 2, 16));
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x006a, code lost:
        r1.append(r0, r3, r2 - r3);
        r9.f29016o = r2;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private java.lang.String C(char r10) {
        /*
            r9 = this;
            char[] r0 = r9.f29015i
            r1 = 0
        L3:
            int r2 = r9.f29016o
            int r3 = r9.f29017p
        L7:
            r4 = r3
            r3 = r2
        L9:
            r5 = 16
            r6 = 1
            if (r2 >= r4) goto L5a
            int r7 = r2 + 1
            char r2 = r0[r2]
            if (r2 != r10) goto L28
            r9.f29016o = r7
            int r7 = r7 - r3
            int r7 = r7 - r6
            if (r1 != 0) goto L20
            java.lang.String r10 = new java.lang.String
            r10.<init>(r0, r3, r7)
            return r10
        L20:
            r1.append(r0, r3, r7)
            java.lang.String r10 = r1.toString()
            return r10
        L28:
            r8 = 92
            if (r2 != r8) goto L4d
            r9.f29016o = r7
            int r7 = r7 - r3
            int r2 = r7 + (-1)
            if (r1 != 0) goto L3e
            int r7 = r7 * 2
            java.lang.StringBuilder r1 = new java.lang.StringBuilder
            int r4 = java.lang.Math.max(r7, r5)
            r1.<init>(r4)
        L3e:
            r1.append(r0, r3, r2)
            char r2 = r9.E0()
            r1.append(r2)
            int r2 = r9.f29016o
            int r3 = r9.f29017p
            goto L7
        L4d:
            r5 = 10
            if (r2 != r5) goto L58
            int r2 = r9.f29018q
            int r2 = r2 + r6
            r9.f29018q = r2
            r9.f29019r = r7
        L58:
            r2 = r7
            goto L9
        L5a:
            if (r1 != 0) goto L6a
            int r1 = r2 - r3
            int r1 = r1 * 2
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            int r1 = java.lang.Math.max(r1, r5)
            r4.<init>(r1)
            r1 = r4
        L6a:
            int r4 = r2 - r3
            r1.append(r0, r3, r4)
            r9.f29016o = r2
            boolean r2 = r9.m(r6)
            if (r2 == 0) goto L78
            goto L3
        L78:
            java.lang.String r10 = "Unterminated string"
            java.io.IOException r10 = r9.L0(r10)
            throw r10
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.vendor.gson.stream.a.C(char):java.lang.String");
    }

    private char E0() {
        int i10;
        if (this.f29016o == this.f29017p && !m(1)) {
            throw L0("Unterminated escape sequence");
        }
        char[] cArr = this.f29015i;
        int i11 = this.f29016o;
        int i12 = i11 + 1;
        this.f29016o = i12;
        char c10 = cArr[i11];
        if (c10 != '\n') {
            if (c10 != '\"' && c10 != '\'' && c10 != '/' && c10 != '\\') {
                if (c10 != 'b') {
                    if (c10 != 'f') {
                        if (c10 == 'n') {
                            return '\n';
                        }
                        if (c10 != 'r') {
                            if (c10 != 't') {
                                if (c10 == 'u') {
                                    if (i11 + 5 > this.f29017p && !m(4)) {
                                        throw L0("Unterminated escape sequence");
                                    }
                                    int i13 = this.f29016o;
                                    int i14 = i13 + 4;
                                    char c11 = 0;
                                    while (i13 < i14) {
                                        char c12 = this.f29015i[i13];
                                        char c13 = (char) (c11 << 4);
                                        if (c12 >= '0' && c12 <= '9') {
                                            i10 = c12 - '0';
                                        } else if (c12 >= 'a' && c12 <= 'f') {
                                            i10 = c12 - 'W';
                                        } else if (c12 >= 'A' && c12 <= 'F') {
                                            i10 = c12 - '7';
                                        } else {
                                            throw new NumberFormatException("\\u" + new String(this.f29015i, this.f29016o, 4));
                                        }
                                        c11 = (char) (c13 + i10);
                                        i13++;
                                    }
                                    this.f29016o += 4;
                                    return c11;
                                }
                                throw L0("Invalid escape sequence");
                            }
                            return '\t';
                        }
                        return '\r';
                    }
                    return '\f';
                }
                return '\b';
            }
            return c10;
        }
        this.f29018q++;
        this.f29019r = i12;
        return c10;
    }

    private void F0(char c10) {
        char[] cArr = this.f29015i;
        do {
            int i10 = this.f29016o;
            int i11 = this.f29017p;
            while (i10 < i11) {
                int i12 = i10 + 1;
                char c11 = cArr[i10];
                if (c11 == c10) {
                    this.f29016o = i12;
                    return;
                } else if (c11 == '\\') {
                    this.f29016o = i12;
                    E0();
                    i10 = this.f29016o;
                    i11 = this.f29017p;
                } else {
                    if (c11 == '\n') {
                        this.f29018q++;
                        this.f29019r = i12;
                    }
                    i10 = i12;
                }
            }
            this.f29016o = i10;
        } while (m(1));
        throw L0("Unterminated string");
    }

    /* JADX WARN: Code restructure failed: missing block: B:34:0x004a, code lost:
        a();
     */
    /* JADX WARN: Removed duplicated region for block: B:46:0x0080  */
    /* JADX WARN: Removed duplicated region for block: B:47:0x008a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private java.lang.String I() {
        /*
            r6 = this;
            r0 = 0
            r1 = 0
        L2:
            r2 = r1
        L3:
            int r3 = r6.f29016o
            int r4 = r3 + r2
            int r5 = r6.f29017p
            if (r4 >= r5) goto L4e
            char[] r4 = r6.f29015i
            int r3 = r3 + r2
            char r3 = r4[r3]
            r4 = 9
            if (r3 == r4) goto L5c
            r4 = 10
            if (r3 == r4) goto L5c
            r4 = 12
            if (r3 == r4) goto L5c
            r4 = 13
            if (r3 == r4) goto L5c
            r4 = 32
            if (r3 == r4) goto L5c
            r4 = 35
            if (r3 == r4) goto L4a
            r4 = 44
            if (r3 == r4) goto L5c
            r4 = 47
            if (r3 == r4) goto L4a
            r4 = 61
            if (r3 == r4) goto L4a
            r4 = 123(0x7b, float:1.72E-43)
            if (r3 == r4) goto L5c
            r4 = 125(0x7d, float:1.75E-43)
            if (r3 == r4) goto L5c
            r4 = 58
            if (r3 == r4) goto L5c
            r4 = 59
            if (r3 == r4) goto L4a
            switch(r3) {
                case 91: goto L5c;
                case 92: goto L4a;
                case 93: goto L5c;
                default: goto L47;
            }
        L47:
            int r2 = r2 + 1
            goto L3
        L4a:
            r6.a()
            goto L5c
        L4e:
            char[] r3 = r6.f29015i
            int r3 = r3.length
            if (r2 >= r3) goto L5e
            int r3 = r2 + 1
            boolean r3 = r6.m(r3)
            if (r3 == 0) goto L5c
            goto L3
        L5c:
            r1 = r2
            goto L7e
        L5e:
            if (r0 != 0) goto L6b
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r3 = 16
            int r3 = java.lang.Math.max(r2, r3)
            r0.<init>(r3)
        L6b:
            char[] r3 = r6.f29015i
            int r4 = r6.f29016o
            r0.append(r3, r4, r2)
            int r3 = r6.f29016o
            int r3 = r3 + r2
            r6.f29016o = r3
            r2 = 1
            boolean r2 = r6.m(r2)
            if (r2 != 0) goto L2
        L7e:
            if (r0 != 0) goto L8a
            java.lang.String r0 = new java.lang.String
            char[] r2 = r6.f29015i
            int r3 = r6.f29016o
            r0.<init>(r2, r3, r1)
            goto L95
        L8a:
            char[] r2 = r6.f29015i
            int r3 = r6.f29016o
            r0.append(r2, r3, r1)
            java.lang.String r0 = r0.toString()
        L95:
            int r2 = r6.f29016o
            int r2 = r2 + r1
            r6.f29016o = r2
            return r0
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.vendor.gson.stream.a.I():java.lang.String");
    }

    private boolean I0(String str) {
        int length = str.length();
        while (true) {
            if (this.f29016o + length > this.f29017p && !m(length)) {
                return false;
            }
            char[] cArr = this.f29015i;
            int i10 = this.f29016o;
            if (cArr[i10] == '\n') {
                this.f29018q++;
                this.f29019r = i10 + 1;
            } else {
                for (int i11 = 0; i11 < length; i11++) {
                    if (this.f29015i[this.f29016o + i11] != str.charAt(i11)) {
                        break;
                    }
                }
                return true;
            }
            this.f29016o++;
        }
    }

    private int J() {
        String str;
        String str2;
        int i10;
        char c10 = this.f29015i[this.f29016o];
        if (c10 != 't' && c10 != 'T') {
            if (c10 != 'f' && c10 != 'F') {
                if (c10 != 'n' && c10 != 'N') {
                    return 0;
                }
                str = "null";
                str2 = "NULL";
                i10 = 7;
            } else {
                str = "false";
                str2 = "FALSE";
                i10 = 6;
            }
        } else {
            str = "true";
            str2 = "TRUE";
            i10 = 5;
        }
        int length = str.length();
        for (int i11 = 1; i11 < length; i11++) {
            if (this.f29016o + i11 >= this.f29017p && !m(i11 + 1)) {
                return 0;
            }
            char c11 = this.f29015i[this.f29016o + i11];
            if (c11 != str.charAt(i11) && c11 != str2.charAt(i11)) {
                return 0;
            }
        }
        if ((this.f29016o + length < this.f29017p || m(length + 1)) && n(this.f29015i[this.f29016o + length])) {
            return 0;
        }
        this.f29016o += length;
        this.f29020s = i10;
        return i10;
    }

    private void J0() {
        char c10;
        do {
            if (this.f29016o < this.f29017p || m(1)) {
                char[] cArr = this.f29015i;
                int i10 = this.f29016o;
                int i11 = i10 + 1;
                this.f29016o = i11;
                c10 = cArr[i10];
                if (c10 == '\n') {
                    this.f29018q++;
                    this.f29019r = i11;
                    return;
                }
            } else {
                return;
            }
        } while (c10 != '\r');
    }

    /* JADX WARN: Code restructure failed: missing block: B:33:0x0048, code lost:
        a();
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void K0() {
        /*
            r4 = this;
        L0:
            r0 = 0
        L1:
            int r1 = r4.f29016o
            int r2 = r1 + r0
            int r3 = r4.f29017p
            if (r2 >= r3) goto L51
            char[] r2 = r4.f29015i
            int r1 = r1 + r0
            char r1 = r2[r1]
            r2 = 9
            if (r1 == r2) goto L4b
            r2 = 10
            if (r1 == r2) goto L4b
            r2 = 12
            if (r1 == r2) goto L4b
            r2 = 13
            if (r1 == r2) goto L4b
            r2 = 32
            if (r1 == r2) goto L4b
            r2 = 35
            if (r1 == r2) goto L48
            r2 = 44
            if (r1 == r2) goto L4b
            r2 = 47
            if (r1 == r2) goto L48
            r2 = 61
            if (r1 == r2) goto L48
            r2 = 123(0x7b, float:1.72E-43)
            if (r1 == r2) goto L4b
            r2 = 125(0x7d, float:1.75E-43)
            if (r1 == r2) goto L4b
            r2 = 58
            if (r1 == r2) goto L4b
            r2 = 59
            if (r1 == r2) goto L48
            switch(r1) {
                case 91: goto L4b;
                case 92: goto L48;
                case 93: goto L4b;
                default: goto L45;
            }
        L45:
            int r0 = r0 + 1
            goto L1
        L48:
            r4.a()
        L4b:
            int r1 = r4.f29016o
            int r1 = r1 + r0
            r4.f29016o = r1
            return
        L51:
            int r1 = r1 + r0
            r4.f29016o = r1
            r0 = 1
            boolean r0 = r4.m(r0)
            if (r0 != 0) goto L0
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.vendor.gson.stream.a.K0():void");
    }

    private IOException L0(String str) {
        throw new d(str + p());
    }

    /* JADX WARN: Code restructure failed: missing block: B:52:0x0093, code lost:
        if (n(r14) != false) goto L80;
     */
    /* JADX WARN: Code restructure failed: missing block: B:53:0x0095, code lost:
        if (r9 != 2) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:54:0x0097, code lost:
        if (r10 == 0) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:56:0x009d, code lost:
        if (r11 != Long.MIN_VALUE) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:57:0x009f, code lost:
        if (r13 == false) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:59:0x00a3, code lost:
        if (r11 != 0) goto L19;
     */
    /* JADX WARN: Code restructure failed: missing block: B:60:0x00a5, code lost:
        if (r13 != false) goto L24;
     */
    /* JADX WARN: Code restructure failed: missing block: B:61:0x00a7, code lost:
        if (r13 == false) goto L20;
     */
    /* JADX WARN: Code restructure failed: missing block: B:63:0x00aa, code lost:
        r11 = -r11;
     */
    /* JADX WARN: Code restructure failed: missing block: B:64:0x00ab, code lost:
        r19.f29021t = r11;
        r19.f29016o += r8;
        r19.f29020s = 15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:65:0x00b6, code lost:
        return 15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:66:0x00b7, code lost:
        if (r9 == 2) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:68:0x00ba, code lost:
        if (r9 == 4) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:70:0x00bd, code lost:
        if (r9 != 7) goto L29;
     */
    /* JADX WARN: Code restructure failed: missing block: B:72:0x00c0, code lost:
        return r18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:73:0x00c1, code lost:
        r19.f29022u = r8;
        r19.f29020s = 16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:74:0x00c7, code lost:
        return 16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:75:0x00c8, code lost:
        return r18;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int P() {
        /*
            Method dump skipped, instructions count: 236
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.vendor.gson.stream.a.P():int");
    }

    private void Y(int i10) {
        int i11 = this.f29025x;
        int[] iArr = this.f29024w;
        if (i11 == iArr.length) {
            int i12 = i11 * 2;
            this.f29024w = Arrays.copyOf(iArr, i12);
            this.f29027z = Arrays.copyOf(this.f29027z, i12);
            this.f29026y = (String[]) Arrays.copyOf(this.f29026y, i12);
        }
        int[] iArr2 = this.f29024w;
        int i13 = this.f29025x;
        this.f29025x = i13 + 1;
        iArr2[i13] = i10;
    }

    private void a() {
        if (this.f29014e) {
            return;
        }
        throw L0("Use JsonReader.setLenient(true) to accept malformed JSON");
    }

    private void g() {
        y(true);
        int i10 = this.f29016o;
        int i11 = i10 - 1;
        this.f29016o = i11;
        if (i10 + 4 <= this.f29017p || m(5)) {
            char[] cArr = this.f29015i;
            if (cArr[i11] == ')' && cArr[i10] == ']' && cArr[i10 + 1] == '}' && cArr[i10 + 2] == '\'' && cArr[i10 + 3] == '\n') {
                this.f29016o += 5;
            }
        }
    }

    private boolean m(int i10) {
        int i11;
        int i12;
        char[] cArr = this.f29015i;
        int i13 = this.f29019r;
        int i14 = this.f29016o;
        this.f29019r = i13 - i14;
        int i15 = this.f29017p;
        if (i15 != i14) {
            int i16 = i15 - i14;
            this.f29017p = i16;
            System.arraycopy(cArr, i14, cArr, 0, i16);
        } else {
            this.f29017p = 0;
        }
        this.f29016o = 0;
        do {
            Reader reader = this.f29013d;
            int i17 = this.f29017p;
            int read = reader.read(cArr, i17, cArr.length - i17);
            if (read == -1) {
                return false;
            }
            i11 = this.f29017p + read;
            this.f29017p = i11;
            if (this.f29018q == 0 && (i12 = this.f29019r) == 0 && i11 > 0 && cArr[0] == 65279) {
                this.f29016o++;
                this.f29019r = i12 + 1;
                i10++;
                continue;
            }
        } while (i11 < i10);
        return true;
    }

    private boolean n(char c10) {
        if (c10 != '\t' && c10 != '\n' && c10 != '\f' && c10 != '\r' && c10 != ' ') {
            if (c10 != '#') {
                if (c10 != ',') {
                    if (c10 != '/' && c10 != '=') {
                        if (c10 != '{' && c10 != '}' && c10 != ':') {
                            if (c10 != ';') {
                                switch (c10) {
                                    case '[':
                                    case ']':
                                        return false;
                                    case '\\':
                                        break;
                                    default:
                                        return true;
                                }
                            }
                        } else {
                            return false;
                        }
                    }
                } else {
                    return false;
                }
            }
            a();
            return false;
        }
        return false;
    }

    private int y(boolean z10) {
        char c10;
        char[] cArr = this.f29015i;
        int i10 = this.f29016o;
        int i11 = this.f29017p;
        while (true) {
            if (i10 == i11) {
                this.f29016o = i10;
                if (!m(1)) {
                    if (!z10) {
                        return -1;
                    }
                    throw new EOFException("End of input" + p());
                }
                i10 = this.f29016o;
                i11 = this.f29017p;
            }
            int i12 = i10 + 1;
            c10 = cArr[i10];
            if (c10 == '\n') {
                this.f29018q++;
                this.f29019r = i12;
            } else if (c10 != ' ' && c10 != '\r' && c10 != '\t') {
                if (c10 == '/') {
                    this.f29016o = i12;
                    if (i12 == i11) {
                        this.f29016o = i10;
                        boolean m10 = m(2);
                        this.f29016o++;
                        if (!m10) {
                            break;
                        }
                    }
                    a();
                    int i13 = this.f29016o;
                    char c11 = cArr[i13];
                    if (c11 != '*') {
                        if (c11 != '/') {
                            break;
                        }
                        this.f29016o = i13 + 1;
                        J0();
                        i10 = this.f29016o;
                        i11 = this.f29017p;
                    } else {
                        this.f29016o = i13 + 1;
                        if (I0("*/")) {
                            i10 = this.f29016o + 2;
                            i11 = this.f29017p;
                        } else {
                            throw L0("Unterminated comment");
                        }
                    }
                } else if (c10 == '#') {
                    this.f29016o = i12;
                    a();
                    J0();
                    i10 = this.f29016o;
                    i11 = this.f29017p;
                } else {
                    this.f29016o = i12;
                    return c10;
                }
            }
            i10 = i12;
        }
        return c10;
    }

    public final void A(boolean z10) {
        this.f29014e = z10;
    }

    public void D() {
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 2) {
            int i11 = this.f29025x;
            int i12 = i11 - 1;
            this.f29025x = i12;
            this.f29026y[i12] = null;
            int[] iArr = this.f29027z;
            int i13 = i11 - 2;
            iArr[i13] = iArr[i13] + 1;
            this.f29020s = 0;
            return;
        }
        throw new IllegalStateException("Expected END_OBJECT but was " + peek() + p());
    }

    public void S() {
        int i10 = 0;
        do {
            int i11 = this.f29020s;
            if (i11 == 0) {
                i11 = k();
            }
            if (i11 == 3) {
                Y(1);
            } else if (i11 == 1) {
                Y(3);
            } else {
                if (i11 == 4) {
                    this.f29025x--;
                } else if (i11 == 2) {
                    this.f29025x--;
                } else {
                    if (i11 != 14 && i11 != 10) {
                        if (i11 != 8 && i11 != 12) {
                            if (i11 != 9 && i11 != 13) {
                                if (i11 == 16) {
                                    this.f29016o += this.f29022u;
                                }
                            } else {
                                F0('\"');
                            }
                        } else {
                            F0('\'');
                        }
                    } else {
                        K0();
                    }
                    this.f29020s = 0;
                }
                i10--;
                this.f29020s = 0;
            }
            i10++;
            this.f29020s = 0;
        } while (i10 != 0);
        int[] iArr = this.f29027z;
        int i12 = this.f29025x;
        int i13 = i12 - 1;
        iArr[i13] = iArr[i13] + 1;
        this.f29026y[i12 - 1] = "null";
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29020s = 0;
        this.f29024w[0] = 8;
        this.f29025x = 1;
        this.f29013d.close();
    }

    public String e1() {
        String str;
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 10) {
            str = I();
        } else if (i10 == 8) {
            str = C('\'');
        } else if (i10 == 9) {
            str = C('\"');
        } else if (i10 == 11) {
            str = this.f29023v;
            this.f29023v = null;
        } else if (i10 == 15) {
            str = Long.toString(this.f29021t);
        } else if (i10 == 16) {
            str = new String(this.f29015i, this.f29016o, this.f29022u);
            this.f29016o += this.f29022u;
        } else {
            throw new IllegalStateException("Expected a string but was " + peek() + p());
        }
        this.f29020s = 0;
        int[] iArr = this.f29027z;
        int i11 = this.f29025x - 1;
        iArr[i11] = iArr[i11] + 1;
        return str;
    }

    public boolean hasNext() {
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 != 2 && i10 != 4) {
            return true;
        }
        return false;
    }

    int k() {
        int y10;
        int[] iArr = this.f29024w;
        int i10 = this.f29025x;
        int i11 = iArr[i10 - 1];
        if (i11 == 1) {
            iArr[i10 - 1] = 2;
        } else if (i11 == 2) {
            int y11 = y(true);
            if (y11 != 44) {
                if (y11 != 59) {
                    if (y11 == 93) {
                        this.f29020s = 4;
                        return 4;
                    }
                    throw L0("Unterminated array");
                }
                a();
            }
        } else if (i11 != 3 && i11 != 5) {
            if (i11 == 4) {
                iArr[i10 - 1] = 5;
                int y12 = y(true);
                if (y12 != 58) {
                    if (y12 == 61) {
                        a();
                        if (this.f29016o < this.f29017p || m(1)) {
                            char[] cArr = this.f29015i;
                            int i12 = this.f29016o;
                            if (cArr[i12] == '>') {
                                this.f29016o = i12 + 1;
                            }
                        }
                    } else {
                        throw L0("Expected ':'");
                    }
                }
            } else if (i11 == 6) {
                if (this.f29014e) {
                    g();
                }
                this.f29024w[this.f29025x - 1] = 7;
            } else if (i11 == 7) {
                if (y(false) == -1) {
                    this.f29020s = 17;
                    return 17;
                }
                a();
                this.f29016o--;
            } else if (i11 == 8) {
                throw new IllegalStateException("JsonReader is closed");
            }
        } else {
            iArr[i10 - 1] = 4;
            if (i11 == 5 && (y10 = y(true)) != 44) {
                if (y10 != 59) {
                    if (y10 == 125) {
                        this.f29020s = 2;
                        return 2;
                    }
                    throw L0("Unterminated object");
                }
                a();
            }
            int y13 = y(true);
            if (y13 != 34) {
                if (y13 != 39) {
                    if (y13 != 125) {
                        a();
                        this.f29016o--;
                        if (n((char) y13)) {
                            this.f29020s = 14;
                            return 14;
                        }
                        throw L0("Expected name");
                    } else if (i11 != 5) {
                        this.f29020s = 2;
                        return 2;
                    } else {
                        throw L0("Expected name");
                    }
                }
                a();
                this.f29020s = 12;
                return 12;
            }
            this.f29020s = 13;
            return 13;
        }
        int y14 = y(true);
        if (y14 != 34) {
            if (y14 != 39) {
                if (y14 != 44 && y14 != 59) {
                    if (y14 != 91) {
                        if (y14 != 93) {
                            if (y14 != 123) {
                                this.f29016o--;
                                int J = J();
                                if (J != 0) {
                                    return J;
                                }
                                int P = P();
                                if (P != 0) {
                                    return P;
                                }
                                if (n(this.f29015i[this.f29016o])) {
                                    a();
                                    this.f29020s = 10;
                                    return 10;
                                }
                                throw L0("Expected value");
                            }
                            this.f29020s = 1;
                            return 1;
                        } else if (i11 == 1) {
                            this.f29020s = 4;
                            return 4;
                        }
                    } else {
                        this.f29020s = 3;
                        return 3;
                    }
                }
                if (i11 != 1 && i11 != 2) {
                    throw L0("Unexpected value");
                }
                a();
                this.f29016o--;
                this.f29020s = 7;
                return 7;
            }
            a();
            this.f29020s = 8;
            return 8;
        }
        this.f29020s = 9;
        return 9;
    }

    public double nextDouble() {
        char c10;
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 15) {
            this.f29020s = 0;
            int[] iArr = this.f29027z;
            int i11 = this.f29025x - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f29021t;
        }
        if (i10 == 16) {
            this.f29023v = new String(this.f29015i, this.f29016o, this.f29022u);
            this.f29016o += this.f29022u;
        } else if (i10 != 8 && i10 != 9) {
            if (i10 == 10) {
                this.f29023v = I();
            } else if (i10 != 11) {
                throw new IllegalStateException("Expected a double but was " + peek() + p());
            }
        } else {
            if (i10 == 8) {
                c10 = '\'';
            } else {
                c10 = '\"';
            }
            this.f29023v = C(c10);
        }
        this.f29020s = 11;
        double parseDouble = Double.parseDouble(this.f29023v);
        if (!this.f29014e && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
            throw new d("JSON forbids NaN and infinities: " + parseDouble + p());
        }
        this.f29023v = null;
        this.f29020s = 0;
        int[] iArr2 = this.f29027z;
        int i12 = this.f29025x - 1;
        iArr2[i12] = iArr2[i12] + 1;
        return parseDouble;
    }

    public int nextInt() {
        char c10;
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 15) {
            long j10 = this.f29021t;
            int i11 = (int) j10;
            if (j10 == i11) {
                this.f29020s = 0;
                int[] iArr = this.f29027z;
                int i12 = this.f29025x - 1;
                iArr[i12] = iArr[i12] + 1;
                return i11;
            }
            throw new NumberFormatException("Expected an int but was " + this.f29021t + p());
        }
        if (i10 == 16) {
            this.f29023v = new String(this.f29015i, this.f29016o, this.f29022u);
            this.f29016o += this.f29022u;
        } else if (i10 != 8 && i10 != 9 && i10 != 10) {
            throw new IllegalStateException("Expected an int but was " + peek() + p());
        } else {
            if (i10 == 10) {
                this.f29023v = I();
            } else {
                if (i10 == 8) {
                    c10 = '\'';
                } else {
                    c10 = '\"';
                }
                this.f29023v = C(c10);
            }
            try {
                int parseInt = Integer.parseInt(this.f29023v);
                this.f29020s = 0;
                int[] iArr2 = this.f29027z;
                int i13 = this.f29025x - 1;
                iArr2[i13] = iArr2[i13] + 1;
                return parseInt;
            } catch (NumberFormatException unused) {
            }
        }
        this.f29020s = 11;
        double parseDouble = Double.parseDouble(this.f29023v);
        int i14 = (int) parseDouble;
        if (i14 == parseDouble) {
            this.f29023v = null;
            this.f29020s = 0;
            int[] iArr3 = this.f29027z;
            int i15 = this.f29025x - 1;
            iArr3[i15] = iArr3[i15] + 1;
            return i14;
        }
        throw new NumberFormatException("Expected an int but was " + this.f29023v + p());
    }

    public long nextLong() {
        char c10;
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 15) {
            this.f29020s = 0;
            int[] iArr = this.f29027z;
            int i11 = this.f29025x - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f29021t;
        }
        if (i10 == 16) {
            this.f29023v = new String(this.f29015i, this.f29016o, this.f29022u);
            this.f29016o += this.f29022u;
        } else if (i10 != 8 && i10 != 9 && i10 != 10) {
            throw new IllegalStateException("Expected a long but was " + peek() + p());
        } else {
            if (i10 == 10) {
                this.f29023v = I();
            } else {
                if (i10 == 8) {
                    c10 = '\'';
                } else {
                    c10 = '\"';
                }
                this.f29023v = C(c10);
            }
            try {
                long parseLong = Long.parseLong(this.f29023v);
                this.f29020s = 0;
                int[] iArr2 = this.f29027z;
                int i12 = this.f29025x - 1;
                iArr2[i12] = iArr2[i12] + 1;
                return parseLong;
            } catch (NumberFormatException unused) {
            }
        }
        this.f29020s = 11;
        double parseDouble = Double.parseDouble(this.f29023v);
        long j10 = (long) parseDouble;
        if (j10 == parseDouble) {
            this.f29023v = null;
            this.f29020s = 0;
            int[] iArr3 = this.f29027z;
            int i13 = this.f29025x - 1;
            iArr3[i13] = iArr3[i13] + 1;
            return j10;
        }
        throw new NumberFormatException("Expected a long but was " + this.f29023v + p());
    }

    public String o0() {
        String C;
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 14) {
            C = I();
        } else if (i10 == 12) {
            C = C('\'');
        } else if (i10 == 13) {
            C = C('\"');
        } else {
            throw new IllegalStateException("Expected a name but was " + peek() + p());
        }
        this.f29020s = 0;
        this.f29026y[this.f29025x - 1] = C;
        return C;
    }

    String p() {
        return " at line " + (this.f29018q + 1) + " column " + ((this.f29016o - this.f29019r) + 1) + " path " + t();
    }

    public b peek() {
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        switch (i10) {
            case 1:
                return b.BEGIN_OBJECT;
            case 2:
                return b.END_OBJECT;
            case 3:
                return b.BEGIN_ARRAY;
            case 4:
                return b.END_ARRAY;
            case 5:
            case 6:
                return b.BOOLEAN;
            case 7:
                return b.NULL;
            case 8:
            case 9:
            case 10:
            case 11:
                return b.STRING;
            case 12:
            case 13:
            case 14:
                return b.NAME;
            case 15:
            case 16:
                return b.NUMBER;
            case 17:
                return b.END_DOCUMENT;
            default:
                throw new AssertionError();
        }
    }

    public boolean s() {
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 5) {
            this.f29020s = 0;
            int[] iArr = this.f29027z;
            int i11 = this.f29025x - 1;
            iArr[i11] = iArr[i11] + 1;
            return true;
        } else if (i10 == 6) {
            this.f29020s = 0;
            int[] iArr2 = this.f29027z;
            int i12 = this.f29025x - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return false;
        } else {
            throw new IllegalStateException("Expected a boolean but was " + peek() + p());
        }
    }

    public String t() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append('$');
        int i10 = this.f29025x;
        for (int i11 = 0; i11 < i10; i11++) {
            int i12 = this.f29024w[i11];
            if (i12 != 1 && i12 != 2) {
                if (i12 == 3 || i12 == 4 || i12 == 5) {
                    sb2.append('.');
                    String str = this.f29026y[i11];
                    if (str != null) {
                        sb2.append(str);
                    }
                }
            } else {
                sb2.append('[');
                sb2.append(this.f29027z[i11]);
                sb2.append(']');
            }
        }
        return sb2.toString();
    }

    public String toString() {
        return getClass().getSimpleName() + p();
    }

    public void u() {
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 1) {
            Y(3);
            this.f29020s = 0;
            return;
        }
        throw new IllegalStateException("Expected BEGIN_OBJECT but was " + peek() + p());
    }

    public void v() {
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 4) {
            int i11 = this.f29025x;
            this.f29025x = i11 - 1;
            int[] iArr = this.f29027z;
            int i12 = i11 - 2;
            iArr[i12] = iArr[i12] + 1;
            this.f29020s = 0;
            return;
        }
        throw new IllegalStateException("Expected END_ARRAY but was " + peek() + p());
    }

    public void x() {
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 3) {
            Y(1);
            this.f29027z[this.f29025x - 1] = 0;
            this.f29020s = 0;
            return;
        }
        throw new IllegalStateException("Expected BEGIN_ARRAY but was " + peek() + p());
    }

    public void z() {
        int i10 = this.f29020s;
        if (i10 == 0) {
            i10 = k();
        }
        if (i10 == 7) {
            this.f29020s = 0;
            int[] iArr = this.f29027z;
            int i11 = this.f29025x - 1;
            iArr[i11] = iArr[i11] + 1;
            return;
        }
        throw new IllegalStateException("Expected null but was " + peek() + p());
    }
}
