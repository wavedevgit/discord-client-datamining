package nk;

import androidx.recyclerview.widget.h;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import fk.g;
import java.nio.charset.StandardCharsets;
import java.util.Collection;
import java.util.Set;
import jk.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class c {

    /* renamed from: b  reason: collision with root package name */
    private static final char[] f41343b;

    /* renamed from: d  reason: collision with root package name */
    private static final char[] f41345d;

    /* renamed from: a  reason: collision with root package name */
    private static final char[] f41342a = {'*', '*', '*', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};

    /* renamed from: c  reason: collision with root package name */
    private static final char[] f41344c = {'*', '*', '*', ' ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

    /* renamed from: e  reason: collision with root package name */
    private static final char[] f41346e = {'`', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '{', '|', '}', '~', 127};

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f41347a;

        static {
            int[] iArr = new int[b.values().length];
            f41347a = iArr;
            try {
                iArr[b.C40_ENCODE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f41347a[b.TEXT_ENCODE.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f41347a[b.ANSIX12_ENCODE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f41347a[b.EDIFACT_ENCODE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f41347a[b.BASE256_ENCODE.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f41347a[b.ECI_ENCODE.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public enum b {
        PAD_ENCODE,
        ASCII_ENCODE,
        C40_ENCODE,
        TEXT_ENCODE,
        ANSIX12_ENCODE,
        EDIFACT_ENCODE,
        BASE256_ENCODE,
        ECI_ENCODE
    }

    static {
        char[] cArr = {'!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_'};
        f41343b = cArr;
        f41345d = cArr;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0075  */
    /* JADX WARN: Removed duplicated region for block: B:25:0x007a  */
    /* JADX WARN: Removed duplicated region for block: B:38:0x0099  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x00c6  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static jk.e a(byte[] r17) {
        /*
            r0 = 5
            java.lang.Integer r1 = java.lang.Integer.valueOf(r0)
            r2 = 4
            java.lang.Integer r3 = java.lang.Integer.valueOf(r2)
            jk.c r4 = new jk.c
            r6 = r17
            r4.<init>(r6)
            jk.i r5 = new jk.i
            r7 = 100
            r5.<init>(r7)
            java.lang.StringBuilder r7 = new java.lang.StringBuilder
            r8 = 0
            java.lang.Integer r9 = java.lang.Integer.valueOf(r8)
            r7.<init>(r8)
            java.util.ArrayList r10 = new java.util.ArrayList
            r11 = 1
            java.lang.Integer r12 = java.lang.Integer.valueOf(r11)
            r10.<init>(r11)
            nk.c$b r13 = nk.c.b.ASCII_ENCODE
            java.util.HashSet r14 = new java.util.HashSet
            r14.<init>()
        L33:
            nk.c$b r15 = nk.c.b.ASCII_ENCODE
            if (r13 != r15) goto L3c
            nk.c$b r13 = c(r4, r5, r7, r14)
            goto L65
        L3c:
            int[] r16 = nk.c.a.f41347a
            int r13 = r13.ordinal()
            r13 = r16[r13]
            switch(r13) {
                case 1: goto L61;
                case 2: goto L5d;
                case 3: goto L59;
                case 4: goto L55;
                case 5: goto L51;
                case 6: goto L4c;
                default: goto L47;
            }
        L47:
            fk.g r0 = fk.g.a()
            throw r0
        L4c:
            f(r4, r5)
            r8 = r11
            goto L64
        L51:
            d(r4, r5, r10)
            goto L64
        L55:
            g(r4, r5)
            goto L64
        L59:
            b(r4, r5)
            goto L64
        L5d:
            h(r4, r5, r14)
            goto L64
        L61:
            e(r4, r5, r14)
        L64:
            r13 = r15
        L65:
            nk.c$b r15 = nk.c.b.PAD_ENCODE
            if (r13 == r15) goto L6f
            int r15 = r4.a()
            if (r15 > 0) goto L33
        L6f:
            int r4 = r7.length()
            if (r4 <= 0) goto L78
            r5.e(r7)
        L78:
            if (r8 == 0) goto L99
            boolean r4 = r14.contains(r9)
            if (r4 != 0) goto L95
            boolean r3 = r14.contains(r3)
            if (r3 == 0) goto L87
            goto L95
        L87:
            boolean r0 = r14.contains(r12)
            if (r0 != 0) goto L97
            boolean r0 = r14.contains(r1)
            if (r0 == 0) goto L94
            goto L97
        L94:
            r0 = r2
        L95:
            r1 = r5
            goto Lba
        L97:
            r0 = 6
            goto L95
        L99:
            boolean r0 = r14.contains(r9)
            if (r0 != 0) goto Lb8
            boolean r0 = r14.contains(r3)
            if (r0 == 0) goto La6
            goto Lb8
        La6:
            boolean r0 = r14.contains(r12)
            if (r0 != 0) goto Lb6
            boolean r0 = r14.contains(r1)
            if (r0 == 0) goto Lb3
            goto Lb6
        Lb3:
            r1 = r5
            r0 = r11
            goto Lba
        Lb6:
            r0 = 3
            goto L95
        Lb8:
            r0 = 2
            goto L95
        Lba:
            jk.e r5 = new jk.e
            java.lang.String r7 = r1.toString()
            boolean r1 = r10.isEmpty()
            if (r1 == 0) goto Lc7
            r10 = 0
        Lc7:
            r8 = r10
            r9 = 0
            r10 = r0
            r5.<init>(r6, r7, r8, r9, r10)
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: nk.c.a(byte[]):jk.e");
    }

    private static void b(jk.c cVar, i iVar) {
        int d10;
        int[] iArr = new int[3];
        while (cVar.a() != 8 && (d10 = cVar.d(8)) != 254) {
            i(d10, cVar.d(8), iArr);
            for (int i10 = 0; i10 < 3; i10++) {
                int i11 = iArr[i10];
                if (i11 != 0) {
                    if (i11 != 1) {
                        if (i11 != 2) {
                            if (i11 != 3) {
                                if (i11 < 14) {
                                    iVar.b((char) (i11 + 44));
                                } else if (i11 < 40) {
                                    iVar.b((char) (i11 + 51));
                                } else {
                                    throw g.a();
                                }
                            } else {
                                iVar.b(' ');
                            }
                        } else {
                            iVar.b('>');
                        }
                    } else {
                        iVar.b('*');
                    }
                } else {
                    iVar.b('\r');
                }
            }
            if (cVar.a() <= 0) {
                return;
            }
        }
    }

    private static b c(jk.c cVar, i iVar, StringBuilder sb2, Set set) {
        boolean z10 = false;
        do {
            int d10 = cVar.d(8);
            if (d10 != 0) {
                if (d10 <= 128) {
                    if (z10) {
                        d10 += IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                    }
                    iVar.b((char) (d10 - 1));
                    return b.ASCII_ENCODE;
                } else if (d10 == 129) {
                    return b.PAD_ENCODE;
                } else {
                    if (d10 <= 229) {
                        int i10 = d10 - 130;
                        if (i10 < 10) {
                            iVar.b('0');
                        }
                        iVar.c(i10);
                    } else {
                        switch (d10) {
                            case 230:
                                return b.C40_ENCODE;
                            case 231:
                                return b.BASE256_ENCODE;
                            case 232:
                                set.add(Integer.valueOf(iVar.i()));
                                iVar.b((char) 29);
                                break;
                            case 233:
                            case 234:
                                break;
                            case 235:
                                z10 = true;
                                break;
                            case 236:
                                iVar.d("[)>\u001e05\u001d");
                                sb2.insert(0, "\u001e\u0004");
                                break;
                            case 237:
                                iVar.d("[)>\u001e06\u001d");
                                sb2.insert(0, "\u001e\u0004");
                                break;
                            case 238:
                                return b.ANSIX12_ENCODE;
                            case 239:
                                return b.TEXT_ENCODE;
                            case 240:
                                return b.EDIFACT_ENCODE;
                            case 241:
                                return b.ECI_ENCODE;
                            default:
                                if (d10 != 254 || cVar.a() != 0) {
                                    throw g.a();
                                }
                                break;
                        }
                    }
                }
            } else {
                throw g.a();
            }
        } while (cVar.a() > 0);
        return b.ASCII_ENCODE;
    }

    private static void d(jk.c cVar, i iVar, Collection collection) {
        int c10 = cVar.c();
        int i10 = c10 + 2;
        int j10 = j(cVar.d(8), c10 + 1);
        if (j10 == 0) {
            j10 = cVar.a() / 8;
        } else if (j10 >= 250) {
            j10 = ((j10 - 249) * h.DEFAULT_SWIPE_ANIMATION_DURATION) + j(cVar.d(8), i10);
            i10 = c10 + 3;
        }
        if (j10 >= 0) {
            byte[] bArr = new byte[j10];
            int i11 = 0;
            while (i11 < j10) {
                if (cVar.a() >= 8) {
                    bArr[i11] = (byte) j(cVar.d(8), i10);
                    i11++;
                    i10++;
                } else {
                    throw g.a();
                }
            }
            collection.add(bArr);
            iVar.d(new String(bArr, StandardCharsets.ISO_8859_1));
            return;
        }
        throw g.a();
    }

    private static void e(jk.c cVar, i iVar, Set set) {
        int d10;
        int[] iArr = new int[3];
        boolean z10 = false;
        int i10 = 0;
        while (cVar.a() != 8 && (d10 = cVar.d(8)) != 254) {
            i(d10, cVar.d(8), iArr);
            for (int i11 = 0; i11 < 3; i11++) {
                int i12 = iArr[i11];
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                if (z10) {
                                    iVar.b((char) (i12 + 224));
                                    z10 = false;
                                    i10 = 0;
                                } else {
                                    iVar.b((char) (i12 + 96));
                                    i10 = 0;
                                }
                            } else {
                                throw g.a();
                            }
                        } else {
                            char[] cArr = f41343b;
                            if (i12 < cArr.length) {
                                char c10 = cArr[i12];
                                if (z10) {
                                    iVar.b((char) (c10 + 128));
                                    z10 = false;
                                } else {
                                    iVar.b(c10);
                                }
                            } else if (i12 != 27) {
                                if (i12 == 30) {
                                    z10 = true;
                                } else {
                                    throw g.a();
                                }
                            } else {
                                set.add(Integer.valueOf(iVar.i()));
                                iVar.b((char) 29);
                            }
                            i10 = 0;
                        }
                    } else if (z10) {
                        iVar.b((char) (i12 + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                        z10 = false;
                        i10 = 0;
                    } else {
                        iVar.b((char) i12);
                        i10 = 0;
                    }
                } else if (i12 < 3) {
                    i10 = i12 + 1;
                } else {
                    char[] cArr2 = f41342a;
                    if (i12 < cArr2.length) {
                        char c11 = cArr2[i12];
                        if (z10) {
                            iVar.b((char) (c11 + 128));
                            z10 = false;
                        } else {
                            iVar.b(c11);
                        }
                    } else {
                        throw g.a();
                    }
                }
            }
            if (cVar.a() <= 0) {
                return;
            }
        }
    }

    private static void f(jk.c cVar, i iVar) {
        if (cVar.a() >= 8) {
            int d10 = cVar.d(8);
            if (d10 <= 127) {
                iVar.f(d10 - 1);
                return;
            }
            return;
        }
        throw g.a();
    }

    private static void g(jk.c cVar, i iVar) {
        while (cVar.a() > 16) {
            for (int i10 = 0; i10 < 4; i10++) {
                int d10 = cVar.d(6);
                if (d10 == 31) {
                    int b10 = 8 - cVar.b();
                    if (b10 != 8) {
                        cVar.d(b10);
                        return;
                    }
                    return;
                }
                if ((d10 & 32) == 0) {
                    d10 |= 64;
                }
                iVar.b((char) d10);
            }
            if (cVar.a() <= 0) {
                return;
            }
        }
    }

    private static void h(jk.c cVar, i iVar, Set set) {
        int d10;
        int[] iArr = new int[3];
        boolean z10 = false;
        int i10 = 0;
        while (cVar.a() != 8 && (d10 = cVar.d(8)) != 254) {
            i(d10, cVar.d(8), iArr);
            for (int i11 = 0; i11 < 3; i11++) {
                int i12 = iArr[i11];
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                char[] cArr = f41346e;
                                if (i12 < cArr.length) {
                                    char c10 = cArr[i12];
                                    if (z10) {
                                        iVar.b((char) (c10 + 128));
                                        z10 = false;
                                        i10 = 0;
                                    } else {
                                        iVar.b(c10);
                                        i10 = 0;
                                    }
                                } else {
                                    throw g.a();
                                }
                            } else {
                                throw g.a();
                            }
                        } else {
                            char[] cArr2 = f41345d;
                            if (i12 < cArr2.length) {
                                char c11 = cArr2[i12];
                                if (z10) {
                                    iVar.b((char) (c11 + 128));
                                    z10 = false;
                                } else {
                                    iVar.b(c11);
                                }
                            } else if (i12 != 27) {
                                if (i12 == 30) {
                                    z10 = true;
                                } else {
                                    throw g.a();
                                }
                            } else {
                                set.add(Integer.valueOf(iVar.i()));
                                iVar.b((char) 29);
                            }
                            i10 = 0;
                        }
                    } else if (z10) {
                        iVar.b((char) (i12 + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
                        z10 = false;
                        i10 = 0;
                    } else {
                        iVar.b((char) i12);
                        i10 = 0;
                    }
                } else if (i12 < 3) {
                    i10 = i12 + 1;
                } else {
                    char[] cArr3 = f41344c;
                    if (i12 < cArr3.length) {
                        char c12 = cArr3[i12];
                        if (z10) {
                            iVar.b((char) (c12 + 128));
                            z10 = false;
                        } else {
                            iVar.b(c12);
                        }
                    } else {
                        throw g.a();
                    }
                }
            }
            if (cVar.a() <= 0) {
                return;
            }
        }
    }

    private static void i(int i10, int i11, int[] iArr) {
        int i12 = ((i10 << 8) + i11) - 1;
        int i13 = i12 / 1600;
        iArr[0] = i13;
        int i14 = i12 - (i13 * 1600);
        int i15 = i14 / 40;
        iArr[1] = i15;
        iArr[2] = i14 - (i15 * 40);
    }

    private static int j(int i10, int i11) {
        int i12 = i10 - (((i11 * 149) % SetSpanOperation.SPAN_MAX_PRIORITY) + 1);
        if (i12 >= 0) {
            return i12;
        }
        return i12 + IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
    }
}
