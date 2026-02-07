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
    private final BufferedSource f53520s;

    /* renamed from: t  reason: collision with root package name */
    private final Buffer f53521t;

    /* renamed from: u  reason: collision with root package name */
    private int f53522u = 0;

    /* renamed from: v  reason: collision with root package name */
    private long f53523v;

    /* renamed from: w  reason: collision with root package name */
    private int f53524w;

    /* renamed from: x  reason: collision with root package name */
    private String f53525x;

    /* renamed from: y  reason: collision with root package name */
    private static final ByteString f53518y = ByteString.h("'\\");

    /* renamed from: z  reason: collision with root package name */
    private static final ByteString f53519z = ByteString.h("\"\\");
    private static final ByteString A = ByteString.h("{}[]:, \n\t\r\f/\\;#=");
    private static final ByteString B = ByteString.h("\n\r");
    private static final ByteString C = ByteString.h("*/");

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(BufferedSource bufferedSource) {
        if (bufferedSource != null) {
            this.f53520s = bufferedSource;
            this.f53521t = bufferedSource.M();
            n(6);
            return;
        }
        throw new NullPointerException("source == null");
    }

    private void C() {
        if (this.f53503p) {
            return;
        }
        throw z("Use JsonReader.setLenient(true) to accept malformed JSON");
    }

    private String E0(ByteString byteString) {
        StringBuilder sb2 = null;
        while (true) {
            long f02 = this.f53520s.f0(byteString);
            if (f02 != -1) {
                if (this.f53521t.Y(f02) == 92) {
                    if (sb2 == null) {
                        sb2 = new StringBuilder();
                    }
                    sb2.append(this.f53521t.b1(f02));
                    this.f53521t.readByte();
                    sb2.append(K0());
                } else if (sb2 == null) {
                    String b12 = this.f53521t.b1(f02);
                    this.f53521t.readByte();
                    return b12;
                } else {
                    sb2.append(this.f53521t.b1(f02));
                    this.f53521t.readByte();
                    return sb2.toString();
                }
            } else {
                throw z("Unterminated string");
            }
        }
    }

    private String F0() {
        long f02 = this.f53520s.f0(A);
        if (f02 != -1) {
            return this.f53521t.b1(f02);
        }
        return this.f53521t.S1();
    }

    private int I() {
        int[] iArr = this.f53500e;
        int i10 = this.f53499d;
        int i11 = iArr[i10 - 1];
        if (i11 == 1) {
            iArr[i10 - 1] = 2;
        } else if (i11 == 2) {
            int Y = Y(true);
            this.f53521t.readByte();
            if (Y != 44) {
                if (Y != 59) {
                    if (Y == 93) {
                        this.f53522u = 4;
                        return 4;
                    }
                    throw z("Unterminated array");
                }
                C();
            }
        } else if (i11 != 3 && i11 != 5) {
            if (i11 == 4) {
                iArr[i10 - 1] = 5;
                int Y2 = Y(true);
                this.f53521t.readByte();
                if (Y2 != 58) {
                    if (Y2 == 61) {
                        C();
                        if (this.f53520s.D0(1L) && this.f53521t.Y(0L) == 62) {
                            this.f53521t.readByte();
                        }
                    } else {
                        throw z("Expected ':'");
                    }
                }
            } else if (i11 == 6) {
                iArr[i10 - 1] = 7;
            } else if (i11 == 7) {
                if (Y(false) == -1) {
                    this.f53522u = 18;
                    return 18;
                }
                C();
            } else if (i11 == 8) {
                throw new IllegalStateException("JsonReader is closed");
            }
        } else {
            iArr[i10 - 1] = 4;
            if (i11 == 5) {
                int Y3 = Y(true);
                this.f53521t.readByte();
                if (Y3 != 44) {
                    if (Y3 != 59) {
                        if (Y3 == 125) {
                            this.f53522u = 2;
                            return 2;
                        }
                        throw z("Unterminated object");
                    }
                    C();
                }
            }
            int Y4 = Y(true);
            if (Y4 != 34) {
                if (Y4 != 39) {
                    if (Y4 != 125) {
                        C();
                        if (P((char) Y4)) {
                            this.f53522u = 14;
                            return 14;
                        }
                        throw z("Expected name");
                    } else if (i11 != 5) {
                        this.f53521t.readByte();
                        this.f53522u = 2;
                        return 2;
                    } else {
                        throw z("Expected name");
                    }
                }
                this.f53521t.readByte();
                C();
                this.f53522u = 12;
                return 12;
            }
            this.f53521t.readByte();
            this.f53522u = 13;
            return 13;
        }
        int Y5 = Y(true);
        if (Y5 != 34) {
            if (Y5 != 39) {
                if (Y5 != 44 && Y5 != 59) {
                    if (Y5 != 91) {
                        if (Y5 != 93) {
                            if (Y5 != 123) {
                                int I0 = I0();
                                if (I0 != 0) {
                                    return I0;
                                }
                                int J0 = J0();
                                if (J0 != 0) {
                                    return J0;
                                }
                                if (P(this.f53521t.Y(0L))) {
                                    C();
                                    this.f53522u = 10;
                                    return 10;
                                }
                                throw z("Expected value");
                            }
                            this.f53521t.readByte();
                            this.f53522u = 1;
                            return 1;
                        } else if (i11 == 1) {
                            this.f53521t.readByte();
                            this.f53522u = 4;
                            return 4;
                        }
                    } else {
                        this.f53521t.readByte();
                        this.f53522u = 3;
                        return 3;
                    }
                }
                if (i11 != 1 && i11 != 2) {
                    throw z("Unexpected value");
                }
                C();
                this.f53522u = 7;
                return 7;
            }
            C();
            this.f53521t.readByte();
            this.f53522u = 8;
            return 8;
        }
        this.f53521t.readByte();
        this.f53522u = 9;
        return 9;
    }

    private int I0() {
        String str;
        String str2;
        int i10;
        byte Y = this.f53521t.Y(0L);
        if (Y != 116 && Y != 84) {
            if (Y != 102 && Y != 70) {
                if (Y != 110 && Y != 78) {
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
            if (!this.f53520s.D0(i12)) {
                return 0;
            }
            byte Y2 = this.f53521t.Y(i11);
            if (Y2 != str.charAt(i11) && Y2 != str2.charAt(i11)) {
                return 0;
            }
            i11 = i12;
        }
        if (this.f53520s.D0(length + 1) && P(this.f53521t.Y(length))) {
            return 0;
        }
        this.f53521t.skip(length);
        this.f53522u = i10;
        return i10;
    }

    private int J(String str, c.a aVar) {
        int length = aVar.f53505a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(aVar.f53505a[i10])) {
                this.f53522u = 0;
                this.f53501i[this.f53499d - 1] = str;
                return i10;
            }
        }
        return -1;
    }

    /* JADX WARN: Code restructure failed: missing block: B:44:0x0089, code lost:
        if (P(r1) != false) goto L68;
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
        r19.f53523v = r8;
        r19.f53521t.skip(r5);
        r19.f53522u = 16;
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
        r19.f53524w = r5;
        r19.f53522u = 17;
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
    private int J0() {
        /*
            Method dump skipped, instructions count: 221
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: w5.e.J0():int");
    }

    private char K0() {
        int i10;
        if (this.f53520s.D0(1L)) {
            byte readByte = this.f53521t.readByte();
            if (readByte != 10 && readByte != 34 && readByte != 39 && readByte != 47 && readByte != 92) {
                if (readByte != 98) {
                    if (readByte != 102) {
                        if (readByte == 110) {
                            return '\n';
                        }
                        if (readByte != 114) {
                            if (readByte != 116) {
                                if (readByte != 117) {
                                    if (this.f53503p) {
                                        return (char) readByte;
                                    }
                                    throw z("Invalid escape sequence: \\" + ((char) readByte));
                                } else if (this.f53520s.D0(4L)) {
                                    char c10 = 0;
                                    for (int i11 = 0; i11 < 4; i11++) {
                                        byte Y = this.f53521t.Y(i11);
                                        char c11 = (char) (c10 << 4);
                                        if (Y >= 48 && Y <= 57) {
                                            i10 = Y - 48;
                                        } else if (Y >= 97 && Y <= 102) {
                                            i10 = Y - 87;
                                        } else if (Y < 65 || Y > 70) {
                                            throw z("\\u" + this.f53521t.b1(4L));
                                        } else {
                                            i10 = Y - 55;
                                        }
                                        c10 = (char) (c11 + i10);
                                    }
                                    this.f53521t.skip(4L);
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
        throw z("Unterminated escape sequence");
    }

    private void L0(ByteString byteString) {
        while (true) {
            long f02 = this.f53520s.f0(byteString);
            if (f02 != -1) {
                if (this.f53521t.Y(f02) == 92) {
                    this.f53521t.skip(f02 + 1);
                    K0();
                } else {
                    this.f53521t.skip(f02 + 1);
                    return;
                }
            } else {
                throw z("Unterminated string");
            }
        }
    }

    private boolean O0() {
        boolean z10;
        long size;
        BufferedSource bufferedSource = this.f53520s;
        ByteString byteString = C;
        long X = bufferedSource.X(byteString);
        if (X != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        Buffer buffer = this.f53521t;
        if (z10) {
            size = X + byteString.G();
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
        return z10;
    }

    private boolean P(int i10) {
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
            C();
            return false;
        }
        return false;
    }

    private void V0() {
        long size;
        long f02 = this.f53520s.f0(B);
        Buffer buffer = this.f53521t;
        if (f02 != -1) {
            size = f02 + 1;
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0025, code lost:
        r6.f53521t.skip(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x002d, code lost:
        if (r2 != 47) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0037, code lost:
        if (r6.f53520s.D0(2) != false) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003a, code lost:
        C();
        r3 = r6.f53521t.Y(1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0047, code lost:
        if (r3 == 42) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0049, code lost:
        if (r3 == 47) goto L39;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x004c, code lost:
        r6.f53521t.readByte();
        r6.f53521t.readByte();
        V0();
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x005a, code lost:
        r6.f53521t.readByte();
        r6.f53521t.readByte();
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0068, code lost:
        if (O0() == false) goto L33;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0071, code lost:
        throw z("Unterminated comment");
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0074, code lost:
        if (r2 != 35) goto L22;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0076, code lost:
        C();
        V0();
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private int Y(boolean r7) {
        /*
            r6 = this;
            r0 = 0
        L1:
            r1 = r0
        L2:
            okio.BufferedSource r2 = r6.f53520s
            int r3 = r1 + 1
            long r4 = (long) r3
            boolean r2 = r2.D0(r4)
            if (r2 == 0) goto L80
            okio.Buffer r2 = r6.f53521t
            long r4 = (long) r1
            byte r2 = r2.Y(r4)
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
            okio.Buffer r3 = r6.f53521t
            long r4 = (long) r1
            r3.skip(r4)
            r1 = 47
            if (r2 != r1) goto L72
            okio.BufferedSource r3 = r6.f53520s
            r4 = 2
            boolean r3 = r3.D0(r4)
            if (r3 != 0) goto L3a
            goto L7d
        L3a:
            r6.C()
            okio.Buffer r3 = r6.f53521t
            r4 = 1
            byte r3 = r3.Y(r4)
            r4 = 42
            if (r3 == r4) goto L5a
            if (r3 == r1) goto L4c
            goto L7d
        L4c:
            okio.Buffer r1 = r6.f53521t
            r1.readByte()
            okio.Buffer r1 = r6.f53521t
            r1.readByte()
            r6.V0()
            goto L1
        L5a:
            okio.Buffer r1 = r6.f53521t
            r1.readByte()
            okio.Buffer r1 = r6.f53521t
            r1.readByte()
            boolean r1 = r6.O0()
            if (r1 == 0) goto L6b
            goto L1
        L6b:
            java.lang.String r7 = "Unterminated comment"
            w5.b r7 = r6.z(r7)
            throw r7
        L72:
            r1 = 35
            if (r2 != r1) goto L7d
            r6.C()
            r6.V0()
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
        throw new UnsupportedOperationException("Method not decompiled: w5.e.Y(boolean):int");
    }

    private void Y0() {
        long f02 = this.f53520s.f0(A);
        Buffer buffer = this.f53521t;
        if (f02 == -1) {
            f02 = buffer.size();
        }
        buffer.skip(f02);
    }

    @Override // w5.c
    public void D() {
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 2) {
            int i11 = this.f53499d;
            int i12 = i11 - 1;
            this.f53499d = i12;
            this.f53501i[i12] = null;
            int[] iArr = this.f53502o;
            int i13 = i11 - 2;
            iArr[i13] = iArr[i13] + 1;
            this.f53522u = 0;
            return;
        }
        throw new a("Expected END_OBJECT but was " + m() + " at path " + t());
    }

    @Override // w5.c
    public void S() {
        if (!this.f53504q) {
            int i10 = 0;
            do {
                int i11 = this.f53522u;
                if (i11 == 0) {
                    i11 = I();
                }
                if (i11 == 3) {
                    n(1);
                } else if (i11 == 1) {
                    n(3);
                } else {
                    if (i11 == 4) {
                        i10--;
                        if (i10 >= 0) {
                            this.f53499d--;
                        } else {
                            throw new a("Expected a value but was " + m() + " at path " + t());
                        }
                    } else if (i11 == 2) {
                        i10--;
                        if (i10 >= 0) {
                            this.f53499d--;
                        } else {
                            throw new a("Expected a value but was " + m() + " at path " + t());
                        }
                    } else if (i11 != 14 && i11 != 10) {
                        if (i11 != 9 && i11 != 13) {
                            if (i11 != 8 && i11 != 12) {
                                if (i11 == 17) {
                                    this.f53521t.skip(this.f53524w);
                                } else if (i11 == 18) {
                                    throw new a("Expected a value but was " + m() + " at path " + t());
                                }
                            } else {
                                L0(f53518y);
                            }
                        } else {
                            L0(f53519z);
                        }
                    } else {
                        Y0();
                    }
                    this.f53522u = 0;
                }
                i10++;
                this.f53522u = 0;
            } while (i10 != 0);
            int[] iArr = this.f53502o;
            int i12 = this.f53499d;
            int i13 = i12 - 1;
            iArr[i13] = iArr[i13] + 1;
            this.f53501i[i12 - 1] = "null";
            return;
        }
        throw new a("Cannot skip unexpected " + m() + " at " + t());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f53522u = 0;
        this.f53500e[0] = 8;
        this.f53499d = 1;
        this.f53521t.k();
        this.f53520s.close();
    }

    @Override // w5.c
    public String e1() {
        String b12;
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 10) {
            b12 = F0();
        } else if (i10 == 9) {
            b12 = E0(f53519z);
        } else if (i10 == 8) {
            b12 = E0(f53518y);
        } else if (i10 == 11) {
            b12 = this.f53525x;
            this.f53525x = null;
        } else if (i10 == 16) {
            b12 = Long.toString(this.f53523v);
        } else if (i10 == 17) {
            b12 = this.f53521t.b1(this.f53524w);
        } else {
            throw new a("Expected a string but was " + m() + " at path " + t());
        }
        this.f53522u = 0;
        int[] iArr = this.f53502o;
        int i11 = this.f53499d - 1;
        iArr[i11] = iArr[i11] + 1;
        return b12;
    }

    @Override // w5.c
    public boolean g() {
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 5) {
            this.f53522u = 0;
            int[] iArr = this.f53502o;
            int i11 = this.f53499d - 1;
            iArr[i11] = iArr[i11] + 1;
            return true;
        } else if (i10 == 6) {
            this.f53522u = 0;
            int[] iArr2 = this.f53502o;
            int i12 = this.f53499d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return false;
        } else {
            throw new a("Expected a boolean but was " + m() + " at path " + t());
        }
    }

    @Override // w5.c
    public boolean hasNext() {
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 != 2 && i10 != 4 && i10 != 18) {
            return true;
        }
        return false;
    }

    @Override // w5.c
    public c.b m() {
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
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
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 16) {
            this.f53522u = 0;
            int[] iArr = this.f53502o;
            int i11 = this.f53499d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f53523v;
        }
        if (i10 == 17) {
            this.f53525x = this.f53521t.b1(this.f53524w);
        } else if (i10 == 9) {
            this.f53525x = E0(f53519z);
        } else if (i10 == 8) {
            this.f53525x = E0(f53518y);
        } else if (i10 == 10) {
            this.f53525x = F0();
        } else if (i10 != 11) {
            throw new a("Expected a double but was " + m() + " at path " + t());
        }
        this.f53522u = 11;
        try {
            double parseDouble = Double.parseDouble(this.f53525x);
            if (!this.f53503p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
                throw new b("JSON forbids NaN and infinities: " + parseDouble + " at path " + t());
            }
            this.f53525x = null;
            this.f53522u = 0;
            int[] iArr2 = this.f53502o;
            int i12 = this.f53499d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return parseDouble;
        } catch (NumberFormatException unused) {
            throw new a("Expected a double but was " + this.f53525x + " at path " + t());
        }
    }

    @Override // w5.c
    public int nextInt() {
        String E0;
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 16) {
            long j10 = this.f53523v;
            int i11 = (int) j10;
            if (j10 == i11) {
                this.f53522u = 0;
                int[] iArr = this.f53502o;
                int i12 = this.f53499d - 1;
                iArr[i12] = iArr[i12] + 1;
                return i11;
            }
            throw new a("Expected an int but was " + this.f53523v + " at path " + t());
        }
        if (i10 == 17) {
            this.f53525x = this.f53521t.b1(this.f53524w);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new a("Expected an int but was " + m() + " at path " + t());
            }
        } else {
            if (i10 == 9) {
                E0 = E0(f53519z);
            } else {
                E0 = E0(f53518y);
            }
            this.f53525x = E0;
            try {
                int parseInt = Integer.parseInt(E0);
                this.f53522u = 0;
                int[] iArr2 = this.f53502o;
                int i13 = this.f53499d - 1;
                iArr2[i13] = iArr2[i13] + 1;
                return parseInt;
            } catch (NumberFormatException unused) {
            }
        }
        this.f53522u = 11;
        try {
            double parseDouble = Double.parseDouble(this.f53525x);
            int i14 = (int) parseDouble;
            if (i14 == parseDouble) {
                this.f53525x = null;
                this.f53522u = 0;
                int[] iArr3 = this.f53502o;
                int i15 = this.f53499d - 1;
                iArr3[i15] = iArr3[i15] + 1;
                return i14;
            }
            throw new a("Expected an int but was " + this.f53525x + " at path " + t());
        } catch (NumberFormatException unused2) {
            throw new a("Expected an int but was " + this.f53525x + " at path " + t());
        }
    }

    @Override // w5.c
    public String o0() {
        String str;
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 14) {
            str = F0();
        } else if (i10 == 13) {
            str = E0(f53519z);
        } else if (i10 == 12) {
            str = E0(f53518y);
        } else if (i10 == 15) {
            str = this.f53525x;
        } else {
            throw new a("Expected a name but was " + m() + " at path " + t());
        }
        this.f53522u = 0;
        this.f53501i[this.f53499d - 1] = str;
        return str;
    }

    @Override // w5.c
    public int p(c.a aVar) {
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 < 12 || i10 > 15) {
            return -1;
        }
        if (i10 == 15) {
            return J(this.f53525x, aVar);
        }
        int d22 = this.f53520s.d2(aVar.f53506b);
        if (d22 != -1) {
            this.f53522u = 0;
            this.f53501i[this.f53499d - 1] = aVar.f53505a[d22];
            return d22;
        }
        String str = this.f53501i[this.f53499d - 1];
        String o02 = o0();
        int J = J(o02, aVar);
        if (J == -1) {
            this.f53522u = 15;
            this.f53525x = o02;
            this.f53501i[this.f53499d - 1] = str;
        }
        return J;
    }

    @Override // w5.c
    public void s() {
        if (!this.f53504q) {
            int i10 = this.f53522u;
            if (i10 == 0) {
                i10 = I();
            }
            if (i10 == 14) {
                Y0();
            } else if (i10 == 13) {
                L0(f53519z);
            } else if (i10 == 12) {
                L0(f53518y);
            } else if (i10 != 15) {
                throw new a("Expected a name but was " + m() + " at path " + t());
            }
            this.f53522u = 0;
            this.f53501i[this.f53499d - 1] = "null";
            return;
        }
        throw new a("Cannot skip unexpected " + m() + " at " + t());
    }

    public String toString() {
        return "JsonReader(" + this.f53520s + ")";
    }

    @Override // w5.c
    public void u() {
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 1) {
            n(3);
            this.f53522u = 0;
            return;
        }
        throw new a("Expected BEGIN_OBJECT but was " + m() + " at path " + t());
    }

    @Override // w5.c
    public void v() {
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 4) {
            int i11 = this.f53499d;
            this.f53499d = i11 - 1;
            int[] iArr = this.f53502o;
            int i12 = i11 - 2;
            iArr[i12] = iArr[i12] + 1;
            this.f53522u = 0;
            return;
        }
        throw new a("Expected END_ARRAY but was " + m() + " at path " + t());
    }

    @Override // w5.c
    public void x() {
        int i10 = this.f53522u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 3) {
            n(1);
            this.f53502o[this.f53499d - 1] = 0;
            this.f53522u = 0;
            return;
        }
        throw new a("Expected BEGIN_ARRAY but was " + m() + " at path " + t());
    }
}
