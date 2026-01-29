package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j5 implements Comparable {
    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(j5 j5Var) {
        return Long.valueOf(h()).compareTo(Long.valueOf(j5Var.h()));
    }

    public long d(j5 j5Var) {
        return h() - j5Var.h();
    }

    public final boolean e(j5 j5Var) {
        if (d(j5Var) > 0) {
            return true;
        }
        return false;
    }

    public final boolean f(j5 j5Var) {
        if (d(j5Var) < 0) {
            return true;
        }
        return false;
    }

    public long g(j5 j5Var) {
        if (j5Var != null && compareTo(j5Var) < 0) {
            return j5Var.h();
        }
        return h();
    }

    public abstract long h();
}
