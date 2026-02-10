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
    private final BufferedSource f18072r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f18073s;

    /* renamed from: t  reason: collision with root package name */
    private int f18074t;

    /* renamed from: u  reason: collision with root package name */
    private long f18075u;

    /* renamed from: v  reason: collision with root package name */
    private int f18076v;

    /* renamed from: w  reason: collision with root package name */
    private String f18077w;

    /* renamed from: x  reason: collision with root package name */
    private r f18078x;

    /* renamed from: y  reason: collision with root package name */
    private static final ByteString f18070y = ByteString.h("'\\");

    /* renamed from: z  reason: collision with root package name */
    private static final ByteString f18071z = ByteString.h("\"\\");
    private static final ByteString A = ByteString.h("{}[]:, \n\t\r\f/\\;#=");
    private static final ByteString B = ByteString.h("\n\r");
    private static final ByteString C = ByteString.h("*/");

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(BufferedSource bufferedSource) {
        this.f18074t = 0;
        if (bufferedSource != null) {
            this.f18072r = bufferedSource;
            this.f18073s = bufferedSource.e();
            C(6);
            return;
        }
        throw new NullPointerException("source == null");
    }

    private void H0() {
        if (this.f18054p) {
            return;
        }
        throw D0("Use JsonReader.setLenient(true) to accept malformed JSON");
    }

    private int J0() {
        int[] iArr = this.f18051e;
        int i10 = this.f18050d;
        int i11 = iArr[i10 - 1];
        if (i11 == 1) {
            iArr[i10 - 1] = 2;
        } else if (i11 == 2) {
            int W0 = W0(true);
            this.f18073s.readByte();
            if (W0 != 44) {
                if (W0 != 59) {
                    if (W0 == 93) {
                        this.f18074t = 4;
                        return 4;
                    }
                    throw D0("Unterminated array");
                }
                H0();
            }
        } else if (i11 != 3 && i11 != 5) {
            if (i11 == 4) {
                iArr[i10 - 1] = 5;
                int W02 = W0(true);
                this.f18073s.readByte();
                if (W02 != 58) {
                    if (W02 == 61) {
                        H0();
                        if (this.f18072r.B0(1L) && this.f18073s.Z(0L) == 62) {
                            this.f18073s.readByte();
                        }
                    } else {
                        throw D0("Expected ':'");
                    }
                }
            } else if (i11 == 6) {
                iArr[i10 - 1] = 7;
            } else if (i11 == 7) {
                if (W0(false) == -1) {
                    this.f18074t = 18;
                    return 18;
                }
                H0();
            } else if (i11 == 9) {
                this.f18078x.g();
                this.f18078x = null;
                this.f18050d--;
                return J0();
            } else if (i11 == 8) {
                throw new IllegalStateException("JsonReader is closed");
            }
        } else {
            iArr[i10 - 1] = 4;
            if (i11 == 5) {
                int W03 = W0(true);
                this.f18073s.readByte();
                if (W03 != 44) {
                    if (W03 != 59) {
                        if (W03 == 125) {
                            this.f18074t = 2;
                            return 2;
                        }
                        throw D0("Unterminated object");
                    }
                    H0();
                }
            }
            int W04 = W0(true);
            if (W04 != 34) {
                if (W04 != 39) {
                    if (W04 != 125) {
                        H0();
                        if (V0((char) W04)) {
                            this.f18074t = 14;
                            return 14;
                        }
                        throw D0("Expected name");
                    } else if (i11 != 5) {
                        this.f18073s.readByte();
                        this.f18074t = 2;
                        return 2;
                    } else {
                        throw D0("Expected name");
                    }
                }
                this.f18073s.readByte();
                H0();
                this.f18074t = 12;
                return 12;
            }
            this.f18073s.readByte();
            this.f18074t = 13;
            return 13;
        }
        int W05 = W0(true);
        if (W05 != 34) {
            if (W05 != 39) {
                if (W05 != 44 && W05 != 59) {
                    if (W05 != 91) {
                        if (W05 != 93) {
                            if (W05 != 123) {
                                int s12 = s1();
                                if (s12 != 0) {
                                    return s12;
                                }
                                int u12 = u1();
                                if (u12 != 0) {
                                    return u12;
                                }
                                if (V0(this.f18073s.Z(0L))) {
                                    H0();
                                    this.f18074t = 10;
                                    return 10;
                                }
                                throw D0("Expected value");
                            }
                            this.f18073s.readByte();
                            this.f18074t = 1;
                            return 1;
                        } else if (i11 == 1) {
                            this.f18073s.readByte();
                            this.f18074t = 4;
                            return 4;
                        }
                    } else {
                        this.f18073s.readByte();
                        this.f18074t = 3;
                        return 3;
                    }
                }
                if (i11 != 1 && i11 != 2) {
                    throw D0("Unexpected value");
                }
                H0();
                this.f18074t = 7;
                return 7;
            }
            H0();
            this.f18073s.readByte();
            this.f18074t = 8;
            return 8;
        }
        this.f18073s.readByte();
        this.f18074t = 9;
        return 9;
    }

    private int O0(String str, m.b bVar) {
        int length = bVar.f18057a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(bVar.f18057a[i10])) {
                this.f18074t = 0;
                this.f18052i[this.f18050d - 1] = str;
                return i10;
            }
        }
        return -1;
    }

    private int R0(String str, m.b bVar) {
        int length = bVar.f18057a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(bVar.f18057a[i10])) {
                this.f18074t = 0;
                int[] iArr = this.f18053o;
                int i11 = this.f18050d - 1;
                iArr[i11] = iArr[i11] + 1;
                return i10;
            }
        }
        return -1;
    }

    private boolean S1() {
        boolean z10;
        long size;
        BufferedSource bufferedSource = this.f18072r;
        ByteString byteString = C;
        long Y = bufferedSource.Y(byteString);
        if (Y != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        Buffer buffer = this.f18073s;
        if (z10) {
            size = Y + byteString.G();
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
        return z10;
    }

    private void U1() {
        long size;
        long g02 = this.f18072r.g0(B);
        Buffer buffer = this.f18073s;
        if (g02 != -1) {
            size = g02 + 1;
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
    }

    private boolean V0(int i10) {
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
            H0();
            return false;
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0025, code lost:
        r6.f18073s.skip(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x002d, code lost:
        if (r2 != 47) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0037, code lost:
        if (r6.f18072r.B0(2) != false) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003a, code lost:
        H0();
        r3 = r6.f18073s.Z(1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0047, code lost:
        if (r3 == 42) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0049, code lost:
        if (r3 == 47) goto L39;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x004c, code lost:
        r6.f18073s.readByte();
        r6.f18073s.readByte();
        U1();
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x005a, code lost:
        r6.f18073s.readByte();
        r6.f18073s.readByte();
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0068, code lost:
        if (S1() == false) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0071, code lost:
        throw D0("Unterminated comment");
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0074, code lost:
        if (r2 != 35) goto L22;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0076, code lost:
        H0();
        U1();
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int W0(boolean r7) {
        /*
            r6 = this;
            r0 = 0
        L1:
            r1 = r0
        L2:
            okio.BufferedSource r2 = r6.f18072r
            int r3 = r1 + 1
            long r4 = (long) r3
            boolean r2 = r2.B0(r4)
            if (r2 == 0) goto L80
            okio.Buffer r2 = r6.f18073s
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
            okio.Buffer r3 = r6.f18073s
            long r4 = (long) r1
            r3.skip(r4)
            r1 = 47
            if (r2 != r1) goto L72
            okio.BufferedSource r3 = r6.f18072r
            r4 = 2
            boolean r3 = r3.B0(r4)
            if (r3 != 0) goto L3a
            goto L7d
        L3a:
            r6.H0()
            okio.Buffer r3 = r6.f18073s
            r4 = 1
            byte r3 = r3.Z(r4)
            r4 = 42
            if (r3 == r4) goto L5a
            if (r3 == r1) goto L4c
            goto L7d
        L4c:
            okio.Buffer r1 = r6.f18073s
            r1.readByte()
            okio.Buffer r1 = r6.f18073s
            r1.readByte()
            r6.U1()
            goto L1
        L5a:
            okio.Buffer r1 = r6.f18073s
            r1.readByte()
            okio.Buffer r1 = r6.f18073s
            r1.readByte()
            boolean r1 = r6.S1()
            if (r1 == 0) goto L6b
            goto L1
        L6b:
            java.lang.String r7 = "Unterminated comment"
            com.squareup.moshi.k r7 = r6.D0(r7)
            throw r7
        L72:
            r1 = 35
            if (r2 != r1) goto L7d
            r6.H0()
            r6.U1()
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
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.o.W0(boolean):int");
    }

    private void W1() {
        long g02 = this.f18072r.g0(A);
        Buffer buffer = this.f18073s;
        if (g02 == -1) {
            g02 = buffer.size();
        }
        buffer.skip(g02);
    }

    private String a1(ByteString byteString) {
        StringBuilder sb2 = null;
        while (true) {
            long g02 = this.f18072r.g0(byteString);
            if (g02 != -1) {
                if (this.f18073s.Z(g02) == 92) {
                    if (sb2 == null) {
                        sb2 = new StringBuilder();
                    }
                    sb2.append(this.f18073s.Y0(g02));
                    this.f18073s.readByte();
                    sb2.append(w1());
                } else if (sb2 == null) {
                    String Y0 = this.f18073s.Y0(g02);
                    this.f18073s.readByte();
                    return Y0;
                } else {
                    sb2.append(this.f18073s.Y0(g02));
                    this.f18073s.readByte();
                    return sb2.toString();
                }
            } else {
                throw D0("Unterminated string");
            }
        }
    }

    private String r1() {
        long g02 = this.f18072r.g0(A);
        if (g02 != -1) {
            return this.f18073s.Y0(g02);
        }
        return this.f18073s.R1();
    }

    private int s1() {
        String str;
        String str2;
        int i10;
        byte Z = this.f18073s.Z(0L);
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
            if (!this.f18072r.B0(i12)) {
                return 0;
            }
            byte Z2 = this.f18073s.Z(i11);
            if (Z2 != str.charAt(i11) && Z2 != str2.charAt(i11)) {
                return 0;
            }
            i11 = i12;
        }
        if (this.f18072r.B0(length + 1) && V0(this.f18073s.Z(length))) {
            return 0;
        }
        this.f18073s.skip(length);
        this.f18074t = i10;
        return i10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:44:0x0089, code lost:
        if (V0(r1) != false) goto L68;
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
        r19.f18075u = r8;
        r19.f18073s.skip(r5);
        r19.f18074t = 16;
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
        r19.f18076v = r5;
        r19.f18074t = 17;
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
    private int u1() {
        /*
            Method dump skipped, instructions count: 221
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.o.u1():int");
    }

    private char w1() {
        int i10;
        if (this.f18072r.B0(1L)) {
            byte readByte = this.f18073s.readByte();
            if (readByte != 10 && readByte != 34 && readByte != 39 && readByte != 47 && readByte != 92) {
                if (readByte != 98) {
                    if (readByte != 102) {
                        if (readByte == 110) {
                            return '\n';
                        }
                        if (readByte != 114) {
                            if (readByte != 116) {
                                if (readByte != 117) {
                                    if (this.f18054p) {
                                        return (char) readByte;
                                    }
                                    throw D0("Invalid escape sequence: \\" + ((char) readByte));
                                } else if (this.f18072r.B0(4L)) {
                                    char c10 = 0;
                                    for (int i11 = 0; i11 < 4; i11++) {
                                        byte Z = this.f18073s.Z(i11);
                                        char c11 = (char) (c10 << 4);
                                        if (Z >= 48 && Z <= 57) {
                                            i10 = Z - 48;
                                        } else if (Z >= 97 && Z <= 102) {
                                            i10 = Z - 87;
                                        } else if (Z < 65 || Z > 70) {
                                            throw D0("\\u" + this.f18073s.Y0(4L));
                                        } else {
                                            i10 = Z - 55;
                                        }
                                        c10 = (char) (c11 + i10);
                                    }
                                    this.f18073s.skip(4L);
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
        throw D0("Unterminated escape sequence");
    }

    private void z1(ByteString byteString) {
        while (true) {
            long g02 = this.f18072r.g0(byteString);
            if (g02 != -1) {
                if (this.f18073s.Z(g02) == 92) {
                    this.f18073s.skip(g02 + 1);
                    w1();
                } else {
                    this.f18073s.skip(g02 + 1);
                    return;
                }
            } else {
                throw D0("Unterminated string");
            }
        }
    }

    @Override // com.squareup.moshi.m
    public void C0() {
        if (!this.f18055q) {
            int i10 = this.f18074t;
            if (i10 == 0) {
                i10 = J0();
            }
            if (i10 == 14) {
                W1();
            } else if (i10 == 13) {
                z1(f18071z);
            } else if (i10 == 12) {
                z1(f18070y);
            } else if (i10 != 15) {
                throw new j("Expected a name but was " + s() + " at path " + t());
            }
            this.f18074t = 0;
            this.f18052i[this.f18050d - 1] = "null";
            return;
        }
        m.c s10 = s();
        o0();
        throw new j("Cannot skip unexpected " + s10 + " at " + t());
    }

    @Override // com.squareup.moshi.m
    public void D() {
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 2) {
            int i11 = this.f18050d;
            int i12 = i11 - 1;
            this.f18050d = i12;
            this.f18052i[i12] = null;
            int[] iArr = this.f18053o;
            int i13 = i11 - 2;
            iArr[i13] = iArr[i13] + 1;
            this.f18074t = 0;
            return;
        }
        throw new j("Expected END_OBJECT but was " + s() + " at path " + t());
    }

    @Override // com.squareup.moshi.m
    public int J(m.b bVar) {
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 < 12 || i10 > 15) {
            return -1;
        }
        if (i10 == 15) {
            return O0(this.f18077w, bVar);
        }
        int E1 = this.f18072r.E1(bVar.f18058b);
        if (E1 != -1) {
            this.f18074t = 0;
            this.f18052i[this.f18050d - 1] = bVar.f18057a[E1];
            return E1;
        }
        String str = this.f18052i[this.f18050d - 1];
        String o02 = o0();
        int O0 = O0(o02, bVar);
        if (O0 == -1) {
            this.f18074t = 15;
            this.f18077w = o02;
            this.f18052i[this.f18050d - 1] = str;
        }
        return O0;
    }

    @Override // com.squareup.moshi.m
    public int Q(m.b bVar) {
        int[] iArr;
        int i10;
        int i11 = this.f18074t;
        if (i11 == 0) {
            i11 = J0();
        }
        if (i11 < 8 || i11 > 11) {
            return -1;
        }
        if (i11 == 11) {
            return R0(this.f18077w, bVar);
        }
        int E1 = this.f18072r.E1(bVar.f18058b);
        if (E1 != -1) {
            this.f18074t = 0;
            int[] iArr2 = this.f18053o;
            int i12 = this.f18050d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return E1;
        }
        String b12 = b1();
        int R0 = R0(b12, bVar);
        if (R0 == -1) {
            this.f18074t = 11;
            this.f18077w = b12;
            this.f18053o[this.f18050d - 1] = iArr[i10] - 1;
        }
        return R0;
    }

    @Override // com.squareup.moshi.m
    public void T() {
        if (!this.f18055q) {
            int i10 = 0;
            do {
                int i11 = this.f18074t;
                if (i11 == 0) {
                    i11 = J0();
                }
                if (i11 == 3) {
                    C(1);
                } else if (i11 == 1) {
                    C(3);
                } else {
                    if (i11 == 4) {
                        i10--;
                        if (i10 >= 0) {
                            this.f18050d--;
                        } else {
                            throw new j("Expected a value but was " + s() + " at path " + t());
                        }
                    } else if (i11 == 2) {
                        i10--;
                        if (i10 >= 0) {
                            this.f18050d--;
                        } else {
                            throw new j("Expected a value but was " + s() + " at path " + t());
                        }
                    } else if (i11 != 14 && i11 != 10) {
                        if (i11 != 9 && i11 != 13) {
                            if (i11 != 8 && i11 != 12) {
                                if (i11 == 17) {
                                    this.f18073s.skip(this.f18076v);
                                } else if (i11 == 18) {
                                    throw new j("Expected a value but was " + s() + " at path " + t());
                                }
                            } else {
                                z1(f18070y);
                            }
                        } else {
                            z1(f18071z);
                        }
                    } else {
                        W1();
                    }
                    this.f18074t = 0;
                }
                i10++;
                this.f18074t = 0;
            } while (i10 != 0);
            int[] iArr = this.f18053o;
            int i12 = this.f18050d;
            int i13 = i12 - 1;
            iArr[i13] = iArr[i13] + 1;
            this.f18052i[i12 - 1] = "null";
            return;
        }
        throw new j("Cannot skip unexpected " + s() + " at " + t());
    }

    @Override // com.squareup.moshi.m
    public String b1() {
        String Y0;
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 10) {
            Y0 = r1();
        } else if (i10 == 9) {
            Y0 = a1(f18071z);
        } else if (i10 == 8) {
            Y0 = a1(f18070y);
        } else if (i10 == 11) {
            Y0 = this.f18077w;
            this.f18077w = null;
        } else if (i10 == 16) {
            Y0 = Long.toString(this.f18075u);
        } else if (i10 == 17) {
            Y0 = this.f18073s.Y0(this.f18076v);
        } else {
            throw new j("Expected a string but was " + s() + " at path " + t());
        }
        this.f18074t = 0;
        int[] iArr = this.f18053o;
        int i11 = this.f18050d - 1;
        iArr[i11] = iArr[i11] + 1;
        return Y0;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f18074t = 0;
        this.f18051e[0] = 8;
        this.f18050d = 1;
        this.f18073s.k();
        this.f18072r.close();
    }

    @Override // com.squareup.moshi.m
    public boolean hasNext() {
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 != 2 && i10 != 4 && i10 != 18) {
            return true;
        }
        return false;
    }

    @Override // com.squareup.moshi.m
    public boolean k() {
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 5) {
            this.f18074t = 0;
            int[] iArr = this.f18053o;
            int i11 = this.f18050d - 1;
            iArr[i11] = iArr[i11] + 1;
            return true;
        } else if (i10 == 6) {
            this.f18074t = 0;
            int[] iArr2 = this.f18053o;
            int i12 = this.f18050d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return false;
        } else {
            throw new j("Expected a boolean but was " + s() + " at path " + t());
        }
    }

    @Override // com.squareup.moshi.m
    public Object m() {
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 7) {
            this.f18074t = 0;
            int[] iArr = this.f18053o;
            int i11 = this.f18050d - 1;
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
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 16) {
            this.f18074t = 0;
            int[] iArr = this.f18053o;
            int i11 = this.f18050d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f18075u;
        }
        if (i10 == 17) {
            this.f18077w = this.f18073s.Y0(this.f18076v);
        } else if (i10 == 9) {
            this.f18077w = a1(f18071z);
        } else if (i10 == 8) {
            this.f18077w = a1(f18070y);
        } else if (i10 == 10) {
            this.f18077w = r1();
        } else if (i10 != 11) {
            throw new j("Expected a double but was " + s() + " at path " + t());
        }
        this.f18074t = 11;
        try {
            double parseDouble = Double.parseDouble(this.f18077w);
            if (!this.f18054p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
                throw new k("JSON forbids NaN and infinities: " + parseDouble + " at path " + t());
            }
            this.f18077w = null;
            this.f18074t = 0;
            int[] iArr2 = this.f18053o;
            int i12 = this.f18050d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return parseDouble;
        } catch (NumberFormatException unused) {
            throw new j("Expected a double but was " + this.f18077w + " at path " + t());
        }
    }

    @Override // com.squareup.moshi.m
    public int nextInt() {
        String a12;
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 16) {
            long j10 = this.f18075u;
            int i11 = (int) j10;
            if (j10 == i11) {
                this.f18074t = 0;
                int[] iArr = this.f18053o;
                int i12 = this.f18050d - 1;
                iArr[i12] = iArr[i12] + 1;
                return i11;
            }
            throw new j("Expected an int but was " + this.f18075u + " at path " + t());
        }
        if (i10 == 17) {
            this.f18077w = this.f18073s.Y0(this.f18076v);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new j("Expected an int but was " + s() + " at path " + t());
            }
        } else {
            if (i10 == 9) {
                a12 = a1(f18071z);
            } else {
                a12 = a1(f18070y);
            }
            this.f18077w = a12;
            try {
                int parseInt = Integer.parseInt(a12);
                this.f18074t = 0;
                int[] iArr2 = this.f18053o;
                int i13 = this.f18050d - 1;
                iArr2[i13] = iArr2[i13] + 1;
                return parseInt;
            } catch (NumberFormatException unused) {
            }
        }
        this.f18074t = 11;
        try {
            double parseDouble = Double.parseDouble(this.f18077w);
            int i14 = (int) parseDouble;
            if (i14 == parseDouble) {
                this.f18077w = null;
                this.f18074t = 0;
                int[] iArr3 = this.f18053o;
                int i15 = this.f18050d - 1;
                iArr3[i15] = iArr3[i15] + 1;
                return i14;
            }
            throw new j("Expected an int but was " + this.f18077w + " at path " + t());
        } catch (NumberFormatException unused2) {
            throw new j("Expected an int but was " + this.f18077w + " at path " + t());
        }
    }

    @Override // com.squareup.moshi.m
    public long nextLong() {
        String a12;
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 16) {
            this.f18074t = 0;
            int[] iArr = this.f18053o;
            int i11 = this.f18050d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f18075u;
        }
        if (i10 == 17) {
            this.f18077w = this.f18073s.Y0(this.f18076v);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new j("Expected a long but was " + s() + " at path " + t());
            }
        } else {
            if (i10 == 9) {
                a12 = a1(f18071z);
            } else {
                a12 = a1(f18070y);
            }
            this.f18077w = a12;
            try {
                long parseLong = Long.parseLong(a12);
                this.f18074t = 0;
                int[] iArr2 = this.f18053o;
                int i12 = this.f18050d - 1;
                iArr2[i12] = iArr2[i12] + 1;
                return parseLong;
            } catch (NumberFormatException unused) {
            }
        }
        this.f18074t = 11;
        try {
            long longValueExact = new BigDecimal(this.f18077w).longValueExact();
            this.f18077w = null;
            this.f18074t = 0;
            int[] iArr3 = this.f18053o;
            int i13 = this.f18050d - 1;
            iArr3[i13] = iArr3[i13] + 1;
            return longValueExact;
        } catch (ArithmeticException | NumberFormatException unused2) {
            throw new j("Expected a long but was " + this.f18077w + " at path " + t());
        }
    }

    @Override // com.squareup.moshi.m
    public String o0() {
        String str;
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 14) {
            str = r1();
        } else if (i10 == 13) {
            str = a1(f18071z);
        } else if (i10 == 12) {
            str = a1(f18070y);
        } else if (i10 == 15) {
            str = this.f18077w;
            this.f18077w = null;
        } else {
            throw new j("Expected a name but was " + s() + " at path " + t());
        }
        this.f18074t = 0;
        this.f18052i[this.f18050d - 1] = str;
        return str;
    }

    @Override // com.squareup.moshi.m
    public m.c s() {
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
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
        return "JsonReader(" + this.f18072r + ")";
    }

    @Override // com.squareup.moshi.m
    public void u() {
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 1) {
            C(3);
            this.f18074t = 0;
            return;
        }
        throw new j("Expected BEGIN_OBJECT but was " + s() + " at path " + t());
    }

    @Override // com.squareup.moshi.m
    public void v() {
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 4) {
            int i11 = this.f18050d;
            this.f18050d = i11 - 1;
            int[] iArr = this.f18053o;
            int i12 = i11 - 2;
            iArr[i12] = iArr[i12] + 1;
            this.f18074t = 0;
            return;
        }
        throw new j("Expected END_ARRAY but was " + s() + " at path " + t());
    }

    @Override // com.squareup.moshi.m
    public void x() {
        int i10 = this.f18074t;
        if (i10 == 0) {
            i10 = J0();
        }
        if (i10 == 3) {
            C(1);
            this.f18053o[this.f18050d - 1] = 0;
            this.f18074t = 0;
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
            this.f18077w = o0();
            this.f18074t = 11;
        }
    }

    o(o oVar) {
        super(oVar);
        this.f18074t = 0;
        BufferedSource peek = oVar.f18072r.peek();
        this.f18072r = peek;
        this.f18073s = peek.e();
        this.f18074t = oVar.f18074t;
        this.f18075u = oVar.f18075u;
        this.f18076v = oVar.f18076v;
        this.f18077w = oVar.f18077w;
        try {
            peek.Q0(oVar.f18073s.size());
        } catch (IOException unused) {
            throw new AssertionError();
        }
    }
}
