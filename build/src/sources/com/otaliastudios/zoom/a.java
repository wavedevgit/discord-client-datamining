package com.otaliastudios.zoom;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f17944a = new a();

    private a() {
    }

    public final int a(int i10) {
        return i10 & 240;
    }

    public final int b(int i10) {
        return i10 & (-241);
    }

    public final boolean c(int i10) {
        return i10 == 68 || i10 == 0 || i10 == 64 || i10 == 4;
    }

    public final int d(int i10, int i11) {
        int a10 = a(i10);
        if (a10 != 16) {
            if (a10 != 32) {
                if (a10 != 48) {
                    return i11;
                }
                return 1;
            }
            return 5;
        }
        return 3;
    }

    public final int e(int i10, int i11) {
        int b10 = b(i10);
        if (b10 != 1) {
            if (b10 != 2) {
                if (b10 != 3) {
                    return i11;
                }
                return 16;
            }
            return 80;
        }
        return 48;
    }
}
