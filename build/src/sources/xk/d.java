package xk;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import gk.n;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final char[] f53430a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".toCharArray();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f53431a;

        static {
            int[] iArr = new int[h.values().length];
            f53431a = iArr;
            try {
                iArr[h.NUMERIC.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f53431a[h.ALPHANUMERIC.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f53431a[h.BYTE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f53431a[h.KANJI.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f53431a[h.TERMINATOR.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f53431a[h.FNC1_FIRST_POSITION.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f53431a[h.FNC1_SECOND_POSITION.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f53431a[h.STRUCTURED_APPEND.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f53431a[h.ECI.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f53431a[h.HANZI.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    public static gk.e a(byte[] bArr, j jVar, f fVar, Map map) {
        h a10;
        h hVar;
        int i10;
        StringBuilder sb2;
        int i11;
        String obj;
        byte[] bArr2 = bArr;
        gk.c cVar = new gk.c(bArr2);
        StringBuilder sb3 = new StringBuilder(50);
        int i12 = 1;
        ArrayList arrayList = new ArrayList(1);
        int i13 = -1;
        int i14 = -1;
        boolean z10 = false;
        boolean z11 = false;
        boolean z12 = false;
        gk.d dVar = null;
        while (true) {
            try {
                if (cVar.a() < 4) {
                    a10 = h.TERMINATOR;
                } else {
                    a10 = h.a(cVar.d(4));
                }
                int[] iArr = a.f53431a;
                switch (iArr[a10.ordinal()]) {
                    case 5:
                        hVar = a10;
                        i10 = 4;
                        break;
                    case 6:
                        hVar = a10;
                        i10 = 4;
                        z10 = true;
                        z11 = true;
                        break;
                    case 7:
                        hVar = a10;
                        i10 = 4;
                        z10 = true;
                        z12 = true;
                        break;
                    case 8:
                        hVar = a10;
                        i10 = 4;
                        if (cVar.a() >= 16) {
                            i13 = cVar.d(8);
                            i14 = cVar.d(8);
                            break;
                        } else {
                            throw ck.g.a();
                        }
                    case 9:
                        hVar = a10;
                        i10 = 4;
                        dVar = gk.d.e(g(cVar));
                        if (dVar != null) {
                            break;
                        } else {
                            throw ck.g.a();
                        }
                    case 10:
                        hVar = a10;
                        i10 = 4;
                        int d10 = cVar.d(4);
                        int d11 = cVar.d(hVar.e(jVar));
                        if (d10 == 1) {
                            d(cVar, sb3, d11);
                            break;
                        }
                        break;
                    default:
                        int d12 = cVar.d(a10.e(jVar));
                        int i15 = iArr[a10.ordinal()];
                        if (i15 != 1) {
                            if (i15 != 2) {
                                if (i15 != 3) {
                                    if (i15 == 4) {
                                        e(cVar, sb3, d12);
                                        hVar = a10;
                                    } else {
                                        throw ck.g.a();
                                    }
                                } else {
                                    hVar = a10;
                                    c(cVar, sb3, d12, dVar, arrayList, map);
                                }
                            } else {
                                hVar = a10;
                                b(cVar, sb3, d12, z10);
                            }
                        } else {
                            hVar = a10;
                            f(cVar, sb3, d12);
                        }
                        i10 = 4;
                        break;
                }
                if (hVar == h.TERMINATOR) {
                    if (dVar != null) {
                        if (z11) {
                            sb2 = sb3;
                            i11 = i10;
                        } else if (z12) {
                            i12 = 6;
                            sb2 = sb3;
                            i11 = i12;
                        } else {
                            sb2 = sb3;
                            i11 = 2;
                        }
                    } else if (z11) {
                        sb2 = sb3;
                        i11 = 3;
                    } else {
                        if (z12) {
                            i12 = 5;
                        }
                        sb2 = sb3;
                        i11 = i12;
                    }
                    String sb4 = sb2.toString();
                    if (arrayList.isEmpty()) {
                        arrayList = null;
                    }
                    if (fVar == null) {
                        obj = null;
                    } else {
                        obj = fVar.toString();
                    }
                    return new gk.e(bArr2, sb4, arrayList, obj, i13, i14, i11);
                }
                bArr2 = bArr;
            } catch (IllegalArgumentException unused) {
                throw ck.g.a();
            }
        }
    }

    private static void b(gk.c cVar, StringBuilder sb2, int i10, boolean z10) {
        while (i10 > 1) {
            if (cVar.a() >= 11) {
                int d10 = cVar.d(11);
                sb2.append(h(d10 / 45));
                sb2.append(h(d10 % 45));
                i10 -= 2;
            } else {
                throw ck.g.a();
            }
        }
        if (i10 == 1) {
            if (cVar.a() >= 6) {
                sb2.append(h(cVar.d(6)));
            } else {
                throw ck.g.a();
            }
        }
        if (z10) {
            for (int length = sb2.length(); length < sb2.length(); length++) {
                if (sb2.charAt(length) == '%') {
                    if (length < sb2.length() - 1) {
                        int i11 = length + 1;
                        if (sb2.charAt(i11) == '%') {
                            sb2.deleteCharAt(i11);
                        }
                    }
                    sb2.setCharAt(length, (char) 29);
                }
            }
        }
    }

    private static void c(gk.c cVar, StringBuilder sb2, int i10, gk.d dVar, Collection collection, Map map) {
        Charset f10;
        if (i10 * 8 <= cVar.a()) {
            byte[] bArr = new byte[i10];
            for (int i11 = 0; i11 < i10; i11++) {
                bArr[i11] = (byte) cVar.d(8);
            }
            if (dVar == null) {
                f10 = n.a(bArr, map);
            } else {
                f10 = dVar.f();
            }
            sb2.append(new String(bArr, f10));
            collection.add(bArr);
            return;
        }
        throw ck.g.a();
    }

    private static void d(gk.c cVar, StringBuilder sb2, int i10) {
        int i11;
        if (n.f27035c != null) {
            if (i10 * 13 <= cVar.a()) {
                byte[] bArr = new byte[i10 * 2];
                int i12 = 0;
                while (i10 > 0) {
                    int d10 = cVar.d(13);
                    int i13 = (d10 % 96) | ((d10 / 96) << 8);
                    if (i13 < 2560) {
                        i11 = 41377;
                    } else {
                        i11 = 42657;
                    }
                    int i14 = i13 + i11;
                    bArr[i12] = (byte) ((i14 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
                    bArr[i12 + 1] = (byte) (i14 & SetSpanOperation.SPAN_MAX_PRIORITY);
                    i12 += 2;
                    i10--;
                }
                sb2.append(new String(bArr, n.f27035c));
                return;
            }
            throw ck.g.a();
        }
        throw ck.g.a();
    }

    private static void e(gk.c cVar, StringBuilder sb2, int i10) {
        int i11;
        if (n.f27034b != null) {
            if (i10 * 13 <= cVar.a()) {
                byte[] bArr = new byte[i10 * 2];
                int i12 = 0;
                while (i10 > 0) {
                    int d10 = cVar.d(13);
                    int i13 = (d10 % 192) | ((d10 / 192) << 8);
                    if (i13 < 7936) {
                        i11 = 33088;
                    } else {
                        i11 = 49472;
                    }
                    int i14 = i13 + i11;
                    bArr[i12] = (byte) (i14 >> 8);
                    bArr[i12 + 1] = (byte) i14;
                    i12 += 2;
                    i10--;
                }
                sb2.append(new String(bArr, n.f27034b));
                return;
            }
            throw ck.g.a();
        }
        throw ck.g.a();
    }

    private static void f(gk.c cVar, StringBuilder sb2, int i10) {
        while (i10 >= 3) {
            if (cVar.a() >= 10) {
                int d10 = cVar.d(10);
                if (d10 < 1000) {
                    sb2.append(h(d10 / 100));
                    sb2.append(h((d10 / 10) % 10));
                    sb2.append(h(d10 % 10));
                    i10 -= 3;
                } else {
                    throw ck.g.a();
                }
            } else {
                throw ck.g.a();
            }
        }
        if (i10 == 2) {
            if (cVar.a() >= 7) {
                int d11 = cVar.d(7);
                if (d11 < 100) {
                    sb2.append(h(d11 / 10));
                    sb2.append(h(d11 % 10));
                    return;
                }
                throw ck.g.a();
            }
            throw ck.g.a();
        } else if (i10 == 1) {
            if (cVar.a() >= 4) {
                int d12 = cVar.d(4);
                if (d12 < 10) {
                    sb2.append(h(d12));
                    return;
                }
                throw ck.g.a();
            }
            throw ck.g.a();
        }
    }

    private static int g(gk.c cVar) {
        int d10 = cVar.d(8);
        if ((d10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
            return d10 & 127;
        }
        if ((d10 & 192) == 128) {
            return cVar.d(8) | ((d10 & 63) << 8);
        }
        if ((d10 & 224) == 192) {
            return cVar.d(16) | ((d10 & 31) << 16);
        }
        throw ck.g.a();
    }

    private static char h(int i10) {
        char[] cArr = f53430a;
        if (i10 < cArr.length) {
            return cArr[i10];
        }
        throw ck.g.a();
    }
}
