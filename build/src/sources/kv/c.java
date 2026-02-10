package kv;

import hk.b0;
import hk.c0;
import hk.j0;
import hk.j1;
import hk.q0;
import hk.s;
import java.io.InputStream;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c extends s implements j0 {

    /* renamed from: q  reason: collision with root package name */
    private static final c f35448q;

    /* renamed from: r  reason: collision with root package name */
    private static volatile q0 f35449r;

    /* renamed from: p  reason: collision with root package name */
    private c0 f35450p = c0.d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35451a;

        static {
            int[] iArr = new int[s.d.values().length];
            f35451a = iArr;
            try {
                iArr[s.d.NEW_MUTABLE_INSTANCE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35451a[s.d.NEW_BUILDER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35451a[s.d.BUILD_MESSAGE_INFO.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f35451a[s.d.GET_DEFAULT_INSTANCE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f35451a[s.d.GET_PARSER.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f35451a[s.d.GET_MEMOIZED_IS_INITIALIZED.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f35451a[s.d.SET_MEMOIZED_IS_INITIALIZED.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends s.a implements j0 {
        private b() {
            super(c.f35448q);
        }
    }

    /* renamed from: kv.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class C0503c {

        /* renamed from: a  reason: collision with root package name */
        static final b0 f35452a = b0.b(j1.b.f26248v, "", j1.b.f26250x, kv.a.H());
    }

    static {
        c cVar = new c();
        f35448q = cVar;
        s.C(c.class, cVar);
    }

    private c() {
    }

    private c0 H() {
        return this.f35450p;
    }

    public static b I() {
        return (b) f35448q.g();
    }

    public static c J(InputStream inputStream) {
        return (c) s.z(f35448q, inputStream);
    }

    public Map G() {
        return Collections.unmodifiableMap(H());
    }

    @Override // hk.s
    protected final Object j(s.d dVar, Object obj, Object obj2) {
        q0 q0Var;
        switch (a.f35451a[dVar.ordinal()]) {
            case 1:
                return new c();
            case 2:
                return new b();
            case 3:
                return s.x(f35448q, "\u0001\u0001\u0000\u0000\u0001\u0001\u0001\u0001\u0000\u0000\u00012", new Object[]{"flags_", C0503c.f35452a});
            case 4:
                return f35448q;
            case 5:
                q0 q0Var2 = f35449r;
                if (q0Var2 == null) {
                    synchronized (c.class) {
                        try {
                            q0Var = f35449r;
                            if (q0Var == null) {
                                q0Var = new s.b(f35448q);
                                f35449r = q0Var;
                            }
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                    return q0Var;
                }
                return q0Var2;
            case 6:
                return (byte) 1;
            case 7:
                return null;
            default:
                throw new UnsupportedOperationException();
        }
    }
}
