package com.google.android.gms.internal.fido;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import java.io.IOException;
import java.io.InputStream;
import java.util.TreeMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m5 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static final l5 a(InputStream inputStream, o5 o5Var) {
        try {
            return b(inputStream, o5Var);
        } finally {
            try {
                o5Var.close();
            } catch (IOException unused) {
            }
        }
    }

    private static final l5 b(InputStream inputStream, o5 o5Var) {
        long j10;
        try {
            n5 m10 = o5Var.m();
            if (m10 != null) {
                try {
                    byte a10 = m10.a();
                    byte b10 = m10.b();
                    int i10 = 0;
                    if (b10 != Byte.MIN_VALUE) {
                        if (b10 != -96) {
                            if (b10 != -64) {
                                if (b10 != -32) {
                                    if (b10 != 0 && b10 != 32) {
                                        if (b10 != 64) {
                                            if (b10 == 96) {
                                                String o10 = o5Var.o();
                                                c(a10, o10.length(), inputStream, o5Var);
                                                return new j5(o10);
                                            }
                                            throw new f5("Unidentifiable major type: " + m10.c());
                                        }
                                        byte[] E = o5Var.E();
                                        int length = E.length;
                                        c(a10, length, inputStream, o5Var);
                                        return new e5(v4.n(E, 0, length));
                                    }
                                    long h10 = o5Var.h();
                                    if (h10 > 0) {
                                        j10 = h10;
                                    } else {
                                        j10 = ~h10;
                                    }
                                    c(a10, j10, inputStream, o5Var);
                                    return new g5(h10);
                                }
                                return new d5(o5Var.y());
                            }
                            throw new f5("Tags are currently unsupported");
                        }
                        long k10 = o5Var.k();
                        if (k10 <= 1000) {
                            c(a10, k10, inputStream, o5Var);
                            int i11 = (int) k10;
                            h5[] h5VarArr = new h5[i11];
                            l5 l5Var = null;
                            int i12 = 0;
                            while (i12 < k10) {
                                l5 b11 = b(inputStream, o5Var);
                                if (l5Var != null && b11.compareTo(l5Var) <= 0) {
                                    throw new b5(String.format("Keys in CBOR Map not in strictly ascending natural order:\nPrevious key: %s\nCurrent key: %s", l5Var.toString(), b11.toString()));
                                }
                                h5VarArr[i12] = new h5(b11, b(inputStream, o5Var));
                                i12++;
                                l5Var = b11;
                            }
                            TreeMap treeMap = new TreeMap();
                            while (i10 < i11) {
                                h5 h5Var = h5VarArr[i10];
                                if (!treeMap.containsKey(h5Var.a())) {
                                    treeMap.put(h5Var.a(), h5Var.b());
                                    i10++;
                                } else {
                                    throw new b5("Attempted to add duplicate key to canonical CBOR Map.");
                                }
                            }
                            return new i5(l1.e(treeMap));
                        }
                        throw new f5("Parser being asked to read a large CBOR map");
                    }
                    long a11 = o5Var.a();
                    if (a11 <= 1000) {
                        c(a10, a11, inputStream, o5Var);
                        l5[] l5VarArr = new l5[(int) a11];
                        while (i10 < a11) {
                            l5VarArr[i10] = b(inputStream, o5Var);
                            i10++;
                        }
                        return new c5(e1.j(l5VarArr));
                    }
                    throw new f5("Parser being asked to read a large CBOR array");
                } catch (IOException e10) {
                    e = e10;
                    throw new f5("Error in decoding CborValue from bytes", e);
                } catch (RuntimeException e11) {
                    e = e11;
                    throw new f5("Error in decoding CborValue from bytes", e);
                }
            }
            throw new f5("Parser being asked to parse an empty input stream");
        } catch (IOException e12) {
            throw new f5("Error in decoding CborValue from bytes", e12);
        }
    }

    private static final void c(byte b10, long j10, InputStream inputStream, o5 o5Var) {
        switch (b10) {
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                if (j10 >= 24) {
                    return;
                }
                throw new b5("Integer value " + j10 + " after add info could have been represented in 0 additional bytes, but used 1");
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                if (j10 < 256) {
                    throw new b5("Integer value " + j10 + " after add info could have been represented in 0-1 additional bytes, but used 2");
                }
                return;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                if (j10 < 65536) {
                    throw new b5("Integer value " + j10 + " after add info could have been represented in 0-2 additional bytes, but used 4");
                }
                return;
            case 27:
                if (j10 < 4294967296L) {
                    throw new b5("Integer value " + j10 + " after add info could have been represented in 0-4 additional bytes, but used 8");
                }
                return;
            default:
                return;
        }
    }
}
