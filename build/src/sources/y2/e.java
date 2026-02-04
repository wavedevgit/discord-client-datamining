package y2;

import androidx.datastore.preferences.protobuf.p0;
import androidx.datastore.preferences.protobuf.w;
import androidx.datastore.preferences.protobuf.w0;
import androidx.datastore.preferences.protobuf.y;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class e extends w implements p0 {
    private static final e DEFAULT_INSTANCE;
    private static volatile w0 PARSER = null;
    public static final int STRINGS_FIELD_NUMBER = 1;
    private y.b strings_ = w.n();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends w.a implements p0 {
        /* synthetic */ a(c cVar) {
            this();
        }

        public a q(Iterable iterable) {
            k();
            ((e) this.f3844e).D(iterable);
            return this;
        }

        private a() {
            super(e.DEFAULT_INSTANCE);
        }
    }

    static {
        e eVar = new e();
        DEFAULT_INSTANCE = eVar;
        w.z(e.class, eVar);
    }

    private e() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void D(Iterable iterable) {
        E();
        androidx.datastore.preferences.protobuf.a.b(iterable, this.strings_);
    }

    private void E() {
        if (!this.strings_.C0()) {
            this.strings_ = w.u(this.strings_);
        }
    }

    public static e F() {
        return DEFAULT_INSTANCE;
    }

    public static a H() {
        return (a) DEFAULT_INSTANCE.j();
    }

    public List G() {
        return this.strings_;
    }

    @Override // androidx.datastore.preferences.protobuf.w
    protected final Object m(w.d dVar, Object obj, Object obj2) {
        w0 w0Var;
        switch (c.f53638a[dVar.ordinal()]) {
            case 1:
                return new e();
            case 2:
                return new a(null);
            case 3:
                return w.w(DEFAULT_INSTANCE, "\u0001\u0001\u0000\u0000\u0001\u0001\u0001\u0000\u0001\u0000\u0001\u001a", new Object[]{"strings_"});
            case 4:
                return DEFAULT_INSTANCE;
            case 5:
                w0 w0Var2 = PARSER;
                if (w0Var2 == null) {
                    synchronized (e.class) {
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
