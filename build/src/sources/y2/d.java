package y2;

import androidx.datastore.preferences.protobuf.h0;
import androidx.datastore.preferences.protobuf.i0;
import androidx.datastore.preferences.protobuf.p0;
import androidx.datastore.preferences.protobuf.q1;
import androidx.datastore.preferences.protobuf.w;
import androidx.datastore.preferences.protobuf.w0;
import java.io.InputStream;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d extends w implements p0 {
    private static final d DEFAULT_INSTANCE;
    private static volatile w0 PARSER = null;
    public static final int PREFERENCES_FIELD_NUMBER = 1;
    private i0 preferences_ = i0.d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends w.a implements p0 {
        /* synthetic */ a(c cVar) {
            this();
        }

        public a q(String str, f fVar) {
            str.getClass();
            fVar.getClass();
            k();
            ((d) this.f3956e).D().put(str, fVar);
            return this;
        }

        private a() {
            super(d.DEFAULT_INSTANCE);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class b {

        /* renamed from: a  reason: collision with root package name */
        static final h0 f54335a = h0.d(q1.b.f3859v, "", q1.b.f3861x, f.K());
    }

    static {
        d dVar = new d();
        DEFAULT_INSTANCE = dVar;
        w.z(d.class, dVar);
    }

    private d() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public Map D() {
        return F();
    }

    private i0 F() {
        if (!this.preferences_.i()) {
            this.preferences_ = this.preferences_.l();
        }
        return this.preferences_;
    }

    private i0 G() {
        return this.preferences_;
    }

    public static a H() {
        return (a) DEFAULT_INSTANCE.j();
    }

    public static d I(InputStream inputStream) {
        return (d) w.x(DEFAULT_INSTANCE, inputStream);
    }

    public Map E() {
        return Collections.unmodifiableMap(G());
    }

    @Override // androidx.datastore.preferences.protobuf.w
    protected final Object m(w.d dVar, Object obj, Object obj2) {
        w0 w0Var;
        switch (c.f54334a[dVar.ordinal()]) {
            case 1:
                return new d();
            case 2:
                return new a(null);
            case 3:
                return w.w(DEFAULT_INSTANCE, "\u0001\u0001\u0000\u0000\u0001\u0001\u0001\u0001\u0000\u0000\u00012", new Object[]{"preferences_", b.f54335a});
            case 4:
                return DEFAULT_INSTANCE;
            case 5:
                w0 w0Var2 = PARSER;
                if (w0Var2 == null) {
                    synchronized (d.class) {
                        try {
                            w0Var = PARSER;
                            if (w0Var == null) {
                                w0Var = new w.b(DEFAULT_INSTANCE);
                                PARSER = w0Var;
                            }
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                    return w0Var;
                }
                return w0Var2;
            case 6:
                return (byte) 1;
            case 7:
                return null;
            default:
                throw new UnsupportedOperationException();
        }
    }
}
