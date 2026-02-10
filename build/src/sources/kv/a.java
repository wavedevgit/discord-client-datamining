package kv;

import hk.j0;
import hk.q0;
import hk.s;
import hk.u;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends s implements j0 {

    /* renamed from: q  reason: collision with root package name */
    private static final a f35444q;

    /* renamed from: r  reason: collision with root package name */
    private static volatile q0 f35445r;

    /* renamed from: p  reason: collision with root package name */
    private u.b f35446p = s.k();

    /* renamed from: kv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0502a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f35447a;

        static {
            int[] iArr = new int[s.d.values().length];
            f35447a = iArr;
            try {
                iArr[s.d.NEW_MUTABLE_INSTANCE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f35447a[s.d.NEW_BUILDER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f35447a[s.d.BUILD_MESSAGE_INFO.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f35447a[s.d.GET_DEFAULT_INSTANCE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f35447a[s.d.GET_PARSER.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f35447a[s.d.GET_MEMOIZED_IS_INITIALIZED.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f35447a[s.d.SET_MEMOIZED_IS_INITIALIZED.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends s.a implements j0 {
        private b() {
            super(a.f35444q);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends s implements j0 {
    }

    static {
        a aVar = new a();
        f35444q = aVar;
        s.C(a.class, aVar);
    }

    private a() {
    }

    public static a H() {
        return f35444q;
    }

    public List G() {
        return this.f35446p;
    }

    @Override // hk.s
    protected final Object j(s.d dVar, Object obj, Object obj2) {
        q0 q0Var;
        switch (C0502a.f35447a[dVar.ordinal()]) {
            case 1:
                return new a();
            case 2:
                return new b();
            case 3:
                return s.x(f35444q, "\u0001\u0001\u0000\u0000\b\b\u0001\u0000\u0001\u0000\b\u001b", new Object[]{"constrainedValues_", c.class});
            case 4:
                return f35444q;
            case 5:
                q0 q0Var2 = f35445r;
                if (q0Var2 == null) {
                    synchronized (a.class) {
                        try {
                            q0Var = f35445r;
                            if (q0Var == null) {
                                q0Var = new s.b(f35444q);
                                f35445r = q0Var;
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
