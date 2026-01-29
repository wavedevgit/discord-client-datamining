package a0;

import java.util.Collections;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class z1 {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f337a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f338b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f339c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f340a = true;

        /* renamed from: b  reason: collision with root package name */
        private Set f341b;

        /* renamed from: c  reason: collision with root package name */
        private Set f342c;

        public z1 a() {
            return new z1(this.f340a, this.f341b, this.f342c);
        }

        public b b(Set set) {
            this.f342c = new HashSet(set);
            return this;
        }

        public b c(Set set) {
            this.f341b = new HashSet(set);
            return this;
        }

        public b d(boolean z10) {
            this.f340a = z10;
            return this;
        }
    }

    public static z1 b() {
        return new b().d(true).a();
    }

    public boolean a(Class cls, boolean z10) {
        if (this.f338b.contains(cls)) {
            return true;
        }
        if (!this.f339c.contains(cls) && this.f337a && z10) {
            return true;
        }
        return false;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof z1)) {
            return false;
        }
        if (this == obj) {
            return true;
        }
        z1 z1Var = (z1) obj;
        if (this.f337a != z1Var.f337a || !Objects.equals(this.f338b, z1Var.f338b) || !Objects.equals(this.f339c, z1Var.f339c)) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return Objects.hash(Boolean.valueOf(this.f337a), this.f338b, this.f339c);
    }

    public String toString() {
        return "QuirkSettings{enabledWhenDeviceHasQuirk=" + this.f337a + ", forceEnabledQuirks=" + this.f338b + ", forceDisabledQuirks=" + this.f339c + '}';
    }

    private z1(boolean z10, Set set, Set set2) {
        this.f337a = z10;
        this.f338b = set == null ? Collections.EMPTY_SET : new HashSet(set);
        this.f339c = set2 == null ? Collections.EMPTY_SET : new HashSet(set2);
    }
}
