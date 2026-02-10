package sc;

import android.os.Looper;
import com.google.android.exoplayer2.Format;
import nc.t1;
import sc.n;
import sc.u;
import sc.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface v {

    /* renamed from: a  reason: collision with root package name */
    public static final v f48053a;

    /* renamed from: b  reason: collision with root package name */
    public static final v f48054b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {

        /* renamed from: a  reason: collision with root package name */
        public static final b f48055a = new b() { // from class: sc.w
            @Override // sc.v.b
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
        f48053a = aVar;
        f48054b = aVar;
    }

    int a(Format format);

    default b b(u.a aVar, Format format) {
        return b.f48055a;
    }

    n c(u.a aVar, Format format);

    void e(Looper looper, t1 t1Var);

    default void d() {
    }

    default void release() {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements v {
        a() {
        }

        @Override // sc.v
        public int a(Format format) {
            if (format.f12307z != null) {
                return 1;
            }
            return 0;
        }

        @Override // sc.v
        public n c(u.a aVar, Format format) {
            if (format.f12307z == null) {
                return null;
            }
            return new a0(new n.a(new l0(1), 6001));
        }

        @Override // sc.v
        public void e(Looper looper, t1 t1Var) {
        }
    }
}
