package io.sentry;

import java.util.Date;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c7 extends j5 {

    /* renamed from: d  reason: collision with root package name */
    private final Date f28786d;

    /* renamed from: e  reason: collision with root package name */
    private final long f28787e;

    public c7() {
        this(k.d(), System.nanoTime());
    }

    private long i(c7 c7Var, c7 c7Var2) {
        return c7Var.h() + (c7Var2.f28787e - c7Var.f28787e);
    }

    @Override // io.sentry.j5, java.lang.Comparable
    /* renamed from: a */
    public int compareTo(j5 j5Var) {
        if (j5Var instanceof c7) {
            c7 c7Var = (c7) j5Var;
            long time = this.f28786d.getTime();
            long time2 = c7Var.f28786d.getTime();
            if (time == time2) {
                return Long.valueOf(this.f28787e).compareTo(Long.valueOf(c7Var.f28787e));
            }
            return Long.valueOf(time).compareTo(Long.valueOf(time2));
        }
        return super.compareTo(j5Var);
    }

    @Override // io.sentry.j5
    public long d(j5 j5Var) {
        if (j5Var instanceof c7) {
            return this.f28787e - ((c7) j5Var).f28787e;
        }
        return super.d(j5Var);
    }

    @Override // io.sentry.j5
    public long g(j5 j5Var) {
        if (j5Var != null && (j5Var instanceof c7)) {
            c7 c7Var = (c7) j5Var;
            if (compareTo(j5Var) < 0) {
                return i(this, c7Var);
            }
            return i(c7Var, this);
        }
        return super.g(j5Var);
    }

    @Override // io.sentry.j5
    public long h() {
        return k.a(this.f28786d);
    }

    public c7(Date date, long j10) {
        this.f28786d = date;
        this.f28787e = j10;
    }
}
