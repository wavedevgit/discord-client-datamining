package androidx.datastore.preferences.protobuf;

import com.discord.media.utils.DiscordVideoMediaSource;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class p1 {

    /* renamed from: a  reason: collision with root package name */
    private static final b f3846a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        /* JADX INFO: Access modifiers changed from: private */
        public static void h(byte b10, byte b11, byte b12, byte b13, char[] cArr, int i10) {
            if (!m(b11) && (((b10 << 28) + (b11 + 112)) >> 30) == 0 && !m(b12) && !m(b13)) {
                int r10 = ((b10 & 7) << 18) | (r(b11) << 12) | (r(b12) << 6) | r(b13);
                cArr[i10] = l(r10);
                cArr[i10 + 1] = q(r10);
                return;
            }
            throw z.c();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void i(byte b10, char[] cArr, int i10) {
            cArr[i10] = (char) b10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void j(byte b10, byte b11, byte b12, char[] cArr, int i10) {
            if (!m(b11) && ((b10 != -32 || b11 >= -96) && ((b10 != -19 || b11 < -96) && !m(b12)))) {
                cArr[i10] = (char) (((b10 & 15) << 12) | (r(b11) << 6) | r(b12));
                return;
            }
            throw z.c();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static void k(byte b10, byte b11, char[] cArr, int i10) {
            if (b10 >= -62 && !m(b11)) {
                cArr[i10] = (char) (((b10 & 31) << 6) | r(b11));
                return;
            }
            throw z.c();
        }

        private static char l(int i10) {
            return (char) ((i10 >>> 10) + 55232);
        }

        private static boolean m(byte b10) {
            return b10 > -65;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static boolean n(byte b10) {
            return b10 >= 0;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static boolean o(byte b10) {
            return b10 < -16;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static boolean p(byte b10) {
            return b10 < -32;
        }

        private static char q(int i10) {
            return (char) ((i10 & 1023) + 56320);
        }

        private static int r(byte b10) {
            return b10 & 63;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        b() {
        }

        abstract String a(byte[] bArr, int i10, int i11);

        abstract int b(CharSequence charSequence, byte[] bArr, int i10, int i11);

        final boolean c(byte[] bArr, int i10, int i11) {
            if (d(0, bArr, i10, i11) != 0) {
                return false;
            }
            return true;
        }

        abstract int d(int i10, byte[] bArr, int i11, int i12);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class c extends b {
        c() {
        }

        private static int e(byte[] bArr, int i10, int i11) {
            while (i10 < i11 && bArr[i10] >= 0) {
                i10++;
            }
            if (i10 >= i11) {
                return 0;
            }
            return f(bArr, i10, i11);
        }

        private static int f(byte[] bArr, int i10, int i11) {
            while (i10 < i11) {
                int i12 = i10 + 1;
                byte b10 = bArr[i10];
                if (b10 < 0) {
                    if (b10 < -32) {
                        if (i12 >= i11) {
                            return b10;
                        }
                        if (b10 >= -62) {
                            i10 += 2;
                            if (bArr[i12] > -65) {
                            }
                        }
                        return -1;
                    } else if (b10 < -16) {
                        if (i12 >= i11 - 1) {
                            return p1.l(bArr, i12, i11);
                        }
                        int i13 = i10 + 2;
                        byte b11 = bArr[i12];
                        if (b11 <= -65 && ((b10 != -32 || b11 >= -96) && (b10 != -19 || b11 < -96))) {
                            i10 += 3;
                            if (bArr[i13] > -65) {
                            }
                        }
                        return -1;
                    } else if (i12 >= i11 - 2) {
                        return p1.l(bArr, i12, i11);
                    } else {
                        int i14 = i10 + 2;
                        byte b12 = bArr[i12];
                        if (b12 <= -65 && (((b10 << 28) + (b12 + 112)) >> 30) == 0) {
                            int i15 = i10 + 3;
                            if (bArr[i14] <= -65) {
                                i10 += 4;
                                if (bArr[i15] > -65) {
                                }
                            }
                        }
                        return -1;
                    }
                }
                i10 = i12;
            }
            return 0;
        }

        @Override // androidx.datastore.preferences.protobuf.p1.b
        String a(byte[] bArr, int i10, int i11) {
            if ((i10 | i11 | ((bArr.length - i10) - i11)) >= 0) {
                int i12 = i10 + i11;
                char[] cArr = new char[i11];
                int i13 = 0;
                while (i10 < i12) {
                    byte b10 = bArr[i10];
                    if (!a.n(b10)) {
                        break;
                    }
                    i10++;
                    a.i(b10, cArr, i13);
                    i13++;
                }
                int i14 = i13;
                while (i10 < i12) {
                    int i15 = i10 + 1;
                    byte b11 = bArr[i10];
                    if (a.n(b11)) {
                        int i16 = i14 + 1;
                        a.i(b11, cArr, i14);
                        int i17 = i15;
                        while (i17 < i12) {
                            byte b12 = bArr[i17];
                            if (!a.n(b12)) {
                                break;
                            }
                            i17++;
                            a.i(b12, cArr, i16);
                            i16++;
                        }
                        i14 = i16;
                        i10 = i17;
                    } else if (a.p(b11)) {
                        if (i15 < i12) {
                            i10 += 2;
                            a.k(b11, bArr[i15], cArr, i14);
                            i14++;
                        } else {
                            throw z.c();
                        }
                    } else if (a.o(b11)) {
                        if (i15 < i12 - 1) {
                            int i18 = i10 + 2;
                            i10 += 3;
                            a.j(b11, bArr[i15], bArr[i18], cArr, i14);
                            i14++;
                        } else {
                            throw z.c();
                        }
                    } else if (i15 < i12 - 2) {
                        int i19 = i10 + 3;
                        i10 += 4;
                        a.h(b11, bArr[i15], bArr[i10 + 2], bArr[i19], cArr, i14);
                        i14 += 2;
                    } else {
                        throw z.c();
                    }
                }
                return new String(cArr, 0, i14);
            }
            throw new ArrayIndexOutOfBoundsException(String.format("buffer length=%d, index=%d, size=%d", Integer.valueOf(bArr.length), Integer.valueOf(i10), Integer.valueOf(i11)));
        }

        /* JADX WARN: Code restructure failed: missing block: B:12:0x001d, code lost:
            return r10 + r0;
         */
        @Override // androidx.datastore.preferences.protobuf.p1.b
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        int b(java.lang.CharSequence r8, byte[] r9, int r10, int r11) {
            /*
                Method dump skipped, instructions count: 254
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.p1.c.b(java.lang.CharSequence, byte[], int, int):int");
        }

        /* JADX WARN: Code restructure failed: missing block: B:10:0x0015, code lost:
            if (r8[r9] > (-65)) goto L12;
         */
        /* JADX WARN: Code restructure failed: missing block: B:31:0x0046, code lost:
            if (r8[r9] > (-65)) goto L31;
         */
        /* JADX WARN: Code restructure failed: missing block: B:52:0x0083, code lost:
            if (r8[r7] > (-65)) goto L51;
         */
        @Override // androidx.datastore.preferences.protobuf.p1.b
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        int d(int r7, byte[] r8, int r9, int r10) {
            /*
                r6 = this;
                if (r7 == 0) goto L86
                if (r9 < r10) goto L5
                return r7
            L5:
                byte r0 = (byte) r7
                r1 = -32
                r2 = -1
                r3 = -65
                if (r0 >= r1) goto L1c
                r7 = -62
                if (r0 < r7) goto L1b
                int r7 = r9 + 1
                r9 = r8[r9]
                if (r9 <= r3) goto L18
                goto L1b
            L18:
                r9 = r7
                goto L86
            L1b:
                return r2
            L1c:
                r4 = -16
                if (r0 >= r4) goto L49
                int r7 = r7 >> 8
                int r7 = ~r7
                byte r7 = (byte) r7
                if (r7 != 0) goto L34
                int r7 = r9 + 1
                r9 = r8[r9]
                if (r7 < r10) goto L31
                int r7 = androidx.datastore.preferences.protobuf.p1.a(r0, r9)
                return r7
            L31:
                r5 = r9
                r9 = r7
                r7 = r5
            L34:
                if (r7 > r3) goto L48
                r4 = -96
                if (r0 != r1) goto L3c
                if (r7 < r4) goto L48
            L3c:
                r1 = -19
                if (r0 != r1) goto L42
                if (r7 >= r4) goto L48
            L42:
                int r7 = r9 + 1
                r9 = r8[r9]
                if (r9 <= r3) goto L18
            L48:
                return r2
            L49:
                int r1 = r7 >> 8
                int r1 = ~r1
                byte r1 = (byte) r1
                if (r1 != 0) goto L5c
                int r7 = r9 + 1
                r1 = r8[r9]
                if (r7 < r10) goto L5a
                int r7 = androidx.datastore.preferences.protobuf.p1.a(r0, r1)
                return r7
            L5a:
                r9 = 0
                goto L62
            L5c:
                int r7 = r7 >> 16
                byte r7 = (byte) r7
                r5 = r9
                r9 = r7
                r7 = r5
            L62:
                if (r9 != 0) goto L72
                int r9 = r7 + 1
                r7 = r8[r7]
                if (r9 < r10) goto L6f
                int r7 = androidx.datastore.preferences.protobuf.p1.b(r0, r1, r7)
                return r7
            L6f:
                r5 = r9
                r9 = r7
                r7 = r5
            L72:
                if (r1 > r3) goto L85
                int r0 = r0 << 28
                int r1 = r1 + 112
                int r0 = r0 + r1
                int r0 = r0 >> 30
                if (r0 != 0) goto L85
                if (r9 > r3) goto L85
                int r9 = r7 + 1
                r7 = r8[r7]
                if (r7 <= r3) goto L86
            L85:
                return r2
            L86:
                int r7 = e(r8, r9, r10)
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.p1.c.d(int, byte[], int, int):int");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends IllegalArgumentException {
        d(int i10, int i11) {
            super("Unpaired surrogate at index " + i10 + " of " + i11);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class e extends b {
        e() {
        }

        static boolean e() {
            if (o1.C() && o1.D()) {
                return true;
            }
            return false;
        }

        /* JADX WARN: Code restructure failed: missing block: B:22:0x0039, code lost:
            return -1;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private static int f(byte[] r10, long r11, int r13) {
            /*
                int r0 = g(r10, r11, r13)
                int r13 = r13 - r0
                long r0 = (long) r0
                long r11 = r11 + r0
            L7:
                r0 = 0
                r1 = r0
            L9:
                r2 = 1
                if (r13 <= 0) goto L1a
                long r4 = r11 + r2
                byte r1 = androidx.datastore.preferences.protobuf.o1.s(r10, r11)
                if (r1 < 0) goto L19
                int r13 = r13 + (-1)
                r11 = r4
                goto L9
            L19:
                r11 = r4
            L1a:
                if (r13 != 0) goto L1d
                return r0
            L1d:
                int r0 = r13 + (-1)
                r4 = -32
                r5 = -1
                r6 = -65
                if (r1 >= r4) goto L3a
                if (r0 != 0) goto L29
                return r1
            L29:
                int r13 = r13 + (-2)
                r0 = -62
                if (r1 < r0) goto L39
                long r2 = r2 + r11
                byte r11 = androidx.datastore.preferences.protobuf.o1.s(r10, r11)
                if (r11 <= r6) goto L37
                goto L39
            L37:
                r11 = r2
                goto L7
            L39:
                return r5
            L3a:
                r7 = -16
                r8 = 2
                if (r1 >= r7) goto L65
                r7 = 2
                if (r0 >= r7) goto L48
                int r10 = h(r10, r1, r11, r0)
                return r10
            L48:
                int r13 = r13 + (-3)
                long r2 = r2 + r11
                byte r0 = androidx.datastore.preferences.protobuf.o1.s(r10, r11)
                if (r0 > r6) goto L64
                r7 = -96
                if (r1 != r4) goto L57
                if (r0 < r7) goto L64
            L57:
                r4 = -19
                if (r1 != r4) goto L5d
                if (r0 >= r7) goto L64
            L5d:
                long r11 = r11 + r8
                byte r0 = androidx.datastore.preferences.protobuf.o1.s(r10, r2)
                if (r0 <= r6) goto L7
            L64:
                return r5
            L65:
                r4 = 3
                if (r0 >= r4) goto L6d
                int r10 = h(r10, r1, r11, r0)
                return r10
            L6d:
                int r13 = r13 + (-4)
                long r2 = r2 + r11
                byte r0 = androidx.datastore.preferences.protobuf.o1.s(r10, r11)
                if (r0 > r6) goto L8f
                int r1 = r1 << 28
                int r0 = r0 + 112
                int r1 = r1 + r0
                int r0 = r1 >> 30
                if (r0 != 0) goto L8f
                long r8 = r8 + r11
                byte r0 = androidx.datastore.preferences.protobuf.o1.s(r10, r2)
                if (r0 > r6) goto L8f
                r0 = 3
                long r11 = r11 + r0
                byte r0 = androidx.datastore.preferences.protobuf.o1.s(r10, r8)
                if (r0 <= r6) goto L7
            L8f:
                return r5
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.p1.e.f(byte[], long, int):int");
        }

        private static int g(byte[] bArr, long j10, int i10) {
            int i11 = 0;
            if (i10 < 16) {
                return 0;
            }
            while (i11 < i10) {
                long j11 = 1 + j10;
                if (o1.s(bArr, j10) < 0) {
                    return i11;
                }
                i11++;
                j10 = j11;
            }
            return i10;
        }

        private static int h(byte[] bArr, int i10, long j10, int i11) {
            if (i11 == 0) {
                return p1.i(i10);
            }
            if (i11 == 1) {
                return p1.j(i10, o1.s(bArr, j10));
            }
            if (i11 == 2) {
                return p1.k(i10, o1.s(bArr, j10), o1.s(bArr, j10 + 1));
            }
            throw new AssertionError();
        }

        @Override // androidx.datastore.preferences.protobuf.p1.b
        String a(byte[] bArr, int i10, int i11) {
            if ((i10 | i11 | ((bArr.length - i10) - i11)) >= 0) {
                int i12 = i10 + i11;
                char[] cArr = new char[i11];
                int i13 = 0;
                while (i10 < i12) {
                    byte s10 = o1.s(bArr, i10);
                    if (!a.n(s10)) {
                        break;
                    }
                    i10++;
                    a.i(s10, cArr, i13);
                    i13++;
                }
                int i14 = i13;
                while (i10 < i12) {
                    int i15 = i10 + 1;
                    byte s11 = o1.s(bArr, i10);
                    if (a.n(s11)) {
                        int i16 = i14 + 1;
                        a.i(s11, cArr, i14);
                        while (i15 < i12) {
                            byte s12 = o1.s(bArr, i15);
                            if (!a.n(s12)) {
                                break;
                            }
                            i15++;
                            a.i(s12, cArr, i16);
                            i16++;
                        }
                        i14 = i16;
                        i10 = i15;
                    } else if (a.p(s11)) {
                        if (i15 < i12) {
                            i10 += 2;
                            a.k(s11, o1.s(bArr, i15), cArr, i14);
                            i14++;
                        } else {
                            throw z.c();
                        }
                    } else if (a.o(s11)) {
                        if (i15 < i12 - 1) {
                            int i17 = i10 + 2;
                            i10 += 3;
                            a.j(s11, o1.s(bArr, i15), o1.s(bArr, i17), cArr, i14);
                            i14++;
                        } else {
                            throw z.c();
                        }
                    } else if (i15 < i12 - 2) {
                        int i18 = i10 + 3;
                        i10 += 4;
                        a.h(s11, o1.s(bArr, i15), o1.s(bArr, i10 + 2), o1.s(bArr, i18), cArr, i14);
                        i14 += 2;
                    } else {
                        throw z.c();
                    }
                }
                return new String(cArr, 0, i14);
            }
            throw new ArrayIndexOutOfBoundsException(String.format("buffer length=%d, index=%d, size=%d", Integer.valueOf(bArr.length), Integer.valueOf(i10), Integer.valueOf(i11)));
        }

        @Override // androidx.datastore.preferences.protobuf.p1.b
        int b(CharSequence charSequence, byte[] bArr, int i10, int i11) {
            long j10;
            long j11;
            long j12;
            int i12;
            char charAt;
            long j13 = i10;
            long j14 = i11 + j13;
            int length = charSequence.length();
            if (length <= i11 && bArr.length - i11 >= i10) {
                int i13 = 0;
                while (true) {
                    j10 = 1;
                    if (i13 >= length || (charAt = charSequence.charAt(i13)) >= 128) {
                        break;
                    }
                    o1.H(bArr, j13, (byte) charAt);
                    i13++;
                    j13 = 1 + j13;
                }
                if (i13 == length) {
                    return (int) j13;
                }
                while (i13 < length) {
                    char charAt2 = charSequence.charAt(i13);
                    if (charAt2 < 128 && j13 < j14) {
                        o1.H(bArr, j13, (byte) charAt2);
                        j12 = j14;
                        j11 = j10;
                        j13 += j10;
                    } else if (charAt2 < 2048 && j13 <= j14 - 2) {
                        j11 = j10;
                        long j15 = j13 + j11;
                        o1.H(bArr, j13, (byte) ((charAt2 >>> 6) | 960));
                        j13 += 2;
                        o1.H(bArr, j15, (byte) ((charAt2 & '?') | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                        j12 = j14;
                    } else {
                        j11 = j10;
                        if ((charAt2 >= 55296 && 57343 >= charAt2) || j13 > j14 - 3) {
                            j12 = j14;
                            if (j13 <= j12 - 4) {
                                int i14 = i13 + 1;
                                if (i14 != length) {
                                    char charAt3 = charSequence.charAt(i14);
                                    if (Character.isSurrogatePair(charAt2, charAt3)) {
                                        int codePoint = Character.toCodePoint(charAt2, charAt3);
                                        o1.H(bArr, j13, (byte) ((codePoint >>> 18) | 240));
                                        o1.H(bArr, j13 + j11, (byte) (((codePoint >>> 12) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                                        long j16 = j13 + 3;
                                        o1.H(bArr, j13 + 2, (byte) (((codePoint >>> 6) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                                        j13 += 4;
                                        o1.H(bArr, j16, (byte) ((codePoint & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                                        i13 = i14;
                                    } else {
                                        i13 = i14;
                                    }
                                }
                                throw new d(i13 - 1, length);
                            } else if (55296 <= charAt2 && charAt2 <= 57343 && ((i12 = i13 + 1) == length || !Character.isSurrogatePair(charAt2, charSequence.charAt(i12)))) {
                                throw new d(i13, length);
                            } else {
                                throw new ArrayIndexOutOfBoundsException("Failed writing " + charAt2 + " at index " + j13);
                            }
                        }
                        o1.H(bArr, j13, (byte) ((charAt2 >>> '\f') | DiscordVideoMediaSource.DEFAULT_HEIGHT));
                        long j17 = j13 + 2;
                        j12 = j14;
                        o1.H(bArr, j13 + j11, (byte) (((charAt2 >>> 6) & 63) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                        j13 += 3;
                        o1.H(bArr, j17, (byte) ((charAt2 & '?') | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                    }
                    i13++;
                    j10 = j11;
                    j14 = j12;
                }
                return (int) j13;
            }
            throw new ArrayIndexOutOfBoundsException("Failed writing " + charSequence.charAt(length - 1) + " at index " + (i10 + i11));
        }

        /* JADX WARN: Code restructure failed: missing block: B:35:0x0058, code lost:
            if (androidx.datastore.preferences.protobuf.o1.s(r12, r0) > (-65)) goto L36;
         */
        /* JADX WARN: Code restructure failed: missing block: B:58:0x009e, code lost:
            if (androidx.datastore.preferences.protobuf.o1.s(r12, r0) > (-65)) goto L56;
         */
        @Override // androidx.datastore.preferences.protobuf.p1.b
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        int d(int r11, byte[] r12, int r13, int r14) {
            /*
                Method dump skipped, instructions count: 197
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.datastore.preferences.protobuf.p1.e.d(int, byte[], int, int):int");
        }
    }

    static {
        b cVar;
        if (e.e() && !androidx.datastore.preferences.protobuf.d.c()) {
            cVar = new e();
        } else {
            cVar = new c();
        }
        f3846a = cVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String e(byte[] bArr, int i10, int i11) {
        return f3846a.a(bArr, i10, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int f(CharSequence charSequence, byte[] bArr, int i10, int i11) {
        return f3846a.b(charSequence, bArr, i10, i11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int g(CharSequence charSequence) {
        int length = charSequence.length();
        int i10 = 0;
        while (i10 < length && charSequence.charAt(i10) < 128) {
            i10++;
        }
        int i11 = length;
        while (true) {
            if (i10 < length) {
                char charAt = charSequence.charAt(i10);
                if (charAt < 2048) {
                    i11 += (127 - charAt) >>> 31;
                    i10++;
                } else {
                    i11 += h(charSequence, i10);
                    break;
                }
            } else {
                break;
            }
        }
        if (i11 >= length) {
            return i11;
        }
        throw new IllegalArgumentException("UTF-8 length does not fit in int: " + (i11 + 4294967296L));
    }

    private static int h(CharSequence charSequence, int i10) {
        int length = charSequence.length();
        int i11 = 0;
        while (i10 < length) {
            char charAt = charSequence.charAt(i10);
            if (charAt < 2048) {
                i11 += (127 - charAt) >>> 31;
            } else {
                i11 += 2;
                if (55296 <= charAt && charAt <= 57343) {
                    if (Character.codePointAt(charSequence, i10) >= 65536) {
                        i10++;
                    } else {
                        throw new d(i10, length);
                    }
                }
            }
            i10++;
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int i(int i10) {
        if (i10 > -12) {
            return -1;
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int j(int i10, int i11) {
        if (i10 > -12 || i11 > -65) {
            return -1;
        }
        return i10 ^ (i11 << 8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int k(int i10, int i11, int i12) {
        if (i10 > -12 || i11 > -65 || i12 > -65) {
            return -1;
        }
        return (i10 ^ (i11 << 8)) ^ (i12 << 16);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int l(byte[] bArr, int i10, int i11) {
        byte b10 = bArr[i10 - 1];
        int i12 = i11 - i10;
        if (i12 != 0) {
            if (i12 != 1) {
                if (i12 == 2) {
                    return k(b10, bArr[i10], bArr[i10 + 1]);
                }
                throw new AssertionError();
            }
            return j(b10, bArr[i10]);
        }
        return i(b10);
    }

    public static boolean m(byte[] bArr) {
        return f3846a.c(bArr, 0, bArr.length);
    }

    public static boolean n(byte[] bArr, int i10, int i11) {
        return f3846a.c(bArr, i10, i11);
    }
}
