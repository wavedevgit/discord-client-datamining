package com.google.android.gms.internal.play_billing;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class u3 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static String a(r0 r0Var) {
        StringBuilder sb2 = new StringBuilder(r0Var.d());
        for (int i10 = 0; i10 < r0Var.d(); i10++) {
            byte b10 = r0Var.b(i10);
            if (b10 != 34) {
                if (b10 != 39) {
                    if (b10 != 92) {
                        switch (b10) {
                            case 7:
                                sb2.append("\\a");
                                continue;
                            case 8:
                                sb2.append("\\b");
                                continue;
                            case 9:
                                sb2.append("\\t");
                                continue;
                            case 10:
                                sb2.append("\\n");
                                continue;
                            case 11:
                                sb2.append("\\v");
                                continue;
                            case 12:
                                sb2.append("\\f");
                                continue;
                            case 13:
                                sb2.append("\\r");
                                continue;
                            default:
                                if (b10 >= 32 && b10 <= 126) {
                                    sb2.append((char) b10);
                                    continue;
                                } else {
                                    sb2.append('\\');
                                    sb2.append((char) (((b10 >>> 6) & 3) + 48));
                                    sb2.append((char) (((b10 >>> 3) & 7) + 48));
                                    sb2.append((char) ((b10 & 7) + 48));
                                    break;
                                }
                                break;
                        }
                    } else {
                        sb2.append("\\\\");
                    }
                } else {
                    sb2.append("\\'");
                }
            } else {
                sb2.append("\\\"");
            }
        }
        return sb2.toString();
    }
}
