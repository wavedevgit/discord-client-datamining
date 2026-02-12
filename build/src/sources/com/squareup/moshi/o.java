package com.squareup.moshi;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.squareup.moshi.m;
import java.io.EOFException;
import java.io.IOException;
import java.math.BigDecimal;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o extends m {

    /* renamed from: r  reason: collision with root package name */
    private final BufferedSource f18822r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f18823s;

    /* renamed from: t  reason: collision with root package name */
    private int f18824t;

    /* renamed from: u  reason: collision with root package name */
    private long f18825u;

    /* renamed from: v  reason: collision with root package name */
    private int f18826v;

    /* renamed from: w  reason: collision with root package name */
    private String f18827w;

    /* renamed from: x  reason: collision with root package name */
    private r f18828x;

    /* renamed from: y  reason: collision with root package name */
    private static final ByteString f18820y = ByteString.h("'\\");

    /* renamed from: z  reason: collision with root package name */
    private static final ByteString f18821z = ByteString.h("\"\\");
    private static final ByteString A = ByteString.h("{}[]:, \n\t\r\f/\\;#=");
    private static final ByteString B = ByteString.h("\n\r");
    private static final ByteString C = ByteString.h("*/");

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(BufferedSource bufferedSource) {
        this.f18824t = 0;
        if (bufferedSource != null) {
            this.f18822r = bufferedSource;
            this.f18823s = bufferedSource.f();
            C(6);
            return;
        }
        throw new NullPointerException("source == null");
    }

    private void F0() {
        if (this.f18804p) {
            return;
        }
        throw C0("Use JsonReader.setLenient(true) to accept malformed JSON");
    }

    private int G0() {
        int[] iArr = this.f18801e;
        int i10 = this.f18800d;
        int i11 = iArr[i10 - 1];
        if (i11 == 1) {
            iArr[i10 - 1] = 2;
        } else if (i11 == 2) {
            int O0 = O0(true);
            this.f18823s.readByte();
            if (O0 != 44) {
                if (O0 != 59) {
                    if (O0 == 93) {
                        this.f18824t = 4;
                        return 4;
                    }
                    throw C0("Unterminated array");
                }
                F0();
            }
        } else if (i11 != 3 && i11 != 5) {
            if (i11 == 4) {
                iArr[i10 - 1] = 5;
                int O02 = O0(true);
                this.f18823s.readByte();
                if (O02 != 58) {
                    if (O02 == 61) {
                        F0();
                        if (this.f18822r.D0(1L) && this.f18823s.Z(0L) == 62) {
                            this.f18823s.readByte();
                        }
                    } else {
                        throw C0("Expected ':'");
                    }
                }
            } else if (i11 == 6) {
                iArr[i10 - 1] = 7;
            } else if (i11 == 7) {
                if (O0(false) == -1) {
                    this.f18824t = 18;
                    return 18;
                }
                F0();
            } else if (i11 == 9) {
                this.f18828x.h();
                this.f18828x = null;
                this.f18800d--;
                return G0();
            } else if (i11 == 8) {
                throw new IllegalStateException("JsonReader is closed");
            }
        } else {
            iArr[i10 - 1] = 4;
            if (i11 == 5) {
                int O03 = O0(true);
                this.f18823s.readByte();
                if (O03 != 44) {
                    if (O03 != 59) {
                        if (O03 == 125) {
                            this.f18824t = 2;
                            return 2;
                        }
                        throw C0("Unterminated object");
                    }
                    F0();
                }
            }
            int O04 = O0(true);
            if (O04 != 34) {
                if (O04 != 39) {
                    if (O04 != 125) {
                        F0();
                        if (N0((char) O04)) {
                            this.f18824t = 14;
                            return 14;
                        }
                        throw C0("Expected name");
                    } else if (i11 != 5) {
                        this.f18823s.readByte();
                        this.f18824t = 2;
                        return 2;
                    } else {
                        throw C0("Expected name");
                    }
                }
                this.f18823s.readByte();
                F0();
                this.f18824t = 12;
                return 12;
            }
            this.f18823s.readByte();
            this.f18824t = 13;
            return 13;
        }
        int O05 = O0(true);
        if (O05 != 34) {
            if (O05 != 39) {
                if (O05 != 44 && O05 != 59) {
                    if (O05 != 91) {
                        if (O05 != 93) {
                            if (O05 != 123) {
                                int Z0 = Z0();
                                if (Z0 != 0) {
                                    return Z0;
                                }
                                int a12 = a1();
                                if (a12 != 0) {
                                    return a12;
                                }
                                if (N0(this.f18823s.Z(0L))) {
                                    F0();
                                    this.f18824t = 10;
                                    return 10;
                                }
                                throw C0("Expected value");
                            }
                            this.f18823s.readByte();
                            this.f18824t = 1;
                            return 1;
                        } else if (i11 == 1) {
                            this.f18823s.readByte();
                            this.f18824t = 4;
                            return 4;
                        }
                    } else {
                        this.f18823s.readByte();
                        this.f18824t = 3;
                        return 3;
                    }
                }
                if (i11 != 1 && i11 != 2) {
                    throw C0("Unexpected value");
                }
                F0();
                this.f18824t = 7;
                return 7;
            }
            F0();
            this.f18823s.readByte();
            this.f18824t = 8;
            return 8;
        }
        this.f18823s.readByte();
        this.f18824t = 9;
        return 9;
    }

    private int H0(String str, m.b bVar) {
        int length = bVar.f18807a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(bVar.f18807a[i10])) {
                this.f18824t = 0;
                this.f18802i[this.f18800d - 1] = str;
                return i10;
            }
        }
        return -1;
    }

    private int L0(String str, m.b bVar) {
        int length = bVar.f18807a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(bVar.f18807a[i10])) {
                this.f18824t = 0;
                int[] iArr = this.f18803o;
                int i11 = this.f18800d - 1;
                iArr[i11] = iArr[i11] + 1;
                return i10;
            }
        }
        return -1;
    }

    private boolean N0(int i10) {
        if (i10 != 9 && i10 != 10 && i10 != 12 && i10 != 13 && i10 != 32) {
            if (i10 != 35) {
                if (i10 != 44) {
                    if (i10 != 47 && i10 != 61) {
                        if (i10 != 123 && i10 != 125 && i10 != 58) {
                            if (i10 != 59) {
                                switch (i10) {
                                    case 91:
                                    case 93:
                                        return false;
                                    case 92:
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
            F0();
            return false;
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0025, code lost:
        r6.f18823s.skip(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x002d, code lost:
        if (r2 != 47) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0037, code lost:
        if (r6.f18822r.D0(2) != false) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003a, code lost:
        F0();
        r3 = r6.f18823s.Z(1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0047, code lost:
        if (r3 == 42) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0049, code lost:
        if (r3 == 47) goto L39;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x004c, code lost:
        r6.f18823s.readByte();
        r6.f18823s.readByte();
        x1();
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x005a, code lost:
        r6.f18823s.readByte();
        r6.f18823s.readByte();
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0068, code lost:
        if (w1() == false) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0071, code lost:
        throw C0("Unterminated comment");
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0074, code lost:
        if (r2 != 35) goto L22;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0076, code lost:
        F0();
        x1();
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int O0(boolean r7) {
        /*
            r6 = this;
            r0 = 0
        L1:
            r1 = r0
        L2:
            okio.BufferedSource r2 = r6.f18822r
            int r3 = r1 + 1
            long r4 = (long) r3
            boolean r2 = r2.D0(r4)
            if (r2 == 0) goto L80
            okio.Buffer r2 = r6.f18823s
            long r4 = (long) r1
            byte r2 = r2.Z(r4)
            r4 = 10
            if (r2 == r4) goto L7e
            r4 = 32
            if (r2 == r4) goto L7e
            r4 = 13
            if (r2 == r4) goto L7e
            r4 = 9
            if (r2 != r4) goto L25
            goto L7e
        L25:
            okio.Buffer r3 = r6.f18823s
            long r4 = (long) r1
            r3.skip(r4)
            r1 = 47
            if (r2 != r1) goto L72
            okio.BufferedSource r3 = r6.f18822r
            r4 = 2
            boolean r3 = r3.D0(r4)
            if (r3 != 0) goto L3a
            goto L7d
        L3a:
            r6.F0()
            okio.Buffer r3 = r6.f18823s
            r4 = 1
            byte r3 = r3.Z(r4)
            r4 = 42
            if (r3 == r4) goto L5a
            if (r3 == r1) goto L4c
            goto L7d
        L4c:
            okio.Buffer r1 = r6.f18823s
            r1.readByte()
            okio.Buffer r1 = r6.f18823s
            r1.readByte()
            r6.x1()
            goto L1
        L5a:
            okio.Buffer r1 = r6.f18823s
            r1.readByte()
            okio.Buffer r1 = r6.f18823s
            r1.readByte()
            boolean r1 = r6.w1()
            if (r1 == 0) goto L6b
            goto L1
        L6b:
            java.lang.String r7 = "Unterminated comment"
            com.squareup.moshi.k r7 = r6.C0(r7)
            throw r7
        L72:
            r1 = 35
            if (r2 != r1) goto L7d
            r6.F0()
            r6.x1()
            goto L1
        L7d:
            return r2
        L7e:
            r1 = r3
            goto L2
        L80:
            if (r7 != 0) goto L84
            r7 = -1
            return r7
        L84:
            java.io.EOFException r7 = new java.io.EOFException
            java.lang.String r0 = "End of input"
            r7.<init>(r0)
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.o.O0(boolean):int");
    }

    private String S0(ByteString byteString) {
        StringBuilder sb2 = null;
        while (true) {
            long g02 = this.f18822r.g0(byteString);
            if (g02 != -1) {
                if (this.f18823s.Z(g02) == 92) {
                    if (sb2 == null) {
                        sb2 = new StringBuilder();
                    }
                    sb2.append(this.f18823s.d1(g02));
                    this.f18823s.readByte();
                    sb2.append(b1());
                } else if (sb2 == null) {
                    String d12 = this.f18823s.d1(g02);
                    this.f18823s.readByte();
                    return d12;
                } else {
                    sb2.append(this.f18823s.d1(g02));
                    this.f18823s.readByte();
                    return sb2.toString();
                }
            } else {
                throw C0("Unterminated string");
            }
        }
    }

    private String V0() {
        long g02 = this.f18822r.g0(A);
        if (g02 != -1) {
            return this.f18823s.d1(g02);
        }
        return this.f18823s.X1();
    }

    private int Z0() {
        String str;
        String str2;
        int i10;
        byte Z = this.f18823s.Z(0L);
        if (Z != 116 && Z != 84) {
            if (Z != 102 && Z != 70) {
                if (Z != 110 && Z != 78) {
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
        int i11 = 1;
        while (i11 < length) {
            int i12 = i11 + 1;
            if (!this.f18822r.D0(i12)) {
                return 0;
            }
            byte Z2 = this.f18823s.Z(i11);
            if (Z2 != str.charAt(i11) && Z2 != str2.charAt(i11)) {
                return 0;
            }
            i11 = i12;
        }
        if (this.f18822r.D0(length + 1) && N0(this.f18823s.Z(length))) {
            return 0;
        }
        this.f18823s.skip(length);
        this.f18824t = i10;
        return i10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:44:0x0089, code lost:
        if (N0(r1) != false) goto L68;
     */
    /* JADX WARN: Code restructure failed: missing block: B:45:0x008b, code lost:
        if (r6 != 2) goto L61;
     */
    /* JADX WARN: Code restructure failed: missing block: B:46:0x008d, code lost:
        if (r7 == false) goto L61;
     */
    /* JADX WARN: Code restructure failed: missing block: B:48:0x0093, code lost:
        if (r8 != Long.MIN_VALUE) goto L54;
     */
    /* JADX WARN: Code restructure failed: missing block: B:49:0x0095, code lost:
        if (r10 == false) goto L61;
     */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x0099, code lost:
        if (r8 != r16) goto L57;
     */
    /* JADX WARN: Code restructure failed: missing block: B:52:0x009b, code lost:
        if (r10 != false) goto L61;
     */
    /* JADX WARN: Code restructure failed: missing block: B:53:0x009d, code lost:
        if (r10 == false) goto L58;
     */
    /* JADX WARN: Code restructure failed: missing block: B:55:0x00a0, code lost:
        r8 = -r8;
     */
    /* JADX WARN: Code restructure failed: missing block: B:56:0x00a1, code lost:
        r19.f18825u = r8;
        r19.f18823s.skip(r5);
        r19.f18824t = 16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:57:0x00ad, code lost:
        return 16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:58:0x00ae, code lost:
        if (r6 == 2) goto L66;
     */
    /* JADX WARN: Code restructure failed: missing block: B:59:0x00b0, code lost:
        if (r6 == 4) goto L66;
     */
    /* JADX WARN: Code restructure failed: missing block: B:61:0x00b3, code lost:
        if (r6 != 7) goto L65;
     */
    /* JADX WARN: Code restructure failed: missing block: B:63:0x00b6, code lost:
        return r18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:64:0x00b7, code lost:
        r19.f18826v = r5;
        r19.f18824t = 17;
     */
    /* JADX WARN: Code restructure failed: missing block: B:65:0x00bd, code lost:
        return 17;
     */
    /* JADX WARN: Code restructure failed: missing block: B:66:0x00be, code lost:
        return 0;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int a1() {
        /*
            Method dump skipped, instructions count: 221
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.o.a1():int");
    }

    private char b1() {
        int i10;
        if (this.f18822r.D0(1L)) {
            byte readByte = this.f18823s.readByte();
            if (readByte != 10 && readByte != 34 && readByte != 39 && readByte != 47 && readByte != 92) {
                if (readByte != 98) {
                    if (readByte != 102) {
                        if (readByte == 110) {
                            return '\n';
                        }
                        if (readByte != 114) {
                            if (readByte != 116) {
                                if (readByte != 117) {
                                    if (this.f18804p) {
                                        return (char) readByte;
                                    }
                                    throw C0("Invalid escape sequence: \\" + ((char) readByte));
                                } else if (this.f18822r.D0(4L)) {
                                    char c10 = 0;
                                    for (int i11 = 0; i11 < 4; i11++) {
                                        byte Z = this.f18823s.Z(i11);
                                        char c11 = (char) (c10 << 4);
                                        if (Z >= 48 && Z <= 57) {
                                            i10 = Z - 48;
                                        } else if (Z >= 97 && Z <= 102) {
                                            i10 = Z - 87;
                                        } else if (Z < 65 || Z > 70) {
                                            throw C0("\\u" + this.f18823s.d1(4L));
                                        } else {
                                            i10 = Z - 55;
                                        }
                                        c10 = (char) (c11 + i10);
                                    }
                                    this.f18823s.skip(4L);
                                    return c10;
                                } else {
                                    throw new EOFException("Unterminated escape sequence at path " + t());
                                }
                            }
                            return '\t';
                        }
                        return '\r';
                    }
                    return '\f';
                }
                return '\b';
            }
            return (char) readByte;
        }
        throw C0("Unterminated escape sequence");
    }

    private void f1(ByteString byteString) {
        while (true) {
            long g02 = this.f18822r.g0(byteString);
            if (g02 != -1) {
                if (this.f18823s.Z(g02) == 92) {
                    this.f18823s.skip(g02 + 1);
                    b1();
                } else {
                    this.f18823s.skip(g02 + 1);
                    return;
                }
            } else {
                throw C0("Unterminated string");
            }
        }
    }

    private boolean w1() {
        boolean z10;
        long size;
        BufferedSource bufferedSource = this.f18822r;
        ByteString byteString = C;
        long Y = bufferedSource.Y(byteString);
        if (Y != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        Buffer buffer = this.f18823s;
        if (z10) {
            size = Y + byteString.G();
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
        return z10;
    }

    private void x1() {
        long size;
        long g02 = this.f18822r.g0(B);
        Buffer buffer = this.f18823s;
        if (g02 != -1) {
            size = g02 + 1;
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
    }

    private void z1() {
        long g02 = this.f18822r.g0(A);
        Buffer buffer = this.f18823s;
        if (g02 == -1) {
            g02 = buffer.size();
        }
        buffer.skip(g02);
    }

    @Override // com.squareup.moshi.m
    public void D() {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 2) {
            int i11 = this.f18800d;
            int i12 = i11 - 1;
            this.f18800d = i12;
            this.f18802i[i12] = null;
            int[] iArr = this.f18803o;
            int i13 = i11 - 2;
            iArr[i13] = iArr[i13] + 1;
            this.f18824t = 0;
            return;
        }
        throw new j("Expected END_OBJECT but was " + s() + " at path " + t());
    }

    @Override // com.squareup.moshi.m
    public int J(m.b bVar) {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 < 12 || i10 > 15) {
            return -1;
        }
        if (i10 == 15) {
            return H0(this.f18827w, bVar);
        }
        int T1 = this.f18822r.T1(bVar.f18808b);
        if (T1 != -1) {
            this.f18824t = 0;
            this.f18802i[this.f18800d - 1] = bVar.f18807a[T1];
            return T1;
        }
        String str = this.f18802i[this.f18800d - 1];
        String o02 = o0();
        int H0 = H0(o02, bVar);
        if (H0 == -1) {
            this.f18824t = 15;
            this.f18827w = o02;
            this.f18802i[this.f18800d - 1] = str;
        }
        return H0;
    }

    @Override // com.squareup.moshi.m
    public int Q(m.b bVar) {
        int[] iArr;
        int i10;
        int i11 = this.f18824t;
        if (i11 == 0) {
            i11 = G0();
        }
        if (i11 < 8 || i11 > 11) {
            return -1;
        }
        if (i11 == 11) {
            return L0(this.f18827w, bVar);
        }
        int T1 = this.f18822r.T1(bVar.f18808b);
        if (T1 != -1) {
            this.f18824t = 0;
            int[] iArr2 = this.f18803o;
            int i12 = this.f18800d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return T1;
        }
        String g12 = g1();
        int L0 = L0(g12, bVar);
        if (L0 == -1) {
            this.f18824t = 11;
            this.f18827w = g12;
            this.f18803o[this.f18800d - 1] = iArr[i10] - 1;
        }
        return L0;
    }

    @Override // com.squareup.moshi.m
    public void T() {
        if (!this.f18805q) {
            int i10 = 0;
            do {
                int i11 = this.f18824t;
                if (i11 == 0) {
                    i11 = G0();
                }
                if (i11 == 3) {
                    C(1);
                } else if (i11 == 1) {
                    C(3);
                } else {
                    if (i11 == 4) {
                        i10--;
                        if (i10 >= 0) {
                            this.f18800d--;
                        } else {
                            throw new j("Expected a value but was " + s() + " at path " + t());
                        }
                    } else if (i11 == 2) {
                        i10--;
                        if (i10 >= 0) {
                            this.f18800d--;
                        } else {
                            throw new j("Expected a value but was " + s() + " at path " + t());
                        }
                    } else if (i11 != 14 && i11 != 10) {
                        if (i11 != 9 && i11 != 13) {
                            if (i11 != 8 && i11 != 12) {
                                if (i11 == 17) {
                                    this.f18823s.skip(this.f18826v);
                                } else if (i11 == 18) {
                                    throw new j("Expected a value but was " + s() + " at path " + t());
                                }
                            } else {
                                f1(f18820y);
                            }
                        } else {
                            f1(f18821z);
                        }
                    } else {
                        z1();
                    }
                    this.f18824t = 0;
                }
                i10++;
                this.f18824t = 0;
            } while (i10 != 0);
            int[] iArr = this.f18803o;
            int i12 = this.f18800d;
            int i13 = i12 - 1;
            iArr[i13] = iArr[i13] + 1;
            this.f18802i[i12 - 1] = "null";
            return;
        }
        throw new j("Cannot skip unexpected " + s() + " at " + t());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f18824t = 0;
        this.f18801e[0] = 8;
        this.f18800d = 1;
        this.f18823s.h();
        this.f18822r.close();
    }

    @Override // com.squareup.moshi.m
    public String g1() {
        String d12;
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 10) {
            d12 = V0();
        } else if (i10 == 9) {
            d12 = S0(f18821z);
        } else if (i10 == 8) {
            d12 = S0(f18820y);
        } else if (i10 == 11) {
            d12 = this.f18827w;
            this.f18827w = null;
        } else if (i10 == 16) {
            d12 = Long.toString(this.f18825u);
        } else if (i10 == 17) {
            d12 = this.f18823s.d1(this.f18826v);
        } else {
            throw new j("Expected a string but was " + s() + " at path " + t());
        }
        this.f18824t = 0;
        int[] iArr = this.f18803o;
        int i11 = this.f18800d - 1;
        iArr[i11] = iArr[i11] + 1;
        return d12;
    }

    @Override // com.squareup.moshi.m
    public boolean hasNext() {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 != 2 && i10 != 4 && i10 != 18) {
            return true;
        }
        return false;
    }

    @Override // com.squareup.moshi.m
    public boolean i() {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 5) {
            this.f18824t = 0;
            int[] iArr = this.f18803o;
            int i11 = this.f18800d - 1;
            iArr[i11] = iArr[i11] + 1;
            return true;
        } else if (i10 == 6) {
            this.f18824t = 0;
            int[] iArr2 = this.f18803o;
            int i12 = this.f18800d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return false;
        } else {
            throw new j("Expected a boolean but was " + s() + " at path " + t());
        }
    }

    @Override // com.squareup.moshi.m
    public Object m() {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 7) {
            this.f18824t = 0;
            int[] iArr = this.f18803o;
            int i11 = this.f18800d - 1;
            iArr[i11] = iArr[i11] + 1;
            return null;
        }
        throw new j("Expected null but was " + s() + " at path " + t());
    }

    /* JADX WARN: Removed duplicated region for block: B:50:0x00bd  */
    @Override // com.squareup.moshi.m
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public okio.BufferedSource n() {
        /*
            Method dump skipped, instructions count: 220
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.o.n():okio.BufferedSource");
    }

    @Override // com.squareup.moshi.m
    public double nextDouble() {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 16) {
            this.f18824t = 0;
            int[] iArr = this.f18803o;
            int i11 = this.f18800d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f18825u;
        }
        if (i10 == 17) {
            this.f18827w = this.f18823s.d1(this.f18826v);
        } else if (i10 == 9) {
            this.f18827w = S0(f18821z);
        } else if (i10 == 8) {
            this.f18827w = S0(f18820y);
        } else if (i10 == 10) {
            this.f18827w = V0();
        } else if (i10 != 11) {
            throw new j("Expected a double but was " + s() + " at path " + t());
        }
        this.f18824t = 11;
        try {
            double parseDouble = Double.parseDouble(this.f18827w);
            if (!this.f18804p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
                throw new k("JSON forbids NaN and infinities: " + parseDouble + " at path " + t());
            }
            this.f18827w = null;
            this.f18824t = 0;
            int[] iArr2 = this.f18803o;
            int i12 = this.f18800d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return parseDouble;
        } catch (NumberFormatException unused) {
            throw new j("Expected a double but was " + this.f18827w + " at path " + t());
        }
    }

    @Override // com.squareup.moshi.m
    public int nextInt() {
        String S0;
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 16) {
            long j10 = this.f18825u;
            int i11 = (int) j10;
            if (j10 == i11) {
                this.f18824t = 0;
                int[] iArr = this.f18803o;
                int i12 = this.f18800d - 1;
                iArr[i12] = iArr[i12] + 1;
                return i11;
            }
            throw new j("Expected an int but was " + this.f18825u + " at path " + t());
        }
        if (i10 == 17) {
            this.f18827w = this.f18823s.d1(this.f18826v);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new j("Expected an int but was " + s() + " at path " + t());
            }
        } else {
            if (i10 == 9) {
                S0 = S0(f18821z);
            } else {
                S0 = S0(f18820y);
            }
            this.f18827w = S0;
            try {
                int parseInt = Integer.parseInt(S0);
                this.f18824t = 0;
                int[] iArr2 = this.f18803o;
                int i13 = this.f18800d - 1;
                iArr2[i13] = iArr2[i13] + 1;
                return parseInt;
            } catch (NumberFormatException unused) {
            }
        }
        this.f18824t = 11;
        try {
            double parseDouble = Double.parseDouble(this.f18827w);
            int i14 = (int) parseDouble;
            if (i14 == parseDouble) {
                this.f18827w = null;
                this.f18824t = 0;
                int[] iArr3 = this.f18803o;
                int i15 = this.f18800d - 1;
                iArr3[i15] = iArr3[i15] + 1;
                return i14;
            }
            throw new j("Expected an int but was " + this.f18827w + " at path " + t());
        } catch (NumberFormatException unused2) {
            throw new j("Expected an int but was " + this.f18827w + " at path " + t());
        }
    }

    @Override // com.squareup.moshi.m
    public long nextLong() {
        String S0;
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 16) {
            this.f18824t = 0;
            int[] iArr = this.f18803o;
            int i11 = this.f18800d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f18825u;
        }
        if (i10 == 17) {
            this.f18827w = this.f18823s.d1(this.f18826v);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new j("Expected a long but was " + s() + " at path " + t());
            }
        } else {
            if (i10 == 9) {
                S0 = S0(f18821z);
            } else {
                S0 = S0(f18820y);
            }
            this.f18827w = S0;
            try {
                long parseLong = Long.parseLong(S0);
                this.f18824t = 0;
                int[] iArr2 = this.f18803o;
                int i12 = this.f18800d - 1;
                iArr2[i12] = iArr2[i12] + 1;
                return parseLong;
            } catch (NumberFormatException unused) {
            }
        }
        this.f18824t = 11;
        try {
            long longValueExact = new BigDecimal(this.f18827w).longValueExact();
            this.f18827w = null;
            this.f18824t = 0;
            int[] iArr3 = this.f18803o;
            int i13 = this.f18800d - 1;
            iArr3[i13] = iArr3[i13] + 1;
            return longValueExact;
        } catch (ArithmeticException | NumberFormatException unused2) {
            throw new j("Expected a long but was " + this.f18827w + " at path " + t());
        }
    }

    @Override // com.squareup.moshi.m
    public String o0() {
        String str;
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 14) {
            str = V0();
        } else if (i10 == 13) {
            str = S0(f18821z);
        } else if (i10 == 12) {
            str = S0(f18820y);
        } else if (i10 == 15) {
            str = this.f18827w;
            this.f18827w = null;
        } else {
            throw new j("Expected a name but was " + s() + " at path " + t());
        }
        this.f18824t = 0;
        this.f18802i[this.f18800d - 1] = str;
        return str;
    }

    @Override // com.squareup.moshi.m
    public m.c s() {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        switch (i10) {
            case 1:
                return m.c.BEGIN_OBJECT;
            case 2:
                return m.c.END_OBJECT;
            case 3:
                return m.c.BEGIN_ARRAY;
            case 4:
                return m.c.END_ARRAY;
            case 5:
            case 6:
                return m.c.BOOLEAN;
            case 7:
                return m.c.NULL;
            case 8:
            case 9:
            case 10:
            case 11:
                return m.c.STRING;
            case 12:
            case 13:
            case 14:
            case 15:
                return m.c.NAME;
            case 16:
            case 17:
                return m.c.NUMBER;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return m.c.END_DOCUMENT;
            default:
                throw new AssertionError();
        }
    }

    public String toString() {
        return "JsonReader(" + this.f18822r + ")";
    }

    @Override // com.squareup.moshi.m
    public void u() {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 1) {
            C(3);
            this.f18824t = 0;
            return;
        }
        throw new j("Expected BEGIN_OBJECT but was " + s() + " at path " + t());
    }

    @Override // com.squareup.moshi.m
    public void v() {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 4) {
            int i11 = this.f18800d;
            this.f18800d = i11 - 1;
            int[] iArr = this.f18803o;
            int i12 = i11 - 2;
            iArr[i12] = iArr[i12] + 1;
            this.f18824t = 0;
            return;
        }
        throw new j("Expected END_ARRAY but was " + s() + " at path " + t());
    }

    @Override // com.squareup.moshi.m
    public void x() {
        int i10 = this.f18824t;
        if (i10 == 0) {
            i10 = G0();
        }
        if (i10 == 3) {
            C(1);
            this.f18803o[this.f18800d - 1] = 0;
            this.f18824t = 0;
            return;
        }
        throw new j("Expected BEGIN_ARRAY but was " + s() + " at path " + t());
    }

    @Override // com.squareup.moshi.m
    public m y() {
        return new o(this);
    }

    @Override // com.squareup.moshi.m
    public void z() {
        if (hasNext()) {
            this.f18827w = o0();
            this.f18824t = 11;
        }
    }

    @Override // com.squareup.moshi.m
    public void z0() {
        if (!this.f18805q) {
            int i10 = this.f18824t;
            if (i10 == 0) {
                i10 = G0();
            }
            if (i10 == 14) {
                z1();
            } else if (i10 == 13) {
                f1(f18821z);
            } else if (i10 == 12) {
                f1(f18820y);
            } else if (i10 != 15) {
                throw new j("Expected a name but was " + s() + " at path " + t());
            }
            this.f18824t = 0;
            this.f18802i[this.f18800d - 1] = "null";
            return;
        }
        m.c s10 = s();
        o0();
        throw new j("Cannot skip unexpected " + s10 + " at " + t());
    }

    o(o oVar) {
        super(oVar);
        this.f18824t = 0;
        BufferedSource peek = oVar.f18822r.peek();
        this.f18822r = peek;
        this.f18823s = peek.f();
        this.f18824t = oVar.f18824t;
        this.f18825u = oVar.f18825u;
        this.f18826v = oVar.f18826v;
        this.f18827w = oVar.f18827w;
        try {
            peek.U0(oVar.f18823s.size());
        } catch (IOException unused) {
            throw new AssertionError();
        }
    }
}
