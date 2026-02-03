package a0;

import a0.h;
import android.util.Range;
import android.util.Size;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class m2 {

    /* renamed from: a  reason: collision with root package name */
    public static final Range f165a = new Range(0, 0);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {
        public abstract m2 a();

        public abstract a b(x.z zVar);

        public abstract a c(Range range);

        public abstract a d(r0 r0Var);

        public abstract a e(Size size);

        public abstract a f(boolean z10);
    }

    public static a a(Size size) {
        return new h.b().e(size).c(f165a).b(x.z.f53321d).f(false);
    }

    public abstract x.z b();

    public abstract Range c();

    public abstract r0 d();

    public abstract Size e();

    public abstract boolean f();

    public abstract a g();
}
