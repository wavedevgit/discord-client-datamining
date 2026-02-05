package rc;

import android.os.Looper;
import com.google.android.exoplayer2.Format;
import mc.t1;
import rc.n;
import rc.u;
import rc.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface v {

    /* renamed from: a  reason: collision with root package name */
    public static final v f48780a;

    /* renamed from: b  reason: collision with root package name */
    public static final v f48781b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {

        /* renamed from: a  reason: collision with root package name */
        public static final b f48782a = new b() { // from class: rc.w
            @Override // rc.v.b
            public final void release() {
                v.b.a();
            }
        };

        static /* synthetic */ void a() {
        }

        void release();
    }

    static {
        a aVar = new a();
        f48780a = aVar;
        f48781b = aVar;
    }

    void a(Looper looper, t1 t1Var);

    int b(Format format);

    n c(u.a aVar, Format format);

    default b e(u.a aVar, Format format) {
        return b.f48782a;
    }

    default void d() {
    }

    default void release() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements v {
        a() {
        }

        @Override // rc.v
        public int b(Format format) {
            if (format.f11691z != null) {
                return 1;
            }
            return 0;
        }

        @Override // rc.v
        public n c(u.a aVar, Format format) {
            if (format.f11691z == null) {
                return null;
            }
            return new a0(new n.a(new l0(1), 6001));
        }

        @Override // rc.v
        public void a(Looper looper, t1 t1Var) {
        }
    }
}
