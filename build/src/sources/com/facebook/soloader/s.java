package com.facebook.soloader;

import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.channels.ClosedByInterruptException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s {

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends UnsatisfiedLinkError {
        a(String str) {
            super(str);
        }
    }

    public static String[] a(h hVar) {
        if (hVar instanceof i) {
            return c((i) hVar);
        }
        return b(hVar);
    }

    private static String[] b(h hVar) {
        long g10;
        long d10;
        long j10;
        long f10;
        long j11;
        long j12;
        long d11;
        long j13;
        long j14;
        long d12;
        long j15;
        long d13;
        long j16;
        long g11;
        long j17;
        long d14;
        long j18;
        long d15;
        long d16;
        long g12;
        long d17;
        ByteBuffer allocate = ByteBuffer.allocate(8);
        allocate.order(ByteOrder.LITTLE_ENDIAN);
        if (g(hVar, allocate, 0L) == 1179403647) {
            boolean z10 = true;
            if (h(hVar, allocate, 4L) != 1) {
                z10 = false;
            }
            long j19 = 5;
            if (h(hVar, allocate, 5L) == 2) {
                allocate.order(ByteOrder.BIG_ENDIAN);
            }
            if (z10) {
                d10 = g(hVar, allocate, 28L);
            } else {
                d10 = d(hVar, allocate, 32L);
            }
            if (z10) {
                j10 = 44;
                f10 = f(hVar, allocate, 44L);
            } else {
                j10 = 44;
                f10 = f(hVar, allocate, 56L);
            }
            if (z10) {
                j11 = 42;
            } else {
                j11 = 54;
            }
            int f11 = f(hVar, allocate, j11);
            boolean z11 = z10;
            long j20 = 40;
            if (f10 == 65535) {
                if (z11) {
                    d17 = g(hVar, allocate, 32L);
                } else {
                    d17 = d(hVar, allocate, 40L);
                }
                if (z11) {
                    f10 = g(hVar, allocate, d17 + 28);
                } else {
                    f10 = g(hVar, allocate, d17 + j10);
                }
            }
            long j21 = d10;
            long j22 = 0;
            while (true) {
                if (j22 < f10) {
                    if (z11) {
                        g12 = g(hVar, allocate, j21);
                    } else {
                        g12 = g(hVar, allocate, j21);
                    }
                    if (g12 == 2) {
                        if (z11) {
                            j12 = g(hVar, allocate, j21 + 4);
                        } else {
                            j12 = d(hVar, allocate, j21 + 8);
                        }
                    } else {
                        j21 += f11;
                        j22++;
                        j20 = j20;
                    }
                } else {
                    j12 = 0;
                    break;
                }
            }
            long j23 = j20;
            if (j12 != 0) {
                long j24 = j12;
                long j25 = 0;
                int i10 = 0;
                while (true) {
                    if (z11) {
                        d11 = g(hVar, allocate, j24);
                    } else {
                        d11 = d(hVar, allocate, j24);
                    }
                    long j26 = j19;
                    if (d11 == 1) {
                        if (i10 != Integer.MAX_VALUE) {
                            i10++;
                        } else {
                            throw new a("malformed DT_NEEDED section");
                        }
                    } else if (d11 == j26) {
                        if (z11) {
                            j25 = g(hVar, allocate, j24 + 4);
                        } else {
                            j25 = d(hVar, allocate, j24 + 8);
                        }
                    }
                    if (z11) {
                        j13 = 8;
                    } else {
                        j13 = 16;
                    }
                    j24 += j13;
                    if (d11 == 0) {
                        if (j25 != 0) {
                            int i11 = 0;
                            while (true) {
                                if (i11 < f10) {
                                    if (z11) {
                                        j16 = d10;
                                        g11 = g(hVar, allocate, j16);
                                    } else {
                                        j16 = d10;
                                        g11 = g(hVar, allocate, j16);
                                    }
                                    if (g11 == 1) {
                                        if (z11) {
                                            j17 = f10;
                                            d14 = g(hVar, allocate, j16 + 8);
                                        } else {
                                            j17 = f10;
                                            d14 = d(hVar, allocate, j16 + 16);
                                        }
                                        if (z11) {
                                            j18 = d14;
                                            d15 = g(hVar, allocate, j16 + 20);
                                        } else {
                                            j18 = d14;
                                            d15 = d(hVar, allocate, j16 + j23);
                                        }
                                        if (j18 <= j25 && j25 < j18 + d15) {
                                            if (z11) {
                                                d16 = g(hVar, allocate, j16 + 4);
                                            } else {
                                                d16 = d(hVar, allocate, j16 + 8);
                                            }
                                            j14 = d16 + (j25 - j18);
                                        }
                                    } else {
                                        j17 = f10;
                                    }
                                    d10 = j16 + f11;
                                    i11++;
                                    f10 = j17;
                                } else {
                                    j14 = 0;
                                    break;
                                }
                            }
                            if (j14 != 0) {
                                String[] strArr = new String[i10];
                                int i12 = 0;
                                do {
                                    if (z11) {
                                        d12 = g(hVar, allocate, j12);
                                    } else {
                                        d12 = d(hVar, allocate, j12);
                                    }
                                    if (d12 == 1) {
                                        if (z11) {
                                            d13 = g(hVar, allocate, j12 + 4);
                                        } else {
                                            d13 = d(hVar, allocate, j12 + 8);
                                        }
                                        strArr[i12] = e(hVar, allocate, d13 + j14);
                                        if (i12 != Integer.MAX_VALUE) {
                                            i12++;
                                        } else {
                                            throw new a("malformed DT_NEEDED section");
                                        }
                                    }
                                    if (z11) {
                                        j15 = 8;
                                    } else {
                                        j15 = 16;
                                    }
                                    j12 += j15;
                                } while (d12 != 0);
                                if (i12 == i10) {
                                    return strArr;
                                }
                                throw new a("malformed DT_NEEDED section");
                            }
                            throw new a("did not find file offset of DT_STRTAB table");
                        }
                        throw new a("Dynamic section string-table not found");
                    }
                    j19 = j26;
                }
            } else {
                throw new a("ELF file does not contain dynamic linking information");
            }
        } else {
            throw new a("file is not ELF: magic is 0x" + Long.toHexString(g10) + ", it should be " + Long.toHexString(1179403647L));
        }
    }

    private static String[] c(i iVar) {
        int i10 = 0;
        while (true) {
            try {
                return b(iVar);
            } catch (ClosedByInterruptException e10) {
                i10++;
                if (i10 <= 4) {
                    Thread.interrupted();
                    p.c("MinElf", "retrying extract_DT_NEEDED due to ClosedByInterruptException", e10);
                    iVar.a();
                } else {
                    throw e10;
                }
            }
        }
    }

    private static long d(h hVar, ByteBuffer byteBuffer, long j10) {
        i(hVar, byteBuffer, 8, j10);
        return byteBuffer.getLong();
    }

    private static String e(h hVar, ByteBuffer byteBuffer, long j10) {
        StringBuilder sb2 = new StringBuilder();
        while (true) {
            long j11 = 1 + j10;
            short h10 = h(hVar, byteBuffer, j10);
            if (h10 != 0) {
                sb2.append((char) h10);
                j10 = j11;
            } else {
                return sb2.toString();
            }
        }
    }

    private static int f(h hVar, ByteBuffer byteBuffer, long j10) {
        i(hVar, byteBuffer, 2, j10);
        return byteBuffer.getShort() & 65535;
    }

    private static long g(h hVar, ByteBuffer byteBuffer, long j10) {
        i(hVar, byteBuffer, 4, j10);
        return byteBuffer.getInt() & 4294967295L;
    }

    private static short h(h hVar, ByteBuffer byteBuffer, long j10) {
        i(hVar, byteBuffer, 1, j10);
        return (short) (byteBuffer.get() & 255);
    }

    private static void i(h hVar, ByteBuffer byteBuffer, int i10, long j10) {
        int i02;
        byteBuffer.position(0);
        byteBuffer.limit(i10);
        while (byteBuffer.remaining() > 0 && (i02 = hVar.i0(byteBuffer, j10)) != -1) {
            j10 += i02;
        }
        if (byteBuffer.remaining() <= 0) {
            byteBuffer.position(0);
            return;
        }
        throw new a("ELF file truncated");
    }
}
