package l5;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f35839a;

    /* renamed from: b  reason: collision with root package name */
    private final Throwable f35840b;

    public b0(Object obj) {
        this.f35839a = obj;
        this.f35840b = null;
    }

    public Throwable a() {
        return this.f35840b;
    }

    public Object b() {
        return this.f35839a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof b0)) {
            return false;
        }
        b0 b0Var = (b0) obj;
        if (b() != null && b().equals(b0Var.b())) {
            return true;
        }
        if (a() == null || b0Var.a() == null) {
            return false;
        }
        return a().toString().equals(a().toString());
    }

    public int hashCode() {
        return Arrays.hashCode(new Object[]{b(), a()});
    }

    public b0(Throwable th2) {
        this.f35840b = th2;
        this.f35839a = null;
    }
}
