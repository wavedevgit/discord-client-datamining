package com.google.android.exoplayer2.upstream;

import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import com.google.android.exoplayer2.upstream.j;
import java.io.FileNotFoundException;
import java.io.IOException;
import lc.l0;
import le.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g implements i {

    /* renamed from: a  reason: collision with root package name */
    private final int f13405a;

    public g() {
        this(-1);
    }

    @Override // com.google.android.exoplayer2.upstream.i
    public long a(i.c cVar) {
        IOException iOException = cVar.f13424c;
        if (!(iOException instanceof l0) && !(iOException instanceof FileNotFoundException) && !(iOException instanceof h.b) && !(iOException instanceof j.h) && !m.a(iOException)) {
            return Math.min((cVar.f13425d - 1) * 1000, 5000);
        }
        return -9223372036854775807L;
    }

    @Override // com.google.android.exoplayer2.upstream.i
    public int b(int i10) {
        int i11 = this.f13405a;
        if (i11 == -1) {
            if (i10 == 7) {
                return 6;
            }
            return 3;
        }
        return i11;
    }

    @Override // com.google.android.exoplayer2.upstream.i
    public i.b c(i.a aVar, i.c cVar) {
        if (!e(cVar.f13424c)) {
            return null;
        }
        if (aVar.a(1)) {
            return new i.b(1, LogThrottleSingleton.RATE_LIMIT_FIVE_MINUTES);
        }
        if (!aVar.a(2)) {
            return null;
        }
        return new i.b(2, LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE);
    }

    protected boolean e(IOException iOException) {
        if (!(iOException instanceof h.f)) {
            return false;
        }
        int i10 = ((h.f) iOException).f13410o;
        if (i10 != 403 && i10 != 404 && i10 != 410 && i10 != 416 && i10 != 500 && i10 != 503) {
            return false;
        }
        return true;
    }

    public g(int i10) {
        this.f13405a = i10;
    }
}
