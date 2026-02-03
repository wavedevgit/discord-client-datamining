package s;

import android.hardware.camera2.params.InputConfiguration;
import android.os.Build;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c f49138a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final InputConfiguration f49139a;

        a(Object obj) {
            this.f49139a = (InputConfiguration) obj;
        }

        @Override // s.i.c
        public Object b() {
            return this.f49139a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof c)) {
                return false;
            }
            return Objects.equals(this.f49139a, ((c) obj).b());
        }

        public int hashCode() {
            return this.f49139a.hashCode();
        }

        public String toString() {
            return this.f49139a.toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b extends a {
        b(Object obj) {
            super(obj);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private interface c {
        Object b();
    }

    private i(c cVar) {
        this.f49138a = cVar;
    }

    public static i b(Object obj) {
        if (obj == null) {
            return null;
        }
        if (Build.VERSION.SDK_INT >= 31) {
            return new i(new b(obj));
        }
        return new i(new a(obj));
    }

    public Object a() {
        return this.f49138a.b();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        return this.f49138a.equals(((i) obj).f49138a);
    }

    public int hashCode() {
        return this.f49138a.hashCode();
    }

    public String toString() {
        return this.f49138a.toString();
    }
}
