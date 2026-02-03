package com.google.android.exoplayer2.upstream;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.google.android.exoplayer2.upstream.g;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import java.io.FileNotFoundException;
import java.io.IOException;
import lc.l0;
import le.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements h {

    /* renamed from: a  reason: collision with root package name */
    private final int f14091a;

    public f() {
        this(-1);
    }

    @Override // com.google.android.exoplayer2.upstream.h
    public long a(h.c cVar) {
        IOException iOException = cVar.f14110c;
        if (!(iOException instanceof l0) && !(iOException instanceof FileNotFoundException) && !(iOException instanceof g.b) && !(iOException instanceof i.h) && !m.a(iOException)) {
            return Math.min((cVar.f14111d - 1) * 1000, 5000);
        }
        return -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.upstream.h
    public int b(int i10) {
        int i11 = this.f14091a;
        if (i11 == -1) {
            if (i10 == 7) {
                return 6;
            }
            return 3;
        }
        return i11;
    }

    @Override // com.google.android.exoplayer2.upstream.h
    public h.b c(h.a aVar, h.c cVar) {
        if (!e(cVar.f14110c)) {
            return null;
        }
        if (aVar.a(1)) {
            return new h.b(1, LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES);
        }
        if (!aVar.a(2)) {
            return null;
        }
        return new h.b(2, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
    }

    protected boolean e(IOException iOException) {
        if (!(iOException instanceof g.f)) {
            return false;
        }
        int i10 = ((g.f) iOException).f14096o;
        if (i10 != 403 && i10 != 404 && i10 != 410 && i10 != 416 && i10 != 500 && i10 != 503) {
            return false;
        }
        return true;
    }

    public f(int i10) {
        this.f14091a = i10;
    }
}
