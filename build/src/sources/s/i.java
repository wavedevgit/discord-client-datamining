package s;

import android.hardware.camera2.params.InputConfiguration;
import android.os.Build;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final c f49619a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final InputConfiguration f49620a;

        a(Object obj) {
            this.f49620a = (InputConfiguration) obj;
        }

        @Override // s.i.c
        public Object b() {
            return this.f49620a;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof c)) {
                return false;
            }
            return Objects.equals(this.f49620a, ((c) obj).b());
        }

        public int hashCode() {
            return this.f49620a.hashCode();
        }

        public String toString() {
            return this.f49620a.toString();
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
        this.f49619a = cVar;
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
        return this.f49619a.b();
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        return this.f49619a.equals(((i) obj).f49619a);
    }

    public int hashCode() {
        return this.f49619a.hashCode();
    }

    public String toString() {
        return this.f49619a.toString();
    }
}
