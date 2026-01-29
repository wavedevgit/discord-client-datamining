package com.google.android.exoplayer2;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface w1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(v1 v1Var);
    }

    static int F(int i10) {
        return i10 & 7;
    }

    static int b(int i10) {
        return u(i10, 0, 0);
    }

    static int i(int i10) {
        return i10 & 384;
    }

    static int k(int i10, int i11, int i12, int i13, int i14) {
        return i10 | i11 | i12 | i13 | i14;
    }

    static int l(int i10) {
        return i10 & 32;
    }

    static int m(int i10) {
        return i10 & 24;
    }

    static int r(int i10) {
        return i10 & 64;
    }

    static int u(int i10, int i11, int i12) {
        return k(i10, i11, i12, 0, IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
    }

    void E(a aVar);

    int a(Format format);

    int e();

    void g();

    String getName();

    int x();
}
