package x5;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.io.EOFException;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import x5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e extends c {

    /* renamed from: s  reason: collision with root package name */
    private final BufferedSource f54683s;

    /* renamed from: t  reason: collision with root package name */
    private final Buffer f54684t;

    /* renamed from: u  reason: collision with root package name */
    private int f54685u = 0;

    /* renamed from: v  reason: collision with root package name */
    private long f54686v;

    /* renamed from: w  reason: collision with root package name */
    private int f54687w;

    /* renamed from: x  reason: collision with root package name */
    private String f54688x;

    /* renamed from: y  reason: collision with root package name */
    private static final ByteString f54681y = ByteString.h("'\\");

    /* renamed from: z  reason: collision with root package name */
    private static final ByteString f54682z = ByteString.h("\"\\");
    private static final ByteString A = ByteString.h("{}[]:, \n\t\r\f/\\;#=");
    private static final ByteString B = ByteString.h("\n\r");
    private static final ByteString C = ByteString.h("*/");

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(BufferedSource bufferedSource) {
        if (bufferedSource != null) {
            this.f54683s = bufferedSource;
            this.f54684t = bufferedSource.M();
            n(6);
            return;
        }
        throw new NullPointerException("source == null");
    }

    private void C() {
        if (this.f54666p) {
            return;
        }
        throw z("Use JsonReader.setLenient(true) to accept malformed JSON");
    }

    private String C0(ByteString byteString) {
        StringBuilder sb2 = null;
        while (true) {
            long g02 = this.f54683s.g0(byteString);
            if (g02 != -1) {
                if (this.f54684t.Z(g02) == 92) {
                    if (sb2 == null) {
                        sb2 = new StringBuilder();
                    }
                    sb2.append(this.f54684t.Y0(g02));
                    this.f54684t.readByte();
                    sb2.append(J0());
                } else if (sb2 == null) {
                    String Y0 = this.f54684t.Y0(g02);
                    this.f54684t.readByte();
                    return Y0;
                } else {
                    sb2.append(this.f54684t.Y0(g02));
                    this.f54684t.readByte();
                    return sb2.toString();
                }
            } else {
                throw z("Unterminated string");
            }
        }
    }

    private String D0() {
        long g02 = this.f54683s.g0(A);
        if (g02 != -1) {
            return this.f54684t.Y0(g02);
        }
        return this.f54684t.R1();
    }

    private int G0() {
        String str;
        String str2;
        int i10;
        byte Z = this.f54684t.Z(0L);
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
            if (!this.f54683s.B0(i12)) {
                return 0;
            }
            byte Z2 = this.f54684t.Z(i11);
            if (Z2 != str.charAt(i11) && Z2 != str2.charAt(i11)) {
                return 0;
            }
            i11 = i12;
        }
        if (this.f54683s.B0(length + 1) && Q(this.f54684t.Z(length))) {
            return 0;
        }
        this.f54684t.skip(length);
        this.f54685u = i10;
        return i10;
    }

    /* JADX WARN: Code restructure failed: missing block: B:44:0x0089, code lost:
        if (Q(r1) != false) goto L68;
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
        r19.f54686v = r8;
        r19.f54684t.skip(r5);
        r19.f54685u = 16;
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
        r19.f54687w = r5;
        r19.f54685u = 17;
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
    private int H0() {
        /*
            Method dump skipped, instructions count: 221
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: x5.e.H0():int");
    }

    private int I() {
        int[] iArr = this.f54663e;
        int i10 = this.f54662d;
        int i11 = iArr[i10 - 1];
        if (i11 == 1) {
            iArr[i10 - 1] = 2;
        } else if (i11 == 2) {
            int Z = Z(true);
            this.f54684t.readByte();
            if (Z != 44) {
                if (Z != 59) {
                    if (Z == 93) {
                        this.f54685u = 4;
                        return 4;
                    }
                    throw z("Unterminated array");
                }
                C();
            }
        } else if (i11 != 3 && i11 != 5) {
            if (i11 == 4) {
                iArr[i10 - 1] = 5;
                int Z2 = Z(true);
                this.f54684t.readByte();
                if (Z2 != 58) {
                    if (Z2 == 61) {
                        C();
                        if (this.f54683s.B0(1L) && this.f54684t.Z(0L) == 62) {
                            this.f54684t.readByte();
                        }
                    } else {
                        throw z("Expected ':'");
                    }
                }
            } else if (i11 == 6) {
                iArr[i10 - 1] = 7;
            } else if (i11 == 7) {
                if (Z(false) == -1) {
                    this.f54685u = 18;
                    return 18;
                }
                C();
            } else if (i11 == 8) {
                throw new IllegalStateException("JsonReader is closed");
            }
        } else {
            iArr[i10 - 1] = 4;
            if (i11 == 5) {
                int Z3 = Z(true);
                this.f54684t.readByte();
                if (Z3 != 44) {
                    if (Z3 != 59) {
                        if (Z3 == 125) {
                            this.f54685u = 2;
                            return 2;
                        }
                        throw z("Unterminated object");
                    }
                    C();
                }
            }
            int Z4 = Z(true);
            if (Z4 != 34) {
                if (Z4 != 39) {
                    if (Z4 != 125) {
                        C();
                        if (Q((char) Z4)) {
                            this.f54685u = 14;
                            return 14;
                        }
                        throw z("Expected name");
                    } else if (i11 != 5) {
                        this.f54684t.readByte();
                        this.f54685u = 2;
                        return 2;
                    } else {
                        throw z("Expected name");
                    }
                }
                this.f54684t.readByte();
                C();
                this.f54685u = 12;
                return 12;
            }
            this.f54684t.readByte();
            this.f54685u = 13;
            return 13;
        }
        int Z5 = Z(true);
        if (Z5 != 34) {
            if (Z5 != 39) {
                if (Z5 != 44 && Z5 != 59) {
                    if (Z5 != 91) {
                        if (Z5 != 93) {
                            if (Z5 != 123) {
                                int G0 = G0();
                                if (G0 != 0) {
                                    return G0;
                                }
                                int H0 = H0();
                                if (H0 != 0) {
                                    return H0;
                                }
                                if (Q(this.f54684t.Z(0L))) {
                                    C();
                                    this.f54685u = 10;
                                    return 10;
                                }
                                throw z("Expected value");
                            }
                            this.f54684t.readByte();
                            this.f54685u = 1;
                            return 1;
                        } else if (i11 == 1) {
                            this.f54684t.readByte();
                            this.f54685u = 4;
                            return 4;
                        }
                    } else {
                        this.f54684t.readByte();
                        this.f54685u = 3;
                        return 3;
                    }
                }
                if (i11 != 1 && i11 != 2) {
                    throw z("Unexpected value");
                }
                C();
                this.f54685u = 7;
                return 7;
            }
            C();
            this.f54684t.readByte();
            this.f54685u = 8;
            return 8;
        }
        this.f54684t.readByte();
        this.f54685u = 9;
        return 9;
    }

    private int J(String str, c.a aVar) {
        int length = aVar.f54668a.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (str.equals(aVar.f54668a[i10])) {
                this.f54685u = 0;
                this.f54664i[this.f54662d - 1] = str;
                return i10;
            }
        }
        return -1;
    }

    private char J0() {
        int i10;
        if (this.f54683s.B0(1L)) {
            byte readByte = this.f54684t.readByte();
            if (readByte != 10 && readByte != 34 && readByte != 39 && readByte != 47 && readByte != 92) {
                if (readByte != 98) {
                    if (readByte != 102) {
                        if (readByte == 110) {
                            return '\n';
                        }
                        if (readByte != 114) {
                            if (readByte != 116) {
                                if (readByte != 117) {
                                    if (this.f54666p) {
                                        return (char) readByte;
                                    }
                                    throw z("Invalid escape sequence: \\" + ((char) readByte));
                                } else if (this.f54683s.B0(4L)) {
                                    char c10 = 0;
                                    for (int i11 = 0; i11 < 4; i11++) {
                                        byte Z = this.f54684t.Z(i11);
                                        char c11 = (char) (c10 << 4);
                                        if (Z >= 48 && Z <= 57) {
                                            i10 = Z - 48;
                                        } else if (Z >= 97 && Z <= 102) {
                                            i10 = Z - 87;
                                        } else if (Z < 65 || Z > 70) {
                                            throw z("\\u" + this.f54684t.Y0(4L));
                                        } else {
                                            i10 = Z - 55;
                                        }
                                        c10 = (char) (c11 + i10);
                                    }
                                    this.f54684t.skip(4L);
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

    private void O0(ByteString byteString) {
        while (true) {
            long g02 = this.f54683s.g0(byteString);
            if (g02 != -1) {
                if (this.f54684t.Z(g02) == 92) {
                    this.f54684t.skip(g02 + 1);
                    J0();
                } else {
                    this.f54684t.skip(g02 + 1);
                    return;
                }
            } else {
                throw z("Unterminated string");
            }
        }
    }

    private boolean Q(int i10) {
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

    private boolean R0() {
        boolean z10;
        long size;
        BufferedSource bufferedSource = this.f54683s;
        ByteString byteString = C;
        long Y = bufferedSource.Y(byteString);
        if (Y != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        Buffer buffer = this.f54684t;
        if (z10) {
            size = Y + byteString.G();
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
        return z10;
    }

    private void V0() {
        long size;
        long g02 = this.f54683s.g0(B);
        Buffer buffer = this.f54684t;
        if (g02 != -1) {
            size = g02 + 1;
        } else {
            size = buffer.size();
        }
        buffer.skip(size);
    }

    private void W0() {
        long g02 = this.f54683s.g0(A);
        Buffer buffer = this.f54684t;
        if (g02 == -1) {
            g02 = buffer.size();
        }
        buffer.skip(g02);
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0025, code lost:
        r6.f54684t.skip(r1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x002d, code lost:
        if (r2 != 47) goto L16;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0037, code lost:
        if (r6.f54683s.B0(2) != false) goto L28;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x003a, code lost:
        C();
        r3 = r6.f54684t.Z(1);
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0047, code lost:
        if (r3 == 42) goto L30;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0049, code lost:
        if (r3 == 47) goto L39;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x004c, code lost:
        r6.f54684t.readByte();
        r6.f54684t.readByte();
        V0();
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x005a, code lost:
        r6.f54684t.readByte();
        r6.f54684t.readByte();
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0068, code lost:
        if (R0() == false) goto L33;
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
    private int Z(boolean r7) {
        /*
            r6 = this;
            r0 = 0
        L1:
            r1 = r0
        L2:
            okio.BufferedSource r2 = r6.f54683s
            int r3 = r1 + 1
            long r4 = (long) r3
            boolean r2 = r2.B0(r4)
            if (r2 == 0) goto L80
            okio.Buffer r2 = r6.f54684t
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
            okio.Buffer r3 = r6.f54684t
            long r4 = (long) r1
            r3.skip(r4)
            r1 = 47
            if (r2 != r1) goto L72
            okio.BufferedSource r3 = r6.f54683s
            r4 = 2
            boolean r3 = r3.B0(r4)
            if (r3 != 0) goto L3a
            goto L7d
        L3a:
            r6.C()
            okio.Buffer r3 = r6.f54684t
            r4 = 1
            byte r3 = r3.Z(r4)
            r4 = 42
            if (r3 == r4) goto L5a
            if (r3 == r1) goto L4c
            goto L7d
        L4c:
            okio.Buffer r1 = r6.f54684t
            r1.readByte()
            okio.Buffer r1 = r6.f54684t
            r1.readByte()
            r6.V0()
            goto L1
        L5a:
            okio.Buffer r1 = r6.f54684t
            r1.readByte()
            okio.Buffer r1 = r6.f54684t
            r1.readByte()
            boolean r1 = r6.R0()
            if (r1 == 0) goto L6b
            goto L1
        L6b:
            java.lang.String r7 = "Unterminated comment"
            x5.b r7 = r6.z(r7)
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
        throw new UnsupportedOperationException("Method not decompiled: x5.e.Z(boolean):int");
    }

    @Override // x5.c
    public void D() {
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 2) {
            int i11 = this.f54662d;
            int i12 = i11 - 1;
            this.f54662d = i12;
            this.f54664i[i12] = null;
            int[] iArr = this.f54665o;
            int i13 = i11 - 2;
            iArr[i13] = iArr[i13] + 1;
            this.f54685u = 0;
            return;
        }
        throw new a("Expected END_OBJECT but was " + m() + " at path " + t());
    }

    @Override // x5.c
    public void T() {
        if (!this.f54667q) {
            int i10 = 0;
            do {
                int i11 = this.f54685u;
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
                            this.f54662d--;
                        } else {
                            throw new a("Expected a value but was " + m() + " at path " + t());
                        }
                    } else if (i11 == 2) {
                        i10--;
                        if (i10 >= 0) {
                            this.f54662d--;
                        } else {
                            throw new a("Expected a value but was " + m() + " at path " + t());
                        }
                    } else if (i11 != 14 && i11 != 10) {
                        if (i11 != 9 && i11 != 13) {
                            if (i11 != 8 && i11 != 12) {
                                if (i11 == 17) {
                                    this.f54684t.skip(this.f54687w);
                                } else if (i11 == 18) {
                                    throw new a("Expected a value but was " + m() + " at path " + t());
                                }
                            } else {
                                O0(f54681y);
                            }
                        } else {
                            O0(f54682z);
                        }
                    } else {
                        W0();
                    }
                    this.f54685u = 0;
                }
                i10++;
                this.f54685u = 0;
            } while (i10 != 0);
            int[] iArr = this.f54665o;
            int i12 = this.f54662d;
            int i13 = i12 - 1;
            iArr[i13] = iArr[i13] + 1;
            this.f54664i[i12 - 1] = "null";
            return;
        }
        throw new a("Cannot skip unexpected " + m() + " at " + t());
    }

    @Override // x5.c
    public String b1() {
        String Y0;
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 10) {
            Y0 = D0();
        } else if (i10 == 9) {
            Y0 = C0(f54682z);
        } else if (i10 == 8) {
            Y0 = C0(f54681y);
        } else if (i10 == 11) {
            Y0 = this.f54688x;
            this.f54688x = null;
        } else if (i10 == 16) {
            Y0 = Long.toString(this.f54686v);
        } else if (i10 == 17) {
            Y0 = this.f54684t.Y0(this.f54687w);
        } else {
            throw new a("Expected a string but was " + m() + " at path " + t());
        }
        this.f54685u = 0;
        int[] iArr = this.f54665o;
        int i11 = this.f54662d - 1;
        iArr[i11] = iArr[i11] + 1;
        return Y0;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f54685u = 0;
        this.f54663e[0] = 8;
        this.f54662d = 1;
        this.f54684t.k();
        this.f54683s.close();
    }

    @Override // x5.c
    public boolean g() {
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 5) {
            this.f54685u = 0;
            int[] iArr = this.f54665o;
            int i11 = this.f54662d - 1;
            iArr[i11] = iArr[i11] + 1;
            return true;
        } else if (i10 == 6) {
            this.f54685u = 0;
            int[] iArr2 = this.f54665o;
            int i12 = this.f54662d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return false;
        } else {
            throw new a("Expected a boolean but was " + m() + " at path " + t());
        }
    }

    @Override // x5.c
    public boolean hasNext() {
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 != 2 && i10 != 4 && i10 != 18) {
            return true;
        }
        return false;
    }

    @Override // x5.c
    public c.b m() {
        int i10 = this.f54685u;
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

    @Override // x5.c
    public double nextDouble() {
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 16) {
            this.f54685u = 0;
            int[] iArr = this.f54665o;
            int i11 = this.f54662d - 1;
            iArr[i11] = iArr[i11] + 1;
            return this.f54686v;
        }
        if (i10 == 17) {
            this.f54688x = this.f54684t.Y0(this.f54687w);
        } else if (i10 == 9) {
            this.f54688x = C0(f54682z);
        } else if (i10 == 8) {
            this.f54688x = C0(f54681y);
        } else if (i10 == 10) {
            this.f54688x = D0();
        } else if (i10 != 11) {
            throw new a("Expected a double but was " + m() + " at path " + t());
        }
        this.f54685u = 11;
        try {
            double parseDouble = Double.parseDouble(this.f54688x);
            if (!this.f54666p && (Double.isNaN(parseDouble) || Double.isInfinite(parseDouble))) {
                throw new b("JSON forbids NaN and infinities: " + parseDouble + " at path " + t());
            }
            this.f54688x = null;
            this.f54685u = 0;
            int[] iArr2 = this.f54665o;
            int i12 = this.f54662d - 1;
            iArr2[i12] = iArr2[i12] + 1;
            return parseDouble;
        } catch (NumberFormatException unused) {
            throw new a("Expected a double but was " + this.f54688x + " at path " + t());
        }
    }

    @Override // x5.c
    public int nextInt() {
        String C0;
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 16) {
            long j10 = this.f54686v;
            int i11 = (int) j10;
            if (j10 == i11) {
                this.f54685u = 0;
                int[] iArr = this.f54665o;
                int i12 = this.f54662d - 1;
                iArr[i12] = iArr[i12] + 1;
                return i11;
            }
            throw new a("Expected an int but was " + this.f54686v + " at path " + t());
        }
        if (i10 == 17) {
            this.f54688x = this.f54684t.Y0(this.f54687w);
        } else if (i10 != 9 && i10 != 8) {
            if (i10 != 11) {
                throw new a("Expected an int but was " + m() + " at path " + t());
            }
        } else {
            if (i10 == 9) {
                C0 = C0(f54682z);
            } else {
                C0 = C0(f54681y);
            }
            this.f54688x = C0;
            try {
                int parseInt = Integer.parseInt(C0);
                this.f54685u = 0;
                int[] iArr2 = this.f54665o;
                int i13 = this.f54662d - 1;
                iArr2[i13] = iArr2[i13] + 1;
                return parseInt;
            } catch (NumberFormatException unused) {
            }
        }
        this.f54685u = 11;
        try {
            double parseDouble = Double.parseDouble(this.f54688x);
            int i14 = (int) parseDouble;
            if (i14 == parseDouble) {
                this.f54688x = null;
                this.f54685u = 0;
                int[] iArr3 = this.f54665o;
                int i15 = this.f54662d - 1;
                iArr3[i15] = iArr3[i15] + 1;
                return i14;
            }
            throw new a("Expected an int but was " + this.f54688x + " at path " + t());
        } catch (NumberFormatException unused2) {
            throw new a("Expected an int but was " + this.f54688x + " at path " + t());
        }
    }

    @Override // x5.c
    public String o0() {
        String str;
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 14) {
            str = D0();
        } else if (i10 == 13) {
            str = C0(f54682z);
        } else if (i10 == 12) {
            str = C0(f54681y);
        } else if (i10 == 15) {
            str = this.f54688x;
        } else {
            throw new a("Expected a name but was " + m() + " at path " + t());
        }
        this.f54685u = 0;
        this.f54664i[this.f54662d - 1] = str;
        return str;
    }

    @Override // x5.c
    public int p(c.a aVar) {
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 < 12 || i10 > 15) {
            return -1;
        }
        if (i10 == 15) {
            return J(this.f54688x, aVar);
        }
        int E1 = this.f54683s.E1(aVar.f54669b);
        if (E1 != -1) {
            this.f54685u = 0;
            this.f54664i[this.f54662d - 1] = aVar.f54668a[E1];
            return E1;
        }
        String str = this.f54664i[this.f54662d - 1];
        String o02 = o0();
        int J = J(o02, aVar);
        if (J == -1) {
            this.f54685u = 15;
            this.f54688x = o02;
            this.f54664i[this.f54662d - 1] = str;
        }
        return J;
    }

    @Override // x5.c
    public void s() {
        if (!this.f54667q) {
            int i10 = this.f54685u;
            if (i10 == 0) {
                i10 = I();
            }
            if (i10 == 14) {
                W0();
            } else if (i10 == 13) {
                O0(f54682z);
            } else if (i10 == 12) {
                O0(f54681y);
            } else if (i10 != 15) {
                throw new a("Expected a name but was " + m() + " at path " + t());
            }
            this.f54685u = 0;
            this.f54664i[this.f54662d - 1] = "null";
            return;
        }
        throw new a("Cannot skip unexpected " + m() + " at " + t());
    }

    public String toString() {
        return "JsonReader(" + this.f54683s + ")";
    }

    @Override // x5.c
    public void u() {
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 1) {
            n(3);
            this.f54685u = 0;
            return;
        }
        throw new a("Expected BEGIN_OBJECT but was " + m() + " at path " + t());
    }

    @Override // x5.c
    public void v() {
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 4) {
            int i11 = this.f54662d;
            this.f54662d = i11 - 1;
            int[] iArr = this.f54665o;
            int i12 = i11 - 2;
            iArr[i12] = iArr[i12] + 1;
            this.f54685u = 0;
            return;
        }
        throw new a("Expected END_ARRAY but was " + m() + " at path " + t());
    }

    @Override // x5.c
    public void x() {
        int i10 = this.f54685u;
        if (i10 == 0) {
            i10 = I();
        }
        if (i10 == 3) {
            n(1);
            this.f54665o[this.f54662d - 1] = 0;
            this.f54685u = 0;
            return;
        }
        throw new a("Expected BEGIN_ARRAY but was " + m() + " at path " + t());
    }
}
