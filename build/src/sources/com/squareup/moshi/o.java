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
    private final BufferedSource f17546r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f17547s;

    /* renamed from: t  reason: collision with root package name */
    private int f17548t;

    /* renamed from: u  reason: collision with root package name */
    private long f17549u;

    /* renamed from: v  reason: collision with root package name */
    private int f17550v;

    /* renamed from: w  reason: collision with root package name */
    private String f17551w;

    /* renamed from: x  reason: collision with root package name */
    private r f17552x;

    /* renamed from: y  reason: collision with root package name */
    private static final ByteString f17544y = ByteString.h("'\\");

    /* renamed from: z  reason: collision with root package name */
    private static final ByteString f17545z = ByteString.h("\"\\");
    private static final ByteString A = ByteString.h("{}[]:, \n\t\r\f/\\;#=");
    private static final ByteString B = ByteString.h("\n\r");
    private static final ByteString C = ByteString.h("*/");

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(BufferedSource bufferedSource) {
        this.f17548t = 0;
        if (bufferedSource != null) {
            this.f17546r = bufferedSource;
            this.f17547s = bufferedSource.e();
            N(6);
            return;
        }
        throw new NullPointerException("source == null");
    }

    /* JADX WARN: Code restructure failed: missing block: B:44:0x0089, code lost:
        if (Y0(r1) != false) goto L68;
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
        r19.f17549u = r8;
        r19.f17547s.skip(r5);
        r19.f17548t = 16;
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
        r19.f17550v = r5;
        r19.f17548t = 17;
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
    private int A1() {
        /*
            Method dump skipped, instructions count: 221
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.o.A1():int");
    }

    private char B1() {
        int i10;
        if (this.f17546r.B0(1L)) {
            byte readByte = this.f17547s.readByte();
            if (readByte != 10 && readByte != 34 && readByte != 39 && readByte != 47 && readByte != 92) {
                if (readByte != 98) {
                    if (readByte != 102) {
                        if (readByte == 110) {
                            return '\n';
                        }
                        if (readByte != 114) {
                            if (readByte != 116) {
                                if (readByte != 117) {
                                    if (this.f17528p) {
                                        return (char) readByte;
                                    }
                                    throw F0("Invalid escape sequence: \\" + ((char) readByte));
                                } else if (this.f17546r.B0(4L)) {
                                    char c10 = 0;
                                    for (int i11 = 0; i11 < 4; i11++) {
                                        byte D0 = this.f17547s.D0(i11);
                                        char c11 = (char) (c10 << 4);
                                        if (D0 >= 48 && D0 <= 57) {
                                            i10 = D0 - 48;
                                        } else if (D0 >= 97 && D0 <= 102) {
                                            i10 = D0 - 87;
                                        } else if (D0 < 65 || D0 > 70) {
                                            throw F0("\\u" + this.f17547s.c1(4L));
                                        } else {
                                            i10 = D0 - 55;
                                        }
                                        c10 = (char) (c11 + i10);
                                    }
                                    this.f17547s.skip(4L);
                                    return c10;
                                } else {
                                    throw new EOFException("Unterminated escape sequence at path " + q());
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
        throw F0("Unterminated escape sequence");
    }

    private void E1(ByteString byteString) {
        while (true) {
            long c02 = this.f17546r.c0(byteString);
            if (c02 != -1) {
                if (this.f17547s.D0(c02) == 92) {
                    this.f17547s.skip(c02 + 1);
                    B1();
                } else {
                    this.f17547s.skip(c02 + 1);
                    return;
                }
            } else {
                throw F0("Unterminated string");
            }
        }
    }

    private void J0() {
        if (this.f17528p) {
            return;
        }
        throw F0("Use JsonReader.setLenient(true) to accept malformed JSON");
    }

    private int M0() {
        int[] iArr = this.f17525e;
        int i10 = this.f17524d;
        int i11 = iArr[i10 - 1];
        if (i11 == 1) {
            iArr[i10 - 1] = 2;
        } else if (i11 == 2) {
            int Z0 = Z0(true);
            this.f17547s.readByte();
            if (Z0 != 44) {
                if (Z0 != 59) {
                    if (Z0 == 93) {
                        this.f17548t = 4;
                        return 4;
                    }
                    throw F0("Unterminated array");
                }
                J0();
            }
        } else if (i11 == 3 || i11 == 5) {
            iArr[i10 - 1] = 4;
            if (i11 == 5) {
                int Z02 = Z0(true);
                this.f17547s.readByte();
                if (Z02 != 44) {
                    if (Z02 != 59) {
                        if (Z02 == 125) {
                            this.f17548t = 2;
                            return 2;
                        }
                        throw F0("Unterminated object");
                    }
                    J0();
                }
            }
            int Z03 = Z0(true);
            if (Z03 == 34) {
                this.f17547s.readByte();
                this.f17548t = 13;
                return 13;
            } else if (Z03 == 39) {
                this.f17547s.readByte();
                J0();
                this.f17548t = 12;
                return 12;
            } else if (Z03 != 125) {
                J0();
                if (Y0((char) Z03)) {
                    this.f17548t = 14;
                    return 14;
                }
                throw F0("Expected name");
            } else if (i11 != 5) {
                this.f17547s.readByte();
                this.f17548t = 2;
                return 2;
            } else {
                throw F0("Expected name");
            }
        } else if (i11 == 4) {
            iArr[i10 - 1] = 5;
            int Z04 = Z0(true);
            this.f17547s.readByte();
            if (Z04 != 58) {
                if (Z04 == 61) {
                    J0();
                    if (this.f17546r.B0(1L) && this.f17547s.D0(0L) == 62) {
                        this.f17547s.readByte();
                    }
                } else {
                    throw F0("Expected ':'");
                }
            }
        } else if (i11 == 6) {
            iArr[i10 - 1] = 7;
        } else if (i11 == 7) {
            if (Z0(false) == -1) {
                this.f17548t = 18;
                return 18;
            }
            J0();
        } else if (i11 == 9) {
            this.f17552x.h();
            this.f17552x = null;
            this.f17524d--;
            return M0();
        } else if (i11 == 8) {
            throw new IllegalStateException("JsonReader is closed");
        }
        int Z05 = Z0(true);
        if (Z05 == 34) {
            this.f17547s.readByte();
            this.f17548t = 9;
            return 9;
        } else if (Z05 == 39) {
            J0();
            this.f17547s.readByte();
            this.f17548t = 8;
            return 8;
        } else {
            if (Z05 != 44 && Z05 != 59) {
                if (Z05 == 91) {
                    this.f17547s.readByte();
                    this.f17548t = 3;
                    return 3;
                } else if (Z05 != 93) {
                    if (Z05 != 123) {
                        int y12 = y1();
                        if (y12 != 0) {
                            return y12;
                        }
                        int A1 = A1();
                        if (A1 != 0) {
                            return A1;
                        }
                        if (Y0(this.f17547s.D0(0L))) {
                            J0();
                            this.f17548t = 10;
                            return 10;
                        }
                        throw F0("Expected value");
                    }
                    this.f17547s.readByte();
                    this.f17548t = 1;
                    return 1;
                } else if (i11 == 1) {
                    this.f17547s.readByte();
                    this.f17548t = 4;
                    return 4;
                }
            }
            if (i11 != 1 && i11 != 2) {
                throw F0("Unexpected value");
            }
            J0();
            this.f17548t = 7;
            return 7;
        }
    }

    private int R0(String str, m.b bVar) {
        int length = bVar.f17531a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(bVar.f17531a[i10])) {
                this.f17548t = 0;
                this.f17526i[this.f17524d - 1] = str;
                return i10;
            }
        }
        return -1;
    }

    private boolean U1() {
        boolean z10;
        long size;
        BufferedSource bufferedSource = this.f17546r;
        ByteString byteString = C;
        long U = bufferedSource.U(byteString);
        if (U != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        Buffer buffer = this.f17547s;
        if (z10) {
            size = U + byteString.G();
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
        return z10;
    }

    private int V0(String str, m.b bVar) {
        int length = bVar.f17531a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(bVar.f17531a[i10])) {
                this.f17548t = 0;
                int[] iArr = this.f17527o;
                int i11 = this.f17524d - 1;
                iArr[i11] = iArr[i11] + 1;
                return i10;
            }
        }
        return -1;
    }

    private void W1() {
        long size;
        long c02 = this.f17546r.c0(B);
        Buffer buffer = this.f17547s;
        if (c02 != -1) {
            size = c02 + 1;
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
    }

    private boolean Y0(int i10) {
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
            J0();
            return false;
        }
        return false;
    }

    private void Y1() {
        long c02 = this.f17546r.c0(A);
        Buffer buffer = this.f17547s;
        if (c02 == -1) {
            c02 = buffer.size();
        }
        buffer.skip(c02);
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0025, code lost:
        r6.f17547s.skip(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x002d, code lost:
        if (r2 != 47) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0037, code lost:
        if (r6.f17546r.B0(2) != false) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003a, code lost:
        J0();
        r3 = r6.f17547s.D0(1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0047, code lost:
        if (r3 == 42) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0049, code lost:
        if (r3 == 47) goto L39;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x004c, code lost:
        r6.f17547s.readByte();
        r6.f17547s.readByte();
        W1();
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x005a, code lost:
        r6.f17547s.readByte();
        r6.f17547s.readByte();
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0068, code lost:
        if (U1() == false) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0071, code lost:
        throw F0("Unterminated comment");
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0074, code lost:
        if (r2 != 35) goto L22;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0076, code lost:
        J0();
        W1();
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int Z0(boolean r7) {
        /*
            r6 = this;
            r0 = 0
        L1:
            r1 = r0
        L2:
            okio.BufferedSource r2 = r6.f17546r
            int r3 = r1 + 1
            long r4 = (long) r3
            boolean r2 = r2.B0(r4)
            if (r2 == 0) goto L80
            okio.Buffer r2 = r6.f17547s
            long r4 = (long) r1
            byte r2 = r2.D0(r4)
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
            okio.Buffer r3 = r6.f17547s
            long r4 = (long) r1
            r3.skip(r4)
            r1 = 47
            if (r2 != r1) goto L72
            okio.BufferedSource r3 = r6.f17546r
            r4 = 2
            boolean r3 = r3.B0(r4)
            if (r3 != 0) goto L3a
            goto L7d
        L3a:
            r6.J0()
            okio.Buffer r3 = r6.f17547s
            r4 = 1
            byte r3 = r3.D0(r4)
            r4 = 42
            if (r3 == r4) goto L5a
            if (r3 == r1) goto L4c
            goto L7d
        L4c:
            okio.Buffer r1 = r6.f17547s
            r1.readByte()
            okio.Buffer r1 = r6.f17547s
            r1.readByte()
            r6.W1()
            goto L1
        L5a:
            okio.Buffer r1 = r6.f17547s
            r1.readByte()
            okio.Buffer r1 = r6.f17547s
            r1.readByte()
            boolean r1 = r6.U1()
            if (r1 == 0) goto L6b
            goto L1
        L6b:
            java.lang.String r7 = "Unterminated comment"
            com.squareup.moshi.k r7 = r6.F0(r7)
            throw r7
        L72:
            r1 = 35
            if (r2 != r1) goto L7d
            r6.J0()
            r6.W1()
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
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.o.Z0(boolean):int");
    }

    private String e1(ByteString byteString) {
        StringBuilder sb2 = null;
        while (true) {
            long c02 = this.f17546r.c0(byteString);
            if (c02 != -1) {
                if (this.f17547s.D0(c02) == 92) {
                    if (sb2 == null) {
                        sb2 = new StringBuilder();
                    }
                    sb2.append(this.f17547s.c1(c02));
                    this.f17547s.readByte();
                    sb2.append(B1());
                } else if (sb2 == null) {
                    String c12 = this.f17547s.c1(c02);
                    this.f17547s.readByte();
                    return c12;
                } else {
                    sb2.append(this.f17547s.c1(c02));
                    this.f17547s.readByte();
                    return sb2.toString();
                }
            } else {
                throw F0("Unterminated string");
            }
        }
    }

    private String x1() {
        long c02 = this.f17546r.c0(A);
        if (c02 != -1) {
            return this.f17547s.c1(c02);
        }
        return this.f17547s.T1();
    }

    private int y1() {
        String str;
        String str2;
        int i10;
        byte D0 = this.f17547s.D0(0L);
        if (D0 != 116 && D0 != 84) {
            if (D0 != 102 && D0 != 70) {
                if (D0 != 110 && D0 != 78) {
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
            if (!this.f17546r.B0(i12)) {
                return 0;
            }
            byte D02 = this.f17547s.D0(i11);
            if (D02 != str.charAt(i11) && D02 != str2.charAt(i11)) {
                return 0;
            }
            i11 = i12;
        }
        if (this.f17546r.B0(length + 1) && Y0(this.f17547s.D0(length))) {
            return 0;
        }
        this.f17547s.skip(length);
        this.f17548t = i10;
        return i10;
    }

    @Override // com.squareup.moshi.m
    public int A0(m.b bVar) {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 < 12 || i10 > 15) {
            return -1;
        }
        if (i10 == 15) {
            return R0(this.f17551w, bVar);
        }
        int U0 = this.f17546r.U0(bVar.f17532b);
        if (U0 != -1) {
            this.f17548t = 0;
            this.f17526i[this.f17524d - 1] = bVar.f17531a[U0];
            return U0;
        }
        String str = this.f17526i[this.f17524d - 1];
        String l02 = l0();
        int R0 = R0(l02, bVar);
        if (R0 == -1) {
            this.f17548t = 15;
            this.f17551w = l02;
            this.f17526i[this.f17524d - 1] = str;
        }
        return R0;
    }

    @Override // com.squareup.moshi.m
    public int C0(m.b bVar) {
        int[] iArr;
        int i10;
        int i11 = this.f17548t;
        if (i11 == 0) {
            i11 = M0();
        }
        if (i11 < 8 || i11 > 11) {
            return -1;
        }
        if (i11 == 11) {
            return V0(this.f17551w, bVar);
        }
        int U0 = this.f17546r.U0(bVar.f17532b);
        if (U0 != -1) {
            this.f17548t = 0;
            int[] iArr2 = this.f17527o;
            int i12 = this.f17524d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return U0;
        }
        String f12 = f1();
        int V0 = V0(f12, bVar);
        if (V0 == -1) {
            this.f17548t = 11;
            this.f17551w = f12;
            this.f17527o[this.f17524d - 1] = iArr[i10] - 1;
        }
        return V0;
    }

    @Override // com.squareup.moshi.m
    public m.c E() {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
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

    @Override // com.squareup.moshi.m
    public void E0() {
        if (!this.f17529q) {
            int i10 = this.f17548t;
            if (i10 == 0) {
                i10 = M0();
            }
            if (i10 == 14) {
                Y1();
            } else if (i10 == 13) {
                E1(f17545z);
            } else if (i10 == 12) {
                E1(f17544y);
            } else if (i10 != 15) {
                throw new j("Expected a name but was " + E() + " at path " + q());
            }
            this.f17548t = 0;
            this.f17526i[this.f17524d - 1] = "null";
            return;
        }
        m.c E = E();
        l0();
        throw new j("Cannot skip unexpected " + E + " at " + q());
    }

    @Override // com.squareup.moshi.m
    public m F() {
        return new o(this);
    }

    @Override // com.squareup.moshi.m
    public void L() {
        if (hasNext()) {
            this.f17551w = l0();
            this.f17548t = 11;
        }
    }

    @Override // com.squareup.moshi.m
    public void P() {
        if (!this.f17529q) {
            int i10 = 0;
            do {
                int i11 = this.f17548t;
                if (i11 == 0) {
                    i11 = M0();
                }
                if (i11 == 3) {
                    N(1);
                } else if (i11 == 1) {
                    N(3);
                } else {
                    if (i11 == 4) {
                        i10--;
                        if (i10 >= 0) {
                            this.f17524d--;
                        } else {
                            throw new j("Expected a value but was " + E() + " at path " + q());
                        }
                    } else if (i11 == 2) {
                        i10--;
                        if (i10 >= 0) {
                            this.f17524d--;
                        } else {
                            throw new j("Expected a value but was " + E() + " at path " + q());
                        }
                    } else if (i11 != 14 && i11 != 10) {
                        if (i11 != 9 && i11 != 13) {
                            if (i11 != 8 && i11 != 12) {
                                if (i11 == 17) {
                                    this.f17547s.skip(this.f17550v);
                                } else if (i11 == 18) {
                                    throw new j("Expected a value but was " + E() + " at path " + q());
                                }
                            } else {
                                E1(f17544y);
                            }
                        } else {
                            E1(f17545z);
                        }
                    } else {
                        Y1();
                    }
                    this.f17548t = 0;
                }
                i10++;
                this.f17548t = 0;
            } while (i10 != 0);
            int[] iArr = this.f17527o;
            int i12 = this.f17524d;
            int i13 = i12 - 1;
            iArr[i13] = iArr[i13] + 1;
            this.f17526i[i12 - 1] = "null";
            return;
        }
        throw new j("Cannot skip unexpected " + E() + " at " + q());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f17548t = 0;
        this.f17525e[0] = 8;
        this.f17524d = 1;
        this.f17547s.l();
        this.f17546r.close();
    }

    @Override // com.squareup.moshi.m
    public String f1() {
        String c12;
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 10) {
            c12 = x1();
        } else if (i10 == 9) {
            c12 = e1(f17545z);
        } else if (i10 == 8) {
            c12 = e1(f17544y);
        } else if (i10 == 11) {
            c12 = this.f17551w;
            this.f17551w = null;
        } else if (i10 == 16) {
            c12 = Long.toString(this.f17549u);
        } else if (i10 == 17) {
            c12 = this.f17547s.c1(this.f17550v);
        } else {
            throw new j("Expected a string but was " + E() + " at path " + q());
        }
        this.f17548t = 0;
        int[] iArr = this.f17527o;
        int i11 = this.f17524d - 1;
        iArr[i11] = iArr[i11] + 1;
        return c12;
    }

    @Override // com.squareup.moshi.m
    public boolean hasNext() {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 != 2 && i10 != 4 && i10 != 18) {
            return true;
        }
        return false;
    }

    @Override // com.squareup.moshi.m
    public boolean l() {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 5) {
            this.f17548t = 0;
            int[] iArr = this.f17527o;
            int i11 = this.f17524d - 1;
            iArr[i11] = iArr[i11] + 1;
            return true;
        } else if (i10 == 6) {
            this.f17548t = 0;
            int[] iArr2 = this.f17527o;
            int i12 = this.f17524d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return false;
        } else {
            throw new j("Expected a boolean but was " + E() + " at path " + q());
        }
    }

    @Override // com.squareup.moshi.m
    public String l0() {
        String str;
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 14) {
            str = x1();
        } else if (i10 == 13) {
            str = e1(f17545z);
        } else if (i10 == 12) {
            str = e1(f17544y);
        } else if (i10 == 15) {
            str = this.f17551w;
            this.f17551w = null;
        } else {
            throw new j("Expected a name but was " + E() + " at path " + q());
        }
        this.f17548t = 0;
        this.f17526i[this.f17524d - 1] = str;
        return str;
    }

    @Override // com.squareup.moshi.m
    public Object n() {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 7) {
            this.f17548t = 0;
            int[] iArr = this.f17527o;
            int i11 = this.f17524d - 1;
            iArr[i11] = iArr[i11] + 1;
            return null;
        }
        throw new j("Expected null but was " + E() + " at path " + q());
    }

    @Override // com.squareup.moshi.m
    public double nextDouble() {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 16) {
            this.f17548t = 0;
            int[] iArr = this.f17527o;
            int i11 = this.f17524d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f17549u;
        }
        if (i10 == 17) {
            this.f17551w = this.f17547s.c1(this.f17550v);
        } else if (i10 == 9) {
            this.f17551w = e1(f17545z);
        } else if (i10 == 8) {
            this.f17551w = e1(f17544y);
        } else if (i10 == 10) {
            this.f17551w = x1();
        } else if (i10 != 11) {
            throw new j("Expected a double but was " + E() + " at path " + q());
        }
        this.f17548t = 11;
        try {
            double parseDouble = Double.parseDouble(this.f17551w);
            if (!this.f17528p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
                throw new k("JSON forbids NaN and infinities: " + parseDouble + " at path " + q());
            }
            this.f17551w = null;
            this.f17548t = 0;
            int[] iArr2 = this.f17527o;
            int i12 = this.f17524d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return parseDouble;
        } catch (NumberFormatException unused) {
            throw new j("Expected a double but was " + this.f17551w + " at path " + q());
        }
    }

    @Override // com.squareup.moshi.m
    public int nextInt() {
        String e12;
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 16) {
            long j10 = this.f17549u;
            int i11 = (int) j10;
            if (j10 == i11) {
                this.f17548t = 0;
                int[] iArr = this.f17527o;
                int i12 = this.f17524d - 1;
                iArr[i12] = iArr[i12] + 1;
                return i11;
            }
            throw new j("Expected an int but was " + this.f17549u + " at path " + q());
        }
        if (i10 == 17) {
            this.f17551w = this.f17547s.c1(this.f17550v);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new j("Expected an int but was " + E() + " at path " + q());
            }
        } else {
            if (i10 == 9) {
                e12 = e1(f17545z);
            } else {
                e12 = e1(f17544y);
            }
            this.f17551w = e12;
            try {
                int parseInt = Integer.parseInt(e12);
                this.f17548t = 0;
                int[] iArr2 = this.f17527o;
                int i13 = this.f17524d - 1;
                iArr2[i13] = iArr2[i13] + 1;
                return parseInt;
            } catch (NumberFormatException unused) {
            }
        }
        this.f17548t = 11;
        try {
            double parseDouble = Double.parseDouble(this.f17551w);
            int i14 = (int) parseDouble;
            if (i14 == parseDouble) {
                this.f17551w = null;
                this.f17548t = 0;
                int[] iArr3 = this.f17527o;
                int i15 = this.f17524d - 1;
                iArr3[i15] = iArr3[i15] + 1;
                return i14;
            }
            throw new j("Expected an int but was " + this.f17551w + " at path " + q());
        } catch (NumberFormatException unused2) {
            throw new j("Expected an int but was " + this.f17551w + " at path " + q());
        }
    }

    @Override // com.squareup.moshi.m
    public long nextLong() {
        String e12;
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 16) {
            this.f17548t = 0;
            int[] iArr = this.f17527o;
            int i11 = this.f17524d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f17549u;
        }
        if (i10 == 17) {
            this.f17551w = this.f17547s.c1(this.f17550v);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new j("Expected a long but was " + E() + " at path " + q());
            }
        } else {
            if (i10 == 9) {
                e12 = e1(f17545z);
            } else {
                e12 = e1(f17544y);
            }
            this.f17551w = e12;
            try {
                long parseLong = Long.parseLong(e12);
                this.f17548t = 0;
                int[] iArr2 = this.f17527o;
                int i12 = this.f17524d - 1;
                iArr2[i12] = iArr2[i12] + 1;
                return parseLong;
            } catch (NumberFormatException unused) {
            }
        }
        this.f17548t = 11;
        try {
            long longValueExact = new BigDecimal(this.f17551w).longValueExact();
            this.f17551w = null;
            this.f17548t = 0;
            int[] iArr3 = this.f17527o;
            int i13 = this.f17524d - 1;
            iArr3[i13] = iArr3[i13] + 1;
            return longValueExact;
        } catch (ArithmeticException | NumberFormatException unused2) {
            throw new j("Expected a long but was " + this.f17551w + " at path " + q());
        }
    }

    @Override // com.squareup.moshi.m
    public void r() {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 1) {
            N(3);
            this.f17548t = 0;
            return;
        }
        throw new j("Expected BEGIN_OBJECT but was " + E() + " at path " + q());
    }

    @Override // com.squareup.moshi.m
    public void s() {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 4) {
            int i11 = this.f17524d;
            this.f17524d = i11 - 1;
            int[] iArr = this.f17527o;
            int i12 = i11 - 2;
            iArr[i12] = iArr[i12] + 1;
            this.f17548t = 0;
            return;
        }
        throw new j("Expected END_ARRAY but was " + E() + " at path " + q());
    }

    public String toString() {
        return "JsonReader(" + this.f17546r + ")";
    }

    @Override // com.squareup.moshi.m
    public void u() {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 3) {
            N(1);
            this.f17527o[this.f17524d - 1] = 0;
            this.f17548t = 0;
            return;
        }
        throw new j("Expected BEGIN_ARRAY but was " + E() + " at path " + q());
    }

    /* JADX WARN: Removed duplicated region for block: B:50:0x00bd  */
    @Override // com.squareup.moshi.m
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public okio.BufferedSource x() {
        /*
            Method dump skipped, instructions count: 220
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.squareup.moshi.o.x():okio.BufferedSource");
    }

    @Override // com.squareup.moshi.m
    public void y() {
        int i10 = this.f17548t;
        if (i10 == 0) {
            i10 = M0();
        }
        if (i10 == 2) {
            int i11 = this.f17524d;
            int i12 = i11 - 1;
            this.f17524d = i12;
            this.f17526i[i12] = null;
            int[] iArr = this.f17527o;
            int i13 = i11 - 2;
            iArr[i13] = iArr[i13] + 1;
            this.f17548t = 0;
            return;
        }
        throw new j("Expected END_OBJECT but was " + E() + " at path " + q());
    }

    o(o oVar) {
        super(oVar);
        this.f17548t = 0;
        BufferedSource peek = oVar.f17546r.peek();
        this.f17546r = peek;
        this.f17547s = peek.e();
        this.f17548t = oVar.f17548t;
        this.f17549u = oVar.f17549u;
        this.f17550v = oVar.f17550v;
        this.f17551w = oVar.f17551w;
        try {
            peek.T0(oVar.f17547s.size());
        } catch (IOException unused) {
            throw new AssertionError();
        }
    }
}
