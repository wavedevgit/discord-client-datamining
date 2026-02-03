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
    private final BufferedSource f18564r;

    /* renamed from: s  reason: collision with root package name */
    private final Buffer f18565s;

    /* renamed from: t  reason: collision with root package name */
    private int f18566t;

    /* renamed from: u  reason: collision with root package name */
    private long f18567u;

    /* renamed from: v  reason: collision with root package name */
    private int f18568v;

    /* renamed from: w  reason: collision with root package name */
    private String f18569w;

    /* renamed from: x  reason: collision with root package name */
    private r f18570x;

    /* renamed from: y  reason: collision with root package name */
    private static final ByteString f18562y = ByteString.h("'\\");

    /* renamed from: z  reason: collision with root package name */
    private static final ByteString f18563z = ByteString.h("\"\\");
    private static final ByteString A = ByteString.h("{}[]:, \n\t\r\f/\\;#=");
    private static final ByteString B = ByteString.h("\n\r");
    private static final ByteString C = ByteString.h("*/");

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(BufferedSource bufferedSource) {
        this.f18566t = 0;
        if (bufferedSource != null) {
            this.f18564r = bufferedSource;
            this.f18565s = bufferedSource.e();
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
        r19.f18567u = r8;
        r19.f18565s.skip(r5);
        r19.f18566t = 16;
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
        r19.f18568v = r5;
        r19.f18566t = 17;
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
        if (this.f18564r.C0(1L)) {
            byte readByte = this.f18565s.readByte();
            if (readByte != 10 && readByte != 34 && readByte != 39 && readByte != 47 && readByte != 92) {
                if (readByte != 98) {
                    if (readByte != 102) {
                        if (readByte == 110) {
                            return '\n';
                        }
                        if (readByte != 114) {
                            if (readByte != 116) {
                                if (readByte != 117) {
                                    if (this.f18546p) {
                                        return (char) readByte;
                                    }
                                    throw G0("Invalid escape sequence: \\" + ((char) readByte));
                                } else if (this.f18564r.C0(4L)) {
                                    char c10 = 0;
                                    for (int i11 = 0; i11 < 4; i11++) {
                                        byte G0 = this.f18565s.G0(i11);
                                        char c11 = (char) (c10 << 4);
                                        if (G0 >= 48 && G0 <= 57) {
                                            i10 = G0 - 48;
                                        } else if (G0 >= 97 && G0 <= 102) {
                                            i10 = G0 - 87;
                                        } else if (G0 < 65 || G0 > 70) {
                                            throw G0("\\u" + this.f18565s.c1(4L));
                                        } else {
                                            i10 = G0 - 55;
                                        }
                                        c10 = (char) (c11 + i10);
                                    }
                                    this.f18565s.skip(4L);
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
        throw G0("Unterminated escape sequence");
    }

    private void E1(ByteString byteString) {
        while (true) {
            long d02 = this.f18564r.d0(byteString);
            if (d02 != -1) {
                if (this.f18565s.G0(d02) == 92) {
                    this.f18565s.skip(d02 + 1);
                    B1();
                } else {
                    this.f18565s.skip(d02 + 1);
                    return;
                }
            } else {
                throw G0("Unterminated string");
            }
        }
    }

    private void K0() {
        if (this.f18546p) {
            return;
        }
        throw G0("Use JsonReader.setLenient(true) to accept malformed JSON");
    }

    private int L0() {
        int[] iArr = this.f18543e;
        int i10 = this.f18542d;
        int i11 = iArr[i10 - 1];
        if (i11 == 1) {
            iArr[i10 - 1] = 2;
        } else if (i11 == 2) {
            int Z0 = Z0(true);
            this.f18565s.readByte();
            if (Z0 != 44) {
                if (Z0 != 59) {
                    if (Z0 == 93) {
                        this.f18566t = 4;
                        return 4;
                    }
                    throw G0("Unterminated array");
                }
                K0();
            }
        } else if (i11 == 3 || i11 == 5) {
            iArr[i10 - 1] = 4;
            if (i11 == 5) {
                int Z02 = Z0(true);
                this.f18565s.readByte();
                if (Z02 != 44) {
                    if (Z02 != 59) {
                        if (Z02 == 125) {
                            this.f18566t = 2;
                            return 2;
                        }
                        throw G0("Unterminated object");
                    }
                    K0();
                }
            }
            int Z03 = Z0(true);
            if (Z03 == 34) {
                this.f18565s.readByte();
                this.f18566t = 13;
                return 13;
            } else if (Z03 == 39) {
                this.f18565s.readByte();
                K0();
                this.f18566t = 12;
                return 12;
            } else if (Z03 != 125) {
                K0();
                if (Y0((char) Z03)) {
                    this.f18566t = 14;
                    return 14;
                }
                throw G0("Expected name");
            } else if (i11 != 5) {
                this.f18565s.readByte();
                this.f18566t = 2;
                return 2;
            } else {
                throw G0("Expected name");
            }
        } else if (i11 == 4) {
            iArr[i10 - 1] = 5;
            int Z04 = Z0(true);
            this.f18565s.readByte();
            if (Z04 != 58) {
                if (Z04 == 61) {
                    K0();
                    if (this.f18564r.C0(1L) && this.f18565s.G0(0L) == 62) {
                        this.f18565s.readByte();
                    }
                } else {
                    throw G0("Expected ':'");
                }
            }
        } else if (i11 == 6) {
            iArr[i10 - 1] = 7;
        } else if (i11 == 7) {
            if (Z0(false) == -1) {
                this.f18566t = 18;
                return 18;
            }
            K0();
        } else if (i11 == 9) {
            this.f18570x.h();
            this.f18570x = null;
            this.f18542d--;
            return L0();
        } else if (i11 == 8) {
            throw new IllegalStateException("JsonReader is closed");
        }
        int Z05 = Z0(true);
        if (Z05 == 34) {
            this.f18565s.readByte();
            this.f18566t = 9;
            return 9;
        } else if (Z05 == 39) {
            K0();
            this.f18565s.readByte();
            this.f18566t = 8;
            return 8;
        } else {
            if (Z05 != 44 && Z05 != 59) {
                if (Z05 == 91) {
                    this.f18565s.readByte();
                    this.f18566t = 3;
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
                        if (Y0(this.f18565s.G0(0L))) {
                            K0();
                            this.f18566t = 10;
                            return 10;
                        }
                        throw G0("Expected value");
                    }
                    this.f18565s.readByte();
                    this.f18566t = 1;
                    return 1;
                } else if (i11 == 1) {
                    this.f18565s.readByte();
                    this.f18566t = 4;
                    return 4;
                }
            }
            if (i11 != 1 && i11 != 2) {
                throw G0("Unexpected value");
            }
            K0();
            this.f18566t = 7;
            return 7;
        }
    }

    private int O0(String str, m.b bVar) {
        int length = bVar.f18549a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(bVar.f18549a[i10])) {
                this.f18566t = 0;
                this.f18544i[this.f18542d - 1] = str;
                return i10;
            }
        }
        return -1;
    }

    private boolean U1() {
        boolean z10;
        long size;
        BufferedSource bufferedSource = this.f18564r;
        ByteString byteString = C;
        long U = bufferedSource.U(byteString);
        if (U != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        Buffer buffer = this.f18565s;
        if (z10) {
            size = U + byteString.G();
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
        return z10;
    }

    private int V0(String str, m.b bVar) {
        int length = bVar.f18549a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(bVar.f18549a[i10])) {
                this.f18566t = 0;
                int[] iArr = this.f18545o;
                int i11 = this.f18542d - 1;
                iArr[i11] = iArr[i11] + 1;
                return i10;
            }
        }
        return -1;
    }

    private void W1() {
        long size;
        long d02 = this.f18564r.d0(B);
        Buffer buffer = this.f18565s;
        if (d02 != -1) {
            size = d02 + 1;
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
            K0();
            return false;
        }
        return false;
    }

    private void Y1() {
        long d02 = this.f18564r.d0(A);
        Buffer buffer = this.f18565s;
        if (d02 == -1) {
            d02 = buffer.size();
        }
        buffer.skip(d02);
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0025, code lost:
        r6.f18565s.skip(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x002d, code lost:
        if (r2 != 47) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0037, code lost:
        if (r6.f18564r.C0(2) != false) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003a, code lost:
        K0();
        r3 = r6.f18565s.G0(1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0047, code lost:
        if (r3 == 42) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0049, code lost:
        if (r3 == 47) goto L39;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x004c, code lost:
        r6.f18565s.readByte();
        r6.f18565s.readByte();
        W1();
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x005a, code lost:
        r6.f18565s.readByte();
        r6.f18565s.readByte();
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0068, code lost:
        if (U1() == false) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0071, code lost:
        throw G0("Unterminated comment");
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0074, code lost:
        if (r2 != 35) goto L22;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0076, code lost:
        K0();
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
            okio.BufferedSource r2 = r6.f18564r
            int r3 = r1 + 1
            long r4 = (long) r3
            boolean r2 = r2.C0(r4)
            if (r2 == 0) goto L80
            okio.Buffer r2 = r6.f18565s
            long r4 = (long) r1
            byte r2 = r2.G0(r4)
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
            okio.Buffer r3 = r6.f18565s
            long r4 = (long) r1
            r3.skip(r4)
            r1 = 47
            if (r2 != r1) goto L72
            okio.BufferedSource r3 = r6.f18564r
            r4 = 2
            boolean r3 = r3.C0(r4)
            if (r3 != 0) goto L3a
            goto L7d
        L3a:
            r6.K0()
            okio.Buffer r3 = r6.f18565s
            r4 = 1
            byte r3 = r3.G0(r4)
            r4 = 42
            if (r3 == r4) goto L5a
            if (r3 == r1) goto L4c
            goto L7d
        L4c:
            okio.Buffer r1 = r6.f18565s
            r1.readByte()
            okio.Buffer r1 = r6.f18565s
            r1.readByte()
            r6.W1()
            goto L1
        L5a:
            okio.Buffer r1 = r6.f18565s
            r1.readByte()
            okio.Buffer r1 = r6.f18565s
            r1.readByte()
            boolean r1 = r6.U1()
            if (r1 == 0) goto L6b
            goto L1
        L6b:
            java.lang.String r7 = "Unterminated comment"
            com.squareup.moshi.k r7 = r6.G0(r7)
            throw r7
        L72:
            r1 = 35
            if (r2 != r1) goto L7d
            r6.K0()
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
            long d02 = this.f18564r.d0(byteString);
            if (d02 != -1) {
                if (this.f18565s.G0(d02) == 92) {
                    if (sb2 == null) {
                        sb2 = new StringBuilder();
                    }
                    sb2.append(this.f18565s.c1(d02));
                    this.f18565s.readByte();
                    sb2.append(B1());
                } else if (sb2 == null) {
                    String c12 = this.f18565s.c1(d02);
                    this.f18565s.readByte();
                    return c12;
                } else {
                    sb2.append(this.f18565s.c1(d02));
                    this.f18565s.readByte();
                    return sb2.toString();
                }
            } else {
                throw G0("Unterminated string");
            }
        }
    }

    private String x1() {
        long d02 = this.f18564r.d0(A);
        if (d02 != -1) {
            return this.f18565s.c1(d02);
        }
        return this.f18565s.T1();
    }

    private int y1() {
        String str;
        String str2;
        int i10;
        byte G0 = this.f18565s.G0(0L);
        if (G0 != 116 && G0 != 84) {
            if (G0 != 102 && G0 != 70) {
                if (G0 != 110 && G0 != 78) {
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
            if (!this.f18564r.C0(i12)) {
                return 0;
            }
            byte G02 = this.f18565s.G0(i11);
            if (G02 != str.charAt(i11) && G02 != str2.charAt(i11)) {
                return 0;
            }
            i11 = i12;
        }
        if (this.f18564r.C0(length + 1) && Y0(this.f18565s.G0(length))) {
            return 0;
        }
        this.f18565s.skip(length);
        this.f18566t = i10;
        return i10;
    }

    @Override // com.squareup.moshi.m
    public int D0(m.b bVar) {
        int[] iArr;
        int i10;
        int i11 = this.f18566t;
        if (i11 == 0) {
            i11 = L0();
        }
        if (i11 < 8 || i11 > 11) {
            return -1;
        }
        if (i11 == 11) {
            return V0(this.f18569w, bVar);
        }
        int Y = this.f18564r.Y(bVar.f18550b);
        if (Y != -1) {
            this.f18566t = 0;
            int[] iArr2 = this.f18545o;
            int i12 = this.f18542d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return Y;
        }
        String f12 = f1();
        int V0 = V0(f12, bVar);
        if (V0 == -1) {
            this.f18566t = 11;
            this.f18569w = f12;
            this.f18545o[this.f18542d - 1] = iArr[i10] - 1;
        }
        return V0;
    }

    @Override // com.squareup.moshi.m
    public m.c E() {
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
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
    public m F() {
        return new o(this);
    }

    @Override // com.squareup.moshi.m
    public void F0() {
        if (!this.f18547q) {
            int i10 = this.f18566t;
            if (i10 == 0) {
                i10 = L0();
            }
            if (i10 == 14) {
                Y1();
            } else if (i10 == 13) {
                E1(f18563z);
            } else if (i10 == 12) {
                E1(f18562y);
            } else if (i10 != 15) {
                throw new j("Expected a name but was " + E() + " at path " + q());
            }
            this.f18566t = 0;
            this.f18544i[this.f18542d - 1] = "null";
            return;
        }
        m.c E = E();
        m0();
        throw new j("Cannot skip unexpected " + E + " at " + q());
    }

    @Override // com.squareup.moshi.m
    public void L() {
        if (hasNext()) {
            this.f18569w = m0();
            this.f18566t = 11;
        }
    }

    @Override // com.squareup.moshi.m
    public void P() {
        if (!this.f18547q) {
            int i10 = 0;
            do {
                int i11 = this.f18566t;
                if (i11 == 0) {
                    i11 = L0();
                }
                if (i11 == 3) {
                    N(1);
                } else if (i11 == 1) {
                    N(3);
                } else {
                    if (i11 == 4) {
                        i10--;
                        if (i10 >= 0) {
                            this.f18542d--;
                        } else {
                            throw new j("Expected a value but was " + E() + " at path " + q());
                        }
                    } else if (i11 == 2) {
                        i10--;
                        if (i10 >= 0) {
                            this.f18542d--;
                        } else {
                            throw new j("Expected a value but was " + E() + " at path " + q());
                        }
                    } else if (i11 != 14 && i11 != 10) {
                        if (i11 != 9 && i11 != 13) {
                            if (i11 != 8 && i11 != 12) {
                                if (i11 == 17) {
                                    this.f18565s.skip(this.f18568v);
                                } else if (i11 == 18) {
                                    throw new j("Expected a value but was " + E() + " at path " + q());
                                }
                            } else {
                                E1(f18562y);
                            }
                        } else {
                            E1(f18563z);
                        }
                    } else {
                        Y1();
                    }
                    this.f18566t = 0;
                }
                i10++;
                this.f18566t = 0;
            } while (i10 != 0);
            int[] iArr = this.f18545o;
            int i12 = this.f18542d;
            int i13 = i12 - 1;
            iArr[i13] = iArr[i13] + 1;
            this.f18544i[i12 - 1] = "null";
            return;
        }
        throw new j("Cannot skip unexpected " + E() + " at " + q());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f18566t = 0;
        this.f18543e[0] = 8;
        this.f18542d = 1;
        this.f18565s.l();
        this.f18564r.close();
    }

    @Override // com.squareup.moshi.m
    public String f1() {
        String c12;
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 10) {
            c12 = x1();
        } else if (i10 == 9) {
            c12 = e1(f18563z);
        } else if (i10 == 8) {
            c12 = e1(f18562y);
        } else if (i10 == 11) {
            c12 = this.f18569w;
            this.f18569w = null;
        } else if (i10 == 16) {
            c12 = Long.toString(this.f18567u);
        } else if (i10 == 17) {
            c12 = this.f18565s.c1(this.f18568v);
        } else {
            throw new j("Expected a string but was " + E() + " at path " + q());
        }
        this.f18566t = 0;
        int[] iArr = this.f18545o;
        int i11 = this.f18542d - 1;
        iArr[i11] = iArr[i11] + 1;
        return c12;
    }

    @Override // com.squareup.moshi.m
    public boolean hasNext() {
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 != 2 && i10 != 4 && i10 != 18) {
            return true;
        }
        return false;
    }

    @Override // com.squareup.moshi.m
    public boolean l() {
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 5) {
            this.f18566t = 0;
            int[] iArr = this.f18545o;
            int i11 = this.f18542d - 1;
            iArr[i11] = iArr[i11] + 1;
            return true;
        } else if (i10 == 6) {
            this.f18566t = 0;
            int[] iArr2 = this.f18545o;
            int i12 = this.f18542d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return false;
        } else {
            throw new j("Expected a boolean but was " + E() + " at path " + q());
        }
    }

    @Override // com.squareup.moshi.m
    public String m0() {
        String str;
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 14) {
            str = x1();
        } else if (i10 == 13) {
            str = e1(f18563z);
        } else if (i10 == 12) {
            str = e1(f18562y);
        } else if (i10 == 15) {
            str = this.f18569w;
            this.f18569w = null;
        } else {
            throw new j("Expected a name but was " + E() + " at path " + q());
        }
        this.f18566t = 0;
        this.f18544i[this.f18542d - 1] = str;
        return str;
    }

    @Override // com.squareup.moshi.m
    public Object n() {
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 7) {
            this.f18566t = 0;
            int[] iArr = this.f18545o;
            int i11 = this.f18542d - 1;
            iArr[i11] = iArr[i11] + 1;
            return null;
        }
        throw new j("Expected null but was " + E() + " at path " + q());
    }

    @Override // com.squareup.moshi.m
    public double nextDouble() {
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 16) {
            this.f18566t = 0;
            int[] iArr = this.f18545o;
            int i11 = this.f18542d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f18567u;
        }
        if (i10 == 17) {
            this.f18569w = this.f18565s.c1(this.f18568v);
        } else if (i10 == 9) {
            this.f18569w = e1(f18563z);
        } else if (i10 == 8) {
            this.f18569w = e1(f18562y);
        } else if (i10 == 10) {
            this.f18569w = x1();
        } else if (i10 != 11) {
            throw new j("Expected a double but was " + E() + " at path " + q());
        }
        this.f18566t = 11;
        try {
            double parseDouble = Double.parseDouble(this.f18569w);
            if (!this.f18546p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
                throw new k("JSON forbids NaN and infinities: " + parseDouble + " at path " + q());
            }
            this.f18569w = null;
            this.f18566t = 0;
            int[] iArr2 = this.f18545o;
            int i12 = this.f18542d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return parseDouble;
        } catch (NumberFormatException unused) {
            throw new j("Expected a double but was " + this.f18569w + " at path " + q());
        }
    }

    @Override // com.squareup.moshi.m
    public int nextInt() {
        String e12;
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 16) {
            long j10 = this.f18567u;
            int i11 = (int) j10;
            if (j10 == i11) {
                this.f18566t = 0;
                int[] iArr = this.f18545o;
                int i12 = this.f18542d - 1;
                iArr[i12] = iArr[i12] + 1;
                return i11;
            }
            throw new j("Expected an int but was " + this.f18567u + " at path " + q());
        }
        if (i10 == 17) {
            this.f18569w = this.f18565s.c1(this.f18568v);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new j("Expected an int but was " + E() + " at path " + q());
            }
        } else {
            if (i10 == 9) {
                e12 = e1(f18563z);
            } else {
                e12 = e1(f18562y);
            }
            this.f18569w = e12;
            try {
                int parseInt = Integer.parseInt(e12);
                this.f18566t = 0;
                int[] iArr2 = this.f18545o;
                int i13 = this.f18542d - 1;
                iArr2[i13] = iArr2[i13] + 1;
                return parseInt;
            } catch (NumberFormatException unused) {
            }
        }
        this.f18566t = 11;
        try {
            double parseDouble = Double.parseDouble(this.f18569w);
            int i14 = (int) parseDouble;
            if (i14 == parseDouble) {
                this.f18569w = null;
                this.f18566t = 0;
                int[] iArr3 = this.f18545o;
                int i15 = this.f18542d - 1;
                iArr3[i15] = iArr3[i15] + 1;
                return i14;
            }
            throw new j("Expected an int but was " + this.f18569w + " at path " + q());
        } catch (NumberFormatException unused2) {
            throw new j("Expected an int but was " + this.f18569w + " at path " + q());
        }
    }

    @Override // com.squareup.moshi.m
    public long nextLong() {
        String e12;
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 16) {
            this.f18566t = 0;
            int[] iArr = this.f18545o;
            int i11 = this.f18542d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f18567u;
        }
        if (i10 == 17) {
            this.f18569w = this.f18565s.c1(this.f18568v);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new j("Expected a long but was " + E() + " at path " + q());
            }
        } else {
            if (i10 == 9) {
                e12 = e1(f18563z);
            } else {
                e12 = e1(f18562y);
            }
            this.f18569w = e12;
            try {
                long parseLong = Long.parseLong(e12);
                this.f18566t = 0;
                int[] iArr2 = this.f18545o;
                int i12 = this.f18542d - 1;
                iArr2[i12] = iArr2[i12] + 1;
                return parseLong;
            } catch (NumberFormatException unused) {
            }
        }
        this.f18566t = 11;
        try {
            long longValueExact = new BigDecimal(this.f18569w).longValueExact();
            this.f18569w = null;
            this.f18566t = 0;
            int[] iArr3 = this.f18545o;
            int i13 = this.f18542d - 1;
            iArr3[i13] = iArr3[i13] + 1;
            return longValueExact;
        } catch (ArithmeticException | NumberFormatException unused2) {
            throw new j("Expected a long but was " + this.f18569w + " at path " + q());
        }
    }

    @Override // com.squareup.moshi.m
    public void r() {
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 1) {
            N(3);
            this.f18566t = 0;
            return;
        }
        throw new j("Expected BEGIN_OBJECT but was " + E() + " at path " + q());
    }

    @Override // com.squareup.moshi.m
    public void s() {
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 4) {
            int i11 = this.f18542d;
            this.f18542d = i11 - 1;
            int[] iArr = this.f18545o;
            int i12 = i11 - 2;
            iArr[i12] = iArr[i12] + 1;
            this.f18566t = 0;
            return;
        }
        throw new j("Expected END_ARRAY but was " + E() + " at path " + q());
    }

    @Override // com.squareup.moshi.m
    public int t0(m.b bVar) {
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 < 12 || i10 > 15) {
            return -1;
        }
        if (i10 == 15) {
            return O0(this.f18569w, bVar);
        }
        int Y = this.f18564r.Y(bVar.f18550b);
        if (Y != -1) {
            this.f18566t = 0;
            this.f18544i[this.f18542d - 1] = bVar.f18549a[Y];
            return Y;
        }
        String str = this.f18544i[this.f18542d - 1];
        String m02 = m0();
        int O0 = O0(m02, bVar);
        if (O0 == -1) {
            this.f18566t = 15;
            this.f18569w = m02;
            this.f18544i[this.f18542d - 1] = str;
        }
        return O0;
    }

    public String toString() {
        return "JsonReader(" + this.f18564r + ")";
    }

    @Override // com.squareup.moshi.m
    public void u() {
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 3) {
            N(1);
            this.f18545o[this.f18542d - 1] = 0;
            this.f18566t = 0;
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
        int i10 = this.f18566t;
        if (i10 == 0) {
            i10 = L0();
        }
        if (i10 == 2) {
            int i11 = this.f18542d;
            int i12 = i11 - 1;
            this.f18542d = i12;
            this.f18544i[i12] = null;
            int[] iArr = this.f18545o;
            int i13 = i11 - 2;
            iArr[i13] = iArr[i13] + 1;
            this.f18566t = 0;
            return;
        }
        throw new j("Expected END_OBJECT but was " + E() + " at path " + q());
    }

    o(o oVar) {
        super(oVar);
        this.f18566t = 0;
        BufferedSource peek = oVar.f18564r.peek();
        this.f18564r = peek;
        this.f18565s = peek.e();
        this.f18566t = oVar.f18566t;
        this.f18567u = oVar.f18567u;
        this.f18568v = oVar.f18568v;
        this.f18569w = oVar.f18569w;
        try {
            peek.U0(oVar.f18565s.size());
        } catch (IOException unused) {
            throw new AssertionError();
        }
    }
}
