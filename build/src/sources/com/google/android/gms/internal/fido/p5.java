package com.google.android.gms.internal.fido;

import java.io.IOException;
import java.util.ArrayDeque;
import java.util.Deque;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p5 {

    /* renamed from: a  reason: collision with root package name */
    private final Deque f14047a = new ArrayDeque(16);

    private p5(boolean z10) {
    }

    public static p5 a() {
        return new p5(false);
    }

    private final long h() {
        if (this.f14047a.isEmpty()) {
            return 0L;
        }
        return ((Long) this.f14047a.peek()).longValue();
    }

    private final void i(long j10) {
        this.f14047a.pop();
        this.f14047a.push(Long.valueOf(j10));
    }

    public final void b() {
        if (this.f14047a.isEmpty()) {
            return;
        }
        throw new IOException(String.format("data item not completed, stackSize: %s scope: %s", Integer.valueOf(this.f14047a.size()), Long.valueOf(h())));
    }

    public final void c() {
        long h10 = h();
        if (h10 < 0) {
            if (h10 != -5) {
                this.f14047a.pop();
                return;
            }
            throw new IOException("expected a value for dangling key in indefinite-length map");
        }
        throw new IOException(String.format("expected indefinite length scope but found %s", Long.valueOf(h10)));
    }

    public final void d() {
        long h10 = h();
        if (h10 != -1) {
            if (h10 != -2) {
                return;
            }
            h10 = -2;
        }
        throw new IOException(String.format("expected non-string scope but found %s", Long.valueOf(h10)));
    }

    public final void e(long j10) {
        long h10 = h();
        if (h10 != j10) {
            if (h10 != -1) {
                if (h10 == -2) {
                    h10 = -2;
                } else {
                    return;
                }
            }
            throw new IOException(String.format("expected non-string scope or scope %s but found %s", Long.valueOf(j10), Long.valueOf(h10)));
        }
    }

    public final void f() {
        long h10 = h();
        int i10 = (h10 > 1L ? 1 : (h10 == 1L ? 0 : -1));
        if (i10 == 0) {
            this.f14047a.pop();
        } else if (i10 > 0) {
            i(h10 - 1);
        } else if (h10 == -4) {
            i(-5L);
        } else if (h10 == -5) {
            i(-4L);
        }
    }

    public final void g(long j10) {
        this.f14047a.push(Long.valueOf(j10));
    }
}
