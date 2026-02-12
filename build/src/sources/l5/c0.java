package l5;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f35572a;

    /* renamed from: b  reason: collision with root package name */
    private final Throwable f35573b;

    public c0(Object obj) {
        this.f35572a = obj;
        this.f35573b = null;
    }

    public Throwable a() {
        return this.f35573b;
    }

    public Object b() {
        return this.f35572a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c0)) {
            return false;
        }
        c0 c0Var = (c0) obj;
        if (b() != null && b().equals(c0Var.b())) {
            return true;
        }
        if (a() == null || c0Var.a() == null) {
            return false;
        }
        return a().toString().equals(a().toString());
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{b(), a()});
    }

    public c0(Throwable th2) {
        this.f35573b = th2;
        this.f35572a = null;
    }
}
