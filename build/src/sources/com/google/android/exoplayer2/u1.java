package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.u1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class u1 implements g {

    /* renamed from: d  reason: collision with root package name */
    static final String f13796d = ne.w0.B0(0);

    /* renamed from: e  reason: collision with root package name */
    public static final g.a f13797e = new g.a() { // from class: lc.q0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            u1 b10;
            b10 = u1.b(bundle);
            return b10;
        }
    };

    /* JADX INFO: Access modifiers changed from: private */
    public static u1 b(Bundle bundle) {
        int i10 = bundle.getInt(f13796d, -1);
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return (u1) a2.f12669r.a(bundle);
                    }
                    throw new IllegalArgumentException("Unknown RatingType: " + i10);
                }
                return (u1) x1.f14181r.a(bundle);
            }
            return (u1) p1.f13341p.a(bundle);
        }
        return (u1) u0.f13793r.a(bundle);
    }
}
