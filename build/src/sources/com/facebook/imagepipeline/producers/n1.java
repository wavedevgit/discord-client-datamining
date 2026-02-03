package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.common.ResizeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n1 {

    /* renamed from: a  reason: collision with root package name */
    public static final n1 f11493a = new n1();

    private n1() {
    }

    public static final int a(int i10) {
        return (int) (i10 * 1.3333334f);
    }

    public static final boolean b(int i10, int i11, ResizeOptions resizeOptions) {
        if (resizeOptions == null) {
            if (a(i10) < 2048.0f || a(i11) < 2048) {
                return false;
            }
            return true;
        } else if (a(i10) < resizeOptions.f11094a || a(i11) < resizeOptions.f11095b) {
            return false;
        } else {
            return true;
        }
    }

    public static final boolean c(sa.k kVar, ResizeOptions resizeOptions) {
        if (kVar == null) {
            return false;
        }
        int q12 = kVar.q1();
        if (q12 != 90 && q12 != 270) {
            return b(kVar.getWidth(), kVar.getHeight(), resizeOptions);
        }
        return b(kVar.getHeight(), kVar.getWidth(), resizeOptions);
    }
}
