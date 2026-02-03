package w5;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.io.EOFException;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import w5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e extends c {

    /* renamed from: s  reason: collision with root package name */
    private final BufferedSource f51817s;

    /* renamed from: t  reason: collision with root package name */
    private final Buffer f51818t;

    /* renamed from: u  reason: collision with root package name */
    private int f51819u = 0;

    /* renamed from: v  reason: collision with root package name */
    private long f51820v;

    /* renamed from: w  reason: collision with root package name */
    private int f51821w;

    /* renamed from: x  reason: collision with root package name */
    private String f51822x;

    /* renamed from: y  reason: collision with root package name */
    private static final ByteString f51815y = ByteString.h("'\\");

    /* renamed from: z  reason: collision with root package name */
    private static final ByteString f51816z = ByteString.h("\"\\");
    private static final ByteString A = ByteString.h("{}[]:, \n\t\r\f/\\;#=");
    private static final ByteString B = ByteString.h("\n\r");
    private static final ByteString C = ByteString.h("*/");

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(BufferedSource bufferedSource) {
        if (bufferedSource != null) {
            this.f51817s = bufferedSource;
            this.f51818t = bufferedSource.I();
            x(6);
            return;
        }
        throw new NullPointerException("source == null");
    }

    private boolean D0(int i10) {
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
            N();
            return false;
        }
        return false;
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0025, code lost:
        r6.f51818t.skip(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x002d, code lost:
        if (r2 != 47) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0037, code lost:
        if (r6.f51817s.C0(2) != false) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003a, code lost:
        N();
        r3 = r6.f51818t.G0(1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0047, code lost:
        if (r3 == 42) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0049, code lost:
        if (r3 == 47) goto L39;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x004c, code lost:
        r6.f51818t.readByte();
        r6.f51818t.readByte();
        Y0();
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x005a, code lost:
        r6.f51818t.readByte();
        r6.f51818t.readByte();
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0068, code lost:
        if (V0() == false) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0071, code lost:
        throw L("Unterminated comment");
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0074, code lost:
        if (r2 != 35) goto L22;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0076, code lost:
        N();
        Y0();
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int E0(boolean r7) {
        /*
            r6 = this;
            r0 = 0
        L1:
            r1 = r0
        L2:
            okio.BufferedSource r2 = r6.f51817s
            int r3 = r1 + 1
            long r4 = (long) r3
            boolean r2 = r2.C0(r4)
            if (r2 == 0) goto L80
            okio.Buffer r2 = r6.f51818t
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
            okio.Buffer r3 = r6.f51818t
            long r4 = (long) r1
            r3.skip(r4)
            r1 = 47
            if (r2 != r1) goto L72
            okio.BufferedSource r3 = r6.f51817s
            r4 = 2
            boolean r3 = r3.C0(r4)
            if (r3 != 0) goto L3a
            goto L7d
        L3a:
            r6.N()
            okio.Buffer r3 = r6.f51818t
            r4 = 1
            byte r3 = r3.G0(r4)
            r4 = 42
            if (r3 == r4) goto L5a
            if (r3 == r1) goto L4c
            goto L7d
        L4c:
            okio.Buffer r1 = r6.f51818t
            r1.readByte()
            okio.Buffer r1 = r6.f51818t
            r1.readByte()
            r6.Y0()
            goto L1
        L5a:
            okio.Buffer r1 = r6.f51818t
            r1.readByte()
            okio.Buffer r1 = r6.f51818t
            r1.readByte()
            boolean r1 = r6.V0()
            if (r1 == 0) goto L6b
            goto L1
        L6b:
            java.lang.String r7 = "Unterminated comment"
            w5.b r7 = r6.L(r7)
            throw r7
        L72:
            r1 = 35
            if (r2 != r1) goto L7d
            r6.N()
            r6.Y0()
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
        throw new UnsupportedOperationException("Method not decompiled: w5.e.E0(boolean):int");
    }

    private String F0(ByteString byteString) {
        StringBuilder sb2 = null;
        while (true) {
            long d02 = this.f51817s.d0(byteString);
            if (d02 != -1) {
                if (this.f51818t.G0(d02) == 92) {
                    if (sb2 == null) {
                        sb2 = new StringBuilder();
                    }
                    sb2.append(this.f51818t.c1(d02));
                    this.f51818t.readByte();
                    sb2.append(L0());
                } else if (sb2 == null) {
                    String c12 = this.f51818t.c1(d02);
                    this.f51818t.readByte();
                    return c12;
                } else {
                    sb2.append(this.f51818t.c1(d02));
                    this.f51818t.readByte();
                    return sb2.toString();
                }
            } else {
                throw L("Unterminated string");
            }
        }
    }

    private String G0() {
        long d02 = this.f51817s.d0(A);
        if (d02 != -1) {
            return this.f51818t.c1(d02);
        }
        return this.f51818t.T1();
    }

    private int J0() {
        String str;
        String str2;
        int i10;
        byte G0 = this.f51818t.G0(0L);
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
            if (!this.f51817s.C0(i12)) {
                return 0;
            }
            byte G02 = this.f51818t.G0(i11);
            if (G02 != str.charAt(i11) && G02 != str2.charAt(i11)) {
                return 0;
            }
            i11 = i12;
        }
        if (this.f51817s.C0(length + 1) && D0(this.f51818t.G0(length))) {
            return 0;
        }
        this.f51818t.skip(length);
        this.f51819u = i10;
        return i10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:44:0x0089, code lost:
        if (D0(r1) != false) goto L68;
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
        r19.f51820v = r8;
        r19.f51818t.skip(r5);
        r19.f51819u = 16;
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
        r19.f51821w = r5;
        r19.f51819u = 17;
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
    private int K0() {
        /*
            Method dump skipped, instructions count: 221
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: w5.e.K0():int");
    }

    private char L0() {
        int i10;
        if (this.f51817s.C0(1L)) {
            byte readByte = this.f51818t.readByte();
            if (readByte != 10 && readByte != 34 && readByte != 39 && readByte != 47 && readByte != 92) {
                if (readByte != 98) {
                    if (readByte != 102) {
                        if (readByte == 110) {
                            return '\n';
                        }
                        if (readByte != 114) {
                            if (readByte != 116) {
                                if (readByte != 117) {
                                    if (this.f51800p) {
                                        return (char) readByte;
                                    }
                                    throw L("Invalid escape sequence: \\" + ((char) readByte));
                                } else if (this.f51817s.C0(4L)) {
                                    char c10 = 0;
                                    for (int i11 = 0; i11 < 4; i11++) {
                                        byte G0 = this.f51818t.G0(i11);
                                        char c11 = (char) (c10 << 4);
                                        if (G0 >= 48 && G0 <= 57) {
                                            i10 = G0 - 48;
                                        } else if (G0 >= 97 && G0 <= 102) {
                                            i10 = G0 - 87;
                                        } else if (G0 < 65 || G0 > 70) {
                                            throw L("\\u" + this.f51818t.c1(4L));
                                        } else {
                                            i10 = G0 - 55;
                                        }
                                        c10 = (char) (c11 + i10);
                                    }
                                    this.f51818t.skip(4L);
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
        throw L("Unterminated escape sequence");
    }

    private void N() {
        if (this.f51800p) {
            return;
        }
        throw L("Use JsonReader.setLenient(true) to accept malformed JSON");
    }

    private void O0(ByteString byteString) {
        while (true) {
            long d02 = this.f51817s.d0(byteString);
            if (d02 != -1) {
                if (this.f51818t.G0(d02) == 92) {
                    this.f51818t.skip(d02 + 1);
                    L0();
                } else {
                    this.f51818t.skip(d02 + 1);
                    return;
                }
            } else {
                throw L("Unterminated string");
            }
        }
    }

    private int V() {
        int[] iArr = this.f51797e;
        int i10 = this.f51796d;
        int i11 = iArr[i10 - 1];
        if (i11 == 1) {
            iArr[i10 - 1] = 2;
        } else if (i11 == 2) {
            int E0 = E0(true);
            this.f51818t.readByte();
            if (E0 != 44) {
                if (E0 != 59) {
                    if (E0 == 93) {
                        this.f51819u = 4;
                        return 4;
                    }
                    throw L("Unterminated array");
                }
                N();
            }
        } else if (i11 != 3 && i11 != 5) {
            if (i11 == 4) {
                iArr[i10 - 1] = 5;
                int E02 = E0(true);
                this.f51818t.readByte();
                if (E02 != 58) {
                    if (E02 == 61) {
                        N();
                        if (this.f51817s.C0(1L) && this.f51818t.G0(0L) == 62) {
                            this.f51818t.readByte();
                        }
                    } else {
                        throw L("Expected ':'");
                    }
                }
            } else if (i11 == 6) {
                iArr[i10 - 1] = 7;
            } else if (i11 == 7) {
                if (E0(false) == -1) {
                    this.f51819u = 18;
                    return 18;
                }
                N();
            } else if (i11 == 8) {
                throw new IllegalStateException("JsonReader is closed");
            }
        } else {
            iArr[i10 - 1] = 4;
            if (i11 == 5) {
                int E03 = E0(true);
                this.f51818t.readByte();
                if (E03 != 44) {
                    if (E03 != 59) {
                        if (E03 == 125) {
                            this.f51819u = 2;
                            return 2;
                        }
                        throw L("Unterminated object");
                    }
                    N();
                }
            }
            int E04 = E0(true);
            if (E04 != 34) {
                if (E04 != 39) {
                    if (E04 != 125) {
                        N();
                        if (D0((char) E04)) {
                            this.f51819u = 14;
                            return 14;
                        }
                        throw L("Expected name");
                    } else if (i11 != 5) {
                        this.f51818t.readByte();
                        this.f51819u = 2;
                        return 2;
                    } else {
                        throw L("Expected name");
                    }
                }
                this.f51818t.readByte();
                N();
                this.f51819u = 12;
                return 12;
            }
            this.f51818t.readByte();
            this.f51819u = 13;
            return 13;
        }
        int E05 = E0(true);
        if (E05 != 34) {
            if (E05 != 39) {
                if (E05 != 44 && E05 != 59) {
                    if (E05 != 91) {
                        if (E05 != 93) {
                            if (E05 != 123) {
                                int J0 = J0();
                                if (J0 != 0) {
                                    return J0;
                                }
                                int K0 = K0();
                                if (K0 != 0) {
                                    return K0;
                                }
                                if (D0(this.f51818t.G0(0L))) {
                                    N();
                                    this.f51819u = 10;
                                    return 10;
                                }
                                throw L("Expected value");
                            }
                            this.f51818t.readByte();
                            this.f51819u = 1;
                            return 1;
                        } else if (i11 == 1) {
                            this.f51818t.readByte();
                            this.f51819u = 4;
                            return 4;
                        }
                    } else {
                        this.f51818t.readByte();
                        this.f51819u = 3;
                        return 3;
                    }
                }
                if (i11 != 1 && i11 != 2) {
                    throw L("Unexpected value");
                }
                N();
                this.f51819u = 7;
                return 7;
            }
            N();
            this.f51818t.readByte();
            this.f51819u = 8;
            return 8;
        }
        this.f51818t.readByte();
        this.f51819u = 9;
        return 9;
    }

    private boolean V0() {
        boolean z10;
        long size;
        BufferedSource bufferedSource = this.f51817s;
        ByteString byteString = C;
        long U = bufferedSource.U(byteString);
        if (U != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        Buffer buffer = this.f51818t;
        if (z10) {
            size = U + byteString.G();
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
        return z10;
    }

    private void Y0() {
        long size;
        long d02 = this.f51817s.d0(B);
        Buffer buffer = this.f51818t;
        if (d02 != -1) {
            size = d02 + 1;
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
    }

    private void Z0() {
        long d02 = this.f51817s.d0(A);
        Buffer buffer = this.f51818t;
        if (d02 == -1) {
            d02 = buffer.size();
        }
        buffer.skip(d02);
    }

    private int t0(String str, c.a aVar) {
        int length = aVar.f51802a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(aVar.f51802a[i10])) {
                this.f51819u = 0;
                this.f51798i[this.f51796d - 1] = str;
                return i10;
            }
        }
        return -1;
    }

    @Override // w5.c
    public int B(c.a aVar) {
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 < 12 || i10 > 15) {
            return -1;
        }
        if (i10 == 15) {
            return t0(this.f51822x, aVar);
        }
        int Y = this.f51817s.Y(aVar.f51803b);
        if (Y != -1) {
            this.f51819u = 0;
            this.f51798i[this.f51796d - 1] = aVar.f51802a[Y];
            return Y;
        }
        String str = this.f51798i[this.f51796d - 1];
        String m02 = m0();
        int t02 = t0(m02, aVar);
        if (t02 == -1) {
            this.f51819u = 15;
            this.f51822x = m02;
            this.f51798i[this.f51796d - 1] = str;
        }
        return t02;
    }

    @Override // w5.c
    public void E() {
        if (!this.f51801q) {
            int i10 = this.f51819u;
            if (i10 == 0) {
                i10 = V();
            }
            if (i10 == 14) {
                Z0();
            } else if (i10 == 13) {
                O0(f51816z);
            } else if (i10 == 12) {
                O0(f51815y);
            } else if (i10 != 15) {
                throw new a("Expected a name but was " + n() + " at path " + q());
            }
            this.f51819u = 0;
            this.f51798i[this.f51796d - 1] = "null";
            return;
        }
        throw new a("Cannot skip unexpected " + n() + " at " + q());
    }

    @Override // w5.c
    public void P() {
        if (!this.f51801q) {
            int i10 = 0;
            do {
                int i11 = this.f51819u;
                if (i11 == 0) {
                    i11 = V();
                }
                if (i11 == 3) {
                    x(1);
                } else if (i11 == 1) {
                    x(3);
                } else {
                    if (i11 == 4) {
                        i10--;
                        if (i10 >= 0) {
                            this.f51796d--;
                        } else {
                            throw new a("Expected a value but was " + n() + " at path " + q());
                        }
                    } else if (i11 == 2) {
                        i10--;
                        if (i10 >= 0) {
                            this.f51796d--;
                        } else {
                            throw new a("Expected a value but was " + n() + " at path " + q());
                        }
                    } else if (i11 != 14 && i11 != 10) {
                        if (i11 != 9 && i11 != 13) {
                            if (i11 != 8 && i11 != 12) {
                                if (i11 == 17) {
                                    this.f51818t.skip(this.f51821w);
                                } else if (i11 == 18) {
                                    throw new a("Expected a value but was " + n() + " at path " + q());
                                }
                            } else {
                                O0(f51815y);
                            }
                        } else {
                            O0(f51816z);
                        }
                    } else {
                        Z0();
                    }
                    this.f51819u = 0;
                }
                i10++;
                this.f51819u = 0;
            } while (i10 != 0);
            int[] iArr = this.f51799o;
            int i12 = this.f51796d;
            int i13 = i12 - 1;
            iArr[i13] = iArr[i13] + 1;
            this.f51798i[i12 - 1] = "null";
            return;
        }
        throw new a("Cannot skip unexpected " + n() + " at " + q());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f51819u = 0;
        this.f51797e[0] = 8;
        this.f51796d = 1;
        this.f51818t.l();
        this.f51817s.close();
    }

    @Override // w5.c
    public String f1() {
        String c12;
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 == 10) {
            c12 = G0();
        } else if (i10 == 9) {
            c12 = F0(f51816z);
        } else if (i10 == 8) {
            c12 = F0(f51815y);
        } else if (i10 == 11) {
            c12 = this.f51822x;
            this.f51822x = null;
        } else if (i10 == 16) {
            c12 = Long.toString(this.f51820v);
        } else if (i10 == 17) {
            c12 = this.f51818t.c1(this.f51821w);
        } else {
            throw new a("Expected a string but was " + n() + " at path " + q());
        }
        this.f51819u = 0;
        int[] iArr = this.f51799o;
        int i11 = this.f51796d - 1;
        iArr[i11] = iArr[i11] + 1;
        return c12;
    }

    @Override // w5.c
    public boolean h() {
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 == 5) {
            this.f51819u = 0;
            int[] iArr = this.f51799o;
            int i11 = this.f51796d - 1;
            iArr[i11] = iArr[i11] + 1;
            return true;
        } else if (i10 == 6) {
            this.f51819u = 0;
            int[] iArr2 = this.f51799o;
            int i12 = this.f51796d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return false;
        } else {
            throw new a("Expected a boolean but was " + n() + " at path " + q());
        }
    }

    @Override // w5.c
    public boolean hasNext() {
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 != 2 && i10 != 4 && i10 != 18) {
            return true;
        }
        return false;
    }

    @Override // w5.c
    public String m0() {
        String str;
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 == 14) {
            str = G0();
        } else if (i10 == 13) {
            str = F0(f51816z);
        } else if (i10 == 12) {
            str = F0(f51815y);
        } else if (i10 == 15) {
            str = this.f51822x;
        } else {
            throw new a("Expected a name but was " + n() + " at path " + q());
        }
        this.f51819u = 0;
        this.f51798i[this.f51796d - 1] = str;
        return str;
    }

    @Override // w5.c
    public c.b n() {
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        switch (i10) {
            case 1:
                return c.b.BEGIN_OBJECT;
            case 2:
                return c.b.END_OBJECT;
            case 3:
                return c.b.BEGIN_ARRAY;
            case 4:
                return c.b.END_ARRAY;
            case 5:
            case 6:
                return c.b.BOOLEAN;
            case 7:
                return c.b.NULL;
            case 8:
            case 9:
            case 10:
            case 11:
                return c.b.STRING;
            case 12:
            case 13:
            case 14:
            case 15:
                return c.b.NAME;
            case 16:
            case 17:
                return c.b.NUMBER;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                return c.b.END_DOCUMENT;
            default:
                throw new AssertionError();
        }
    }

    @Override // w5.c
    public double nextDouble() {
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 == 16) {
            this.f51819u = 0;
            int[] iArr = this.f51799o;
            int i11 = this.f51796d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f51820v;
        }
        if (i10 == 17) {
            this.f51822x = this.f51818t.c1(this.f51821w);
        } else if (i10 == 9) {
            this.f51822x = F0(f51816z);
        } else if (i10 == 8) {
            this.f51822x = F0(f51815y);
        } else if (i10 == 10) {
            this.f51822x = G0();
        } else if (i10 != 11) {
            throw new a("Expected a double but was " + n() + " at path " + q());
        }
        this.f51819u = 11;
        try {
            double parseDouble = Double.parseDouble(this.f51822x);
            if (!this.f51800p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
                throw new b("JSON forbids NaN and infinities: " + parseDouble + " at path " + q());
            }
            this.f51822x = null;
            this.f51819u = 0;
            int[] iArr2 = this.f51799o;
            int i12 = this.f51796d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return parseDouble;
        } catch (NumberFormatException unused) {
            throw new a("Expected a double but was " + this.f51822x + " at path " + q());
        }
    }

    @Override // w5.c
    public int nextInt() {
        String F0;
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 == 16) {
            long j10 = this.f51820v;
            int i11 = (int) j10;
            if (j10 == i11) {
                this.f51819u = 0;
                int[] iArr = this.f51799o;
                int i12 = this.f51796d - 1;
                iArr[i12] = iArr[i12] + 1;
                return i11;
            }
            throw new a("Expected an int but was " + this.f51820v + " at path " + q());
        }
        if (i10 == 17) {
            this.f51822x = this.f51818t.c1(this.f51821w);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new a("Expected an int but was " + n() + " at path " + q());
            }
        } else {
            if (i10 == 9) {
                F0 = F0(f51816z);
            } else {
                F0 = F0(f51815y);
            }
            this.f51822x = F0;
            try {
                int parseInt = Integer.parseInt(F0);
                this.f51819u = 0;
                int[] iArr2 = this.f51799o;
                int i13 = this.f51796d - 1;
                iArr2[i13] = iArr2[i13] + 1;
                return parseInt;
            } catch (NumberFormatException unused) {
            }
        }
        this.f51819u = 11;
        try {
            double parseDouble = Double.parseDouble(this.f51822x);
            int i14 = (int) parseDouble;
            if (i14 == parseDouble) {
                this.f51822x = null;
                this.f51819u = 0;
                int[] iArr3 = this.f51799o;
                int i15 = this.f51796d - 1;
                iArr3[i15] = iArr3[i15] + 1;
                return i14;
            }
            throw new a("Expected an int but was " + this.f51822x + " at path " + q());
        } catch (NumberFormatException unused2) {
            throw new a("Expected an int but was " + this.f51822x + " at path " + q());
        }
    }

    @Override // w5.c
    public void r() {
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 == 1) {
            x(3);
            this.f51819u = 0;
            return;
        }
        throw new a("Expected BEGIN_OBJECT but was " + n() + " at path " + q());
    }

    @Override // w5.c
    public void s() {
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 == 4) {
            int i11 = this.f51796d;
            this.f51796d = i11 - 1;
            int[] iArr = this.f51799o;
            int i12 = i11 - 2;
            iArr[i12] = iArr[i12] + 1;
            this.f51819u = 0;
            return;
        }
        throw new a("Expected END_ARRAY but was " + n() + " at path " + q());
    }

    public String toString() {
        return "JsonReader(" + this.f51817s + ")";
    }

    @Override // w5.c
    public void u() {
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 == 3) {
            x(1);
            this.f51799o[this.f51796d - 1] = 0;
            this.f51819u = 0;
            return;
        }
        throw new a("Expected BEGIN_ARRAY but was " + n() + " at path " + q());
    }

    @Override // w5.c
    public void y() {
        int i10 = this.f51819u;
        if (i10 == 0) {
            i10 = V();
        }
        if (i10 == 2) {
            int i11 = this.f51796d;
            int i12 = i11 - 1;
            this.f51796d = i12;
            this.f51798i[i12] = null;
            int[] iArr = this.f51799o;
            int i13 = i11 - 2;
            iArr[i13] = iArr[i13] + 1;
            this.f51819u = 0;
            return;
        }
        throw new a("Expected END_OBJECT but was " + n() + " at path " + q());
    }
}
